import DirectoryPageWrapper from "@/app/components/DirectoryPageWrapper";

export default function Software() {
  return (
    <DirectoryPageWrapper header="Software Projects">
      <p>This directory contains a handful of personal software projects.</p>
      <p>
        As of right now (2024), I do most of my backend programming in Python,
        although I have extensive experience with .NET and some experience with C
        and PHP. Most of my frontend work is in JavaScript/TypeScript, either
        with or without React. I'm currently getting into more machine learning
        with PyTorch. Stay tuned!
      </p>
    </DirectoryPageWrapper>
  );
}
