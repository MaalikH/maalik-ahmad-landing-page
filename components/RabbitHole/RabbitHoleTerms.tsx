import Link from "next/link";
import styles from "./RabbitHoleLegal.module.scss";

const RabbitHoleTerms = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/rabbithole/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/rabbithole/terms" className={styles.navLinkActive}>
            Terms
          </Link>
          <Link href="/rabbithole/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Rabbit Hole: Deep Dives</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective date: July 6, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            By using Rabbit Hole (&ldquo;the App&rdquo;) you agree to these
            Terms of Use. The App is developed by Maalik Ahmad and operated by
            HBKL Labs.
          </p>

          <h2>Using the app</h2>
          <p>
            Rabbit Hole lets you read curated, short-form deep dives on a range
            of topics and save the ones you want to come back to. You may use
            the App for personal, non-commercial purposes.
          </p>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the App in any way that violates applicable laws or
              regulations.
            </li>
            <li>
              Reverse-engineer, decompile, or attempt to extract the source
              code of the App.
            </li>
            <li>
              Copy, redistribute, or resell the deep-dive content outside of
              your personal use of the App.
            </li>
            <li>
              Attempt to bypass payment for paid features, including premium
              decks.
            </li>
          </ul>

          <h2>Content and intellectual property</h2>
          <p>
            The deep dives, decks, text, design, and other materials in the App
            are owned by HBKL Labs or its licensors and are protected by
            intellectual property laws. Your subscription grants you a limited,
            personal, non-transferable license to read and access this content
            within the App. It does not transfer ownership.
          </p>
          <p>
            Any preferences, saved topics, or notes you create remain yours. By
            using the app&rsquo;s sync features, you grant us a limited license
            to store and process that data solely to deliver the service to you.
          </p>

          <h2>Subscriptions and purchases</h2>

          <h3>Premium decks</h3>
          <p>
            Rabbit Hole offers an auto-renewing subscription that unlocks
            premium deep-dive decks and features. Pricing is shown in the App at
            the point of purchase. Subscriptions renew automatically at the end
            of each billing period unless you cancel at least 24 hours before
            the renewal date. Payment is charged to your Apple ID. You can
            manage or cancel your subscription in the iOS Settings app under
            your name, then Subscriptions.
          </p>

          <h3>Refunds</h3>
          <p>
            All purchases are processed by Apple. Refund requests are handled by
            Apple per Apple&rsquo;s refund policy. We cannot process refunds
            directly. To request a refund, visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noreferrer"
            >
              reportaproblem.apple.com
            </a>
            .
          </p>

          <h2>Account termination</h2>
          <p>
            You may delete your account at any time from Settings inside the
            App. Deletion is immediate on the server side and propagates to
            backups within 30 days.
          </p>
          <p>
            We may suspend or terminate accounts that violate these terms. Where
            feasible, we&rsquo;ll notify you first.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranty of any kind. Deep dives are
            intended as accessible summaries and general information, not
            professional, legal, medical, or financial advice. We do not
            guarantee that the App will be uninterrupted, error-free, or that
            every fact will be complete or current.
          </p>
          <p>
            To the maximum extent permitted by law, HBKL Labs and Maalik Ahmad
            disclaim all warranties and shall not be liable for any indirect,
            incidental, special, or consequential damages arising out of your
            use of the App.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these Terms of Use from time to time. Material changes
            will be noted in the App before they take effect. Your continued use
            of the App after the change constitutes acceptance of the updated
            terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of New York,
            without regard to its conflict of law provisions.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>Questions about these terms? Email:</p>
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

export default RabbitHoleTerms;
