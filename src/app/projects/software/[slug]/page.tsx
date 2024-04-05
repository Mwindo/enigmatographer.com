"use client"
import PageWrapper from "@/app/components/PageWrapper";
import { usePathname } from "next/navigation";
export default function SoftwareProject() {
  const path = usePathname();
  let dummyBackground: string = "rgb(50, 50, 80)";
  if (path.includes("this-site")) dummyBackground = "rgb(50, 60, 70)";
  if (path.includes("commonplace")) dummyBackground = "rgb(60, 50, 70)";
  return <PageWrapper header="Project Name" headerLinkURL="https://github.com/Mwindo" backgroundColor={dummyBackground}><p>Project content</p></PageWrapper>
}
