---
title: 056 EC2 Hibernate
---

[aws docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html)

What Hibernate does:
- In-memory state is preserved
- Insatnce boot is much faster
- RAM state is written to a file in root EBS
- root EBS must be encrypted

Use case:
- Long-running process
- Services that take time to initialize

Good to know
- RAM size must be less than 150GB
- not supported for bare metal instances
- root volume must be EBS, encrypted
- Available for On-demand, Reserved and Spot
- Max hibernate 60 days
