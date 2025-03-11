---
title: 088 ASG Scaling Policy
---

## Scaling Policy Type
### Dynamic Scaling
Target Tracking Scaling
- simple
- ex) I want the average ASG CPU to stay at 40%

Simple/Step Scaling
- When CloudWatch alarm is triggered, add 2 units
- When CloudWatch alarm is triggered, then remove


### Scheduled Scaling
Anticipate a scaling based on known usage patterns


### Predictive Scaling
![predictive scaling](/8/088-predictive.png)

continuously forecast load and schedule scaling ahead



## Good Metrics
CPUUtilization (Average CPU)

RequestCountPerTarget

Average Network In/Out

Any custom metric 



## Scaling Cooldown
After scaling activity happens, you are in Cooldown period (default 300 seconds)

During Cooldown period, ASG will not launch or terminate additional instances

Use a ready-to-use AMI to reduce config time in order to serve request faster and reduce Cooldown period
