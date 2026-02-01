import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

interface BlogAuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  authenticate: (password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const BlogAuthContext = createContext<BlogAuthContextType | undefined>(undefined);

const STORAGE_KEY = "blog_auth";

interface BlogAuthProviderProps {
  children: ReactNode;
}

export function BlogAuthProvider({ children }: BlogAuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "true") {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const authenticate = useCallback(
    async (password: string): Promise<{ success: boolean; error?: string }> => {
      try {
        const response = await fetch("/api/blog/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ password }),
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem(STORAGE_KEY, "true");
          setIsAuthenticated(true);
          return { success: true };
        }

        return { success: false, error: data.error || "Authentication failed" };
      } catch {
        return { success: false, error: "Network error. Please try again." };
      }
    },
    []
  );

  const logout = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  }, []);

  return (
    <BlogAuthContext.Provider
      value={{ isAuthenticated, isLoading, authenticate, logout }}
    >
      {children}
    </BlogAuthContext.Provider>
  );
}

export function useBlogAuth(): BlogAuthContextType {
  const context = useContext(BlogAuthContext);
  if (context === undefined) {
    throw new Error("useBlogAuth must be used within a BlogAuthProvider");
  }
  return context;
}
