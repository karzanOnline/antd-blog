/**
 * Created by caozheng on 2017/1/4.
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import HomePage from "./js/login";
import BlogMain from "./js/blog/blogMain";
import IndexPage from './js/indexPage';


interface AppRouterProps {
    history ?: any
}

class AppRouter extends React.Component<AppRouterProps, any> {
    constructor (props: any) {
        super(props);
    }

    render() {
        const history = this.props && this.props.history;
        const routerProps = {
            component: HomePage,
            ignoreScrollBehavior: true
        };
        return(
            <Router history={history}>
                <Route path="/" {...this.props} {...routerProps} >
                    <Route path="/index" component={IndexPage} />
                    <Route path="/blog" component={BlogMain} />
                </Route>
            </Router>
        )
    }
}


export default connect()(AppRouter)
