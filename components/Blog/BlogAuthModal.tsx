import React, { useState, FormEvent, useEffect } from "react";
import { useBlogAuth } from "@/context/BlogAuthContext";
import styles from "./BlogAuthModal.module.scss";

interface BlogAuthModalProps {
  onSuccess?: () => void;
}

const BlogAuthModal: React.FC<BlogAuthModalProps> = ({ onSuccess }) => {
  const { authenticate, isAuthenticated } = useBlogAuth();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      setIsVisible(false);
      onSuccess?.();
    }
  }, [isAuthenticated, onSuccess]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    const result = await authenticate(password);

    if (!result.success) {
      setError(result.error || "Incorrect password");
      setIsSubmitting(false);
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" aria-labelledby="auth-title">
      <div className={styles.modal}>
        <h2 id="auth-title" className={styles.title}>
          Enter Password
        </h2>
        <p className={styles.instruction}>
          Enter the password to access the blog.
        </p>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className={styles.input}
            disabled={isSubmitting}
            autoFocus
            aria-label="Blog password"
          />
          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting || !password.trim()}
          >
            {isSubmitting ? "Checking..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogAuthModal;
