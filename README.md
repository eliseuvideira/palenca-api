# How to setup

Copy .env.example to .env

```sh
cp .env.example .env
```

## Fill the variables

```
# string(development | test | production | staging), example: development
NODE_ENV=development

# number, example: 50001
PORT=50001

# string, example: palenca-api
API_NAME=palenca-api

# string, example: example@email.com
UBER_LOGIN_EMAIL=pierre@palenca.com

# string, example: b7fgOifRh5souLzSg4b5gCS3ateuukzy01rr
UBER_LOGIN_PASSWORD=MyPwdChingon123

# string, example: 16HmBJgYtpWO6spYVE70QIslEDGirsEquK8Q
UBER_ACCESS_TOKEN=cTV0aWFuQ2NqaURGRE82UmZXNVBpdTRxakx3V1F5

# string, example: registry.server.pw/palenca-api
DOCKER_IMAGE=registry.ev1.pw/palenca/palenca-api

# string(en_US.UTF-8 | pt_BR.UTF-8 | ...), example: en_US.UTF-8
LANG=en_US.UTF-8

# string(UTC | America/Sao_Paulo | ...), example: UTC
TZ=UTC
```

## Run in development mode

```sh
yarn dev
```
