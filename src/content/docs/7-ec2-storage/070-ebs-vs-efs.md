---
title: 070 EBS vs EFS
---

## EBS
- one instance
- locked at AZ level
- gp2: IO increases when disk size increases
- gp3/io1: can increase IO independently

To migrate an EBS across AZ
- Take a snapshot
- Restore snapshot to another AZ
- EBS backup uses IO and you shouldn't run it while your app is using it

Root EBS will get terminated with EC2 instance by default (you can disable that)


## EFS
- Mount 100s of instances across AZ in region
- Only for Linux instances


## EBS vs EFS
Price point: EBS < EFS

EFS has storage tiers

Remember EBS vs EFS vs Instance Store
- Instance Store is physically attached to EC2 and when EC2 stops it will be lost.

