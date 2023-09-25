import { NextPage } from "next";
import { Button, Layout, Menu } from "antd";
import React from "react";
import type { MenuProps } from "antd";
import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-row dopeBorder w-full">
      <div className="bg-white p-8 w-full">
        <h1>Hi! This is my website.</h1>
        <p>
          This is some random filler text that I am currently typing just so I
          have something to look at when I make this box.
        </p>
      </div>
      <div className="flex flex-col w-[540px] waterBackground align-middle m-0 min-w-[540px]">
        <h1 className="italic text-2xl font-bold w-full pl-4 text-white">
          Information Technology and Cybersecurity
        </h1>

        <div className="flex flex-row justify-start w-full">
          <h1 className="italic text-8xl font-bold whitespace-pre-wrap self-end pb-4 pr-4 pl-4 text-white">
            {"Dylan\nVan\nEaton"}
          </h1>

          <Image
            src="/assets/dylanstanding.png"
            alt="Dylan Picture"
            height={538}
            width={248}
            className="pr-8"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
