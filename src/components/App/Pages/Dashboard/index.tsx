import { useEffect } from "react";
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { ApplicationState } from "../../../../store";
import { Actives } from "../../../../store/modules/broker/actives/types";
import * as ActivesActions from '../../../../store/modules/broker/actives/actions';

import { Table, TableHeader, TableHeaderItem, TableBody, TableRow, TableColumn, ActiveIcon } from "./table";
import { Container, PageHeader, Contents } from '../styles';

import { RefreshButton } from "./styles"

import Preloader from "../../../Preloader";

interface StateProps {
    actives: Actives[];
    loading: boolean;
}

interface DispatchProps {
    getActivesDispatch(): void
}
  
type Props = StateProps & DispatchProps

const DashboardPage: React.FC<Props> = ({loading, actives, getActivesDispatch}) => {

    useEffect(() => {
        getActivesDispatch();
<<<<<<< HEAD
    }, [getActivesDispatch]);
=======
    }, []);
>>>>>>> feature/create-project-readme

    return <Container>
        {loading && <Preloader />}
        <PageHeader>
            <div className="page-title">
                <h1>Dashboard</h1>
            </div>
            <div className="page-actions">
                <RefreshButton type="button" className="" onClick={getActivesDispatch}>Refresh</RefreshButton>
            </div>
        </PageHeader>
        <Contents>
            <Table cellSpacing={0} cellPadding={0}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderItem>Active name</TableHeaderItem>
                        <TableHeaderItem>Price</TableHeaderItem>
                        <TableHeaderItem>Bid</TableHeaderItem>
                        <TableHeaderItem>Ask</TableHeaderItem>
                        <TableHeaderItem>Variation</TableHeaderItem>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <>
                        {actives.map((active, i) => {
                            return <TableRow key={i}>
                                <TableColumn className="with-icon">
                                    <ActiveIcon src={`https://static.cdnroute.io/files${active.media.logo}`} alt={active.name} />
                                    {active.name}
                                </TableColumn>
                                <TableColumn>{active.price}</TableColumn>
                                <TableColumn>{active.quotation.bid}</TableColumn>
                                <TableColumn>{active.quotation.ask}</TableColumn>
                                <TableColumn>
                                    <span className={(parseFloat(active.charts.d1.change) < 0) ? "down" : "up"}>{parseFloat(active.charts.d1.change).toFixed(2)}%</span>
                                </TableColumn>
                            </TableRow>
                        })}
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
  
export default connect(mapStateToProps, mapDispatchToProps)(DashboardPage);
