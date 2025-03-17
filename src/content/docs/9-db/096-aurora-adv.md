---
title: AWS Aurora Advanced
---

## Auto Scaling
When replica is added, Reader endpoint is extended for the new replica.


## Custom Endpoints
Define a subset of Aurora instances (read replicas) as a custom endpoint

ex) Run analytical queries on specific replicas


## Aurora Serverless
Automated DB instantiation, auto scaling based on actual usage

Good for infrequent or unpredictable workloads

No capacity planning needed

Pay per second can be more cost-effective


## Global Aurora
Aurora cross region read replicas

Useful for DR

How it works
- 1 Primary region
- Up to 5 secondary regions
- Up to 16 read replicas per secondary region

Property
- Replication lag is less than 1 sec
- Promoting another region has Recovery Time Objective < 1 min
- Typicall cross-region replication takes less than 1 second

> Recovery Time Objective (RTO) is the maximum acceptable amount of time for restoring a network or application and regaining access to data after an unplanned disruption


## Aurora Machine Learning
Integration between Aurora and AWS ML services
- SageMaker
- Comprehend

Use cases
- fraud detection, ads targeting, sentiment analysis, product recommendations