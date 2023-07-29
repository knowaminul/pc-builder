import { Form, Row, Col, Input, Button, Card } from "antd";
import Link from "next/link";
import { createUser } from "@/redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { useRouter } from "next/router";

const SignUpForm = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const onFinish = (values) => {
    dispatch(createUser({ email: values.email, password: values.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      router.push("/");
    }
  }, [user.email, isLoading]);

  return (
    <Card className="form-container">
      <Form layout="vertical" name="signup-form" onFinish={onFinish}>
        <Form.Item
          name="email"
          label="Email"
          rules={[
            {
              type: "email",
              message: "Please enter a valid email address!",
            },
            {
              required: true,
              message: "Please enter your email!",
            },
          ]}
        >
          <Input placeholder="Enter Email" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password placeholder="Enter Password" />
        </Form.Item>
        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>
        </Form.Item>
        <Form.Item>
          <Row justify="space-between">
            <Col>Already have an account?</Col>
            <Col>
              <Link href="/signin">Sign In</Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default SignUpForm;
