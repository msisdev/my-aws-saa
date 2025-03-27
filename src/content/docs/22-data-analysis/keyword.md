--- 
title: Keyword
---

## 245 Athena
Serverless query service in S3

Supports
- CSV, JSON, ORC, Avro, Parquet

Commonly used with QuickSight

Use case
- business intelligence
- analytics, reporting, analyze
- query VPC flow logs, ELB logs
- CloudTrail trails

Exam keyword
- analyze data in S3
- serverless SQL

### Performance Improvement
Use columnar data type (less scan)
- Apache Parquet/ORC

Use Glue to convert your data into Parquet/ORC

Compress data for smaller retrieval
- bzip2, gzip, lz4, ...

Partition datasets in S3
- organize with slashes

Use larger files to minimize overhead

### Federated Query
Run SQL across relational, non-relational, object and custom data sources

AWS/On-Premise

Data Source Connector
- Runs on AWS Lambda

Store the results in S3




## 247 Redshift
Based on PostgreSQL but not for OLTP

OLAP
- online analytical processing

Columnar data storage, parallel query engine

Pay on instances provisioned

SQL interface

Integrate with BI tools
- QuickSight
- Tableau

vs Athena
- Faster query/join/aggregation (by index)

### Redshift Cluster
Leader node
- query planning
- result aggregation

Compute node
- perform query
- send result

May use reserved instances

### Snapshot & DR
Multi AZ mode

Point-in-time backups with S3

Snapshot is incremental (only save changes)

May restore snapshot into a new cluster

Automated: scheduled, or manual

### Loading data
Kinesis Data Firehose - S3 - Redshift Cluster
- Copy data from S3 using COPY command: `copy customer from 's3://mybucket/mydata' iam_role 'arn:aws:iam::0123456789012:role/MyRedshiftRole'`

EC2 instance (JDBC driver) - Redshift cluster
- Data in large batches

### Redshift Spectrum
Query data that is already in S3 without loading

Must have a Redshift cluster

Query is submitted to Redshift spectrum nodes





## 248 Amazon OpenSearch
Search any field even partial matches

Use OpenSearch as complement to another DB

Managed/Serverless cluster

Does not natively support SQL (plugin)

Ingestion from
- Kinesis Data Firehose
- AWS IoT
- CloudWatch logs

Security
- Cognito
- IAM
- KMS, TLS

Dashboard visualization

### with DynamoDB
CRUD -> DynamoDB -> DynamoDB Stream -> Lambda -> OpenSearch

Setup external API to search, retrieve items

### with CloudWatch Logs
CloudWatch Logs -> Subscription Filter -> Lambda (real time) or Kinesis Data Firehose (near real time) -> OpenSearch

### Kinesis Data Streams & Firehose
Kinesis Data Streams - Kinesis Data Firehose - OpenSearch

Kinesis Data Streams - Lambda - OpenSearch




## 249 EMR
Elastic MapReduce

Helps creating Hadoop clusters

Hundreds of EC2 instances

Bundled with
- Apache Spark
- HBase
- Presto
- Flink

Auto scaling, with Spot instances

Use cases
- data processing, ML, web indexing

### Node types
Master node
- manage cluster
- coordinate
- health check
- long running

Core node
- run tasks
- store data
- long running

Task node (optional)
- just to run tasks
- usually Spot instance

Purchase option
- On-demand: reliable
- Reserved: cost savings
- Spot instances: cheaper, less reliable

Long-running cluster or transient (temporary) cluster




## 250 QuickSight
Serverless ML-powered business intelligence service to create interactive dashboards

Use cases
- business analytics
- visualization
- ad-hoc analysis

Integrated with
- RDS, Aurora, Athena, Redshift, S3

In-memory computation using SPICE engine

Enterprise edition has Column-Level Security (CLS)

### QuickSight Integration
Data sources
- RDS, Aurora, **Redshift**, **Athena**, S3, OpenSearch, Timestream

3rd party
- Salesforce, Jira
- teradata
- On-premise DB (JDBC)

Imported file (SPICE engine)
- xlsx, csv, json, tsv, elf & clf

### Dashboard & Analysis
Define users (standard) & groups (enterprise)

A dashboard is a read-only snapshot

Share analysis/dashboard with Users or Groups

To share dashboard, publish it

With dashboard, users can see the underlying data




## 251 Glue
Serverless Extract Transform Load (ETL) service

Useful to prepare and transform data for analytics

S3, RDS -> Glue ETL -> Redshift Data Warehouse

### Convert data into Parquet
S3 -> (CSV) -> Glue ETL -> (Parquet) -> S3 -> Athena

Automate with
- S3 event notification
- Lambda or EventBridge triggers Glue ETL job

### Glue data catalog
S3, RDS, DynamoDB, JDBC -> AWS Glue Data Crawler -> (Writes Metadata) -> AWS Glue Data Catalog -> Athena, Redshift Spectrum, Amazon EMR

### Things to know
Glue Job Bookmarks
- prevent re-processing old data

Glue Elastic Views
- combine/replicate data across multiple data stores
- No custom code
- Virtual table (materialized view)

Glue DataBrew
- clean/normalize data using pre-built transformation

Glue Studio
- GUI to create/run/mmonitor ETL jobs

Glue Streaming ETL
- built on Apache Spark Structured Streaming
- compatible with Kinesis Data Streaming, Kafka, MSK




## 252 AWS Lake Formation
Data Lake
- central place to have all data for analytics

Blueprints out of the box
- S3, RDS, RDBMS, NoSQL

Fine-grained access control to app (row/column level)

Built on top of AWS Glue

### Centralized Permission




## 253 Kinesis Data Analytics for SQL App
Source
- Kinesis Data Streams
- Kinesis Data Firehose
- S3: reference data

Sinks
- Kinesis Data Streams
  - Lambda
  - EC2
- Kinesis Data Firehose
  - S3
  - Redshift (COPY through S3)

### Kinesis Data Analytics for SQL Application
Real time analyrics on
- Kinesis data stream
- Firehose

Add reference data from S3 to enrich streaming data

Auto scaling

Output
- Kinesis data stream
- Firehose

Use casees
- time series analytics
- real time dashboard
- real time metrics

### Kinesis Data Analytics for Apache Flink
Use Flink (Java, Scala, SQL) to process/analyze streaming data

Source
- Kinesis Data Streams
- Amazon MSK
- Flink does not read from Firehose

Run any Apache Flink app
- auto provisioning, parallel computation, scaling
- backups (checkpoints, snapshots)
- Use any Apache Flink programming features



## 255 Amazon Managed Streaming for Apache Kafka
Alternative to Amazon Kinesis

Managed
- manage clusters
- manage broker nodes, zookeeper nodes
- deploy cluster in your VPC, multi AZ
- store data in EBS

MSK serverless
- scale compute, storage

### at a high level
Producers
- Kinesis
- IoT
- RDS

Consumers
- EMR
- S3
- SageMaker
- Kinesis
- RDS

### vs Kinesis Data Streams
| Kinesis Data Streams | Amazon MSK |
|----------------------|------------|
| ~ 1MB  message       | 1MB default, configure for higher |
| Shards               | Topics with partitions |
| Shard splitting & merging | Can only add partitions to topic |
| TLS                  | Plaintext or TLS |
| KMS                  | KMS        |

### Consumers
- Kinesis Data Analytics for Apache Flink
- AWS Glue
- Lambda
- Apps on EC2, ECS, EKS





## 256 Big Data Ingestion Pipeline
How to build ingestion pipeline...
- serverless
- real time
- transform data
- query, SQL
- create report into S3
- load into warehouse
- dashboards

### Design
![diagram](/22/256-pipeline.png)

IoT core
- harvest data

Kinesis
- real time data collection

Firehose
- deliver data to S3 in near real time (1 minute)

Lambda
- help Firehose with data transformation

S3 ingestion bucket
- trigger notification to SQS

Lambda
- subscribe to SQS

Athena
- serverless SQL
- store result in S3

S3 reporting bucket
- 