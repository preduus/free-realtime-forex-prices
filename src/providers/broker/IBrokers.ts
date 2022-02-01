
export interface IBroker {
    authenticate(credentials: IBrokerCredentials): Promise<IBrokerAuthenticateDTO>;
    getProfile(): Promise<IBrokerProfileDTO>;
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

export interface IBrokerProfileDTO {
    isSuccessful: boolean
    message: []
    result: {}
}