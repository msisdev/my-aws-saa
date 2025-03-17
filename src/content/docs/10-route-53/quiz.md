---
title: Quiz
---

## Question 1

여러분은 Amazon Route 53 Registrar를 위해 mycoolcompany.com를 구매했으며, 이 도메인이 Elastic Load Balancer인 my-elb-1234567890.us-west-2.elb.amazonaws.com를 가리키게끔 하려 합니다. 이런 경우, 다음 중 어떤 Route 53 레코드 유형을 사용해야 할까요?

- DNS 이름공간(Zone Apex)의 상위 노드(이 경우, mycoolcompany.com)와 동일한 이름을 가진 CNAME 레코드는 생성이 불가능합니다.
- ✓ Alias (별칭)


## Question 4

두 AWS 리전, us-west-1 및 eu-west-2에 호스팅 된 애플리케이션이 있습니다. 애플리케이션 서버의 사용자에 대한 응답 시간을 최소화하여, 사용자들에게 최상의 사용자 경험을 제공하려 합니다. 이 경우, 다음 중 어떤 Route 53 라우팅 정책을 사용해야 할까요?

- 지연 시간 라우팅 정책은 사용자와 AWS 리전 사이에서 발생하는 지연 시간을 평가하여 지연 시간(예: 응답 시간)을 최소화할 수 있는 DNS 응답을 수신할 수 있게 해줍니다.


## Question 6

GoDaddy를 위해 도메인을 구매했으며, Route 53을 DNS 서비스 제공자로 사용하려 합니다. 이를 위해서는 어떤 작업을 수행해야 할까요?

- X 사설 호스팅 영역은 내부 네트워크(예: VPC) DNS 쿼리 용이며, 공용 액세스는 불가능합니다.
- 공용 호스팅 영역은 인터넷을 통해 웹사이트로 요청을 보내는 사람들이 사용할 것을 전재하고 있습니다. 마지막으로, NS 레코드는 타사 Registrar에 업데이트되어야 합니다.


## Question 7

다음 중 유효한 Route 53 상태 확인이 아닌 것을 고르세요.

- ✓ SQS 대기열을 모니터링하는 상태 확인
- X 엔드 포인트를 모니터링하는 상태 확인
- X 다른 상태 확인을 모니터링하는 상태 확인
- X CloudWatch 경보를 모니터링하는 상태 확인
