import { useState, useEffect, useRef, useCallback } from "react";

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

// ── FAN CAROUSEL SECTION REMOVED ──
// The AI-generated testimonials carousel (TESTIMONIALS array + FanCard component + fan carousel <section>)
// has been intentionally removed. Only the featured Amy Scott testimonial is retained below.

export default function TestimonialsSection() {
  const { ref: featuredRef, visible: featuredVisible } = useReveal();

  return (
    <>
      <style>{`
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

      {/* ── FEATURED: AMY SCOTT ── */}
      <section id="testimonials" style={{ background:"linear-gradient(135deg,#e8f4fb 0%,#f0f8ff 50%,#e4f1fa 100%)", padding:"72px 16px", overflow:"hidden", position:"relative" }}>
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
                <div style={{ fontFamily:"Outfit,sans-serif", fontSize:11, color:"#00aeef", fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase" as const }}>Amy L. Scott, Foldax Inc.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
