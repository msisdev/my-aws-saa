---
title: Keyword
---

## 271 Amazon CloudWatch
### Amazon CloudWatch Metrics
Every services in AWS

Metric: variable to monitor
- belong to namespaces

Dimension: attribute of metric
- up to 30 dimensions per metric

Metrics have timestamps

CloudWatch dashboard

### CloudWatch Metric Streams
Stream CloudWatch metrics to a destination
- Amazon Kinesis Data Firehose
- 3rd party service providerse: Datadog, Dynatrace, New Relic, Splunk, Sumo Logic

Near-real-time delivery

Filter metrics to stream subset of them





## 272 CloudWatch Logs
Log group: usually an application

Log stream: instances within application, log files, containers

Can define log expiration

Send logs to
- S3
- Kinesis Data Streams
- Firehose
- Lambda
- OpenSearch

### Sources
- SDK, CloudWatch Logs Agent, CloudWatch Unified Agent
- Elastic Beanstalk
- ECS
- AWS Lambda
- VPC Flow Logs
- API Gateway
- CloudTrail based on filter
- Route53

### CloudWatch Logs Insights
Search and analyze log data stored in CloudWatch Logs

Can query multiple Log Groups, in different AWS accounts

It is a query engine, not real-time engine

### Export
#### S3 Export
Takes up to 12h

#### CloudWatch Logs Subscriptions
Real-time log events from CloudWatch Logs

Send to
- Kinesis Data Streams
- Kinesis Data Firehose
- Lambda
- Different AWS account (by id)
  - Destination access policy

Subscription filter
- filter logs to deliver


### CloudWatch Logs Aggregation
Multi account & multi region

CloudWatch Logs - Subscription Filter - Kinesis Data Streams - Kinesis Data Firehose - S3




## 275 CloudWatch Agent
For EC2
- Run a CloudWatch agent on EC2 to push log files

Can be setup on-premise

### Agent Types
CloudWatch Logs Agent
- old version
- can only send to CloudWatch Logs

### CloudWatch Unified Agent
- collect additional system-level metrics: RAM, processes
- centralized configuration using SSM parameter store

#### Metrics
CPU, Disk, RAM, netstat, proesses, swap space

EC2 out-of-the box metrics: disk, CPU, network




## 276 CloudWatch Alarms
Trigger notification from metric

### Targets
EC2
- stop, terminate, reboot, recover

Auto scaling
- trigger auto scaling

SNS
- send notification

### Composite Alarms
Monitor state of multiple other alarms

AND or OR condition

### EC2 instance recovery
Check status
- instance status
- system status
- EBS status

Recovery
- same private, public, elastic IP, metadata, placement group




## 278 Amazon EventBridge (formerly CloudWatch Events)
Schedule cron job
- trigger lambda
- send SQS, SNS

Event pattern: react to a service doing something
- on IAM Root User Sign in event, push email notification on SNS topic

### Rules
Source
- EC2
- CodeBuild
- S3
- Trusted Advisor
- CloudTrail
- schedule/cron

Filter events

Generate, send JSON to destinations
- Lambda, AWS Batch, ECS Task
- SQS, SNS, Kinesis Data Streams
- Step functions, CodePipeline, CodeBuild
- SSM, EC2 Actions

### Event Bus
Get event from sources
- Default Event Bus: AWS Services
- Partner Event Bus: zendesk, Datadog
- Custom Event Bus: custom app

Can be accessed by other AWS accounts

Archive events

Replay archived events

### Schema Registry
Generates code for your app specifying how data is structured in the event bus

Schema can be versioned

### Resource-based Policy
Manage permission for a specific Event Bus

Allow/deny events from another AWS account/region

Use case
- aggregate all events from AWS Organization in a single AWS account/region




## 280 CloudWatch Insights
### CloudWatch Container Insights
For
- ECS
- EKS
- Kubernetes platform on EC2
- Fargate (ECS, EKS)

Container Insights = Containerized CLoudWatch Agent (in EKS and Kubernetes)

### CloudWatch Lambda Insights
Collect metrics including system-level data

Lambda Insights = Lambda Layer

### CloudWatch Contributor Insights
Create time series that display contributor data
- find top N contributors
- total # of unique contributors, their usage

Use case
- Find bad hosts
- Identify the heavy network users
- Find URLs that generate the most errors

Built-in rules to analyze metrics from other AWS services

VPC FLow Logs -> CloudWatch Logs -> CloudWatch contributor insights -> Top 10 IP addresses

### CloudWatch Application Insights
Dashboard that show potential problems with app to help isolate ongoing issues

Powered by SageMaker

Enhanced visibility into your app health to reduce time to troubleshoot

Alerts are sent to Amazon EventBridge and SSM OpsCenter

### Summarize
CloudWatch Container Insights
- ECS, EKS, Kubernetes on EC2, Fargate
- Metrics, logs

CloudWatch Lambda Insights
- detailed metrics

CloudWatch contributors Insights
- Find top N contributos through CloudWatch Logs

CloudWatch Application Insights
- Dashboard to troubleshoot your app, AWS services




## 281 AWS CloudTrail
Enabled by default

Get history of events, api calls within your AWS account
- console
- SDK
- CLI
- AWS services

Can put logs into
- CloudWatch Logs
- S3

If there is a problem, investigate CloudTrail

### CloudTrail Events
Management events
- operations that are done on resources
- ex) IAMAttachRolePolicy, EC2 CreateSubnet
- can separate Read Events from Wite Events

Data events
- data events are not logged by default
- S3 object level activity: can separate read/write events
- Lambda fuction execution activity

CloudTrail Insights Events

### CloudTrail Insights
Detect unusual activity in your account

Continuously analyze write events (management events) to detect unusual patterns

Events are stored for 90 days
- log them in S3 and use Athena




## 283 CloudTrail and EventBridge
Use EventBridge to intercept API calls
- User DeteTable API call - DynamoDB Log API call - CloudTrail - EventBridge - SNS

User - IAM - CloudTrail - EventBridge - SNS




## 284 AWS Config
Audit and record compliance of AWS resources
- Receive alerts (SNS) for changes
- Store data into S3 (and use Athena)

Per-region service but can be aggregated across region/account

Use case
- Find unrestricted SSH access to my security group
- Find buckets that have public access
- Get ALB configuration changes over time

### AWS Config Rule
Use AWS Config to evaluate the configuration settings of your AWS resources.
- does each EBS disk is of type gp2?
- is each EC2 is t2.micro?

Doesn't do anything, just gives you overview

### AWS Config Resource
![diagram](/24/284-config.png)
- View compliance of resources
- View configuration of the resource over time
- View CloudTrail API calls of a resource over time

### Config Rules - Remediation
Auto remediation of non-compliant resources using SSM (Systems manager) Automation Document

You can set Remediation Retries

### Config Rules - Notification
Non-compliant event
- use EventBridge to trigger notifications
- resource - AWS Config - EventBridge - Lambda, SNS, SQS

All events (configuration change, compliance state)
- use SNS
- resource - AWS Config - SNS - Admin




## 286 CloudTrail vs CloudWatch vs Config *exam*
CloudWatch
- Performance monitoring & dashboard
- Event, alert
- Log Aggregation, analysis

CloudTrail
- Record API calls within your account
- Define trails for specific resources
- Global service

Config
- Record config changes
- Evaluate resources, compliance rules
- Get timeline of changes, compliances

### For ELB
CloudWatch
- Monitor incoming connections
- Visualize error codes
- Performance dashboard

CloudTrail
- Track who made changes with load balancer API calls

Config
- Track security group rules
- Track config changes
- Ensure SSL
