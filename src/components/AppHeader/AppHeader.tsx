import { Link } from 'react-router-dom';
import { FC, useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './AppHeader.css';
import logo from '../../assets/images/logo.png';

const { Header } = Layout;

interface Props {
  hiddenCategory: boolean;
  onHandleCategory?: (category: string) => void;
}

const AppHeader: FC<Props> = ({ hiddenCategory, onHandleCategory }) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleCategory = (category: string) => {
    if (onHandleCategory) {
      onHandleCategory(category);
    }
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
            <Menu.Item key="1" onClick={() => handleCategory('business')}>
              Business
            </Menu.Item>
            <Menu.Item key="2" onClick={() => handleCategory('general')}>
              General
            </Menu.Item>
            <Menu.Item key="3" onClick={() => handleCategory('health')}>
              Health
            </Menu.Item>
            <Menu.Item key="4" onClick={() => handleCategory('science')}>
              Sciene
            </Menu.Item>
            <Menu.Item key="5" onClick={() => handleCategory('sports')}>
              Sports
            </Menu.Item>
            <Menu.Item key="6" onClick={() => handleCategory('technology')}>
              Technology
            </Menu.Item>
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
          <Menu.Item key="1" onClick={() => handleCategory('business')}>
            Business
          </Menu.Item>
          <Menu.Item key="2" onClick={() => handleCategory('general')}>
            General
          </Menu.Item>
          <Menu.Item key="3" onClick={() => handleCategory('health')}>
            Health
          </Menu.Item>
          <Menu.Item key="4" onClick={() => handleCategory('science')}>
            Sciene
          </Menu.Item>
          <Menu.Item key="5" onClick={() => handleCategory('sports')}>
            Sports
          </Menu.Item>
          <Menu.Item key="6" onClick={() => handleCategory('technology')}>
            Technology
          </Menu.Item>
        </Menu>
      </Drawer>
    </Header>
  );
};

export default AppHeader;
