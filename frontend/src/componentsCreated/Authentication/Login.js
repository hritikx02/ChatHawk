import React, { useState } from "react";
import { Button, Fieldset, Input, VStack } from "@chakra-ui/react";
import { PasswordInput } from "../../components/ui/password-input";
import { Field } from "../../components/ui/field";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = () => {};

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
          }}
        >
          Get Guest User Credentials
        </Button>
      </Fieldset.Root>
    </VStack>
  );
};

export default Login;
