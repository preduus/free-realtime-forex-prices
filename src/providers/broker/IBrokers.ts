
export interface IBroker {
    authenticate(credentials: IBrokerCredentials): Promise<IBrokerAuthenticateDTO>;
}

export interface IBrokerCredentials {
    identifier: string;
    password: string;
}

export interface IBrokerAuthenticateDTO {
    code: string;
    message?: string;
    token?: string;
}