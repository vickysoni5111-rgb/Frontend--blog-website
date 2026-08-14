// "use client";

// import { useEffect, useState } from "react";
// import Script from "next/script";

// export default function GoogleTranslate() {
//   const [ready, setReady] = useState(false);

//   useEffect(() => {
//     window.googleTranslateElementInit = () => {
//       try {
//         if (
//           window.google &&
//           window.google.translate &&
//           typeof window.google.translate.TranslateElement === "function"
//         ) {
//           window.google.translate.TranslateElement(
//             {
//               pageLanguage: "en",
//               includedLanguages:
//                 "en,hi,gu,mr,bn,ta,te,kn,ml,pa,ur,fr,de,es,ar,ja,ko,zh-CN",
//               autoDisplay: false,
//             },
//             "google_translate_hidden"
//           );

//           setReady(true);
//         }
//       } catch (error) {
//         console.error("Google Translate Error:", error);
//       }
//     };

//     return () => {
//       delete window.googleTranslateElementInit;
//     };
//   }, []);

//   const changeLanguage = (language) => {
//     const select = document.querySelector(".goog-te-combo");

//     if (!select) {
//       console.warn("Google Translate dropdown is not ready.");
//       return;
//     }

//     select.value = language;

//     select.dispatchEvent(new Event("change", { bubbles: true }));
//   };

//   return (
//     <>
//       <Script
//         src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
//         strategy="afterInteractive"
//       />

//       <div
//         id="google_translate_hidden"
//         style={{
//           position: "fixed",
//           left: "-9999px",
//           top: "-9999px",
//           width: "1px",
//           height: "1px",
//           overflow: "hidden",
//         }}
//       />

//       <div className="flex items-center gap-2">

//         <button
//           type="button"
//           onClick={() => changeLanguage("en")}
//           className="px-3 py-2 rounded-md border border-gray-300 bg-white text-black text-sm font-medium hover:bg-gray-100 transition"
//         >
//           EN
//         </button>

//         <button
//           type="button"
//           onClick={() => changeLanguage("hi")}
//           className="px-3 py-2 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
//         >
//           हिंदी
//         </button>

//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  useEffect(() => {
    window.googleTranslateElementInit = () => {
      try {
        if (
          window.google &&
          window.google.translate &&
          typeof window.google.translate.TranslateElement === "function"
        ) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages:
                "en,hi,gu,mr,bn,ta,te,kn,ml,pa,ur,fr,de,es,ar,ja,ko,zh-CN",
              autoDisplay: false,
            },
            "google_translate_hidden"
          );

          setReady(true);
        }
      } catch (error) {
        console.error("Google Translate Error:", error);
      }
    };

    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);

  const changeLanguage = (language, label) => {
    const select = document.querySelector(".goog-te-combo");

    if (!select) {
      console.warn("Google Translate dropdown is not ready.");
      return;
    }

    select.value = language;
    select.dispatchEvent(new Event("change", { bubbles: true }));

    setCurrentLanguage(label);
    setOpen(false);
  };

  const languages = [
    {
      code: "en",
      label: "English",
      short: "EN",
    },
    {
      code: "hi",
      label: "हिंदी",
      short: "हिंदी",
    },
    {
      code: "gu",
      label: "ગુજરાતી",
      short: "ગુજરાતી",
    },
    {
      code: "mr",
      label: "मराठी",
      short: "मराठी",
    },
    {
      code: "bn",
      label: "বাংলা",
      short: "বাংলা",
    },
    {
      code: "ta",
      label: "தமிழ்",
      short: "தமிழ்",
    },
    {
      code: "te",
      label: "తెలుగు",
      short: "తెలుగు",
    },
    {
      code: "kn",
      label: "ಕನ್ನಡ",
      short: "ಕನ್ನಡ",
    },
    {
      code: "ml",
      label: "മലയാളം",
      short: "മലയാളം",
    },
    {
      code: "pa",
      label: "ਪੰਜਾਬੀ",
      short: "ਪੰਜਾਬੀ",
    },
    {
      code: "ur",
      label: "اردو",
      short: "اردو",
    },
    {
      code: "fr",
      label: "Français",
      short: "FR",
    },
    {
      code: "de",
      label: "Deutsch",
      short: "DE",
    },
    {
      code: "es",
      label: "Español",
      short: "ES",
    },
    {
      code: "ar",
      label: "العربية",
      short: "AR",
    },
    {
      code: "ja",
      label: "日本語",
      short: "日本語",
    },
    {
      code: "ko",
      label: "한국어",
      short: "한국어",
    },
    {
      code: "zh-CN",
      label: "中文",
      short: "中文",
    },
  ];

  return (
    <>
      {/* Google Translate Script */}
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      {/* Hidden Google Translate Element */}
      <div
        id="google_translate_hidden"
        style={{
          position: "fixed",
          left: "-9999px",
          top: "-9999px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />

      {/* LANGUAGE SELECTOR */}
      <div className="relative notranslate" translate="no">

        {/* Main Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          disabled={!ready}
          className="
            flex items-center gap-2
            px-3 py-2
            rounded-md
            border border-gray-300
            bg-white
            text-black
            text-sm
            font-medium
            hover:bg-gray-100
            transition
            disabled:opacity-60
          "
        >
          <span>🌐</span>

          <span>{currentLanguage}</span>

          <span
            className={`text-xs transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </button>

        {/* Dropdown */}
        {open && (
          <div
            className="
              absolute
              right-0
              top-full
              mt-2
              w-48
              max-h-80
              overflow-y-auto
              bg-white
              border border-gray-200
              rounded-lg
              shadow-xl
              z-[9999]
              py-1
            "
          >
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                onClick={() =>
                  changeLanguage(language.code, language.short)
                }
                className={`
                  w-full
                  text-left
                  px-4
                  py-2.5
                  text-sm
                  transition
                  ${
                    currentLanguage === language.short
                      ? "bg-red-50 text-red-500 font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {language.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
}