/* Indo Jack hornbill mascot — cartoon rhinoceros hornbill (Sumatra).
   Drop <span data-hb="perch"></span> or <span data-hb="fly"></span> anywhere; this fills them in. */
(function(){
  const INK='#140f0b', BODY='#1f1b18';
  const defs=`<defs><linearGradient id="hbBill" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stop-color="#F8D05A"/><stop offset="1" stop-color="#E8742A"/></linearGradient>
    <linearGradient id="hbCasque" x1="0" x2="1"><stop offset="0" stop-color="#E8742A"/><stop offset="1" stop-color="#D2402A"/></linearGradient></defs>`;
  const head=`<g class="head">
    <circle cx="80" cy="36" r="16" fill="${BODY}" stroke="${INK}" stroke-width="2.5"/>
    <path d="M90 27 Q102 17 116 13 Q126 11 125 18 Q116 22 106 27 Q99 30 93 32 Z" fill="url(#hbCasque)" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M93 31 Q117 30 127 51 Q113 43 94 45 Z" fill="url(#hbBill)" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M96 38 Q111 38 122 46" fill="none" stroke="#B8551F" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="84" cy="32" r="6.2" fill="#fff" stroke="${INK}" stroke-width="1.6"/>
    <circle cx="85.6" cy="32.2" r="3.2" fill="#C0392B"/><circle cx="85.8" cy="32.3" r="1.5" fill="#111"/><circle cx="86.9" cy="31" r=".9" fill="#fff"/>
    <ellipse class="lid" cx="84" cy="32" rx="6.8" ry="6.8" fill="${BODY}"/>
  </g>`;
  const perch=`${defs}
    <path d="M22 98 Q65 91 112 97" fill="none" stroke="#7a5432" stroke-width="6" stroke-linecap="round"/>
    <path d="M96 95 q6 -8 14 -6" fill="none" stroke="#7a5432" stroke-width="3" stroke-linecap="round"/>
    <path d="M42 64 L10 98 L22 104 L52 74 Z" fill="${BODY}" stroke="${INK}" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M20 87 L30 94 L24 101 L14 95 Z" fill="#F3EDE2"/>
    <ellipse cx="55" cy="62" rx="27" ry="22" fill="${BODY}" stroke="${INK}" stroke-width="2.5"/>
    <path d="M60 82 Q74 80 80 64 Q79 86 62 87 Z" fill="#F3EDE2"/>
    <g class="wing"><path d="M33 52 Q55 39 71 58 Q58 77 35 72 Z" fill="#2c2622" stroke="${INK}" stroke-width="2"/>
    <path d="M41 63 L60 61 M43 69 L58 67" stroke="#4d453e" stroke-width="2" stroke-linecap="round"/></g>
    <path d="M52 84 L50 95 M61 85 L61 95" stroke="#C9A36B" stroke-width="3.4" stroke-linecap="round"/>
    ${head}`;
  const fly=`${defs}
    <g class="w1"><path d="M44 52 Q26 8 60 2 Q58 30 62 50 Z" fill="#2c2622" stroke="${INK}" stroke-width="2.2" stroke-linejoin="round"/><path d="M37 30 Q48 12 59 8" fill="none" stroke="#F3EDE2" stroke-width="3" stroke-linecap="round"/></g>
    <path d="M34 60 L4 64 L6 76 L36 70 Z" fill="${BODY}" stroke="${INK}" stroke-width="2.3" stroke-linejoin="round"/>
    <path d="M12 63 L20 62 L21 74 L13 75 Z" fill="#F3EDE2"/>
    <ellipse cx="54" cy="62" rx="28" ry="15" fill="${BODY}" stroke="${INK}" stroke-width="2.5"/>
    <path d="M58 73 Q72 73 79 63 Q77 79 60 78 Z" fill="#F3EDE2"/>
    <g transform="translate(-2 14)">${head}</g>
    <g class="w2"><path d="M52 58 Q48 14 84 8 Q76 34 70 58 Z" fill="${BODY}" stroke="${INK}" stroke-width="2.3" stroke-linejoin="round"/><path d="M58 32 Q66 18 78 13" fill="none" stroke="#F3EDE2" stroke-width="3" stroke-linecap="round"/></g>`;

  const css=`
  [data-hb]{display:inline-block;width:110px;line-height:0;cursor:pointer}
  [data-hb] svg{width:100%;height:auto;overflow:visible}
  [data-hb="perch"]{opacity:0;transform:translateY(-70px) rotate(-12deg);transition:transform .8s cubic-bezier(.3,1.6,.5,1),opacity .35s}
  [data-hb="perch"].landed{opacity:1;transform:none}
  [data-hb].hop svg{animation:hbHop .55s ease-out}
  @keyframes hbHop{30%{transform:translateY(-16px) rotate(-7deg)}60%{transform:translateY(2px)}100%{transform:none}}
  [data-hb] .lid{transform-box:fill-box;transform-origin:center;transform:scaleY(0);transition:transform .07s}
  [data-hb] .lid.blink{transform:scaleY(1)}
  [data-hb="perch"] .head{transform-box:view-box;transform-origin:72px 46px;animation:hbTilt 7s ease-in-out infinite}
  @keyframes hbTilt{0%,68%,100%{transform:none}76%{transform:rotate(-13deg)}86%{transform:rotate(7deg)}}
  [data-hb="perch"] .wing{transform-box:view-box;transform-origin:40px 55px;animation:hbRuffle 9s ease-in-out infinite}
  @keyframes hbRuffle{0%,90%,100%{transform:none}93%{transform:rotate(-14deg)}96%{transform:rotate(4deg)}}
  [data-hb="fly"] .w1,[data-hb="fly"] .w2{transform-box:view-box;transform-origin:58px 56px;animation:hbFlap .32s ease-in-out infinite alternate}
  [data-hb="fly"] .w1{animation-delay:-.08s}
  @keyframes hbFlap{from{transform:rotate(14deg)}to{transform:scaleY(-.55) rotate(-6deg)}}
  .hb-flyer{position:absolute;z-index:6;left:0;top:16%;width:120px;pointer-events:none;animation:hbAcross 18s linear infinite}
  .hb-flyer.late{top:30%;width:84px;animation-duration:24s;animation-delay:-9s}
  .hb-flyer svg,.hb-flock svg{animation:hbBob 1.3s ease-in-out infinite}
  @keyframes hbBob{50%{transform:translateY(-10px)}}
  @keyframes hbAcross{0%{transform:translateX(-180px)}55%,100%{transform:translateX(calc(100vw + 60px))}}
  @media (max-width:700px){[data-hb]{width:78px}.hb-flyer{width:84px}.hb-flyer.late{width:60px}}
  @media (prefers-reduced-motion:reduce){[data-hb] *,.hb-flyer{animation:none!important}[data-hb="perch"]{opacity:1;transform:none}}`;
  const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

  document.querySelectorAll('[data-hb]').forEach(el=>{
    el.innerHTML='<svg viewBox="0 0 130 110" aria-hidden="true">'+(el.dataset.hb==='fly'?fly:perch)+'</svg>';
  });
  // perched birds drop in when they scroll into view
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('landed');io.unobserve(e.target)}}),{threshold:.4});
  document.querySelectorAll('[data-hb="perch"]').forEach(el=>io.observe(el));
  // random blinking
  setInterval(()=>document.querySelectorAll('[data-hb] .lid').forEach(l=>{
    if(Math.random()<.3){l.classList.add('blink');setTimeout(()=>l.classList.remove('blink'),170)}}),1300);
  // tap a bird and it hops
  document.addEventListener('click',e=>{const h=e.target.closest('[data-hb]');if(!h)return;
    h.classList.remove('hop');void h.offsetWidth;h.classList.add('hop')});
})();
