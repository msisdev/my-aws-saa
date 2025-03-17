---
title: Keyword
---

## 151
Server-Side Encryption (SSE)

Client-Side Encryption

### Amazon S3 Encryption
SSE-S3

SSE-KMS

SSE-C



## 154 Default Encryption
Evaluation: Bucket policy -> Default encryption



## 155 CORS
Cross-Origin Resource Sharing

Origin

Same origin

`Access-Control-Allow-Origin`


## 156 MFA Delete
MFA(Multi-Factor Authentication)

Versioning

Root account



## 159 Access Logs
Don't make logging bucket to log itself



## 161 Pre-Signed URLs
URL expiration

Inherit the permissions of the user that generated the URL (GET, PUT)




## 163 Glacier Vault Lock
WORM (Write Once Read Many) model

Bucket-wide

Vault lock policy
- cannot be changed or deleted

### S3 Object Lock (versioning required)
WORM model

Object-wide

Retention mode
1. Compliance mode
2. Governance mode

Retention period

Legal hold
- protect object forever
- can be freely placed/removed by s3:PutObjectLegalHold IAM permission



## 164 S3 Access Point
Grant R/W to prefix

Each access point has
- DNS name
- access point policy

### VPC Origin
VPC endpoint

VPC endpoint policy



## 165 S3 Object Lambda
S3 bucket -> S3 Access Point -> Lambda Function -> S3 Object Lambda Access Point -> Application

Use cases
- react information
- convert data format
- resize/watermark image

