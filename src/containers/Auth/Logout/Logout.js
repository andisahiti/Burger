import React, { useEffect } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

const Logout = props => {
    const { onLogout } = props

    useEffect(() => {
        onLogout();

    }, [onLogout])


    return <Redirect to="/" />;

}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default withRouter(connect(null, mapDispatchToProps)(Logout));