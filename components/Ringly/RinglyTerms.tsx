import Link from "next/link";
import styles from "./RinglyLegal.module.scss";

const RinglyTerms = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/ringly/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/ringly/terms" className={styles.navLinkActive}>
            Terms
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Ringly</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective date: June 4, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            By using Ringly (&ldquo;the App&rdquo;) you agree to these Terms of
            Use. The App is developed by Maalik Ahmad and operated by HBKL Labs.
          </p>

          <h2>Using the app</h2>
          <p>
            Ringly lets you design an engagement ring and generate photoreal
            renders of your design. You may use the App for personal,
            non-commercial purposes.
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
              Attempt to bypass payment for paid features, including the Ringly
              Plus subscription.
            </li>
          </ul>

          <h2>Your content</h2>
          <p>
            You retain all rights to the ring designs you create and the
            renders you generate. By using the cloud features, you grant us a
            limited license to store and process that content solely to deliver
            the service to you (sync across devices, generate renders on your
            request).
          </p>
          <p>
            We do not claim ownership of your content, and we do not use your
            content to train AI models.
          </p>

          <h2>Renders are illustrations</h2>
          <p>
            Ring renders are AI-generated illustrations created for design and
            inspiration purposes. They are not photographs of real jewelry, are
            not appraisals, and do not represent any actual stone, carat weight,
            grading, or price. Ringly does not sell jewelry.
          </p>

          <h2>Subscriptions and purchases</h2>
          <h3>Ringly Plus</h3>
          <p>
            Ringly Plus is an auto-renewing subscription that unlocks unlimited
            HD, watermark-free renders and the on-hand try-on feature. It is
            offered on weekly, monthly, and yearly plans, each with an
            introductory free trial where shown.
          </p>
          <p>
            Pricing and trial length are shown in the App at the point of
            purchase. Subscriptions renew automatically at the end of each
            billing period unless you cancel at least 24 hours before the
            renewal date. Payment is charged to your Apple ID. You can manage or
            cancel your subscription in the iOS Settings app under your name,
            then Subscriptions.
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
            available,&rdquo; without warranty of any kind. We do not guarantee
            that the App will be uninterrupted or error-free, or that an
            AI-generated render will match any real ring.
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

export default RinglyTerms;
