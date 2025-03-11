---
title: 086 Auto Scaling Group
---

Goal:
- Scale out (add EC2 instances)
- Scale in (remove EC2 instances)
- Min/Max EC2 instances
- Automatically register new instances to a load balancer
- Re-create an EC2 instance

ASG is free


## ASG in AWS
ASG works with EC2
- Minimum capacity
- Desired capacity
- Maximmum capacity


## ASG Attributes
A launch template
- AMI, instance type
- EC2 user data
- EBS
- Security groups
- SSH key pair
- IAM roles
- network, subnets
- load balancer

Min/Max size

Initial capacity

Scaling policy


## CloudWatch Alarms
Alarm monitors a metric over ASG instances
- average CPU, ...

Based on the alarm, we can create
- Scale-out policy
- Scale-in policy
