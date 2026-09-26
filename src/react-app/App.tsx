import { useState } from "react";
import "./App.css";

type Page =
	| "HUB"
	| "AI"
	| "VIDEO"
	| "STUDIO"
	| "ACADEMY"
	| "MARKET"
	| "COMMUNITY"
	| "MYSTERY"
	| "CONTACT";

const services = [
	{
		id: "AI" as Page,
		icon: "✦",
		title: "XENOR AI",
		text: "أدوات ذكاء اصطناعي لصناعة الأفكار والمحتوى.",
	},
	{
		id: "VIDEO" as Page,
		icon: "▶",
		title: "XENOR VIDEO",
		text: "محتوى فيديو، أفكار، سيناريوهات وتجارب إبداعية.",
	},
	{
		id: "STUDIO" as Page,
		icon: "◈",
		title: "XENOR STUDIO",
		text: "تصميم وهوية بصرية وإنتاج رقمي.",
	},
	{
		id: "ACADEMY" as Page,
		icon: "◆",
		title: "XENOR ACADEMY",
		text: "تعلم التسويق والتصميم والأدوات الرقمية.",
	},
	{
		id: "MARKET" as Page,
		icon: "◇",
		title: "XENOR MARKET",
		text: "خدمات وحلول رقمية قابلة للتوسع.",
	},
	{
		id: "COMMUNITY" as Page,
		icon: "◎",
		title: "XENOR COMMUNITY",
		text: "مساحة