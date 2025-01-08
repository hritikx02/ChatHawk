import React, { useState } from "react";
import { Button, Fieldset, Input, VStack, Text } from "@chakra-ui/react";
import { PasswordInput } from "../../components/ui/password-input";
import { Field } from "../../components/ui/field";
import { toaster } from "../../components/ui/toaster";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const Signup = () => {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [password, setPassword] = useState();
  const [pic, setPic] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const postDetails = async (pics) => {
    const url = `https://api.cloudinary.com/v1_1/df0vzlszl/upload`;
    const formData = new FormData();

    formData.append("file", pics);
    formData.append("upload_preset", "ChatHawk - A MERN chat application");

    setLoading(true);

    try {
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        toaster.create({
          title: "Successfully Uploaded!",
          type: "success",
        });
        console.log("Upload successful:", data);
      } else {
        toaster.create({
          title: "Please Upload an Image!",
          type: "error",
        });
        console.error("Upload failed:", data);
      }
    } catch (error) {
      toaster.create({
        title: "Please Upload an Image!",
        type: "error",
      });
      console.error("Error uploading image:", error);
    } finally {
      setLoading(false);
    }
  };

  const submitHandler = async () => {
    setLoading(true);

    if (!name || !email || !password || !confirmPassword) {
      toaster.create({
        title: "Please Fill all the Fields!",
        type: "warning",
      });

      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      toaster.create({
        title: "Passwords Do Not Match",
        type: "warning",
      });
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user",
        { name, email, password, pic },
        config
      )

      toaster.create({
        title: "Registration Successfull",
        type: "success",
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      history.push("/chats")
    } catch (error) {
      toaster.create({
        title: "Error Occured!",
        type: "error",
      });
      setLoading(false);
    }
  };

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
          isLoading={loading}
          loadingText="Uploading..."
        >
          Submit
        </Button>
      </Fieldset.Root>
    </VStack>
  );
};

export default Signup;
