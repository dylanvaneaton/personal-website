import  { DylanButton }  from "@/components/DylanButton";
import { NextPage } from "next";

const TestPage: NextPage = () => {
    return(

        <>
        <p>Test</p>
        <DylanButton dashed buttonTo="/">hello</DylanButton>
        </>
    )
};

export default TestPage;