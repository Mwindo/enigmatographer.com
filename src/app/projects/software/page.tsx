import PageWrapper from "@/app/components/PageWrapper";

export default function Software() {
  return (
    <PageWrapper
      header="Software Projects"
      headerIcon="/code.png"
      headerIconAlt="Image of python3 code"
    >
      <section>
        <p>This directory contains a handful of personal software projects.</p>
        <br />
        <p>
          As of right now (early 2025), I do most of my backend programming in
          Python and Node, although I have extensive experience with .NET and
          some experience with C, PHP, and Go. Most of my frontend work is in
          JavaScript/TypeScript, either with or without React. I am currently
          getting into more machine learning with PyTorch. Stay tuned!
        </p>
        <br />
        <p>
          Each page contains some information on the project as well as any
          relevant links.
        </p>
      </section>
    </PageWrapper>
  );
}
