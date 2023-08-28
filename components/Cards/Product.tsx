import React from "react";
import { Card } from "../styles";
import { Text, H5 } from "@adminjs/design-system";
import { Chart } from "react-google-charts";
import { useState, useEffect } from "react";
import { ApiClient, useTranslation } from "adminjs";

const api = new ApiClient();

const Product = (props) => {
    const { record } = props;
    const { translateMessage } = useTranslation();
    const [data, setData] = useState([]);
    
    useEffect(() => {
        api
        .resourceAction({
            resourceId: "Product",
            actionName: "list",
            params: { id: record.params.id },
        })
        .then((response) => {
            const data = response.data.map((item) => {
            return [item.name, parseInt(item.quantity)];
            });
            setData([["Product", "Quantity"], ...data]);

        });
    }, []);
    
    return (
        <Card>
        <H5>{record.title}</H5>
        <Text>{record.description}</Text>
        <Chart
            width={"100%"}
            height={"300px"}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={data}
            options={{
            title: translateMessage("chart.title"),
            is3D: true,
            }}
            rootProps={{ "data-testid": "2" }}
        />
        </Card>
    );
    }

export default Product;

