import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputNumber } from "antd";
import { CloseOutlined, LeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import cartSlice from "./CartSlie";
import styled from "styled-components";
import Header from "../../../componnent/header/Header";
const Cart = () => {
  const { cart } = useSelector((store) => store);
  // const dispatch = useDispatch();
  // const increase = (id: string) => {
  //   dispatch(cartSlice.actions.increase(id));
  // };
  // const decrease = (_id: string) => {
  //   dispatch(cartSlice.actions.decrease(id));
  // };
  // const remove = (_id: string) => {
  //   dispatch(cartSlice.actions.remove(id));
  // };
  return (
   <div>
    <Header/>
 
    <Container>
      <div>
        <Coll>
          <Coll1>
            <div>
              <LeftOutlined />
            </div>
            <Link to="/">Trở Về</Link>
          </Coll1>
          <NameT>Giỏ Hàng</NameT>
        </Coll>
        {cart.cart?.map((item: any) => {
          return (
            <Items>
              <img src={item.image} style={{ height: "200px" }} />
              <div>
                <NameX>
                  <div>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    <button>X</button>
                  </div>
                </NameX>

                <div>
                  <Pricee>
                    <PriceColor>{item.originalPrice.toLocaleString()} đ</PriceColor>
                    <PriceC>{item.saleOffPrice.toLocaleString()} đ</PriceC>
                  </Pricee>
                </div>
                <div>
                  <span>- Chương trình khuyến mãi: </span>
                  <p>{item.feature}</p>
                </div>
              </div>
            </Items>
          );
        })}
      </div>
      <div>
        <Total>
          <h2>TỔNG TIỀN TẠM TÍNH: </h2>
          <span>{cart.total.toLocaleString()}</span>
        </Total>
        <Oder>
          TIẾN HÀNH ĐẶT HÀNG
        </Oder>
        <Oder2>
          CHỌN THÊM SẢN PHẨM KHÁC
        </Oder2>
      </div>
    </Container>
    </div>
  );
};
const Oder = styled.button`
  background-color: #D70018;
  width: 100%;
  font-size: 16px;
  color: white;
  padding-top: 10px;
  padding-bottom:10px;
`
const Oder2 = styled.button`
margin-top: 10px;
  width: 100%;
  font-size: 16px;
  color: #DC3545;
  border: 1px solid red;
  padding-top: 10px;
  padding-bottom:10px;
`
const Container = styled.div`
  width: 500px;
  margin: auto;
`;
const Coll1 = styled.div`
  display: flex;
  padding: 0 2px;
`;
const Coll = styled.div`
  display: flex;
  color: red;
  margin-bottom: 20px;
`;
const NameT = styled.div`
  margin-left: 180px;
`;
const NameX = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Items = styled.div`
  display: flex;
  /* grid-template-columns: 40% 1fr;
  gap: 5px; */
`;
const Pricee = styled.div`
  display: flex;
  margin-bottom: 10px;
`;
const PriceColor = styled.div`
  color: red;
  font-size: 16px;
`;
const PriceC = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;
const Total = styled.div`
display: flex;
justify-content: space-between;
`
export default Cart;
