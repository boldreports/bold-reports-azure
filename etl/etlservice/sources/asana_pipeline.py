import dlt
import pandas as pd
import urllib.request
import json
from urllib.parse import urlencode

ASANA_TOKEN = "{0}"
PROJECT_ID = "{1}"
schema_name = "{2}"          
table_name = "{3}"
workspace_id = "{5}"
task_id="{6}"
opt_fields="{7}"
params = {{}}

if table_name.lower() == "projects":
    endpoint = "workspaces/{5}/projects"
elif table_name.lower() == "users":
    endpoint = "users"
elif table_name.lower() == "teams":
    endpoint = "organizations/{5}/teams"
elif table_name.lower() == "tags":
    endpoint = "tags"
elif table_name.lower() == "tasks":
    endpoint = "projects/{1}/tasks"
elif table_name.lower() == "sections":
    endpoint = "projects/{1}/sections"
elif table_name.lower() == "stories":
    endpoint = "tasks/{6}/stories"
else:
    print(" Unsupported resource type")
    exit()

ALLOWED_OPT_FIELDS = {{
    "gid", "resource_type", "resource_subtype", "name",
    "completed", "completed_at", "completed_by",
    "created_at", "modified_at",
    "due_on", "due_at", "start_on",
    "assignee", "assignee_status",
    "approval_status",
    "notes",
    "memberships",
    "projects",
    "tags",
    "followers",
    "parent",
    "num_subtasks",
    "custom_fields",
    "dependencies",
    "dependents",
    "permalink_url",
    "workspace",
    "hearted",
    "likes"
}}

if opt_fields:
    requested_fields = {{f.strip() for f in opt_fields.split(",") if f.strip()}}
    disallowed_fields = requested_fields - ALLOWED_OPT_FIELDS
    if disallowed_fields:
        raise ValueError(f"opt_fields contains disallowed field names: {{disallowed_fields}}")
    params["opt_fields"] = ",".join(requested_fields)

url = f"https://app.asana.com/api/1.0/{{endpoint}}"

if params:
    url += "?" + urlencode(params)

req = urllib.request.Request(url)
req.add_header("Authorization", "Bearer {0}")

with urllib.request.urlopen(req) as response:
    response_data = response.read()
    data = json.loads(response_data)

tasks = data.get("data", [])
df = pd.DataFrame(tasks)

records = df.to_dict(orient="records")

pipeline = dlt.pipeline(
    pipeline_name="{2}_pipeline",       
    destination="{4}",                 
    dataset_name="{2}"              
)

load_info = pipeline.run(records, table_name="{3}")

print("Data written to DuckDB")
