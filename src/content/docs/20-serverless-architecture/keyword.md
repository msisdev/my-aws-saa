---
title: Keyword
---

## 230 Mobile Application
### REST API
Mobile - API Gateway - AWS Lambda - DynamoDB

Mobile - Cognito

### Access to S3
1. Authenticate
2. Access to S3

### High read throughput
API Gateway
- cache response

DynamoDB
- DAX Caching layer




## 231 Website
Client - CloudFront - S3

### Security
Make S3 private

OAC (Origin Access Control)
- bucket policy: only authorize from CloudFront distribution

### Public REST API
Client - API Gateway - Lambda - DAX - DynamoDB

### Welcome email flow
DynamoDB - DynamoDB Stream - Lambda - SES

### Thumbnail generation flow
Directly or via CloudFront (Transfer acceleration)

Make S3 trigger lambda to load thumbnail in another S3

Add SQS, SNS




## 232 Microservices
User - ELB - ECS - DynamoDB

User - API Gateway - Lambda - ElastiCache

User - ELB - EC2 Auto Scaling - RDS

### Patterns
Synchronous
- API Gateway, Load Balancer

Asynchronous
- SQS, Kinesis, SNS, Lambda trigger




## 233 Software Update Offloading
### Why CloudFront
Easy way to make an existing app more scalable and cheaper
- No change to architecture
- Cache software update files at the edge
  - Software update files are static
- Serverless, can help scale better
- Save from availability, network bandwidth
