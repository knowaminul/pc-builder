import React from "react";
import Link from "next/link";
import { Card } from "antd";

const FeaturedCategoryCard = ({ categoryName, categoryURL }) => {
  return (
    <Card>
      <Link href={`/${encodeURIComponent(categoryURL)}`}>{categoryName}</Link>
    </Card>
  );
};

export default FeaturedCategoryCard;
