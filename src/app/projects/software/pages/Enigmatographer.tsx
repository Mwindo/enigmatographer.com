import PageWrapper from "@/app/components/PageWrapper";
import pageStyles from "../../../components/PageWrapper.module.css";
import ArticleSection from "@/app/components/ArticleSection";
import { headerFont } from "@/app/pagelayout";

export default function Enigmatographer() {
  return (
    <PageWrapper
      header="Enigmatographer.com"
      headerLinkURL="https://github.com/Mwindo/enigmatographer.com"
      headerIcon="/enigmatographer.png"
      backgroundColor="rgb(50, 60, 70)"
    >
      <ArticleSection title="Motivation">
        <p>
          I realized that I had a very small public-facing presence, which for
          reasons of privacy I liked, but for reasons of employment seemed
          perhaps less suitable. So I decided to quickly spin up a small
          &quot;portfolio&quot; website.
        </p>
        <p>
          I wanted something simple, but dynamic and slightly unusual. I opted
          for a VSCode/IDE-like interface.
        </p>
      </ArticleSection>
      <ArticleSection title="What's with the name?">
        <p>
          I settled on the domain &quot;enigmatographer&quot; (an obscurish term
          for &quot;riddle maker&quot;) because I love puzzles and riddles. I
          spent much of my time in graduate school researching literary riddles,
          and I still like to document any I stumble across in my readings.
          (Riddles also have an affinity with lists, which I likewise find
          myself compiling after having discovered that, despite their
          versatility and ubiquity, they are an oft-overlooked literary device.)
          If you have a good riddle or puzzle (or an interesting list!{" "}
          <a
            className={pageStyles.link}
            href="https://bisom-bucket.s3.us-east-2.amazonaws.com/enigmatographer/List+Examples.pdf"
            target="_blank"
          >
            examples
          </a>
          ), please share it with me!
        </p>
      </ArticleSection>
      <ArticleSection title="What's the tech stack?">
        <p>
          The site is a fairly straightforward React/Next.js app, deployed on
          Vercel via GitHub.
        </p>
      </ArticleSection>
      <ArticleSection title="What's that font at the top of the page?">
        <p>
          The one with my name?{" "}
          <a
            className={pageStyles.link}
            href="https://www.1001fonts.com/lansbury-fg-font.html"
            target="_blank"
          >
            Lansbury
          </a>
          . It&apos;s the <i>Murder, She Wrote</i> font, and I love it. The
          lowercase &quot;<span className={headerFont.className}>g</span>&quot;
          is especially cool. The show is fun too.
        </p>
      </ArticleSection>
    </PageWrapper>
  );
}
