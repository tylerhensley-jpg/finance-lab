import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Student Data & Privacy | The Finance Lab",
  description:
    "How The Finance Lab handles student data in The Launchpad: no student emails, no ads, no selling data. A plain-language privacy policy written for teachers, families, and districts.",
  openGraph: {
    title: "Student Data & Privacy | The Finance Lab",
    description:
      "No student emails. No ads. No selling data. How The Launchpad handles student information, in plain language.",
    type: "website",
  },
};

const h2 = {
  fontSize: 24,
  fontWeight: 700,
  color: "var(--navy)",
  margin: "56px 0 16px",
};

const p = {
  fontSize: 17,
  lineHeight: 1.65,
  color: "var(--body-text)",
  marginBottom: 16,
};

const li = {
  fontSize: 17,
  lineHeight: 1.65,
  color: "var(--body-text)",
  marginBottom: 10,
};

const card = {
  background: "#fff",
  border: "1px solid var(--soft-gray)",
  borderRadius: 16,
  padding: "32px clamp(24px, 4vw, 40px)",
};

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />

      <section style={{ background: "var(--warm-white)", padding: "120px clamp(20px,5vw,40px) 80px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <p style={{
            fontSize: 13, fontWeight: 600, letterSpacing: 4,
            textTransform: "uppercase", color: "var(--teal)", marginBottom: 24,
          }}>
            Student Data &amp; Privacy
          </p>

          <h1 className="font-display" style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 700,
            lineHeight: 1.08, letterSpacing: "-0.5px",
            color: "var(--navy)", marginBottom: 24,
          }}>
            Built to collect{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>as little as possible.</em>
          </h1>

          <p style={p}>
            The Launchpad was built by a classroom teacher, and it treats student privacy the
            way a teacher would: collect only what the lesson needs, show it only to the people
            who need it, and sell it to no one. This page explains, in plain language, what our
            platform collects and why.
          </p>

          {/* ── THE SHORT VERSION ── */}
          <div style={{ ...card, margin: "40px 0 8px" }}>
            <h2 className="font-display" style={{ ...h2, margin: "0 0 16px" }}>
              The short version
            </h2>
            <ul style={{ paddingLeft: 22, margin: 0 }}>
              <li style={li}>
                Students do not create accounts and are never asked for an email address, phone
                number, birthdate, or home address.
              </li>
              <li style={li}>
                There are no ads, no ad trackers, and no selling or renting of data. Ever.
              </li>
              <li style={li}>
                A student&apos;s named work is visible to that student and their own teacher.
                We see only anonymized, aggregate results.
              </li>
              <li style={li}>
                Teachers can delete a class at any time, which deletes its student records.
              </li>
            </ul>
          </div>

          {/* ── WHAT STUDENTS PROVIDE ── */}
          <h2 className="font-display" style={h2}>What students provide</h2>
          <p style={p}>
            To join a class, a student enters a class code and class password from their
            teacher, their first name and last initial, and a secret word they pick from two
            fixed lists (a color and an animal, like &quot;Purple Shark&quot;). The secret word
            keeps two students with the same name from opening each other&apos;s work.
          </p>
          <p style={p}>
            That is the whole list. No email, no password of their own, no birthdate, no
            demographic questions.
          </p>

          {/* ── WHAT WE STORE ── */}
          <h2 className="font-display" style={h2}>What the Launchpad stores as students work</h2>
          <ul style={{ paddingLeft: 22, marginBottom: 16 }}>
            <li style={li}>Which modules a student has started and completed.</li>
            <li style={li}>Their answers to activities and quizzes, including short written responses.</li>
            <li style={li}>Confidence ratings before and after a module.</li>
            <li style={li}>
              Time spent, including a signal when a student appears stuck on a step, so their
              teacher can come help.
            </li>
            <li style={li}>
              Optional written reflections at the end of a module, and optional
              &quot;ask for help&quot; notes to the teacher.
            </li>
          </ul>
          <p style={p}>
            Written responses are part of the coursework and are stored with the student&apos;s
            work so their teacher can read them, the same way a paper journal would sit in a
            classroom filing cabinet.
          </p>

          {/* ── WHO CAN SEE IT ── */}
          <h2 className="font-display" style={h2}>Who can see student work</h2>
          <ul style={{ paddingLeft: 22, marginBottom: 16 }}>
            <li style={li}>
              <strong style={{ color: "var(--navy)" }}>The student</strong> sees their own work
              and can export it as a Passport PDF to keep.
            </li>
            <li style={li}>
              <strong style={{ color: "var(--navy)" }}>Their teacher</strong> sees a dashboard
              for their own classes: names (first name and last initial), progress, answers,
              and help requests. Teachers can export their class records and are the ones who
              manage them.
            </li>
            <li style={li}>
              <strong style={{ color: "var(--navy)" }}>Classmates</strong> see a student&apos;s
              response only if the student chooses to share it in an in-class activity, where
              the options are named, anonymous, or private. Private is the default, and the
              teacher controls what gets shown to the room.
            </li>
            <li style={li}>
              <strong style={{ color: "var(--navy)" }}>The Finance Lab</strong> sees anonymized,
              aggregate outcomes with no names attached, which we use to understand whether the
              program is working and to report results like the ones on this site.
            </li>
          </ul>
          <p style={p}>
            We do not share or sell student information to third parties, and we do not use it
            for advertising or to build profiles for any purpose outside the coursework itself.
          </p>

          {/* ── TEACHER ACCOUNTS ── */}
          <h2 className="font-display" style={h2}>Teacher accounts</h2>
          <p style={p}>
            Teachers create a real account with an email address and password, a display name
            (like &quot;Ms. Johnson&quot;), and their school and district. The email is used to
            sign in and reset a password, nothing else. School and district information helps us
            understand where the program is being used and supports schools&apos; own
            record-keeping for California&apos;s personal finance requirement.
          </p>

          {/* ── SERVICES WE RELY ON ── */}
          <h2 className="font-display" style={h2}>The services we rely on</h2>
          <p style={p}>
            The Launchpad runs on two infrastructure providers: Supabase, which hosts our
            database and handles sign-in sessions, and Vercel, which hosts the application.
            Both act only as processors of the data described above.
          </p>
          <p style={p}>
            No third-party analytics, advertising, or tracking scripts run inside the
            Launchpad. This marketing site (thefinancelab.co) uses Vercel Analytics, which
            counts page visits without cookies and without tracking visitors across sites.
            Donations happen on donorbox.org and are handled entirely there.
          </p>

          {/* ── COOKIES ── */}
          <h2 className="font-display" style={h2}>Cookies and browser storage</h2>
          <p style={p}>
            The Launchpad uses a session cookie to keep a student or teacher signed in, and
            browser storage for small preferences like audio settings. There are no advertising
            cookies and no cross-site tracking of any kind.
          </p>

          {/* ── RETENTION ── */}
          <h2 className="font-display" style={h2}>Retention and deletion</h2>
          <p style={p}>
            Teachers control their class records. Archiving a class hides it; deleting a class
            permanently removes its student records, including names, answers, and progress.
          </p>
          <p style={p}>
            After a class is deleted, we retain only anonymized outcome statistics and
            reflections that students chose to share anonymously. Neither carries a name or any
            way to identify a student. Families or schools can also request deletion directly
            by writing to{" "}
            <a href="mailto:team@thefinancelab.co" style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "none" }}>
              team@thefinancelab.co
            </a>
            .
          </p>

          {/* ── AGE ── */}
          <h2 className="font-display" style={h2}>Younger students</h2>
          <p style={p}>
            The Launchpad is designed for high school students, primarily 11th and 12th grade.
            It is not directed to children under 13, and we do not knowingly collect personal
            information from them.
          </p>

          {/* ── SCHOOLS AND THE LAW ── */}
          <h2 className="font-display" style={h2}>For schools and districts</h2>
          <p style={p}>
            The Launchpad&apos;s minimal-data design is meant to make a school&apos;s job easy
            under FERPA and California&apos;s student privacy laws, including SOPIPA. Student
            information is used only to provide the program for the school&apos;s educational
            purposes: not for advertising, not for marketing, and not for building profiles.
          </p>
          <p style={p}>
            If your district requires a signed student data privacy agreement, write to us and
            we will work through it with you.
          </p>

          {/* ── CHANGES / CONTACT ── */}
          <h2 className="font-display" style={h2}>Changes and contact</h2>
          <p style={p}>
            If our practices change, we will update this page and its effective date. Questions
            about anything here? Write to{" "}
            <a href="mailto:team@thefinancelab.co" style={{ color: "var(--teal)", fontWeight: 700, textDecoration: "none" }}>
              team@thefinancelab.co
            </a>{" "}
            and a real person (a teacher) will answer.
          </p>
          <p style={{ ...p, fontSize: 13, color: "var(--body-text)", opacity: 0.7, marginTop: 32 }}>
            Effective July 23, 2026 · The Finance Lab · 501(c)(3) Nonprofit · EIN: 82-5305120
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
