import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';
import routes from './RouterConfig';
import history from '../Utils/history';

const AppRoute = ({ component: Component, layout: Layout }) => {
    return (
        <Route
            render={props => (
                <Layout>
                    <Component {...props} />
                </Layout>
            )}
        />
    );
};

AppRoute.propTypes = {
    component: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object
    ]).isRequired,
    layout: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func,
        PropTypes.object
    ]).isRequired
};

const Switches = () => {
    return (
        <Router history={history}>
            <div>
                <Switch>
                    {routes.map((route, i) => (
                        <AppRoute
                            key={i}
                            path={route.path}
                            type={route.type}
                            exact={route.exact}
                            component={route.component}
                            layout={route.layout}
                            status={route.layout || null}
                        />
                    ))}
                </Switch>
            </div>
        </Router>
    );
};

export default Switches;
