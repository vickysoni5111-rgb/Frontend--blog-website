"use client";

import { useEffect, useState } from "react";
import { translateText } from "@/lib/translate";

export default function ClientPost({ post, children }) {
  const [tTitle, setTTitle] = useState(post.title);
  const [tContent, setTContent] = useState(post.content);
  const [tFaq, setTFaq] = useState(post.faq || []);

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";

    if (lang !== "en") {
      // title
      translateText(post.title, lang).then(setTTitle);

      // FULL HTML CONTENT
      translateText(post.content, lang).then(setTContent);

      // FAQ
      if (post.faq) {
        Promise.all(
          post.faq.map(async (f) => ({
            question: await translateText(f.question, lang),
            answer: await translateText(f.answer, lang),
          }))
        ).then(setTFaq);
      }
    }
  }, [post]);

  return children({
    tTitle,
    tContent,
    tFaq,
  });
}