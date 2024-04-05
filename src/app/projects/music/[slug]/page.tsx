"use client"
import PageWrapper from "@/app/components/PageWrapper";
import { usePathname } from "next/navigation";
export default function MusicProjects() {
  const path = usePathname();
  let dummyBackground: string = "rgb(60, 50, 70)";
  return <PageWrapper header="Project Name" headerLinkURL="https://github.com/Mwindo" backgroundColor={dummyBackground}><p>Project content</p></PageWrapper>
}
