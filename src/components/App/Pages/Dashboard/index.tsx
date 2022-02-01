import { useState } from "react";
import { Container, PageHeader, Contents } from "./styles"
import { Table, TableHeader, TableHeaderItem, TableBody, TableRow, TableColumn } from "./table";


interface IExchargeActives {
    token: string;
    price: number;
    open: number;
    close: number;
    high: number;
    low: number;
    variation: {
        to: string;
        value: number;
    };
}

const DashboardPage: React.FC = () => {

    const [exchargeActives] = useState<IExchargeActives[]>([
        {
            token: "EUR/USD", 
            price: 3.131241, 
            open: 3.131241, 
            close: 3.131241, 
            high: 3.131241, 
            low: 3.131241, 
            variation: {
                to: "up",
                value: 15.5
            }
        },
        {
            token: "EUR/JPY", 
            price: 3.131241, 
            open: 3.131241, 
            close: 3.131241, 
            high: 3.131241, 
            low: 3.131241, 
            variation: {
                to: "down",
                value: 8.5
            }
        }
    ]);

    return <Container>
        <PageHeader>
            <div className="page-title">
                <h1>Dashboard</h1>
            </div>
        </PageHeader>
        <Contents>
            <Table cellSpacing={0} cellPadding={0}>
                <TableHeader>
                    <TableRow>
                        <TableHeaderItem>Token</TableHeaderItem>
                        <TableHeaderItem>Price</TableHeaderItem>
                        <TableHeaderItem>Open</TableHeaderItem>
                        <TableHeaderItem>Close</TableHeaderItem>
                        <TableHeaderItem>High</TableHeaderItem>
                        <TableHeaderItem>Low</TableHeaderItem>
                        <TableHeaderItem>Variation</TableHeaderItem>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <>
                        {exchargeActives.map((active, i) => {
                            return <TableRow key={i}>
                                <TableColumn>{active.token}</TableColumn>
                                <TableColumn>{active.price}</TableColumn>
                                <TableColumn>{active.open}</TableColumn>
                                <TableColumn>{active.close}</TableColumn>
                                <TableColumn>{active.high}</TableColumn>
                                <TableColumn>{active.low}</TableColumn>
                                <TableColumn>
                                    <span className={active.variation.to}>{active.variation.value}%</span>
                                </TableColumn>
                            </TableRow>
                        })}
                    </>
                </TableBody>
            </Table>
        </Contents>
    </Container>;
}

export default DashboardPage;