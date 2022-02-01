import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Link, useRouteMatch } from "react-router-dom";
import { Profile } from '../../../store/modules/user/profile/types';
import * as ProfileActions from '../../../store/modules/user/profile/actions';

import { AppMenu, AppMenuItem, AppMenuItems, Container, UserContent } from "./styles";
import { ApplicationState } from '../../../store';
import { useEffect } from 'react';
import { getThumbnail } from '../../../utils/thumbnails';
import UserContentShimmer from '../Shimmer/UserContentShimmer';


interface StateProps {
    profile: Profile;
    loading: boolean;
}

interface DispatchProps {
    getProfileHDispatch(): void
}
  
type Props = StateProps & DispatchProps
  

const Sidebar: React.FC<Props> = ({ loading, profile, getProfileHDispatch }) => {

    const { path } = useRouteMatch();

    const MenuItems = [
        {"title": "Dashboard", "icon": "fas fa-th-large", "route": "/dashboard"},
        {"title": "Market", "icon": "fas fa-shopping-bag", "route": "/"},
        {"title": "Transactions", "icon": "fas fa-exchange-alt", "route": "/"},
        {"title": "Portfolio", "icon": "fas fa-briefcase", "route": "/"},
        {"title": "News", "icon": "fas fa-newspaper", "route": "/"},
    ];

    useEffect(() => {
        getProfileHDispatch();
    }, []);

    useEffect(() => {
        console.log(profile);
    }, [profile]);

    return <Container> 
        <UserContent>
            {loading ? (
                <UserContentShimmer />
            ) : (
                <>
                    <div className="user-image">
                        <img src={profile.thumbnail} alt="User" />
                        <span></span>
                    </div>
                    <div className="user-block">
                        <p>{profile.name || ""}</p>
                        <span>{profile.email || ""}</span>
                    </div>
                    <div className="user-controls"></div>
                </>
            )}
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

const mapStateToProps = (state: ApplicationState) => {
    const data = state.profile.data;

    return { loading: state.profile.loading, profile: {...data, thumbnail: getThumbnail(data.avatar)}}
};
  
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(ProfileActions, dispatch);
  
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
