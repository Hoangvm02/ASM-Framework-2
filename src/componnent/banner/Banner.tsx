import { RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

import img1 from "../../assets/images/dt.png";
import img2 from "../../assets/images/laptop.png";
import img3 from "../../assets/images/bang.png";
import img4 from "../../assets/images/nghe.png";
import img5 from "../../assets/images/dongho.png";
import img6 from "../../assets/images/home.png";
import Banner2 from "../../assets/images/banner.png";
import { Select } from "antd";
import { CategoryType } from "../../types/categories";
import { Link } from "react-router-dom";

import {list} from "../../api/categories"
type Props = {};
const { Option, OptGroup } = Select;

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
const Banner = (props: Props) => {
  const [cate, setCate] = useState<CategoryType[]>([]);
  useEffect(() => {
    const fetchCate = async () => {
      const { data } = await list()
      setCate(data);
    };
    fetchCate();
  }, []);
  return (
    <Container>
      <div>
        {cate &&
          cate.map((item) => {
            return (
              <Img>
                <Icon>
                  <Link to={`/${item.id}`} className="text-black text-normal">
                    {item.name}
                  </Link>
                </Icon>
                <div>
                  <RightOutlined />
                </div>
              </Img>
            );
          })}
        {/* item 1 */}
       
        {/* item 2 */}
       
      </div>
      {/* aaaaa */}
      <div>
        <Images src={Banner2} />
      </div>
    </Container>
  );
};
const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  /* color: white; */
  grid-template-columns: 20% 1fr;
  gap: 15px;
  margin-top: 20px;
  /* padding-left: 25px; */
`;
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const Image2 = styled.img`
  width: 15px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Image3 = styled.img`
  width: 20px;
  height: auto;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
const Images = styled.img`
  width: 900px;
  height: 300px;
  margin-left: 20px;
`;

export default Banner;
