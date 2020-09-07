import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../Auxi/Auxi';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = props => {
    const [showSideDrawer, setSideDrawer] = useState(false)



    return (
        <Aux>
            <Toolbar
                isAuth={props.isAuthenticated}
                drawerToggleClicked={() => setSideDrawer(!showSideDrawer)
                } />
            <SideDrawer
                isAuth={props.isAuthenticated}
                open={showSideDrawer}
                closed={() => {
                    setSideDrawer(false)
                }} />
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )

}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);