import PageWrapper from "@/app/components/PageWrapper";
import styles from "../../../components/PageWrapper.module.css";

export default function Commonplace() {
  return (
    <PageWrapper
      header="Commonplace"
      headerLinkURL="https://github.com/Mwindo/commonplace"
      headerIcon="/commonplace.png"
      backgroundColor="rgb(60, 50, 70)"
    >
      <h3>Motivation</h3>
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
      <h3>What&apos;s the tech stack?</h3>
      <p>
        Docker for containerization, Nginx for a reverse proxy, Python Flask
        (with pytest) for the backend, MySQL for the database, React (with jest
        and react-testing-library) for the frontend. It&apos;s currently
        deployed on a VM via GCP since it&apos;s small.
      </p>
    </PageWrapper>
  );
}
