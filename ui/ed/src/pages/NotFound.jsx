
import { motion } from "framer-motion";

/**
 * NotFound.jsx
 * A production-ready, accessible 404 / NotFound React component.
 * - Default export React component
 * - Tailwind classes (no extra CSS file required)
 * - Uses Framer Motion for subtle entrance animation
 * - Props: onRetry (optional), homeHref (optional)
 *
 * Usage:
 * <NotFound />
 * <NotFound homeHref="/" onRetry={() => window.location.reload()} />
 */

export default function NotFound({ onRetry, homeHref = "/" }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        role="main"
        className="max-w-3xl w-full text-center"
      >
       

        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
          404 — Page not found
        </h1>

        <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Oops — we can’t find the page you’re looking for. It might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        <div className="mt-8 flex gap-3 items-center justify-center">
          <a
            href={homeHref}
            className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-indigo-600 text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Go home
          </a>

          {onRetry ? (
            <button
              onClick={onRetry}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-200 shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Retry
            </button>
          ) : (
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 text-gray-700 dark:text-gray-200 shadow-sm hover:brightness-95 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Go back
            </button>
          )}
        </div>

        <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          If you think this is an error, contact support or try refreshing the page.
        </p>
      </motion.main>
    </div>
  );
}
