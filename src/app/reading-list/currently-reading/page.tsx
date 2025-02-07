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
          title="Journey to the West"
          authors={["Wu Cheng'en", "Anthony C. Wu"]}
          url="https://en.wikipedia.org/wiki/Journey_to_the_West"
          image="https://m.media-amazon.com/images/I/51LEzjWaY5L._SY445_SX342_.jpg"
        >
          <p>
            I have been reading the four Classic Chinese Novels (in
            translation). This is perhaps the zaniest of the four: after a
            prelude introducing Sun Wukong and then Tripitaka, it enters into a
            series of episodes involving demons and Buddhist/Daoist magic as the
            protagonists make their way to the Thunderclap Monastery in the
            West. As well as any other, this novel embodies Bakhtin&apos;s
            chronotope of the road. While fun, the umpteenth time Tripitaka (and
            sometimes friends) is captured or else in danger of capture and
            relying on the wiles of Pilgrim Sun and sometimes the power of other
            Celestials to save him which often involve the poetic narration of
            battles cast in the same poetic narration as all those previous
            battles (one is reminded of the similarly indistinguishable
            skirmishes in chivalric romance of &quot;passing fair knights&quot;
            who fight for hours or the ironically mundane &quot;it was even{" "}
            <i>more</i> more beautiful than before&quot; passages in
            Dante&apos;s <i>Paradiso</i>) that often describe magic artifacts
            and histories you have read several times already while ... can
            become tedious, even if there are (apparently--here I trust Wu and
            his endnotes) allegorical meanings underpinning much of the text.
          </p>
        </BookItem>
        <BookItem
          title="La Société du spectacle"
          authors={["Guy Debord"]}
          url="https://en.wikipedia.org/wiki/The_Society_of_the_Spectacle"
          image="https://m.media-amazon.com/images/I/31xW2W477kL._SY445_SX342_.jpg"
        >
          <p>
            Debord&apos;s main aim is to extend Marx&apos;s concept of the
            alienation of labor: we are alienated from reality itself, he
            argues, because capitalism finds its highest (lowest?) expression in
            serving us a self-perpetuating system of fragmented images. We
            interact not with reality, and not with each other, because our
            experiences and social lives are mediated through images. In some
            ways prescient, in some ways questionable (how much have our lives{" "}
            <i>always</i> been shaped by &quot;images&quot;, like parables,
            anecdotes, tall tales?), it is regardless an interesting read. There
            is a certain poetics of absence that characterizes a good deal of
            French--and Marxist--philosophy and critical theory. (I am thinking
            of the empty signifiers or <i>objet petit a</i> in Lacan, the{" "}
            <i>différance</i> and erasure of Derrida, the shiftiness of an
            &quot;author&quot; in Foucault, the death of the author of Barthes,
            the simulacra of Baudrillard, etc.) Debord, I think, fits in this
            sometimes profound, sometimes infuriating tradition.
          </p>
        </BookItem>
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
