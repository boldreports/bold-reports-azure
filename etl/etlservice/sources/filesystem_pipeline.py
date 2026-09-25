import dlt
import pandas as pd
import yaml
import urllib.request
import json
import uuid

def normalize_json_keys(value):
    """Preserve JSON values while making object keys unique for DuckDB.
    DuckDB considers struct field names case-insensitively.  Keep the first
    spelling and suffix later case-insensitive collisions with _1, _2, etc.
    The input file is never changed; only the data passed to the pipeline is changed.
    """
    if isinstance(value, dict):
        normalized = dict()
        occurrences = dict()
        for key, child_value in value.items():
            normalized_key = str(key)
            comparable_key = normalized_key.casefold()
            occurrence = occurrences.get(comparable_key, 0)
            occurrences[comparable_key] = occurrence + 1
            if occurrence:
                normalized_key = normalized_key + "_" + str(occurrence)
            normalized[normalized_key] = normalize_json_keys(child_value)
        return normalized
    if isinstance(value, list):
        return [normalize_json_keys(item) for item in value]
    return value

def process_nested_json(json_data, parent_id=None, parent_key=None):
    """
    Process nested JSON recursively, creating separate tables for nested arrays
    and maintaining parent-child relationships via dlt_id and dlt_parent_id.
    
    Returns a dictionary where:
    - 'main_data': list of dicts for the main table
    - 'nested_tables': dict with table_name -> list of records mapping
    """
    result = dict()
    result['main_data'] = []
    result['nested_tables'] = dict()
    
    # Handle dict input (single object or dict of objects)
    if isinstance(json_data, dict):
        # Check if this is a dict of multiple top-level objects
        # Only consider it "multiple objects" if ALL values are lists/dicts (not a mix)
        has_nested_objects = False
        all_values_are_arrays_or_dicts = True
        has_any_array_or_dict = False
        
        for key, value in json_data.items():
            if isinstance(value, (list, dict)) and not isinstance(value, str):
                has_any_array_or_dict = True
            else:
                all_values_are_arrays_or_dicts = False
        
        # Only treat as "multiple objects" if we have mostly arrays/dicts and no scalars
        # (i.e., it's a dict of tables, not a single object with nested arrays)
        if has_any_array_or_dict and all_values_are_arrays_or_dicts and parent_key is None:
            has_nested_objects = True
        
        if has_nested_objects:
            # Multiple top-level objects - process each separately
            for obj_name, obj_data in json_data.items():
                processed = process_nested_json(obj_data, parent_id=None, parent_key=obj_name)
                
                # Add main data with table name
                if processed['main_data']:
                    if obj_name not in result['nested_tables']:
                        result['nested_tables'][obj_name] = []
                    result['nested_tables'][obj_name].extend(processed['main_data'])
                
                # Add nested tables
                for nested_table_name, nested_data in processed['nested_tables'].items():
                    full_table_name = obj_name + '__' + nested_table_name
                    if full_table_name not in result['nested_tables']:
                        result['nested_tables'][full_table_name] = []
                    result['nested_tables'][full_table_name].extend(nested_data)
        else:
            # Single object - process its fields
            main_record = dict()
            dlt_id = str(uuid.uuid4())
            
            for key, value in json_data.items():
                if isinstance(value, list) and len(value) > 0:
                    # Check if this is a list of dicts (nested array)
                    if isinstance(value[0], dict):
                        # This is a nested array - create child table
                        table_name = key
                        if parent_key:
                            table_name = parent_key + '__' + key
                        
                        if table_name not in result['nested_tables']:
                            result['nested_tables'][table_name] = []
                        
                        for item in value:
                            if isinstance(item, dict):
                                child_record = dict(item)
                            else:
                                child_record = dict()
                                child_record['value'] = item
                            child_record['dlt_parent_id'] = dlt_id
                            result['nested_tables'][table_name].append(child_record)
                    else:
                        # List of scalars - add as regular field
                        main_record[key] = value
                elif isinstance(value, dict):
                    # Flatten nested object completely into main record
                    for nested_key, nested_value in value.items():
                        if isinstance(nested_value, (dict, list)):
                            # Skip complex nested types
                            pass
                        else:
                            main_record[key + '_' + nested_key] = nested_value
                else:
                    # Regular scalar field
                    main_record[key] = value
            
            main_record['dlt_id'] = dlt_id
            if parent_id:
                main_record['dlt_parent_id'] = parent_id
            
            result['main_data'].append(main_record)
    
    elif isinstance(json_data, list):
        # Handle list input
        for idx, item in enumerate(json_data):
            if isinstance(item, dict):
                processed = process_nested_json(item, parent_id=parent_id, parent_key=parent_key)
                result['main_data'].extend(processed['main_data'])
                
                for table_name, table_data in processed['nested_tables'].items():
                    if table_name not in result['nested_tables']:
                        result['nested_tables'][table_name] = []
                    result['nested_tables'][table_name].extend(table_data)
            else:
                value_dict = dict()
                value_dict['value'] = item
                result['main_data'].append(value_dict)
    
    return result

def load_json_with_nested_tables(json_data, pipeline_name, destination, staging, dataset_name, main_table_name):
    """
    Load JSON data into multiple tables with proper parent-child relationships.
    """
    # Process the JSON recursively
    processed = process_nested_json(json_data)
    
    pipeline = dlt.pipeline(
        pipeline_name=pipeline_name,
        destination=destination,
        staging=staging,
        dataset_name=dataset_name,
    )
    
    # Load all tables: both main data and nested tables
    all_tables_to_load = dict()
    
    # If there's top-level main data, add it
    if processed['main_data']:
        all_tables_to_load[main_table_name] = processed['main_data']
    
    # Add all nested tables
    all_tables_to_load.update(processed['nested_tables'])
    
    # Load all tables
    for table_name, table_data in all_tables_to_load.items():
        if table_data and len(table_data) > 0:
            load_info = pipeline.run(table_data, table_name=table_name)
            print('Loaded table ' + table_name + ': ' + str(load_info))

# Main execution
filePath = ("{1}")
main_table_name = "{3}"
pipeline_name = "{0}_pipeline"
destination = '{6}'
staging = {7}
dataset_name = "{0}"
is_yaml = {5}
is_web = {9}
is_json = {8}

try:
    if(is_yaml):
        with urllib.request.urlopen(filePath) as file:
            loaded_data = yaml.safe_load(file)
    elif(is_web):
        with urllib.request.urlopen(filePath) as file:
            loaded_data = json.loads(file.read().decode("utf-8"))
    elif(is_json):
        with open("{1}") as f:
            json_data = json.load(f)
        loaded_data = json_data
    else:
        # Default: treat as JSON file
        with open("{1}") as f:
            loaded_data = json.load(f)
    # JSON only: normalize recursively in memory, preserving the source file.
    if is_json:
        loaded_data = normalize_json_keys(loaded_data)
    # Use the new nested JSON processing
    load_json_with_nested_tables(loaded_data, pipeline_name, destination, staging, dataset_name, main_table_name)
    
except Exception as e:
    print(f"Error processing JSON: {{str(e)}}")
    raise