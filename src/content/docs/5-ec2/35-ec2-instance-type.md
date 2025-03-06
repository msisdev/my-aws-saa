---
title: 035 ec2 instance type
description:
---

## Overview
Convention:
> m5.2xlarge
- `m`: instance class
- `5`: generation
- `2xlarge`: etc

## Types
### General Purpose
General:
- Web server or code repo

Balance between
- Compute
- Memory
- Networking

### Compute Optimized
Great for compute-intensive tasks
- Batch processing workloads
- Media transcoding
- High performance web servers
- High performance computing (HPC)
- Scientific modeling & Machine learning
- Gaming severs

### Memory Optimized
Fast performance
- Databases
- Distributed web scale cache store
- In-memory DBs for BI (business intelligence)
- Real-time processing applications of big unstructured data

### Storage Optimized
High, sequential r/w to large data sets
- High frequency online transaction processing (OLTP) system
- DBs
- Cache for in-memory DBs
- Data warehousing apps
- Distributed file system

## Example
[EC2 comparison website](https://instances.vantage.sh/)
