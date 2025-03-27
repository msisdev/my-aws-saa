---
title: Quiz
---

Missed: 3

## Question 1:

내부 감사가 완료된 AWS 서비스만을 프로덕션에 허용해야 한다는 강력한 규제 요구 사항이 있습니다. 여러분은 서비스 감사가 이루어지는 동안, 팀이 개발 환경에서 실험해볼 수 있었으면 합니다. 이를 설정하기 위한 최적의 방법은 무엇일까요?

- AWS 조직을 생성해 두 개의 프로덕션 및 Dev OU를 생성한 후, Prod OU에 SCP 적용


## Question 2:

기업용 AWS 계정을 관리하고 있으며, 개발자 중 한 명에게 S3 버킷 내의 파일을 읽을 수 있는 액세스 권한을 부여하려 합니다. 여러분은 버킷 정책을 업데이트했으나, 해당 개발자는 여전히 버킷 내의 파일에 액세스할 수 없는 상태입니다. 무엇이 문제일까요?
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "AllowsRead",
    "Effect": "Allow",
    "Principal": {
      "AWS": "arn:aws:iam::123456789012:user/Dave"
    },
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::static-files-bucket-xxx"
  }]
}
```

- 객체 레벨의 권한이므로, 리소스를 `arn:aws:s3:::static-files-bucket-xxx/*`로 변경해야함


## Question 3:

AWS Organizations을 사용해 관리하고 있는 5개의 AWS 계정이 있습니다. 여러분은 각 계정이 특정 AWS 서비스로 액세스하는 것을 제한하려 합니다. 이런 경우, 어떻게 해야 할까요?

- X IAM 역할 사용
- AWS Organizations SCP 사용


## Question 4:

다음 중 특정 AWS 리전에서 API 호출을 허용할 때만 사용할 수 있는 IAM 상태 키는 무엇입니까?

- ? `aws:RequireRegion`
- ? `aws:SourceRegion`
- ? `aws:InitialRegion`
- ? `aws:RequestedRegion`


## Question 5:

EventBridge 권한 설정할 때 Lambda 함수를 대상으로 설정하려면 …………………..를 사용해야 하지만, Kinesis Data Streams을 대상으로 설정하려면 …………………..를 사용해야 합니다.

- 리소스 기반 정책, 자격 증명 기반 정책