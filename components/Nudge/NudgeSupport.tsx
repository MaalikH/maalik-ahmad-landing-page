import Link from "next/link";
import styles from "./NudgeLegal.module.scss";

const NudgeSupport = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/nudge/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/nudge/support" className={styles.navLinkActive}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Nudge &mdash; Daily Motivation</p>
          <h1 className={styles.title}>Support</h1>
        </header>

        <div className={styles.content}>
          <p>
            Nudge is an AI-powered motivational notification app. You create
            goals, choose a motivational tone, set your notification schedule,
            and receive personalized AI-generated push notifications to keep you
            on track.
          </p>
          <p>
            If you need help or have a question, check the FAQ below or reach
            out to us directly.
          </p>

          <div className={`${styles.contactSection} ${styles.contactSectionFlush}`}>
            <h2>Contact Us</h2>
            <p>
              For any questions, issues, or feedback, please email us at:
            </p>
            <p>
              <a
                href="mailto:support@maalikahmad.tech"
                className={styles.contactEmail}
              >
                support@maalikahmad.tech
              </a>
            </p>
            <p>
              We typically respond within 1&ndash;2 business days.
            </p>
          </div>

          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <h3>How do I create an account?</h3>
            <p>
              You can sign up using your email address, Google Sign-In, or Sign
              in with Apple. Open the app and follow the onboarding flow to
              create your account and set up your first goal.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I set up notifications?</h3>
            <p>
              When you create a goal, you choose a notification schedule
              including which days of the week and what times you want to
              receive motivational messages. You can also select from six
              different motivational tones to personalize the style of your
              notifications.
            </p>
            <p>
              Make sure you allow push notifications when prompted so that
              Nudge can deliver your messages on time.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I change my notification schedule?</h3>
            <p>
              Go to the home screen, tap on the goal you want to modify, and
              update your schedule settings. You can change the days, times, and
              motivational tone at any time.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I manage my subscription?</h3>
            <p>
              Nudge offers subscription plans that unlock additional features.
              To manage your subscription, go to your device&rsquo;s Settings
              &gt; Apple ID &gt; Subscriptions &gt; Nudge. From there you can
              change your plan or cancel your subscription.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I restore my purchases?</h3>
            <p>
              If you reinstalled the app or switched devices, open Nudge and go
              to Settings. Tap &ldquo;Restore Purchases&rdquo; to restore your
              subscription. Make sure you are signed in with the same Apple ID
              you used for the original purchase.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I delete my account and data?</h3>
            <p>
              You can request the deletion of your account and all associated
              data by emailing us at{" "}
              <a href="mailto:support@maalikahmad.tech">
                support@maalikahmad.tech
              </a>
              . Please include the email address associated with your account.
              We will process your request and remove all of your data within 30
              days.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>I&rsquo;m not receiving notifications. What should I do?</h3>
            <p>
              First, make sure notifications are enabled for Nudge in your
              device&rsquo;s Settings &gt; Notifications &gt; Nudge. Also check
              that Do Not Disturb or Focus mode is not blocking notifications.
              If the issue persists, try signing out and signing back in, or
              contact us for help.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NudgeSupport;
