import Link from "next/link";
import styles from "./RinglyLegal.module.scss";

const RinglyPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/ringly/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/ringly/terms" className={styles.navLink}>
            Terms
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Ringly</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Effective date: June 4, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            Ringly (&ldquo;the App&rdquo;) is an iOS application developed by
            Maalik Ahmad, operating under HBKL Labs. Ringly lets you design an
            engagement ring and generate photoreal renders of it. This policy
            explains what data the App collects, why, and what you can do about
            it.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>
              We collect as little as possible. No third-party analytics, no
              ads, no tracking across other apps or websites.
            </li>
            <li>
              You can delete your account and all associated data from inside
              the app at any time.
            </li>
            <li>We do not use your designs or photos to train AI models.</li>
          </ul>

          <h2>What we collect</h2>

          <h3>When you sign in</h3>
          <p>
            Ringly uses <strong>Sign in with Apple</strong>. Authentication is
            handled by Firebase Authentication. We never see or store a
            password. From the sign-in flow we receive:
          </p>
          <ul>
            <li>
              <strong>Your email address.</strong> Used as your account
              identifier. If you choose Apple&rsquo;s &ldquo;Hide My
              Email,&rdquo; we only ever see the relay address.
            </li>
            <li>
              <strong>A user ID.</strong> A Firebase Authentication identifier
              that links your designs to your account.
            </li>
          </ul>
          <p>
            Once signed in, the following lives in Google&rsquo;s Firestore and
            Firebase Storage, tied to your user ID:
          </p>
          <ul>
            <li>The ring designs you create (metal, stone, setting, and band choices)</li>
            <li>The photoreal ring renders you generate</li>
            <li>Subscription state</li>
          </ul>

          <h3>Photos</h3>
          <p>
            The &ldquo;try it on your hand&rdquo; feature uses your camera or
            photo library to place a ring on a photo of your own hand. This
            happens on your device. We request camera and photo-library access
            only for this feature, and only when you use it.
          </p>

          <h3>What we do NOT collect</h3>
          <ul>
            <li>Location data</li>
            <li>Contacts</li>
            <li>Browsing history outside the app</li>
            <li>Analytics, crash reports, or telemetry from third-party SDKs</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>
              <strong>App functionality only.</strong> Your designs and renders
              exist so the app works across your devices.
            </li>
            <li>
              <strong>Ring render generation.</strong> When you generate a
              render, a text description of your ring design (not your photos)
              is sent to OpenAI&rsquo;s image API, which returns the rendered
              image. We store the result in your account.
            </li>
            <li>
              <strong>No advertising.</strong> We do not share or sell data to
              advertisers, data brokers, or anyone else.
            </li>
          </ul>

          <h2>Who else sees your data (processors)</h2>
          <p>
            Ringly relies on a few third-party services to operate. They
            process data on our behalf and are bound by their own privacy
            terms:
          </p>
          <ul>
            <li>
              <strong>Firebase</strong> (Google).{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Provides authentication, Firestore (where your designs live),
              and Firebase Storage (where your renders live).
            </li>
            <li>
              <strong>OpenAI</strong>.{" "}
              <a
                href="https://openai.com/policies/privacy-policy"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Generates ring renders from a text description of your design.
              OpenAI receives the design description, not your account
              information or photos.
            </li>
            <li>
              <strong>Apple</strong>.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                Privacy
              </a>
              . Sign in with Apple authenticates you; Apple StoreKit verifies
              in-app subscription purchases. Payment is handled entirely by
              Apple &mdash; we never see your card details.
            </li>
          </ul>
          <p>We do not share your data with anyone else.</p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Open the app, go to
              Settings, and tap Delete Account. Your account, designs, and
              renders are removed immediately on the server side and within 30
              days everywhere else.
            </li>
            <li>
              <strong>Sign out.</strong> Settings, Sign Out.
            </li>
            <li>
              <strong>Request an export.</strong> Email us and we&rsquo;ll send
              you everything we hold about you within 30 days.
            </li>
          </ul>

          <h2>Data retention</h2>
          <ul>
            <li>Account data is kept while your account is active.</li>
            <li>
              When you delete your account, the server wipes your data
              immediately. Any residual copies in backups are removed within 30
              days.
            </li>
          </ul>

          <h2>Children</h2>
          <p>
            Ringly is not directed to children under 13, and we do not
            knowingly collect data from them.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this policy from time to time. Material changes will
            be noted in the App before they take effect.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>Questions about your privacy? Email:</p>
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

export default RinglyPrivacy;
