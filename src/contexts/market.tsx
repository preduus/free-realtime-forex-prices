import { createContext, ReactElement, useState } from "react";
import { Actives } from "../store/modules/broker/actives/types";


export interface IMarketProvider {
    marketPrices: any[];
    actives: Actives[];
    handleActives: (marketActives: Actives[]) => void;
    handleMarketPrices: (actives: any) => void;
}

interface IMarketProviderProps {
    children: ReactElement
}

const initialValues: IMarketProvider = {
    marketPrices: [],
    actives: [],
    handleActives: (actives: Actives[]) => {},
    handleMarketPrices: (message: string) => {}
}

export const MarketContext = createContext(initialValues);

export const MarketProvider = ({ children }: IMarketProviderProps) => {
    
    const [marketPrices, setMarketPrices] = useState([]);
    const [actives, setActives] = useState<Actives[]>([]);

    const handleActives = (marketActives: Actives[]) => {
        setActives(marketActives)
    }

    const handleMarketPrices = (marketActives: any) => {
        setMarketPrices(marketActives);
    }

    return <MarketContext.Provider value={{ marketPrices, actives, handleActives, handleMarketPrices }}>
        {children}
    </MarketContext.Provider>
}