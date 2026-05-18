import Link from "next/link";
import styles from "./NeusLegal.module.scss";

const NeusSupport = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/neus/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/neus/support" className={styles.navLinkActive}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Neus</p>
          <h1 className={styles.title}>Support</h1>
        </header>

        <div className={styles.content}>
          <p>
            Neus is a news app that clusters stories from across the political
            spectrum and shows you every angle. Pick a story, see the lean
            label on each source, and read them side by side. Save what
            matters and follow stories as they develop.
          </p>
          <p>
            If you need help or have a question, check the FAQ below or reach
            out to us directly.
          </p>

          <div
            className={`${styles.contactSection} ${styles.contactSectionFlush}`}
          >
            <h2>Contact us</h2>
            <p>For any questions, issues, or feedback, please email:</p>
            <p>
              <a
                href="mailto:maalikahmadtech@gmail.com"
                className={styles.contactEmail}
              >
                maalikahmadtech@gmail.com
              </a>
            </p>
            <p>We typically respond within 1&ndash;2 business days.</p>
          </div>

          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <h3>Do I need an account to use Neus?</h3>
            <p>
              No. You can use Neus as a guest. Your saved articles and
              followed events are stored on your device only. Sign in with
              Apple or Google to sync across devices.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How does Neus stay neutral?</h3>
            <p>
              Neus does not rank sources by political lean. Every source in a
              story shows its lean label (left, center, right, and so on), and
              the order is deterministic. You always choose which perspective
              you read.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Where does the news come from?</h3>
            <p>
              Articles are aggregated from dozens of publishers via
              EventRegistry, a news API. Neus fetches new stories twice a day
              and clusters them into events. We do not write or edit
              articles.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I follow a story?</h3>
            <p>
              Open a story and tap the follow icon. Followed events show up
              in the Following tab and, if you opt in, you&rsquo;ll receive a
              push notification when there&rsquo;s a major update.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I enable notifications?</h3>
            <p>
              Go to Profile, then Notifications, and toggle the types you
              want: breaking news, followed events, or alternate
              perspectives. You can also manage permissions in iOS Settings,
              Notifications, Neus.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I delete my account and data?</h3>
            <p>
              Open the app, go to Profile, then Delete Account, and confirm.
              All your saves, follows, preferences, and device tokens are
              deleted immediately. If you have trouble, email us at{" "}
              <a href="mailto:maalikahmadtech@gmail.com">
                maalikahmadtech@gmail.com
              </a>
              .
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>I&rsquo;m not receiving notifications. What should I do?</h3>
            <p>
              First check iOS Settings, Notifications, Neus, and confirm
              notifications are allowed. Then check Profile, Notifications
              inside the app and make sure the toggles are on. Focus or Do
              Not Disturb can also suppress notifications.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>A source is missing or labeled wrong. Can I suggest a fix?</h3>
            <p>
              Yes, please email us with the source name and what you think
              the correct lean or addition should be. We review every
              suggestion.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NeusSupport;
