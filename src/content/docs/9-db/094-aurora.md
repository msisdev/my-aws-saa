---
title: 094 AWS Aurora
---


- AWS cloud optimized
- Automatically grows
- Failover is instantaneous.
- Cost +20% but more efficient

## High Availabililty and Read Scaling
6 copies across 3 AZ
- 4 is for write
- 3 is for read
- Self heading with peer-to-peer replication
- Storage is striped across 100s

One Aurora takes writes (master)

Automated failover

Up to 15 read replicas

Supports cross region replication



## Aurora DB Cluster Behavior
Writer endpoint
- Pointing to the master

Reader endpoint
- Load balance to read replica



## Aurora Features
- Automatic fail-over
- Backup, recovery
- Isolation, security
- Industry compliance
- Push-button scaling
- Auto patch, zero downtime
- Monitoring
- Routine maintenance
- Backtrack: point in time recovery
