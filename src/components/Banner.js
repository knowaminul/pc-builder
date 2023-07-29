import { Col, Row, Carousel } from "antd";
import {
  ArrowRightOutlined,
  CalendarOutlined,
  CommentOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Banner1 from "@/assets/images/banner-images/banner_1.jpg";
import Banner2 from "@/assets/images/banner-images/banner_2.jpg";

const contentStyle = {
  height: "425px",
  color: "#000",
};

const Banner = () => (
  <Carousel effect="fade" autoplay style={{ margin: "20px 0px" }}>
    {/* slider-1 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image src={Banner1} fill alt="banner_1" />
        </Col>
      </Row>
    </div>
    {/* slider-2 */}
    <div>
      <Row>
        <Col
          lg={{
            span: 24,
          }}
          style={contentStyle}
        >
          <Image
            src={Banner2}
            fill
            alt="banner_2"
            style={{ grayScale: "-1" }}
          />
        </Col>
      </Row>
    </div>
  </Carousel>
);
export default Banner;
