import { Form, Input, Button, Row, Col, Card } from "antd";
import Link from "next/link";
import { loginUser } from "@/redux/user/userSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import { useRouter } from "next/router";

const LoginForm = () => {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const router = useRouter();

  const onFinish = (values) => {
    dispatch(loginUser({ email: values.email, password: values.password }));
  };

  useEffect(() => {
    if (user.email && !isLoading) {
      router.push("/");
    }
  }, [user.email, isLoading]);

  return (
    <Card className="form-container">
      <Form layout="vertical" name="login-form" onFinish={onFinish}>
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
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
        <Form.Item>
          <Row justify="space-between">
            <Col>Don&apos;t have an account?</Col>
            <Col>
              <Link href="/signup">Sign Up</Link>
            </Col>
          </Row>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginForm;
