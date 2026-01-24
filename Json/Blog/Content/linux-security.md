# Building Secure Systems with Linux and Docker

In the modern landscape of cloud computing, security cannot be an afterthought. "Security is not a product, but a process." When deploying applications in containers, the security of the underlying Linux host is just as critical as the configuration of the containers themselves. This guide explores a defense-in-depth strategy for hardening Linux servers and Docker environments.

## Part 1: Hardening the Linux Host

Before you even install Docker, your Linux server must be secured. A compromised host means compromised containers.

### 1. Minimal Attack Surface
- **Use a Minimal Distro:** Alpine Linux or minimal installs of Debian/Ubuntu reduce the number of potential vulnerabilities.
- **Disable Unused Services:** Check running services with `systemctl list-units --type=service` and disable anything not strictly necessary.

### 2. Network Security (Firewall)
Never expose ports directly unless necessary. Use **UFW (Uncomplicated Firewall)** to manage traffic.

```bash
# Deny all incoming traffic by default
sudo ufw default deny incoming
# Allow all outgoing traffic
sudo ufw default allow outgoing
# Allow SSH (limit this to your IP if possible)
sudo ufw allow ssh
# Allow Web Traffic
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
# Enable the firewall
sudo ufw enable
```

### 3. Fail2Ban
Install **Fail2Ban** to protect against brute-force attacks. It scans log files and bans IPs that show malicious signs (e.g., too many password failures).

```bash
sudo apt update && sudo apt install fail2ban
```

## Part 2: Docker Security Best Practices

Docker containers are isolated, but they share the host kernel. Misconfiguration can lead to container breakouts.

### 1. Do Not Run as Root
By default, processes inside a Docker container run as root. If an attacker exploits a vulnerability in the application, they gain root access inside the container, which brings them one step closer to the host.

**Dockerfile Best Practice:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
# Create a user and switch to it
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
CMD ["node", "index.js"]
```

### 2. Use Multi-Stage Builds
Smaller images have fewer vulnerabilities. Use multi-stage builds to exclude build tools and source code from the final production image.

```dockerfile
# Build Stage
FROM golang:1.19 AS builder
WORKDIR /src
COPY . .
RUN go build -o myapp

# Production Stage
FROM alpine:latest
WORKDIR /root/
COPY --from=builder /src/myapp .
CMD ["./myapp"]
```

### 3. Resource Limits (DoS Protection)
An unlimited container can consume all host CPU/RAM, crashing the server. Always set limits in your `docker-compose.yml`.

```yaml
services:
  web:
    image: my-web-app
    deploy:
      resources:
        limits:
          cpus: '0.50'
          memory: 512M
```

### 4. Read-Only Filesystems
If your application doesn't need to write to disk, mount the root filesystem as read-only. This prevents attackers from installing malware or modifying configs.

```bash
docker run --read-only my-image
```

## Conclusion

Securing infrastructure is a continuous battle. By combining Linux hardening techniques (Firewalls, Fail2Ban, Least Privilege) with strict Docker policies (Non-root users, Resource limits, Minimal images), you create a robust system that is significantly harder to compromise.
