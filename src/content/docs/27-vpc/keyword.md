---
title: Keyword
---

## 318 CIDR, Public IP, Private IP

### CIDR IPv4
Classless Inter-Domain Routing

IP address range
- `ww.xx.yy.zz/32`: one IP
- `0.0.0.0/0`: all IP

CIDR consists of
- Base IP
- Subnet mask

### Public vs Private IP
Internet Assigned Numbers Authority (IANA) established public and private IP

Private IP can only use
- `10.0.0.0/8`: big network
- `172.16.0.0/12`: AWS default VPC range
- `192.168.0.0/16`: home networks




## 320 AWS VPC
max 5 VPC per region

max 5 CIDR per VPC
- Min. `/28`
- Max. `/16`




## 322 Subnet
Subrange of IPv4 address range

AWS reserves 5 IP addresses (first 4, last 1) in each subnet

Example 10.0.0.0/24
- `10.0.0.0`: network address
- `10.0.0.1`: VPC router
- `10.0.0.2`: Amazon provided DNS
- `10.0.0.3`: future use
- `10.0.0.255`: network broadcast address

*exam* If you need 29 IP addresses
- choose bigger than `/27` (32 - 5 = 27 < 29)




## 324 Internet Gateway & Route Table
### Internet Gateway
Allow resources in a VPC connect to the Internet

1 IGW per 1 VPC




## 326 Bastion Host
Use Bastion Host to SSH into private EC2 instances

Bastion is in public subnet
- public subnet is connected to all other private subnets

Bastion Host security group must allow inbound port 22 from restricted CIDR (public CIDR)
- Security Group of EC2 instances must allow Security Group of the Bastion Host or the private IP of the Bastion Host




## 326 NAT Instance
Network Address Translation
- in public subnet
- have Elastic IP
- disable Source/Destination Check
- Route Table must be configured: private subnet -> NAT

Infos...
- pre-configured Amazon Linux AMI available
- not HA out of the box, DIY
- bandwidth depends on EC2 instance type
- manage Security Groups
  - inbound: allow HTTP/HTTPS from private subnet
  - inbound: allow SSH from home network
  - outbound: allow HTTP/HTTPS to internet




## 330 NAT Gateway
Managed NAT
- higher bandwidth, availabililty
- specific AZ
- Elastic IP
- only with other subnet
- requires IGW (Private Subnet -> NATGW -> IGW)
- No Security Groups required

![Diagram](/27/nat-gateway.png)

NAT Gateway with HA
- resilient within a single AZ
- Must create multiple NAT Gateway in multiple AZs for fault-tolerance




## 332 Security Group & NACL
![Diagram](/27/nacl.png)

NACL = subnet firewall
- 1 NACL per subnet
- block a specific IP

NACL rules
- precedence number: 1 (high precedence) -> 32766 (low precedence)
- only the first rule match applies
- last rule is '*', denies everything

New NACL: deny everything (not default)

![Diagram](/27/nacl-big-picture.png)

### Default NACL
Accept every inbound/outbound

Do NOT modify default NACL, create custom NACLs *why*

### Ephemeral Port
Client -> Server
- defined port: at server, send request
- ephemeral port: at client, get response

### NACL Ephemeral Port
In the VPC...
- Public subnet
  - Web-NACL
    - App
- Private subnet
  - DB-NACL
    - DB

Request
- Web-NACL
  - Allow outbound
    - TCP
    - :3306
    - DB subnet CIDR
- DB-NACL
  - Allow inbound
    - TCP
    - :3306
    - Web subnet CDR

Response
- DB-NACL
  - Allow outbound
    - TCP
    - :1024-65535
    - Web subnet CIDR
- Web-NACL
  - Allow inbound
    - TCP
    - :1024-65535
    - DB subnet CIDR

### Create NACL rules for each target subnet CIDR

### Security Group vs NACL
| Security Group | NACL |
|----------------|------|
| Instance level | Subnet level |
| Allow          | Allow & Deny |
| Stateful: return traffic is automatically allowed | Stateless: return traffic must be explicitly allowed (ephemeral port) |
| All rules are evaluated | First match evaluated |




## 334 VPC Peering
Privately Connect 2 VPCs

Not transitive
- A&B, B&C -> A&C is not valid

Good to know
- connect VPCs across account/region
- reference a security group in peer VPC




## 336 VPC Endpoint
Connect to AWS service privately
- replaces IGW, NATGW, ...

In case of issues
- Check VPC DNS resolution
- Check route table

### Types of endpoint
Interface endpoint (by PrivateLink)
- EC2 -> ENI -> service

Gateway endpoint
- EC2 -> Gateway -> service
- supports S3, DynamoDB

Which to use for S3
- Gateway is most likely to be preferred
  - free
- Interface is preferred:
  - from on-premise
  - from different VPC/region




## 338 VPC Flow Log
Information about IP traffic into
- VPC Flow Log
- Subnet Flow Log
- Elastic Network Interface Flow Log
- ELB, RDS, ElastiCache, Redshift, WorkSpaces, NATGW, Transit Gateway, ...

Send logs to
- S3
- CloudWatch Log
- Kinesis Data Firehose

VPC Flow Log syntax
- srcaddr, dstaddr: IP
- srcport, dstport: Ports
- Action: success or failure of the request due to Security Group or NACL
- Query with Athena or CloudWatch Logs Insights

Troubleshoot SG & NACL issue
- Inbound reject: SG or NACL
- Inbound accpet, outbound reject: NACL
- Outbound reject: SG or NACL
- Outbound accept, inbound reject: NACL

### Architecture
VPC Flow Logs -> CloudWatch Logs -> CloudWatch Contributor Insights -> Top 10 IPs

VPC Flow Logs -> CloudWatch Logs (filter metrics) -> CW Alarm -> SNS

VPC Flow Logs -> S3 -> Athena -> QuickSight




## 340 AWS Site-to-Site VPN
![Diagram](/27/site-to-site.png)
Connect VPC with external server

### What you need:
Virtual Private Gateway (VPG)
- on the AWS side
- customize ASN (Autonomous System Number)

Customer Gateway (CGW)
- software app or physical device on customer side

### Practice
What IP address to use - Customer Gateway Device
- Public internet routable IP
- If NAT device is used, use public IP of the NAT

Enable Route Propagation for VPC in the route table

If you need ping from on-premise to EC2
- Security Group
  - Inbound
    - add ICMP protocol

### AWS VPN CloudHub
Secure communication between multiple sites

How to setup
- Connect multiple VPN on the same VGW
- Setup dynamic routing
- Config route tables




## 342 Direct Connect (DX)
Private connecction from remote network to VPC

Requirement
- Virtual Private Gateway

Access both public/private resource

Use case
- increase bandwidth
- more consistent network experience, real-time data feed
- hybrid environment

### Connection Types
Dedicated connection
- 1, 10, 100 Gbps
- dedicated physical ethernet port
- 

Hosted connection
- 50Mbps, 500Mbps ~ 10Gbps

Setup takes more than 1 month!

### Encryption
No encryption

AWS Direct Connect, VPN
- IPsec

### Resiliency
High resiliency for critical workloads
- 2 Direct connection
- 1 connection per location

Maximum resiliency
- 2 Direct Connection
- 2 connection per location





## 343 Direct Connect & Site-to-Site VPN
In case Direct Connect fails,
1. backup Direct Connect (expensive)
2. Site-to-Site VPN connection




## 344 Transit Gateway
Transitive peering between
- VPC
- Direct Connect Gateway (from On-Premise)
- VPN connection

Cross region/account

Route table

IP multicast

### ECMP
Equal cost multi path routing
- Allow packet forwarding over multiple best path

Create multiple Site-to-Site VPN connections, increase bandwidth

Transit Gateway can connect to multiple Site-to-Site VPNs.

| VPN + Virtual Private Gateway | VPN + Transit Gateway |
| 1 VPN & 1 VPC                 | 1 VPN & multiple VPC  |
| 1 VPN = 1.25 Gbps             | n VPN = 2.5n Gbps (ECMP) |
| VPN has 2 tunnels             | n VPN has 2n tunnels  |

### Share Direct Connect between multiple accounts
![Diagram](/27/transit-gateway.png)




## 345 VPC Traffic Mirroring
Capture and inspect network traffic in non-intrusive manner

![Diagram](/27/mirroring.png)
Capture traffic at source app and send to security app
- source: many ENI
- target: an ENI or Network Load Balancer

Capture all or some packets

Source and target can be in same VPC or different VPCs (by VPC peering)




## 346 VPC IPv6
Every IPv6 in AWS is public and routable

IPv6
- format: xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx:xxxx (32 hex = 64 byte)

IPv4 cannot be disabled
- IPv6 is for dual-stack mode
  - private IPv4 & public IPv6

### IPv6 Troubleshooting
IPv4 never get disabled.

If you cannot launch a new EC2
- it's because IPv4 is full.
- create a new subnet with new IPv4 CIDR




## 348 Egress-only Internet Gateway
Allow outbound connection over IPv6
- IPv6 only

Route table for egress-only
- `0.0.0.0/0` -> NAT Gateway
- `::/0` -> Egress-only Interget Gateway



## 352 Networking Cost
