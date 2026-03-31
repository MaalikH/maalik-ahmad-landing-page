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
          <p className={styles.appName}>Nudge &mdash; Daily Motivation</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>
            Effective date: March 31, 2026
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Nudge &mdash; Daily Motivation (&ldquo;the App&rdquo;) is an iOS
            application developed by Maalik Ahmad, operating under HBKL
            Enterprises. This privacy policy explains how the App collects,
            uses, and protects your information.
          </p>

          <h2>Information We Collect</h2>
          <p>
            The App collects the following information, all of which is used
            solely for app functionality and is linked to your identity:
          </p>
          <ul>
            <li>
              <strong>Email Address</strong> &mdash; collected during account
              creation and used for authentication
            </li>
            <li>
              <strong>User ID</strong> &mdash; a unique identifier assigned by
              our authentication system to associate your goals and notification
              preferences with your account
            </li>
            <li>
              <strong>Purchase History</strong> &mdash; subscription status
              managed through our payment provider to unlock premium features
            </li>
          </ul>
          <p>
            <strong>
              We do not collect any data for tracking purposes.
            </strong>
          </p>

          <h2>How We Use Your Information</h2>
          <p>Your information is used exclusively to:</p>
          <ul>
            <li>Create and manage your account</li>
            <li>
              Store your goals, notification schedules, and preferences
            </li>
            <li>
              Generate personalized AI-powered motivational messages based on
              your goals
            </li>
            <li>
              Deliver push notifications at your scheduled times
            </li>
            <li>Manage your subscription status</li>
          </ul>

          <h2>Authentication</h2>
          <p>
            The App supports three sign-in methods: Email, Google Sign-In, and
            Sign in with Apple. Authentication is handled securely through
            Firebase Authentication. We do not store your passwords directly.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            The App uses the following third-party services to provide its
            functionality:
          </p>
          <ul>
            <li>
              <strong>Firebase</strong> (by Google) &mdash; provides
              authentication, cloud database storage for your goals and
              notification history, and push notification delivery
            </li>
            <li>
              <strong>OpenAI</strong> &mdash; generates the AI-powered
              motivational messages you receive as notifications. Your goal
              titles and context are sent to OpenAI to generate personalized
              messages. All user input and AI-generated content is checked by
              a content moderation system to ensure appropriateness.
            </li>
            <li>
              <strong>RevenueCat</strong> &mdash; manages in-app subscriptions
              and purchase verification
            </li>
          </ul>
          <p>
            Each of these services has its own privacy policy governing how they
            handle data. We encourage you to review them.
          </p>

          <h2>What We Do Not Do</h2>
          <ul>
            <li>
              We do <strong>not</strong> use any third-party analytics or
              tracking tools
            </li>
            <li>
              We do <strong>not</strong> display advertisements
            </li>
            <li>
              We do <strong>not</strong> sell, rent, or share your personal data
              with third parties for marketing or any other purpose
            </li>
          </ul>

          <h2>Data Retention and Deletion</h2>
          <p>
            Your data is retained for as long as your account is active. You may
            request deletion of your account and all associated data at any time
            by contacting us at the email address below. Upon receiving a
            deletion request, we will remove your account, goals, notification
            history, and all related data from our systems within 30 days.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            The App is rated 4+ on the App Store. We do not knowingly collect
            personal information from children under the age of 13. If you
            believe a child under 13 has provided us with personal information,
            please contact us so we can take appropriate action.
          </p>

          <h2>Data Security</h2>
          <p>
            We use industry-standard security measures to protect your
            information. Data is transmitted using encrypted connections and
            stored in secure cloud infrastructure. However, no method of
            electronic storage or transmission is 100% secure, and we cannot
            guarantee absolute security.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes
            will be posted on this page with a revised effective date. We
            encourage you to review this policy periodically.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact Us</h2>
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
