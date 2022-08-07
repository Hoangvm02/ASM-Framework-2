import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Typography, Button, Table, Switch, Space, Image } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  SearchOutlined,
  PlusOutlined,
  FormOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
const { Paragraph } = Typography;
import type { ColumnsType } from "antd/es/table";
import { list, remove } from "../../../api/categories";
import { CategoryType } from "../../../types/categories";

type ManagerCategory = {
  data: CategoryType[];
  onRemove: (id: number) => void;
};


const handleChangeRouter = (el: any) => {
  console.log("element: ", el);
};

const onChange = (checked: boolean) => {
  console.log(`switch to ${checked}`);
};

const CategoryAdminPage = () => {
  const columns: ColumnsType<CategoryType> = [

    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Ẩn/Hiện",
      key: "hidden",
      render: (el, record) => (
        <Space size="middle">
          <Switch defaultChecked  onClick={onChange} />
        </Space>
      ),
    },
    {
      title: "Sửa",
      key: "action",
      dataIndex: "id",
      render: (dataIndex) => {
        return (
          <Space size="middle">
            <IconsItems>
              <Link to={`/admin/category/edit/${dataIndex}`}>
                <FormOutlined />
              </Link>
            </IconsItems>
          </Space>
        );
      },
    },
    {
      title: "Xóa",
      key: "hidden",
      dataIndex: "id",
      render: (text:number) => (
        <Space size="middle">
          
          <Button onClick={ async () =>{
            const confirm = window.confirm("Bạn có chắc muốn xóa ?");
           if(confirm){
            const {data} = await remove(text);
            data &&
            setDataTable(dataTable.filter((item)=>
              item.id !== text
            ))
            
            console.log(text);
            
          }}
           }
           >
            <IconsItems2>
              <DeleteOutlined />
            </IconsItems2>
          </Button>
        </Space>
      ),
    },
  ];
  const [dataTable, setDataTable] = useState([]);
  console.log("dataTable", dataTable);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await list();
        setDataTable(data.data);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <Breadcrumb>
        <Typography.Title level={2} style={{ margin: 0 }}>
          Điện thoại
        </Typography.Title>
        <Link to="/admin/category/add">
          <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
        </Link>
      </Breadcrumb>
      <Table columns={columns} dataSource={dataTable} />
    </>
  );
};

const Breadcrumb = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const IconsItems = styled.div`
  color: #00b0d7;
`;
const IconsItems2 = styled.button`
  color: #00b0d7;
`;

export default CategoryAdminPage;
