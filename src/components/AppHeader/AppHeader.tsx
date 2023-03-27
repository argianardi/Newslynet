// import { Layout, Menu, Space } from 'antd';
// import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
// import { DownOutlined } from '@ant-design/icons';

import './AppHeader.css';

// import type { MenuProps } from 'antd';
// import { Button, Dropdown } from 'antd';

// const { Header } = Layout;

// // const items: MenuProps['items'] = [
// //   {
// //     key: '1',
// //     label: <li>business</li>,
// //   },
// //   {
// //     key: '2',
// //     label: <li>entertaiment</li>,
// //   },
// //   {
// //     key: '3',
// //     label: <li>general</li>,
// //   },
// //   {
// //     key: '4',
// //     label: <li>general</li>,
// //   },
// //   {
// //     key: '5',
// //     label: <li>general</li>,
// //   },
// //   {
// //     key: '6',
// //     label: <li>general</li>,
// //   },
// //   {
// //     key: '7',
// //     label: <li>general</li>,
// //   },
// // ];

// const items = (
//   <Menu>
//     <Menu.Item key="1">Option 1</Menu.Item>
//     <Menu.Item key="2">Option 2</Menu.Item>
//     <Menu.Item key="3">Option 3</Menu.Item>
//   </Menu>
// );
// const AppHeader: FC = () => {
//   return (
//     <Header className="header">
//       <Link to={'/'} className="logo">
//         <img src={logo} width={40} height={40} />
//         <h1>Newslynet</h1>
//       </Link>
//       <nav>
//         {/* <ul
//           style={{
//             width: 600,
//             listStyle: 'none',
//             display: 'flex',
//             padding: 0,
//             justifyContent: 'space-between',
//           }}
//         >
//           <li>business</li>
//           <li>entertaiment</li>
//           <li>general</li>
//           <li>health</li>
//           <li>science</li>
//           <li>sports</li>
//           <li>technology</li>
//         </ul> */}
//         <Dropdown
//           overlay={items}
//           placement="bottomRight"
//           arrow={{ pointAtCenter: true }}
//           trigger={['click']}
//         >
//           <Button onClick={(e) => e.preventDefault()}>
//             <Space>Click</Space>
//             <DownOutlined />
//           </Button>
//         </Dropdown>
//       </nav>
//     </Header>
//   );
// };

// export default AppHeader;

//--------------------------------------- recomen1

import { useState } from 'react';
import { Button, Drawer, Layout, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

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
