import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";

import { Container, Contents } from "./styles";

import Sidebar from "./Sidebar";

import DashboardPage from "./Pages/Dashboard";
import MarketPage from "./Pages/Market";
import { MarketProvider } from "../../contexts/market";

const AppPage: React.FC = () => {

    const { path } = useRouteMatch();

    return <Container>
        <Sidebar />
        <Contents>
            <Switch>
                <Route exact path={path}>
                    <Redirect to={`${path}/dashboard`} />
                </Route>
                <Route path={`${path}/dashboard`} component={DashboardPage} />
                <Route path={`${path}/market`}>
                    <MarketProvider>
                        <MarketPage />
                    </MarketProvider>
                </Route>
            </Switch>
        </Contents>
    </Container>
}

export default AppPage;