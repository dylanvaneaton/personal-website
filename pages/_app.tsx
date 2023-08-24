import { AppProps } from "next/app";
import "../styles/global.css"
import { MainTemplate } from "@/components/MainTemplate";

export default function MyApp({ Component, pageProps }: AppProps) {

return (
    <MainTemplate>
        <Component {...pageProps} />
    </MainTemplate>
)
}
