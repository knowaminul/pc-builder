import LoginForm from "../components/LoginForm";
import RootLayout from "@/components/Layouts/RootLayout";

const LoginPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>Login</h1>
      <LoginForm />
    </div>
  );
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
