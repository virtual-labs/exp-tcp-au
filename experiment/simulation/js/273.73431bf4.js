"use strict";(self["webpackChunkexp_1"]=self["webpackChunkexp_1"]||[]).push([[273],{2037:function(e,t,n){n.r(t),n.d(t,{default:function(){return xe}});var i=n(3396),a=n(9242),o=n.p+"img/workstation.38593c56.svg",s=n.p+"img/server.9bcd39ee.svg";const c={class:"flex-box"},r=(0,i._)("div",{id:"snackbar"},"Some text some message..",-1),l={class:"rem-space"},u={class:"row-1"},p={class:"instructions"},d={key:0},g=(0,i._)("br",null,null,-1),m=(0,i._)("br",null,null,-1),h={key:1},k=(0,i._)("br",null,null,-1),f=(0,i._)("br",null,null,-1),y=(0,i._)("br",null,null,-1),w=(0,i._)("br",null,null,-1),S=(0,i._)("span",{class:"bold"},"clientSYN + 1",-1),b=(0,i._)("br",null,null,-1),v=(0,i._)("br",null,null,-1),x={key:2},D={key:0},C={key:1},_={key:2},N={class:"input-field"},E={key:0},I={key:2},T={key:4},B={class:"button-row"},P={class:"row-2"},q=(0,i._)("img",{src:o,width:"180",height:"180",alt:"computer"},null,-1),A=(0,i._)("img",{src:s,width:"180",height:"180",alt:"computer"},null,-1);function L(e,t,n,o,s,L){const W=(0,i.up)("StyledButton"),R=(0,i.up)("EndSystemComponent"),Y=(0,i.up)("NetworkInteractionComponent");return(0,i.wg)(),(0,i.iD)("div",c,[r,(0,i._)("div",l,[(0,i._)("div",u,[(0,i._)("div",p,[1===s.executionStep?((0,i.wg)(),(0,i.iD)("p",d,[(0,i.Uk)(" The client initiates a connection with server by sending a TCP SYN packet. "),g,m,(0,i.Uk)(" The first SYN message contains a random number (Initial Synchronise Number), unique to each new connection. ")])):(0,i.kq)("",!0),2===s.executionStep||3===s.executionStep?((0,i.wg)(),(0,i.iD)("p",h,[(0,i.Uk)(" The server responds with a SYN + ACK packet. "),k,f,(0,i.Uk)(" SYN indicates the random sequence number that the server will be using. "),y,w,(0,i.Uk)(" ACK is an acknowledgement to the client’s SYN and is calculated as "),S,(0,i.Uk)(". "),b,v])):(0,i.kq)("",!0),3===s.executionStep?((0,i.wg)(),(0,i.iD)("p",x," Now, data packet transfer can begin. Try transferring a packet from the client to the server. ")):(0,i.kq)("",!0)]),1===s.executionStep?((0,i.wg)(),(0,i.iD)("h4",D,"Step 1")):(0,i.kq)("",!0),2===s.executionStep?((0,i.wg)(),(0,i.iD)("h4",C,"Step 2")):(0,i.kq)("",!0),3===s.executionStep?((0,i.wg)(),(0,i.iD)("h4",_,"Step 3")):(0,i.kq)("",!0),(0,i._)("div",N,[1===s.executionStep?((0,i.wg)(),(0,i.iD)("p",E," To begin, enter a random four digit number here that will be used as the ISN to initiate communication. ")):(0,i.kq)("",!0),1===s.executionStep?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:1,style:{"margin-top":"20px"},"onUpdate:modelValue":t[0]||(t[0]=e=>s.ackNumber=e)},null,512)),[[a.nr,s.ackNumber]]):(0,i.kq)("",!0),2===s.executionStep?((0,i.wg)(),(0,i.iD)("p",I," Enter a random number that will be SYN for the server. ")):(0,i.kq)("",!0),2===s.executionStep?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:3,style:{"margin-top":"20px"},"onUpdate:modelValue":t[1]||(t[1]=e=>s.synNumber=e)},null,512)),[[a.nr,s.synNumber]]):(0,i.kq)("",!0),3===s.executionStep?((0,i.wg)(),(0,i.iD)("p",T," Enter a random string to send to the server ")):(0,i.kq)("",!0),3===s.executionStep?(0,i.wy)(((0,i.wg)(),(0,i.iD)("input",{key:5,style:{"margin-top":"20px"},"onUpdate:modelValue":t[2]||(t[2]=e=>s.clientData=e)},null,512)),[[a.nr,s.clientData]]):(0,i.kq)("",!0)]),(0,i._)("div",B,[(0,i._)("div",null,[s.isExecuting||1!==s.executionStep?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(W,{key:0,text:"Begin","click-function":L.stepOne},null,8,["click-function"])),s.isExecuting||2!==s.executionStep?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(W,{key:1,text:"Continue","click-function":L.stepTwo,"background-color":"#349C1A"},null,8,["click-function"])),s.isExecuting||3!==s.executionStep?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(W,{key:2,text:"Continue","click-function":L.stepThree,"background-color":"#349C1A"},null,8,["click-function"]))]),(0,i._)("div",null,[s.isExecuting||1===s.executionStep?(0,i.kq)("",!0):((0,i.wg)(),(0,i.j4)(W,{key:0,text:"Reset","click-function":L.reset},null,8,["click-function"]))])])]),(0,i._)("div",P,[(0,i.Wm)(Y,{ref:"childComponentRef"},{default:(0,i.w5)((()=>[(0,i.Wm)(R,{class:"box",id:"computer1","package-id":"package1",top:"55%",left:"10%",ref:"computer1",data:L.packageDataProcessed,"display-package":s.displayPackage},{default:(0,i.w5)((()=>[q])),_:1},8,["data","display-package"]),(0,i.Wm)(R,{class:"box",id:"computer2",top:"10%",left:"70%"},{default:(0,i.w5)((()=>[A])),_:1})])),_:1},512)])])])}n(7658);var W=n(7139);const R=e=>((0,i.dD)("data-v-a42d58b6"),e=e(),(0,i.Cn)(),e),Y={id:"top-bar"},H=R((()=>(0,i._)("div",{class:"side-space"},null,-1))),$={class:"title"},U=R((()=>(0,i._)("div",{class:"side-space"},[(0,i._)("button",{class:"submit-report"},"Report a Bug")],-1)));function j(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",Y,[H,(0,i._)("div",$,(0,W.zw)(n.title),1),U])}var V={name:"TopBar",props:{title:{type:String,default:"Packet Simulator"}}},Z=n(89);const O=(0,Z.Z)(V,[["render",j],["__scopeId","data-v-a42d58b6"]]);var F=O;const K=e=>((0,i.dD)("data-v-52223f06"),e=e(),(0,i.Cn)(),e),M={id:"margin-container"},z={id:"root"},G=K((()=>(0,i._)("svg",{id:"lineCanvas"},null,-1))),J={id:"overlay"};function Q(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",M,[(0,i._)("div",z,[G,(0,i._)("div",J,[(0,i.WI)(e.$slots,"default",{},void 0,!0)])])])}var X={name:"NetworkInteractionComponent",mounted(){let e=document.getElementById("margin-container").getBoundingClientRect(),t=e.width-50+"px",n=e.height-50+"px";document.getElementById("root").style.width=t,document.getElementById("root").style.height=n,document.getElementById("lineCanvas").style.width=t,document.getElementById("lineCanvas").style.height=n,document.getElementById("overlay").style.width=t,document.getElementById("overlay").style.height=n},methods:{drawSVGLine(e,t,n,i){let a=document.getElementById("lineCanvas"),o=document.createElementNS("http://www.w3.org/2000/svg","line");o.setAttribute("x1",e),o.setAttribute("y1",t),o.setAttribute("x2",n),o.setAttribute("y2",i),o.setAttribute("style","stroke:rgb(0,0,0);stroke-width:1"),a.appendChild(o)},animatePackageNew(e,t,n){let i=document.getElementById(t),a=document.getElementById(e),o=document.getElementById(n),s=document.getElementById("overlay"),c=40,r=i.offsetHeight/2,l=o.offsetLeft+o.offsetWidth,u=o.offsetTop+o.offsetHeight;i.style.left=l+"px",i.style.top=u+"px",i.remove(),s.appendChild(i),i.style.left=l+"px",i.style.top=u+"px";let p=o.offsetLeft+o.offsetWidth/2-c,d=o.offsetTop+o.offsetHeight/2-r;i.style.left=p+"px",i.style.top=d+"px",setTimeout((()=>{let e=a.offsetLeft+a.offsetWidth/2-c,t=a.offsetTop+a.offsetHeight/2-r;i.style.left=e+"px",i.style.top=t+"px",setTimeout((()=>{let e=a.offsetLeft+a.offsetWidth,t=a.offsetTop+a.offsetHeight;i.style.left=e+"px",i.style.top=t+"px"}),2e3)}),2e3)},drawLine(e,t){let n=document.getElementById(e),i=document.getElementById(t),a=n.offsetLeft+n.offsetWidth/2,o=n.offsetTop+n.offsetHeight/2,s=i.offsetLeft+i.offsetWidth/2,c=i.offsetTop+i.offsetHeight/2;this.drawSVGLine(a,o,s,c)}}};const ee=(0,Z.Z)(X,[["render",Q],["__scopeId","data-v-52223f06"]]);var te=ee;const ne=["id"],ie={id:"endSystemVector"},ae=["id"];function oe(e,t,n,a,o,s){const c=(0,i.up)("PackageComponent");return(0,i.wg)(),(0,i.iD)("div",{class:(0,W.C_)([n.Class,"rootElementEndSystem"]),id:n.Id,style:(0,W.j5)({top:n.top,left:n.left})},[(0,i._)("div",ie,[(0,i.WI)(e.$slots,"default",{},void 0,!0)]),s.isPackageSet&&n.displayPackage?((0,i.wg)(),(0,i.iD)("div",{key:0,style:(0,W.j5)([{position:"absolute",right:"-88px"},s.animationDuration]),id:n.packageId},[(0,i.Wm)(c,{data:n.data},null,8,["data"])],12,ae)):(0,i.kq)("",!0)],14,ne)}const se=["id"],ce={id:"packageBox"},re={class:"packageText"},le={key:0,class:"dash"};function ue(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("div",{id:n.id},[(0,i._)("div",ce,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.data,((e,t)=>((0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("div",re,(0,W.zw)(e),1),s.addDash(t)?((0,i.wg)(),(0,i.iD)("div",le)):(0,i.kq)("",!0)])))),128))])],8,se)}var pe={name:"PackageComponent",methods:{addDash(e){return this.data.length!==e+1}},props:{data:{type:Array},id:{type:String}}};const de=(0,Z.Z)(pe,[["render",ue],["__scopeId","data-v-03218cf6"]]);var ge=de,me={name:"EndSystemComponent",components:{PackageComponent:ge},data(){return{animationSeconds:1}},props:{Class:{type:String},Id:{type:String},packageId:{type:String},top:{type:String},left:{type:String},data:{type:Array},displayPackage:{type:Boolean,default:!0}},methods:{disableAnimation(){this.animationSeconds=0},enableAnimation(){this.animationSeconds=1}},computed:{packagePosition(){return"-50px"},isPackageSet(){return void 0!==this.packageId},animationDuration(){return{transition:"ease-in-out "+this.animationSeconds+"s"}}}};const he=(0,Z.Z)(me,[["render",oe],["__scopeId","data-v-46c40856"]]);var ke=he;function fe(e,t,n,a,o,s){return(0,i.wg)(),(0,i.iD)("button",{style:(0,W.j5)(s.buttonStyle),onClick:t[0]||(t[0]=(...e)=>n.clickFunction&&n.clickFunction(...e))},(0,W.zw)(n.text),5)}var ye={name:"StyledButton",props:{backgroundColor:{type:String,default:"#288EC8"},textColor:{type:String,default:"white"},text:{type:String,default:"Button"},clickFunction:{type:Function,default:()=>{}}},computed:{buttonStyle(){return{backgroundColor:this.backgroundColor,color:this.textColor}}}};const we=(0,Z.Z)(ye,[["render",fe],["__scopeId","data-v-62d76b7c"]]);var Se=we,be={name:"App",components:{StyledButton:Se,EndSystemComponent:ke,NetworkInteractionComponent:te,TopBar:F},mounted(){this.$refs.childComponentRef.drawLine("computer1","computer2")},data(){return{packageData:[],displayPackage:!1,executionStep:1,synNumber:0,ackNumber:0,clientData:"",currentStep:1,isExecuting:!1}},computed:{packageDataProcessed(){return 2!==this.packageData.length?this.packageData:this.packageData.map(((e,t)=>0===t?e+" (ack)":1===t?e+" (syn)":void 0))}},methods:{reset(){this.$refs.computer1.disableAnimation(),this.$refs.childComponentRef.animatePackageNew("computer1","package1","computer2"),this.$refs.computer1.enableAnimation(),this.packageData=[],this.displayPackage=!1,this.executionStep=1,this.currentStep=1,this.isExecuting=!1,this.synNumber=0,this.ackNumber=0,this.clientData=""},correct1(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="green",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},incorrect(e){var t=document.getElementById("snackbar");t.innerHTML=e,t.style.backgroundColor="red",t.className="show",setTimeout((function(){t.className=t.className.replace("show","")}),3e3)},stepOne(){this.beginStepOne(this.ackNumber)},stepTwo(){this.beginStepTwo(this.synNumber)},stepThree(){this.beginStepThree(this.clientData)},beginStepOne(e){isNaN(e)||4!==parseInt(e).toString().length?(this.incorrect("Make sure your SYN number is of 4 digits"),this.isExecuting=!1,this.displayPackage=!1):(this.packageData=[],this.isExecuting=!0,this.packageData.push(parseInt(e)),this.displayPackage=!0,setTimeout((()=>{this.$refs.childComponentRef.animatePackageNew("computer2","package1","computer1"),setTimeout((()=>{this.isExecuting=!1,this.executionStep=2,this.currentStep=2}),7e3)}),1e3))},beginStepTwo(e){isNaN(e)||4!==parseInt(e).toString().length?(this.isExecuting=!1,this.incorrect("Make sure your SYN number is of 4 digits")):(this.packageData[this.packageData.length-1]=this.packageData[this.packageData.length-1]+1,this.isExecuting=!0,this.packageData.push(parseInt(e)),this.displayPackage=!0,setTimeout((()=>{this.$refs.childComponentRef.animatePackageNew("computer1","package1","computer2"),setTimeout((()=>{this.isExecuting=!1,this.executionStep=3,this.currentStep=2}),7e3)}),1e3),this.correct1("Note that the ACK value is SYN+1"))},beginStepThree(e){this.isExecuting=!0,this.packageData=[],this.packageData.push(e),this.displayPackage=!0,setTimeout((()=>{this.$refs.childComponentRef.animatePackageNew("computer2","package1","computer1"),setTimeout((()=>{this.$refs.childComponentRef.animatePackageNew("computer1","package1","computer2"),this.packageData=[],this.packageData.push("(RESPONSE)"),setTimeout((()=>{this.isExecuting=!1}),7e3)}),7e3)}),1e3)}}};const ve=(0,Z.Z)(be,[["render",L]]);var xe=ve}}]);
//# sourceMappingURL=273.73431bf4.js.map