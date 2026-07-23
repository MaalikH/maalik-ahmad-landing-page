import Link from "next/link";
import styles from "./SwatBrowserLegal.module.scss";

const SwatBrowserSupport = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/swatbrowser/privacy" className={styles.navLink}>
            Privacy Policy
          </Link>
          <Link href="/swatbrowser/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/swatbrowser/support" className={styles.navLinkActive}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>SwatBrowser</p>
          <h1 className={styles.title}>Support</h1>
        </header>

        <div className={styles.content}>
          <p>
            SwatBrowser is an iOS web browser built to shut down the hostile
            side of the web: pop-ups, popunders, tab-napping redirects,
            clickjacking overlays, and the full-screen gates that hijack a
            page. It also shows you, live, what the site you are on reached for,
            and it keeps everything it knows on your device.
          </p>
          <p>Check the FAQ below or reach out directly.</p>

          <div
            className={`${styles.contactSection} ${styles.contactSectionFlush}`}
          >
            <h2>Contact us</h2>
            <p>For questions, bug reports, or feedback, please email:</p>
            <p>
              <a
                href="mailto:support@hbkllabs.com"
                className={styles.contactEmail}
              >
                support@hbkllabs.com
              </a>
            </p>
            <p>We typically respond within 1&ndash;2 business days.</p>
          </div>

          <h2>Frequently Asked Questions</h2>

          <div className={styles.faqItem}>
            <h3>Do I need an account?</h3>
            <p>
              No. There is no sign-in and no SwatBrowser server. Everything the
              browser stores lives on your device.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How does the pop-up blocking work?</h3>
            <p>
              SwatBrowser judges behavior rather than keeping a list of bad
              domains. A new window is allowed only when it is the direct result
              of one deliberate tap from you, so auto-fired pop-ups and
              piggybacked popunders never open. Oversized, transparent, or
              off-screen offsite links layered over a page are removed as the
              page loads and again whenever the page changes, and injected
              full-screen gates and dimming backdrops are stripped while
              legitimate same-site dialogs are left alone.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Something got through, or a page broke. What now?</h3>
            <p>
              Use Freeze Page from Settings to lock the page as it is so nothing
              new can appear, or Block Element to tap the specific ad or overlay
              you want gone. If a page you rely on renders incorrectly, email us
              the address and we will tune the rules.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What is Capture X-Ray?</h3>
            <p>
              A live panel showing what the current page&rsquo;s own code
              reached for: fingerprinting reads such as canvas and WebGL,
              sensor and permission requests, and outbound requests to tracking
              hosts. The panel resets on every new page. Pro also keeps a
              per-site history so you can see which sites grab the most over
              time. All of it stays on your device.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What does Private Mode actually do?</h3>
            <p>
              New tabs opened while it is on keep cookies, cache, and site data
              in memory only, never write them to disk, and are not recorded in
              history, Spotlight, Handoff, or the protection report. Because a
              tab&rsquo;s data store is fixed when the tab is created, turning
              Private Mode on does not convert tabs that are already open.
            </p>
            <p>
              Private Mode does not hide your IP address and is not a VPN. It
              protects what is left on your phone, not what your network can
              see.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What does spoofing my location do?</h3>
            <p>
              It sends websites the coordinates, time zone, and language of the
              city you picked when their code asks. It is a browser-side
              override. It does not change your IP address, so sites that infer
              location from your network will still see where you really are.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I turn on the Safari blocker?</h3>
            <p>
              Open Settings inside SwatBrowser and tap Enable Safari blocker,
              which walks you through it and can recheck the status. The switch
              itself lives in the iOS Settings app under Safari, then
              Extensions, then SwatBrowserBlocker. It is optional, it filters ad
              networks and clutter in Safari, and it does not include the
              pop-up and overlay handling you get inside SwatBrowser itself.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I clear my history?</h3>
            <p>
              Settings, then Clear browsing history. That wipes the history list
              immediately and clears the stored website data behind it. Cookies
              are kept on purpose so you stay signed in to the sites you use.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>What do I get with Pro, and how do I manage it?</h3>
            <p>
              Pro unlocks the browser and everything in it. It is available as a
              monthly or yearly subscription, both with a free trial where
              offered, or as a one-time lifetime purchase. To change or cancel a
              subscription, open the iOS Settings app, tap your name,
              then Subscriptions, then SwatBrowser. Cancelling takes effect at
              the end of the current billing period.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>I already paid but the app is asking me to subscribe.</h3>
            <p>
              Open Settings and tap Restore Purchases, making sure you are
              signed in with the same Apple ID you bought with. If it still does
              not unlock, email us and include which plan you bought and roughly
              when.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I get a refund?</h3>
            <p>
              Apple handles all purchases and all refunds. Request one at{" "}
              <a
                href="https://reportaproblem.apple.com"
                target="_blank"
                rel="noreferrer"
              >
                reportaproblem.apple.com
              </a>
              .
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Where did my downloads go?</h3>
            <p>
              Files you download are saved inside the app and listed under
              Downloads in the menu. From there you can share or save a file
              anywhere else on your device.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default SwatBrowserSupport;
