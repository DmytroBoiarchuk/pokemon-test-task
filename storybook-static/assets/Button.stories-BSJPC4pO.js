import{j as u}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const s=({children:n,appearance:o,size:i,className:l,...p})=>u.jsx("button",{className:`btn-${o} btn-${i} ${l}`,...p,children:n});s.__docgenInfo={description:"",methods:[],displayName:"Button",props:{appearance:{required:!0,tsType:{name:"union",raw:'"primary" | "outline" | "text"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"text"'}]},description:""},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "base" | "lg" | "xl"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"base"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:""}},composes:["ButtonHTMLAttributes"]};const d={title:"Button",component:s,tags:["autodocs"],argTypes:{children:{control:{type:"text"},description:"Text inside the button"}}},e={parameters:{docs:{description:{story:"Buttons allow users to make choices, take actions, and help guide around an interface with a single tap."}}},args:{size:"lg",disabled:!1,appearance:"primary",children:"BUTTON"}};var t,a,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Buttons allow users to make choices, take actions, and help guide around an interface with a single tap."
      }
    }
  },
  args: {
    size: 'lg',
    disabled: false,
    appearance: 'primary',
    children: "BUTTON"
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const g=["ButtonStories"];export{e as ButtonStories,g as __namedExportsOrder,d as default};
