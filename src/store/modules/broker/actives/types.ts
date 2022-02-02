export enum ActivesTypes {
    GET_ACTIVES = 'USER/GET_ACTIVES',
    SUCCCES_ACTIVES = 'USER/SUCCCES_ACTIVES',
    ERROR_ACTIVES = 'USER/ERROR_ACTIVES'
}

export interface Actives {
    charts: {
        d1: {
            change: string;
            quotes: [];
            __typename: string; 
        };
        y5: {
            change: string;
            __typename: string; 
        };
        __typename: string;
    };
    id: number;
    media: {
        card: string;
        logo: string;
        __typename: string;
    };
    name: string;
    price: number;
    quotation: {
        ask: number;
        bid: number;
        __typename: string;
    };
    ticker: string;
    type: string;
    __typename: string;
}

export interface ActivesState {
    readonly data: Actives[]
    readonly loading: boolean
    readonly error: boolean
}