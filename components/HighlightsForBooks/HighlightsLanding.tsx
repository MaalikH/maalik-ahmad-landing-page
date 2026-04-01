import Link from "next/link";
import styles from "./HighlightsLanding.module.scss";

const features = [
  {
    icon: "📚",
    title: "Automatic Sync",
    desc: "Reads directly from your Apple Books library. Your highlights appear instantly.",
  },
  {
    icon: "🎨",
    title: "Color-Coded Highlights",
    desc: "See your highlights organized by color, just like in Apple Books.",
  },
  {
    icon: "🔍",
    title: "Powerful Search",
    desc: "Find any highlight or note across your entire library in seconds.",
  },
  {
    icon: "⭐",
    title: "Favorites",
    desc: "Star your most important highlights for quick access later.",
  },
  {
    icon: "📖",
    title: "Chapter Organization",
    desc: "Browse highlights organized by chapter for context and flow.",
  },
  {
    icon: "🔒",
    title: "Privacy-First",
    desc: "No network connections, no analytics, no tracking. Your data never leaves your Mac.",
  },
];

const HighlightsLanding = () => {
  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <h1 className={styles.appName}>Highlights for Books</h1>
        <p className={styles.tagline}>
          Your Apple Books highlights and notes in one beautiful, searchable
          interface.
        </p>
        <div className={styles.platformBadge}>
          <span>Available on the Mac App Store</span>
        </div>
        <div className={styles.ctaGroup}>
          <a
            href="#"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download on the Mac App Store
          </a>
          <span className={styles.price}>$4.99 &middot; macOS 14.0+</span>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Features</h2>
        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requirements */}
      <section className={styles.requirements}>
        <h2 className={styles.sectionTitle}>System Requirements</h2>
        <ul className={styles.requirementsList}>
          <li className={styles.requirementItem}>
            <strong>Platform:</strong> macOS
          </li>
          <li className={styles.requirementItem}>
            <strong>Requires:</strong> macOS 14.0 (Sonoma) or later
          </li>
          <li className={styles.requirementItem}>
            <strong>Price:</strong> $4.99 (one-time purchase)
          </li>
        </ul>
      </section>

      {/* Support */}
      <section className={styles.support}>
        <h2 className={styles.sectionTitle}>Support</h2>
        <p className={styles.supportText}>
          Have a question, found a bug, or need help getting started? Reach out
          and I will get back to you as soon as possible.
        </p>
        <a
          href="mailto:maalik@maalik.dev"
          className={styles.supportEmail}
        >
          maalik@maalik.dev
        </a>
      </section>

      {/* Footer Links */}
      <div className={styles.footerLinks}>
        <Link href="/highlights-for-books/privacy" className={styles.footerLink}>
          Privacy Policy
        </Link>
        <Link href="/" className={styles.footerLink}>
          maalikahmad.tech
        </Link>
      </div>
    </div>
  );
};

export default HighlightsLanding;
