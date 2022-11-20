import { Button, Flex, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Data from "../data/Data";
import Header from "./Header";

// import data from ''

export default function Item(props) {
  const { id, title, description, img1, img2, video1, video2, wikipedia } =
    props;

  // const { id } = useParams();

  // const params = useParams();

  // console.log(params);

  // const item = Data.map((ite) => ite);

  // console.log(item.id);

  // const item = Data.filter((it) => it.id === id);

  return (
    <>
      {/* {item.map((ite) => (
        <Flex>{ite.title}</Flex>
      ))} */}
      <Flex>
        titulo
        {/* {params.id} */}
        {/* {item.title} */}
        {/* <Text>{item.title}</Text> */}
        <Text>{description}</Text>

        {/* <Button>{wikipedia}</Button> */}
      </Flex>
    </>
  );
}
