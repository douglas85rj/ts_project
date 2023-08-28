import { ApiClient, useTranslation } from "adminjs";
import React from "react";
import { Box, Text, H2 } from "@adminjs/design-system";
import { useState, useEffect  } from "react";
import Product from "./Cards/Product";
import Category from "./Cards/Category";

const api = new ApiClient();


const Dashboard = () => {
  const { translateMessage } = useTranslation();
  const [data, setData] = useState({});

  useEffect(() => {
    api.getDashboard().then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <>
      <Box>
        <Box position="relative" overflow="hidden">
          <Box bg="grey100" height={300} width={1} />
          <Text
            textAlign="center"
            position="absolute"
            top="lg"
            left={0}
            right={0}
          >
            <H2>Sistema de estoque CAEFE</H2>
            <Text opacity={0.5}>Requesições controladas pelo NAD</Text>
          </Text>
        </Box>
      </Box>
      <Box
        mt={["xl", "xl", "-80px"]}
        mb="x1"
        mx="auto"
        px={["default", "xl", "xxl"]}
        position="relative"
        flex
        flexDirection="row"
        flexWrap="wrap"
        width={[1, 1, 1, 1024]}
      >
        <Box width={[1, 1, 1, 1 / 2]} p="lg">
         <Product/>

     
        </Box>
        <Box width={[1, 1, 1, 1 / 2]} p="lg">
          <Category></Category>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;