import { NextPage } from "next";
import { Button, Layout, Menu } from "antd";
import React from "react";
import type { MenuProps } from "antd";
import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col bg-lime-700 w-full pr-24">
      <h1 className="italic text-2xl font-bold w-full text-right pr-6">
        Information Technology and Cybersecurity
      </h1>

      <div className="flex flex-row justify-end w-full">
        <h1 className="italic text-7xl font-bold whitespace-pre-wrap self-end pb-4 pr-16">
          {"Dylan\nVan\nEaton"}
        </h1>

        <Image
          src="/assets/dylanstanding.png"
          alt="Dylan Picture"
          height={538}
          width={248}
          className="pr-2"
        ></Image>
      </div>
    </div>
  );
};

export default HomePage;
