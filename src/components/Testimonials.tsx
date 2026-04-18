import { useState, useEffect, useRef, useCallback } from "react";

const TESTIMONIALS = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Medical Officer, NovaCare Devices",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Their end-to-end engineering approach transformed our product pipeline. From hardware design to FDA submission support, the team delivered exceptional quality without compromising timelines.",
  },
  {
    name: "James Thornton",
    role: "Founder & CEO, MedTech Innovations",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "We came with a concept and left with a market-ready device. The dual-location model gave us US-level oversight at a pace we never thought possible. Truly a partner, not just a vendor.",
  },
  {
    name: "Priya Anand",
    role: "VP Engineering, PulseWave Health",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Regulatory compliance was our biggest fear going in. Their team embedded best practices from Day 1 — ISO 13485, IEC 62304 — and we sailed through our audit. Incredible expertise.",
  },
  {
    name: "Marcus Lefevre",
    role: "CTO, BioSync Medical",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    text: "The embedded software and cloud integration work they delivered was world-class. Our device now seamlessly integrates with EHR systems and clinicians love the interface.",
  },
  {
    name: "Dr. Elena Vasquez",
    role: "Director of R&D, OrthoTech Solutions",
    avatar: "https://randomuser.me/api/portraits/women/21.jpg",
    text: "Rapid prototyping to production in under 8 months. Their iterative process caught design issues early, saving us both time and cost. I recommend them to every med-tech founder I know.",
  },
];

const AMY_PARAGRAPHS = [
  `I've had an excellent experience working with the Stellar Design and Manufacturing (SDM) team — Bob, Kartik, and the broader group. Over the past year, they have been an important partner as we brought a highly complex medical device to market — one that is new to the field and required us to help define an entirely new category of therapy. That level of innovation demands speed, precision, and the ability to translate sophisticated science into clear, compelling storytelling, and the SDM team consistently delivered.`,
  `Because I run a lean organization, I rely heavily on trusted partners to execute fast-paced, world-class work. SDM operates as a true extension of my team. Their deliverables reflect strong design sensibility, and a clear understanding of how marketing supports clinical credibility and commercial readiness.`,
  `What I value most is their customized approach. They take the time to understand the strategic objective, adapt quickly to evolving needs, and produce thoughtful creative — from design to video — that aligns with the broader narrative we're building.`,
  `They have earned my trust through professionalism, transparency, flexibility, and dependable execution, including consistent on-time delivery — which is critical when supporting regulated product launches and global initiatives. Furthermore, they are just good people — kind, considerate, empathetic and eager to please. I look forward to speaking with them and engaging on projects — they make my work-life better.`,
  `If you are looking for a premium partner who can support complex corporate marketing efforts with world-class quality and strategic insight, I would highly recommend the SDM team.`,
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function FanCard({ t, slot, onClick }: { t: (typeof TESTIMONIALS)[0]; slot: number; onClick: () => void }) {
  const abs = Math.abs(slot);
  const isCenter = slot === 0;
  if (abs > 2) return null;

  const xPercent = slot * 52;
  const scale = isCenter ? 1 : abs === 1 ? 0.82 : 0.68;
  const zIndex = isCenter ? 10 : abs === 1 ? 5 : 1;
  const opacity = isCenter ? 1 : abs === 1 ? 0.7 : 0.4;
  const rotateY = slot * -6;
  const blur = isCenter ? 0 : abs === 1 ? 1 : 3;

  return (
    <div onClick={onClick} style={{ position:"absolute", left:"50%", top:"50%", width:340, transform:`translate(-50%,-50%) translateX(${xPercent}%) scale(${scale}) rotateY(${rotateY}deg)`, zIndex, opacity, filter:blur>0?`blur(${blur}px)`:"none", transition:"all 0.55s cubic-bezier(0.34,1.1,0.64,1)", cursor:isCenter?"default":"pointer", transformStyle:"preserve-3d" }}>
      <div style={{ background:isCenter?"linear-gradient(135deg,#0a1628 0%,#0d2040 100%)":"rgba(10,22,40,0.85)", border:isCenter?"1.5px solid rgba(0,174,239,0.5)":"1.5px solid rgba(0,174,239,0.15)", borderRadius:20, padding:"32px 28px", boxShadow:isCenter?"0 24px 60px rgba(0,174,239,0.18)":"0 8px 24px rgba(0,0,0,0.3)", minHeight:260, display:"flex", flexDirection:"column", gap:20, backdropFilter:"blur(12px)" }}>
        <div style={{ fontSize:48, color:"#00aeef", opacity:0.4, lineHeight:1, marginBottom:-8 }}>"</div>
        <p style={{ fontFamily:"Georgia,serif", fontSize:15, color:isCenter?"#e2eaf4":"#8fa3bc", lineHeight:1.75, margin:0, flex:1 }}>{t.text}</p>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:4 }}>
          <img src={t.avatar} alt={t.name} style={{ width:44, height:44, borderRadius:"50%", border:"2px solid #00aeef", objectFit:"cover" }} />
          <div>
            <div style={{ fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:14, color:isCenter?"#fff":"#8fa3bc" }}>{t.name}</div>
            <div style={{ fontFamily:"Outfit,sans-serif", fontSize:12, color:"#00aeef", opacity:isCenter?1:0.6 }}>{t.role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const { ref, visible } = useReveal();
  const { ref: featuredRef, visible: featuredVisible } = useReveal();
  const N = TESTIMONIALS.length;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    const next = ((idx % N) + N) % N;
    if (next === current) return;
    setAnimating(true);
    setCurrent(next);
    setTimeout(() => setAnimating(false), 580);
  }, [animating, current, N]);

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => { setCurrent((c) => (c + 1) % N); }, 4500);
  }, [N]);

  useEffect(() => {
    startAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [startAuto]);

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    touchStartX.current = null;
  };

  const getSlot = (cardIdx: number) => {
    let off = cardIdx - current;
    if (off > N / 2) off -= N;
    if (off < -N / 2) off += N;
    return off;
  };

  return (
    <>
      <style>{`
        .t-fan-stage { position:relative; width:100%; height:380px; perspective:1200px; transform-style:preserve-3d; }
        @media(max-width:640px){ .t-fan-stage { height:460px; perspective:800px; } }
        .t-nav-btn:hover { background:rgba(0,174,239,0.2) !important; border-color:rgba(0,174,239,0.6) !important; }
        .t-nav-btn:active { transform:scale(0.95); }
        .t-dot-active { background:#00aeef !important; transform:scale(1.3) !important; }
        .amy-card { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .amy-card:hover { box-shadow: 0 32px 80px rgba(0,174,239,0.18) !important; }
        @media(max-width:768px){
          .amy-inner { flex-direction: column !important; }
          .amy-left { width:100% !important; min-height: unset !important; padding: 40px 24px 32px !important; flex-direction: row !important; align-items: center !important; gap: 20px !important; justify-content: center !important; }
          .amy-avatar-wrap { position: static !important; }
          .amy-circles { display: none !important; }
          .amy-info { text-align: left !important; }
          .amy-right { padding: 32px 24px !important; }
          .amy-img { width: 80px !important; height: 80px !important; }
        }
        @media(max-width:480px){
          .amy-left { flex-direction: column !important; text-align: center !important; }
          .amy-info { text-align: center !important; }
        }
      `}</style>

      {/* ── FAN CAROUSEL ── */}
      <section id="testimonials" style={{ background:"linear-gradient(160deg,#060e1c 0%,#0a1628 60%,#081422 100%)", padding:"100px 24px 80px", overflow:"hidden", position:"relative" }}>
        <div style={{ position:"absolute", top:-80, right:-80, width:320, height:320, borderRadius:"50%", background:"rgba(0,174,239,0.08)", filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-60, left:-60, width:260, height:260, borderRadius:"50%", background:"rgba(0,174,239,0.05)", filter:"blur(70px)", pointerEvents:"none" }} />

        <div style={{ maxWidth:1160, margin:"0 auto", position:"relative", zIndex:1 }}>
          <div ref={ref} style={{ textAlign:"center", marginBottom:56, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(32px)", transition:"all 0.7s ease" }}>
            <div style={{ display:"inline-block", background:"rgba(0,174,239,0.12)", border:"1px solid rgba(0,174,239,0.35)", borderRadius:100, padding:"5px 18px", marginBottom:20, fontFamily:"Outfit,sans-serif", fontSize:13, fontWeight:700, color:"#00aeef", letterSpacing:"0.12em", textTransform:"uppercase" as const }}>
              Testimonials
            </div>
            <h2 style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:"clamp(26px,4vw,46px)", color:"#fff", margin:0, lineHeight:1.2 }}>
              Don't Take Our Word for It.<br />
              <span style={{ color:"#00aeef" }}>Take Theirs.</span>
            </h2>
          </div>

          <div ref={stageRef} className="t-fan-stage"
            onMouseEnter={() => { if (autoRef.current) clearInterval(autoRef.current); }}
            onMouseLeave={startAuto}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {TESTIMONIALS.map((t, i) => (
              <FanCard key={t.name} t={t} slot={getSlot(i)} onClick={() => goTo(i)} />
            ))}
          </div>

          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:20, marginTop:32 }}>
            <button className="t-nav-btn" onClick={() => goTo(current - 1)} aria-label="Previous"
              style={{ width:48, height:48, borderRadius:"50%", background:"rgba(0,174,239,0.08)", border:"1.5px solid rgba(0,174,239,0.3)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, color:"#00aeef", fontWeight:900, backdropFilter:"blur(8px)", transition:"all 0.2s" }}>
              ←
            </button>
            <div style={{ display:"flex", gap:6, alignItems:"center" }}>
              {TESTIMONIALS.map((_, i) => (
                <button key={i} onClick={() => goTo(i)} className={i === current ? "t-dot-active" : ""}
                  style={{ width:7, height:7, minWidth:7, minHeight:7, borderRadius:"50%", background:"rgba(0,174,239,0.25)", border:"none", cursor:"pointer", padding:0, transition:"background 0.2s,transform 0.2s", WebkitAppearance:"none", appearance:"none" as const }} />
              ))}
            </div>
            <button className="t-nav-btn" onClick={() => goTo(current + 1)} aria-label="Next"
              style={{ width:48, height:48, borderRadius:"50%", background:"rgba(0,174,239,0.08)", border:"1.5px solid rgba(0,174,239,0.3)", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", fontSize:18, color:"#00aeef", fontWeight:900, backdropFilter:"blur(8px)", transition:"all 0.2s" }}>
              →
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURED: AMY SCOTT ── */}
      <section style={{ background:"linear-gradient(135deg,#e8f4fb 0%,#f0f8ff 50%,#e4f1fa 100%)", padding:"72px 16px", overflow:"hidden", position:"relative" }}>
        {/* Decorative bars top-left */}
        <div style={{ position:"absolute", top:0, left:0, display:"flex", flexDirection:"column" as const, gap:8, padding:"24px 0 0 20px", opacity:0.6 }}>
          {[56,36,20].map((h, i) => <div key={i} style={{ width:6, height:h, borderRadius:3, background:"#00aeef" }} />)}
        </div>
        {/* Decorative bars bottom-right */}
        <div style={{ position:"absolute", bottom:0, right:0, display:"flex", flexDirection:"column" as const, gap:8, padding:"0 20px 24px 0", alignItems:"flex-end", opacity:0.6 }}>
          {[20,36,56].map((h, i) => <div key={i} style={{ width:6, height:h, borderRadius:3, background:"#00aeef" }} />)}
        </div>
        {/* SVG wave accent */}
        <div style={{ position:"absolute", top:0, right:0, width:200, height:140, opacity:0.08, pointerEvents:"none" }}>
          <svg viewBox="0 0 200 140" fill="none">
            <path d="M200 0 Q130 70 200 140" stroke="#00aeef" strokeWidth="2.5" fill="none"/>
            <path d="M175 0 Q105 70 175 140" stroke="#00aeef" strokeWidth="2" fill="none"/>
            <path d="M150 0 Q80 70 150 140" stroke="#00aeef" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>

        <div
          ref={featuredRef}
          className="amy-card"
          style={{ maxWidth:960, margin:"0 auto", borderRadius:24, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,174,239,0.12),0 2px 8px rgba(10,22,40,0.06)", opacity:featuredVisible?1:0, transform:featuredVisible?"translateY(0)":"translateY(40px)", transition:"opacity 0.7s ease,transform 0.7s ease" }}
        >
          <div className="amy-inner" style={{ display:"flex", flexDirection:"row" as const }}>

            {/* LEFT — navy panel */}
            <div className="amy-left" style={{ width:240, background:"linear-gradient(160deg,#0a1628 0%,#0c2244 60%,#0d2a50 100%)", display:"flex", flexDirection:"column" as const, alignItems:"center", justifyContent:"flex-end", padding:"0 24px 36px", gap:16, position:"relative" as const, flexShrink:0, minHeight:520 }}>

              {/* Decorative rings */}
              <div className="amy-circles" style={{ position:"absolute", top:0, left:0, right:0, height:"55%", overflow:"hidden" }}>
                <div style={{ position:"absolute", width:200, height:200, borderRadius:"50%", border:"1.5px solid rgba(0,174,239,0.18)", top:"10%", left:"50%", transform:"translateX(-50%)" }} />
                <div style={{ position:"absolute", width:160, height:160, borderRadius:"50%", border:"1.5px solid rgba(0,174,239,0.12)", top:"18%", left:"50%", transform:"translateX(-50%)" }} />
              </div>

              {/* Amy image — extends to top, no circular crop */}
              <div className="amy-avatar-wrap" style={{ position:"absolute" as const, top:0, left:0, right:0, display:"flex", justifyContent:"center", alignItems:"flex-start" }}>
                <img
                  src="https://ik.imagekit.io/pratik2002/amy_-removebg-preview.png"
                  alt="Amy Scott"
                  className="amy-img"
                  style={{ width:"100%", maxWidth:220, objectFit:"contain", objectPosition:"top", display:"block" }}
                />
              </div>

              {/* Info — sits at bottom over image */}
              <div className="amy-info" style={{ position:"relative" as const, zIndex:2, textAlign:"center", background:"rgba(10,22,40,0.6)", backdropFilter:"blur(8px)", borderRadius:14, padding:"14px 16px", border:"1px solid rgba(0,174,239,0.2)", width:"100%" }}>
                <div style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:18, color:"#fff", marginBottom:3 }}>Amy Scott</div>
                <div style={{ fontFamily:"Outfit,sans-serif", fontSize:11, color:"#00aeef", fontWeight:600, lineHeight:1.4, marginBottom:6 }}>Chief Marketing Officer,<br/>Foldax Inc.</div>
                <div style={{ fontFamily:"Outfit,sans-serif", fontSize:10, color:"rgba(255,255,255,0.4)", marginBottom:10 }}>30+ years of experience in Marketing</div>
                {/* Foldax logo */}
                <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
                  <div style={{ width:18, height:18, borderRadius:4, background:"#00aeef", display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="white"><path d="M2 6 L6 2 L10 6 L6 10 Z"/></svg>
                  </div>
                  <span style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:13, color:"#fff", letterSpacing:"0.06em" }}>FOLDAX</span>
                  <span style={{ fontSize:9, color:"#00aeef" }}>®</span>
                </div>
              </div>
            </div>

            {/* RIGHT — quote panel */}
            <div className="amy-right" style={{ flex:1, background:"#fff", padding:"48px 44px", display:"flex", flexDirection:"column" as const, justifyContent:"center", gap:0 }}>
              {/* Opening quote */}
              <div style={{ fontSize:64, color:"#00aeef", opacity:0.15, lineHeight:0.75, fontFamily:"Georgia,serif", userSelect:"none" as const, marginBottom:16 }}>"</div>

              <div style={{ display:"flex", flexDirection:"column" as const, gap:14 }}>
                {AMY_PARAGRAPHS.map((para, i) => (
                  <p key={i} style={{ fontFamily:"Georgia,serif", fontSize:13.5, color:"#374151", lineHeight:1.85, margin:0, textAlign:"center" as const }}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Closing accent */}
              <div style={{ display:"flex", alignItems:"center", gap:12, marginTop:28 }}>
                <div style={{ height:2, width:48, borderRadius:2, background:"linear-gradient(90deg,#00aeef,transparent)" }} />
                <div style={{ fontFamily:"Outfit,sans-serif", fontSize:11, color:"#00aeef", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" as const }}>Foldax Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}