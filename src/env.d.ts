declare namespace NodeJS {
  export interface ProcessEnv {
    // string(development | test | production | staging), example: development
    NODE_ENV: "development" | "test" | "production" | "staging";

    // number, example: 50001
    PORT: string;

    // string, example: palenca-api
    API_NAME: string;

    // string, example: example@email.com
    UBER_LOGIN_EMAIL: string;

    // string, example: b7fgOifRh5souLzSg4b5gCS3ateuukzy01rr
    UBER_LOGIN_PASSWORD: string;

    // string, example: 16HmBJgYtpWO6spYVE70QIslEDGirsEquK8Q
    UBER_ACCESS_TOKEN: string;

    // string, example: registry.server.pw/palenca-api
    DOCKER_IMAGE: string;

    // string(en_US.UTF-8 | pt_BR.UTF-8 | ...), example: en_US.UTF-8
    LANG: string;

    // string(UTC | America/Sao_Paulo | ...), example: UTC
    TZ?: string;
  }
}
