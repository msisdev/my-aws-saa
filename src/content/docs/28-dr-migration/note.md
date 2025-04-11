---
title: Note
---

## 354 AWS Disaster Recovery
What kind of disaster recovery?
- Transitional DR: On-premise -> On-premise
- Hybrid recovery: Onp-remise -> Cloud
- Region -> region

![RPO and RTO](/28/rpo-rto.png)

Terms
- RPO: Recovery Point Objective
- RTO: Recovery Time Objective

### Strategy
- Backup & Restore
- Pilot light
- Warm standby
- Hot site / Multi site

#### Backup and Restore (High RPO)
Send data to cloud
- AWS Storage Gateway
- AWS Snowball

Store data
- S3
- Glacier

Schedule snapshot
- EBS
- Redshift
- RDS

#### Pilot Light
A small version of app is always running
- for critical core
- similar to backup & restore
- faster than backup & restore

#### Warm Standby
Full system is up and running at minimum size
- Route with Route 53
- Data replication from Master DB to RDS slave

#### Multi Site / Hot Site Approach
Full production scale app is running
- very low RTO (expensive)

#### All AWS Multi Region
- Route 53
- Aurora Global

### Disaster Recovery Tip
Backup
- Snapshot: EBS, RDS
- Regular push to: S3, S3 IA, Glacier, ..
- On-premise: Snowball, Storage Gateway

High availability
- Route 53
- Multi AZ: RDS, ElastiCache, EFS, S3
- Site-to-Site VPN as a recovery for Direct Connect

Replication
- RDS replication, AWS Aurora, global database
- On-premise -> RDS
- Storage Gateway

Automation
- CloudFormation, Elastic Beanstalk
- CloudWatch
- AWS Lambda for custom automation

Chaos
- Netflix "simian-army" randomly terminating EC2





## 355 Database Migration Service (DMS)
Support
- Homogeneous (Oracle to Oracle)
- Heterogeneous (MSSQL to Aurora)

CDC
- Continuous data replication

Requires EC2

### Sources and Targets
Sources
- On-premise or EC2 DB
- Azure SQL Database
- Amazon RDS
- S3
- DocumentDB

Target
- On-premise or EC2 DB
- RDS
- Redshift, DynamoDB, S3
- OpenSearch
- ...

### Schema Conversion Tool (SCT)
OLTP