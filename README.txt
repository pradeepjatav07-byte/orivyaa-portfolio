============================================================
  ORIVYAA · PORTFOLIO — Pradeep Jatav
  README — site kaise chalaye aur kaise EDIT kare
============================================================

Bhai, ye teri final portfolio website hai — poori static hai,
koi installation ya coding-tool nahi chahiye. Bas files hain.

------------------------------------------------------------
1) SITE KAISE DEKHE (apne computer par)
------------------------------------------------------------
- Folder kholke "index.html" par double-click karo — browser
  me site khul jayegi. Bas.
- IMPORTANT: full experience (smooth animations, fonts) ke liye
  INTERNET ON rakho — animations CDN se aate hain. Offline bhi
  site poori dikhti hai, bas simple version me (kuchh tut-ta
  nahi karta). Teacher ko dikhane se pehle ek baar online load
  kar lena — browser fonts cache kar lega.
- Host karni ho (live link chahiye) to easiest free options:
    • GitHub Pages  → repo banao, folder upload karo,
      Settings > Pages > main branch select.
    • Netlify Drop  → netlify.com/drop par folder drag-drop.
  Dono me 2 minute lagte hain.

------------------------------------------------------------
2) EDIT KAISE KARE — 90% kaam SIRF EK FILE me
------------------------------------------------------------
  js/config.js   ← SAARE LINKS + naam + email YAHIN hain

  • Ab saare deck links GitHub pe SET hain (SEO/Google Ads/
    Email/Meta — sab PDFs browser me preview hote hain).
  • Meta Ads ka link: config.js me  metaAds: ""  ke andar
    apna link paste karo aur  metaAdsComingSoon: false  kar do.
    Card apne aap live ho jayega.
  • SEO / Google Ads / Email assignments ke Drive links bhi
    config.js me hain — "#" ki jagah apna share-link daalo.

------------------------------------------------------------
3) TEXT BADALNA HO TO
------------------------------------------------------------
  index.html kholke Notepad/VS Code me edit karo. Har section
  ke upar comment hai (jaise  <!-- ✏️ EDIT: ... --> ).
  Jo h1/h2/p ke andar hai wo screen par dikhta hai.

  Sections:
    hero        → badi headline + stats
    #brand      → brand story
    #journey    → 8 stages
    #work       → 6 deliverable cards
    #gallery    → photo grid (filters ke saath)
    #stack      → 8 tools
    #contact    → contact card

------------------------------------------------------------
4) PHOTOS BADALNE / ADD KARNE HON TO
------------------------------------------------------------
  assets/brand/   → brand photos
  assets/work/    → assignment screenshots
  Naya photo gallery me: photo ko assets/brand/ me daalo, phir
  index.html me ek <figure> wali line copy-paste karke
  src aur data-cat badal do. data-cat filter decide karta hai:
  brand / web / seo / ads / email.

------------------------------------------------------------
5) COLOURS BADALNE HON TO
------------------------------------------------------------
  css/style.css ke sabse upar ":root" block me colours hain
  (--forest, --sage, --terra, --ivory). Sirf wo hex code badlo,
  poori site ek saath change ho jayegi.

============================================================
  Files:
    index.html        → poori site ka content/structure
    css/style.css     → design (colours upar :root me)
    js/config.js      → ✏️ LINKS + DETAILS (sabse zaroori)
    js/main.js        → functionality (chhoone ki zaroorat nahi)
    assets/           → saari images
============================================================

------------------------------------------------------------
v3 CHANGES (15 Nov 2026)
------------------------------------------------------------
  • Custom cursor circle REMOVED — normal professional cursor.
  • Case-study images ab crop/scale NAHI hotin — poori dikhti hain.
  • Saare work images me ORIGINAL Decole college logo (PPT se
    nikala hua — koi clipart/rendered-glitch logo nahi).
  • Deck links GitHub pe set: SEO / Google Ads / Email / Meta.

------------------------------------------------------------
v4 — FULL REBUILD (15 Nov 2026)
------------------------------------------------------------
  • Poora site shuru se new: clean editorial design.
  • Marquee band, custom cursor REMOVED.
  • Case images full, no crop.
  • Original Decole logo saari work images me (PPT se extract).
  • Sections: Hero > Stats > Product > Work > Gallery > Skills
    > Contact + Footer. Config file waisi hi (js/config.js).
