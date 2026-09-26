import { useState } from "react";
import "./App.css";

type Page =
  | "HOME"
  | "HUB"
  | "AI"
  | "VIDEO"
  | "STUDIO"
  | "ACADEMY"
  | "MARKET"
  | "COMMUNITY"
  | "MYSTERY"
  | "CONNECT"
  | "ADMIN";

const modules = [
  { id: "AI" as Page, icon: "✦", title: "XENOR AI", text: "AI tools & intelligent creation" },
  { id: "VIDEO" as Page, icon: "▶", title: "XENOR VIDEO", text: "Ideas, scripts & video creation" },
  { id: "STUDIO" as Page, icon: "◈", title: "XENOR STUDIO", text: "Design, branding & production" },
  { id: "ACADEMY" as Page, icon: "◆", title: "XENOR ACADEMY", text: "Learn. Create. Grow." },
  { id: "MARKET" as Page, icon: "◇", title: "XENOR MARKET", text: "Digital services & products" },
  { id: "COMMUNITY" as Page, icon: "◎", title: "XENOR COMMUNITY", text: "Connect with XENOR" },
];

function App() {
  const [page, setPage] = useState<Page>("HOME");
  const [menu, setMenu] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [mystery, setMystery] = useState("");

  const go = (next: Page) => {
    setPage(next);
    setMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const generateAI = () => {
    if (!prompt.trim()) {
      setResult("اكتب فكرتك أولًا، وXENOR AI سيجهز لك بداية إبداعية.");
      return;
    }

    setResult(
      `XENOR AI Concept\n\nالفكرة: ${prompt}\n\nالاتجاه المقترح: محتوى حديث يجمع الهوية البصرية، الرسالة التسويقية والتجربة الرقمية.`
    );
  };

  const openMystery = () => {
    const items = [
      "🎯 فكرة حملة رقمية جديدة",
      "🎬 فكرة فيديو قصيرة",
      "✨ فكرة Branding مختلفة",
      "🤖 تجربة XENOR AI",
      "🚀 فكرة مشروع رقمي",
    ];

    set