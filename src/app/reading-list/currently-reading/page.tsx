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
          title="The Story of the Stone"
          authors={["Cao Xuequin", "David Hawkes"]}
          url="https://en.wikipedia.org/wiki/Dream_of_the_Red_Chamber"
          image="https://m.media-amazon.com/images/I/41PFtu2F19L._SY445_SX342_.jpg"
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
        <BookItem
          title="The Evolution of Biological Information"
          authors={["Christopher Adami"]}
          url="https://press.princeton.edu/books/hardcover/9780691241166/the-evolution-of-biological-information"
          image="https://pup-assets.imgix.net/onix/images/9780691241166.jpg?w=410&auto=format"
        >
          <p>
            I found Christopher Adami&apos;s discussion of information theory in{" "}
            <a
              className={styles.link}
              href="https://www.preposterousuniverse.com/podcast/2024/02/19/266-christoph-adami-on-how-information-makes-sense-of-biology/"
              target="_blank"
            >
              this podcast
            </a>{" "}
            highly enlightening as it clarified several ideas I had only thought
            through halfway. For instance: A great many tensions--sense vs.
            nonsense, biologically fit vs. not, &quot;good A.I.&quot; vs.
            &quot;dangerous A.I.&quot;--can be thought of as alignment problems,
            i.e., aligning one system so that it &quot;fits nicely&quot; with
            another. Of course, as Adami explains (in a biological context which
            I recklessly generalize!), these alignment problems are
            &quot;really&quot; about mutual information. This leads to a whole
            series of fascinating questions: If information is contextual
            (information is only information <i>about</i> something), then what
            about that old bugbear of philosophers, &quot;Truth?&quot; If
            meaning/fitness/etc. is a dynamic relationship between object and
            environment, how might the two mutually shape (or diverge from) each
            other? I decided to read the book.
          </p>
        </BookItem>
      </BookItemList>
    </PageWrapper>
  );
}
