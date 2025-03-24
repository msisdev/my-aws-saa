---
title: 15 Keyword
---

## 166 CloudFront
CDN

Read performance, cached at the edge

DDoS protection, Shield, AWS Web Application Firewall

Point of Presence

### Origins
S3 bucket
- Origin Access Control (OAC)

Custom Origin (HTTP)
- Application load balancer
- EC2
- S3 website
- Any HTTP

### What's going on
There is cache at the edge


### CloudFront vs S3 Cross Region Replication
CloudFront
- Global edge network
- cached with ttl

S3 Cross Region Replication
- Setup for each region
- updated in near real-time
- read only



## 168 CloudFront - ALB, EC2 as Origin
Make EC2 public

Application Load Balancer
- make it public
- allow security group
- ec2 can be private



## 169  CloudFront Geo Restriction
Restrict
- Allowlist
- Blocklist

'country' is detemined using a 3rd party Geo-IP DB



## 170 CloudFront Pricing
Reduce the number of edge locations to save cost

Price classes
1. Price Class All
2. Price Class 200
3. Price Class 100
- North America, EU



## 171 CloudFront Cache Invalidation
Force TTL expiration

Invalidate all files or with specific path



## 172 AWS Global Accelerator
Problem: too many network hop between client & server

### Unicast IP vs Anycast IP
Unicast IP
- one IP per one server

Anycast IP
- all servers have same IP *why*
- client is routed to the nearest server

### AWS Global Accelerator
Client -> Edge location -> (AWS internal network) -> Public ALB

2 Anycast IP are created

Works with
- Elastic IP
- EC2
- ALB, NLB, public/private

Consistent performance

Health checks
- Disaster recovery

Security
- only 2 external IP
- AWS Shield (DDoS protection)

### AWS Global Accelerator vs CloudFront
Both
- use edge location
- integration with AWS Shield (DDoS)

CloudFront
- improve performance for both
  - cacheable content
  - dynamic content
- served at the edge

Global Accelerator
- improve over wide range of apps (TCP, UDP)
- Proxy packes at the edge
- Good fit for non-HTTP (UDP, MQTT, VoIP)
- Good for HTTP with static IP
- Good for HTTP with failover *why*

