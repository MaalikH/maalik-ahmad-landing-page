import Link from "next/link";
import styles from "./OpenReaderLegal.module.scss";

const OpenReaderTerms = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/openreader/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/openreader/terms" className={styles.navLinkActive}>
            Terms
          </Link>
          <Link href="/openreader/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>OpenReader</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective date: May 17, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            By using OpenReader (&ldquo;the App&rdquo;) you agree to these
            Terms of Use. The App is developed by Maalik Ahmad and operated
            by HBKL Labs.
          </p>

          <h2>Using the app</h2>
          <p>
            OpenReader lets you read EPUB books, save and resurface highlights,
            and (optionally) generate AI audiobooks for books in your library.
            You may use the App for personal, non-commercial purposes.
          </p>
          <p>
            You agree not to:
          </p>
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
              Use the App to import, store, or distribute content you do not
              have the right to possess.
            </li>
            <li>
              Attempt to bypass payment for paid features, including the
              OpenReader Cloud subscription and AI audiobook generation.
            </li>
          </ul>

          <h2>Your content</h2>
          <p>
            You retain all rights to the books, highlights, notes, and other
            content you store in the App. By using the cloud-sync features,
            you grant us a limited license to store and process that content
            solely to deliver the service to you (sync across devices, deliver
            notifications, generate audiobooks on your request).
          </p>
          <p>
            We do not claim ownership of your content. We do not use your
            content to train AI models.
          </p>

          <h2>Subscriptions and purchases</h2>

          <h3>OpenReader Cloud</h3>
          <p>
            OpenReader Cloud is an auto-renewing subscription that provides:
          </p>
          <ul>
            <li>Cloud sync of your library across signed-in devices.</li>
            <li>Removal of the free-tier 1-book cloud limit.</li>
            <li>Access to purchase AI audiobook generation.</li>
          </ul>
          <p>
            Pricing is shown in the App at the point of purchase. Subscriptions
            renew automatically at the end of each billing period unless you
            cancel at least 24 hours before the renewal date. Payment is
            charged to your Apple ID. You can manage or cancel your
            subscription in the iOS Settings app under your name, then
            Subscriptions.
          </p>

          <h3>AI audiobook purchases</h3>
          <p>
            AI audiobook generation is sold as a one-time per-book purchase.
            Each tier corresponds to the length of the book. Once generation
            completes, the audiobook is available in your library. Generation
            is non-refundable once complete; if a generation fails before
            completion, the purchase is automatically credited.
          </p>

          <h3>Refunds</h3>
          <p>
            All purchases are processed by Apple. Refund requests are handled
            by Apple per Apple&rsquo;s refund policy. We cannot process
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
            You may delete your account at any time from Settings inside the
            App. Deletion is immediate on the server side and propagates to
            backups within 30 days.
          </p>
          <p>
            We may suspend or terminate accounts that violate these terms
            (for example, accounts attempting to abuse the AI audiobook
            generation system or circumvent rate limits on sign-in). Where
            feasible, we&rsquo;ll notify you first.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranty of any kind. We do not
            guarantee that the App will be uninterrupted, error-free, or that
            AI-generated audiobooks will pronounce every word correctly.
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
            continued use of the App after the change constitutes acceptance
            of the updated terms.
          </p>

          <h2>Governing law</h2>
          <p>
            These terms are governed by the laws of the State of New York,
            without regard to its conflict of law provisions.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>
              Questions about these terms? Email:
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

export default OpenReaderTerms;
