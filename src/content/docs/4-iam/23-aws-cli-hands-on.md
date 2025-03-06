---
title: 023 aws cli hands-on
description:
---

## Create access key
IAM > Users > [USER] > Create access key

Now you have access key and secret access key



## AWS CLI
```
$ aws configure
AWS Access Key ID [None]: AKIA2KC2NRKOK4HPFFEQ
AWS Secret Access Key [None]: *
Default region name [None]: ap-northeast-2
Default output format [None]:
```

```
$ aws iam list-users

{
    "Users": [
        {
            "Path": "/",
            "UserName": "msisdev",
            "UserId": "AIDA2KC2NRKOO6OBF7JWP",
            "Arn": "arn:aws:iam::708859234972:user/msisdev",
            "CreateDate": "2025-03-05T12:07:39+00:00",
            "PasswordLastUsed": "2025-03-05T12:10:03+00:00"
        }
    ]
}
```
