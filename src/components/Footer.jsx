import { Flex, Text, Image } from "@chakra-ui/react";

export default function Footer() {
  return (
    <>
      <Flex
        bg="#f9f9f9"
        justifyContent="center"
        alignItems="center"
        h="5vh"
        position="fixed"
        w="100%"
      >
        <a href="https://twitter.com/_atruj" target="_blank">
          <Image
            src="https://25y35xxcueanov2s108puszp-wpengine.netdna-ssl.com/wp-content/uploads/2022/03/ext-627.png"
            marginRight="1rem"
            w="1rem"
          />
        </a>

        <Text as="h4" p="0" m="0">
          Ariel Trujillo
        </Text>
        <a href="https://cafecito.app/truman" target="_blank">
          <Image
            src="https://cdn.cafecito.app/imgs/cafecito-logo-round.png"
            marginLeft="1rem"
            w="1rem"
          />
        </a>
      </Flex>
    </>
  );
}
