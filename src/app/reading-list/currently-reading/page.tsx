import PageWrapper from "@/app/components/PageWrapper";
import BookItem from "../../components/BookItem";
import BookItemList from "../../components/BookItemList";

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
          title="Journey to the West"
          authors={["Wu Cheng'en", "Anthony C. Wu"]}
          url="https://en.wikipedia.org/wiki/Journey_to_the_West"
          image="https://m.media-amazon.com/images/I/51LEzjWaY5L._SY445_SX342_.jpg"
        >
          <p>
            I have been reading the four Classic Chinese Novels (in
            translation). This is perhaps the zaniest of the four: after a
            prelude introducing Sun Wukong and then Tripitaka, it enters into a
            series of episodes involving demons and Buddhist/Daoist magic. [More
            thoughts to come.]
          </p>
        </BookItem>
        <BookItem
          title="La Société du spectacle"
          authors={["Guy Debord"]}
          url="https://en.wikipedia.org/wiki/The_Society_of_the_Spectacle"
          image="https://m.media-amazon.com/images/I/31xW2W477kL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="The Origins of Totalitarianism"
          authors={["Hannah Arendt"]}
          url="https://en.wikipedia.org/wiki/The_Origins_of_Totalitarianism"
          image="https://m.media-amazon.com/images/I/410HMyXJQgL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="Fables: Livres I à IV"
          authors={["Jean de La Fontaine"]}
          url="https://en.wikipedia.org/wiki/La_Fontaine%27s_Fables"
          image="https://m.media-amazon.com/images/I/41bgP1oWKXL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
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
