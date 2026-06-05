import Link from "next/link";
import styles from "./NeusLegal.module.scss";

const NeusTerms = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/neus/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/neus/terms" className={styles.navLinkActive}>
            Terms
          </Link>
          <Link href="/neus/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Neus</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective date: June 4, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            By using Neus (&ldquo;the App&rdquo;) you agree to these Terms of
            Use. The App is developed by Maalik Ahmad and operated by HBKL
            Labs.
          </p>

          <h2>Using the app</h2>
          <p>
            Neus is a news reader that gathers articles from across the web,
            groups them into events, and lets you follow topics and sources,
            save articles, and read short summaries. You may use the App for
            personal, non-commercial purposes.
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
              Attempt to bypass payment for paid features, including the Neus
              subscription, or circumvent rate limits on sign-in.
            </li>
            <li>
              Scrape, resell, or redistribute the article feed or the
              summaries.
            </li>
          </ul>

          <h2>News content</h2>
          <p>
            Articles, headlines, and source links shown in Neus are produced
            by third-party publishers and supplied through a news data
            provider. Neus does not write the underlying articles and is not
            responsible for their accuracy. Summaries are generated to help
            you decide what to read; always open the original source for the
            full story.
          </p>

          <h2>Your content</h2>
          <p>
            You retain all rights to the saves, follows, and preferences you
            create in the App. By using the sync features, you grant us a
            limited license to store and process that data solely to deliver
            the service to you, such as syncing across devices and delivering
            notifications you opt into. We do not claim ownership of your data
            and we do not sell it.
          </p>

          <h2>Subscription</h2>
          <p>
            Neus offers an auto-renewing subscription that unlocks full access
            to the app. Pricing is shown in the App at the point of purchase.
            The subscription renews automatically at the end of each billing
            period unless you cancel at least 24 hours before the renewal
            date. Payment is charged to your Apple ID. You can manage or
            cancel the subscription in the iOS Settings app under your name,
            then Subscriptions.
          </p>

          <h3>Refunds</h3>
          <p>
            All purchases are processed by Apple. Refund requests are handled
            by Apple under Apple&rsquo;s refund policy; we cannot process
            refunds directly. To request a refund, visit{" "}
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
            You may delete your account at any time from Profile, then Delete
            Account inside the App. Deletion is immediate on the server side.
            We may suspend or terminate accounts that violate these terms;
            where feasible, we will notify you first.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranty of any kind. We do not
            guarantee that the App will be uninterrupted or error-free, or
            that any summary or grouping of articles is complete or accurate.
          </p>
          <p>
            To the maximum extent permitted by law, HBKL Labs and Maalik Ahmad
            disclaim all warranties and shall not be liable for any indirect,
            incidental, special, or consequential damages arising out of your
            use of the App.
          </p>

          <h2>Changes to these terms</h2>
          <p>
            We may update these Terms of Use from time to time. Material
            changes will be noted in the App before they take effect. Your
            continued use of the App after a change constitutes acceptance of
            the updated terms.
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
                href="mailto:maalikahmadtech@gmail.com"
                className={styles.contactEmail}
              >
                maalikahmadtech@gmail.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NeusTerms;
