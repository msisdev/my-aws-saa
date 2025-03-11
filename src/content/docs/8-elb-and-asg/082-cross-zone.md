---
title: 082 Cross Zone Load Balancing
---

[Link](https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/how-elastic-load-balancing-works.html)

## What it does
![with cross](/8/082-with-cross.png)

If cross-zone load balancing is enabled, each of the 10 targets receives 10% of the traffic. This is because each load balancer node can route its 50% of the client traffic to all 10 targets.

![without cross](/8/082-without-cross.png)

If cross-zone load balancing is disabled:

- Each of the two targets in Availability Zone A receives 25% of the traffic.
- Each of the eight targets in Availability Zone B receives 6.25% of the traffic.

This is because each load balancer node can route its 50% of the client traffic only to targets in its Availability Zone.


## How to use
### Application Load Balancer
- With Application Load Balancers, cross-zone load balancing is always enabled at the load balancer level.
- At the target group level, cross-zone load balancing can be disabled.
- No charges

### Network/Gateway Load Balancer
- Disabled by default
- pay charges for inter AZ data

