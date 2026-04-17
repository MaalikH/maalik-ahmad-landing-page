import Link from "next/link";
import styles from "./HighlightsPrivacy.module.scss";

/**
 * Support / FAQ page for the Highlights for Books app family:
 * - Highlights for Books (macOS, local-only viewer)
 * - Highlights for Books Importer (macOS, uploads to cloud)
 * - Highlights for Books Reader (iOS, reads from cloud)
 */
const HighlightsSupport = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Link href="/highlights-for-books" className={styles.backLink}>
          &larr; Back to Highlights for Books
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>Support</h1>
          <p className={styles.effectiveDate}>Updated: April 17, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            The Highlights for Books family is a small set of apps that make
            your Apple Books highlights easier to revisit. This page covers
            common questions and how to reach us.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact</h2>
            <p>Email is the fastest way to get a response:</p>
            <p>
              <a
                href="mailto:maalikahmadtech@gmail.com"
                className={styles.contactEmail}
              >
                maalikahmadtech@gmail.com
              </a>
            </p>
            <p>
              Please include your device (Mac model / iPhone model), macOS or
              iOS version, and the app you&rsquo;re using.
            </p>
          </div>

          <h2>The apps at a glance</h2>
          <ul>
            <li>
              <strong>Highlights for Books</strong> &mdash; a local-only macOS
              viewer. Reads your Apple Books highlights on the same Mac. No
              account, no cloud. See its{" "}
              <Link href="/highlights-for-books/privacy">privacy policy</Link>.
            </li>
            <li>
              <strong>Highlights for Books Importer</strong> &mdash; a macOS
              app that reads your highlights and uploads them to a personal
              cloud account so you can read them on your phone.
            </li>
            <li>
              <strong>Highlights for Books Reader</strong> &mdash; an iOS app
              that signs into that same account and shows you the highlights
              uploaded from your Mac.
            </li>
          </ul>
          <p>
            The Importer and Reader share a{" "}
            <Link href="/highlights-for-books/sync/privacy">
              separate privacy policy
            </Link>{" "}
            since they use cloud sync.
          </p>

          <h2>Frequently asked questions</h2>

          <h3>How do I set up the Importer and Reader together?</h3>
          <ol>
            <li>
              Install the Importer on your Mac from the Mac App Store.
            </li>
            <li>
              Open it, sign in with Apple or Google, and grant access to your
              Apple Books folder when prompted.
            </li>
            <li>Click &ldquo;Upload to Cloud.&rdquo; Your highlights upload.</li>
            <li>
              Install the Reader on your iPhone or iPad from the App Store.
            </li>
            <li>
              Open it and sign in <strong>with the same account</strong> you used
              on the Mac. Your highlights appear automatically.
            </li>
          </ol>

          <h3>
            Why does the Importer ask me to pick the Apple Books folder?
          </h3>
          <p>
            The Importer runs inside macOS App Sandbox, which means it can only
            read files you explicitly hand it. Clicking{" "}
            <em>Show Me the Folder</em> opens Finder at the right location and
            you drag that folder onto the app once. From then on, the app
            remembers your permission and reads the highlights on its own.
          </p>

          <h3>I don&rsquo;t see my highlights on my phone.</h3>
          <p>Check, in order:</p>
          <ul>
            <li>
              That you signed in with <strong>the same account</strong> on both
              devices (same Apple ID or same Google account).
            </li>
            <li>
              That the Importer reported a successful upload. Open it and run
              the sync again if needed.
            </li>
            <li>That your phone has an internet connection.</li>
            <li>
              Pull down to refresh on the Reader&rsquo;s Library screen.
            </li>
          </ul>

          <h3>How do I delete my account?</h3>
          <p>
            In the Reader, open Settings, scroll to the <em>Danger Zone</em>{" "}
            section, and tap <strong>Delete Account</strong>. This permanently
            removes every highlight stored in the cloud under your account, and
            deletes the Firebase account itself. The highlights inside Apple
            Books on your Mac are <em>not</em> affected &mdash; we never touch
            those.
          </p>

          <h3>
            Does any of this change what&rsquo;s in Apple Books on my Mac?
          </h3>
          <p>
            No. All three apps treat Apple Books as the source of truth. They
            only read from it. Highlights you add, edit, or delete in Apple
            Books show up the next time you run the Importer.
          </p>

          <h3>I found a bug or have a feature request.</h3>
          <p>
            Please email the address above. A screenshot and the app version
            (Settings &rarr; About in the Reader, or{" "}
            <em>Highlights Importer</em> &rarr; <em>About Highlights Importer</em>{" "}
            on Mac) helps a lot.
          </p>

          <h3>How much does this cost?</h3>
          <p>
            All three apps are free. The cloud service is funded personally;
            there are no subscriptions, in-app purchases, or ads.
          </p>

          <h3>What data do you collect?</h3>
          <p>
            For the local-only Viewer: none. For the Importer and Reader: your
            sign-in identifier (email + user ID from Apple or Google) and the
            highlight content you upload. No analytics, no tracking, no ads.
            Full details in the{" "}
            <Link href="/highlights-for-books/sync/privacy">
              cloud sync privacy policy
            </Link>
            .
          </p>
        </div>
      </article>
    </div>
  );
};

export default HighlightsSupport;
