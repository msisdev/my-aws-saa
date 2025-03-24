---
title: Memo
---

## IAM Role: EC2 vs ECS Container Instance Profile vs ECS Task
EC2 IAM Role
- EC2 인스턴스 자체에 대한 기본 권한
- 예: CloudWatch Logs 접근, S3 접근 등
- 가장 넓은 범위의 권한

ECS Container Instance Profile
- ECS 관련 작업을 위한 권한
- ECS Agent가 ECS 서비스와 통신하는데 필요
- ECR 이미지 풀링 권한 등
- 모든 컨테이너에 공통으로 필요한 권한

ECS Task IAM Role
- 특정 태스크(컨테이너)에 대한 권한
- 가장 세분화된 권한
- 예: 특정 DynamoDB 테이블 접근, 특정 S3 버킷 접근 등
