import { useState, useRef, useEffect } from "react";

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

type FormState = "idle" | "sending" | "success" | "error";

// ── Point this to your Next.js backend ──
const API_URL = "https://sdm-backend-ten.vercel.app/api/sdm-contact";

export default function ContactForm() {
  const { ref, visible } = useReveal();
  const { ref: formRef, visible: formVisible } = useReveal();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok && result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", subject: "", message: "" });
      } else {
        setErrorMsg(result.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    background: "rgba(255,255,255,0.04)",
    border: `1.5px solid ${focusedField === field ? "#00aeef" : "rgba(0,174,239,0.18)"}`,
    borderRadius: 10,
    padding: "14px 16px",
    fontFamily: "Outfit, sans-serif",
    fontSize: 14,
    color: "#e2eaf4",
    outline: "none",
    transition: "border-color 0.25s, background 0.25s, box-shadow 0.25s",
    boxSizing: "border-box" as const,
    boxShadow: focusedField === field ? "0 0 0 3px rgba(0,174,239,0.12)" : "none",
  });

  const labelStyle: React.CSSProperties = {
    fontFamily: "Outfit, sans-serif",
    fontSize: 12,
    fontWeight: 700,
    color: "#00aeef",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    marginBottom: 6,
    display: "block",
  };

  return (
    <>
      <style>{`
        .contact-input::placeholder { color: rgba(142,163,188,0.5); }
        .contact-input:hover { background: rgba(255,255,255,0.06) !important; }
        .send-btn { transition: all 0.25s ease; }
        .send-btn:hover:not(:disabled) { background: linear-gradient(135deg,#00c4ff,#0090d0) !important; box-shadow: 0 8px 32px rgba(0,174,239,0.45) !important; transform: translateY(-1px); }
        .send-btn:active:not(:disabled) { transform: translateY(0); }
        .send-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .contact-info-item:hover .contact-info-icon { background: rgba(0,174,239,0.25) !important; }
        @media(max-width:900px){ .contact-grid { flex-direction: column !important; } .contact-left { width: 100% !important; } }
        @media(max-width:480px){ .contact-form-row { flex-direction: column !important; } }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>

      <section
        id="contact"
        style={{
          background: "linear-gradient(160deg,#060e1c 0%,#0a1628 60%,#081422 100%)",
          padding: "100px 24px 90px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Background glows */}
        <div style={{ position:"absolute", top:-100, right:-80, width:360, height:360, borderRadius:"50%", background:"rgba(0,174,239,0.07)", filter:"blur(100px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-80, left:-60, width:280, height:280, borderRadius:"50%", background:"rgba(0,174,239,0.05)", filter:"blur(80px)", pointerEvents:"none" }} />
        {/* Grid texture */}
        <div style={{ position:"absolute", inset:0, backgroundImage:"linear-gradient(rgba(0,174,239,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,174,239,0.03) 1px,transparent 1px)", backgroundSize:"48px 48px", pointerEvents:"none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>

          {/* Header */}
          <div
            ref={ref}
            style={{ textAlign:"center", marginBottom:60, opacity:visible?1:0, transform:visible?"translateY(0)":"translateY(32px)", transition:"all 0.7s ease" }}
          >
            <div style={{ display:"inline-block", background:"rgba(0,174,239,0.12)", border:"1px solid rgba(0,174,239,0.35)", borderRadius:100, padding:"5px 18px", marginBottom:20, fontFamily:"Outfit,sans-serif", fontSize:13, fontWeight:700, color:"#00aeef", letterSpacing:"0.12em", textTransform:"uppercase" }}>
              Get In Touch
            </div>
            <h2 style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:"clamp(26px,4vw,46px)", color:"#fff", margin:0, lineHeight:1.2 }}>
              Let's Build Something<br />
              <span style={{ color:"#00aeef" }}>Exceptional Together.</span>
            </h2>
            <p style={{ fontFamily:"Outfit,sans-serif", fontSize:16, color:"rgba(142,163,188,0.8)", marginTop:16, maxWidth:520, marginInline:"auto" }}>
              Have a project in mind or want to explore a partnership? Reach out — we respond within one business day.
            </p>
          </div>

          {/* Main grid */}
          <div
            ref={formRef}
            className="contact-grid"
            style={{ display:"flex", gap:32, alignItems:"flex-start", opacity:formVisible?1:0, transform:formVisible?"translateY(0)":"translateY(40px)", transition:"opacity 0.7s ease 0.15s,transform 0.7s ease 0.15s" }}
          >
            {/* LEFT — contact info */}
            <div className="contact-left" style={{ width:300, flexShrink:0, display:"flex", flexDirection:"column", gap:24 }}>
              <div style={{ background:"rgba(255,255,255,0.03)", border:"1.5px solid rgba(0,174,239,0.15)", borderRadius:20, padding:"32px 28px", backdropFilter:"blur(12px)" }}>
                <h3 style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:18, color:"#fff", margin:"0 0 24px" }}>Contact Details</h3>
                {[
                  { icon:"✉", label:"Email Us", value:"robertk@stellardesignmfg.com", href:"mailto:robertk@stellardesignmfg.com" },
                  { icon:"✉", label:"Also Reach", value:"kartikgvyas@outlook.com", href:"mailto:kartikgvyas@outlook.com" },
                  { icon:"🌐", label:"Website", value:"stellardesignmfg.com", href:"https://stellardesignmfg.com" },
                ].map((item) => (
                  <div key={item.label} className="contact-info-item" style={{ display:"flex", gap:14, alignItems:"flex-start", marginBottom:20 }}>
                    <div className="contact-info-icon" style={{ width:40, height:40, borderRadius:10, background:"rgba(0,174,239,0.12)", border:"1px solid rgba(0,174,239,0.25)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0, transition:"background 0.2s" }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily:"Outfit,sans-serif", fontSize:11, fontWeight:700, color:"#00aeef", letterSpacing:"0.08em", textTransform:"uppercase", marginBottom:3 }}>{item.label}</div>
                      <a href={item.href} style={{ fontFamily:"Outfit,sans-serif", fontSize:13, color:"#c8d8e8", textDecoration:"none", wordBreak:"break-all" }}>{item.value}</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Response time badge */}
              <div style={{ background:"linear-gradient(135deg,rgba(0,174,239,0.12),rgba(0,174,239,0.06))", border:"1.5px solid rgba(0,174,239,0.3)", borderRadius:16, padding:"20px 24px", display:"flex", gap:16, alignItems:"center" }}>
                <div style={{ width:44, height:44, borderRadius:"50%", background:"rgba(0,174,239,0.15)", border:"2px solid rgba(0,174,239,0.4)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, flexShrink:0 }}>⚡</div>
                <div>
                  <div style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:14, color:"#fff" }}>Fast Response</div>
                  <div style={{ fontFamily:"Outfit,sans-serif", fontSize:12, color:"rgba(142,163,188,0.8)", marginTop:2 }}>We reply within 1 business day</div>
                </div>
              </div>

              {/* Decorative bars */}
              <div style={{ display:"flex", gap:8, paddingLeft:4 }}>
                {[48,32,20,12].map((w, i) => (
                  <div key={i} style={{ height:4, width:w, borderRadius:2, background:`rgba(0,174,239,${0.6 - i * 0.12})` }} />
                ))}
              </div>
            </div>

            {/* RIGHT — form */}
            <div style={{ flex:1 }}>
              <div style={{ background:"rgba(255,255,255,0.03)", border:"1.5px solid rgba(0,174,239,0.15)", borderRadius:20, padding:"40px 36px", backdropFilter:"blur(12px)" }}>

                {status === "success" ? (
                  <div style={{ textAlign:"center", padding:"40px 0" }}>
                    <div style={{ fontSize:56, marginBottom:20 }}>✅</div>
                    <h3 style={{ fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:24, color:"#fff", margin:"0 0 12px" }}>Message Sent!</h3>
                    <p style={{ fontFamily:"Outfit,sans-serif", fontSize:15, color:"rgba(142,163,188,0.8)", margin:"0 0 28px" }}>
                      Thank you for reaching out. We'll get back to you within one business day.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="send-btn"
                      style={{ background:"rgba(0,174,239,0.15)", border:"1.5px solid rgba(0,174,239,0.4)", borderRadius:10, padding:"12px 28px", fontFamily:"Outfit,sans-serif", fontWeight:700, fontSize:14, color:"#00aeef", cursor:"pointer" }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Row 1: Name + Email */}
                    <div className="contact-form-row" style={{ display:"flex", gap:16, marginBottom:20 }}>
                      <div style={{ flex:1 }}>
                        <label style={labelStyle}>Full Name *</label>
                        <input className="contact-input" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} placeholder="John Smith" style={inputStyle("name")} />
                      </div>
                      <div style={{ flex:1 }}>
                        <label style={labelStyle}>Email Address *</label>
                        <input className="contact-input" name="email" type="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} placeholder="john@company.com" style={inputStyle("email")} />
                      </div>
                    </div>

                    {/* Row 2: Company + Subject */}
                    <div className="contact-form-row" style={{ display:"flex", gap:16, marginBottom:20 }}>
                      <div style={{ flex:1 }}>
                        <label style={labelStyle}>Company</label>
                        <input className="contact-input" name="company" value={formData.company} onChange={handleChange} onFocus={() => setFocusedField("company")} onBlur={() => setFocusedField(null)} placeholder="Your Company Inc." style={inputStyle("company")} />
                      </div>
                      <div style={{ flex:1 }}>
                        <label style={labelStyle}>Subject</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          style={{ ...inputStyle("subject"), appearance:"none", WebkitAppearance:"none", backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2300aeef' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`, backgroundRepeat:"no-repeat", backgroundPosition:"right 14px center", cursor:"pointer" }}
                        >
                          <option value="" style={{ background:"#0a1628" }}>Select a topic…</option>
                          <option value="Medical Device Engineering" style={{ background:"#0a1628" }}>Medical Device Engineering</option>
                          <option value="Hardware Design" style={{ background:"#0a1628" }}>Hardware Design</option>
                          <option value="Regulatory Compliance" style={{ background:"#0a1628" }}>Regulatory Compliance</option>
                          <option value="Cloud & Software Integration" style={{ background:"#0a1628" }}>Cloud & Software Integration</option>
                          <option value="Partnership Enquiry" style={{ background:"#0a1628" }}>Partnership Enquiry</option>
                          <option value="General Enquiry" style={{ background:"#0a1628" }}>General Enquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom:28 }}>
                      <label style={labelStyle}>Message *</label>
                      <textarea
                        className="contact-input"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Tell us about your project, goals, or any questions you have…"
                        rows={5}
                        style={{ ...inputStyle("message"), resize:"vertical", minHeight:130 }}
                      />
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div style={{ background:"rgba(239,68,68,0.1)", border:"1px solid rgba(239,68,68,0.3)", borderRadius:10, padding:"12px 16px", fontFamily:"Outfit,sans-serif", fontSize:13, color:"#fca5a5", marginBottom:20 }}>
                        {errorMsg || "Something went wrong. Please try again or email us directly."}
                      </div>
                    )}

                    {/* Submit */}
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:16, flexWrap:"wrap" }}>
                      <p style={{ fontFamily:"Outfit,sans-serif", fontSize:12, color:"rgba(142,163,188,0.5)", margin:0 }}>
                        * Required fields. We never share your data.
                      </p>
                      <button
                        className="send-btn"
                        onClick={handleSubmit}
                        disabled={status === "sending" || !formData.name || !formData.email || !formData.message}
                        style={{ background:"linear-gradient(135deg,#00aeef,#0090d0)", border:"none", borderRadius:10, padding:"14px 36px", fontFamily:"Outfit,sans-serif", fontWeight:800, fontSize:15, color:"#fff", cursor:"pointer", letterSpacing:"0.04em", boxShadow:"0 4px 20px rgba(0,174,239,0.3)", display:"flex", alignItems:"center", gap:10 }}
                      >
                        {status === "sending" ? (
                          <>
                            <span style={{ width:16, height:16, border:"2px solid rgba(255,255,255,0.3)", borderTopColor:"#fff", borderRadius:"50%", display:"inline-block", animation:"spin 0.7s linear infinite" }} />
                            Sending…
                          </>
                        ) : (
                          <>Send Message →</>
                        )}
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}