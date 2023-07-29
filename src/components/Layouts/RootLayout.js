import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
} from "@ant-design/icons";
import { Button, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { setUser } from "@/redux/user/userSlice";

const RootLayout = ({ children }) => {
  const { user } = useAppSelector((state) => state.user);
  
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    console.log("Logout");
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(setUser(null));
    });
  };

  const categories = [
    { name: "CPU / Processor", url: "cpu-or-processor" },
    { name: "Others", url: "others" },
    { name: "Power Supply Unit", url: "power-supply-unit" },
    { name: "Monitor", url: "monitor" },
    { name: "RAM", url: "ram" },
    { name: "Storage Device", url: "storage-device" },
    { name: "Motherboard", url: "motherboard" },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              PCB
            </Link>
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "right" }}>
          <Menu theme="dark" mode="horizontal" className={styles.menu_items}>
            <Menu.SubMenu
              key="sub1"
              title="Categories"
              icon={<ProfileOutlined />}
            >
              {categories.map((category) => (
                <Menu.Item key={category.url}>
                  <Link href={category.url}>{category.name}</Link>
                </Menu.Item>
              ))}
            </Menu.SubMenu>

            <Menu.SubMenu key="sub2" title="Account" icon={<UserOutlined />}>
              {!user.email && (
                <>
                  <Menu.Item key="signin">
                    <Link href="/signin">Sign In</Link>
                  </Menu.Item>
                  <Menu.Item key="signup">
                    <Link href="/signup">Sign Up</Link>
                  </Menu.Item>
                </>
              )}
              {user.email && (
                <Menu.Item key="logout">
                  <Button type="link" onClick={handleLogout}>
                    Logout
                  </Button>
                </Menu.Item>
              )}
            </Menu.SubMenu>
          </Menu>

          <div className={styles.menu_items}>
            <Link href="/tool/pc_builder">
              <Button type="primary" className={styles.gradientStyle}>
                PC Builder
              </Button>
            </Link>
          </div>
        </div>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          PC Builder
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://web.facebook.com/">
            <FacebookFilled />
          </Link>
          <Link href="https://twitter.com/knowaminul">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://www.knowaminul.com/">
            <GoogleSquareFilled />
          </Link>
          <Link href="https://www.linkedin.com/in/knowaminul/">
            <LinkedinFilled />
          </Link>
        </p>
        PC Builder ©2023 Created by knowaminul
      </Footer>
    </Layout>
  );
};
export default RootLayout;
