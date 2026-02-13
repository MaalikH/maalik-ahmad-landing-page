import { useState } from "react";
import styles from "./BlogSubscribe.module.scss";
import { trackSubscribe } from "@/lib/analytics";

interface SubscribeStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const BlogSubscribe = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubscribeStatus>({ type: 'idle' });
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateEmail = (value: string): boolean => {
    if (!value.trim()) {
      setEmailError("Email is required");
      return false;
    }
    if (!emailRegex.test(value.trim())) {
      setEmailError("Please enter a valid email address");
      return false;
    }
    setEmailError(null);
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return;
    }

    setStatus({ type: 'loading' });

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = { success: false, error: 'Server error. Please try again.' };
      }

      if (response.ok && result.success) {
        setStatus({
          type: 'success',
          message: "You're subscribed! Check your inbox for a welcome email."
        });
        trackSubscribe(true);
        setEmail("");
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.'
        });
        trackSubscribe(false);
      }
    } catch (error) {
      console.error('Subscription failed:', error);
      setStatus({
        type: 'error',
        message: 'Unable to subscribe. Please check your connection and try again.'
      });
      trackSubscribe(false);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(null);
    }
  };

  if (status.type === 'success') {
    return (
      <div className={styles.subscribeContainer}>
        <div className={styles.successState}>
          <svg className={styles.successIcon} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p className={styles.successMessage}>{status.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.subscribeContainer}>
      <div className={styles.content}>
        <h3 className={styles.title}>Stay Updated</h3>
        <p className={styles.description}>
          Get notified when I publish new posts about development, design, and building products.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            disabled={status.type === 'loading'}
            className={emailError ? styles.inputError : ''}
            aria-label="Email address"
          />
          {emailError && <span className={styles.error}>{emailError}</span>}
        </div>

        <button
          type="submit"
          className={styles.submitButton}
          disabled={status.type === 'loading'}
        >
          {status.type === 'loading' ? (
            <>
              <span className={styles.spinner} />
              Subscribing...
            </>
          ) : (
            'Subscribe'
          )}
        </button>
      </form>

      {status.type === 'error' && (
        <p className={styles.errorMessage}>{status.message}</p>
      )}

      <p className={styles.privacyNote}>
        No spam. Unsubscribe anytime.
      </p>
    </div>
  );
};

export default BlogSubscribe;
