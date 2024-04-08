import PageWrapper from "@/app/components/PageWrapper";
import pageStyles from "../../../components/PageWrapper.module.css";
import ArticleSection from "@/app/components/ArticleSection";

export default function Commonplace() {
  return (
    <PageWrapper
      header="Commonplace"
      headerLinkURL="https://github.com/Mwindo/commonplace"
      headerIcon="/commonplace.png"
      backgroundColor="rgb(60, 50, 70)"
    >
      <ArticleSection title="Motivation">
        <p>
          I wanted a blog, of sorts, and I wanted to design it myself. I often
          find myself impressed by &quot;little ingenuities,&quot; like a clever
          turn or phrase or an elegant mathematical substitution, and I wanted a
          place to document these easy-to-forget moments.
        </p>
        <p>
          I am putting some finishing touches on it before sharing the deployed
          version.
        </p>
      </ArticleSection>
      <ArticleSection title="What does it look like?">
        <p>
          It is not production-ready, but you can see it in its inchoate state
          (with some silly dummy articles and a few bug fixes not yet deployed)
          at{" "}
          <a
            className={pageStyles.link}
            href="https://commonplace.enigmatographer.com/"
            target="_blank"
          >
            https://commonplace.enigmatographer.com
          </a>
          . Time permitting, I hope to have it "live" sometime in the next
          couple of months.
        </p>
      </ArticleSection>
      <ArticleSection title="What's the tech stack?">
        <p>
          Docker for containerization, Nginx for a reverse proxy, Python Flask
          (with pytest) for the backend, MySQL for the database, React (with
          jest and react-testing-library) for the frontend. It&apos;s currently
          deployed on a VM via GCP since it&apos;s small.
        </p>
      </ArticleSection>
    </PageWrapper>
  );
}
