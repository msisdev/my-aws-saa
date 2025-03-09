---
title: 039 ssh linux mac
 
---

1. Copy public IPv4 address
2. Make sure SSH is allowed (port 22)

`$ ssh -i MY_SECRET.pem ec2-user@xx.xx.xx.xx`
```
$ ssh -i EC2Tutorial.pem ec2-user@xx.xx.xxx.xxx
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
Permissions 0644 for 'EC2Tutorial.pem' are too open.
It is required that your private key files are NOT accessible by others.
This private key will be ignored.
Load key "EC2Tutorial.pem": bad permissions
ec2-user@xx.xx.xxx.xxx: Permission denied (publickey,gssapi-keyex,gssapi-with-mic).
FAIL

$ chmod 0400 EC2Tutorial.pem
$ ssh -i EC2Tutorial.pem ec2-user@xx.xx.xxx.xxx

A newer release of "Amazon Linux" is available.
  Version 2023.6.20250303:
Run "/usr/bin/dnf check-release-update" for full release and version update info
   ,     #_
   ~\_  ####_        Amazon Linux 2023
  ~~  \_#####\
  ~~     \###|
  ~~       \#/ ___   https://aws.amazon.com/linux/amazon-linux-2023
   ~~       V~' '->
    ~~~         /
      ~~._.   _/
         _/ _/
       _/m/'
[ec2-user@ip-172-31-38-146 ~]$ whoami
ec2-user
[ec2-user@ip-172-31-38-146 ~]$ ping google.com
PING google.com (142.250.207.46) 56(84) bytes of data.
64 bytes from nrt13s55-in-f14.1e100.net (142.250.207.46): icmp_seq=1 ttl=117 time=2.35 ms
64 bytes from nrt13s55-in-f14.1e100.net (142.250.207.46): icmp_seq=2 ttl=117 time=2.55 ms
64 bytes from nrt13s55-in-f14.1e100.net (142.250.207.46): icmp_seq=3 ttl=117 time=2.83 ms
64 bytes from nrt13s55-in-f14.1e100.net (142.250.207.46): icmp_seq=4 ttl=117 time=2.45 ms
^C
--- google.com ping statistics ---
4 packets transmitted, 4 received, 0% packet loss, time 3005ms
rtt min/avg/max/mdev = 2.354/2.547/2.833/0.179 ms
[ec2-user@ip-172-31-38-146 ~]$ 

```

How to close? `ctrl+D` | `$ exit` | `$ logout`