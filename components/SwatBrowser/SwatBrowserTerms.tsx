import Link from "next/link";
import styles from "./SwatBrowserLegal.module.scss";

const SwatBrowserTerms = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/swatbrowser/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/swatbrowser/terms" className={styles.navLinkActive}>
            Terms
          </Link>
          <Link href="/swatbrowser/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>SwatBrowser</p>
          <h1 className={styles.title}>Terms of Use</h1>
          <p className={styles.effectiveDate}>Last updated: July 23, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            By using SwatBrowser (&ldquo;the App&rdquo;) you agree to these
            Terms of Use. The App is developed by Maalik Ahmad and operated by
            HBKL Labs.
          </p>

          <h2>What the App does</h2>
          <p>
            SwatBrowser is an iOS web browser that blocks pop-ups, popunders,
            clickjacking overlays, and injected ad gates, shows you what a page
            reached for through Capture X-Ray, and includes a private browsing
            mode and an optional Safari content blocker. You may use it for
            personal, non-commercial purposes.
          </p>
          <p>You agree not to:</p>
          <ul>
            <li>
              Use the App in a way that violates applicable laws or
              regulations.
            </li>
            <li>
              Reverse-engineer, decompile, or attempt to extract the source
              code of the App.
            </li>
            <li>
              Attempt to bypass payment for the App or its paid features.
            </li>
            <li>
              Use the App to access, download, or distribute content you do not
              have the right to possess.
            </li>
          </ul>

          <h2>Your content</h2>
          <p>
            Everything you do in the App stays on your device. We do not
            receive, store, or process your browsing, bookmarks, downloads, or
            any other content, so we claim no rights over it and grant
            ourselves no license to it.
          </p>

          <h2>Subscriptions and purchases</h2>
          <p>
            SwatBrowser Pro unlocks the App. It is offered as an auto-renewing
            monthly subscription, an auto-renewing yearly subscription, and a
            one-time lifetime purchase. The current prices, and the length of
            any free trial, are shown in the App at the point of purchase and
            in the App Store.
          </p>
          <ul>
            <li>
              Payment is charged to your Apple ID at confirmation of purchase.
            </li>
            <li>
              Subscriptions renew automatically at the end of each billing
              period unless you cancel at least 24 hours before the renewal
              date.
            </li>
            <li>
              Your account is charged for renewal within 24 hours prior to the
              end of the current period, at the price of the plan you selected.
            </li>
            <li>
              You can manage or cancel a subscription in the iOS Settings app
              under your name, then Subscriptions. Cancelling stops future
              renewals; it does not refund the current period.
            </li>
            <li>
              If a free trial is offered and you subscribe before it ends, any
              unused portion of the trial is forfeited, as Apple requires.
            </li>
            <li>
              The lifetime purchase is a one-time, non-consumable purchase. It
              does not renew and is not billed again.
            </li>
            <li>
              You can restore a previous purchase from Settings, then Restore
              Purchases, using the same Apple ID you bought it with.
            </li>
          </ul>

          <h3>Refunds</h3>
          <p>
            All purchases are processed by Apple, and refunds are handled by
            Apple under Apple&rsquo;s policy. We cannot issue refunds directly.
            To request one, visit{" "}
            <a
              href="https://reportaproblem.apple.com"
              target="_blank"
              rel="noreferrer"
            >
              reportaproblem.apple.com
            </a>
            .
          </p>

          <h2>What protection does and does not guarantee</h2>
          <p>
            The shield works from general behavioral rules, not a list of known
            bad domains. That makes it resilient, but no blocker catches
            everything. Some pop-ups, ads, overlays, or redirects will get
            through, and occasionally a legitimate part of a page may be
            suppressed. We do not warrant that any specific site will render
            correctly or that any specific threat will be blocked.
          </p>
          <p>
            Private Mode and location spoofing are local-privacy features. They
            do not hide your IP address, are not a VPN, and do not make you
            anonymous to websites, your network, or your internet provider. Do
            not rely on them for anonymity.
          </p>
          <p>
            Capture X-Ray reports what a page&rsquo;s own code was observed
            reaching for while you were on it. It is a good signal, not a
            complete audit, and it cannot see what a site does on its own
            servers.
          </p>

          <h2>Content you reach through the App</h2>
          <p>
            A browser can reach any website. We do not host, control, endorse,
            or take responsibility for the content of the sites you visit, and
            you use them at your own risk.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The App is provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranty of any kind. We do not guarantee
            that it will be uninterrupted, error-free, or compatible with every
            website.
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
                href="mailto:support@hbkllabs.com"
                className={styles.contactEmail}
              >
                support@hbkllabs.com
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SwatBrowserTerms;
