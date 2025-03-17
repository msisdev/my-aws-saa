---
title: 090 RDS Read Replicas and Multi AZ
---

## Read Replica
- Up to 15 read replicas
- Within AZ / cross AZ / cross region
- Replication is async (eventually consistent)
- Replicas can be promoted to their own DB
- App must update the connection string


### Use Cases
- You have a production database
- You want to run a reporting

### Network Cost
Within same region, you don't pay fee




## Multi AZ (Disaster Recovery)
- SYNC replication
- One DNS name
- Increase availability
- Failover in case of loss of AZ / network/ instance / storage failure
- No manual intervention in app
- Not for scaling

Note: Read Replica can be setup as Multi AZ


## RDS: From Single-AZ to Multi-AZ
- Zero downtime operation (no need to stop the DB)

What happens
- A snapshot is taken
- A new DB is restored from snapshot in new AZ
- Sync between two DBs
