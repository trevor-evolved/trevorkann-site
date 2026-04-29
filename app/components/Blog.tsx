"use client";

const SUBSTACK_URL = "https://evolvedtk.substack.com/";

const posts = [
  {
    meta: "Essay · 10 min",
    title: "Terms of Surrender",
    p: "In March 2025, the NYT quietly removed roughly a hundred climate and energy terms from official use. Federal agencies followed. A close look at what the vocabulary of a crisis looks like when institutions stop saying it.",
  },
  {
    meta: "Essay · 9 min",
    title: "Don’t Think About ‘Clean Energy’",
    p: "Language doesn't just describe a crisis. It makes the crisis available for thought, conversation, and collective demand. What framing theory and critical discourse analysis reveal about the effects of the vocabulary that's gone.",
  },
  {
    meta: "Essay · 8 min",
    title: "The Words They Left You",
    p: "The professional translates \"non-traditional technologies\" back to \"clean energy\" in their head. The member of the public just loses the phrase. On the asymmetry between experts and everyone else, and who pays for it.",
  },
];

export function Blog() {
  return (
    <section className="section section-cream" id="blog">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="section-num">Blog</div>
            <h2 className="section-title">Language and <em>Power</em>.</h2>
          </div>
          <div className="section-kicker">
            An essay project on how we talk about energy — and how the
            way we talk determines which futures we let ourselves imagine.
            Published on Substack, cross-linked here.
          </div>
        </div>

        <div className="blog-head">
          <div>
            <div className="blog-mark">COMING SOON · SUBSTACK</div>
            <div className="blog-title">
              Language<br />and <em>Power</em>
            </div>
            <div className="blog-tag">
              A newsletter at the intersection of applied linguistics and energy
              planning. One essay a month, plus notes from the field — the grid
              yard, the classroom, and everywhere between.
            </div>
          </div>
          <div className="blog-signup">
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}>
              Subscribe to the first issue
            </div>
            <div style={{ color: "rgba(255,255,255,.6)", fontSize: 13, marginTop: 6, marginBottom: 12 }}>
              No spam, one short email per month.
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const input = (e.currentTarget as HTMLFormElement).querySelector("input[type=email]") as HTMLInputElement;
              window.open(`https://evolvedtk.substack.com/subscribe?email=${encodeURIComponent(input.value)}`, "_blank");
            }}>
              <input type="email" placeholder="you@somewhere.edu" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="posts">
          {posts.map((p, i) => (
            <article key={i} className="post">
              <div className="meta">{p.meta}</div>
              <h4>{p.title}</h4>
              <p>{p.p}</p>
              <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer" className="read">Read the draft →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
