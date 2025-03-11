---
title: 083 SSL/TLS
---

SSL Certificate allows traffic between your client and your load balancer to be encrypted in-flight

SSL: Secure Sockets Layer

TLS: Transport Layer Security

Public SSL cert are issued by Certificate Authorities (CA)

SSL certs have expiration date


## In Load Balancer
```
[User] <- HTTPS -> [Load Balancer] <- HTTP -> [EC2 instance]
```


## Server Name Indication
- It is a newer protocol
- SNI solves the problem of loading mutliple SSL certificates onto one web server
- requires the client to indicate the hostname of the targeted server in the initial SSL handshake
- The server will find the correct certificate or return the default
- Available in ALB, NLB, CloudFront


## Summary
Classic LB
- only one SSL cert

Application LB
- mutliple listeners with multiple SSL cert
- uses SNI

Network LB
- mutliple listeners with multiple SSL cert
- uses SNI

