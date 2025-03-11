---
title: 072 Scalability & Availability
---

## Scalability
App/System can handle greater loads by adapting

Types
- Vertical scalability
- Horizonstal scalability (= elasticity)


### Vertical Scalability
- Increasing the size of the instance
- Example) RDS, ElastiCache


### Horizontal Scalability
- Increasing the # of instances/systems for your app
- Distributed system



## High Availability
- Running your app/system at least 2 data centers (AZ)
- Goal: to survive a data center loss

Passive
- RDS Multi AZ

Active
- horizontal scaling


## In EC2
Vertical scaling: increase instance size

Horizontal scaling: increase # of instances
- Auto scaling group
- Load balancer

High availability: run instances for the same app across multi AZ
- Auto scaling group multi AZ
- Load balancer multi AZ
