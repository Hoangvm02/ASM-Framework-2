import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { getAll } from "../../api/products";
import { ProductType } from "../../types/product";
import img1 from "../../assets/images/Vector.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../../assets/images/Frame.png";
import img2 from "../../assets/images/Frame (1).png";
import img3 from "../../assets/images/Frame (2).png";
import img4 from "../../assets/images/Frame (3).png";
import img5 from "../../assets/images/Frame (4).png";
import img6 from "../../assets/images/Frame (5).png";
import img7 from "../../assets/images/Frame (6).png";
import img8 from "../../assets/images/Frame (7).png";
import img9 from "../../assets/images/Frame (8).png";
import img10 from "../../assets/images/Frame (9).png";
import img11 from "../../assets/images/Frame (10).png";
import img12 from "../../assets/images/Frame (11).png";
import img13 from "../../assets/images/Frame (12).png";
import img14 from "../../assets/images/Frame (13).png";
import img15 from "../../assets/images/Frame (14).png";
import img16 from "../../assets/images/Frame (15).png";
import img17 from "../../assets/images/Frame (16).png";
import img18 from "../../assets/images/Frame (17).png";
import img19 from "../../assets/images/Frame (18).png";
import imglk from "../../assets/images/lk1.png";
import imglk2 from "../../assets/images/lk2.png";
import imglk3 from "../../assets/images/lk3.png";
import imglk4 from "../../assets/images/lk4.png";
import imglk5 from "../../assets/images/lk5.png";
import imglk6 from "../../assets/images/lk6.png";
import imglk7 from "../../assets/images/lk7.png";
import imglk8 from "../../assets/images/lk8.png";
import imglk9 from "../../assets/images/lk9.png";

type Props = {
  data: ProductType[];
};
const ProductTypes = (props: Props) => {
  const [data, setData] = useState<ProductType[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getAll();
      setData(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="w-11/12 m-auto mt-12">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 sm:grid-cols-3 ">
          {data &&
            data.map((item: any, index: any) => {
              return (
                <div className="w-full px-4 lg:px-0">
                  <div className="p-2 h-96 bg-white rounded shadow-md">
                    <div className="">
                      <Link to={`/products/${item.id}`}>
                        <div className="relative  mb-3 h-62 lg:mb-0">
                          <img
                            src={item.image}
                            alt="Just a flower"
                            className="object-fill w-60 h-max rounded"
                          />
                        </div>
                      </Link>
                      <div className="flex-auto p-2 justify-evenly">
                        <div className="flex flex-wrap ">
                          <div className="flex items-center justify-between w-full min-w-0 ">
                            <a className="mr-auto text-black text-sm cursor-pointer  ">
                              {item.name}
                            </a>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-1 lg:grid-cols-2 sm:grid-cols-3 ">
                          <div className="mt-1 text-red-600  font-semibold">
                            {item.originalPrice} đ
                          </div>
                          <div className="mt-1  text-xs font-semibold">
                            {item.saleOffPrice} đ
                          </div>
                        </div>
                        <div className="text-black text-xs p-1 bg-slate-300">
                          <p>
                            [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ
                            giá lên tới 1.000.000đ và
                          </p>
                        </div>
                        {/* đánh giá */}
                        <Items>
                          <Col>
                            <Img src={img1} />
                            <Img src={img1} />
                            <Img src={img1} />
                            <Img src={img1} />
                            <Img src={img1} />
                          </Col>
                          <Col2>99+ đánh giá</Col2>
                        </Items>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Phụ kiện */}
      <div className="w-10/12 m-auto mt-12">
        <Item2>
        <h3>Phụ Kiện</h3>
        <Font>Xem Tất Cả</Font>
        </Item2>
        
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-10 sm:grid-cols-3 ">
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img6}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img7}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img9}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img10}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img11}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img12}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img13}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img14}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img15}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img16}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img17}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img18}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={img19}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Link kiện */}
      <div className="w-10/12 m-auto mt-12">
        <Item2>
        <h3>Linh Kiện</h3>
        <Font>Xem Tất Cả</Font>
        </Item2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-9 sm:grid-cols-3 ">
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk2}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk3}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk4}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk5}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk6}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk7}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk8}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:px-0">
            <div className="p-2 h-50 bg-white rounded shadow-md">
              <div className="">
                <div className="relative  mb-3 h-62 lg:mb-0">
                  <img
                    alt="Just a flower"
                    className="object-fill w-60 h-max rounded"
                    src={imglk9}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Items = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;
const Col = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 12px;
  height: 12px;
`;
const Col2 = styled.div`
  font-size: 12px;
`;
const Item2 = styled.div`
  display: flex;
  justify-content: space-between;
`
const Font = styled.span`
  font-size: 12px;
`
export default ProductTypes;
