---
title: Keyword
---

## 287 AWS Organization
Global service

Shared, reserved instances and Savings Plans get discount

API for auto account creation

### Organizational Units (OU)
By business unit
- Sales OU
- Retail OU
- Finance OU

By environmental lifecycle
- Prod OU
- Dev OU
- Test OU

By project
- Project 1 OU
- Project 2 OU

### Service Control Policy (SCP)
IAM policy applied to OU or accounts

No effect on management account (root account)

Only have effect on target OU/account

Example
- Allow `*` and `DenyDynamoDB`
- Allow `ec2:*`



## 289 IAM Advanced
### IAM Condition
`aws:SourceIp`
- restrict client IP from which the API calls are being made
- `"Condition": { "NotIpAddress": { "aws:SourceIp": ["xx/24", "xx/24"] } }`

`aws:RequestedRegion`
- restrict the region the API calls are made to
- `"Condition": { "StringEquals" { "aws:RequestedRegion": ["eu-central-1"] } }`

`ec2:ResourceTag`
- restrict based on tag

`aws:MultiFactorAuthPresent`
- force MFA

`aws:PrincipalOrgID`
- restrict by Org ID

### IAM Action
`s3:ListBucket`
- bucket level permission
- allow buckets to be listed
- `"Resource": "arn:aws:s3:::test"`

`s3:GetObject`, `s3:PutObject`, `s3:DeleteObject`
- object level permission
- allow access within a bucket
- `"Resource": "arn:aws:s3:::test/*"`




## 290 IAM Role vs Resource Based Policy
Cross account access
- both policy must explicitly allow the action

Same account access
- either must allow the action & no explicit DENY

Resource based policy support
- S3, SNS, SQS, ...




## 291 IAM Permission Boundary
To set the maximum permission an IAM entity can get
- for user, role (not group)

Organization SCP & Permission Boundary & Identity based Policy
- 교집합 적용.

### Example IAM Policy
DENY는 무조건 적용

명시되지 않은 권한은 기본적으로 DENY





## IAM Identity Center
Single sign-on service to allow access
- AWS account/organization
- cloud app
- app with SAML2.0
- EC2 Windows instance

Provider (Where users are stored)
- built-in identity store in IAM Identity Center
- 3rd party - Active Directory, OneLogin, Okta

### Fine-grained permissions
Multi account permission
- Manage access in Organization
- Permission Set: collection of IAM policies

Application assignment
- SSO on SAML 2.0 apps

Attribute based access control (ABAC)
- Permission based on users' attributes stored in identity store
- ex) cost center, title, locale
- Use case: define permission once, modify attribute




## Directory Service
### Microsoft Active Directory (AD)
Resource tier
- Domain: User & Device
- Tree: relation
- Forest: Group of domain

### AWS Directory Serivice
AWS Managed Microsoft AD
- trust connection with your on-premise AD
- users are managed by AWS

AD Connector
- Directory Gateway (proxy) to redirect to on-premise AD
- users are managed by on-premise AD

Simple AD
- AD-compatible
- cannot be used with on-premise AD

### IAM Identity Center + Active Directory Setup
Connect to AWS Managed Microsoft AD
- out of the box intergration

Connect to self-managed directory
- IAM Identity Center - AD Connector - my AD

Connect to self-managed directory using managed AD
- 2-way trust relationship using AWS Managed Microsoft AD
- IAM Identity Center - AWS Managed Microsoft AD - my AD





## 295 AWS Control Tower
- Setup multi-account environment
- Automate ongoing policy management
- Detect/remediate policy violations
- Compliance dashboard

### Guardrails
- Preventive Guardrail
  - uses SCP
- Detective Guardrail
  - uses AWS Config

Notification
- Guardrail - SNS - Admin

Auto remediation
- Guardrail - SNS - Lambda - resource/account




