import { Box, Text, Image, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
// import Slide from "./Slide";

export default function Card(props) {
  const { id, title, img1, img2, description, video1, video2, wikipedia } =
    props;

  const [show, setShow] = useState(false);

  const showItem = () => {
    setShow((currentShow) => !currentShow);
  };

  return (
    <>
      <Box
        id={id}
        w={["100%", "100%", "100%", "40%"]}
        display="flex"
        justifyContent="center"
      >
        {/* <Link to={`/item/${id}`}></Link> */}
        <Text
          onClick={showItem}
          border="1px transparent #f9f9f9"
          borderRadius="20px"
          boxShadow="5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)"
          cursor="pointer"
          p="1rem 0"
          m=".5rem 0"
          textAlign="center"
          transition="0.4s"
          w={["100%", "100%", "100%", "80%"]}
          _hover={{
            background: "#f9f9f9",
            boxShadow:
              "5px 5px 30px 15px rgba(0,0,0,0.25), -5px -5px 30px 15px rgba(0,0,0,0.22)",
            color: "#7F1431",
            transform: "scale(0.9, 0.9)",
          }}
        >
          {title}
        </Text>
        {show ? (
          <>
            <Flex
              background="radial-gradient(circle, rgba(51,41,45,1) 0%, rgba(127,20,49,1) 100%)"
              id={id}
              width="100%"
              position="absolute"
              top="-.5rem"
              minHeight="100vh"
              p="1rem"
              left="0"
              zIndex="2"
            >
              <Flex
                marginTop="2rem"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                {/* <Slide img1={img1} img2={img2}></Slide> */}
                <Text
                  as="span"
                  position="absolute"
                  top="0"
                  right="0"
                  p="1rem"
                  cursor="pointer"
                  fontSize="1.5rem"
                  onClick={showItem}
                >
                  X
                </Text>
                <Text
                  as="h3"
                  textTransform="uppercase"
                  p="0 1rem 1rem"
                  fontSize={["1.5rem", "1.5rem", "2rem"]}
                >
                  {title}
                </Text>
                <Flex justifyContent="space-evenly">
                  <Image
                    src={img1}
                    borderRadius="2px"
                    boxShadow="5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)"
                    m="0 0 1rem "
                    objectFit="cover"
                    w={["340px", "340px", "33em", "35%"]}
                  />
                  <Image
                    src={img2}
                    borderRadius="2px"
                    boxShadow="5px 5px 30px 7px rgba(0,0,0,0.25), -5px -5px 30px 7px rgba(0,0,0,0.22)"
                    display={["none", "none", "none", " block"]}
                    m="0 0 1rem "
                    objectFit="cover"
                    w={["340px", "340px", "33em", "40%", "35%"]}
                  />
                </Flex>

                <Text
                  as="p"
                  textAlign="justify"
                  w={["100%", "100%", "70%", "70%"]}
                >
                  {description}
                </Text>
                <a
                  href={wikipedia}
                  target="_blank"
                  style={{ padding: "1rem 0 0", fontStyle: "italic" }}
                >
                  Fuente
                </a>
                <Flex
                  m="1rem 0"
                  w="100%"
                  flexDirection={["column", "column", "row"]}
                  alignItems={["center", "center", "flex-start"]}
                  flexWrap="wrap"
                  justifyContent="space-evenly"
                >
                  <iframe
                    src={video1}
                    width="340"
                    height="250"
                    allowFullScreen
                    style={{ marginBottom: "1rem" }}
                  />
                  <iframe
                    src={video2}
                    width="340"
                    height="250"
                    allowFullScreen
                  />
                </Flex>
              </Flex>
            </Flex>
          </>
        ) : null}
      </Box>
    </>
  );
}
