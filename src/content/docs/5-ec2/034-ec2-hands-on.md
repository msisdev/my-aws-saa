---
title: 034 ec2 hands-on
 
---

## Launch EC2
EC2 > Instances > Launch an instance

[Name and tags]  
Name = My First Instance

[Quick Start]  
Amazon Linux

[Amazon Machine Image (AMI)]  
Free tier eligible

[Key pair (login)]  
Create new keypair  
Key pair name = EC2 Tutorial  
Key pair type = RSA  
Private key file format = .pem (above Win10)

[Network settings]  
✓ Auto-assign public IP  

Firewall  
✓ Allow SSH traffic from = Anywhere  
✓ Allow HTTP traffic from the internet  

[Storage (volumes)]  
EBS Volumes > Advanced > Delete on termination = Yes

[User data - optional]
```bash
#!/bin/bash
# Use this for your user data (script from top to bottom)
# install httpd (Linux 2 version)
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "<h1>Hello World from $(hostname -f)</h1>" > /var/www/html/index.html
```

## Inspect EC2
EC2 > Instances > My instance

