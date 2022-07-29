import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Typography,
  Col,
  Row,
  Button,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Img2 from "../../assets/images/logo.png";
import Header from "../../componnent/header/Header";
import Footer from "../../componnent/footer/Footer";
import Banner from "../../componnent/banner/Banner";

const { TextArea } = Input;
const { Option } = Select;

const Login: React.FC = () => {
  const navigate = useNavigate();

  const onFinish = async (values: any) => {};

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <Header />
      <Banner />
      <Container2>
        <Form
          // name="product"
          initialValues={{}}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          layout="vertical"
        >
          <Typography.Title level={2} style={{ margin: 0 }}>
            Đăng ký
          </Typography.Title>
          <Row gutter={24}>
            <Col span={14}>
              <Form.Item
                name="name"
                labelCol={{ span: 14 }}
                label="Email"
                rules={[{ required: true, message: "Email không được trống" }]}
              >
                <Input style={{ width: "650px" }} size="large" />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Số điện thoại"
                labelCol={{ span: 24 }}
                rules={[
                  {
                    required: true,
                    message: "Số điện thoại không được để trống",
                  },
                ]}
              >
                <InputNumber style={{ width: "650px" }} size="large" />
              </Form.Item>
              <Form.Item
                name="password"
                labelCol={{ span: 24 }}
                label="Mật khẩu"
                rules={[
                  { required: true, message: "Mật khẩu không được trống" },
                ]}
              >
                <Input style={{ width: "650px" }} size="large" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "650px" }}
                >
                  Đăng ký
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <div>
          <Container>
            <UploadWrapper>
              <Img src={Img2} />
            </UploadWrapper>
          </Container>
        </div>
      </Container2>
      <Footer />
    </div>
  );
};

const Container2 = styled.div`
  width: 980px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 5px;
  margin-top: 25px;
  margin-bottom: 25px;
  
`;
const Label = styled.div`
  font-size: 13px;
`;
const Container = styled.div``;

const Label2 = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
  padding-top: 25px;
  padding-bottom: 25px;
  background-color: #f8f8f8f8;
`;
const Img = styled.img`
  padding-top: 70px;
  padding-bottom: 70px;
`;
const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 250px;
  height: 50%;
`;
export default Login;
