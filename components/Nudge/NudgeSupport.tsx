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
          <p className={styles.appName}>Nudge: Daily Motivation</p>
          <h1 className={styles.title}>Support</h1>
        </header>

        <div className={styles.content}>
          <p>
            Nudge is an AI-powered motivational notification app. You create
            goals, choose a tone, set your notification schedule, and receive
            personalized push notifications to keep you on track.
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
            <h3>How do I create an account?</h3>
            <p>
              Sign up with Sign in with Apple, Google Sign-In, or an email
              magic code. Open the app and follow the onboarding flow to
              create your account and set up your first goal.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I set up notifications?</h3>
            <p>
              When you create a goal, pick a schedule (which days of the week,
              what times) and a motivational tone. Nudge offers six tones so
              you can match the style to the goal.
            </p>
            <p>
              Allow push notifications when prompted so Nudge can deliver your
              messages on time.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I change my notification schedule?</h3>
            <p>
              On the home screen, tap the goal you want to change. Update
              days, times, or tone, and the schedule re-applies on save.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I manage my subscription?</h3>
            <p>
              Nudge offers a subscription that unlocks higher daily notification
              caps and additional features. To manage it, open the iOS Settings
              app, tap your name at the top, then Subscriptions, then Nudge.
              From there you can change the plan or cancel.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I restore my purchases?</h3>
            <p>
              If you reinstalled the app or switched devices, open Nudge,
              go to Settings, and tap Restore Purchases. Make sure
              you&rsquo;re signed in with the same Apple ID you used for the
              original purchase.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I delete my account and data?</h3>
            <p>
              Open the app, go to Settings, and tap Delete Account. Your
              account, goals, notification history, and subscription state
              are removed within 30 days, and any cloud-stored content tied
              to your user ID is wiped during the same cycle.
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
              Notifications, Nudge. Check that Do Not Disturb or Focus mode
              is not suppressing them. If the issue persists, try signing
              out and back in, or contact us.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NudgeSupport;
