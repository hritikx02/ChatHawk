import React, { useState } from "react";
import { Button, Fieldset, Input, VStack } from "@chakra-ui/react";
import { PasswordInput } from "../../components/ui/password-input";
import { Field } from "../../components/ui/field";
import { toaster } from "../../components/ui/toaster";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const submitHandler = async () => {
    setLoading(true);

    if (!email || !password) {
      toaster.create({
        title: "Please Fill all the Fields!",
        type: "warning",
      });

      setLoading(false);
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password},
        config
      );

      toaster.create({
        title: "Login Successful",
        type: "success",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats");
    } catch (error) {
      toaster.create({
        title: "Error Occured!",
        description: error.response?.data?.message || error.message,
        type: "error",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Field label="E-Mail" isRequired>
            <Input
              id="email"
              name="email"
              placeholder="Enter Your E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              isRequired
            />
          </Field>

          <Field label="Password" isRequired>
            <PasswordInput
              id="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              isRequired
              defaultValue=""
              visible={visible}
              onVisibleChange={setVisible}
            />
            {/* <Text>Password is {visible ? "visible" : "hidden"}</Text> */}
          </Field>
        </Fieldset.Content>

        <Button
          type="submit"
          alignSelf="flex-start"
          width="100%"
          onClick={submitHandler}
          isLoading={loading}
        >
          Submit
        </Button>

        <Button
          margin="5px 0"
          variant="solid"
          colorScheme="red"
          type="submit"
          alignSelf="flex-start"
          width="100%"
          onClick={() => {
            setEmail = "guest@example.com";
            setPassword = "123456789";
            toaster.create({
              title: "Guest credentials set!",
              type: "success",
            });
          }}
        >
          Get Guest User Credentials
        </Button>
      </Fieldset.Root>
    </VStack>
  );
};

export default Login;
