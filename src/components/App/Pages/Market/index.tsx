import { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "../../../../store";
import { Actives } from "../../../../store/modules/broker/actives/types";
import * as ActivesActions from '../../../../store/modules/broker/actives/actions';
import { MarketContext } from '../../../../contexts/market';

import WebsocketProvider from "../../../../providers/broker/implementations/WebsocketProvider";

import { Container, PageHeader, Contents } from '../styles';
import { Table, TableHeader, TableHeaderItem, TableBody, TableRow, TableColumn, ActiveIcon } from "./table";

import Preloader from '../../../Preloader';

interface StateProps {
    actives: Actives[];
    loading: boolean;
}

interface IMarketPrices {
    active_id: number;
    ask: number;
    at: number;
    bid: number;
    close: number;
    from: number;
    id: number;
    max: number;
    min: number;
    open: number;
    phase: string;
    size: number;
    to: number;
    volume: number;
}

interface ILastPrices {
    [key: string]: any
}

interface DispatchProps {
    getActivesDispatch(): void
}
  
type Props = StateProps & DispatchProps

const lastPrices: ILastPrices = {};

const MarketPage: React.FC<Props> = ({loading, actives, getActivesDispatch}) => {

    const { handleActives, marketPrices } = useContext(MarketContext);

    useEffect(() => {
        getActivesDispatch();
    }, [getActivesDispatch])

    useEffect(() => {
        handleActives(actives);
    }, [actives, handleActives]);

    const handleLastPrice = (prices: IMarketPrices) => {
        if (prices) {
            Object.assign(lastPrices, {[`active_${prices.active_id}`]: prices});
        }
    }

    const getPricesAnimationEffect = (p: string, prices: any) => {
        if (!prices) return "";

        const key = `active_${prices.active_id}`;

        const getUpDown = (y: number, x: number) => {
            return (y > x) ? "up" : (y < x) ? "down" : ""
        }
        
        console.log(lastPrices);
        if (lastPrices.hasOwnProperty(key)) {
            const getLastPrice = lastPrices[key];
            return getUpDown(prices[`${p}`], getLastPrice[p]);
        }

        return ""
    }

    return <Container>
        <WebsocketProvider />
        {loading && <Preloader />}
        <PageHeader>
            <div className="page-title">
                <h1>Market</h1>
            </div>
        </PageHeader>
        <Contents>
            <Table cellSpacing={0} cellPadding={0}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderItem>Active name</TableHeaderItem>
                        <TableHeaderItem>Ask</TableHeaderItem>
                        <TableHeaderItem>Bid</TableHeaderItem>
                        <TableHeaderItem>Spread</TableHeaderItem>
                        <TableHeaderItem>Open</TableHeaderItem>
                        <TableHeaderItem>Closed</TableHeaderItem>
                        <TableHeaderItem>High</TableHeaderItem>
                        <TableHeaderItem>Low</TableHeaderItem>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <>
                    {marketPrices.length === 0 ? <Preloader /> :
                        marketPrices.map((active, i) => {       
                            return <TableRow key={i}>
                                <TableColumn className="with-icon">
                                    <ActiveIcon src={`https://static.cdnroute.io/files${active.media.logo}`} alt={active.name} />
                                    {active.name}
                                </TableColumn>
                                <TableColumn>{(active.current) ? active.current.ask : "--"}</TableColumn>
                                <TableColumn className={`${getPricesAnimationEffect("bid", active.current)}`}>{(active.current) ? active.current.bid : "--"}</TableColumn>
                                <TableColumn className={`${getPricesAnimationEffect("ask", active.current)}`}>{(active.current) ? (active.current.bid - active.current.ask).toFixed(4) : "--"}</TableColumn>
                                <TableColumn className={`${getPricesAnimationEffect("open", active.current)}`}>{(active.current) ? active.current.open : "--"}</TableColumn>
                                <TableColumn className={`${getPricesAnimationEffect("close", active.current)}`}>{(active.current) ? active.current.close : "--"}</TableColumn>
                                <TableColumn className={`${getPricesAnimationEffect("max", active.current)}`}>{(active.current) ? active.current.max : "--"}</TableColumn>
                                <TableColumn className={`${getPricesAnimationEffect("min", active.current)}`}>{(active.current) ? active.current.min : "--"}</TableColumn>
                                {handleLastPrice(active.current)}
                            </TableRow>
                        })
                    }
                    </>
                </TableBody>
            </Table>
        </Contents>
    </Container>;
}

const mapStateToProps = (state: ApplicationState) => {
    const data = state.actives.data;

    return { loading: state.actives.loading, actives: data}
};
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ActivesActions, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);