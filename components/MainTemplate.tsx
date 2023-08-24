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
    <div className="flex flex-col items-center justify-center h-full mx-4 mt-4 dopeBorder shadow-pink-600 shadow-xl">
      <Menu
        mode="horizontal"
        items={items}
        activeKey={router.pathname}
        className="bg-green-600 w-full"
        onClick={({ key }) => router.push(key)}
      ></Menu>

      <div className="w-full h-full bg-green-800 p-8 mt-0">{children}</div>
    </div>
  );
}
