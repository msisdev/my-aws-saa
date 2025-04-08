---
title: Sumamry
---

## 351 VPC Section Summary
CIDR
- IP range

VPC
- Virtual Private Cloud
- we define a list of IPv4 & IPv6 CIDR

Subnet
- tied to an AZ
- we define a CIDR

Internet gateway
- VPC level
- provide IPv4 & IPv6 internet access

Route table
- add route
  - from subnet
  - to IGW, VPC Peering Connection, VPC Endpoint, ...

Bastion host
- a public EC2 instance
- a SSH broker to EC2 in private subnet

NAT instance
- a public EC2 instance
- give internet access to private EC2
- disable Source/Destination check flag

NAT Gateway
- managed
- target is IPv4

NACL
- stateless
- subnet level
- inbound & outbound
- Ephemeral Port

Security Group
- stateful
- EC2 level

VPC Peering
- connect 2 VPCs
- non overlapping CIDR
- non-transitive

VPC Endpoint
- private access to AWS services within VPC

VPC Flow Logs
- VPC, subnet or ENI level
- ACCEPT & REJECT traffic
- identify attacks
- Athena, CLoudWatch Logs Insights

Site-to-Site VPN
- [Setup](https://docs.aws.amazon.com/ko_kr/vpn/latest/s2svpn/how_it_works.html)
  - Virtual private gateway or Transit gateway
  - Customer gateway device
  - Customer gateway
- connect VPC & remote on-premise network

AWS VPN CloudHub
- multiple VPN connected sites

Dicrect Connect
- setup Virtual Private Gateway on VPC
- establish a direct private connection to AWS Direct Connect Location

Direct Connect Gateway
- setup a Direct Connect to many VPCs in different AWS regions

AWS PrivateLink / VPC Endpoint Services
- connect services privately from your service VPC to customers VPC
- does not require VPC Peering, pubic internet, NAT Gateway, Route Table
- requires Network Load Balancer & ENI

ClassicLink
- connect EC2 instances privately to VPC

Transit Gateway
- transitive peering connection for VPC, VPN, DX

Traffic Mirroring
- cony network traffic from ENI

Egress-only Internet Gateway
- NAT Gateway for IPv6
