import SignUpForm from "../components/SignUpForm";
import RootLayout from "@/components/Layouts/RootLayout";

const SignUpPage = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h1 style={{ margin: "20px 0", textAlign: "center" }}>
        Sign Up
      </h1>
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;

SignUpPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
