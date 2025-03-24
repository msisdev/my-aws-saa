---
title: 16 Keywords
---

## 174 AWS Snow Family

Snowcone, Snowball Edge

### Usage
1. Request Snowball device
2. Install client
3. Connect and copy files
4. Ship back
5. Data will be loaded into S3

### Edge Computing
Process data while it is being created on an edge location



## 176 Snowball into Glacier
Snowball -> S3 -> (S3 lifecycle policy) Glacier




## 177 Amazon FSx

3rd party high-performance file system

### FSx for Windows
SMB protocol, Windows NTFS

Microsoft Distributed File System (DFS) Namespaces

SSD, HDD

On-Premise

Multi-AZ

Backed-up daily to S3

### FSx for Lustre
(Linux + cluster)

For
- ML, HPC, Video, Financial, Electronic design automation

SSD, HDD

Integration with S3

On-Premise

### FSx Deployment Options
Scratch File System
- temporary
- no replication
- high burst
- for short-term processing

Persistent File System
- replicate within same AZ
- for long-term processing

### FSx for NetApp ONTAP
NFS, SMB, iSCSI protocol

Auto scaling

Snapshot, replication, compresesion, de-duplication

Point-in-time instantaneous cloning

### FSx for OpenZFS
NFS protocol

Snapshot, compression

Point-in-time instantaneous cloning



## 179 Storage Gateway
### Hybrid Cloud
Cloud + On-Premise

How to expose S3 On-Premise: Gateway

### Cloud Native Storage Options
In Block, File or Object

### AWS Storage Gateway
Data bridge between On-Premise & Cloud

Use case
- disaster recovery
- backup & restore
- tiered storage
- on-premises cache & low-latency file access

### Type of Gateway

#### S3 File Gateway
NFS or SMB protocol

IAM roles for each File Gateway

SMB protocol supports Active Directory (AD) for user authentication

#### FSx File Gateway
Local cache for frequently accessed data

#### Volume Gateway
Block storage using iSCSI protocol

Backed by EBS snapshot

Cached volumes

Stored volums

#### Tape Gateway
Virtual Tape Library (VTL)

backed by S3 and Glacier


### Hardware Appliance
Order hardware for your Storage Gateway




## 181 Transfer Family
Transfer file into/out of S3 or EFS

Supported protocols
- FTP
- FTPS
- SFTP



## 182 DataSync
(appear a lot in exam)

Move large amount of data
- On-premise/other cloud to AWS
- AWS to AWS

Synchronize to
- S3, EFS, FSx

Replication tasks can be scheduled

Files permissions, metadata are preserved

### NFS/SMB to AWS
AWS DataSync Agent vs Snowcone
- Network capacity

### Between AWS
Copy data and metadata between AWS Storages
- S3, EFS, FSx




## 183 AWS Storage Comparison
| Storage | Description |
|---------|-------------|
| S3 | Object Storage |
| S3 Glacier | Object archival |
| EBS | Network storage, one EC2 instance at a time |
| Instance Storage | Physical storage, for EC2 |
| EFS | Network file system |
| FSx for Windows | fo Windows server |
| FSx for Lustre | Linux file system |
| FSx for NetApp ONTAP | High OS compatibility |
| FSx for OpenZFS | managed ZFS file system |
| Storage Gateway | S3/FSx File Gateway, Volume Gateway, Tape Gateway |
| Transfer family | FTP, FTPS, SFTP on top of S3/EFS |
| DataSync | Schedule dat async between On-premise/AWS to AWS |
| Snowcone/Snowball/Snowmobile | move large amount of data physically |
| DB | specific workloads, indexing, querying |


