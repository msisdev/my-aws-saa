---
title: Keyword
---

## 200 Docker
Software development platform to deploy apps

### Conatiner Repository
Docker hub
- Public

Amazon ECR (Elastic Container Registry)
- Public (Amazon ECR Public Gallery)
- Private

### vs VM
Docker shares resources with host

### Container with AWS
Amazon Elastic Contaner Service (ECS)

Amazon Elastic Kubernetes Servic (Amazon EKS)

AWS Fargate
- Serverless container
- Works with ECS and EKS

Amazon ECR




## 201 Amazon ECS
Launch ECS tasks on ECS cluster

You must provision the infrastructure (EC2)

### Fargate Launch Type
Serverless

You don't provision the infrastructure

### IAM Roles
EC2 launch type

### Load Balancer
ALB

NLB

ELB
- not recommended

### Data Volumes (EFS)
Mount EFS onto ECS tasks

Tasks in any AZ will share the same data

Fargate + EFS = Serverleses




## 205 ECS Service Auto Scaling
Autoscale ECS tasks

ECS Autoscaling uses AWS Application Auto Scaling
- Average CPU
- Average memory
- ALB request per target

Metrics
- Target tracking - scale based on target value for a specific CloudWatch metric
- Step scaling - scale based on a specified CloudWatch Alarm
- scheduled scaling - scaled based on a specified date/time

### EC2 launch type - Auto Scaling EC2 Instances

Auto Scaling Group Scaling
- scale ASG based on CPU utilization

ECS Cluster Capacity Provider
- automatically provision

### Example
High cpu usage -> CloudWatch Metric -> CloudWatch Alarm -> ECS Service Auto scaling | ECS Capacity Providers

(ECS Capacity Provider: manage EC2 instances)



## 208 Amazon ECR
Store and manage Docker images

Private/Public repository

Fully integrated with ECS by S3

Supports image vulnerability scanning, versioning, tags, lifecycle




## 209 EKS
managed Kubernetes cluster

Kubernetes is for auto deployment, scaling and management of containerized app

EKS supports EC2 or Fargate

Kubernetes is cloud-agnostic

Private or public load balancer

### Node Types
Managed Node Groupos
- EC2 instances
- nodes are part of ASG, managed by EKS
- Supports On-Demand/Spot instances

Self-managed nodes
- managed by ASG
- Supports On-Demand/Spot instances

AWS Fargate
- no maintenance

### Data Volumes
Need to specify storage class

Container storage interface (CSI) compliant driver

Support
- EBS, EFS, FSx for Lustre, FSx for NetApp ONTAP




## 211 AWS App Runner
No infrastructure

Start with source code or container image

Automatically build and deploy web app

Automatic scaling, highly available, load balancer, encryption

VPC support

DB, cache, message queues

Use cases:
- web app, APIs, microservices




## 213 AWS App2Container (A2C)
CLI tool for migrating Java, .NET web app into Docker container

Register into ECR

Deploy to ECS, EKS or App Runner
