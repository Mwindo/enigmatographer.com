import ArticleSection from "../components/ArticleSection";
import PageWrapper from "../components/PageWrapper";
import pageStyles from "../components/PageWrapper.module.css";
import styles from "./bio.module.css";

export default function Projects() {
  return (
    <PageWrapper header="Bio" headerIcon="/sherlock.jpg">
      <ArticleSection title="What is your name?">
        <p>See the top of this site.</p>
      </ArticleSection>
      <ArticleSection title="What is your quest?">
        <p>
          To find a better answer to this question! Maybe something like
          &quot;finding increasingly fun and complex questions to answer (or
          strive to answer).&quot;
        </p>
      </ArticleSection>
      <ArticleSection title="What is your quest?">
        <p>To find a better answer to this question!</p>
      </ArticleSection>
      <ArticleSection title="What is your favorite color?">
        <p>
          <span className={styles.blue}>Blue</span>. Sometimes{" "}
          <span className={styles.purple}>purple</span>.
        </p>
      </ArticleSection>
      <ArticleSection title="Who are you, anyway?">
        <p>
          I&apos;m a full-stack developer who loves learning new things of all
          sorts and solving interesting puzzles of all sorts.
        </p>
      </ArticleSection>
      <ArticleSection title="What is that icon?">
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
      </ArticleSection>
      <ArticleSection title="Bisom is an interesting last name. Where does it come from?">
        <h1 className={styles.h1}>🤷</h1>
      </ArticleSection>
    </PageWrapper>
  );
}
