---
title: 066 EBS Multi-Attach
---

Only available for io1/io2 family

Attach same EBS to multiple EC2 instances in same AZ

Each insatnce has full r/w permission

Use case
- Higher app availability in clustered linux app
- app must manage concurrent write operations

Limit
- up to 16 EC2 instances
- cluster-aware file system (not XFS, EX4, ...)

