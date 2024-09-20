import React from "react";
import Image from "next/image";
const cards = [
  {
    name: "Stat 1",
    value: "100",
    icon: "icon1.png",
    color: "bg-blue-500",
    date: "2021-10-10",
  },
  {
    name: "Stat 2",
    value: "200",
    icon: "icon2.png",
    color: "bg-green-500",
    date: "2021-10-10",
  },
  {
    name: "Stat 3",
    value: "300",
    icon: "icon3.png",
    color: "bg-yellow-500",
    date: "2021-10-10",
  },
  {
    name: "Stat 4",
    value: "400",
    icon: "icon4.png",
    color: "bg-red-500",
    date: "2021-10-10",
  },
  {
    name: "Stat 5",
    value: "500",
    icon: "icon5.png",
    color: "bg-purple-500",
    date: "2021-10-10",
  },
];

export default function UserCards() {
  return (
    <div className="flex flex-row gap-5 flex-wrap p-5 flex-1 min-w-[32rem]">
      {cards.map((card, index) => (
        <div
          key={index}
          className={` rounded-3xl shadow-md ${card.color} flex-1 min-w-60 px-4`}
        >
          <div className="flex flex-row justify-between p-2 ">
            <div className="flex flex-col min-h-32 justify-between p-2">
              <span className="text-green-600 px-2 py-1 text-sm rounded-full bg-white font-bold">
                {card.date}
              </span>

              <span className="text-white text-3xl font-bold">
                {card.value + " $"}
              </span>
              <span className="text-white text-sm font-semibold">
                {card.name}
              </span>
            </div>
            <div className="flex flex-col justify-between h-full">
              <Image src="/more.png" alt={card.name} width={40} height={40} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
