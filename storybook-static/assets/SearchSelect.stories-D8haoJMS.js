import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-Dh8cFXwY.js";import"./index-yBjzXJbu.js";function N({title:r,titleId:a,...o},n){return l.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":a},o),r?l.createElement("title",{id:a},r):null,l.createElement("path",{fillRule:"evenodd",d:"M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z",clipRule:"evenodd"}))}const P=l.forwardRef(N),w=({badges:r,setBadges:a})=>{const o=n=>{const t=r.filter(u=>u!==n);a("chosenTeam",t)};return e.jsx("div",{className:" flex items-center",children:r.map((n,t)=>e.jsxs("span",{className:"inline-flex whitespace-nowrap justify-center items-center bg-blue-200 text-blue-800 text-sm font-medium py-0.5 px-2.5 rounded-full mr-2",children:[n,e.jsx("button",{type:"button",onMouseDown:()=>o(n),className:"ml-2 text-blue-500 hover:text-blue-700",children:e.jsx(P,{className:"w-5 h-5 text-gray-500"})})]},t))})};w.__docgenInfo={description:"",methods:[],displayName:"BadgesList",props:{badges:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setBadges:{required:!0,tsType:{name:"UseFormSetValue",elements:[{name:"Inputs"}],raw:"UseFormSetValue<Inputs>"},description:""}}};const c=({pokemons:r,name:a,register:o,label:n,teamValue:t,setTeamValue:u,error:y})=>{const[S,p]=l.useState(!1),[v,g]=l.useState(""),[k,d]=l.useState([]),j=i=>{g("");const s=i.currentTarget.dataset.value;s&&u("chosenTeam",[...t,s.toLowerCase()]),d([])},T=i=>{const s=i.target.value;g(s),s!==""&&d(r.filter(h=>h.name.toLowerCase().startsWith(s.toLowerCase())&&!t.includes(h.name.toLowerCase()))),s===""&&d([])};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"relative w-[45vw]",children:[e.jsxs("label",{className:"relative flex flex-col",children:[n,e.jsxs("div",{className:"flex input justify-center overflow-hidden items-center max-h-8 bg-white border-2 border-gray-300 p-2 rounded-lg",children:[e.jsx(w,{badges:t,setBadges:u}),e.jsx("input",{...o?o(a):"",disabled:t.length>3,className:"text-black rounded flex-1 border-0 outline-none focus:ring-0 w-full",type:"search",onFocus:()=>p(!0),onBlur:()=>p(!1),placeholder:"Chose a pokemon",onChange:T,value:v})]}),e.jsx("p",{className:"absolute -bottom-5 text-orange-500 text-sm",children:y??" "})]}),S&&e.jsx("ul",{className:"w-full absolute flex flex-col max-h-48 overflow-auto z-10",children:k.map(i=>e.jsx("li",{className:"bg-amber-50 text-black p-1",onMouseDown:s=>j(s),"data-value":i.name,children:i.name},i.url))})]})})};c.__docgenInfo={description:"",methods:[],displayName:"SearchSelect",props:{pokemons:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  name: string;
  url: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!0}}]}}],raw:`{
  name: string;
  url: string;
}[]`},description:""},name:{required:!0,tsType:{name:"Inputs"},description:""},register:{required:!0,tsType:{name:"union",raw:"UseFormRegister<Inputs> | undefined",elements:[{name:"UseFormRegister",elements:[{name:"Inputs"}],raw:"UseFormRegister<Inputs>"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},teamValue:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},setTeamValue:{required:!0,tsType:{name:"UseFormSetValue",elements:[{name:"Inputs"}],raw:"UseFormSetValue<Inputs>"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};const q=[{name:"Pikachu",url:"1"},{name:"Charmander",url:"2"},{name:"Squirtle",url:"3"},{name:"Bulbasaur",url:"4"},{name:"Jigglypuff",url:"5"},{name:"Meowth",url:"6"},{name:"Psyduck",url:"7"},{name:"Snorlax",url:"8"},{name:"Gengar",url:"9"},{name:"Eevee",url:"10"}],I=r=>{const[a,o]=l.useState([]);return e.jsx(c,{...r,teamValue:a,setTeamValue:(n,t)=>o(t)})},V={title:"Components/SearchSelect",component:c,argTypes:{register:{table:{disable:!0}},name:{table:{disable:!0}},setTeamValue:{table:{disable:!0}},pokemons:{table:{disable:!0}},teamValue:{table:{disable:!0}},error:{control:{type:"select"},options:["No Error","Show Error"],mapping:{"Show Error":"Some error message","No Error":void 0},description:"If Validation failed"}},tags:["autodocs"],parameters:{controls:{expanded:!0}}},m={render:r=>e.jsx(I,{...r}),args:{pokemons:q,label:"Select Pokémon",error:void 0,name:"chosenTeam"},parameters:{docs:{description:{story:`Allows user to input text, and choose a result from the resulting list to show it as a badge inside the select.  
                    
        **Available Pokémons:**  
        - Pikachu  
        - Charmander  
        - Squirtle  
        - Bulbasaur  
        - Jigglypuff  
        - Meowth  
        - Psyduck  
        - Snorlax  
        - Gengar  
        - Eevee`}}}};var f,x,b;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <Template {...args} />,
  args: {
    pokemons: mockPokemons,
    label: "Select Pokémon",
    error: undefined,
    name: "chosenTeam"
  },
  parameters: {
    docs: {
      description: {
        story: \`Allows user to input text, and choose a result from the resulting list to show it as a badge inside the select.  
                    
        **Available Pokémons:**  
        - Pikachu  
        - Charmander  
        - Squirtle  
        - Bulbasaur  
        - Jigglypuff  
        - Meowth  
        - Psyduck  
        - Snorlax  
        - Gengar  
        - Eevee\`
      }
    }
  }
}`,...(b=(x=m.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const B=["Default"];export{m as Default,B as __namedExportsOrder,V as default};
