import PageWrapper, { PageWrapperProps } from "@/app/components/PageWrapper";

export default function DirectoryPageWrapper({
  header,
  children,
}: PageWrapperProps) {
  return <PageWrapper header={header}>{children}</PageWrapper>;
}
