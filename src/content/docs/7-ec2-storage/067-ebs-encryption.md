---
title: 067 EBS Encryption
---

When you encrypt EBS volume:
- Data at rest is encrypted inside the volume
- All the data in flight between instance and volume is encrypted
- All snapshots are encrypted
- All volumes from the snapshot are encrypted

Some properties
- Encryption/Decryption are handled automatically
- Encryption has minimal impact on latency
- EBS encryption leverages keys from KMS (AES-256)
- Copying an unencrypted snapshot allows encryption


## How to encrypt an unencrypted EBS
- Create an EBS snapshot
- Encrypt EBS snapshot (by copying)
- Create new EBS from snapshot
- Attach the new encrypted volume to the original instance
