---
title: Keyword
---

## 235 Choosing the Right Database

### DB Types
RDBMS (SQL, OLTP)
- RDS, Aurora

NoSQL
- DynamoDB, ElastiCache, Neptune, DocumentDB, Keyspaces

Object storage
- S3, Glacier

Data warehouse
- Redshift (OLAP), Athena, EMR

Search
- OpenSearch (JSON)

Graph
- Neptune

Leger
- Quantum Ledger Database

Time series
- Timestream



## 236 RDS Summary
Managed
- PostgreSQL
- MySQL
- Oracle
- SQL Server
- DB2
- MariaDB
- Custom

Provisioned RDS instance
- Size
- EBS volume type & size

Auto scaling

Read replica, multi AZ

Security
- IAM
- Security groups
- KMS
- SSL

Automated backup, point-in-time restore (up to 35 days)

Manual DB snapshot

Manual/scheduled maintenance (with downtime)

IAM authentication
- Secrets Manager

Use case
- RDBMS, OLTP
- SQL queries
- transactions




## 237 Aurora Summary
PostgreSQL, MySQL

Storage
- 6 replica
- 3 AZ
- auto scaling

Compute
- Cluster across multiple AZ
- auto scaling

Custom endpoints

Aurora serverless

Aurora Global
- up to 16 read instances in each region

Aurora machine Learning
- perform ML using Sagemaker & Comprehend

Aurora Database Cloning




## 238 ElastiCache Summary
Redis, Memcached

Must provision EC2 type

Clustering (Redis), Multi AZ read replica (sharding)

Security
- IAM
- Security groups
- KMS
- Redis Auth

Backup, snapshot, point-in-time restore




## 239 DynamoDB Summary
Capacity mode
- provisioned (optional auto scaling)
- on-demand

May replace ElastiCache

Highly available, multi AZ

Read & write, transaction

DAX cluster for read cache

Security by IAM

DynamoDB Streams: Event processing
- lambda
- Kinesis Data Streams

Global table
- active-active setup (read/write in anywhere)

Automated backup

Expot/import with S3





## 250 S3 Summary
Object storage

Security
- IAM
- bucker policy
- ACL
- Access points
- object lambda
- CORS
- object/vault lock

Encryption
- SSE-S3
- SSE-KMS
- SSE-C
- client side
- TLS




## 240 DocumentDB
replication across 3 AZ



## 241 Neptune
GraphDB

3 AZ, up to 15 read replica

Use for
- Knowledge graph
- fraud detection
- recommendation engine
- social networking

### Streams
Real-time ordered sequence of changes in graph data

No duplicates

HTTP REST API

Use case
- send notification after change
- sync with another storage
- replicate across regions





## 242 Keyspaces
Apache Cassandra

Tables are replicated 3 times across multi AZ

Cassandra Query Language (CQL)

Capacity
- On-demand
- provisioned

Use
- IoT device info
- time-series




## 243 QLDB
Quantum Ledger Database

A ledger is a book recording financial transactions

Replication across 3 AZ

Review history of all changes made to your data

Immutable: cannot be removed, modified, cryptographically verifiable

No decentralization




## 244 Timestream
Serverless time series DB

### Architecture
Push into Timestream
- AWS IoT
- Lambda
- Prometheus
- telegraf
- Kinesis Data Analytics for Apache Flink

Pull from Timestream
- Amazon QuickSight
- SageMaker
- Grafana
- Any JDBC
