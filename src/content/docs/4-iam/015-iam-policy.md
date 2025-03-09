---
title: 015 iam policy
 
---

## IAM Policies inheritance
1 policy per group or user
Zero or many groups per user



## IAM Policies structure
Consists of
- Version (= `2012-10-17`)
- Id (optional)
- Statement (one or more, required)

Statement consists of
- Sid: id for statement
- Effect: `Allow` / `Deny`
- Principal: account/user/role to which this policy applied to
- Action: list of actions this policy allows/denies
- Resource: resources to which the actions applied to
- Condition: when this policy is in effect (optional)
