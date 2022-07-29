import React from "react";
import styled from "styled-components";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Wrapper>
      <Container>
        <Coll>
          <CollT>
            <span>
              Điện thoại iPhone 13- Điện thoại iPhone 12 - Điện thoại iPhone 11
            </span> <br />
            <span>
              Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
            </span> <br />
            <span>
              iPhone cũ giá rẻ: iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ
            </span>
          </CollT>
          <CollT>
            <span>
              Điện thoại iPhone - Điện thoại Samsung - Điện thoại Samsung A   
            </span> <br />
            <span>
              Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại Nokia
            </span> <br />
            <span>
              Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53
            </span>
          </CollT>
          <CollT>
            <span>
            Laptop - Laptop HP - Laptop Dell - Laptop Acer
            </span> <br />
            <span>
            Microsoft Surface - Laptop Lenovo - Laptop Asus
            </span> <br />
            <span>
            Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình
            </span>
          </CollT>
        </Coll>
        <SpanDoc>
          <SpanDocst>
            Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
            0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ:
            350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh,
            Việt Nam. Điện thoại: 028.7108.9666.
          </SpanDocst>
        </SpanDoc>
      </Container>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #f8f8f8;
`;
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  /* text-align: center; */
  margin-top: 20px;
`;
const Coll = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CollT = styled.div`
  font-size: 10px;
  padding-top: 15px;
`;
const SpanDocst = styled.span`
  font-size: 10px;
`;
const SpanDoc = styled.div`
  text-align: center;
  /* align-items: center; */
  margin-top: 15px;
  margin-bottom: 15px;
`;
export default Footer;
