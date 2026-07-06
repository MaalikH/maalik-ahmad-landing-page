import Link from "next/link";
import styles from "./RabbitHoleLegal.module.scss";

const RabbitHoleSupport = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/rabbithole/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/rabbithole/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/rabbithole/support" className={styles.navLinkActive}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Rabbit Hole: Deep Dives</p>
          <h1 className={styles.title}>Support</h1>
        </header>

        <div className={styles.content}>
          <p>
            Rabbit Hole is a short-form deep-dive reader for iOS. Pick a topic
            and read a curated series of bite-sized explainers that take you
            deeper, one dive at a time. Save the topics you want to return to,
            and unlock premium decks with a subscription.
          </p>
          <p>Check the FAQ below or reach out to us directly.</p>

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
            <h3>Do I need an account to use Rabbit Hole?</h3>
            <p>
              Rabbit Hole uses Google Sign-In so your reading progress and saved
              topics sync across your devices. Signing in also lets you pick up
              where you left off on any deep dive.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What is a deep dive?</h3>
            <p>
              A deep dive is a curated series of short, connected explainers on
              a single topic. Each card builds on the last, so you go from a
              quick overview to a genuine understanding without a wall of text.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What do premium decks include?</h3>
            <p>
              A subscription unlocks premium deep-dive decks and additional
              features. Free content is always available; premium simply opens
              up more topics and depth.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I manage my subscription?</h3>
            <p>
              Open the iOS Settings app, tap your name at the top, then
              Subscriptions, then Rabbit Hole. From there you can change the
              plan or cancel. Cancellation takes effect at the end of your
              current billing period.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I restore my purchases?</h3>
            <p>
              Open Rabbit Hole, go to Settings, and tap Restore Purchases. Make
              sure you&rsquo;re signed in with the same Apple ID you used for
              the original purchase.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I delete my account and data?</h3>
            <p>
              Open the app, go to Settings, scroll to the bottom, and tap Delete
              Account. Your account, reading history, saved topics, preferences,
              and subscription state are removed from the server immediately.
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
            <h3>My reading progress isn&rsquo;t syncing. What should I do?</h3>
            <p>
              Make sure you&rsquo;re signed in with the same Google account on
              each device and that you have a working internet connection. If
              progress still doesn&rsquo;t appear, sign out and back in, or email
              us and we&rsquo;ll help.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default RabbitHoleSupport;
