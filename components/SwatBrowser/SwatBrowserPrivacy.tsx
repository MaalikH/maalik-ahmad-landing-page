import Link from "next/link";
import styles from "./SwatBrowserLegal.module.scss";

const SwatBrowserPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/swatbrowser/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/swatbrowser/terms" className={styles.navLink}>
            Terms
          </Link>
          <Link href="/swatbrowser/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>SwatBrowser</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Last updated: July 23, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            SwatBrowser (&ldquo;the App&rdquo;) is an iOS web browser developed
            by Maalik Ahmad and operated by HBKL Labs. This policy describes
            exactly what the App stores, what it sends, and to whom. It is
            written to be checkable against how the App actually behaves rather
            than to be reassuring.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>
              There is no SwatBrowser account and no SwatBrowser server. You
              cannot sign in, because there is nothing to sign in to.
            </li>
            <li>
              Your browsing history, bookmarks, tabs, downloads, protection
              stats, and Capture X-Ray records are stored on your device and
              are not transmitted anywhere.
            </li>
            <li>
              The App contains no analytics SDK, no crash-reporting SDK, no
              advertising SDK, and no third-party tracking of any kind.
            </li>
            <li>
              Purchases are handled entirely by Apple. We never see your card
              number, billing address, or Apple ID.
            </li>
          </ul>

          <h2>What SwatBrowser stores on your device</h2>
          <p>
            All of the following is written to the App&rsquo;s own storage
            container on your iPhone or iPad. None of it is uploaded, synced,
            or backed up to us:
          </p>
          <ul>
            <li>
              <strong>Bookmarks</strong>, including the site icon fetched from
              that site.
            </li>
            <li>
              <strong>Browsing history</strong>, capped at the most recent
              1,000 entries. Private tabs are never recorded.
            </li>
            <li>
              <strong>Open tabs and tab previews</strong>, so your session is
              restored when you come back. Private tabs do not write previews
              to disk.
            </li>
            <li>
              <strong>Protection report data</strong>: the counts and the
              recent list of what the shield blocked, including the site it
              happened on. Private tabs never feed this.
            </li>
            <li>
              <strong>Capture X-Ray history</strong> (a Pro feature): a
              per-site record of what kinds of data a site&rsquo;s own code
              reached for. Private tabs never feed this either.
            </li>
            <li>
              <strong>Downloads</strong> you started, saved in the App&rsquo;s
              Documents folder.
            </li>
            <li>
              <strong>Your settings</strong>: private mode, anti-fingerprint,
              WebRTC blocking, spoofed location, address bar layout, Spotlight
              indexing, and Handoff.
            </li>
          </ul>
          <p>
            You can clear browsing history at any time from Settings, and
            deleting the App removes everything above.
          </p>

          <h2>What SwatBrowser sends over the network</h2>
          <p>
            This is the complete list of network connections the App itself
            makes. Everything else on the wire is a request you made by
            visiting a page.
          </p>
          <ul>
            <li>
              <strong>The websites you visit.</strong> A browser connects
              directly to the sites you open, from your own IP address. Those
              sites see what any site sees when you visit it. SwatBrowser does
              not proxy, route, or log that traffic.
            </li>
            <li>
              <strong>Site icons.</strong> When you bookmark a page, the App
              requests that site&rsquo;s icon file from that same site.
            </li>
            <li>
              <strong>Search.</strong> If what you type in the address bar is
              not a URL, it is sent to Google Search as a query. Google&rsquo;s{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                privacy policy
              </a>{" "}
              applies to that search, exactly as it would in any browser. To
              avoid it, type a full address instead.
            </li>
            <li>
              <strong>The App Store.</strong> Apple&rsquo;s StoreKit contacts
              Apple to load subscription prices and to check whether your
              purchase is active.
            </li>
          </ul>
          <p>
            There is no SwatBrowser backend, so your browsing history, the
            pages you open, the searches you run, and the things the shield
            blocked are never sent to us. We could not look at them if we
            wanted to.
          </p>

          <h2>Private Mode</h2>
          <p>
            With Private Mode on, new tabs use an in-memory-only web data
            store. Cookies, cache, local storage, and site data for those tabs
            are never written to disk and are released when the private
            session ends. Private tabs are not recorded in history, are never
            indexed in Spotlight, are never handed off to your other Apple
            devices, and never feed the protection report or Capture X-Ray
            history.
          </p>
          <p>
            <strong>What Private Mode is not.</strong> It does not hide your IP
            address, it is not a VPN, and it does not make you anonymous to the
            sites you visit, your network, or your internet provider. It is a
            local-privacy tool.
          </p>

          <h2>Capture X-Ray</h2>
          <p>
            Capture X-Ray shows you what the page you are on reached for:
            fingerprinting reads, sensor and permission requests, and outbound
            requests to tracking hosts. It works by observing the page&rsquo;s
            own JavaScript inside the tab and reporting what it saw to the App
            through an internal in-app bridge.
          </p>
          <p>
            That report never touches the network. The live panel exists only
            for the page currently on screen and is cleared on every new
            navigation. The Pro per-site history is stored in the App&rsquo;s
            private container on your device, is fed only by non-private tabs,
            and is never transmitted.
          </p>

          <h2>Location spoofing</h2>
          <p>
            Choosing a spoofed location changes the coordinates, time zone, and
            language that a website&rsquo;s JavaScript sees. It is a
            client-side override only. The App does not request iOS location
            permission and does not read your real location. Spoofing does not
            change your IP address, so it is not a way to hide where you are at
            the network level.
          </p>

          <h2>Permissions the App does not request</h2>
          <ul>
            <li>Location</li>
            <li>Camera and microphone</li>
            <li>Contacts, calendars, and reminders</li>
            <li>Photos</li>
            <li>Health, motion, or Bluetooth data</li>
          </ul>

          <h2>The Safari blocker, share sheet, and widgets</h2>
          <ul>
            <li>
              <strong>Safari content blocker.</strong> The App ships an
              optional blocker you can enable for Safari. It is a static rule
              list that iOS applies inside Safari. By Apple&rsquo;s design a
              content blocker cannot see or report your browsing, and this one
              sends nothing anywhere.
            </li>
            <li>
              <strong>Share extension.</strong> When you share a link to
              SwatBrowser, the extension receives that one URL and hands it to
              the App to open. It is not stored or sent.
            </li>
            <li>
              <strong>Widgets and Shortcuts.</strong> These read a small count
              of how many things the shield has blocked from a shared container
              on your device. No URLs are exposed to them.
            </li>
          </ul>

          <h2>Purchases</h2>
          <p>
            SwatBrowser Pro is sold through Apple&rsquo;s in-app purchase
            system using StoreKit 2 directly. There is no third-party purchase
            or subscription SDK. Apple processes the payment and tells the App
            only whether a purchase is currently active. We never receive your
            payment method, name, email address, or Apple ID, and your
            entitlement check happens on your device.
          </p>

          <h2>Third parties</h2>
          <p>
            We do not share your data with anyone, because we do not have it.
            Three parties are involved in normal use, and only in the ways
            described above:
          </p>
          <ul>
            <li>
              <strong>The websites you choose to visit.</strong> Their own
              privacy policies govern what they do.
            </li>
            <li>
              <strong>Apple</strong>, for in-app purchases and App Store
              delivery.{" "}
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                Apple privacy
              </a>
              .
            </li>
            <li>
              <strong>Google</strong>, only for searches you run from the
              address bar.
            </li>
          </ul>

          <h2>Your rights and choices</h2>
          <ul>
            <li>
              <strong>Delete your data.</strong> Settings, then Clear browsing
              history, wipes your history and the stored website data behind
              it. Deleting the App removes everything else.
            </li>
            <li>
              <strong>There is no data request to make.</strong> We hold no
              account, no profile, and no copy of your browsing, so there is
              nothing for us to export or delete on our side.
            </li>
            <li>
              <strong>Turn features off.</strong> Spotlight indexing of history
              and Handoff are both off by default and can stay off.
            </li>
          </ul>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            SwatBrowser is a general-purpose web browser and is not directed at
            children. We do not knowingly collect personal information from
            children under 13, or from anyone else, because the App does not
            collect personal information at all. Note that a browser can reach
            any website, so parents should use iOS Screen Time and content
            restrictions where appropriate.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If the App ever starts collecting or transmitting anything, this
            policy will be updated before that version ships, and the change
            will be reflected in the App Store privacy details. Minor edits
            such as typo fixes may happen without notice.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>
              Questions about this policy, or something in the App that does
              not match it? Email:
            </p>
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

export default SwatBrowserPrivacy;
