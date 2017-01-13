/**
 * Created by caozheng on 2017/1/4.
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import MainPage from "./js/mainPage";


interface AppRouterProps {
    history ?: any
}

class AppRouter extends React.Component<AppRouterProps, any> {
    constructor (props: any) {
        super(props);
    }

    render() {
        const history = this.props && this.props.history;
        // const routerProps = {
        //     component: MainPage,
        //     ignoreScrollBehavior: true
        // };
        // {...routerProps}
        return(
            <Router history={history}>
                <Route path="/" {...this.props} component={MainPage} >

                    <Route path="/index" component={MainPage} />
                </Route>
            </Router>
        )
    }
}

export default connect()(AppRouter)
