---
title: 044 ec2 instance roles
---

Don't use secret key in instance console.
Instead use IAM role to control access to aws service.

## Modify IAM role
EC2 > Instances > MY_EC2 > Modify IAM role

Result:
```
[ec2-user@ip-172-31-38-146 ~]$ aws iam list-users
{
    "Users": [
        {
            "Path": "/",
            "UserName": "msisdev",
            "UserId": "AIDA2KC2NRKOO6OBF7JWP",
            "Arn": "arn:aws:iam::708859234972:user/msisdev",
            "CreateDate": "2025-03-05T12:07:39+00:00",
            "PasswordLastUsed": "2025-03-06T23:57:07+00:00"
        }
    ]
}
[ec2-user@ip-172-31-38-146 ~]$ aws iam list-users

Unable to locate credentials. You can configure credentials by running "aws configure".
```