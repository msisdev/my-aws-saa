---
title: 060 Snapshot
---

- A backup of EBS at a point in time
- Not necessary to detach volume to make snapshot but recommended
- Can copy snapshot across AZ or Region
- Can create volume from snapshot across AZ

## EBS Snapshot Features
Snapshot archive
- 'archive tier' is 75% cheaper
- takes 24 to 72 hours for restoring the archive

Recycle bin
- rules to retain deleted snapshots
- 1 day to 1 year

Fast snapshot restore (FSR)
- Force full init of snapshot without latency
- expensive

