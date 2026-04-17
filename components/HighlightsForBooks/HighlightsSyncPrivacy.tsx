import Link from "next/link";
import styles from "./HighlightsPrivacy.module.scss";

/**
 * Privacy policy for the *cloud sync* apps — Highlights for Books Importer
 * (macOS) and Highlights for Books Reader (iOS). These share one Firebase
 * backend, so they share one policy.
 *
 * This is separate from the policy for the local-only macOS Viewer app
 * (`HighlightsPrivacy`) which collects and transmits no data.
 */
const HighlightsSyncPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Link href="/highlights-for-books" className={styles.backLink}>
          &larr; Back to Highlights for Books
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy &mdash; Cloud Sync Apps</h1>
          <p className={styles.effectiveDate}>Effective date: April 17, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            This policy covers the <strong>Highlights for Books Importer</strong>{" "}
            for macOS and the <strong>Highlights for Books Reader</strong> for
            iOS. These apps work together to let you read your Apple Books
            highlights on your phone. They share a single backend and a single
            privacy model, which is why they share this policy.
          </p>

          <p>
            The standalone, local-only macOS app <em>Highlights for Books</em>{" "}
            has its own policy available{" "}
            <Link href="/highlights-for-books/privacy">here</Link>. That app
            collects no data.
          </p>

          <h2>What the apps do</h2>
          <p>
            The <strong>Importer</strong> runs on your Mac, reads your local
            Apple Books highlights, and uploads them to a personal cloud account
            under your identity. The <strong>Reader</strong> runs on your iPhone
            or iPad, signs you into the same account, and shows you the
            highlights the Importer uploaded. Your Mac is the source of truth;
            the cloud is a sync layer; the Reader is a view.
          </p>

          <h2>What we collect</h2>
          <p>To make the sync work, these apps collect and store:</p>
          <ul>
            <li>
              <strong>Your account identifier</strong> &mdash; an email address
              and a unique user ID, obtained from Apple or Google when you sign
              in. We never see or store your password.
            </li>
            <li>
              <strong>Your highlights content</strong> &mdash; the book title,
              author, quote text, notes you wrote, the highlight color, and
              chapter name for each highlight, along with timestamps. These are
              uploaded from the Importer to your private cloud bucket and
              fetched by the Reader.
            </li>
          </ul>
          <p>
            We do not collect analytics, crash reports, location, contacts,
            device identifiers for tracking, or any other personal data. We do
            not use the data for advertising, profiling, or tracking across
            other sites or apps.
          </p>

          <h2>Where your data lives</h2>
          <p>
            Your highlights are stored in{" "}
            <strong>Google Cloud Firestore</strong> under the Firebase project{" "}
            <code>highlights-for-books</code>, in a document bucket keyed to
            your user ID. Security rules are configured so that only your
            authenticated session can read or write your bucket &mdash; no
            other user, including us, has access via the app.
          </p>

          <h2>Sign in with Apple and Sign in with Google</h2>
          <p>
            Authentication is handled by Apple and Google through Firebase
            Authentication. When you sign in, Apple or Google shares your email
            address (or a relay email, if you choose Apple&rsquo;s Hide My Email)
            and a stable user identifier with our Firebase project. Your password
            is never disclosed to us.
          </p>

          <h2>Deleting your data</h2>
          <p>
            The Reader app includes an <strong>in-app &ldquo;Delete Account&rdquo;</strong>{" "}
            option (Settings &rarr; Danger Zone) that permanently removes:
          </p>
          <ul>
            <li>Every highlight document and book record under your user ID in Firestore</li>
            <li>Your Firebase Authentication user record</li>
          </ul>
          <p>
            Deletion is immediate and irreversible. The Reader&rsquo;s local
            cache is also wiped.
          </p>
          <p>
            Your original highlights inside Apple Books on your Mac are{" "}
            <em>not</em> touched by either app &mdash; those live under Apple&rsquo;s
            control and we never modify them.
          </p>

          <h2>Third-party services</h2>
          <p>These apps depend on a small, well-known set of services:</p>
          <ul>
            <li>
              <strong>Firebase Authentication</strong> (Google) &mdash; for sign-in
            </li>
            <li>
              <strong>Firebase Firestore</strong> (Google) &mdash; for data
              storage and sync
            </li>
            <li>
              <strong>Sign in with Apple</strong> &mdash; when you choose the
              Apple button
            </li>
          </ul>
          <p>
            Each of these has its own privacy practices. Firebase&rsquo;s data
            handling is documented at{" "}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noreferrer"
            >
              firebase.google.com/support/privacy
            </a>
            . Apple&rsquo;s Sign-In practices are documented at{" "}
            <a
              href="https://support.apple.com/en-us/HT210318"
              target="_blank"
              rel="noreferrer"
            >
              support.apple.com
            </a>
            .
          </p>

          <h2>Network traffic</h2>
          <p>
            All data transferred between the apps and Firebase is encrypted over
            HTTPS. The apps do not open any other network connections, do not
            load remote HTML, and do not phone home for analytics or updates.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            These apps are not directed at children under 13 and we do not
            knowingly collect data from children. If you believe your child has
            an account, contact us and we will delete it.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If this policy is ever updated, the new version will be posted on
            this page with a revised effective date. Material changes that
            affect existing users&rsquo; data will be surfaced in the app.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact</h2>
            <p>
              Questions about this policy, data deletion requests, or security
              reports:
            </p>
            <p>
              <a
                href="mailto:maalikahmadtech@gmail.com"
                className={styles.contactEmail}
              >
                maalikahmadtech@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HighlightsSyncPrivacy;
