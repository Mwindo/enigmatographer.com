import PageWrapper from "@/app/components/PageWrapper";
import styles from "../../../components/PageWrapper.module.css";
import ArticleSection from "@/app/components/ArticleSection";

export default function WordTrain() {
  return (
    <PageWrapper
      header="Word Train"
      headerLinkURL="https://github.com/Mwindo/word-games/tree/main/Word_Train"
      headerIcon="/train.png"
      headerIconAlt="Image of train"
      headerIconCitation="https://letsdrawthat.com/how-to-draw-a-train/"
      backgroundColor="rgb(50, 50, 80)"
    >
      <ArticleSection title="Motivation">
        <p>
          I had a game called Word Train as a child, and I recently wondered how
          solvable it was for given lexicons (since the solvability of the game
          is inherently dependent on the words allowed). This seemed like a cute
          project. It also seemed like a project that was easy enough to do a
          lot with quickly, but which had room to expand indefinitely, e.g.,
          training models, investigating lexicons with interesting properties
          related to Word Train (for instance, which languages are more
          &apos;fixed&apos;--i.e., unwinnable more often--than others?), etc.
        </p>
        <p>This is therefore an ongoing project.</p>
      </ArticleSection>
      <ArticleSection title="What's the tech stack?">
        <p>
          The code is in Python, with tests in pytest. The solver uses a
          depth-first search over a Trie derived from a user-specified .txt file
          of line-separated words defining the lexicon.
        </p>
      </ArticleSection>
      <ArticleSection title="Challenges">
        <ul>
          <li>
            The most challenging bit so far has been (unsurprisingly) the
            solver. It was immediately clear to me that a prefix tree would be a
            useful data structure, but the DFS algorithm took me at least a day
            to think through. I wrote a first-pass solution that I was pretty
            sure was wrong, created a test case to prove it, thought through the
            algorithm more carefully (i.e., drew out a few examples and
            clarified exactly what I was trying to solve), and implemented it. A
            couple minor insights on the way:{" "}
            <ul>
              <li>
                There is no need to collect all viable words starting with a
                given prefix, only the "minimum-depth" viable words. For
                instance, "appl" is a prefix to both "apple" and "applesauce",
                but "apple" will always occur first and end the game before
                "applesauce" has a chance to be seen, so there is no need to
                continue searching for any words that start with the prefix
                "apple"--they will never occur in the game. This should have
                been obvious, but I didn&apos;t notice it at first.
              </li>
              <li>
                Often, I&apos;ve found that when I am struggling to implement
                something, I have not fully understood the problem. This was the
                case with the DFS algorithm: I hadn&apos;t clarified the
                distinction between what I called "certain" wins (wins that the
                player is guaranteed if they play perfectly) and "unavoidable"
                losses (losses that the player is guaranteed unless some other
                player makes a mistake). Once I went back to{" "}
                <a
                  className={styles.link}
                  href="https://en.wikipedia.org/wiki/How_to_Solve_It"
                  target="_blank"
                >
                  Polyà&apos;s first step
                </a>
                , I made quick headway.
              </li>
            </ul>
          </li>
        </ul>
      </ArticleSection>
    </PageWrapper>
  );
}
