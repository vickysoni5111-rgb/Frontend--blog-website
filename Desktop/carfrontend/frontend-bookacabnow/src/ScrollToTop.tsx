import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * ScrollToTop
 * ---------------------------------------------------------------------
 * React Router does NOT reset scroll position on route changes by
 * default — the new page opens wherever the previous page was scrolled
 * to. Mounting this component once inside <Router>, above your <Routes>,
 * fixes that: every time the URL path changes, the window scrolls back
 * to the top.
 *
 * USAGE (in App.tsx):
 *
 *   import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
 *   import ScrollToTop from "./ScrollToTop";
 *
 *   function App() {
 *     return (
 *       <Router>
 *         <ScrollToTop />
 *         <Navbar />
 *         <Routes>
 *           ...
 *         </Routes>
 *         <Footer />
 *       </Router>
 *     );
 *   }
 * ---------------------------------------------------------------------
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);

  return null;
}