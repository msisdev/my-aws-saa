---
title: 047 ec2 spot
---

- discount up to 90% vs on-demand
- Define max spot price and get the instance while current spot price < max

For batch jobs, data analysis or workloads that are resilient to failures

Not great for critical jobs or DBs


## EC2 Spot instances pricing
![spot pricing](/5-ec2/047-spot-pricing.png)

When price goes over user-defined max price
- lose the instance

When price goes below user-defined max price
- win the instance

## How to terminate Spot Instances
Request type
- one-time
- persistent

You can only cancel a Spot Instance requests that are open, active or disabled

You must 1. cancel a Spot request and then 2. terminate the associated Spot instances

## Spot Fleets
A set of Spot Instances & optional on-demand instances

Spot Fleet tries to meet the target capacity with price constraints
- Define possible launch pools
- Can have multiple launch pools
- Spot Fleet stops launching instances when reaching capacity or max cost

Spot fleets allow us to automatically request Spot Instances with the lowest price

### Strategies
#### lowestPrice
from the pool with the lowest price

#### diversified
distributed across all pools

great for availaility, long workloads

#### capacityOptimized
pool with the optimal capacity for the number of instances

#### priceCapacityOptimized (recommended)
pools with highest capacity available, then select the pool with the lowest price

