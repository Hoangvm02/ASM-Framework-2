import { ShoppingCartOutlined } from "@ant-design/icons";
import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { listCate } from "../../../api/categories";
import { read } from "../../../api/products";
import Image1 from "../../../assets/images/imageTest.png";
import { ProductType } from "../../../types/product";
import s from "../../users/ClientProduct/product.module.css";

type Props = {};

const Products = (props: Props) => {
  const [product, setProduct] = useState<any>([]);
  const { id } = useParams();
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      setProduct(data);
    };
    getProduct();
  }, [id]);
  const dispatch = useDispatch();
  const addToCart = (item: any) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, amount: 1 },
    });
    message.success("Thêm vào giỏ hàng thành công!");
  };
  return (
    <Container>
      <div>
        {/* tên */}
        <div>{product.name}</div>
      </div>
      <Items1>
        {/* Product img  */}
        <div>
          <div>
            <Img1 src={product.image} />
          </div>
        </div>
        {/* price  */}
        <div>
          <Pricee>
            <PriceColor>{product.originalPrice} đ</PriceColor>
            <PriceC>{product.saleOffPrice} đ</PriceC>
          </Pricee>
          <div>
           {product.description}
          </div>
          <Items2>
            <div>
              <Buutoon>Mua Hàng</Buutoon>
            </div>

            <CartItems>
              <div>
                <ShoppingCartOutlined style={{ width: "50px" }} />
              </div>
              <button onClick={() => addToCart(product)}>Thêm vào giỏ hàng</button>
            </CartItems>
          </Items2>
        </div>
      </Items1>
      {/* Sản phẩm cùng loại */}
      <div>
        <div>Sản phẩm cùng loại</div>

        <Coll>
          <div>
          
            <img src="" alt="" />
            <h3>name</h3>
            <div>
              <span>giá</span>
              <span>giá</span>
            </div>
          </div>
          <div>sp2</div>
          <div>sp3</div>
          <div>sp4</div>
          <div>sp5</div>
        </Coll>
 
      </div>
      

      {/* đặc điểm nổi bật */}
      <div>
        <Items3>
          <NameDD>Đặc điểm nổi bật</NameDD>
          <div>
            <SpanN>
             {product.feature}
            </SpanN>{" "}
            <br />
            <SpanN>
             {product.shortDesc}
            </SpanN>{" "}
            <br />
            <SpanN>
            {product.description}
            </SpanN>{" "}
            <br />
          </div>
        </Items3>
      </div>

      <div className={s.butoonT}>
        <InButton>Xem Thêm</InButton>
      </div>
      
    </Container>
  );
};
const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
const Items1 = styled.div`
  width: 1000px;
  display: grid;
  grid-template-columns: 40% 1fr;
  gap: 15px;
  margin-top: 20px;
`;
const Img1 = styled.img`
  width: 350px;
  height: 350px;
`;
const Coll1 = styled.div`
  display: flex;
  /* padding-right: 15px; */
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
const Items2 = styled.div`
  display: flex;
  margin-top: 200px;
`;
const Coll = styled.div`
  display: flex;
  justify-content: space-between;
`
const CartItems = styled.div`
  display: flex;
`;
const Buutoon = styled.button`
  padding: 5px 30px;
  color: white;
  font-size: 14px;
  background-color: #ff3945;
`;
const Items3 = styled.div`
  background-color: #f2f2f2;
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 10px 0;
`;
const NameDD = styled.div`
  text-align: center;
  color: red;
  font-size: 18px;
`;
const SpanN = styled.p`
  padding-left: 20px;
  font-size: 14px;
 
`;
const InButton = styled.button`
  border: 1px solid #000000;
  padding: 2px 60px;
  box-shadow: 0px 1px 2px rgba(60, 64, 67, 0.1);
  border-radius: 10px;
`;
export default Products;
