---
title: 051 placement groups
---

## [Strategies](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-strategies.html)

### Cluster

- single AZ (not single rack)
- high per-flow throughput limit for TCP/IP

For
- Apps that benefit from low network latency, high network throughput or both
- when the majority of the traffic is between the instances in group

Limit:
- using the same instance type for all instances is recommended.



### Partition
spread across different partition

- each partition within a placement group has its own set of racks

For:
- large distributed and replicated workloads, such as HDFS, HBase, and Cassandra, across distinct racks

Limit:
- maximum of seven partitions per Availability Zone


### Spread
spread across different hardware (rack)

- reduces the risk of simultaneous failures that might occur when instances share the same equipment


For:
- mix instance types
- launch instances over time

Limit:
- up to 7 instances per AZ (no multiple region)
