import Link from "next/link";
import styles from "./BookRecsLegal.module.scss";

const BookRecsPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/bookrecs/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/bookrecs/terms" className={styles.navLink}>
            Terms
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>BookRecs</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective date: June 4, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            BookRecs (&ldquo;the App&rdquo;) is an iOS application developed by
            Maalik Ahmad, operating under HBKL Labs. This policy explains what
            data the App collects, why, and what you can do about it.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>
              We collect only what the app needs to generate and save your book
              recommendations.
            </li>
            <li>
              No third-party analytics, no ads, no tracking across other apps or
              websites.
            </li>
            <li>
              You can delete your account and all associated data from inside
              the app at any time.
            </li>
          </ul>

          <h2>What we collect</h2>
          <p>
            BookRecs requires an account so your library and recommendations
            sync across devices. Everything we store is tied to your account and
            used solely to run the app.
          </p>

          <h3>From sign-in</h3>
          <p>
            BookRecs supports three sign-in methods: Sign in with Apple, Google
            Sign-In, and email magic-code. Authentication is handled by Firebase
            Authentication. We never see or store your password.
          </p>
          <ul>
            <li>
              <strong>Your email address.</strong> Used as your account
              identifier. If you choose Apple&rsquo;s &ldquo;Hide My
              Email,&rdquo; we only ever see the relay address.
            </li>
            <li>
              <strong>A user ID.</strong> A Firebase Authentication identifier
              that links your library and recommendations to your account.
            </li>
            <li>
              <strong>A display name</strong>, if your sign-in provider supplies
              one or you set one.
            </li>
          </ul>

          <h3>From using the app</h3>
          <p>
            Once signed in, the following lives in Google&rsquo;s Firestore,
            tied to your user ID:
          </p>
          <ul>
            <li>Books you add to your library</li>
            <li>Recommendations you save, dismiss, or ask for more like</li>
            <li>Reading plans you create or activate, and your progress</li>
            <li>
              Your taste preferences (recommendation styles, reading vibe, time
              to read, and fiction preference) gathered during onboarding
            </li>
            <li>
              Recommendation usage counters (daily and lifetime counts) used to
              apply free-tier limits
            </li>
            <li>Your subscription tier and subscription state</li>
          </ul>

          <h3>What we do NOT collect</h3>
          <ul>
            <li>Location data</li>
            <li>Contacts</li>
            <li>Photos, microphone, or camera access</li>
            <li>Browsing history outside the app</li>
            <li>Analytics, crash reports, or telemetry from third-party SDKs</li>
          </ul>
          <p>
            BookRecs does not send push notifications and does not register your
            device for remote notifications.
          </p>

          <h2>How we use it</h2>
          <ul>
            <li>
              <strong>App functionality only.</strong> Your library,
              recommendations, reading plans, and preferences exist so the app
              works across your devices.
            </li>
            <li>
              <strong>Recommendation generation.</strong> When you request a
              recommendation, your taste preferences and library context are
              sent to our server-side function, which produces a book
              recommendation and writes it back to your account.
            </li>
            <li>
              <strong>Subscription entitlements.</strong> We use your
              subscription state to decide which features to unlock and how many
              recommendations you can request.
            </li>
            <li>
              <strong>No advertising.</strong> We do not share or sell data to
              advertisers, data brokers, or anyone else.
            </li>
          </ul>

          <h2>Who else sees your data (processors)</h2>
          <p>
            BookRecs relies on a few third-party services to operate. They
            process data on our behalf and are bound by their own privacy terms:
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
              . Provides authentication, the Firestore database that stores your
              library and recommendations, and the Cloud Functions that generate
              your recommendations.
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
              <strong>Apple StoreKit</strong>.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Manages in-app subscription purchases and verification. Apple
              processes your payment; we never see your card details.
            </li>
          </ul>
          <p>We do not share your data with anyone else.</p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Open the app, go to
              Settings, and choose Delete Account. Your account, library, saved
              recommendations, reading plans, preferences, and subscription
              state are removed immediately on the server side and within 30
              days everywhere else.
            </li>
            <li>
              <strong>Sign out.</strong> Settings, then Sign Out. Your data
              stays in your account; sign back in any time to restore it.
            </li>
            <li>
              <strong>Export your data.</strong> Email us and we&rsquo;ll send
              you a JSON export within 30 days.
            </li>
          </ul>

          <h2>Data retention</h2>
          <ul>
            <li>Account data is kept while your account is active.</li>
            <li>
              When you delete your account, the server wipes your data
              immediately. Any tombstoned records left over are removed within
              30 days.
            </li>
          </ul>

          <h2>Data security</h2>
          <p>
            All network traffic uses encrypted HTTPS. Data lives in Google Cloud
            infrastructure with row-level access scoped to your user ID.
            Server-side functions that handle your data require authenticated
            requests. No method of electronic storage or transmission is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            BookRecs is rated 4+ on the App Store. We do not knowingly collect
            personal information from children under the age of 13. If you
            believe a child under 13 has provided us with personal information,
            please contact us so we can take appropriate action.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. Material changes
            will be noted in the app or by email before they take effect. Minor
            edits (typos, clarifications) may happen silently.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>
              If you have questions or concerns about this privacy policy or your
              data, please contact us at:
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

export default BookRecsPrivacy;
