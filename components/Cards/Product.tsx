import React from "react";
import { Card } from "../styles";
import { Text, H5 } from "@adminjs/design-system";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import { ApiClient, useTranslation } from "adminjs";

const api = new ApiClient();

const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];

  export const options = {
    title: "My Daily Activities",
    is3D: true,
  };
   
const Product = () => {
    return (
        <Card>
            <H5>Produtos</H5>
            <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"100%"}
    />
        </Card>
    );
}

export default Product;
