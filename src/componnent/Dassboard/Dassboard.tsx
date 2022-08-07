import s from "./dassboard.module.css"
import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, SettingOutlined, SearchOutlined, HomeOutlined, CopyOutlined  } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../../assets/images/logo.png'
import SeachB from "./SeachI";
import AutoComplete from "./SeachI";

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
    {key: "dassboard", icon: <HomeOutlined />, label: <Link to="/admin">Dashboard</Link>},
    {key: "cellphone", icon: <PhoneOutlined />, label: <Link to="/admin/product">Điện thoại</Link>},
    {key: "categories", icon: <CopyOutlined />, label: <Link to="/admin/category">Danh Mục</Link>},
    {key: "laptop", icon: <LaptopOutlined />, label: "Laptop"},
    {key: "tablet", icon: <TabletFilled />, label: "Máy tính bảng"},
    {key: "audio", icon: <AudioOutlined />, label: "Âm thanh"},
    
]
// const a = JSON.parse(localStorage.getItem("user") as string);

const DashboardLayout: React.FC = () => (
  <Container>
  <Layout>
    <HeaderCustom>
      <Logo src={LogoImage}/>
      <NameD>
        Dashboard
      </NameD>
        <div className={s.content_btn}>
         
            {/* <Seach className={s.input}  > */}
            < AutoComplete/>
            <SearchOutlined className={s.ic_seach}  />
           
        </div>
        <NameE>
        {/* {a.user.email} */}
        </NameE>
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
  </Container>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
    
`
const Container = styled.div`
  max-width: 1600px;
  margin: auto;
`
const Logo = styled.img`
    width: 64px;
    height: auto;
    margin-right: 28px;
`
const NameD = styled.div`
  margin-right: 30px;
  color: white;
`
const ContentCustom = styled(Content)`
  min-height: 100vh;
`
const Seach = styled.input`
    align-items: center;
    height: 42px;
    border-radius: 16px;
    width: 600px;
`
const NameE = styled.div`
  margin-left: 400px;
`
export default DashboardLayout;