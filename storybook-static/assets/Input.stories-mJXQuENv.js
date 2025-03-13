import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const i=({name:p,register:t,label:s,error:u})=>r.jsxs("label",{className:"relative flex flex-col w-full",children:[s,r.jsx("input",{className:"input",placeholder:`Your ${s}`,...t?t(p):""}),r.jsx("p",{className:"absolute -bottom-5 text-orange-500 text-sm",children:u??" "})]});i.__docgenInfo={description:"",methods:[],displayName:"Input",props:{name:{required:!0,tsType:{name:"Inputs"},description:""},register:{required:!0,tsType:{name:"union",raw:"UseFormRegister<Inputs> | undefined",elements:[{name:"UseFormRegister",elements:[{name:"Inputs"}],raw:"UseFormRegister<Inputs>"},{name:"undefined"}]},description:""},label:{required:!0,tsType:{name:"string"},description:""},error:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""}}};const m={title:"Input",component:i,tags:["autodocs"],argTypes:{register:{table:{disable:!0}},name:{table:{disable:!0}},error:{control:{type:"select"},options:["No Error","Show Error"],mapping:{"Show Error":"Some error message","No Error":void 0},description:"If Validation failed"}}},e={parameters:{docs:{description:{story:"Input allow users to write data to interact with web application."}}},args:{label:"Input"}};var o,n,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Input allow users to write data to interact with web application."
      }
    }
  },
  args: {
    label: 'Input'
  }
}`,...(a=(n=e.parameters)==null?void 0:n.docs)==null?void 0:a.source}}};const c=["InputStories"];export{e as InputStories,c as __namedExportsOrder,m as default};
