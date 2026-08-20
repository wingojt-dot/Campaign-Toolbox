"use client";

import GeneratorPage from "@/components/GeneratorPage";
import {
  roomTypes,
  roomFeatures,
  roomOccupants,
} from "@/data/dungeonRooms";
import { randomItem } from "@/lib/generators";

function generateDungeonRoom() {
  const room = randomItem(roomTypes);
  const feature = randomItem(roomFeatures);
  const occupant = randomItem(roomOccupants);

  return `${room.charAt(0).toUpperCase() + room.slice(1)} containing ${feature}. ${occupant}`;
}

export default function DungeonRoomGenerator() {
  return (
    <GeneratorPage
      title="Dungeon Room"
      generate={generateDungeonRoom}
    />
  );
}