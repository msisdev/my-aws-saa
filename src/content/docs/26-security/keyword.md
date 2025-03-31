---
title: Keyword
---

## 297 Encryption
### Encryption in flight, TLS/SSL
- encrypt before sending
- decrypt after receiving

Protect against MITM (man in the middle attack)

### Encryption at rest, server-side
Keys must be managed somewhere and the server must have access

### Client-side encryption
Envelope encryption

The server should not be able to decrypt the data





## 298 AWS KMS (Key Management Service)
Manage encryption keys

Audit key usage by CloudTrail

Available through API calls (SDK, CLI)
- encrypted secrets can be stored in code, environment variable

### Keys Types
Symmetric (AES-256)
- Single encryption key
- You cannot access to the unencrypted key

Asymmetric (RSA, ECC)
- You cannot access to the unencrypted private key

### KMS
Types of KMS key
- AWS owned key: free, SSE-S3, SSE-SQS, SSE-DDB
- AWS managed key: free, aws/service_name
- Customer managed key created in KMS: $1/month
- Customer managed key imported (symmetric): $1/month

Automatic key rotation
- AWS managed key: 1 year
- Customer managed key: 1 year
- Imported key: only manual rotation

### Copying a snapshot
Region 1
- EBS volume encrypted with key A
- EBS snapshot encrypted with key A

Region 2
- EBS snapshot encrypted with key B
- EBS volume encrypted with key B

### KMS Key Policy
Control access to KMS

Default policy
- Complete access to root user

Custom policy
- Allow access to some users & roles
- Useful for cross account access

### Copying snapshot across accounts
1. Create a snapshot (encrypted with customer managed key A)
2. Attach KMS key policy
3. Share the encrypted snapshot
4. Create a copy of the snapshot (encrypted with CMK B)
5. Create a volume from the snapshot




## 300 KMS Multi Region Key (MRK)
Same key ID, auto rotation

Not global

Use case
- global client side encryption
- Global DynamoDB
- Global Aurora

### DynamoDB Global Table
1. (Region A) Encrypt an attribute client-side with MRK
2. (Region B) Push encrypted attribute in DDB table
3. Replicate DDB to another region B
4. (Region B) Get encrypted attribute
5. (Region B) Decrypt the attribute with replicated MRK

### Global Aurora
Same with Global DDB




## 301 S3 Encrypted Replication
Unencrypted, SSE-S3, SSE-C
- can be replicated

SSE-KMS
- Specify which KMS key to encrypt
- Adapt KMS key policy
- IAM Role with `kms:Decrypt`, `kms:Encrypt`
- If there's KMS throttling error, increase Service Quotas

Multi region KMS key
- S3 doesn't know. S3 will descrypt and encrypt




## 302 Sharing Encrypted AMI
- AMI is encrypted with KMS Key in source account
- Modify image attribute: add 'Launch Permission' of the target account
- Share key & set IAM Role
- Target account IAM role: `DescribeKey`, `ReEncrypted`, `CreateGrant`, `Decrypt`




## 303 Systems manager Parameter Store (SSM Parameter Store)
Serverless storage for configration and secrets
- version tracking
- IAM
- Notification to EventBridge
- CloudFormation

### Hierarchy
```
/
  my-department/
    my-app/
      dev/
        db-url
        db-password
      prod/
        db-url
        db-password
    other-app/
  other-department/
  aws/reference/secretsmanager/secret_id_in_secrets_manager
  aws/service/ami-amazon-linux-latest/amzn2-ami-hvm-x86_64-gp2
```

### Tiers
| | Standard | Advanced |
|-|----------|----------|
| max value size | 4KB | 8KB |
| parameter policy | No | Yes |

### Parameter Policy
Assign a TTL
- to update
- to delete sensitive data




## 306 AWS Secrets Manager
Store secrets

Auto generation, rotation

Integration with RDS

### Multi Region Secrets
Use case
- multi region app
- multi region db
- disaster recovery





## 308 AWS Certificate Manager (ACM)
TLS certificates
- Public/private
- public certificate is free
- auto renewal
- integration
  - Load balancer
  - CloudFront
  - API Gateway
- Cannot use ACM with EC2

### Requesting Public Certificate
List domain names in certificate

Select validation method
  - DNS validation: for automation, CNAME is used
  - Email validation: send email to contact addresses in WHOIS db

### Import Public Certificate
No automatic renewal

ACM sends daily expiration events
- 45 days prior to expiration
- to EventBridge

AWS Config managed rule to check expiration
- `acm-certificate-expiration-check`

### ALB Integration
Provision TLS cert with ACM

### API Gateway
Endpoint types
- Edge optimized (default)
  - CloudFront Edge locations
- Regional
- Private
  - from VPC

Edge optimized:
- ACM is in the same region of CloudFront Edge Location
- setup CNAME or A-Alias

Regional
- ACM must be imported in the same region
- setup CNAME or A-Alias




## AWS Web Application Firewall (WAF)
Layer 7 (HTTP)

Deployed on
- Application Load Balancer
- API Gateway
- CloudFront
- AppSync GraphQL API
- Cognito User Pool

Web ACL rules
- IP set
- HTTP header, body, URI
- size
- geo match
- rate based

Basically Regional
- global for CloudFront

### Fixed IP + WAF + Load Balancer
WAF does not support Network Load Balancer (Layer 4)

Use Global Accelerator for fixed IP + WAF + ALB




## 310 AWS Shield
AWS Shield Standard
- free
- protect layer 3, layer 4 attack (SYN/UDP flood, reflection attack)

AWS Shield Advanced
- protect EC2, ELB, CloudFront, Global Accelerator, Route 53
- automatically deploy AWS WAF rules (layer 7)




## 311 AWS Firewall Manager
Manage security rules

Security policy
- WAF rules (ALB, API Gateway, CloudFront)
- AWS Shield Advanced (ALB, CLB, NLB, Elastic IP, CLoudFront)
- Security Groups (EC2, ALB, ENI)
- AWS Network Firewall (VPC)
- Route 53

Regional scope

### WAF vs Firewall Manager vs Shield
All used together

WAF
- web ACL rules
- standalone: granular protection

Firewall Manager
- WAF across accounts
- WAF configuration
- auto protection of new resources

Shield advanced
- dedicated support from amazon
- frequent DDoS attack




## 313 DDoS Protection Best Practices
| #   | Component |
|-----|-----------|
| BP1 | CloudFront; Global Accelerator |
| BP2 | AWS WAF   |
| BP3 | Route 53  |
| BP4 | API Gateway |
| BP5 | VPC       |
| BP6 | ELB       |
| BP7 | Auto Scaling Group |


### Edge Location Mitigation
BP1: CloudFront
- Delivery at edge
- Protect from common attacks (SYN flood, UDP reflection)

BP1: Global Accelerator
- When your app is not compatible with CloudFront
- Access from edge
- Integration with Shield

BP3: Route 53
- Domain Name Resolution at edge
- DDoS protection on DNS

## DDoS Mitigation
Infrastructure layer defense (BP1, BP3, BP6)
- Protect EC2 against high traffic
- use Global Accelerator, Route 53, CloudFront, ELB

BP7: Auto Scaling
- sudden traffic surge

BP6: ELB
- distribute traffic to many EC2

### Application Layer Defense
Detect/filter malicious web request (BP1, BP2)
- CloudFront: cache static content
- CloudFront: block geographies
- AWS WAF, ALB: filter, block rquests
- WAF rate-based rule: block IPs of bad actor
- WAF managed rules: by IP reputation or anonymous IP

Shield Advanced (BP1, BP2, BP6)
- Auto deploy, evaluate AWS WAF rules to mitigate layer 7 attack

### Attack Surface Reduction
Obfuscating AWS resources (BP1, BP4, BP6)
- hide your backend resources

BP5: Security group, Network ACL
- filter traffic using subnet or ENI
- Elastic IP is protected by Shield Advanced

BP4: Protect API endpoint
- hide backend resource
- mode: Edge-optimized or CloudFront regional (more control)
- WAF + API Gateway: burst limit, header filtering, API keys





## 314 Amazon GuardDuty
Threat discovery to your account
- ML, anomaly detection
- EventBridge rule: notification to Lambda or SNS
- Protect against CryptoCurrency attack

Input data
- CloudTrail Event Log
- VPC Flow Log
- DNS Log
- optional: EKS Audit Log, RD, Aurora, EBS, Lambda, S3 Data Event





## 315 Amazon Inspector
Auto security assessment

For EC2
- Leverages AWS System Management (SSM) agent
- analyze unintended network accessibility
- analyze running OS

For Image, ECR

For Lambda
- code, package dependency
- deployed function

Integration
- AWS Security Hub
- EventBridge

### What does it evaluate
Only EC2, Container image, Lambda function

Continuous scanning

Package vulnerability

Network reachability (EC2)





## 316 Amazon Macie
Managed data security
- ML
- identify sensitive data, personally identifiable information (PII)

