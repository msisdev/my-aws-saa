---
title: 097 RDS Backup and Monitoring
---

## RDS Backup
Automated:
- Daily full backup
- Transaction logs are backed-up every 5 min
- Restore to any point in time
- 1-35 days of retension

Manual (snapshot):
- by user

Trick: If you stop RDS database, you will still pay for storage. You should snapshot & restore instead


### RDS, Aurora Restore Option
