import React, { useState } from "react";
import { Button, Fieldset, Input, VStack, Text } from "@chakra-ui/react";
import { PasswordInput } from "../../components/ui/password-input";
import { Field } from "../../components/ui/field";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();

  const postDetails = (pics) => {};

  const submitHandler = () => {};

  return (
    <VStack spacing="5px">
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content>
          <Field label="Name" isRequired>
            <Input
              id="name"
              name="name"
              placeholder="Enter Your Name"
              onChange={(e) => setName(e.target.value)}
              isRequired
            />
          </Field>

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

          <Field label="Confirm Password" isRequired>
            <PasswordInput
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm Your Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              isRequired
              defaultValue=""
              visible={visible}
              onVisibleChange={setVisible}
            />
          </Field>
        </Fieldset.Content>

        <Field label="Upload your picture" isRequired>
          <Input
            type="file"
            p={1.5}
            accept="image/*"
            onChange={(e) => postDetails(e.target.files[0])}
            isRequired
          />
        </Field>

        <Button
          type="submit"
          alignSelf="flex-start"
          width="100%"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Fieldset.Root>
    </VStack>
  );
};

export default Signup;
