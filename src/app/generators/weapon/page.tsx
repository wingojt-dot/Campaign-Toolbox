"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  weaponTypes,
  weaponAppearances,
  weaponProperties,
} from "@/data/weapons";
import { randomItem } from "@/lib/generators";

function generateWeapon() {
  const type = randomItem(weaponTypes);
  const appearance = randomItem(weaponAppearances);
  const property = randomItem(weaponProperties);

  return `A ${type} ${appearance}. ${capitalize(property)}.`;
}

function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export default function WeaponGenerator() {
  return (
    <GeneratorPage
      title="Weapon"
      generate={generateWeapon}
    />
  );
}