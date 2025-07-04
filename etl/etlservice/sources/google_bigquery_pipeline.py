from typing import List

import dlt
from dlt.sources.credentials import ConnectionStringCredentials
from dlt.common import pendulum
from sqlalchemy import create_engine
from sql_database import sql_database, sql_table


def load_standalone_table_resource() -> None:
    """Load a few known tables with the standalone sql_table resource"""
    pipeline = dlt.pipeline(
        pipeline_name="{0}base", destination='{3}', dataset_name="{0}"
    )

    engine = create_engine('bigquery://{2}', credentials_path='{1}')
    table_names = "{4}".split(",")  # Split input string by comma
    schema = "{5}"  # Assign schema once

    for table_name in table_names:
        table_name = table_name.strip()  # Remove any extra spaces
        table = sql_table(engine, table=table_name, schema=schema)
        info = pipeline.run(table, write_disposition="merge")


if __name__ == "__main__":

    # Load tables with the standalone table resource
     load_standalone_table_resource()