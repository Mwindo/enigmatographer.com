import PageWrapper from "../components/PageWrapper";
import pageStyles from "../components/PageWrapper.module.css";
import styles from "./bio.module.css";

export default function Projects() {
  return (
    <PageWrapper header="Bio" headerIcon="/sherlock.jpg">
      <h3>What is your name?</h3>
      <p>See the top of this site.</p>
      <h3>What is your quest?</h3>
      <p>Something</p>
      <h3>What is your favorite color?</h3>
      <p>
        <span className={styles.blue}>Blue</span>. Sometimes{" "}
        <span className={styles.purple}>purple</span>.
      </p>
      <h3>Who are you, anyway?</h3>
      <p>
        I&apos;m a full-stack developer who loves solving interesting puzzles.
      </p>
      <h3>What is that icon?</h3>
      <p>
        It&apos;s my GitHub profile image, Sherlock Chick, from{" "}
        <a
          className={pageStyles.link}
          href="https://www.amazon.com/Sherlock-Chick-the-Peekaboo-Mystery/dp/B001QHLJRE"
          target="_blank"
        >
          the delightful book
        </a>{" "}
        by Robert (I&apos;m not making this up) Quackenbush. (
        <a
          className={pageStyles.link}
          href="https://www.amazon.com/Henrys-Awful-Mistake-Robert-Quackenbush/dp/1563832755"
          target="_blank"
        >
          <i>Henry&apos;s Awful Mistake</i>
        </a>{" "}
        is my favorite, but Sherlock Chick looks cooler.)
      </p>
      <h3>Bisom is an interesting last name. Where does it come from?</h3>
      <h1>🤷</h1>
    </PageWrapper>
  );
}
