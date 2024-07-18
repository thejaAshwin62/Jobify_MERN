import React from "react";
import { Form, redirect, Link } from "react-router-dom";
import { FormRow, Logo, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration Sucessfull");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow name="name" type="text" />
        <FormRow name="lastName" type="text" labelText="last Name" />
        <FormRow name="location" type="text" />
        <FormRow name="email" type="email" />
        <FormRow name="password" type="password" />

        <SubmitBtn />
        <p>
          Already a user
          <Link to="/login" className="member-btn">
            Login{" "}
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
