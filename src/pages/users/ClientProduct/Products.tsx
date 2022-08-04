import { ShoppingCartOutlined } from "@ant-design/icons";
import React from "react";
import styled from "styled-components";
import Image1 from "../../../assets/images/imageTest.png";
import s from "../../users/ClientProduct/product.module.css";

type Props = {};

const Products = (props: Props) => {
  return (
    <Container>
      <div>
        {/* tên */}
        <div>Samsung Galaxy A73 (5G) 256GB</div>
      </div>
      <Items1>
        {/* Product img  */}
        <div>
          <div>
            <Img1 src={Image1} />
          </div>
        </div>
        {/* price  */}
        <div>
          <Pricee>
            <PriceColor>11.690.000 ₫</PriceColor>
            <PriceC>12.990.000 ₫</PriceC>
          </Pricee>
          <div>
            Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người dùng
            cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản A73,
            Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang đến cảm
            giác sang trọng và tinh tế.
          </div>
          <Items2>
            <div>
              <Buutoon>Mua Hàng</Buutoon>
            </div>

            <CartItems>
              <div>
                <ShoppingCartOutlined style={{ width: "50px" }} />
              </div>
              <div>Thêm vào giỏ hàng</div>
            </CartItems>
          </Items2>
        </div>
      </Items1>

      {/* đặc điểm nổi bật */}
      <div>
        <Items3>
          <NameDD>Đặc điểm nổi bật</NameDD>
          <div>
            <SpanN>
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </SpanN>{" "}
            <br />
            <SpanN>
              Thưởng thức không gian giải trí cực đỉnh - Màn hình lớn 6.7 inch,
              độ phân giải Full HD+, 120Hz mượt mà
            </SpanN>{" "}
            <br />
            <SpanN>
              Cấu hình Galaxy A73 5G được nâng cấp mạnh với chip Snapdragon
              778G, RAM lên đến 8 GB
            </SpanN>{" "}
            <br />
            <SpanN>
              Chiến game thoải mái không lo gián đoạn - Viên pin lớn 5000 mAh,
              hỗ trợ sạc nhanh 25 W
            </SpanN>{" "}
            <br />
          </div>
        </Items3>
      </div>
      {/* docs */}
      <div>
        Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai là
        fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp tục cho ra
        mắt nhiều smartphone với sự cải tiến trong thiết kế và cấu hình, trong
        đó phải kể đến chiếc Samsung Galaxy A73 với nhiều cải tiến so với thế hệ
        trước. Vậy sản phẩm có gì nổi bật, giá bao nhiêu và liệu có nên mua
        không? Tìm hiểu ngay nhé!
      </div>
      <div className={s.items2}>
        <span>
          Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
        </span>
        <div>
          Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
          đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
          biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về chiếc
        </div>
      </div>
      <div className={s.items3}>
        <span>Thiết kế sang trọng, màn hình Super AMOLED</span>
        <p>
          Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan tâm
          đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo nên một
          chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng và tinh tế.
          Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả năng
          mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể mang theo
          chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc nào.Kích thước và
          trọng lượng của chiếc điện thoại rất vừa phải và dĩ nhiên sẽ không
          chiếm quá nhiều diện tích trong túi xách và có thể di chuyển dễ dàng.
        </p>
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
const SpanN = styled.span`
  padding-left: 20px;
  font-size: 14px;
  padding-bottom: 10px;
  padding-top: 10px;
`;
export default Products;
