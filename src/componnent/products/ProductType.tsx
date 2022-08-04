import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { getAll } from "../../api/products";
import { ProductType } from "../../types/product";

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
    <div className="w-11/12 m-auto mt-12">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7 sm:grid-cols-3 ">
        {data &&
          data.map((item: any, index: any) => {
            return (
              <div className="w-full px-4 lg:px-0">
                <div className="p-2 h-96 bg-white rounded shadow-md">
                  <div className="">
                    <div className="relative  mb-3 h-62 lg:mb-0">
                      <img
                        src={item.image}
                        alt="Just a flower"
                        className="object-fill w-60 h-max rounded"
                      />
                    </div>
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
                        <p>[HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ và</p>
                      </div>
                      <div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default ProductTypes;
