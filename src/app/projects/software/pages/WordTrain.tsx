import PageWrapper from "@/app/components/PageWrapper";
import styles from "../../../components/PageWrapper.module.css";

export default function WordTrain() {
  return (
    <PageWrapper
      header="Word Train"
      headerLinkURL="https://github.com/Mwindo/word-games/tree/main/Word_Train"
      headerIcon="/train.png"
      backgroundColor="rgb(50, 50, 80)"
    >
      <h3>Motivation</h3>
      <p>
        I had a game called Word Train as a child, and I recently wondered how
        solvable it was for given lexicons (since the solvability of the game
        is inherently dependent on the words allowed). This seemed like a cute
        project. It also seemed like a project that was easy enough to do a lot
        with quickly, but which had room to expand indefinitely, e.g., training
        models, investigating lexicons with interesting properties related to
        Word Train (for instance, which languages are more
        &apos;fixed&apos;--i.e., unwinnable more often--than others?), etc.
      </p>
      <p>This is therefore an ongoing project.</p>
      <h3>What&apos;s the tech stack?</h3>
      <p>
        The code is in Python, with tests in pytest. The solver uses a
        depth-first search over a Trie derived from a user-specified .txt file
        of line-separated words defining the lexicon.
      </p>
    </PageWrapper>
  );
}
