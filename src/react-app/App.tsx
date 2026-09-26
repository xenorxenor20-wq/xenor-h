// src/App.tsx

import { useState } from "react";
import "./App.css";

const sections = [
	{ title: "XENOR AI", icon: "✦", text: "ذكاء اصطناعي وأدوات رقمية", action: "AI" },
	{ title: "XENOR Video", icon: "▶", text: "فيديو ومحتوى إبداعي", action: "Video" },
	{ title: "XENOR Studio", icon: "◈", text: "تصميم وإنتاج رقمي", action: "Studio" },
	{ title: "XENOR Academy", icon: "◆", text: "تعلم وتطوير المهارات", action: "Academy" },
	{ title: "XENOR Market", icon: "◇", text: "خدمات ومنتجات رقمية", action: "Market" },
	{ title: "XENOR Community", icon: "◎", text: "مجتمع XENOR", action: "Community" },
];

function App() {
	const [active, setActive] = useState("HUB");

	return (
		<div className="xenor-app">
			<header className="xenor-header">
				<div className="brand">
					<div className="brand-mark">X</div>
					<div>
						<div className="brand-name">XENOR</div>
						<div className="brand-subtitle">
							INTEGRATED MARKETING & DIGITAL SOLUTIONS
						</div>
					</div>
				</div>

				<nav>
					<button
						className={active === "HUB" ? "nav-active" : ""}
						onClick={() => setActive("HUB")}
					>
						HUB
					</button>
					<button onClick={() => setActive("AI")}>AI</button>
					<button onClick={() => setActive("Video")}>Video</button>
					<button onClick={() => setActive("Contact")}>Contact</button>
				</nav>
			</header>

			<main>
				<section className="hero">
					<div className="hero-glow" />
					<div className="hero-content">
						<span className="eyebrow">THE DIGITAL XPERIENCE</span>
						<h1>
							Welcome to
							<span> XENOR</span>
						</h1>
						<p>
							منصة رقمية متكاملة تجمع التسويق، الذكاء الاصطناعي،
							المحتوى والخدمات الرقمية في مكان واحد.
						</p>

						<div className="hero-actions">
							<button className="primary-btn" onClick={() => setActive("HUB")}>
								Explore XENOR HUB →
							</button>
							<button
								className="secondary-btn"
								onClick={() => setActive("AI")}
							>
								Open XENOR AI
							</button>
						</div>
					</div>

					<div className="x-symbol">X</div>
				</section>

				{active === "HUB" && (
					<>
						<section className="section-heading">
							<span>01 / XENOR HUB</span>
							<h2>Everything starts here.</h2>
						</section>

						<section className="cards">
							{sections.map((item) => (
								<button
									className="feature-card"
									key={item.title}
									onClick={() => setActive(item.action)}
								>
									<div className="card-icon">{item.icon}</div>
									<div>
										<h3>{item.title}</h3>
										<p>{item.text}</p>
									</div>
									<span className="arrow">↗</span>
								</button>
							))}
						</section>

						<section className="mystery">
							<div>
								<span className="eyebrow">SPECIAL EXPERIENCE</span>
								<h2>🎁 Mystery Box</h2>
								<p>
									افتح الصندوق واكتشف تجربة XENOR مختلفة كل مرة.
								</p>
							</div>
							<button
								className="mystery-btn"
								onClick={() => setActive("Mystery")}
							>
								OPEN BOX
							</button>
						</section>
					</>
				)}

				{active !== "HUB" && (
					<section className="active-section">
						<span className="eyebrow">XENOR HUB</span>
						<h2>
							{active === "Mystery" ? "Mystery Box" : `XENOR ${active}`}
						</h2>
						<p>
							هذه المساحة مخصصة لخدمة XENOR التي اخترتها. سيتم ربطها
							بالخدمة الفعلية في المرحلة التالية.
						</p>

						<button className="primary-btn" onClick={() => setActive("HUB")}>
							← Back to XENOR HUB
						</button>
					</section>
				)}

				<section className="contact-strip">
					<div>
						<span className="eyebrow">LET'S CONNECT</span>
						<h2>Build something different.</h2>
					</div>

					<div className="contact-links">
						<a href="https://wa.me/201098763248" target="_blank">
							WhatsApp
						</a>
						<a
							href="https://facebook.com/share/1Ra69ueZHv"
							target="_blank"
						>
							Facebook
						</a>
						<a href="https://www.youtube.com/@XENORXENOR-m8m" target="_blank">
							YouTube
						</a>
					</div>
				</section>
			</main>

			<footer>
				<div>© 2026 XENOR</div>
				<div>INTEGRATED MARKETING & DIGITAL SOLUTIONS</div>
			</footer>
		</div>
	);
}

export default App;