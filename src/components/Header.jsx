import { Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Header(props) {
  const { id } = props;
  return (
    <>
      <Flex
        h="7vh"
        bg="#f4e9d9"
        m='.5rem 0'
        background="url(https://thumbs.dreamstime.com/b/logo-de-la-copa-mundial-qatar-fifa-campeonato-f%C3%BAtbol-masculino-ilustraci%C3%B3n-vectorial-232830718.jpg)"
        backgroundSize="contain"
        backgroundRepeat="no-repeat"
        backgroundPosition="center"
      >
        {/* <Link to="/">Qatar 2022</Link> */}
      </Flex>
    </>
  );
}
