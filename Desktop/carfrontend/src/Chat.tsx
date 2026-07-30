import React, { useEffect, useRef, useState } from "react";
import {
  Bot,
  Send,
  X,
  Sparkles,
  User,
  Car,
  PlaneTakeoff,
  MapPinned,
} from "lucide-react";

interface Message {
  id: string;
  role: "user" | "bot";
  text: string;
  time: string;
}

type Stage = "name" | "contact" | "address" | "help" | "chat";

// The 3 ready quick questions shown once onboarding is complete
const QUICK_PROMPTS = [
  { label: "Book a cab now", icon: Car },
  { label: "Airport transfer pricing", icon: PlaneTakeoff },
  { label: "Outstation trip rates", icon: MapPinned },
];

const CLOSING_NOTE = "Thank you! Wishing you a safe and pleasant journey! 🚕✨";

const timeNow = () =>
  new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// Small mock "AI" — swap this for a real API call once the backend is ready.
const getBotReply = (input: string): string => {
  const q = input.toLowerCase();

  if (q.includes("airport"))
    return "Airport transfers are available 24/7 with fixed, upfront fares — no surge pricing. Share your pickup airport and drop location and I'll get you a quote.";
  if (q.includes("outstation") || q.includes("trip") || q.includes("city"))
    return "Outstation rides cover one-way and round trips to any city from Jaipur. Tell me your destination and travel date for exact fares.";
  if (q.includes("list") && (q.includes("car") || q.includes("company")))
    return "You can list your car or your company as a partner from the \"List Your Car\" / \"List Your Company\" button in the top menu.";
  if (q.includes("transparent") || q.includes("pricing") || q.includes("price") || q.includes("fare") || q.includes("cost"))
    return "Every fare shown includes base fare, driver charges, and taxes upfront, with no hidden fees added at drop-off.";
  if (q.includes("book") || q.includes("cab") || q.includes("ride"))
    return "Sure! Tell me your pickup city, drop location, and travel date — I'll show you verified cars and clear pricing right away.";
  if (q.includes("cancel"))
    return "No worries. Share your booking ID and I'll walk you through the cancellation and refund policy.";
  if (q.includes("status") || q.includes("track"))
    return "Share your booking ID or registered phone number and I'll pull up your current trip status.";
  if (q.includes("driver"))
    return "All our drivers are ID-verified and background-checked, and each ride comes with 24/7 support.";

  return "Got it! Could you share a few more details so I can help you faster?";
};

const Chat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [stage, setStage] = useState<Stage>("name");
  const [name, setName] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "bot",
      text: "Hi Sir, I hope you are doing very well! 😊 I'm Cabby, your BookACabNow assistant.",
      time: timeNow(),
    },
    {
      id: "ask-name",
      role: "bot",
      text: "Could you please tell me your name?",
      time: timeNow(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-open the assistant as soon as the page loads
  useEffect(() => {
    const t = setTimeout(() => setIsOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  const pushBotMessage = (text: string, delay = 700) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-b-${Math.random()}`, role: "bot", text, time: timeNow() },
      ]);
      setIsTyping(false);
    }, delay);
  };

  const pushUserMessage = (text: string) => {
    setMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-u`, role: "user", text, time: timeNow() },
    ]);
  };

  // Handles the onboarding steps (name -> contact -> address) then hands off to help stage
  const advanceOnboarding = (raw: string) => {
    const trimmed = raw.trim();

    if (stage === "name") {
      const first = trimmed || "there";
      setName(first);
      pushBotMessage(`Nice to meet you, ${first}! Could you share your contact number, please?`);
      setStage("contact");
      return;
    }

    if (stage === "contact") {
      pushBotMessage(
        "Thank you! And your address? This is optional — feel free to type \"skip\" if you'd rather not share it."
      );
      setStage("address");
      return;
    }

    if (stage === "address") {
      pushBotMessage(
        `Perfect, thank you for sharing that, ${name || "there"}! How can I help you today? Here are a few quick options, or just type your question:`
      );
      setStage("help");
      return;
    }
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    pushUserMessage(trimmed);
    setInput("");

    if (stage === "name" || stage === "contact" || stage === "address") {
      advanceOnboarding(trimmed);
      return;
    }

    // stage === "help" or "chat": answer the question, then close with a thank-you note
    setIsTyping(true);
    setTimeout(() => {
      const reply = `${getBotReply(trimmed)}\n\n${CLOSING_NOTE}`;
      setMessages((prev) => [
        ...prev,
        { id: `${Date.now()}-b`, role: "bot", text: reply, time: timeNow() },
      ]);
      setIsTyping(false);
      setStage("chat");
    }, 900 + Math.random() * 500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating launcher button */}
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#0f1f3d] text-white shadow-lg shadow-black/20 flex items-center justify-center hover:scale-105 active:scale-95 transition-transform duration-200 ring-2 ring-amber-400/70"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={22} /> : <Bot size={24} />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white" />
        )}
      </button>

      {/* Chat panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] flex flex-col bg-white border border-gray-200 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden font-sans">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#0f1f3d]">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-[#0f1f3d] shrink-0 font-black text-xs">
              BCN
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-white truncate">Cabby · AI Assistant</p>
              <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
                Online now
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white transition-colors duration-200 p-1"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-gray-50"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex items-end gap-2 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                    <Bot size={12} />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-3.5 py-2 rounded-2xl text-xs leading-relaxed whitespace-pre-line ${
                    m.role === "user"
                      ? "bg-[#0f1f3d] text-white rounded-br-sm"
                      : "bg-white text-gray-700 border border-gray-200 rounded-bl-sm shadow-sm"
                  }`}
                >
                  <p>{m.text}</p>
                  <span
                    className={`block mt-1 text-[9px] ${
                      m.role === "user" ? "text-blue-100/70" : "text-gray-400"
                    }`}
                  >
                    {m.time}
                  </span>
                </div>
                {m.role === "user" && (
                  <div className="w-6 h-6 rounded-full bg-gray-200 border border-gray-300 flex items-center justify-center text-gray-500 shrink-0">
                    <User size={12} />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-end gap-2 justify-start">
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-700 shrink-0">
                  <Bot size={12} />
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" />
                </div>
              </div>
            )}

            {/* Skip button — only during the optional address step */}
            {stage === "address" && !isTyping && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => sendMessage("skip")}
                  className="text-[11px] font-semibold text-blue-700 bg-blue-50 border border-blue-200 rounded-xl px-3 py-2 hover:bg-blue-100 transition-all duration-200"
                >
                  Skip this step
                </button>
              </div>
            )}

            {/* 3 ready quick questions — shown once onboarding is complete */}
            {stage === "help" && !isTyping && (
              <div className="pt-1 flex flex-col gap-2">
                {QUICK_PROMPTS.map(({ label, icon: Icon }) => (
                  <button
                    key={label}
                    type="button"
                    onClick={() => sendMessage(label)}
                    className="flex items-center gap-2 text-[11px] font-medium text-gray-700 bg-white border border-gray-200 rounded-xl px-3 py-2.5 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 text-left shadow-sm"
                  >
                    <Icon size={13} className="text-blue-700 shrink-0" />
                    <span className="truncate">{label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-3 py-3 bg-white border-t border-gray-200"
          >
            <div className="flex-1 flex items-center bg-gray-50 border border-gray-200 rounded-xl px-3 py-2 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200">
              <Sparkles size={13} className="text-blue-600 mr-2 shrink-0" />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={
                  stage === "name"
                    ? "Type your name..."
                    : stage === "contact"
                    ? "Type your contact number..."
                    : stage === "address"
                    ? "Type your address, or skip..."
                    : "Ask about fares, bookings, routes..."
                }
                className="w-full bg-transparent text-xs text-gray-800 placeholder-gray-400 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 shrink-0 rounded-xl bg-[#0f1f3d] hover:bg-[#16305c] disabled:bg-gray-300 disabled:cursor-not-allowed active:scale-90 text-white flex items-center justify-center transition-all duration-200 shadow-md shadow-black/10"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chat;