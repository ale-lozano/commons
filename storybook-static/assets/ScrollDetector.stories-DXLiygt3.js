import{f as v}from"./index-BASH1HpE.js";import{j as t}from"./jsx-runtime-Du8NFWEI.js";import{r as d}from"./index-Dl6G-zuu.js";function S(e){const[s,o]=d.useState({isVisible:void 0,entry:void 0}),n=([r])=>{o({isVisible:r.isIntersecting,entry:r})};return d.useEffect(()=>{if(!e.current){o({isVisible:void 0,entry:void 0});return}const r=e==null?void 0:e.current;if(!!!window.IntersectionObserver||!r)return;const p=new IntersectionObserver(n);return p.observe(r),()=>p.disconnect()},[e.current]),s}function y({show:e,callback:s,style:o={marginTop:"2px",height:"2px",width:"100%"}}){const n=d.useRef(null),{isVisible:r}=S(n);return d.useEffect(()=>{e&&s(!!r)},[r,e,s]),t.jsx(t.Fragment,{children:e?t.jsx("div",{ref:n,style:o}):t.jsx(t.Fragment,{})})}y.__docgenInfo={description:"",methods:[],displayName:"ScrollDetector",props:{show:{required:!0,tsType:{name:"boolean"},description:"Determines if the thetector showld hava a display"},callback:{required:!0,tsType:{name:"signature",type:"function",raw:"(visible: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"visible"}],return:{name:"void"}}},description:`This callback will be triggered when the parameter show is true
and the element visivility changes`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:`This will be the stile for the Scroll Detector container
@default
{
   marginTop: \`2px\`,
   height: "2px",
   width: "100%",
}`,defaultValue:{value:`{
  marginTop: \`2px\`,
  height: "2px",
  width: "100%",
}`,computed:!1}}}};const j={title:"Utils/ScrollDetector",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{},args:{callback:v()}},a={args:{show:!0}},i={args:{show:!1}},c={args:{show:!0,style:{backgroundColor:"red",height:"10px",width:"100px",margin:"auto",borderRadius:"1000px"}}};var u,l,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    show: true
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var h,g,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    show: false
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,w,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    show: true,
    style: {
      backgroundColor: "red",
      height: "10px",
      width: "100px",
      margin: "auto",
      borderRadius: "1000px"
    }
  }
}`,...(x=(w=c.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};const D=["Primary","Hidden","Styled"];export{i as Hidden,a as Primary,c as Styled,D as __namedExportsOrder,j as default};
