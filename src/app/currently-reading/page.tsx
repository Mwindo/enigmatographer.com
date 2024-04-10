import PageWrapper from "@/app/components/PageWrapper";
import BookItem from "../components/BookItem";
import BookItemList from "../components/BookItemList";

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
        <p>
          I love to read. I am always reading, generally multiple things
          simultaneously.
        </p>
        <BookItem
          title="The Story of the Stone"
          authors={["Cao Xuequin", "David Hawkes"]}
          url="https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber"
          image="https://m.media-amazon.com/images/I/41ExgvBqVXL._SY445_SX342_.jpg"
        >
          <p>
            I have been reading the four Classic Chinese Novels (in
            translation). After <i>Water Margin</i> and{" "}
            <i>The Romance of the Three Kingdoms</i>,{" "}
            <i>The Story of the Stone</i> is a marked change of pace. The novel
            is slower and more meditative, not terribly unlike{" "}
            <i>À la recherche du temps perdu</i>, both in terms of theme as well
            as narrative style. On the one hand, I miss the military/poltical
            shenanigans of characters like Wu Yong and (especially) Zhuge Liang;
            on the other, I appreciate the psychological depth and literariness
            of this later novel.
          </p>
        </BookItem>
        <BookItem
          title="Essentials of Programming Languages"
          authors={["Friedman et al."]}
          url="https://mitpress.mit.edu/9780262560672/essentials-of-programming-languages/"
          image="https://bisom-bucket.s3.us-east-2.amazonaws.com/enigmatographer/book-cover-essentials-programming-languages.png"
        >
          <p>
            I want to get a better sense of programming language design. So far,
            the most helpful information for me has been about variable binding,
            scopes, and extents (e.g., why closures lead to semi-infinite
            binding extents, and what lexical vs. dynamic scoping entails); and
            about implicit vs. explicit referencing and eager vs. lazy parameter
            passing (e.g., why lazy parameter passing works well in functional
            languages but not in stateful languages).
          </p>
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
        <BookItem
          title="Les Rêveries du promeneur solitaire"
          authors={["Jean-Jacques Rousseau"]}
          url="https://fr.wikipedia.org/wiki/Les_R%C3%AAveries_du_promeneur_solitaire"
          image="https://m.media-amazon.com/images/I/5115QMHFRUL._AC_UF1000,1000_QL80_.jpg"
        >
          In the introduction, Jacques Voisine writes, &quot;Dans ce dernier
          chef-d&apos;œuvre brûle le farouche orgueil du Rousseau de toujours,
          hanté par la crainte qu&apos;on puisse confondre avec le reste des
          hommes&quot; (&quot;In this last masterpiece, as always, burns the
          fierce pride of Rousseau, haunted by the fear that one might confuse
          him with the rest of mankind&quot;). This is spot on. Rousseau is a
          fantastic writer--I think his masterful use of parallelism and
          antithesis has something to do with it--but reading him now, I
          can&apos;t help but notice how overbearing he must have been!
          Everywhere he takes pains to note just how exceptional he is--in
          suffering, in honesty, in humility, in serenity. It reminds me a bit
          of Cicero, but a little whinier.
        </BookItem>
      </BookItemList>
    </PageWrapper>
  );
}
