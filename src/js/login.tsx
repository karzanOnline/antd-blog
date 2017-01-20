/**
 * Created by caozheng on 2017/1/9.
 */

import { Canvas } from "./canvas/login";
import * as React from "react";
import { Layout, Menu, Card, Button, Icon} from 'antd';
import * as  QueueAnim from "rc-queue-anim/lib";
import { connect } from 'react-redux';
import "./../css/login.less";
import { browserHistory } from 'react-router';
import { goBrowserHistory } from './routingAddress';
import { getShowType } from './../action/mainPage';

declare const require;

const { Header, Content, Footer } = Layout;


interface LoginTypeProps {
    form ?: any,
    dispatch?: any,
    collapsed : boolean,
    children ?: any,
    canvasOption ?: number
}


class HomePage extends React.Component<LoginTypeProps, any> {
    bgCanvas ?: any;

    constructor(props) {
        super(props);
        this.state={
            current: '1'
        };
    }

    componentDidMount() {
        this.bgCanvas = new Canvas(document.querySelector("#Mycanvas"))
    }


    handleClick(e) {
        let temp;
        const { dispatch } = this.props;
        e.key?(temp=e.key):(temp = e);
        if(temp==2){
            dispatch(getShowType(temp))
        }
        goBrowserHistory(temp, browserHistory)
    }

    render() {
        const props = this.props;
        return (
            <Layout className="layout">
                {/*<Header className="header-flex-wrapper">*/}
                    {/*<div className="logo">*/}
                        {/*<img src={LOGO_IMG} />*/}
                    {/*</div>*/}

                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    className="menu-wrapper"
                >
                    <Menu.Item key="1">
                        <Icon type="home" />首页
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="exception"/>多人博客
                    </Menu.Item>
                    <Menu.Item key="3" disabled>
                        <Icon type="aliwangwang-o" />在线问答
                    </Menu.Item>
                    <Menu.Item key="4" disabled>
                        <Icon type="laptop" />直播
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="github" />github
                    </Menu.Item>
                </Menu>

                <Content>
                    {React.cloneElement(props.children)}
                </Content>

                <canvas id="Mycanvas"
                        style={{opacity: props.canvasOption}}
                        className="canvas-style"></canvas>

            </Layout>
        )
    }
}

function mapStateToProps(state: any) {
    return {
        collapsed: state.getIn(['submitReduce','collapsed']),
        canvasOption: state.getIn(['submitReduce','canvasOption'])

    }
}
export default connect(mapStateToProps)(HomePage)
