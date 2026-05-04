"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import {FaceSmile} from '@gravity-ui/icons';


function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const dataList = Object.fromEntries(formData.entries())
    const { data, error } = await authClient.signIn.email({
      email: dataList.email,
      password: dataList.password,
      callbackURL: "/"
    })

    if (error) {
      setErrorMessage(error.message || "Unable to log in. Please try again.");
      setLoading(false);
      return;
    }

    router.push("/");
  };

  return (
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

        <TextField isRequired name="email" type="email" className="">
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
          <Input placeholder="enter your password" className="rounded-xl" />
          <FieldError />
        </TextField>

        <Button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-[#df8620] to-[#fe9a00] text-white font-semibold py-3 rounded-xl h-auto hover:shadow-lg transition-all duration-300">
          <Check /> {loading ? "Logging in..." : "Log In"}
        </Button>

        <p className="text-center text-sm text-muted">
          Don't have an account? <Link href="/signup" className="text-[#df8620] font-semibold hover:underline">Sign up</Link>
        </p>
      </Form>
    </div>
  );
}

export default LoginForm;