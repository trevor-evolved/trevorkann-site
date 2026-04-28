export function Contact() {
  return (
    <section className="section section-dark" id="contact" style={{ paddingBottom: 40 }}>
      <div className="container">
        <div className="contact">
          <div>
            <div className="section-num" style={{ color: "var(--teal-light)" }}>10 / Contact</div>
            <h3>Let&apos;s <em>talk</em>.</h3>
            <p style={{ color: "rgba(255,255,255,.72)", fontSize: 18, maxWidth: 440, marginTop: 20, lineHeight: 1.55 }}>
              Email is best — I&apos;m friendly and reasonably prompt. Open to
              speaking, workshops, guest lectures, collaborations on writing at
              the language ↔ energy intersection, and the occasional crossword
              constructor swap.
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-row">
              <span className="k">Email</span>
              <span className="v"><a href="mailto:trevor.kann@evolved.energy">trevor.kann@evolved.energy</a></span>
            </div>
            <div className="contact-row">
              <span className="k">Office</span>
              <span className="v">1431 Pacific Hwy, Ste 2 · San Diego, CA 92101</span>
            </div>
            <div className="contact-row">
              <span className="k">Firm</span>
              <span className="v"><a href="https://www.evolved.energy" target="_blank" rel="noreferrer">evolved.energy</a></span>
            </div>
            <div className="contact-row">
              <span className="k">Writing</span>
              <span className="v"><a href="https://evolvedtk.substack.com/" target="_blank" rel="noreferrer">Language and Power</a> · Substack</span>
            </div>
            <div className="contact-row">
              <span className="k">Puzzles</span>
              <span className="v"><a href="#puzzles">Mini crosswords</a></span>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>© 2026 Trevor Kann</span>
          <span>Sentence case. Teal ink. The grid as a metaphor.</span>
        </div>
      </div>
    </section>
  );
}
