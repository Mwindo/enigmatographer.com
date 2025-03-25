import PageWrapper from "@/app/components/PageWrapper";
import BookItem from "../../components/BookItem";
import BookItemList from "../../components/BookItemList";
import styles from "../../components/PageWrapper.module.css";

export default function Commonplace() {
  return (
    <PageWrapper
      header="Currently Reading"
      headerLinkURL=""
      headerIcon="/book.svg"
      headerIconAlt="Book icon"
      headerIconCitation="https://freeiconshop.com/icon/book-icon-flat/"
    >
      <BookItemList>
        <BookItem
          title="The Origins of Totalitarianism"
          authors={["Hannah Arendt"]}
          url="https://en.wikipedia.org/wiki/The_Origins_of_Totalitarianism"
          image="https://m.media-amazon.com/images/I/410HMyXJQgL._SY445_SX342_.jpg"
        >
          <p>
            By coincidence (or more likely convergence), I started reading this
            while listening to{" "}
            <a
              href="https://oyc.yale.edu/history/hist-202"
              className={styles.link}
              target="_blank"
            >
              John Merriman&apos;s lectures on European history
            </a>
            . A theme that recurs in the history and pre-history of WWI and WWII
            is the explosive (and implosive) effects of overzealous nationalism,
            the tendency towards authoritarianism and scapegoating that poor
            economic conditions encourage, and the falsity of comforting ideas
            like &quot;they did not know what was happening.&quot;
          </p>
        </BookItem>
        <BookItem
          title="Cyrano de Bergerac"
          authors={["Edmond Rostand"]}
          url="https://en.wikipedia.org/wiki/Cyrano_de_Bergerac_(play)"
          image="https://m.media-amazon.com/images/I/8143TWFmsPL._SY522_.jpg"
        >
          <p>Just started.</p>
        </BookItem>
        <BookItem
          title="Introduction to Real Analysis"
          authors={["Bartle et al."]}
          url="https://www.amazon.com/Introduction-Real-Analysis-Robert-Bartle/dp/0471433314"
          image="https://m.media-amazon.com/images/I/51zHpsmqtpL._SY522_.jpg"
        >
          <p>
            I didn&apos;t fully appreciate real analysis when I took a course on
            it as an undergraduate. I&apos;m reviewing the subject and working
            through problems.
          </p>
        </BookItem>
      </BookItemList>
    </PageWrapper>
  );
}
