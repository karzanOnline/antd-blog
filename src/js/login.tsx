/**
 * Created by caozheng on 2017/1/9.
 */
import { Canvas } from "./canvas/login";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Layout, Menu, Breadcrumb, Card, Button, Icon} from 'antd';
import * as  QueueAnim from "rc-queue-anim/lib";
import "./../css/login.less"
const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


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
        }
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
                <Header>
                    <div className="logo" />
                    <Menu
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Icon type="mail" />Navigation One
                        </Menu.Item>
                        <Menu.Item key="app" disabled>
                            <Icon type="appstore" />Navigation Two
                        </Menu.Item>
                        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                            <MenuItemGroup title="Item 1">
                                <Menu.Item key="setting:1">Option 1</Menu.Item>
                                <Menu.Item key="setting:2">Option 2</Menu.Item>
                            </MenuItemGroup>
                            <MenuItemGroup title="Item 2">
                                <Menu.Item key="setting:3">Option 3</Menu.Item>
                                <Menu.Item key="setting:4">Option 4</Menu.Item>
                            </MenuItemGroup>
                        </SubMenu>
                    </Menu>
                </Header>
                <Content style={HomePage.loginClassName}>
                    <Card style={{ width: 400, borderRadius:"10px"}}>
                        <Button type="primary" className="button-right">博客</Button>
                        <Button type="dashed" className="button-right">在线问答</Button>
                        <Button type="dashed" className="button-right">直播</Button>
                        <Button type="primary" >github</Button>
                    </Card>
                </Content>

            </Layout>
        )
    }
}


ReactDOM.render(<HomePage/>, document.getElementById('wrapper'));