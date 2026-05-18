import Link from "next/link";
import styles from "./OpenReaderLegal.module.scss";

const OpenReaderSupport = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/openreader/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/openreader/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/openreader/support" className={styles.navLinkActive}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>OpenReader</p>
          <h1 className={styles.title}>Support</h1>
        </header>

        <div className={styles.content}>
          <p>
            OpenReader is an iOS reader for EPUB books. Import a book, read
            it, highlight what matters, and let scheduled notifications
            resurface those highlights on your terms. With an OpenReader
            Cloud subscription you sync your library across devices and can
            generate AI audiobooks for books you own.
          </p>
          <p>
            Check the FAQ below or reach out to us directly.
          </p>

          <div
            className={`${styles.contactSection} ${styles.contactSectionFlush}`}
          >
            <h2>Contact us</h2>
            <p>For any questions, issues, or feedback, please email:</p>
            <p>
              <a
                href="mailto:support@maalikahmad.tech"
                className={styles.contactEmail}
              >
                support@maalikahmad.tech
              </a>
            </p>
            <p>We typically respond within 1&ndash;2 business days.</p>
          </div>

          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <h3>Do I need an account to use OpenReader?</h3>
            <p>
              No. You can use OpenReader as a guest. Your library, reading
              progress, and highlights stay on your device. Sign in to sync
              across devices and access OpenReader Cloud features.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I add a book?</h3>
            <p>
              Open the Library tab and tap Add. You can import an EPUB from
              the Files app, or pick from the bundled free classics. Once
              imported, the book is yours to read offline.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do highlights work?</h3>
            <p>
              While reading, tap and hold to select text, then tap Highlight.
              You can pick a color and add a note. Highlights sync to the
              cloud if you have OpenReader Cloud, and the home widget can
              resurface a random highlight on schedule.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I set up highlight notifications?</h3>
            <p>
              Go to Settings, then Highlight Notifications, and tap Create a
              Reminder. Pick the weekdays and times you want. OpenReader will
              surface a random highlight on schedule. Tap a notification to
              jump back to that quote in the book.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What is OpenReader Cloud?</h3>
            <p>
              OpenReader Cloud is an auto-renewing subscription that syncs
              your library, reading progress, and highlights across every
              device signed in to your account. It also unlocks AI audiobook
              generation. Free accounts can sync one book; OpenReader Cloud
              has no book limit.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do AI audiobooks work?</h3>
            <p>
              Pick a book you own and choose Generate Audiobook. We send the
              book text to Fish Audio for text-to-speech, then stream the
              audio to your library. Audiobooks are sold per book; pricing
              depends on book length. Generation usually takes several
              minutes.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I manage my subscription?</h3>
            <p>
              Open the iOS Settings app, tap your name at the top, then
              Subscriptions, then OpenReader Cloud. From there you can change
              the plan or cancel. Cancellation takes effect at the end of
              your current billing period.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I restore my purchases?</h3>
            <p>
              Open OpenReader, go to Settings, and tap Restore Purchases.
              Make sure you&rsquo;re signed in with the same Apple ID you
              used for the original purchase.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I delete my account and data?</h3>
            <p>
              Open the app, go to Settings, scroll to the bottom, and tap
              Delete Account. Your account, library metadata, EPUB files,
              highlights, schedules, audiobooks, and subscription state are
              removed from the server immediately. Local data on the device
              is wiped at the same time.
            </p>
            <p>
              If you have trouble, email{" "}
              <a href="mailto:support@maalikahmad.tech">
                support@maalikahmad.tech
              </a>
              .
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>I&rsquo;m not receiving notifications. What should I do?</h3>
            <p>
              First, confirm notifications are allowed in iOS Settings,
              Notifications, OpenReader. Check that Do Not Disturb or Focus
              mode is not suppressing them. Inside the app, go to Settings,
              Highlight Notifications, and make sure the schedule is active.
              Apple caps pending notifications at 64 per app; if your active
              schedules exceed that you&rsquo;ll see a warning.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OpenReaderSupport;
