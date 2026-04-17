import Image from "next/image";

export default function Teaching() {
  return (
    <div className="max-w-2xl">
      <h1
        className="text-2xl font-semibold text-slate-900 mb-8"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        Teaching
      </h1>

      <div className="prose">

        <h2>Philosophy</h2>
        <p>
          Teaching is a sincere passion. My goal in every classroom is to create a responsive
          learning space where students can develop critical thinking skills and walk away with
          meaningful, transferable abilities — not just course credit.
        </p>
        <p>
          I prioritize active learning, provocative questions, and building trust through
          personal engagement and humor. I adapt to individual learning styles and work to make
          general education courses feel like genuine intellectual experiences rather than
          requirements to be cleared. Failure for me is when a student&apos;s voice is lost.
        </p>
        <p>
          I draw on evidence-based methods and years of teaching across widely different
          contexts — high school, community college, research university, private tutoring, and
          international ESL instruction.
        </p>

        <h2>From the Classroom</h2>
        <div className="not-prose grid grid-cols-3 gap-3 mb-8">
          <Image src="/photo-class.jpg" alt="UCLA classroom" width={200} height={150} className="rounded-lg object-cover w-full h-36" />
          <Image src="/photo-letter.jpg" alt="Student letter" width={200} height={150} className="rounded-lg object-cover w-full h-36" />
          <Image src="/photo-drawing.jpg" alt="Student drawing" width={200} height={150} className="rounded-lg object-cover w-full h-36" />
        </div>

        <h2>Featured Project</h2>
        <div className="not-prose bg-white border border-slate-200 rounded-lg p-6 mb-6">
          <div className="text-xs uppercase tracking-wide text-slate-400 mb-2">University of São Paulo · AUCANI · 2023–2024</div>
          <h3 className="text-base font-semibold text-slate-900 mb-2">English as a Medium of Instruction Program</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Designed and led a comprehensive English as a Medium of Instruction (EMI) program
            through AUCANI (USP&apos;s international cooperation agency) to support the university&apos;s
            internationalization effort. Created and instructed an online EMI course — offered
            synchronously and asynchronously — for over 100 faculty members transitioning their
            courses from Portuguese to English. Also led in-person EMI conferences and workshops
            for over 50 professors across the university, in partnership with the US Department
            of State English Language Fellows program.
          </p>
        </div>

        <h2>Courses</h2>

        <h3>University of São Paulo</h3>

        <h4>Linguistics</h4>
        <ul>
          <li>Topics of Semantics</li>
          <li>Topics of Research in English Linguistics</li>
          <li>Phonetics &amp; Phonology</li>
        </ul>

        <h4>Applied Linguistics</h4>
        <ul>
          <li>Topics in Applied Linguistics</li>
          <li>Topics in Discourse Analysis</li>
          <li>English as a Medium of Instruction (online, synchronous &amp; asynchronous)</li>
        </ul>

        <h4>English</h4>
        <ul>
          <li>Academic Writing</li>
          <li>Written Expression in English</li>
          <li>Oral Expression in English</li>
          <li>Pronunciation of English</li>
        </ul>

        <h3>University of California, Los Angeles</h3>

        <h4>Applied Linguistics</h4>
        <ul>
          <li>Language in Action</li>
          <li>Language and Social Interaction</li>
          <li>Language &amp; Gender</li>
          <li>Language Learning and Teaching</li>
          <li>The Nature of Language</li>
          <li>Translation and Interpreting</li>
          <li>Talk and the Body</li>
        </ul>

        <h4>Linguistics</h4>
        <ul>
          <li>The Study of Language</li>
          <li>Linguistic Humor: Amusing and Abusing with Language</li>
          <li>Introduction to Linguistic Analysis</li>
          <li>Language and Society: Introduction to Sociolinguistics</li>
        </ul>

        <h4>English as a Second Language</h4>
        <ul>
          <li>Academic Writing</li>
          <li>Academic Interaction</li>
          <li>Public Speaking</li>
          <li>Pronunciation</li>
          <li>English Through Language, Culture and Society</li>
          <li>Speaking/Listening for Business English (Anderson School of Business)</li>
        </ul>

        <h3>Santa Monica College</h3>

        <h4>English as a Second Language</h4>
        <ul>
          <li>Basic English II</li>
          <li>English Fundamentals II</li>
        </ul>

      </div>
    </div>
  );
}
