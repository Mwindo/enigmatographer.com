import PageWrapper from "@/app/components/PageWrapper";
import BookItem from "../../components/BookItem";
import BookItemList from "../../components/BookItemList";
import styles from "../../components/PageWrapper.module.css";

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
          title="The Hearing Trumpet"
          authors={["Leonora Carrington"]}
          url="https://en.wikipedia.org/wiki/The_Hearing_Trumpet"
          image="https://m.media-amazon.com/images/I/41S1cIe1fmL._SY445_SX342_.jpg"
        >
          <p>What a trip! [More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="Algorithms to Live By"
          authors={["Brian Christian, Tom Griffiths"]}
          url="https://algorithmstoliveby.com/"
          image="https://m.media-amazon.com/images/I/510GRAYQNSL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="Strange Tales from a Chinese Studio"
          authors={["Pu Songling", "John Minford"]}
          url="https://en.wikipedia.org/wiki/Strange_Tales_from_a_Chinese_Studio"
          image="https://m.media-amazon.com/images/I/41mNvzk+SiL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="Short Stories"
          authors={["Lu Xun", "Julia Lovell"]}
          url="https://en.wikipedia.org/wiki/Lu_Xun"
          image="https://m.media-amazon.com/images/I/61cn+n5z1wL._SL1200_.jpg"
        >
          <p>
            Somewhat like Chekhov, but with a stronger moral flavor. [More
            thoughts to come.]
          </p>
        </BookItem>
        <BookItem
          title="Landscape Painted with Tea"
          authors={["Milorad Pavić", "Christina Pribićević-Zorić"]}
          url="https://en.wikipedia.org/wiki/Milorad_Pavi%C4%87"
          image="https://m.media-amazon.com/images/I/41eDQkSFR3L._SY445_SX342_.jpg"
        >
          <p>
            Like Nabokov, Calvino, or Woolf, Milorad Pavić is simply a
            delightful writer. He could write an instruction manual, and I would
            read it. Not everything he says is golden--indeed, there is a
            certain Mannerist tendency to some of his sentences that verges on
            nonsense--but his writing is always sensuous, flirtatious, as if
            there is a mystery hiding behind each word. Many of his sentences
            are a delight to read. He is a master of the complement: a focus on
            the shadows, on the binaries, on the negative spaces, etc. Examples:
            "He divided the voices in his mouth into masculine and feminine, on
            Marian holidays he uttered only the vowels and on other holidays
            only the consonants" (26); "Or they [the monks] would utter only
            nouns, because these come from God, and would avoid verbs, which
            belong to Satan" (73). Do I understand the whole novel? No, although
            I am not sure how much of it is meant to be understood. A Landscape
            Painted with Tea is like a great dream: pregnant with
            undifferentiated meaning (a sort of{" "}
            <a
              className={styles.link}
              href="https://en.wikipedia.org/wiki/Writing_Degree_Zero"
              target="_blank"
            >
              "meaning degree zero"
            </a>
            ), full of brilliant images and thoughtful scenarios, a paeon to the
            the way that rhetoric grapples with and structures reality (through
            paradox, antithesis, etc.). Pavić offers two different ways to read
            the novel: in "page-order," or in "crossword" order. Here are two
            more: One can dive in and certainly find something worth treasuring,
            but one can just as well let the novel wash over them, smiling.
          </p>
        </BookItem>
        <BookItem
          title="The Real Lif of Sebastian Knight"
          authors={["Vladimir Nabokov"]}
          url="https://en.wikipedia.org/wiki/The_Real_Life_of_Sebastian_Knight"
          image="https://m.media-amazon.com/images/I/61ZSsdnPz0L._SL1006_.jpg"
        >
          <p>
            Like everything he writes, the prose is thoughtful, playful, and
            beautiful. The tale exists in, or is composed of, a lyrical
            metafictional mist: this piece perhaps interacting with that, this
            comment a recollection of a quote from two chapters before, etc. It
            doesn't contain the revelation that is sometimes enjoyable in a
            mystery--unlike (say) the Vane Sisters but like much of his
            paranoia-infused work, it actively thwarts such revelation--but the
            final "twist" (he is in the wrong hospital room, just as Sebastian
            visited the wrong room when trying to trace out his mother's final
            days) is clever, in its way, if somewhat predictable. I think the
            most compelling interpretation is that this is about the process of
            writing, connecting, narrativizing our lives--a vivisection of the
            author at play. Not a masterpiece, but written by a master.
          </p>
        </BookItem>
        <BookItem
          title="A Perfect Vacuum"
          authors={["Stanisław Lem"]}
          url="https://en.wikipedia.org/wiki/A_Perfect_Vacuum"
          image="https://m.media-amazon.com/images/I/41kLRlFWC6L._SY445_SX342_.jpg"
        >
          <p>Among my favorite books. [More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="The Grasshopper: Games, Life, and Utopia"
          authors={["Bernard Herbert Suits"]}
          url="https://uwaterloo.ca/philosophy/bernard-suits"
          image="https://m.media-amazon.com/images/I/41oxZwD9ZAL._SY445_SX342_.jpg"
        >
          <p>
            A good, humorous (but serious philosophical) book that takes up
            Wittgenstein's challenge to define a game. The central thesis, which
            is playfully expounded and defended in dialogic fashion (sometimes
            even with nested and metaleptic dialogues), is that a game 1)
            involves a prelusory goal (a way of framing the goal of the game
            outside of the game itself, even if--like chess--using the
            terminology of the game is a useful expedient), 2) sought only via
            lusory means that 3) are constrained by constitutive rules that
            permit only less efficient ways of obtaining the goal, all
            undertaken via 4) a lusory attitude--accepting the rules because the
            enable the activity. A convincing thesis, even if later meditations
            on Utopia are questionable.
          </p>
        </BookItem>
        <BookItem
          title="Autobiography of a Corpse"
          authors={["Sigizmund Krzhizhanovsky"]}
          url="https://en.wikipedia.org/wiki/Sigizmund_Krzhizhanovsky"
          image="https://m.media-amazon.com/images/I/51Af7d4Wg0L._SY445_SX342_.jpg"
        >
          <p>
            Like a more Kafka-esque, slightly longer-form Borges. In general, he
            seems to have some great ideas and brilliant phrasing, but mixed
            overall execution. E.g., "The Collector of Cracks" is held back by
            its more metatextual, "framing" element; the interdiegetic parable
            itself, however, is ingenious. I enjoyed the stories a great deal,
            but in general I felt that something was missing. [More thoughts to
            come.]
          </p>
        </BookItem>
        <BookItem
          title="Memories of the Future"
          authors={["Sigizmund Krzhizhanovsky"]}
          url="https://en.wikipedia.org/wiki/Sigizmund_Krzhizhanovsky"
          image="https://m.media-amazon.com/images/I/41GP9XmNBWL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
        </BookItem>
        <BookItem
          title="The Colour of Magic"
          authors={["Terry Pratchett"]}
          url="https://en.wikipedia.org/wiki/The_Colour_of_Magic"
          image="https://m.media-amazon.com/images/I/51jq1UN0VJL._SY445_SX342_.jpg"
        >
          <p>[More thoughts to come.]</p>
        </BookItem>
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
            as narrative style. On the one hand, I missed the military/poltical
            shenanigans of characters like Wu Yong and (especially) Zhuge Liang;
            on the other, I appreciated the psychological depth and literariness
            of this later novel. [More thoughts to come.]
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
          of Cicero, but whinier. [More thoughts to come.]
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
            other? I decided to read the book. [More thoughts to come.]
          </p>
        </BookItem>
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
            self-reflexive sentences, like this one; the idea of parquet
            deformations; and the game theoretic experiments (e.g., Axelrod). It
            also suggested to me Codex Seraphinianus, a curious piece of
            literature (?).
          </p>
        </BookItem>
      </BookItemList>
    </PageWrapper>
  );
}
