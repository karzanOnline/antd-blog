/**
 * Created by caozheng on 2016/12/28.
 */
declare function require(string): string;
import * as React from "react";
import { Layout, Menu, Breadcrumb, Icon, Button, Table, Tabs, Row, Col } from 'antd';
import { connect } from 'react-redux';
import "./../css/demo.less";
import { getSideType } from "./../action/mainPage";

const { Header, Content, Footer, Sider } = Layout;
const { Column, ColumnGroup } = Table;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;


class SiderDemo extends React.Component<any, any> {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: '1',
      showType : true
    }
  }

  onCollapse = () => {
    const { dispatch } = this.props;
    dispatch(getSideType());
  };

  handleClick(e) {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  callback (key) {
    console.log(key)
  }

  render() {

    return (
      <Layout style={{flexFlow: "nowrap"}}>
        <Sider
          collapsible
          collapsed={this.props.collapsed}
          onCollapse={this.onCollapse}
        >

          <div className="logo">
            金柚网
          </div>
          <Menu
              theme = "dark"
              onClick={this.handleClick.bind(this)}

              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
          >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
              <Menu.Item key="1">Option 1</Menu.Item>
              <Menu.Item key="2">Option 2</Menu.Item>
              <Menu.Item key="3">Option 3</Menu.Item>
              <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <Menu.Item key="11">Option 11</Menu.Item>
              <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '12px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 750 }}>
              <Button type="primary">Primary</Button>
              <Button>Default</Button>
              <Button type="ghost">Ghost</Button>
              <Button type="dashed">Dashed</Button>
              {/*临时添加*/}
              {/*<div className="table-wrapper">*/}
              {/*<Table  columns={columns} dataSource={data} scroll={{ x: 1500, y: 300 }} />*/}
              {/*</div>*/}

              <Tabs style={{width: 400}} defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
                <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
              </Tabs>

              <Table dataSource={this.state.data} bordered>
                  <ColumnGroup title="Name">
                    <Column
                        title="First Name"
                        dataIndex="firstName"
                        key="firstName"
                    />
                    <Column
                        title="Last Name"
                        dataIndex="lastName"
                        key="lastName"
                    />
                  </ColumnGroup>
                  <Column
                      title="Age"
                      dataIndex="age"
                      key="age"
                  />
                  <Column
                      title="Address"
                      dataIndex="address"
                      key="address"
                  />
                  <Column
                      title="Action"
                      key="action"
                      render={(text, record: any) => (
                        <span>
                          <a href="#">Action 一 {record.name}</a>
                          <span className="ant-divider" />
                          <a href="#">Delete</a>
                          <span className="ant-divider" />
                          <a href="#" className="ant-dropdown-link">
                            More actions <Icon type="down" />
                          </a>
                        </span>
                      )}
                  />
              </Table>

              {/*临时添加结束*/}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Copyright © 2014 - 2015杭州今元标矩科技有限公司 版权归今元集团所有
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

function mapStateToProps(state: any) {
  return {
    collapsed: state.getIn(['submitReduce','collapsed'])
  }
}
export default connect(mapStateToProps)(SiderDemo)





