import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';

import 'antd/dist/antd.css';
import './navbar.styles.css';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Navbar extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo">StoXkeeper</div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              About Us
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Market">
              <Menu.Item key="3">
                <Link to="/CardBSE">
                BSE
                </Link>
              </Menu.Item>
              <Menu.Item key="4">Nasdaq</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="User">
              <Menu.Item key="6">Login</Menu.Item>
              <Menu.Item key="8">Sign Up</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Market Updates
            </Menu.Item>
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Contact Us
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          {/* <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              Bill is a cat.
            </div>
          </Content> */}
          <Footer style={{ textAlign: 'center' }}>StoXkeeper ©2020 </Footer>
        </Layout>
      </Layout>
    );
  }
}


export default Navbar;