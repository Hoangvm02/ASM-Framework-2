import s from "./AdminLayout.module.css"
import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, SettingOutlined, SearchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../../assets/images/logo.png'

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
    {key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin">Điện thoại</Link>},
    {key: "laptop", icon: <LaptopOutlined />, label: "Laptop"},
    {key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng"},
    {key: "audio", icon: <AudioOutlined />, label: "Âm thanh"},
    
]

const AdminLayout: React.FC = () => (
  <Layout>
    <HeaderCustom>
      <Logo src={LogoImage}/>
        <div className={s.content_btn}>
            <Seach className={s.input} />
            <SearchOutlined className={s.ic_seach} />
        </div>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </HeaderCustom>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet/>
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
    margin-right: 28px;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`
const Seach = styled.input`
    align-items: center;
    height: 36px;
    border-radius: 8px;
    width: 300px;
`

export default AdminLayout;