---
title: Quiz
---

Wrong answer: 6, 11, 16, 19

## Question 3
Elastic Load Balancer는 .......................(을)를 제공합니다.

(DNS) AWS에서 관리하는 기반 인프라가 변경되었다고 하더라도, AWS가 정적 엔드 포인트를 사용해 로드 밸런스로 액세스할 수 있기를 원하는 이유입니다.


## Question 4
Elastic Load Balancer가 관리하는 10개의 EC2 인스턴스 상에서 웹사이트를 실행 중입니다. 웹사이트의 사용자들은 웹사이트에서 다른 페이지로 이동할 대마다 새로 인증을 해야한다는 점에 대해 불만을 토로하고 있습니다. 하지만 여러분의 기기와 하나의 EC2 인스턴스를 지닌 개발 환경에서는 아무 문제 없이 작동을 하고 있기 때문에 곤혹스러운 상황입니다. 무엇이 원인일까요?

ELB 고정 세션 기능은 동일한 클라이언트에 대한 트래픽이 항상 동일한 대상으로 리다이렉트되도록 해줍니다(예: EC2 인스턴스) 이는 클라이언트들이 세션 데이터를 소실하지 않게 해줍니다.



## Question 5
Application Load Balancer를 사용해 EC2 인스턴스에서 호스팅된 웹사이트의 트래픽을 분배하고 있습니다. 그런데 여러분의 웹사이트가 Application Load Balancer의 IP 주소인 사설 IPv4 주소에서 들어오는 트래픽만을 확인하고 있는 것으로 나타났습니다. 이런 경우, 웹사이트로 연결된 클라이언트들의 IP 주소를 받으려면 어떻게 해야 할까요?

(웹사이트의 백엔드를 수정해 `X-Forwarded-For` 헤더로부터 클라이언트 IP 주소를 가져오도록 만들기) Application Load Balancer를 사용하여 EC2 인스턴스에 트래픽을 배분하는 경우, 요청을 받게 되는 IP 주소는 ALB의 사설 IP 주소가 됩니다. 클라이언트의 IP 주소를 받기 위해, ALB는 클라이언트의 IP 주소를 포함하고 있는 X-Forwarded-For라는 헤더를 추가합니다.



## Question 6
Elastic Load Balancer가 관리하는 한 세트의 EC2 인스턴스 상에 애플리케이션을 호스팅했습니다. 일주일 후, 사용자들은 가끔씩 애플리케이션이 작동하지 않는다며 호소하기 시작했습니다. 문제점을 조사한 결과, 일부 EC2 인스턴스가 이따금 충돌한다는 문제점이 발견되었습니다. 사용자들이 충돌하는 EC2 인스턴스에 연결되지 않도록 보호하기 위해서는 어떻게 해야 할까요?

(ELB Health Check) ELB 상태 확인을 활성화하면, ELB가 비정상(충돌) EC2 인스턴스로는 트래픽을 보내지 않게 됩니다.



## Question 9
Application Load Balancer는 트래픽을 다른 대상 그룹으로 라우팅할 수 있습니다. 이때 확인할 내용으로 사용할 수 없는 것을 고르세요

ALB는 URL 경로, 호스트 이름, HTTP 헤더 및 쿼리 문자열을 기반으로 트래픽을 다른 대상 그룹으로 라우팅할 수 있습니다.



## Question 10:
Application Load Balancer의 대상 그룹에 등록된 대상이 될 수 없는 것을 고르세요.

✓ Network Load Balancer (NLB)


## Question 11
규정 준수를 위해, 고정된 정적 IP 주소를 최종 사용자에게 노출하여 사용자들이 안정적이고, 규제 기관의 승인을 받은 방화벽 규칙을 작성할 수 있도록 하려 합니다. 이런 경우, 다음 중 어떤 종류의 Elastic Load Balancer를 사용해야 할까요?

- Application Load Balancer에 탄력적 IP를 연결하는 것은 불가능합니다.
- Network Load Balancer는 AZ 당 하나의 정적 IP 주소를 가지며, 여기에 탄력적 IP 주소를 연결할 수 있습니다. Application Load Balancer와 Classic Load Balancer를 정적 DNS 이름으로 사용할 수 있습니다.



## Question 12
Application Load Balancer 내에 사용자 지정 애플리케이션 기반 쿠키를 생성하려 합니다. 다음 중 쿠키의 이름으로 사용 가능한 것은 무엇인가요?

- `AWSALBAPP`
- ✓ `APPUSERC`
- `AWSALBTG`
- `AWSALB`


## Question 13
us-east-1에 있는 한 세트의 EC2 인스턴스에 트래픽을 배분하는 Network Load Balancer가 있습니다. us-east-1b AZ에 2개의 EC2 인스턴스, us-east-1e AZ에는 5개의 EC2 인스턴스가 있습니다. 여러분은 us-east-1b AZ에 있는 EC2 인스턴스의 CPU 사용률이 더 높다는 것을 발견했습니다. 조사를 거친 결과, 두 개의 AZ에 걸쳐 분배된 트래픽의 양은 동일한 것으로 나타났습니다. 이 경우, 어떻게 문제를 해결해야 할까요?

영역간 로드 밸런싱을 활성화하면, ELB가 모든 AZ에 있는 등록된 EC2 인스턴스 전체에 동등하게 분배됩니다.


## Question 15
다음과 같은 호스트 이름을 기반으로, 트래픽을 3개의 대상 그룹으로 리다이렉팅하도록 구성된 Application Load Balancer가 있습니다: users.example.com, api.external.example.com, checkout.example.com. 이 각각의 호스트 이름에 HTTPS를 구성하려 합니다. 이런 작업을 위해서는 ALB를 어떻게 구성해야 할까요?

서버 이름 표식(SNI)을 사용하면 동일한 리스너 상에 있는, 자체 SSL 인증서를 가진 다수의 HTTPS 애플리케이션을 노출시킬 수 있습니다. 더 많은 정보는 여기를 참고하세요: https://aws.amazon.com/blogs/aws/new-application-load-balancer-sni/



## Question 16
원하는 용량과 최대 용량을 모두 3으로 구성한 오토 스케일링 그룹에 의해 관리되고 있는, 한 세트의 EC2 인스턴스에 호스팅된 애플리케이션이 있습니다. 또한, CPU 사용률이 60%에 이르면 ASG를 스케일 아웃하도록 구성된 CloudWatch 경보도 생성해 뒀습니다. 해당 애플리케이션은 현재 갑자기 많은 양의 트래픽을 전송 받아 80% CPU 사용률에서 실행되고 있는 상태입니다. 이런 경우, 무슨 일이 일어나게 될까요?

- ✓ 아무 일도 일어나지 않음
- X 희망 용량은 4까지 올라가는 반면, 최대 용량은 3에 머뭄


## Question 17
Application Load Balancer가 관리하는 오토 스케일링 그룹이 있습니다. ASG가 ALB 상태 확인을 사용하도록 구성을 해둔 상태인데, EC2 인스턴스가 비정상인 것으로 보고되었습니다. EC2 인스턴스에는 무슨 일이 일어나게 될까요?

오토 스케일링 그룹이 EC2 상태 확인(기본 설정)이 아닌 Application Load Balancer의 상태 확인을 기반으로 EC2 인스턴스의 상태를 판단하도록 구성할 수 있습니다. EC2 인스턴스가 ALB의 상태 확인에 실패할 경우, 이는 비정상인 것으로 표시되어 종료되며 ASG는 새로운 EC2 인스턴스를 실행합니다.



## Question 19
한 애플리케이션이 애플리케이션 로드 밸런서(ALB)와 오토 스케일링 그룹(ASG)을 통해 배포되었습니다. 이 상태에서 ASG의 크기를 수동으로 조정해 EC2 인스턴스의 평균 연결 개수가 약 1,000개가 되도록 조정 정책을 정의하려고 합니다. 어떤 조정 정책을 사용해야 합니까?

ALB만이 EC2 인스턴스로 액세스할 수 있게 할 수 있는 가장 안전한 방법입니다. 규칙에서 보안 그룹을 참조하는 것은 매우 강력한 규칙으로, 이 내용을 바탕으로 많은 시험 문제가 출제됩니다. 그러니 이에 관련된 내용은 반드시 숙지하도록 하세요!



## Question 20:
오토 스케일링 그룹(ASG)과 네트워크 로드 밸런서로 구성된 환경이 있습니다. ASG에 있는 애플리케이션은 HTTP 프로토콜을 지원하고 로드 밸런서 상태 확인(Health Check)을 사용하도록 설정돼 있습니다. 다음 중 현재 사용하고 있는 TCP 상태 확인을 HTTP 상태 확인으로 변경하는 방법은 무엇입니까?

NLB는 TCP, HTTPS 및 HTTP 상태 확인을 지원합니다.


