---
title: 045 ec2 instances purchasing options
---

## Options

**On-Demand Instances**:
short workload, predictable pricing, pay by second

**Reserved (1 or 3 year)**:
long workloads, flexible instances

**Savings Plans (1 or 3 year)**:
long workload, commitment to an amount of usage

**Spot Instances**:
short workloads, cheap, can lose instances

**Dedicated Hosts**:
book an entire physical server

**Dedicated Instances**

**Capacity Reservations**:
reserve capacity in a AZ for any duration

## Details
### On demand
- Pay for what you use
- highest cost, no upfront payment
- no leng-term commitment

For short-term, un-interrupted workloads,
where you can't predict how app will behave

### Reserved Instances
- 72% discount vs on-demand
- a specific instance attributes
- reservation period: 1 yr | 3 yr
- payment options: no upfront | partial upfront | all upfront
- scope: regional | zonal
- buy and sell reserved instance in marketplace

For steady-state usage application (db)

Convertible reserved instance
- Can change EC2 instance type, family, OS, scope and tenancy
- 66% discount

### Savings Plans
- 72% discount
- commit to a dollar amount of usage: $?/hour for 1 or 3 yr
- usage beyond Savings Plans is billed at on-demand price

Locked:
- instance family
- region

Flexible:
- instance size (e.g. m5.xlarge m5.2xlarge)
- OS
- tenancy

### Spot Instances
- 90% discount
- instances that you can lose at any point of time
- most cost-efficient instances in aws

For workloads that are resilient to failure
- batch jobs
- data analysis
- image processing
- any distributd workloads
- flexible start/end

Not for critical jobs / DBs

### Dedicated Hosts
- a physical server
- purchase options
  - on-demand
  - reserved
- the most expensive option

For software that have complicated licensing model
and companies that have strong regulatory or compliance needs

### Dedicated Instances
- instances run on hardware that's dedicated to you
- may share hardware with other instances
- no control over instance placement

### Capacity Reservations
- reserve on-demand instances in a specific AZ for any duration
- you always have access to EC2 when you need it
- combine with Regional Reserved Instances and Savings Plans to benefit from discount
- charges at on-demand rate whether you run or not

For short-term, uninterrupted workloads

## How to choose purchasing option
On demand: no plan, full price

Reserved: plan, discount

Savings Plans: certain amount, period & type

Spot instances: highest bidder keeps the room, kicked out at any time

Dedicated Hosts: book an entire building

Capacity Reservations: you book a room for a period with full price
