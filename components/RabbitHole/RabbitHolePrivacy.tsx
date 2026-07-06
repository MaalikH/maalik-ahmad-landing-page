import Link from "next/link";
import styles from "./RabbitHoleLegal.module.scss";

const RabbitHolePrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/rabbithole/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/rabbithole/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/rabbithole/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Rabbit Hole: Deep Dives</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective date: July 6, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            Rabbit Hole (&ldquo;the App&rdquo;) is an iOS application developed
            by Maalik Ahmad, operating under HBKL Labs. Rabbit Hole is a
            short-form deep-dive reader: you pick a topic and read a curated
            series of bite-sized explainers that take you deeper. This policy
            explains what data the App collects, why, and what you can do about
            it.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>
              We collect as little as possible. No ads, and we never sell your
              data.
            </li>
            <li>
              Sign-in is handled by Google. We never see or store your
              password.
            </li>
            <li>
              You can delete your account and all associated data from inside
              the app at any time.
            </li>
          </ul>

          <h2>What we collect</h2>

          <h3>Account information</h3>
          <p>
            Rabbit Hole uses Google Sign-In, handled by Firebase
            Authentication. We never see or store your password. From the
            sign-in flow we receive:
          </p>
          <ul>
            <li>
              <strong>Your email address.</strong> Used as your account
              identifier.
            </li>
            <li>
              <strong>A user ID.</strong> A Firebase Authentication identifier
              that links your reading data to your account.
            </li>
          </ul>

          <h3>Reading activity and preferences</h3>
          <p>
            Once signed in, the following is stored in Google&rsquo;s Firestore,
            tied to your user ID, so the app works and remembers where you left
            off:
          </p>
          <ul>
            <li>Deep dives you&rsquo;ve started, read, or finished</li>
            <li>Your reading progress within a dive</li>
            <li>Topics and decks you&rsquo;ve saved or followed</li>
            <li>Preferences you set in the app</li>
            <li>Subscription state</li>
          </ul>

          <h3>Analytics and crash data</h3>
          <p>
            We collect standard, aggregated usage and stability data so we can
            keep the app working and understand which deep dives resonate. This
            includes app-open events, screen views, feature usage, and crash
            reports with device and OS information. This data is used in
            aggregate; it is not sold and is not used to build advertising
            profiles.
          </p>

          <h3>What we do NOT collect</h3>
          <ul>
            <li>Location data</li>
            <li>Contacts</li>
            <li>Photos, microphone, or camera access</li>
            <li>Browsing history outside the app</li>
            <li>Data sold or shared with advertisers or data brokers</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>
              <strong>App functionality.</strong> Your reading progress, saved
              topics, and preferences exist so the app works and syncs across
              your devices.
            </li>
            <li>
              <strong>Premium decks.</strong> Your subscription state
              determines access to premium deep-dive decks.
            </li>
            <li>
              <strong>Product improvement.</strong> Aggregated analytics and
              crash data help us fix bugs and improve the content.
            </li>
            <li>
              <strong>No advertising.</strong> We do not share or sell data to
              advertisers, data brokers, or anyone else.
            </li>
          </ul>

          <h2>Who else sees your data (processors)</h2>
          <p>
            Rabbit Hole relies on a few third-party services to operate. They
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
              . Provides authentication, Firestore (where your reading data
              lives), and analytics and crash reporting.
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
              . Google handles the sign-in event. Google sees the sign-in, not
              your in-app reading activity.
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
              handles payment; we never see your card details.
            </li>
          </ul>
          <p>We do not share your data with anyone else.</p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Open the app, go to
              Settings, and tap Delete Account. Your account, reading history,
              saved topics, preferences, and subscription state are removed
              immediately on the server side and within 30 days everywhere
              else.
            </li>
            <li>
              <strong>Sign out.</strong> Settings, Sign Out. Your cloud data
              stays in your account and returns when you sign back in.
            </li>
            <li>
              <strong>Request your data.</strong> Email us and we&rsquo;ll send
              you a full export of your data within 30 days.
            </li>
          </ul>

          <h2>Data retention</h2>
          <ul>
            <li>Account data is kept while your account is active.</li>
            <li>
              When you delete your account, the server wipes your data
              immediately. A cleanup process removes any leftover data within
              30 days.
            </li>
          </ul>

          <h2>Data security</h2>
          <p>
            All network traffic uses encrypted HTTPS. Data lives in Google
            Cloud infrastructure with access scoped to your user ID.
            Server-side functions that handle your data require authenticated
            requests. No method of electronic storage or transmission is 100%
            secure, and we cannot guarantee absolute security.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            We do not knowingly collect personal information from children
            under 13. If you believe a child under 13 has provided us with
            personal information, please contact us so we can take appropriate
            action.
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

export default RabbitHolePrivacy;
