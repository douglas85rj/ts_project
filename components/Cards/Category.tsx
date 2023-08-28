import React from 'react';
import {Card} from '../styles';
import {Text,H5} from '@adminjs/design-system';
import { Chart } from "react-google-charts";

const data = [
    ["Element", "Density", { role: "style" }],
    ["Copper", 8.94, "#b87333"], // RGB value
    ["Silver", 10.49, "silver"], // English color name
    ["Gold", 19.3, "gold"],
    ["Platinum", 21.45, "color: #e5e4e2"], // CSS-style declaration
  ];

const Category = () => {
    return (
        <Card as= "a" href="#">
            <Text textAlign="center">
                <H5>Caterias</H5>
                <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
            </Text>
        </Card>


    );
}

export default Category;