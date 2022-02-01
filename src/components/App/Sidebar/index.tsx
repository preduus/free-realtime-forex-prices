import { Link, useRouteMatch } from "react-router-dom";
import { AppMenu, AppMenuItem, AppMenuItems, Container, UserContent } from "./styles";


const Sidebar: React.FC = () => {

    const { path } = useRouteMatch()

    const MenuItems = [
        {"title": "Dashboard", "icon": "fas fa-th-large", "route": "/dashboard"},
        {"title": "Market", "icon": "fas fa-shopping-bag", "route": "/"},
        {"title": "Transactions", "icon": "fas fa-exchange-alt", "route": "/"},
        {"title": "Portfolio", "icon": "fas fa-briefcase", "route": "/"},
        {"title": "News", "icon": "fas fa-newspaper", "route": "/"},
    ];

    return <Container> 
        <UserContent>
            <div className="user-image">
                <img src="https://static.cdnpub.info/files/storage/public/5e/d5/504b6ea338b4a7j3c5.jpeg" alt="User" />
                <span></span>
            </div>
            <div className="user-block">
                <p>Pedro Rodrigues</p>
                <span>@preduus</span>
            </div>
            <div className="user-controls"></div>
        </UserContent>
        <AppMenu>
            <AppMenuItems>
                {MenuItems.map((item, i) => {
                    return <AppMenuItem key={i}>
                        <Link to={`${path}${item.route}`}><span className={item.icon} />{item.title}</Link>
                    </AppMenuItem>
                })}
            </AppMenuItems>
        </AppMenu>
    </Container>
}

export default Sidebar;