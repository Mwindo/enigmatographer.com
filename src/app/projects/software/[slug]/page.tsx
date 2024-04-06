"use client";
import PageWrapper from "@/app/components/PageWrapper";
import { usePathname } from "next/navigation";
import Enigmatographer from "../pages/Enigmatographer";
import WordTrain from "../pages/WordTrain";
import Commonplace from "../pages/Commonplace";
export default function SoftwareProject() {
  const path = usePathname();
  if (path.includes("this-site")) {
    return <Enigmatographer></Enigmatographer>
  }
  if (path.includes("word-train")) {
    return <WordTrain></WordTrain>
  }
  if (path.includes("commonplace")) {
    return <Commonplace></Commonplace>
  }


  return (
    <PageWrapper
      header="Project Not Found"
      headerLinkURL="/"
    >
      {"No project info :("}
    </PageWrapper>
  );
}
