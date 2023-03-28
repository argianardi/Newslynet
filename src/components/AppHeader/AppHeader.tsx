import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './AppHeader.css';
import logo from '../../assets/images/logo.png';

const { Header } = Layout;

interface Props {
  hiddenCategory: boolean;
}

const AppHeader: FC<Props> = ({ hiddenCategory }) => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Header className="header">
      <Link to={'/'} className="logo">
        <img src={logo} width={40} height={40} alt="app logo" />
        <h1>Newslynet</h1>
      </Link>
      {hiddenCategory && (
        <>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className="menu-nav"
          >
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
        </>
      )}

      <Drawer
        title="Menu"
        placement="right"
        closable={true}
        onClose={onClose}
        open={open}
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

export default AppHeader;
