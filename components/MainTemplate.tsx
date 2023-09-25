import { Divider, Menu, MenuProps } from "antd";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Image from "next/image";

interface MainTemplateProps {
  children: ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: "Home!!!",
    key: "/",
  },
  {
    label: "Nothing",
    key: "/test2",
  },
];

export function MainTemplate({ children }: MainTemplateProps) {
  const router = useRouter();

  return (
    <>
      <Menu
        mode="horizontal"
        items={items}
        activeKey={router.pathname}
        className="bg-gradient-to-r from-green-800 to-[#003014] w-full border-2 border-black"
        onClick={({ key }) => router.push(key)}
      ></Menu>

      <div className="">{children}</div>
    </>
  );
}
