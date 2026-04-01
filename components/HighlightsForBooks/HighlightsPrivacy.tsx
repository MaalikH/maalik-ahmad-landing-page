import Link from "next/link";
import styles from "./HighlightsPrivacy.module.scss";

const HighlightsPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <Link href="/highlights-for-books" className={styles.backLink}>
          &larr; Back to Highlights for Books
        </Link>

        <header className={styles.header}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>
            Effective date: March 31, 2026
          </p>
        </header>

        <div className={styles.content}>
          <p>
            Highlights for Books (&ldquo;the App&rdquo;) is a macOS application
            developed by Maalik Ahmad. This privacy policy explains how the App
            handles your data.
          </p>

          <h2>No Data Collection</h2>
          <p>
            <strong>
              Highlights for Books does not collect, store, or transmit any
              personal data.
            </strong>{" "}
            The App has no user accounts, no registration, and no cloud
            services. Your information stays entirely on your Mac.
          </p>

          <h2>No Network Connections</h2>
          <p>
            The App makes <strong>zero network connections</strong>. It does not
            connect to the internet for any reason. There is no analytics, no
            telemetry, no crash reporting, and no tracking of any kind.
          </p>

          <h2>Local Data Access</h2>
          <p>
            Highlights for Books reads data from the local Apple Books SQLite
            databases on your Mac, specifically:
          </p>
          <ul>
            <li>
              <strong>BKLibrary</strong> &mdash; your Apple Books library
              metadata
            </li>
            <li>
              <strong>AEAnnotation</strong> &mdash; your highlights, notes, and
              annotations
            </li>
          </ul>
          <p>
            This data is read locally and is never copied, uploaded, or shared
            with anyone. All processing happens entirely on your device.
          </p>

          <h2>File Access Permissions</h2>
          <p>
            The App uses macOS <strong>security-scoped bookmarks</strong> to
            request and remember your permission to access the Apple Books
            database files. This is the standard macOS mechanism for sandboxed
            apps to access files outside their container. You grant permission
            once, and the App remembers it for future sessions.
          </p>

          <h2>Third-Party Services</h2>
          <p>
            Highlights for Books uses <strong>no third-party services</strong>,
            SDKs, frameworks, or libraries that collect data. The App is
            entirely self-contained.
          </p>

          <h2>Children&rsquo;s Privacy</h2>
          <p>
            Since the App collects no data whatsoever, there are no special
            considerations regarding children&rsquo;s privacy. The App is safe
            for users of all ages.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            If this privacy policy is ever updated, the changes will be posted
            on this page with a revised effective date. Given the App&rsquo;s
            zero-data-collection design, material changes are unlikely.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact</h2>
            <p>
              If you have any questions about this privacy policy, please
              contact:
            </p>
            <p>
              <a
                href="mailto:maalik@maalik.dev"
                className={styles.contactEmail}
              >
                maalik@maalik.dev
              </a>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default HighlightsPrivacy;
