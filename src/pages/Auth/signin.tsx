import { Button, Checkbox, Form, Input, InputNumber } from 'antd';
import React from 'react';

const Signin = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
<div>
<Form
      name="basic"
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Tên Sản Phẩm"
        name="username"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập !',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giá"
        name="password"
        rules={[
          {
            required: true,
            message: 'Vui lòng nhập !',
          },
        ]}
      >
        <InputNumber  />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 4,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
</div>
  );
};

export default Signin;