---
title: Quiz
---

Missed: 5

## Question 4:

여러분은 온라인 트랜잭션 프로세싱(OLTP)을 수행하려 합니다. 이 작업에는 오토 스케일링 기능이 내장되어 있고, 기반 스토리지에 대해 최대 복제본 수를 제공하는 데이터베이스를 사용하고자 합니다. 이 경우, 다음 중 어떤 AWS 서비스를 추천할 수 있을까요?

- X Amazon Redshift
- X Amazon RDS
- Amazon Aurora는 MySQL 및 PostgreSQL과 호환이 가능한 관계형 데이터베이스입니다. Aurora는 데이터베이스 인스턴스 당 최대 128TB까지 자동 스케일 업하는 분산형, 내결함성 자가 복구 스토리지 시스템이라는 것이 특징입니다. 최대 15개의 지연 시간이 낮은 읽기 전용 복제본, 지정 시간 복구, Amazon S3로의 지속적인 백업, 그리고 3개의 AZ에 대한 복제를 통해 높은 성능과 고가용성을 제공합니다.


## Question 5:

한 스타트업 회사가 솔루션 아키텍트인 여러분에게 사용자들이 서로 친구가 될 수 있고, 서로의 포스트에 좋아요를 남길 수 있는 소셜 미디어 웹사이트 아키텍처의 구축을 도와달라고 한 상황입니다. 이 회사는 ‘Mike의 친구들이 남긴 포스트에는 몇 개의 좋아요가 있는가?’와 같은 복잡한 쿼리를 수행하려 합니다. 이 경우, 어떤 데이터베이스의 사용을 추천할 수 있을까요?

- Amazon Neptune은 빠르고, 신뢰도가 높은 완전 관리형 그래프 데이터베이스 서비스로 고도로 연결된 데이터셋을 처리하는 애플리케이션을 구축하고 실행하는 데에 도움을 줍니다.


## Question 6:

각각의 크기가 100MB인 한 세트의 파일들이 있는데, 이 파일을 안전하고 내구성이 높은 키-값 스토어에 저장하려 합니다. 이 경우, 다음 중 어떤 AWS 서비스를 사용하는 게 권장될까요?

- Amazon S3는 키-값 스토어가 맞습니다(키는 버킷 내 객체의 전체 경로입니다)!


## Question 7:

회사의 온프레미스 웹 사이트는 프런트엔드에 ReactJS를 사용하고, 백엔드에 NodeJS를 사용하며 데이터 베이스로 MongoDB를 사용합니다. MongoDB 데이터베이스를 자체 호스팅하려면 여러 유지 보수 작업이 필요한데 이런 문제를 처리할 수 있는 인력과 경험이 부족하여 몇 가지 문제가 발생하고 있습니다. 결국 웹 사이트를 AWS 서버로 옮기기로 결정하였고, ReactJS 프런트엔드 애플리케이션은 S3 버킷에서 호스팅하고 NodeJS 백엔드는 EC2 인스턴스 세트에서 호스팅하기로 했습니다. 코드 변경 없이 높은 확장성과 가용성을 제공하는 MongoDB 데이터베이스를 마이그레이션하려면 어떤 AWS 서비스를 사용해야 합니까?

- Amazon DocumentDB


## Question 9:

한 온라인 결제 기업은 자사 인프라를 호스팅하는 데 AWS를 사용하고 있습니다. 애플리케이션 특성상 신용거래, 직불거래와 같은 금융 거래에 대해 정확한 기록을 저장해야 한다는 엄격한 요구 사항이 있습니다. 이러한 거래 기록은 안전하고 변경이 불가능하며 암호화되어 있는 저장소에 저장해야 하고, 암호학적으로 검증이 가능해야 합니다. 이런 사례에 가장 적합한 AWS 서비스는 무엇입니까?

- Amazon QLDB

