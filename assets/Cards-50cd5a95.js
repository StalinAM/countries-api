import{r as t,_ as d,A as p,u as h,j as o,F as g,a as n,s as l}from"./index-26b5a0f9.js";const f=t.lazy(()=>d(()=>import("./Flag-c43622c3.js"),["assets/Flag-c43622c3.js","assets/index-26b5a0f9.js"]));function v({countries:a}){const{setWordFilter:i}=t.useContext(p),c=h();function s(e){c(`/countrie/${e}`),i("a")}return o(g,{children:a==null?void 0:a.map(e=>{var r;return o("li",{onClick:()=>s(e.cca3.toLowerCase()),children:n(x,{children:[o(t.Suspense,{fallback:o("div",{children:"Cargando..."}),children:o(f,{src:e.flags.svg,alt:e.flags.alt?e.flags.alt:`The flag of ${e.name.common}`})}),n(m,{children:[o("h2",{children:e.name.common}),n(u,{children:[n("p",{children:["Population:",n("span",{children:[" ",e.population]})]}),n("p",{children:["Region:",n("span",{children:[" ",e.region]})]}),n("p",{children:["Capital:",n("span",{children:[" ",(r=e.capital)==null?void 0:r[0]]})]})]})]})]})},e.cca3)})})}const x=l.article`
  width: 275px;
  background-color: ${a=>a.theme.elements};
  border-radius: 9px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`,m=l.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  h2 {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${a=>a.theme.text};
  }
`,u=l.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.875rem;
    color: ${a=>a.theme.text};
    font-weight: 600;
    span {
      color: ${a=>a.theme.input};
      font-weight: 300;
    }
  }
`;export{v as default};
