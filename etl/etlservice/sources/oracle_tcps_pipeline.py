from typing import List

import dlt
from dlt.sources.credentials import ConnectionStringCredentials
from dlt.common import pendulum
from sqlalchemy import create_engine

from sql_database import sql_database, sql_table
import time

LOCK_TEXTS = (
    "Could not set lock on file",
    "Conflicting lock is held",
)


def run_when_duckdb_is_free(
    pipeline,
    source_table,
    table_name: str,
    max_wait_seconds: int = 20,
    retry_every_seconds: int = 3,
):
    start = time.time()

    while True:
        try:
            return pipeline.run(
                [source_table],
                write_disposition="merge",
                table_name=table_name,
            )

        except Exception as ex:
            msg = str(ex)

            if any(t in msg for t in LOCK_TEXTS):
                elapsed = int(time.time() - start)

                if elapsed >= max_wait_seconds:
                    raise TimeoutError(
                        "DuckDB lock not released"
                    ) from ex

                time.sleep(retry_every_seconds)
                continue

            raise


def load_standalone_table_resource() -> None:
    """Load Oracle tables using TCPS connection"""

    pipeline = dlt.pipeline(
        pipeline_name="{0}base",
        destination="{3}",
        staging={4},
        dataset_name="{0}",
    )

    # Oracle TCPS Descriptor - Connection string built with service name and TCPS protocol
    {5}

    # Define tables using the TCPS connection string
{1}

    table_info = {2}

    # Run the resources together
    for source_table, custom_name in table_info:
        info = run_when_duckdb_is_free(
            pipeline,
            source_table,
            custom_name,
            max_wait_seconds=60,
            retry_every_seconds=3,
        )
        print(info)

    print(info)


if __name__ == "__main__":
    load_standalone_table_resource()
