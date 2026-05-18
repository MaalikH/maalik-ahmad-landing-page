import Link from "next/link";
import styles from "./NudgeLegal.module.scss";

const NudgePrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/nudge/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/nudge/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Nudge: Daily Motivation</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>
            Effective date: May 17, 2026
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Nudge (&ldquo;the App&rdquo;) is an iOS application developed by
            Maalik Ahmad, operating under HBKL Labs. This privacy policy
            explains how the App collects, uses, and protects your information.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>We collect only what the app needs to deliver your nudges.</li>
            <li>
              No third-party analytics, no ads, no tracking across other apps
              or websites.
            </li>
            <li>
              You can delete your account and all associated data from inside
              the app at any time.
            </li>
          </ul>

          <h2>What we collect</h2>
          <p>
            All data we collect is linked to your account and used solely to
            run the app:
          </p>
          <ul>
            <li>
              <strong>Email address.</strong> Collected at sign-in and used as
              your account identifier. If you choose Apple&rsquo;s &ldquo;Hide
              My Email,&rdquo; we only ever see the relay address.
            </li>
            <li>
              <strong>User ID.</strong> A unique identifier from Firebase
              Authentication that links your goals, schedules, and notification
              history to your account.
            </li>
            <li>
              <strong>Goals you create.</strong> Title, context, motivational
              tone, and notification schedule.
            </li>
            <li>
              <strong>Notification history.</strong> The messages we&rsquo;ve
              sent you, your favorites, and whether they were delivered.
            </li>
            <li>
              <strong>Push notification token.</strong> The Firebase Cloud
              Messaging token Apple issues for your device, so we can route
              notifications to you.
            </li>
            <li>
              <strong>Subscription status.</strong> Managed through Apple and
              RevenueCat so we know which features to unlock.
            </li>
          </ul>

          <h2>What we do NOT collect</h2>
          <ul>
            <li>Location data</li>
            <li>Contacts</li>
            <li>Photos, microphone, or camera access</li>
            <li>Browsing history outside the app</li>
            <li>
              Analytics, crash reports, or telemetry from third-party SDKs
            </li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To create and manage your account.</li>
            <li>To store your goals, schedules, and notification preferences.</li>
            <li>
              To generate personalized AI-powered motivational messages based
              on the goals and tone you&rsquo;ve set.
            </li>
            <li>To deliver push notifications at the times you&rsquo;ve picked.</li>
            <li>To manage your subscription entitlements.</li>
          </ul>
          <p>
            Before any user-supplied content or AI-generated message is stored
            or delivered, it passes through an automated content moderation
            check so the notifications you receive stay on-topic and safe.
          </p>

          <h2>Authentication</h2>
          <p>
            Nudge supports three sign-in methods: Sign in with Apple, Google
            Sign-In, and email magic-code. Authentication is handled by
            Firebase Authentication. We never see or store your password.
          </p>

          <h2>Third-party services</h2>
          <p>
            Nudge relies on the following services to operate. Each has its
            own privacy policy:
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
              . Provides authentication, the Firestore database that stores
              your goals and notification history, Cloud Functions that
              generate messages, and Firebase Cloud Messaging for notification
              delivery.
            </li>
            <li>
              <strong>OpenAI</strong>.{" "}
              <a
                href="https://openai.com/policies/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Generates the motivational message text from the goal title
              and tone you provided. OpenAI does not receive your email,
              account ID, or notification history, only the prompt text for
              the message being generated.
            </li>
            <li>
              <strong>RevenueCat</strong>.{" "}
              <a
                href="https://www.revenuecat.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Manages in-app subscriptions and purchase verification with
              Apple.
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
              . Delivers notifications. Apple sees the device token and
              notification payload.
            </li>
          </ul>
          <p>We do not share your data with anyone else.</p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Open the app, go to
              Settings, and choose Delete Account. Your account, goals,
              notification history, and subscription state are removed within
              30 days, and any cloud-stored content tied to your user ID is
              wiped during the same cycle.
            </li>
            <li>
              <strong>Sign out.</strong> Settings, then Sign Out. Your data
              stays in your account; sign back in any time to restore it.
            </li>
            <li>
              <strong>Export your data.</strong> Email us and we&rsquo;ll send
              you a JSON export within 30 days.
            </li>
            <li>
              <strong>Opt out of notifications.</strong> Disable notifications
              in iOS Settings, or toggle a specific goal off inside Nudge.
            </li>
          </ul>

          <h2>Data security</h2>
          <p>
            Data is transmitted over encrypted HTTPS connections and stored in
            Google Cloud infrastructure with row-level access scoped to your
            user ID. Server-side functions that handle your data require
            authenticated requests. No method of electronic storage or
            transmission is 100% secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            Nudge is rated 4+ on the App Store. We do not knowingly collect
            personal information from children under the age of 13. If you
            believe a child under 13 has provided us with personal information,
            please contact us so we can take appropriate action.
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

export default NudgePrivacy;
