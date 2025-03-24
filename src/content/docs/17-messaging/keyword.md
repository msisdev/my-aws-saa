---
title: Keyword
---

## 184 AWS Messaging
Application communication pattern
1. Synchronous communication
2. Asynchronous communication




## 185 SQS
Unlimited throughput

Retention: default 4, max 14 days

256KB per message

Can have duplicate message (at least one delivery, occasionally)

Can have out of order message (best effort ordering)

Consumer
- EC2
- AWS Lambda

Poll: up to 10 messages

### SQS with Auto Scaling Group (ASG)
SQS -> CloudWatch Metric (Queue Length) -> CloudWatch Alarm -> Auto Scale

### SQS to decouple
Example: Video processing

1. FE: request
2. SQS
3. BE: process video
4. S3: insert

### SQS Security
Encryption
- In-flight (HTTPS)
- At-rest (KMS keys)
- Client-side

Access control
- IAM policy

SQS access policy
- cross-account access to SQS



## 187 SQS Message Visibility Timeout
If a message is not processed within the visibility timeout, it will be processed twice.

A consumer could call the ChangeMessageVisibility API to get more time




## 188 SQS Long Polling
A consumer can long poll if the queue is empty

May reduce latency

Between 1-20 second




## 189 SQS FIFO Queue
Limit
- 300 msg/s
- 3000 msg/s (batching)

Exactly-once send capability





## 190 SQS with Auto Scaling Group (ASG)
1. CloudWatch Metric (Queue length)
2. loudWatch Alarm
3. Auto Scaling Group

### Use case
If the load is too big, some transactions may be lost
- Use SQS as a buffer to DB writes

Decouple between application tiers
- FE - SQS - BE




## 191 Amazon Simple Notification Service (SNS)
Pub/Sub
- Send one message to many receivers

### How to publish
Topic Publish (SDK)

Direct Publish (mobile app SDK)

### Security
Encryption
- in-flight (HTTPS)
- at-rest (KMS)
- client-side

Access Control
- IAM policy

SNS Access Policy
- cross-account access to SNS topic
- allow other services (S3, etc) to write into SNS topic




## 192 SNS/SQS Fan Out
Fully decoupled, no data loss

SQS
- data persistetnce
- delayed processing
- retries of work
- ability to add more SQS subscribers

### S3 Event
You can have only one rule per same combination of:
- event type (e.g. object create)
- prefix (e.g. images/)

### SNS to S3 througgh Kinesis Data Firehose (KDF)
Service -> SNS Topic -> KDF -> S3

### FIFO Topic
Service -> SNS FIFO Topic -> Many SQS FIFO Queues

### Mesage Filtering
Filter policy
- State: placed | cancelled | declined

Service -> SNS -> Many SQS Queues with different filter policies



## 194 Amazon Kinesis
Collect, process and analyze streaming data in real-time
- logs
- metrics
- website clickstreams

Kinesis Data Streams
- capture, process and store

Kinesis Video Streams
- capture, process and store

Kinesis Data Firehose
- store

Kinesis Data Analytics
- analyze, SQL or Apache Flink





## 195 Amazon Kinesis Data Streams
Data -> Producer -> Kinesis Data Streams -> Consumers

Retention up to 365 days

Ability to reprocess

Data can't be deleted from Kinesis

Data up to 1MB

Data ordering within same Partition ID

Encryption: at-rest, in-flight

Kinesis Producer Library (KPL)
- optimized producer application

Kinesis Client Library (KCL)
- optimized consumer application

### Capacity Mode
Provisioned mode
- Provision # of shards
- Each shard = 1MB/s in, 2MB/s out
- Scale manually
- Pay per shard provisioned per hour

On-demand mode
- No provision
- Default capacity 4MB/s
- Scale automatically
- Pay per stream/hour & data in+out

*why* Choose Kinesis Data Stream over SNS, SQS




## 197 Amazon Data Firehose
Auto scaling

CSV, JSON, Parquet, Avro, Raw text, Binary data

### vs Kinesis Data Streams
Kinesis Data Streams
- streaming data
- producer & consumer
- real-time
- provisioned/on-demand
- up to 365 days
- replay capability

Amazon Data Firehose
- load streaming data into S3, ...
- Fully managed
- near real-time
- auto scaling
- no storage
- no replay capability




## 199 SQS vs SNS vs Kinesis
SQS
- Pull data
- Data is deleted after being consumed
- Can have as many consumers as we want
- No need to provision throughpu
- FIFO queues
- Invisidual message delay capability

SNS
- Push data
- Data is not persisted
- Pub/Sub
- No need to provision throughpu
- SNS + SQS = fan-out
- FIFO capability for SQS FIFO

Kinesis
- Pull data
- Push data (Enhanced fan-out)
- Can replay data
- For real-time big data, analytics, ETL
- Ordering at the shard level
- Data expires after X days
- Provisioned/On-demand
