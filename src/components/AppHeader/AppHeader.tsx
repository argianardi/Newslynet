import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './AppHeader.css';
import logo from '../../assets/images/logo.png';

const { Header } = Layout;

const ResponsiveHeader = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <Header className="header">
      <Link to={'/'} className="logo">
        <img src={logo} width={40} height={40} />
        <h1>Newslynet</h1>
      </Link>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} className="menu-nav">
        <Menu.Item key="1">Business</Menu.Item>
        <Menu.Item key="2">General</Menu.Item>
        <Menu.Item key="3">Health</Menu.Item>
        <Menu.Item key="4">Sciene</Menu.Item>
        <Menu.Item key="5">Sports</Menu.Item>
        <Menu.Item key="6">Technology</Menu.Item>
      </Menu>
      <div className="menu-toggle ">
        <Button onClick={showDrawer}>
          <MenuOutlined />
        </Button>
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visible}
        className="custom-drawer"
      >
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Business</Menu.Item>
          <Menu.Item key="2">General</Menu.Item>
          <Menu.Item key="3">Health</Menu.Item>
          <Menu.Item key="4">Sciene</Menu.Item>
          <Menu.Item key="5">Sports</Menu.Item>
          <Menu.Item key="6">Technology</Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default ResponsiveHeader;

// -------------------------------------recomen 2
