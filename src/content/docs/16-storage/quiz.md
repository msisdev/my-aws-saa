---
title: Quiz
---

## Question 1:

수백 TB의 데이터를 Amazon S3로 이전한 후, EC2 인스턴스 플릿을 사용해 처리해야 합니다. 광대역은 1Gbit/초입니다. 여러분은 데이터를 더 빠르게 이전하고, 가능하면 전송 중에 데이터를 처리했으면 합니다. 어떤 방법을 추천할 수 있을까요?

- Snowball Edge


## Question 2:

테이프 백업에 가상 인피니트 스토리지를 노출하려고 합니다. 여러분은 사용 중인 것과 동일한 소프트웨어를 유지하고, iSCSI와 호환 가능한 인터페이스를 사용하려 합니다. 어떤 방법을 사용해야 할까요?

- AWS Storage Gateway - Tape Gateway


## Question 3:

여러분의 EC2 Windows 서버는 Windows의 보안 메커니즘을 준수하며, Microsoft Active Directory와 통합된 네트워크 파일 시스템을 마운트하여 일부 데이터를 공유해야 합니다. 어떤 방법을 추천할 수 있을까요?

- FSx for Window


## Question 4:

여러분은 수백 TB의 데이터를 AWS S3로 최대한 빨리 이전시켜야 합니다. 여러분의 네트워크 대역폭을 사용해보려 했으나, 업로드 프로세스가 완료되기까지 약 3주가 소요됩니다. 이런 경우 어떤 접근법이 권장될까요?

- Snowball Edge


## Question 5:

S3에 대규모의 데이터셋이 저장되어 있습니다. 여러분은 NFS, 혹은 SMB 프로토콜을 사용해 온프레미스 서버를 통해 이 데이터셋에 액세스하려 합니다. 또한, 온프레미스 Microsoft AD를 통해 이러한 파일에 대한 액세스를 인증하고자 합니다. 무엇을 사용해야 할까요?

- AWS Storage Gateway - File Gateway


## Question 6:

기업의 인프라를 온프레미스에서 AWS Cloud로 이전시킬 계획을 가지고 있습니다. 여러분은 이전시키려는 온프레미스 Microsoft Windows 파일 서버를 갖고 있습니다. 어떤 AWS 서비스를 사용하는 것이 가장 적절할까요?

- FSx for Window


## Question 7:

고성능 컴퓨팅(HPC)과 전산 유전학 연구를 수행하기 위해 IOPS를 최대화해 줄 분산 POSIX 준수 파일 시스템이 필요한 상황입니다. 이 파일 시스템은 수백만 개의 IOPS로 손쉽게 스케일링할 수 있어야 합니다. 어떤 방법을 추천할 수 있을까요?

- FSx for Lustre


## Question 8:

FSx 파일 시스템에 있는 다음 배포 옵션 중에서 AZ 내에 복사된 장기 스토리지를 제공하는 것은 무엇인가요?

- X Scratch File System
- ✓ Persistent File System


## Question 10:

회사는 AWS의 FSx for Windows 파일 서버 스토리지에 저장된 수많은 파일과 데이터를 사용하고 있습니다. 이 파일들은 현재 AWS에 호스팅된 리소스에서 사용됩니다. 이 파일들을 온프레미스에서 짧은 지연 시간으로 액세스할 수 있어야 합니다. 이를 달성하는 데 도움이 될 만한 AWS 서비스는 무엇입니까?

- FSx File Gateway


## Question 11:

솔루션 아키텍트가 한 스타트업의 온프레미스 서버를 AWS로 이전하는 작업을 계획하고 있습니다. 현재 회사의 인프라는 공유 NFS 스토리지에 호스팅된 여러 개의 서버와 30TB의 데이터로 구성되어 있습니다. 아키텍트는 Amazon S3를 사용해 데이터를 호스팅하기로 결정했습니다. 데이터를 온프레미스에서 S3로 효율적으로 이전할 수 있는 AWS 서비스는 무엇입니까?

- X Transfer Family
  - For daily file transfer
  - Cost by time
  - No support for large migration
- ✓ DataSync


## Question 12:

S3 버킷에 있는 다량의 데이터를 EFS 파일 시스템으로 옮기는 데 가장 적합한 AWS 서비스는 무엇입니까?

- DataSync


## Question 13:

한 머신 러닝 업체가 S3 버킷에 호스팅된 데이터 세트를 기반으로 연구를 진행하고 있습니다. 업체는 다른 사람들이 연구에 활용할 수 있도록 데이터 세트 중 일부를 공개하기로 결정했지만, S3 버킷 자체를 퍼블릭(Public)으로 설정하는 건 원치 않습니다. 또한 데이트 세트는 FTP 프로토콜로 접근할 수 있어야 합니다. 최소한의 노력으로 이 요구 사항을 충족하려면 어떻게 해야 합니까?

- Transfer Family


## Question 14:

Amazon FSx for NetApp ONTAP는 다음 중 ………………를 제외한 나머지 프로토콜과 호환됩니다.

- NFS, SMB, iSCSI


## Question 15:

온프레미스 ZFS 파일 시스템을 AWS로 마이그레이션 하는데 가장 적합한 AWS 서비스는 무엇입니까?

- FSx for OpenZFS


## Question 16:

회사에서는 Amazon S3 파일 게이트웨이를 실행해 S3 버킷에 데이터를 호스팅하고 있으며, SMB를 사용해 해당 데이터를 온프레미스에 마운트할 수 있습니다. 현재 데이터는 S3 Standard 스토리지 클래스에 호스팅되어 있는데 S3에 드는 비용을 절감하기 위해 데이터 중 일부를 S3 Glacier로 옮기기로 결정했습니다. 데이터를 S3 Glacier로 자동으로 옮길 수 있는 가장 효율적인 방법은 무엇입니까?

- S3 Lifecycle Rule


## Question 17:

사내 서버에 있는 중요 파일과 문서를 주기적으로 AWS에 동기화시켜 복사본을 따로 보관하고자 합니다. 이럴 경우에 도움을 줄 수 있는 AWS 서비스는 무엇입니까?

- AWS DataSync는 온프레미스 스토리지 시스템과 AWS 스토리지 서비스 또는 AWS 스토리지 서비스 간의 데이터 이동을 단순화, 자동화, 가속화시켜주는 온라인 데이터 전송 서비스입니다.


