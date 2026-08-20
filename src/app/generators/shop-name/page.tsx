"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  shopOwners,
  shopAdjectives,
  shopGoods,
} from "@/data/locationNames";
import { randomItem } from "@/lib/generators";

function generateShopName() {
  const pattern = randomItem(["owner", "adjective", "goods"]);

  if (pattern === "owner") {
    return `${randomItem(shopOwners)}'s ${randomItem(shopGoods)}`;
  }

  if (pattern === "adjective") {
    return `The ${randomItem(shopAdjectives)} ${randomItem(shopGoods)}`;
  }

  return `${randomItem(shopGoods)} & More`;
}

export default function ShopNameGenerator() {
  return (
    <GeneratorPage
      title="Shop Name"
      generate={generateShopName}
    />
  );
}