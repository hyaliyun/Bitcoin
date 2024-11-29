import{l as x,d as b,b as h}from"./chunks/sponsors.Dd5XO83D.js";import{d as P,r as y,B,h as _,o as i,c as r,z as l,F as w,p as V,f as S,n as q,a,_ as C,b as G,q as p,m as d}from"./chunks/framework.DrUvKbwK.js";const $=["href"],I={key:0},D=["srcset"],E=["src","alt"],j=["src","alt"],M=P({__name:"SponsorsGroup",props:{tier:{},placement:{default:"aside"}},setup(m){const s=m,o=y(),g=y(!1);B(async()=>{const e=new IntersectionObserver(n=>{n[0].isIntersecting&&(g.value=!0,e.disconnect())},{rootMargin:"0px 0px 300px 0px"});e.observe(o.value),_(()=>e.disconnect()),await x()});const k={aside:"4QUPDDRU",landing:"58FLAR2Z",page:"ZXLO3IUT"};function f(e){fathom.trackGoal(e?"Y2BVYNT2":k[s.placement],0)}function T(e){let n=e[s.tier];return s.placement==="aside"&&(s.tier==="platinum"?n=n.filter(t=>!t.priority):s.tier==="special"&&(n=[...n,...e.platinum.filter(t=>t.priority)])),n}return(e,n)=>(i(),r("div",{ref_key:"container",ref:o,class:q(["sponsor-container",[e.tier.startsWith("plat")?"platinum":e.tier,e.placement]])},[l(b)&&g.value?(i(!0),r(w,{key:0},V(T(l(b)),({url:t,img:u,name:v})=>(i(),r("a",{class:"sponsor-item",href:t,target:"_blank",rel:"sponsored noopener",onClick:n[0]||(n[0]=U=>f())},[u.endsWith("png")?(i(),r("picture",I,[a("source",{type:"image/avif",srcset:`${l(h)}/images/${u.replace(/\.png$/,".avif")}`},null,8,D),a("img",{src:`${l(h)}/images/${u}`,alt:v},null,8,E)])):(i(),r("img",{key:1,src:`${l(h)}/images/${u}`,alt:v},null,8,j))],8,$))),256)):S("",!0),e.placement!=="page"&&e.tier!=="special"?(i(),r("a",{key:1,href:"/sponsor/",class:"sponsor-item action",onClick:n[1]||(n[1]=t=>f(!0))},"Become a Sponsor")):S("",!0)],2))}}),c=C(M,[["__scopeId","data-v-8571a0e0"]]),A=JSON.parse('{"title":"Become a TypeScript Sponsor","description":"","frontmatter":{"sidebar":false,"ads":false,"editLink":false,"sponsors":false},"headers":[{"level":2,"title":"How to Sponsor","slug":"how-to-sponsor","link":"#how-to-sponsor","children":[]},{"level":2,"title":"Sponsoring Vue as a Business","slug":"sponsoring-vue-as-a-business","link":"#sponsoring-vue-as-a-business","children":[]},{"level":2,"title":"Sponsoring Vue as an Individual","slug":"sponsoring-vue-as-an-individual","link":"#sponsoring-vue-as-an-individual","children":[]},{"level":2,"title":"Tier Benefits","slug":"tier-benefits","link":"#tier-benefits","children":[]},{"level":2,"title":"Current Sponsors","slug":"current-sponsors","link":"#current-sponsors","children":[{"level":3,"title":"Special Global Sponsor","slug":"special-global-sponsor","link":"#special-global-sponsor","children":[]},{"level":3,"title":"Platinum","slug":"platinum","link":"#platinum","children":[]},{"level":3,"title":"Platinum (China)","slug":"platinum-china","link":"#platinum-china","children":[]},{"level":3,"title":"Gold","slug":"gold","link":"#gold","children":[]},{"level":3,"title":"Silver","slug":"silver","link":"#silver","children":[]}]}],"relativePath":"sponsor/index.md","filePath":"sponsor/index.md"}'),R={name:"sponsor/index.md"},H=Object.assign(R,{setup(m){return(s,o)=>(i(),r("div",null,[o[0]||(o[0]=G('<h1 id="become-a-vue-js-sponsor" tabindex="-1">Become a TypeScript Sponsor <a class="header-anchor" href="#become-a-vue-js-sponsor" aria-label="Permalink to &quot;Become a TypeScript Sponsor {#become-a-vue-js-sponsor}&quot;">​</a></h1><p>TypeScript is an MIT licensed open source project and completely free to use. The tremendous amount of effort needed to maintain such a large ecosystem and develop new features for the project is only made sustainable thanks to the generous financial backing of our sponsors.</p><h2 id="how-to-sponsor" tabindex="-1">How to Sponsor <a class="header-anchor" href="#how-to-sponsor" aria-label="Permalink to &quot;How to Sponsor {#how-to-sponsor}&quot;">​</a></h2><p>Sponsorships can be done via <a href="https://github.com/sponsors/yyx990803" target="_blank" rel="noreferrer">GitHub Sponsors</a> or <a href="https://opencollective.com/TypeScript" target="_blank" rel="noreferrer">OpenCollective</a>. Invoices can be obtained via GitHub&#39;s payment system. Both monthly-recurring sponsorships and one-time donations are accepted. Recurring sponsorships are entitled to logo placements as specified in <a href="#tier-benefits">Sponsorship Tiers</a>.</p><p>If you have questions regarding tiers, payment logistics, or sponsor exposure data, please reach out to <a href="mailto:sponsor@TypeScript.org" target="_blank" rel="noreferrer">sponsor@TypeScript.org</a>.</p><h2 id="sponsoring-vue-as-a-business" tabindex="-1">Sponsoring Vue as a Business <a class="header-anchor" href="#sponsoring-vue-as-a-business" aria-label="Permalink to &quot;Sponsoring Vue as a Business {#sponsoring-vue-as-a-business}&quot;">​</a></h2><p>Sponsoring Vue gives you great exposure to over <strong>1.7 million</strong> Vue developers around the world through our website and GitHub project READMEs. In addition, supporting OSS improves the reputation of your brand, which is an important asset for any company that interacts with developers.</p><p>If you are using Vue to build a revenue-generating product, it makes business sense to sponsor Vue&#39;s development: <strong>it ensures the project that your product relies on stays healthy and actively maintained.</strong> The exposure and positive brand image in the Vue community also makes it easier to attract and recruit Vue developers.</p><p>If you are building a product where your target customers are developers, you will gain high quality traffic through the sponsorship exposure, since all our visitors are developers. The sponsorship also builds brand recognition and improves conversion.</p><h2 id="sponsoring-vue-as-an-individual" tabindex="-1">Sponsoring Vue as an Individual <a class="header-anchor" href="#sponsoring-vue-as-an-individual" aria-label="Permalink to &quot;Sponsoring Vue as an Individual {#sponsoring-vue-as-an-individual}&quot;">​</a></h2><p>If you are an individual user and have enjoyed the productivity of using Vue, consider donating as a sign of appreciation - like buying us coffee once in a while. Many of our team members accept sponsorships and donations via GitHub Sponsors. Look for the &quot;Sponsor&quot; button on each team member&#39;s profile on our <a href="/about/team.html">team page</a>.</p><p>You can also try to convince your employer to sponsor Vue as a business. This may not be easy, but business sponsorships typically make a much larger impact on the sustainability of OSS projects than individual donations, so you will help us much more if you succeed.</p><h2 id="tier-benefits" tabindex="-1">Tier Benefits <a class="header-anchor" href="#tier-benefits" aria-label="Permalink to &quot;Tier Benefits {#tier-benefits}&quot;">​</a></h2><ul><li><strong>Global Special</strong>: <ul><li>Limited to one sponsor globally (currently filled).</li><li>Exclusive above the fold logo placement on the front page of <a href="/">TypeScript.org</a>.</li><li>Most prominent logo placement in all locations from tiers below.</li></ul></li><li><strong>Platinum (USD$2,000/mo)</strong>: <ul><li>Prominent logo placement on the front page of <a href="/">TypeScript.org</a>.</li><li>Prominent logo placement in sidebar of all content pages.</li><li>Prominent logo placement in the README of <a href="https://github.com/hyaliyun/TypeScript/core" target="_blank" rel="noreferrer"><code>TypeScript/core</code></a> and <a href="https://github.com/hyaliyun/TypeScript/core" target="_blank" rel="noreferrer"><code>TypeScript/vue</code></a>.</li></ul></li><li><strong>Gold (USD$500/mo)</strong>: <ul><li>Large logo placement on the front page of <a href="/">TypeScript.org</a>.</li><li>Large logo placement in the README of <code>TypeScript/core</code> and <code>TypeScript/vue</code>.</li></ul></li><li><strong>Silver (USD$250/mo)</strong>: <ul><li>Medium logo placement in the <code>BACKERS.md</code> file of <code>TypeScript/core</code> and <code>TypeScript/vue</code>.</li></ul></li><li><strong>Bronze (USD$100/mo)</strong>: <ul><li>Small logo placement in the <code>BACKERS.md</code> file of <code>TypeScript/core</code> and <code>TypeScript/vue</code>.</li></ul></li><li><strong>Generous Backer (USD$50/mo)</strong>: <ul><li>Name listed in the <code>BACKERS.md</code> file of <code>TypeScript/core</code> and <code>TypeScript/vue</code>, above other individual backers.</li></ul></li><li><strong>Individual Backer (USD$5/mo)</strong>: <ul><li>Name listed in the <code>BACKERS.md</code> file of <code>TypeScript/core</code> and <code>TypeScript/vue</code>.</li></ul></li></ul><h2 id="current-sponsors" tabindex="-1">Current Sponsors <a class="header-anchor" href="#current-sponsors" aria-label="Permalink to &quot;Current Sponsors {#current-sponsors}&quot;">​</a></h2><h3 id="special-global-sponsor" tabindex="-1">Special Global Sponsor <a class="header-anchor" href="#special-global-sponsor" aria-label="Permalink to &quot;Special Global Sponsor {#special-global-sponsor}&quot;">​</a></h3>',16)),p(c,{tier:"special",placement:"page"}),o[1]||(o[1]=a("h3",{id:"platinum",tabindex:"-1"},[d("Platinum "),a("a",{class:"header-anchor",href:"#platinum","aria-label":'Permalink to "Platinum {#platinum}"'},"​")],-1)),p(c,{tier:"platinum",placement:"page"}),o[2]||(o[2]=a("h3",{id:"platinum-china",tabindex:"-1"},[d("Platinum (China) "),a("a",{class:"header-anchor",href:"#platinum-china","aria-label":'Permalink to "Platinum (China) {#platinum-china}"'},"​")],-1)),p(c,{tier:"platinum_china",placement:"page"}),o[3]||(o[3]=a("h3",{id:"gold",tabindex:"-1"},[d("Gold "),a("a",{class:"header-anchor",href:"#gold","aria-label":'Permalink to "Gold {#gold}"'},"​")],-1)),p(c,{tier:"gold",placement:"page"}),o[4]||(o[4]=a("h3",{id:"silver",tabindex:"-1"},[d("Silver "),a("a",{class:"header-anchor",href:"#silver","aria-label":'Permalink to "Silver {#silver}"'},"​")],-1)),p(c,{tier:"silver",placement:"page"})]))}});export{A as __pageData,H as default};
