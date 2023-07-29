import { Card, Typography, Tag } from "antd";
import Image from "next/image";
import Link from "next/link";

const { Title } = Typography;

const FeaturedProductCard = ({ product }) => {
  const { _id: id, productName, category, price, status, averageRating, image } =
    product;

  return (
    <div>
      <Link href={`/product/${id}`}>
        <Card
          hoverable
          cover={
            <Image
              src={image}
              width={300}
              height={200}
              responsive
              alt="product"
            />
          }
        >
          {" "}
          <div>
            <Title level={5}>{productName}</Title>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <Tag color={status === "In Stock" ? "green" : "red"}>{status}</Tag>
            <Tag>{averageRating} Stars</Tag>
          </div>
        </Card>
      </Link>
    </div>
  );
};

export default FeaturedProductCard;
