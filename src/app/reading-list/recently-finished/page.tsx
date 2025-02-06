import PageWrapper from "@/app/components/PageWrapper";
import BookItem from "../../components/BookItem";
import BookItemList from "../../components/BookItemList";

export default function Commonplace() {
  return (
    <PageWrapper
      header="Recently Finished"
      headerLinkURL=""
      headerIcon="/book.svg"
      headerIconAlt="Book icon"
      headerIconCitation="https://freeiconshop.com/icon/book-icon-flat/"
    >
      <BookItemList>
        <BookItem
          title="Essentials of Programming Languages"
          authors={["Friedman et al."]}
          url="https://mitpress.mit.edu/9780262560672/essentials-of-programming-languages/"
          image="https://bisom-bucket.s3.us-east-2.amazonaws.com/enigmatographer/book-cover-essentials-programming-languages.png"
        >
          <p>
            I wanted to get a better sense of programming language design. The
            most interesting and/or helpful information for me has been about
            variable binding, scopes, and extents (e.g., why closures lead to
            semi-infinite binding extents, and what lexical vs. dynamic scoping
            entails); implicit vs. explicit referencing and eager vs. lazy
            parameter passing (e.g., why lazy parameter passing works well in
            functional languages but not in stateful languages); control
            contexts and continuations (e.g., what exactly tail-call
            optimizations and trampolining are).
          </p>
        </BookItem>
        <BookItem
          title="Metamagical Themas"
          authors={["Douglas Hofstadter"]}
          url="https://en.wikipedia.org/wiki/Metamagical_Themas"
          image="https://upload.wikimedia.org/wikipedia/en/7/7a/Metamagical_Themas.jpg"
        >
          <p>
            A delightful collection of essays on recursion, reflexivity, music,
            A.I., and other mathemagical topics. I began reading this without
            intending to and found myself a third of the way through. It is
            interesting to compare the ideas about artificial intelligence in
            the 1980s to the recent phase shift with LLMs. I most enjoyed the
            self-reflexive sentences, like this one; the dea of parquet deformations. It also suggested to me Codex Se
          </p>
        </BookItem>
      </BookItemList>
    </PageWrapper>
  );
}
