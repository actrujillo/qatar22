import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Data from "../data/Data";
import Card from "../components/Card";
import img from "../assets/statics/output-onlinegiftools.gif";

export default function Home() {
  return (
    <Box display="flex" justifyContent="center" bg="#7F1431">
      <Flex
        alignItems="center"
        bg="#7F1431"
        color="#f8f8f8"
        flexDirection="column"
        justifyContent={["none", "none", "none", "center"]}
        maxHeight="86vh"
        minHeight="86vh"
        overflowY="scroll"
        p="1rem"
        w={["100%", "100%", "60%", "100%"]}
      >
        <Text
          as="h1"
          fontSize={["2rem", "2rem", "2.5rem", "3rem"]}
          textAlign="center"
          margin="2rem 0"
        >
          Mundial Qatar 2022 <br />
          for dummies ❤️
        </Text>
        {/* <Image src={img} h="50%" /> */}
        <Box
          textAlign="center"
          m="0  0 1rem"
          fontStyle="italic"
          fontSize={["1rem", "1rem", "1.3rem", "1.3rem"]}
        >
          <Text as="p" p="0 0 1rem">
            ¿Ves fútbol cada cuatro años?
          </Text>
          <Text as="p" p="0 0 1rem">
            ¿No encontraste info clara?
          </Text>
          <Text as="p">
            Este es tu lugar! Una pequeña guia para alentar a tu selección.
          </Text>
        </Box>
        <Flex
          flexDirection="row"
          flexWrap="wrap"
          w="100%"
          justifyContent="center"
          alignItems="center"
        >
          {Data.map((item) => (
            <Card {...item} key={item.id} />
          ))}
        </Flex>
      </Flex>
    </Box>
  );
}
