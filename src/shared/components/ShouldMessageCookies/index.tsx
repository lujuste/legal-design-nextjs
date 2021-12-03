import { Box, Button, Slide, Flex, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { parseCookies, setCookie, destroyCookie } from "nookies";

export default function ShouldMessageCookies() {
  const [isShouldMessage, setIsShouldMessage] = useState(false);

  const cookies = parseCookies();
  console.log(cookies);

  function handleClick() {
    const cookies = parseCookies();
    console.log({ cookies });

    setCookie(null, "fromClient", "AuthorizationCookiesForExperience", {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
    });

    setIsShouldMessage(false);

    console.log({ cookies });
  }

  useEffect(() => {
    if (cookies.fromClient !== "AuthorizationCookiesForExperience") {
      setTimeout(() => setIsShouldMessage(true), 5000);
    }
  }, []);

  function onOpen() {
    setIsShouldMessage(false);
  }

  return (
    <>
      <Slide
        direction="bottom"
        in={isShouldMessage}
        style={{ zIndex: 1000000000000000000 }}
      >
        <Box
          p="40px"
          color="white"
          mt="4px"
          bg="pink.900"
          rounded="md"
          shadow="md"
        >
          <Flex
            flexDir={["column", "column", "row"]}
            justify="space-around"
            maxWidth="750px"
            w="100%"
            h="100%"
            align="center"
            mx="auto"
          >
            <Text fontSize={["14px", "14px", "15px", "16px"]}>
              Nós estamos utilizando <strong> cookies </strong>para melhorar a
              sua <strong>experiência</strong> em nosso site.
            </Text>
            <Button
              bgColor="white"
              px={10}
              mx="1rem"
              bgSize={["md", "sm", "sm"]}
              color="pink.900"
              onClick={handleClick}
              mt={["1rem", "1rem", "0"]}
              _hover={{
                bgColor: "transparent",
                color: "white",
                border: "1px solid white",
              }}
            >
              Aceito
            </Button>
          </Flex>
        </Box>
      </Slide>
    </>
  );
}
