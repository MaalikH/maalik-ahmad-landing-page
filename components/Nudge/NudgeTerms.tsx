import Link from "next/link";
import styles from "./NudgeLegal.module.scss";

const NudgeTerms = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/nudge/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/nudge/terms" className={styles.navLinkActive}>
            Terms
          </Link>
          <Link href="/nudge/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Nudge</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Effective date: June 4, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            By using Nudge (&ldquo;the App&rdquo;) you agree to these Terms of
            Use. The App is developed by Maalik Ahmad and operated by HBKL
            Enterprises.
          </p>

          <h2>Using the app</h2>
          <p>
            Nudge helps you stay on track with your goals by sending
            personalized motivational notifications generated from the context
            you provide. You may use the App for personal, non-commercial
            purposes.
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
              Submit goal text that is unlawful, hateful, or intended to
              produce harmful content.
            </li>
            <li>
              Attempt to bypass payment for paid features or circumvent usage
              limits.
            </li>
          </ul>

          <h2>AI-generated content</h2>
          <p>
            Nudge uses automated systems to generate the motivational messages
            you receive, based on the goals and context you enter. Messages
            are meant to be supportive and are not professional advice. Nudge
            is not a substitute for medical, mental health, financial, or
            legal advice. If you are in crisis, contact a qualified
            professional or your local emergency services.
          </p>

          <h2>Your content</h2>
          <p>
            You retain all rights to the goals and context you create in the
            App. By using Nudge, you grant us a limited license to store and
            process that text solely to generate your notifications and sync
            your account across devices. We do not claim ownership of your
            content, we do not sell it, and we do not use it to train AI
            models.
          </p>

          <h2>Subscription</h2>
          <p>
            Nudge offers Nudge Pro, an auto-renewing subscription available as
            a monthly or annual plan, which raises your daily notification
            limit and unlocks additional features. A free trial may be offered
            at the start; if you do not cancel before the trial ends, the paid
            subscription begins automatically. Pricing and any trial length
            are shown in the App at the point of purchase. The subscription
            renews automatically unless you cancel at least 24 hours before the
            renewal date. Payment is charged to your Apple ID. You can manage
            or cancel in the iOS Settings app under your name, then
            Subscriptions.
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
            You may delete your account and all associated data at any time
            from Settings inside the App. Deletion is immediate on the server
            side. We may suspend or terminate accounts that violate these
            terms; where feasible, we will notify you first.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranty of any kind. We do not
            guarantee that the App will be uninterrupted or error-free, or
            that any generated message will fit your situation.
          </p>
          <p>
            To the maximum extent permitted by law, HBKL Enterprises and
            Maalik Ahmad disclaim all warranties and shall not be liable for
            any indirect, incidental, special, or consequential damages
            arising out of your use of the App.
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

export default NudgeTerms;
