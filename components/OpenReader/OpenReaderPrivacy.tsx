import Link from "next/link";
import styles from "./OpenReaderLegal.module.scss";

const OpenReaderPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/openreader/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/openreader/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/openreader/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>OpenReader</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective date: May 17, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            OpenReader (&ldquo;the App&rdquo;) is an iOS application developed
            by Maalik Ahmad, operating under HBKL Labs. This policy explains
            what data the App collects, why, and what you can do about it.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>
              You can use OpenReader as a guest. In guest mode, nothing leaves
              your device.
            </li>
            <li>
              We collect as little as possible. No third-party analytics, no
              ads, no tracking across other apps or websites.
            </li>
            <li>
              You can delete your account and all associated data from inside
              the app at any time.
            </li>
          </ul>

          <h2>What we collect</h2>

          <h3>If you use OpenReader as a guest (no sign-in)</h3>
          <p>
            Nothing leaves your device. Your library, reading progress,
            highlights, notes, and notification schedules are stored locally
            using Apple&rsquo;s SwiftData. We cannot see them.
          </p>

          <h3>If you sign in</h3>
          <p>
            OpenReader supports three sign-in methods: Sign in with Apple,
            Google Sign-In, and email magic-code (sent through Resend).
            Authentication is handled by Firebase Authentication. We never
            see or store your password.
          </p>
          <p>From the sign-in flow we receive:</p>
          <ul>
            <li>
              <strong>Your email address.</strong> Used as your account
              identifier. If you choose Apple&rsquo;s &ldquo;Hide My
              Email,&rdquo; we only ever see the relay address.
            </li>
            <li>
              <strong>A user ID.</strong> A Firebase Authentication identifier
              that links your library to your account.
            </li>
          </ul>
          <p>
            Once signed in, the following lives in Google&rsquo;s Firestore and
            Firebase Storage, tied to your user ID:
          </p>
          <ul>
            <li>Books you&rsquo;ve added (metadata and reading position)</li>
            <li>EPUB files you&rsquo;ve imported</li>
            <li>Book cover images</li>
            <li>Highlights and notes</li>
            <li>Reading sessions and pace data</li>
            <li>Highlight notification schedules</li>
            <li>Generated audiobooks (if you purchased AI audiobook generation)</li>
            <li>Subscription state</li>
          </ul>

          <h3>If you enable push notifications</h3>
          <p>
            We store the Firebase Cloud Messaging token Apple issues for your
            device, so we can deliver highlight notifications at the times
            you&rsquo;ve scheduled. The token is tied to your user ID. If you
            disable notifications in iOS Settings, we stop using it.
          </p>

          <h3>What we do NOT collect</h3>
          <ul>
            <li>Location data</li>
            <li>Contacts</li>
            <li>Photos, microphone, or camera access</li>
            <li>Browsing history outside the app</li>
            <li>Analytics, crash reports, or telemetry from third-party SDKs</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>
              <strong>App functionality only.</strong> Your library, reading
              progress, highlights, and schedules exist so the app works
              across your devices.
            </li>
            <li>
              <strong>AI audiobook generation</strong> (optional, paid). If you
              purchase audiobook generation for a book, the book&rsquo;s text
              is sent to Fish Audio for text-to-speech, and the resulting
              audio is stored in your library.
            </li>
            <li>
              <strong>Push notifications.</strong> Only if you opt in, and only
              to surface highlights on the schedule you set.
            </li>
            <li>
              <strong>No advertising.</strong> We do not share or sell data to
              advertisers, data brokers, or anyone else.
            </li>
          </ul>

          <h2>Who else sees your data (processors)</h2>
          <p>
            OpenReader relies on a few third-party services to operate. They
            process data on our behalf and are bound by their own privacy
            terms:
          </p>
          <ul>
            <li>
              <strong>Firebase</strong> (Google).{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Provides authentication, Firestore (where your library lives),
              Firebase Storage (where your EPUB files live), and Cloud
              Messaging (push notification delivery).
            </li>
            <li>
              <strong>Apple Push Notification service</strong>.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Delivers push notifications. Apple sees the device token and
              notification payload.
            </li>
            <li>
              <strong>Resend</strong>.{" "}
              <a
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Sends the email sign-in code. Resend sees your email address
              and the one-time code, nothing more.
            </li>
            <li>
              <strong>Google Sign-In</strong>.{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Only if you chose Google to sign in. Google sees the sign-in
              event, not your in-app activity.
            </li>
            <li>
              <strong>Fish Audio</strong>.{" "}
              <a
                href="https://fish.audio/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Generates AI audiobooks from book text. Only invoked when you
              explicitly purchase audiobook generation for a specific book.
              Fish Audio receives the book text and voice selection; it does
              not receive your account information.
            </li>
            <li>
              <strong>Apple StoreKit and RevenueCat</strong> (
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                RevenueCat privacy
              </a>
              ). Manage in-app subscription purchase verification.
            </li>
          </ul>
          <p>We do not share your data with anyone else.</p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Open the app, go to
              Settings, and tap Delete Account. Your account, library
              metadata, EPUB files, highlights, schedules, audiobooks, and
              subscription state are removed immediately on the server side
              and within 30 days everywhere else.
            </li>
            <li>
              <strong>Sign out.</strong> Settings, Sign Out. Your local
              library on this device is wiped; your cloud library stays in
              your account.
            </li>
            <li>
              <strong>Export your highlights.</strong> Settings offers a
              JSON export of all your highlights. For a full data export,
              email us and we&rsquo;ll send you everything within 30 days.
            </li>
            <li>
              <strong>Opt out of notifications.</strong> Toggle off in
              Settings, or disable in iOS Settings, Notifications,
              OpenReader.
            </li>
          </ul>

          <h2>Data retention</h2>
          <ul>
            <li>Account data is kept while your account is active.</li>
            <li>
              When you delete your account, the server wipes your data
              immediately. A daily cleanup job removes any tombstoned files
              left over within 30 days.
            </li>
            <li>
              Stale push tokens are cleaned up automatically.
            </li>
          </ul>

          <h2>Data security</h2>
          <p>
            All network traffic uses encrypted HTTPS. Data lives in Google
            Cloud infrastructure with row-level access scoped to your user ID.
            Server-side functions that handle your data require authenticated
            requests. No method of electronic storage or transmission is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            OpenReader is rated 4+ on the App Store. We do not knowingly
            collect personal information from children under 13. If you
            believe a child under 13 has provided us with personal
            information, please contact us so we can take appropriate action.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Material
            changes will be noted in the app or by email before they take
            effect. Minor edits (typos, clarifications) may happen silently.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>
              If you have questions or concerns about this privacy policy or
              your data, please contact us at:
            </p>
            <p>
              <a
                href="mailto:support@maalikahmad.tech"
                className={styles.contactEmail}
              >
                support@maalikahmad.tech
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default OpenReaderPrivacy;
