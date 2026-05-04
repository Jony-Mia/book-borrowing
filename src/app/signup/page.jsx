"use client";
import { authClient, signIn } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";

function SignUpForm() {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataList = Object.fromEntries(formData.entries())
    const { data, error } = await authClient.signUp.email({
      email: dataList.email,
      name: dataList.username,
      password: dataList.password,
      callbackURL: "/"
    })

  };

  return (
    <>
      <Form className="flex w-96 flex-col m-auto p-4 shadow rounded-2xl gap-4 mt-25" onSubmit={onSubmit}>
        <TextField name="username" isRequired>
          <Label>Enter Name</Label>
          <Input placeholder="Username" className={"px-5 py-3"} />
        </TextField>
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" className={"px-5 py-3"} />
          <FieldError />
        </TextField>

        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" className={"px-5 py-3"} />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit" className={"bg-[#fe9a00] text-white"}>
            Sign  Up
          </Button>
        </div>

      </Form>

    </>
  );
}

export default SignUpForm;