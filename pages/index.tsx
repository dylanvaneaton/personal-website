import { NextPage } from "next";
import { Button, Layout, Menu } from "antd";
import React from "react";
import type { MenuProps } from "antd";



const HomePage: NextPage = () => {
  return(
    <>
    <h1 className="text-4xl text-white font-extrabold">The coolest site.</h1>
    <p className="text-fuchsia-300 text-xl font-bold">The text has disappeared and it was mad dumb and stupid anyway.</p>
    </>
  )
};

export default HomePage;