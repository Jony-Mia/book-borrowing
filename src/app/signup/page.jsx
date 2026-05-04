"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Check, FaceSmile } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, Separator, TextField } from "@heroui/react";
import Link from "next/link";

function SignUpForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const dataList = Object.fromEntries(formData.entries())
    const { data, error } = await authClient.signUp.email({
      email: dataList.email,
      name: dataList.username,
      password: dataList.password,
      callbackURL: "/"
    })

    if (error) {
      setErrorMessage(error.message || "Unable to sign up. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/");
  };
  return (
    <>
      {/* <Form className="flex w-96 flex-col m-auto p-4 shadow rounded-2xl gap-4 mt-25" onSubmit={onSubmit}>
        {errorMessage && <p className="text-red-600 text-sm">{errorMessage}</p>}
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

      </Form> */}
           <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f3ecdf] to-[#faf7f2] p-4">
                <Form className="w-full max-w-md bg-white shadow-2xl p-8 rounded-3xl space-y-6" onSubmit={onSubmit}>
                  <div className="text-center mb-8">
                    {/* <div className="flex justify-center mb-4">
                      <div className="bg-gradient-to-r from-[#df8620] to-[#fe9a00] p-3 rounded-full">
                        
                        <FaceSmile/>
                      </div>
                    </div> */}
                    <h2 className="text-2xl font-bold text-[#333] mb-2">Welcome Back</h2>
                    <p className="text-muted text-sm">Log in to continue to your library</p>
                  </div>
          
                  {errorMessage && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">{errorMessage}</div>}
          
                  <TextField isRequired name="email" type="text" className="">
                    <Label className="text-sm font-semibold">Name</Label>
                    <Input placeholder="Enter your name" className="rounded-xl" />
                    <FieldError />
                  </TextField>
                  
                  <TextField isRequired name="email" type="email"  className="">
                    <Label className="text-sm font-semibold">Email</Label>
                    <Input placeholder="your@email.com" className="rounded-xl" />
                    <FieldError />
                  </TextField>
          
                  <TextField isRequired minLength={8} name="password" type="password" validate={(value) => {
                    if (value.length < 8) {
                      return "Password must be at least 8 characters";
                    }
                    return null;
                  }}>
                    <Label className="text-sm font-semibold">Password</Label>
                    <Input placeholder="Create password" className="rounded-xl" />
                    <FieldError />
                  </TextField>
          
                  <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white font-semibold py-3 rounded-xl h-auto hover:shadow-lg transition-all duration-300">
                    <Check />
                    Signup
                  </Button>
          
                  <p className="text-center text-sm text-muted">
                    Don't have an account? <Link href="/signup" className="text-[#df8620] font-semibold hover:underline">Sign up</Link>
                  </p>
                </Form>
              </div>
    </>
  );
}

export default SignUpForm;