// import { SearchOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
// import styled from 'styled-components'
import LogoImage from "../../assets/images/logo.png";
import AutoComplete from "../Dassboard/SeachI";
import s from "../header/header.module.css";
import ImageLogo from "../../assets/images/vitri.png";
import ImageLogo2 from "../../assets/images/oto.png";
import ImageLogo3 from "../../assets/images/cart.png";
import { HomeOutlined, LoginOutlined, LogoutOutlined, SearchOutlined, SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import SeachI from '../Dassboard/SeachI'
type Props = {};

const Header = (props: Props) => {
  const a = JSON.parse(localStorage.getItem("user") as string);
  // console.log(a.user._id);
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    // console.log(event.target.value);
    localStorage.removeItem("user");
    window.location.reload();
  };
  return (
    <Wrapper>
      <Container>
        <div>
          <Image src={LogoImage} />
        </div>
        <div className={s.content_btn}>
          {/* <Seach className={s.input}  > */}
          <AutoComplete />
          <SearchOutlined className={s.ic_seach} />
        </div>
        <Sdt>
          <div>Gói mua hàng</div>
          <div>18002097</div>
        </Sdt>
        <Vitri>
          <div>
            <Image2 src={ImageLogo} />
          </div>
          <div>Cửa hàng gần bạn</div>
        </Vitri>

        <Vitri>
          <div>
            <Image3 src={ImageLogo2} />
          </div>
          <div>Tra cứu</div>
        </Vitri>
        <Vitri>
          <div>
            <Link to="/cart">
              {" "}
              <Image2 src={ImageLogo3} />
            </Link>
          </div>
          <div>Giỏ hàng</div>
        </Vitri>
        <div>
          {a == null ? (
            <div>
              <a
                href="/signup"
              >
                <LoginOutlined />
              </a>
            </div>
          ) : (
            <div>
              <button
                onClick={(e) => handleClick(e, "clicked")}
              >
                <LogoutOutlined />
              </button>
            </div>
          )}
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #d70018;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 65px;
  height: auto;
  margin-right: 40px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image2 = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image3 = styled.img`
  width: 25px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Sdt = styled.div`
  font-size: 12px;
  color: white;
`;
const Vitri = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Header;
