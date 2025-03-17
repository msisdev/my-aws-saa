---
title: Quiz
---

Wrong answer: 8, 9, 11, 24


## Question 1

아마존 RDS가 지원하지 않는 데이터베이스를 고르세요.

MongoDB



## Question 2

한 가용 영역에 재해 상황이 발생하더라도 반드시 MySQL 데이터베이스을 사용할 수 있도록 만들기 위한 새로운 솔루션을 계획하고 있습니다. 무엇을 사용해야 할까요?

Enable Multi-AZ



## Question 3

RDS 데이터베이스가 웹사이트에서 들어오는 요청량을 처리하는 데에 어려움을 겪고 있습니다. 백만 명의 사용자들은 대부분 뉴스를 읽고 있으며, 뉴스가 자주 포스팅되는 편은 아닙니다. 이 문제를 해결하기 위해 사용해서는 안 되는 솔루션은 무엇인가요?

RDS Multi AZ: Primary DB, Standby DB


## Question 4

RDS 데이터베이스에 읽기 전용 복제본을 설정해 두었지만, 소셜 미디어 포스트를 업데이트할 시 업데이트가 바로 이루어지지 않는다는 점에 대해 사용자들이 불만을 토로하고 있습니다. 이 경우, 가능성이 있는 원인은 무엇일까요?

Read replica, Eventual consistency


## Question 5

다음 RDS (Aurora 아님) 기능들 중, 사용 시 SQL 연결 문자열을 변경하지 않아도 되는 것은 무엇인가요?

- ✓ Multi AZ
- X Read replica


## Question 6

이 애플리케이션은 Application Load Balancer가 관리하는 오토 스케일링 그룹에서 관리 중인 EC2 인스턴스 플릿에서 실행되고 있습니다. 사용자들이 계속 재로그인을 해야 하는 상황이지만, 일부 EC2 인스턴스에 과부하를 일으킬 수도 있다는 생각에 고정 세션은 활성화하지 않으려 합니다. 어떻게 해야 할까요?



## Question 7

현재 어떤 분석 애플리케이션이 주요 프로덕션 RDS 데이터베이스에 대한 쿼리를 수행하고 있습니다. 이러한 쿼리들은 언제든 실행되어, RDS 데이터베이스의 성능을 낮추고 사용자 경험에 영향을 미치게 됩니다. 사용자 경험을 증진시키기 위해서는 어떻게 해야 할까요?

Read replica



## Question 8

주 AWS 리전에 재해가 발생했을 때에 대비하여 다른 AWS 리전에 데이터베이스의 복제본을 만들어 두려 합니다. 이런 작업을 쉽게 구현하기 위해서는 어떤 데이터베이스의 사용을 추천할 수 있을까요?

- 다중 AZ는 AWS 리전 수준의 재해가 발생할 경우에는 도움이 되지 않습니다. 다중 AZ는 AZ 수준의 재해 발생 시에는 도움이 됩니다.
- RDS/Aurora 읽기 전용 복제본은 재해 복구에 도움이 되지 않습니다.
- ✓ Aurora 글로벌 데이터베이스를 사용하면 최대 5개의 2차 리전까지 Aurora 복제본을 가질 수 있습니다.


## Question 10

여러분이 근무 중인 기업은 RDS MySQL 5.6을 데이터베이스로 사용하는 프로덕션 Node.js 애플리케이션을 가지고 있습니다. Java로 프로그래밍된 새로운 애플리케이션은 정기적인 대시보드 생성을 위해 많은 양의 분석 워크로드를 수행할 예정입니다. 이 경우, 주요 애플리케이션에 발생하는 지장을 최소화하기 위해 구현할 수 있는 방법 중 가장 비용 효율적인 솔루션은 무엇인가요?

✓ Create read replica in different AZ, run analysis workload on the read replica


## Question 11

RDS PostgreSQL 데이터베이스의 특정 리전에서 정전이 발생했을 때 데이터베이스가 신속하게 다른 AWS 리전에서 읽고 쓰는 작업을 할 수 있도록 재해 복구 전략을 수립하려고 합니다. DR 데이터베이스는 가용성이 매우 높아야 합니다. 가장 적합한 방식은 무엇입니까?

✓ Create read replica in different region, enable multi AZ at the read replica


## Question 12

사내(On-premise)에서 관리하던 MySQL 데이터베이스를 RDS로 옮겼습니다. 데이터베이스와 상호 작용하는 애플리케이션과 개발자가 아주 많은 상태입니다. 모든 개발자는 회사의 AWS 계정에 IAM 사용자로 등록되어 있습니다. 모든 개발자에 대해 DB 사용자를 생성하지 않고 MySQL RDS DB 인스턴스에 액세스할 수 있게 하려면 가장 적절한 방법은 무엇입니까?

✓ Enable IAM database authentication


## Question 13

다음 중 RDS 읽기 전용 복제본과 다중 AZ로의 복제 작업을 적절하게 묘사한 설명은 무엇인가요?

Read replica = Async, Multi AZ = Sync


## Question 14

암호화되지 않은 RDS DB 인스턴스를 암호화하는 방법은 무엇인가요?

Create snapshot > Copy snapshot with encryption > Restore RDS from the copied snapshot


## Question 15

RDS 데이터베이스를 위해 최대 ............개의 읽기 전용 복제본을 가질 수 있습니다.

15


## Question 16

다음 중 IAM을 이용한 웹 서버 인증을 지원하지 않는 RDS 데이터베이스 기술은 무엇인가요?

Oracle


## Question 17

암호화되지 않은 RDS DB 인스턴스가 있는 상태에서 읽기 전용 복제본을 생성하려 합니다. RDS 읽기 전용 복제본이 암호화되도록 구성할 수 있을까요?

암호화되지 않은 RDS DB 인스턴스로는 암호화된 읽기 전용 복제본을 생성할 수 없습니다.


## Question 18

프로덕션에서 실행 중인 한 애플리케이션이 Aurora 클러스터를 데이터베이스로 사용하고 있습니다. 여러분의 개발 팀은 필요할 경우 많은 양의 워크로드를 수행할 수 있는, 스케일이 축소된 애플리케이션에서 애플리케이션의 버전을 실행하려 합니다. 애플리케이션은 대부분의 시간 동안 사용되지 않습니다. CIO는 여러분에게 팀을 도와 비용을 최소화하는 동시에 이를 달성해 줄 것을 요청했습니다. 어떤 방법을 사용해야 할까요?

Use Aurora serverless


## Question 19

하나의 Aurora DB 클러스터는 몇 개의 Aurora 읽기 전용 복제본을 가질 수 있을까요?

15


## Question 20:

Amazon Aurora는 .......................... 데이터베이스를 모두 지원합니다.

MySQL, PostgreSQL


## Question 21

여러분은 게임 개발 업체에서 솔루션 아키텍트로 근무하고 있습니다. 하나의 게임에서, 실시간 점수를 기반으로 플레이어들의 랭킹을 매겨야 합니다. 여러분의 상사가 게임 리더보드 생성을 위해 효율적이고 고가용적인 솔루션을 설계해 구현해 줄 것을 요청했습니다. 무엇을 사용해야 할까요?

ElastiCache Redis, Sorted Set


## Question 22

AWS 기반 오라클 데이터베이스의 완전한 커스터마이징이 필요합니다. AWS 서비스 사용의 이점을 누리고 싶습니다. 어떤 것을 추천하시나요?

RDS Custom


## Question 23

재해 복구 및 감사 목적으로 Aurora 데이터베이스에 대한 장기 백업을 저장해야 합니다. 어떤 것을 추천하시나요?

Aurora DB clone


## Question 24

여러분의 개발팀은 프로덕션 데이터에 최대한 빨리 액세스해야 하기 때문에 프로덕션 Aurora 데이터베이스에 대해 읽기 및 쓰기 테스트를 수행하고자 합니다. 어떤 조언을 해주시겠습니까?

Use Aurora DB clone


## Question 25

RDS 데이터베이스에 100개의 EC2 인스턴스가 연결되어 있는데, 데이터베이스 유지 관리 시 애플리케이션 로직이 좋지 않아 모든 애플리케이션이 RDS에 다시 연결하는 데 많은 시간이 걸리는 것을 확인했습니다. 이 문제를 어떻게 개선할 수 있을까요?

RDS proxy