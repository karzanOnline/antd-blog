/**
 * Created by caozheng on 2017/1/9.
 */

import { Canvas } from "./canvas/login";
import * as React from "react";
import { Layout, Menu, Card, Button, Icon} from 'antd';
import * as  QueueAnim from "rc-queue-anim/lib";
import { connect } from 'react-redux';
import "./../css/login.less";
declare const require;

const { Header, Content, Footer } = Layout;


interface LoginTypeProps {
    form ?: any
}


class HomePage extends React.Component<LoginTypeProps, any> {

    static loginClassName = {
        position: "absolute",
        top: "50%",
        left: "50%",
        marginLeft: "-200px",
        marginTop: "-100px"
    };

    constructor(props) {
        super(props);
        this.state={
            current: 'mail'
        };
        let bgCanvas = new Canvas(document.querySelector("#Mycanvas"))
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                location.href = "/index";
            }
        });
    }

    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    render() {
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
                            <Menu.Item key="mail">
                                <Icon type="home" />首页
                            </Menu.Item>
                            <Menu.Item>
                                <Icon type="exception"/>多人博客
                            </Menu.Item>
                            <Menu.Item key="app" disabled>
                                <Icon type="aliwangwang-o" />在线问答
                            </Menu.Item>
                            <Menu.Item key="laptop" disabled>
                                <Icon type="laptop" />直播
                            </Menu.Item>
                            <Menu.Item key="github">
                                <Icon type="github" />github
                            </Menu.Item>
                        </Menu>


                {/*</Header>*/}

                <Content style={HomePage.loginClassName}>
                    <QueueAnim key="page" delay={500} type="bottom" appear>
                        <div key="1">
                            <Card style={{ width: 400, borderRadius:"10px"}}>
                                <QueueAnim delay={300} className="queue-simple">
                                    <Button key="2" type="primary" className="button-right">多人博客</Button>
                                    <Button key="3" type="dashed" className="button-right">在线问答</Button>
                                    <Button key="4" type="dashed" className="button-right">直播</Button>
                                    <Button key="5" type="primary" >github</Button>
                                </QueueAnim>
                            </Card>
                        </div>
                    </QueueAnim>
                </Content>


            </Layout>
        )
    }
}

function mapStateToProps(state: any) {
    return {

    }
}
export default connect(mapStateToProps)(HomePage)
