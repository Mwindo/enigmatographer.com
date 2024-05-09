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
      </BookItemList>
    </PageWrapper>
  );
}
