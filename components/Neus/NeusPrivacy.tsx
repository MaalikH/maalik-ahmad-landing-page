import Link from "next/link";
import styles from "./NeusLegal.module.scss";

const NeusPrivacy = () => {
  return (
    <div className={styles.page}>
      <article className={styles.article}>
        <nav className={styles.nav}>
          <Link href="/neus/privacy" className={styles.navLinkActive}>
            Privacy Policy
          </Link>
          <Link href="/neus/support" className={styles.navLink}>
            Support
          </Link>
        </nav>

        <header className={styles.header}>
          <p className={styles.appName}>Neus</p>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.effectiveDate}>Last updated: May 17, 2026</p>
        </header>

        <div className={styles.content}>
          <p>
            This policy explains what data Neus collects, why, and what you can
            do about it. It is written to be read, not skimmed past. If
            anything here is unclear, email us.
          </p>

          <h2>The short version</h2>
          <ul>
            <li>We collect as little as possible.</li>
            <li>
              We do not sell your data. We do not run ads. We do not track you
              across other apps or websites.
            </li>
            <li>
              You can delete your account and all associated data from inside
              the app at any time.
            </li>
          </ul>

          <h2>What we collect</h2>

          <h3>If you use Neus as a guest (no sign-in)</h3>
          <p>
            Nothing leaves your device. Your saved articles, followed events,
            followed sources, and preferences are stored locally in
            iOS&rsquo;s UserDefaults. We cannot see them.
          </p>

          <h3>If you sign in (Apple or Google)</h3>
          <p>When you sign in with Apple or Google, we receive:</p>
          <ul>
            <li>
              <strong>Your email address.</strong> Used as your account
              identifier so your data syncs across devices. If you choose
              Apple&rsquo;s &ldquo;Hide My Email,&rdquo; we only ever see the
              relay address.
            </li>
            <li>
              <strong>A user ID from the sign-in provider.</strong> Used to
              link sessions to your account.
            </li>
          </ul>
          <p>
            We do not receive your name, profile picture, contact list, or any
            other profile data.
          </p>
          <p>
            Once signed in, we store the following in our Supabase database,
            tied to your user ID:
          </p>
          <ul>
            <li>Articles you save</li>
            <li>Events you follow</li>
            <li>Sources you follow, prefer, or hide</li>
            <li>Feed preferences (which categories you&rsquo;ve picked)</li>
            <li>Notification preferences (if you opted in)</li>
          </ul>

          <h3>If you enable push notifications</h3>
          <p>
            We store your device&rsquo;s push token so Apple&rsquo;s servers
            can deliver notifications to your device. The token is tied to
            your user ID. If you disable notifications in iOS Settings, we
            stop using the token, and stale tokens are cleaned up
            automatically.
          </p>

          <h3>What we do NOT collect</h3>
          <ul>
            <li>Location data</li>
            <li>Contacts</li>
            <li>Photos</li>
            <li>Microphone or camera access</li>
            <li>Browsing history outside Neus</li>
            <li>Analytics or crash reports from third-party SDKs</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>
              <strong>App functionality only.</strong> Your saves, follows,
              and preferences exist so the app works across your devices.
            </li>
            <li>
              <strong>Push notifications.</strong> Only if you opt in, and
              only to alert you to breaking news or followed events.
            </li>
            <li>
              <strong>No advertising.</strong> We do not share or sell data to
              advertisers, data brokers, or anyone else.
            </li>
          </ul>

          <h2>Who else sees your data (processors)</h2>
          <p>
            Neus relies on a few third-party services to operate. They process
            data on our behalf and are bound by their own privacy terms:
          </p>
          <ul>
            <li>
              <strong>Supabase</strong> (
              <a
                href="https://supabase.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                privacy
              </a>
              ). Hosts our database and authentication. Your account data and
              saves live here.
            </li>
            <li>
              <strong>Apple Push Notification service</strong> (
              <a
                href="https://www.apple.com/legal/privacy/"
                target="_blank"
                rel="noreferrer"
              >
                privacy
              </a>
              ). Delivers push notifications. Apple sees the device token and
              notification payload.
            </li>
            <li>
              <strong>Google Sign-In</strong> (
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noreferrer"
              >
                privacy
              </a>
              ). Only if you chose Google to sign in. Google sees the sign-in
              event, not your in-app activity.
            </li>
            <li>
              <strong>EventRegistry</strong> (
              <a
                href="https://eventregistry.org/privacy"
                target="_blank"
                rel="noreferrer"
              >
                privacy
              </a>
              ). Supplies the news articles you read. EventRegistry does not
              receive your user data; we fetch articles server-side on a
              schedule, not per user.
            </li>
          </ul>
          <p>We do not share your data with anyone else.</p>

          <h2>Your rights</h2>
          <ul>
            <li>
              <strong>Delete your account.</strong> Open the app, go to
              Profile, then Delete Account. This wipes all your saves,
              follows, preferences, and device tokens immediately.
            </li>
            <li>
              <strong>Sign out.</strong> Profile, then Sign Out. Your data
              stays in your account; sign back in any time to restore it.
            </li>
            <li>
              <strong>Export your data.</strong> Email us and we&rsquo;ll
              send you a JSON export within 30 days.
            </li>
            <li>
              <strong>Opt out of notifications.</strong> Toggle off in
              Profile, then Notifications, or disable in iOS Settings.
            </li>
          </ul>

          <h2>Data retention</h2>
          <ul>
            <li>Account data is kept while your account is active.</li>
            <li>
              Deletion is immediate. We do not retain a shadow copy for legal
              holds.
            </li>
            <li>
              Push tokens older than 30 days without re-validation are cleaned
              up automatically.
            </li>
          </ul>

          <h2>Children&rsquo;s privacy</h2>
          <p>
            Neus is rated 12+ because news content can include mature topics.
            We do not knowingly collect data from children under 13. If you
            believe a child has signed up, email us and we&rsquo;ll delete the
            account.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            If we change this policy in a meaningful way, we&rsquo;ll notify
            you in the app before the change takes effect. Minor edits
            (typos, clarifications) may happen silently.
          </p>

          <div className={styles.contactSection}>
            <h2>Contact us</h2>
            <p>
              If you have questions or concerns about this privacy policy or
              your data, please contact us at:
            </p>
            <p>
              <a
                href="mailto:maalikahmadtech@gmail.com"
                className={styles.contactEmail}
              >
                maalikahmadtech@gmail.com
              </a>
            </p>
            <p>We typically reply within a few days.</p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NeusPrivacy;
