export enum ProfileTypes {
    GET_PROFILE = 'USER/GET_PROFILE',
    SUCCCES_PROFILE = 'USER/SUCCCES_PROFILE',
    ERROR_PROFILE = 'USER/ERROR_PROFILE'
}

export interface Profile {
    [key: string]: any
}

export interface ProfileState {
    readonly data: Profile
    readonly loading: boolean
    readonly error: boolean
}