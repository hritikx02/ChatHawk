import React, { useEffect } from "react";
import { Container, Box, Text, Tabs } from "@chakra-ui/react";
import Login from "../componentsCreated/Authentication/Login";
import Signup from "../componentsCreated/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Homepage = () => {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="4xl" fontFamily="Work Sans" color="black">
          ChatHawk
        </Text>
      </Box>
      
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px" bg="white">
        <Tabs.Root variant="enclosed" fitted defaultValue="tab-1">
          <Tabs.List
            mb="1em"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <Tabs.Trigger
              value="tab-1"
              style={{ width: "50%", textAlign: "center" }}
            >
              Login
            </Tabs.Trigger>
            <Tabs.Trigger
              value="tab-2"
              style={{ width: "50%", textAlign: "center" }}
            >
              Sign Up
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="tab-1">
            <Login />
          </Tabs.Content>
          <Tabs.Content value="tab-2">
            <Signup />
          </Tabs.Content>
        </Tabs.Root>
      </Box>
    </Container>
  );
};

export default Homepage;
