(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[285],{6700:function(e,s,i){Promise.resolve().then(i.bind(i,2529))},2529:function(e,s,i){"use strict";i.r(s);var n=i(7437);i(2265);var r=i(9343),t=i(1572),l=i(968),a=i(584);s.default=()=>{let{register:e,reset:s,handleSubmit:i,formState:{errors:o}}=(0,r.cI)(),[m]=(0,l.T)(),[d]=(0,a.n)(),c=async e=>{let i=m.map(e=>({name:e.title,price:e.price,quantity:e.quantity})),n={message:e.message,email:e.email,phone:e.phone,product:i,totalCost:d},r={from_name:e.name,from_email:e.email,to_name:"Sir",message:n};t.ZP.send("service_s5yl8eh","template_9ztgis9",r,"94clsVy6Hs60yiQQ7").then(e=>{console.log("ok",e)}).catch(e=>{console.log("error",e)}),s()};return(0,n.jsx)("div",{children:(0,n.jsxs)("div",{className:"text-black bg-rgb-2-6-23 px-4 sm:px-6 lg:px-8 py-8",children:[(0,n.jsx)("div",{className:"py-5",children:(0,n.jsx)("h2",{className:"text-4xl font-bold",children:"Complete Your Order"})}),(0,n.jsx)("div",{className:"grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 m-auto",children:(0,n.jsx)("div",{className:"px-4 sm:px-6 sm:col-span-3 sm:py-6 lg:py-8 shadow-xl",children:(0,n.jsx)("form",{noValidate:!0,method:"POST",onSubmit:i(c),children:(0,n.jsxs)("div",{className:" pb-12 mt-5",children:[(0,n.jsxs)("div",{className:"mt-10 ",children:[(0,n.jsxs)("div",{className:"sm:col-span-4 ",children:[(0,n.jsx)("label",{htmlFor:"full-name",className:"block text-sm font-medium leading-6 ",children:"Full name"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("input",{type:"text",...e("name",{required:"Name is required"}),id:"name",placeholder:"Enter your name",className:"block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,n.jsxs)("div",{className:"sm:col-span-4",children:[(0,n.jsx)("label",{htmlFor:"email",className:"block text-sm font-medium leading-6 ",children:"Email address"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("input",{id:"email",...e("email",{required:"Email is required",pattern:{value:/^([0-9a-zA-Z].*?@([0-9a-zA-Z].*\.\w{2,4}))$/gm,message:"Please enter a valid email address"}}),type:"email",autoComplete:"email",placeholder:"Enter your email",className:"block w-full rounded-md border-0 py-1.5  p-2 sm:p-4  shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,n.jsxs)("div",{className:"sm:col-span-4",children:[(0,n.jsx)("label",{htmlFor:"phone",className:"block text-sm font-medium leading-6",children:"Contact Number"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("input",{id:"phone",...e("phone",{required:"Contact number is required",pattern:{value:/^[0-9]{10}$/,message:"Please enter a valid phone number"}}),type:"tel",autoComplete:"tel",placeholder:"Enter your phone number",className:"block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset ring-gray-300 bg-rgb-2-6-23 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"})})]}),(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("label",{htmlFor:"message",className:"block text-sm font-medium leading-6",children:"Short description"}),(0,n.jsx)("div",{className:"mt-2",children:(0,n.jsx)("textarea",{...e("message",{required:"Short description of your project"}),id:"message",rows:4,className:"block w-full rounded-md border-0 py-1.5 p-2 sm:p-4 shadow-sm ring-1 ring-inset bg-rgb-2-6-23 ring-gray-100 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",placeholder:"Write your thoughts here..."})})]})]}),(0,n.jsx)("div",{className:"mt-6 flex items-center justify-end gap-x-6",children:(0,n.jsx)("button",{type:"submit",className:"rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",children:"Submit"})})]})})})})]})})}},584:function(e,s,i){"use strict";i.d(s,{QtyProvider:function(){return l},n:function(){return a}});var n=i(7437),r=i(2265);let t=(0,r.createContext)();function l(e){let{children:s}=e,[i,l]=(0,r.useState)(0);return(0,n.jsx)(t.Provider,{value:[i,l],children:s})}function a(){return(0,r.useContext)(t)}},968:function(e,s,i){"use strict";i.d(s,{T:function(){return a},ThemeProvider:function(){return l}});var n=i(7437),r=i(2265);let t=(0,r.createContext)();function l(e){let{children:s}=e,[i,l]=(0,r.useState)([]);return(0,n.jsx)(t.Provider,{value:[i,l],children:s})}function a(){return(0,r.useContext)(t)}}},function(e){e.O(0,[752,971,23,744],function(){return e(e.s=6700)}),_N_E=e.O()}]);