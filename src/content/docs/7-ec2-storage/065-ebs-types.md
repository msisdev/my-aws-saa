---
title: 065 EBS Volume Types
---

6 Types
- gp2/gp3
- io1/io2
- stl
- scl

## General Purpose SSD
- Cost effective
- low-latency

gp2
- previous version
- size of the volume and OPS are linked

gp3
- new version
- can increase IOPS and throughput independently
- 3000~16000 IOPS
- 125~1000 MiB/s


## Provisioned IOPS (PIOPS) SSD
- Critical business apps
- Great for DB

io1 (~16TiB)
- can increase PIOPS independently from storage size
- Max PIOPS: 64,000 for Nitro EC2, 32,000 for other

io2 Block Express (~64TiB)
- sub-millisecond latency
- Max PIOPS: 256,000

Supports EBS Multi-attach


## Hard Disk Drives (HDD)
- cannot be a boot volume
- ~16TiB

st1 Throughput optimized HDD
- big data, data warehouse, log processing
- Max throughput 500 MiB/s
- Max 500 IOPS

sc1 Cold HDD
- for data that is infrequently accessed
- when lowest cost is important
- Max throughput 250 MiB/s
- Max 250 IOPS

