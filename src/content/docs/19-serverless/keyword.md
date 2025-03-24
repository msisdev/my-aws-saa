---
title: Keyword
---

## 215 Serverless

Anything that's managed: Function, DB, messaging, storage, ...

### In AWS

- AWS Lambda
- DynamoDB
- AWS Cognito
- AWS API Gateway
- Amazon S3
- SNS, SQS
- Kinesis Data Firehose
- AUrora Serverless
- Step Functions
- Fargate




## 216 AWS Lambda
Easy pricing
- Pay per request, compute time

Monitoring
- AWS CloudWatch

### Example: Thumbnail creation
- S3 trigger
- Lambda creates a thumbnail
- push into S3, DynamoDB

### Example: Cron job
CloudWatch Event EventBridge -> Lambda




## 218 AWS Lambda Limits
### Per region
Execution
- Memory: 128MB ~ 10GB
- CPU time: 15 minutes
- Env var: 4KB
- Disk: 512MB ~ 10GB
- Concurrency: 1000

Deployment
- compressed: 50MB
- uncompressed: 250MB
- env var: 4KB




## 219 Lambda SnapStart
For Java 11~

Function is invoked from pre-initialized state
- start from snapshot of memory and disk state




## 220 Lambda Edge & CloudFront Functions
Edge function
- Run close to your users to minimize latency

### CloudFront Fuctions
functions in JavaScript

CDN customization

### Lambda@Edge
functions in JodeJS or Python

### CloudFront Functions vs Lambda@Edge
| Feature | CloudFront Functions | Lambda@Edge |
|---------|----------------------|-------------|
| Runtime | JavaScript           | Node.js, Python |
| # of Requests | Millions/s     | Thousands/s |
| CloudFront Triggers | Viewer Request/Response | Viewer/Origin Request/Response |
| Max execcution time | < 1 ms   | 5~10 seconds |
| Max memory | 2MB               | 128MB ~ 10GB |
| Total package size | 10KB      | 1MB ~ 50MB  |
| Network, File system | No      | Yes         |
| Access to the request body | No | Yes        |
| Pricing | 1/6 of @Edge         | Charged per request, duration |


### Use cases
CloudFront Functions
- Cache key normalization, transform request attributes
- Header manipulation
- URL rewrites, redirects
- Request authentication & authorization

Lambda@Edge
- Longer execution time
- Adjustable CPU or memory
- When you need 3rd party libraries
- Network, file system access
- Access to the HTTP body




## 221 Lambda VPC
By default, Lambda function cannot access VPC

### Lambda in VPC
Provide VPC ID, subnet, security group
- Lambda will create ENI in your subnet

### Lambda with RDS Proxy
Lambda functions may cause too many connections




## 222 Invoke Lambda from RDS/Aurora
Event from DB

Supported for RDS for PostgreSQL and Aurora MySQL

Must allow outbound traffic from DB to Lambda function

DB must have required IAM policy

### RDS Event Notification
Tells information about the DB not data
- created, stopped, start, ...

Send notifications to SNS or EventBridge




## 223 DynamoDB
Replication across multple AZ

NoSQL, transaction support

### Basics
DynamoDB has tables

Each table has Primary key

Table > Item > Attribute

Max size of item 400KB

Data types
- Scalar
- Document: list, map
- Set: string, number, binary

### Table example
Primary key = Partition key + Sort key

Attributes

### Capacity mode
Provisioned mode
- specify reads/writes per second

On-Demand mode
- auto scale
- more expensive




## 225 DynamoDB Advanced
### DynamoDB Accelerator (DAX)
In-memory read cache for DynamoDB

Doesn't require logic modification

#### DAX vs ElastiCache
DAX
- individual objects
- query & scan

ElastiCache
- aggregation result

### Stream Processing
Ordered stream of item-level modifications of table

Use cases
- welcome email
- real-time analytics
- cross-region replication
- invoke AWS Lambda

#### DynamoDB Streams
DynamoDB -> DynamoDB Streams -> EC2, Lambda -> SNS, another DynamoDB table

#### Kinesis Data Streams (newer)
DynamoDB -> Kinesis Data Streams -> Kinesis Data Firehose -> Redshift, S3, OpenSearch

### Global Table
Low latency

Active-Active replication

Read/write in any region

Must enable DynamoDB Streams

### Time To Live (TTL)

### Backup
Point-in-time recovery (PITR)

On-demand backups
- doesn't affect performance

### Integration with S3
Export to S3 (must enable PITR)
- doesn't affect read capacity

Import from S3
- doesn't consume write capacity
- creates a new table





## 226 API Gateway
- Support for WebSocket
- Handle API versioning
- Multiple environments (dev, prod, ...
- Security
- Swagger/OpenAPI
- Generate SDK, API spec
- Cache API response

Client - API Gateway - Lambda - DynamoDB

### Integrations
Lambda function

HTTP endpoints
- add rate limit, caching, user auth, API keys, ...

AWS Service
- AWS Step Function workflow, post a message to SQS, ...

#### Example: Kinesis Data Streams
Client - API Gateway - Kinesis Data Streams - Kinesis Data Firehose - S3

### Endpoint Types
Edge-Optimized (default)
- CloudFront Edge locations
- API Gateway still lives in one region

Regional
- For clients within the same region

Private
- VPC only

### Security
User authentication
- IAM roles (for internal apps)
- Cognito (for external users)
- Custom auth

Custom domain name HTTPS with AWS Certificate Manager (ACM)
- Must setup CNAME or A-alias in Route 53




## 228 Step Functions
Visual workflow to orchestrate Lambda Functions

Integrate with EC2, ECS, On-premises, API Gateway, SQS, ...

Human approval feature

Use cases
- order fulfillment, data processing, web app




## 229 Amazon Cognito
Give users identity

Cognito user pools
- Sign in functionality
- Integrate with API Gateway & ALB

Cognito Identity Pools
- Provide AWS credentials to access AWS resources

### Cognito User Pools
Serverless DB of user

Integrate with API Gateway/ALB

### Cognito Identity Pools (Federated identities)
User source can be User Pools, 3rd party logins

Users can access AWS services
- directly
- or through API Gateway

AWS service example
- Private S3
- DynamoDB table

