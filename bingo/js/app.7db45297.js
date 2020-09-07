(function(e){function t(t){for(var n,r,l=t[0],s=t[1],d=t[2],u=0,m=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&m.push(i[r][0]),i[r]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);c&&c(t);while(m.length)m.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var s=a[l];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=n,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/xari-bingo/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var c=s;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),i=a.n(n);i.a},"06e4":function(e,t,a){},"11d0":function(e,t,a){},"40ed":function(e,t,a){"use strict";var n=a("11d0"),i=a.n(n);i.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},o=[],r={name:"app",components:{}},l=r,s=(a("034f"),a("2877")),d=Object(s["a"])(l,i,o,!1,null,null,null),c=d.exports,u=(a("20d6"),a("ac6a"),a("2f62"));n["default"].use(u["a"]);var m=new u["a"].Store({state:{isAuth:!1,version:"3.2.0",validationColor:"#00802b",bingoColor:"grey"},mutations:{addBingo:function(e,t){if(null===localStorage.getItem("xariBingo")||void 0===localStorage.getItem("xariBingo")||""===localStorage.getItem("xariBingo")){var a=[];a.push(t),localStorage.setItem("xariBingo",JSON.stringify(a))}else{var n=JSON.parse(localStorage.getItem("xariBingo")),i=null;n.forEach((function(e,a){e[0]===t[0]&&(i=a)})),null!=i?n[i]=t:n.push(t),localStorage.setItem("xariBingo",JSON.stringify(n))}},deleteBingo:function(e,t){var a=JSON.parse(localStorage.getItem("xariBingo")),n=a.findIndex((function(e){return e[0]===t[0]}));a.splice(n,1),localStorage.setItem("xariBingo",JSON.stringify(a))}},actions:{}}),h=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{key:e.bingoKey,staticClass:"bingo",class:{backgroundColor:e.edit}},[a("navbar",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}]},[a("b-input-group",{staticStyle:{"margin-left":"auto","margin-right":"auto",width:"20rem"},attrs:{id:"inputColLine"}},[a("b-input-group-prepend",[a("b-button",[a("font-awesome-icon",{attrs:{icon:"columns"}})],1),a("b-form-input",{staticStyle:{width:"4rem"},attrs:{type:"number"},on:{input:e.generateTab},model:{value:e.col,callback:function(t){e.col=t},expression:"col"}}),a("b-button",[a("font-awesome-icon",{staticStyle:{transform:"rotate(270deg)"},attrs:{icon:"columns"}})],1),a("b-form-input",{staticStyle:{width:"4rem"},attrs:{type:"number"},on:{input:e.generateTab},model:{value:e.line,callback:function(t){e.line=t},expression:"line"}}),a("b-button",[a("font-awesome-icon",{attrs:{icon:"text-width"}})],1),a("b-form-input",{staticStyle:{width:"4rem"},attrs:{type:"number"},on:{input:e.changeCell},model:{value:e.widthCell,callback:function(t){e.widthCell=t},expression:"widthCell"}})],1)],1)],1),a("table",{staticStyle:{"background-color":"white"}},[a("thead",[a("tr",{attrs:{id:"headerBingo"}},[a("th",{attrs:{colspan:"99"}},[a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"icon",staticStyle:{float:"left"},attrs:{size:"lg",icon:"save"},on:{click:e.openSaveBingoModal}}),a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"icon",staticStyle:{float:"left"},attrs:{size:"lg",icon:"share-alt"},on:{click:function(t){return e.getShareLink()}}}),a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"icon",staticStyle:{float:"right"},attrs:{size:"lg",icon:"dice"},on:{click:e.randomizer}}),a("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"icon",staticStyle:{float:"right"},attrs:{size:"lg",icon:"eraser"},on:{click:e.resetAll}}),a("p",{attrs:{id:"bingoName"}},[e._v("BINGO "+e._s(e.nom))])],1)])]),a("tbody",e._l(e.tab,(function(t,n){return a("tr",{key:n,staticClass:"strikeout",attrs:{oncontextmenu:"return false"}},e._l(t,(function(t,i){return a("td",{key:i,staticClass:"tdCell",on:{click:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"left",37,t.key,["Left","ArrowLeft"])?null:"button"in t&&0!==t.button?null:e.colorCell(n,i)},contextmenu:function(t){return e.uncolor(n,i)}}},[a("div",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"paramBarGradation"},[a("font-awesome-icon",{staticClass:"paramButton",attrs:{icon:"edit"},on:{click:function(t){return t.stopPropagation(),e.editCell(n,i)}}})],1),"string"==typeof t.valueOf()?a("div",[a("p",{staticClass:"cell",attrs:{id:e.generateId(n,i)}},[e._v(e._s(t.valueOf()))])]):e._l(t,(function(t,o){return a("div",{key:o},[a("p",0==o?{staticClass:"cell",attrs:{id:e.generateId(n,i)}}:{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"cell",attrs:{id:e.generateIdGradation(n,i,o)}},[e._v(e._s(t.valueOf()))])])}))],2)})),0)})),0)]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],style:e.buttonE,on:{click:e.swapMode}},[e._v("Mode BINGO !")]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!edit"}],style:e.buttonN,on:{click:e.swapMode}},[e._v("Mode EDITION")]),a("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.edit,expression:"!edit"}],staticClass:"buttonGB",on:{click:function(t){return e.goldenBuzzer()}}},[e._v("Golden Buzzer")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.edit,expression:"edit"}],staticClass:"bingoSave"},[a("table",{attrs:{border:"1"}},[e._m(0),a("tbody",[a("tr",[a("td",[e._v("Dernier Bingo Sauvegardé")]),a("td"),a("td"),a("td"),a("td",{on:{click:function(t){return e.appliquerLastSavedBingo()}}},[a("font-awesome-icon",{staticClass:"buttonS",attrs:{icon:"check"}})],1),a("td")]),a("tr",[a("td",[e._v("[Pré-config] Zevent")]),a("td",[e._v("7")]),a("td",[e._v("7")]),a("td",[e._v("8")]),a("td",{on:{click:function(t){return e.appliquerPC3()}}},[a("font-awesome-icon",{staticClass:"buttonS",attrs:{icon:"check"}})],1),a("td")]),a("tr",[a("td",[e._v("[Pré-config] Mariage")]),a("td",[e._v("5")]),a("td",[e._v("5")]),a("td",[e._v("8")]),a("td",{on:{click:function(t){return e.appliquerPC1()}}},[a("font-awesome-icon",{staticClass:"buttonS",attrs:{icon:"check"}})],1),a("td")]),a("tr",[a("td",[e._v("[Pré-config] Cauchemar")]),a("td",[e._v("5")]),a("td",[e._v("5")]),a("td",[e._v("8")]),a("td",{on:{click:function(t){return e.appliquerPC2()}}},[a("font-awesome-icon",{staticClass:"buttonS",attrs:{icon:"check"}})],1),a("td")]),e._l(e.lesBingosSave,(function(t,n){return a("tr",{key:n,attrs:{"le-bingo":t,id:e.generateIDLigne(n)}},[a("td",[e._v(e._s(t[0]))]),a("td",[e._v(e._s(t[1]))]),a("td",[e._v(e._s(t[2]))]),a("td",[e._v(e._s(t[3]))]),a("td",{on:{click:function(a){return e.appliquer(t)}}},[a("font-awesome-icon",{staticClass:"buttonS",attrs:{icon:"check"}})],1),a("td",{on:{click:function(a){return e.deleteBingoForStore(t,n)}}},[a("font-awesome-icon",{staticClass:"buttonS",attrs:{icon:"times"}})],1)])}))],2)])]),a("b-modal",{staticClass:"superBingo",attrs:{id:"superBingo",size:"lg",centered:"",title:"SUPER BINGO !","hide-footer":""}},[a("iframe",{staticClass:"mx-auto",staticStyle:{display:"block"},attrs:{width:"500rem",height:"282rem",src:"https://www.youtube.com/embed/WSsafS77zMs?start=40",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}),a("p",{staticClass:"text-center",staticStyle:{margin:"1rem"}},[e._v("D7D8 D7D8")])]),a("b-modal",{key:e.modalEditKey,ref:"modal-edit",attrs:{id:"modal-edit",title:"Edition d'une case",size:"lg",centered:"","hide-footer":""},on:{close:e.modalEditClose,hide:e.modalEditClose}},[a("transition",{attrs:{name:"transition-b-alert","enter-to-class":"animated bounceInLeft","leave-to-class":"animated bounceOutRight"}},[a("b-alert",{staticClass:"b-alert",attrs:{fade:"",show:e.compteurAffichage,variant:"success"},on:{dismissed:function(t){e.compteurAffichage=0},"dismiss-count-down":e.compteurAffichageChanged}},[a("h6",{staticClass:"text-center"},[e._v(e._s(e.messageAlert))]),a("b-progress",{attrs:{variant:"success",max:2,value:e.compteurAffichage,height:"4px"}})],1)],1),a("b-input-group",{staticClass:"text-center mx-auto",staticStyle:{width:"90%"}},[a("b-input-group-prepend",{staticStyle:{width:"30%"}},[a("b-button",[a("font-awesome-icon",{attrs:{icon:"edit"}})],1),a("b-select",{on:{change:e.preFill},model:{value:e.indexToEdit,callback:function(t){e.indexToEdit=t},expression:"indexToEdit"}},e._l(e.tabToDisplayForEditModal,(function(t,n){return a("option",{key:n,domProps:{value:n}},[e._v(e._s(t))])})),0)],1),a("b-input-group-append",[a("b-button",{on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.addElementModalEdit(t)}}},[a("font-awesome-icon",{attrs:{icon:"plus"}})],1)],1),a("b-input",{model:{value:e.editedValue,callback:function(t){e.editedValue=t},expression:"editedValue"}}),a("b-input-group-append",[a("b-button",{on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.deleteElementModalEdit(t)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1),a("b-button",{on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.editElementModalEdit(t)}}},[a("font-awesome-icon",{attrs:{icon:"check"}})],1)],1)],1)],1),a("b-modal",{attrs:{id:"bingoName",size:"lg",centered:"",title:"Nom du Bingo :","hide-footer":""}},[a("b-input",{model:{value:e.tempBingoName,callback:function(t){e.tempBingoName=t},expression:"tempBingoName"}}),a("b-button",{staticClass:"buttonSave",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.closeAndSaveBingoModal(t)}}},[e._v("Sauvegarder")])],1)],1)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("th",[e._v("Nom")]),a("th",[e._v("Lignes")]),a("th",[e._v("Colonnes")]),a("th",[e._v("Taille Cell")]),a("th",[e._v("Appliquer")]),a("th",[e._v("Supprimer")])])}],p=(a("7f7f"),a("768b")),f=(a("ffc1"),a("59ca")),b=a.n(f),y=(a("66ce"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[a("b-navbar-brand",{staticClass:"titre",attrs:{href:"/"}},[e._v("Xari BINGO")]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{on:{click:e.newsSwap}},[e._v("Changelog")]),a("b-nav-item",{on:{click:e.tutoSwap}},[e._v("Tutoriel")]),a("b-nav-item",{attrs:{disabled:""}},[e._v("Version "+e._s(this.$store.state.version))])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("div",{staticClass:"login"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!this.$store.state.isAuth,expression:"!this.$store.state.isAuth"}]},[a("b-form-input",{staticClass:"mr-sm-2",attrs:{type:"email",size:"sm",placeholder:"Email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("b-form-input",{staticClass:"mr-sm-2",attrs:{type:"password",size:"sm",placeholder:"Mot de Passe"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm"},on:{click:e.login}},[e._v("Connexion")])],1),a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.state.isAuth,expression:"this.$store.state.isAuth"}]},[a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm"},on:{click:e.logout}},[e._v("Xari - Logout")])],1)])])],1)],1),a("b-modal",{attrs:{id:"news"}},[a("div",{staticStyle:{overflow:"auto",height:"400px"}},[a("div",[a("h1",[e._v("V3.2.0")]),a("ul",[e._v(" - Suppression du prompt js pour un modal horrible")])]),a("div",[a("h1",[e._v("V3.1.9")]),a("ul",[e._v("- Correction du background pour le stream")])]),a("div",[a("h1",[e._v("V3.1.8")]),a("ul",[e._v("- Correction d'un bug lors de la suppression d'un bingo. Merci à Seinsei pour ton retour")])]),a("div",[a("h1",[e._v("V3.1.7")]),a("ul",[e._v("- Ajout du Golden Buzzer")])]),a("div",[a("h1",[e._v("V3.1.6")]),a("ul",[e._v("- Update pour l'app Twitch")])]),a("div",[a("h1",[e._v("V3.1.5")]),a("ul",[e._v("- Sync avec l'app Twitch")])]),a("div",[a("h1",[e._v("V3.1.4")]),a("ul",[e._v("- Ajout de la sauvegarde auto (pas les couleurs)")])]),a("div",[a("h1",[e._v("V3.1.3")]),a("ul",[e._v("- Problème des boutons résolu")]),a("ul",[e._v("- Début d'ajout d'animation")])]),a("div",[a("h1",[e._v("V3.1.2")]),a("ul",[e._v("- Retrait d'une alerte oubliée")]),a("ul",[e._v("- Amélioration de la réactivité des boutons suite à une MAJ des dépendances")])]),a("div",[a("h1",[e._v("V3.1.1 Less But More")]),a("ul",[e._v("- Abandon de vue-js-modal")]),a("ul",[e._v("- Pour, à la place, BootStrap-Modal for Vue-js")]),a("ul",[e._v("- Les bouttons de l'édition bug moins, toujours pas trouvé la raison (Il semble que stoper la propagation a amélioré la situation)")]),a("ul",[e._v("- Diverses améliorations graphiques")])]),a("div",[a("h1",[e._v("V3.1.0 Dimension")]),a("ul",[e._v('- Ajout de la fonctionnalité "Gradation"')]),a("ul",[e._v("- Click gauche pour valider une case et droit pour invalider")]),a("ul",[e._v("- Edit d'une case qui a changé, quelque bug sur les bouttons pour une raison que j'ignore")]),a("ul",[e._v("- Diverses améliorations graphiques")]),a("ul",[e._v("- Mise à jour des Pré-config 3/11/2019")])]),a("div",[a("h1",[e._v("V3.0.1")]),a("ul",[e._v("- Correction du placement de la barre")])]),a("div",[a("h1",[e._v("V3.0.0 Zevent")]),a("ul",[e._v("- Refonte Graphique")]),a("ul",[e._v("- Ajout de la fonctionnalité du Bingo partagé !")]),a("ul",[e._v("Il suffit de se connecter en tant que Xari et remplir en mode bingo, le bingo partagé se mettra à jour à chaque changement de couleur sur le lien de partage")]),a("ul",[e._v("- Récupération du dernier bingo synchronisé si connecté.")]),a("ul",[e._v("- Suppression de la fonctionnalité quand la case est vide, une image de fond s'ajoute")])]),a("div",[a("h1",[e._v("V2.9.3")]),a("ul",[e._v('- Correction d\'un bug concernant les diagonales. Changement des "===" en "==" à cause du champ\n                    input. Il est possible que d\'autres problèmes aient lieu ayant comme base ce problème.')])]),a("div",[a("h1",[e._v("V2.9.2")]),a("ul",[e._v('- Correction des bugs sur la "Dé-sélection" des diagonales, notamment la case du milieu')])]),a("div",[a("h1",[e._v("V2.9.1")]),a("ul",[e._v("- Gestion lors d'une \"dé-sélection\" d'une case sachant que cette case forme un bingo (Case\n                    Grise). La case sélectionnée va devenir blanche et les autres cases du bingo formé (Cases grises\n                    de la ligne/colonne/diagonale vont redevenir vertes si elles le doivent.")]),a("ul",[e._v('- Ajout des boutons "Tutoriel" et "Changelog"')])]),a("div",[a("h1",[e._v("V2.9")]),a("ul",[e._v("- Stream mode. Background en bleu, texte en blanc avec contour noir pour les faire ressortir (Un\n                    peu comme les sous-titres)")])]),a("div",[a("h1",[e._v("V2.8")]),a("ul",[e._v('- Correction du bug "Multi input" de la 2.7')])]),a("div",[a("h1",[e._v("V2.7")]),a("ul",[e._v("- Prise en compte des diagonales (Pour les bingos carrés)")]),a("ul",[e._v("- Sauvegarde par nom (Donner un nouveau nom fera une nouvelle sauvegarde...)")]),a("ul",[e._v("- Et donc donner le même nom mettra à jour la sauvegarde avec ce nom (Logique)")]),a("ul",[e._v('- Correction du bug : "Après un input, la case se freeze et affiche tout le temps la même chose\n                    même si la valeur est incorrect".')])])])]),a("b-modal",{attrs:{id:"tuto"}},[a("div",{staticStyle:{"text-align":"center"}},[a("ul",[e._v("Premièrement il faut ajouter des lignes/colonnes. Ensuite pour éditer une case il suffit de double\n                cliquer et appuyer sur ENTER")]),a("ul",[e._v("Il est possible de faire un logo en laissant le champ vide.")]),a("ul",[e._v("Une fois l'édition terminée il faut passer en mode BINGO !")])])])],1)}),E=[],w=(a("ea7b"),{name:"Navbar",data:function(){return{email:"",password:"",nbTent:0}},methods:{newsSwap:function(){this.$bvModal.show("news")},tutoSwap:function(){this.$bvModal.show("tuto")},login:function(){var e=this;this.nbTent<=2?(b.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(t){e.$store.state.isAuth=!0}),(function(e){alert(e)})),e.nbTent=this.nbTent+1):alert("Trop de tentatives. 10 min de TO")},logout:function(){var e=this;b.a.auth().signOut().then((function(){e.$store.state.isAuth=!1}))}}}),C=w,_=(a("6986"),Object(s["a"])(C,y,E,!1,null,"3052baa2",null)),B=_.exports,S={name:"Bingo.vue",components:{Navbar:B},data:function(){return{edit:!0,nom:null,line:1,col:1,tab:[],lesBingosSave:[],cptForRandom:0,widthCell:8,bingoKey:0,tabColor:null,tabGrad:{},tabUpdated:[],tabToDisplayForEditModal:[],tabIndexSelecForEditModal:[],indexToEdit:null,editedValue:"",modalEditKey:0,tempBingoName:"",messageAlert:"",compteurAffichage:0}},computed:{validationColor:function(){return this.$store.state.validationColor},bingoColor:function(){return this.$store.state.bingoColor},buttonE:function(){return{"margin-top":"1rem","background-color":this.validationColor}},buttonN:function(){return{"margin-top":"2rem","margin-right":"1rem","background-color":this.bingoColor}}},created:function(){this.getLesBingos()},updated:function(){for(var e=document.getElementsByClassName("cell"),t=0;t<e.length;t++)e[t].parentElement.style.backgroundImage="",e[t].parentElement.style.backgroundSize="",e[t].parentElement.style.backgroundRepeat="",e[t].parentElement.style.backgroundPosition="";if(this.changeCell(),null!=this.tabColor){for(var a=0;a<this.line;a++)for(var n=0;n<this.col;n++){var i=document.getElementById("cell-"+a+"-"+n);i.parentElement.parentElement.style.background=this.tabColor[a][n]}this.tabColor=null}},methods:{generateTab:function(){var e=this;e.tab=[];for(var t=0;t<e.line;t++){var a=[];e.tab.push(a);for(var n=0;n<e.col;n++){var i=[];e.tab[t].push(i),e.tab[t][n]=["Xari-Bingo"]}}},generateId:function(e,t){return"cell-"+e+"-"+t},generateIdGradation:function(e,t,a){return"cell-"+e+"-"+t+"-"+a},swapMode:function(){this.edit=!this.edit,this.$store.state.isAuth&&this.sendToFirebase()},colorCell:function(e,t){var a=this;this.edit?(void 0===a.tabGrad[e+"-"+t]?a.tabGrad[e+"-"+t]=1:a.tabGrad[e+"-"+t]<this.tab[e][t].length&&(a.tabGrad[e+"-"+t]=a.tabGrad[e+"-"+t]+1),a.afficherElementSuivant(e,t)):(void 0===a.tabGrad[e+"-"+t]?a.tabGrad[e+"-"+t]=1:a.tabGrad[e+"-"+t]<this.tab[e][t].length&&(a.tabGrad[e+"-"+t]=a.tabGrad[e+"-"+t]+1),a.afficherElementSuivant(e,t),a.colorPourcentage(e,t,a.validationColor),a.checkBingo()),this.$store.state.isAuth&&this.sendToFirebase(),this.autoSaveBingo()},uncolor:function(e,t){var a,n=this;if(this.edit)n.tabGrad[e+"-"+t]>0&&(n.tabGrad[e+"-"+t]==this.tab[e][t].length&&n.tabGrad[e+"-"+t]>2&&(n.tabGrad[e+"-"+t]=n.tabGrad[e+"-"+t]-1),n.tabGrad[e+"-"+t]=n.tabGrad[e+"-"+t]-1,n.afficherElementPrecedent(e,t));else{n.tabGrad[e+"-"+t]>0&&(n.tabGrad[e+"-"+t]==this.tab[e][t].length&&(a=!0),n.tabGrad[e+"-"+t]=n.tabGrad[e+"-"+t]-1);var i=document.getElementById("cell-"+e+"-"+t).parentElement;if("TD"!=i.tagName&&(i=i.parentElement),"no-repeat"!==i.style.backgroundRepeat&&i.classList.contains("flagValide")){var o=!1,r=!1;if(n.col==n.line){var l=(n.line-1)/2;if(e===t)o=!0,e===l&&t===l&&(r=!0);else for(var s=n.line-1,d=0;d<n.line;d++)s===e&&d===t&&(r=!0),s-=1}if(o||r){for(var c=n.line-1,u=0;u<n.line;u++){var m=document.getElementById("cell-"+c+"-"+u).parentElement;"TD"!=m.tagName&&(m=m.parentElement),m.classList.contains("flagValide")&&n.colorPourcentage(c,u,n.validationColor),c-=1}for(var h=0;h<n.col;h++){var v=document.getElementById("cell-"+h+"-"+h).parentElement;"TD"!=v.tagName&&(v=v.parentElement),v.classList.contains("flagValide")&&n.colorPourcentage(h,h,n.validationColor)}}for(var g=0;g<n.col;g++){var p=document.getElementById("cell-"+e+"-"+g).parentElement;"TD"!=p.tagName&&(p=p.parentElement),p.classList.contains("flagValide")&&n.colorPourcentage(e,g,n.validationColor)}for(var f=0;f<n.line;f++){var b=document.getElementById("cell-"+f+"-"+t).parentElement;"TD"!=b.tagName&&(b=b.parentElement),b.classList.contains("flagValide")&&n.colorPourcentage(f,t,n.validationColor)}i.style.backgroundColor=""}a||n.afficherElementPrecedent(e,t),n.colorPourcentage(e,t,n.validationColor),n.checkBingo()}this.$store.state.isAuth&&this.sendToFirebase(),this.autoSaveBingo()},checkBingo:function(){for(var e=this,t=0,a=0,n=null,i=0;i<this.line;i++){t=0;for(var o=0;o<this.col;o++)if(n=document.getElementById("cell-"+i+"-"+o).parentElement,"TD"!=n.tagName&&(n=n.parentElement),n.classList.contains("flagValide")&&(t+=1),t===this.tab[i].length)for(var r=0;r<this.col;r++){var l=document.getElementById("cell-"+i+"-"+r).parentElement;"TD"!=l.tagName&&(l=l.parentElement),"contain"!==l.style.backgroundSize&&e.colorPourcentage(i,r,"grey")}}for(var s=[],d=0;d<this.col;d++)s.push(0);for(var c=0;c<this.line;c++)for(var u=0;u<this.col;u++)n=document.getElementById("cell-"+c+"-"+u).parentElement,"TD"!=n.tagName&&(n=n.parentElement),n.classList.contains("flagValide")&&(s[u]=s[u]+1);if(e.col==e.line){for(var m=0,h=0;h<e.line;h++){var v=document.getElementById("cell-"+h+"-"+h).parentElement;"TD"!=v.tagName&&(v=v.parentElement),v.classList.contains("flagValide")&&(m+=1)}if(m==e.line)for(var g=0;g<e.line;g++){var p=document.getElementById("cell-"+g+"-"+g).parentElement;"TD"!=p.tagName&&(p=p.parentElement),"contain"!==p.style.backgroundSize&&e.colorPourcentage(g,g,"grey")}for(var f=0,b=e.line-1,y=0;y<e.line;y++){var E=document.getElementById("cell-"+y+"-"+b).parentElement;"TD"!=E.tagName&&(E=E.parentElement),E.classList.contains("flagValide")&&(f+=1),b-=1}if(f==e.line)for(var w=e.line-1,C=0;C<e.line;C++){var _=document.getElementById("cell-"+C+"-"+w).parentElement;"TD"!=_.tagName&&(_=_.parentElement),"contain"!==_.style.backgroundSize&&e.colorPourcentage(C,w,"grey"),w-=1}}for(var B=0;B<s.length;B++)if(s[B]==e.line)for(var S=0;S<this.line;S++){var k=document.getElementById("cell-"+S+"-"+B).parentElement;"TD"!=k.tagName&&(k=k.parentElement),"contain"!==k.style.backgroundSize&&e.colorPourcentage(S,B,"grey")}for(var x=0;x<this.line;x++)for(var I=0;I<this.col;I++)n=document.getElementById("cell-"+x+"-"+I).parentElement,"TD"!=n.tagName&&(n=n.parentElement),n.classList.contains("flagValide")&&(a+=1),a===this.tab[x].length*this.tab.length&&e.show()},closeAndSaveBingoModal:function(){this.$bvModal.hide("bingoName"),this.saveBingo(this.tempBingoName)},openSaveBingoModal:function(){this.$bvModal.show("bingoName")},saveBingo:function(e){var t=[];t.push(e),t.push(this.line),t.push(this.col),t.push(this.widthCell),t.push(this.tab),this.$store.commit("addBingo",t),this.appliquer(t),this.getLesBingos(),this.showAlert("Bingo sauvegardé !")},getLesBingos:function(){var e=this,t=JSON.parse(localStorage.getItem("xariBingo"));e.lesBingosSave=[],null!=t&&t.forEach((function(t){e.lesBingosSave.push(t)}))},deleteBingoForStore:function(e){this.$store.commit("deleteBingo",e),this.getLesBingos(),this.showAlert("Bingo supprimé !")},generateIDLigne:function(e){return"leBingo-"+e},appliquer:function(e){this.nom=e[0],this.line=e[1],this.col=e[2],this.widthCell=e[3],this.tab=e[4]},randomizer:function(){var e=this;e.appliquer([e.nom,e.line,e.col,e.widthCell,e.tab]);for(var t=[],a=0;a<e.line;a++)for(var n=0;n<e.col;n++)t.push(e.tab[a][n]);for(var i=[],o=[],r=0;r<t.length;r++){var l=t[r],s=void 0,d=void 0;do{d=Math.floor(Math.random()*Math.floor(t.length)),s=!1;for(var c=0;c<i.length;c++)i[c]===d&&(s=!0)}while(s);i.push(d),null===l&&(l=""),o[d]=l}e.tab=[],e.resetTabForSetValueAfterARandom();for(var u=0;u<e.line;u++){var m=[];e.tab.push(m);for(var h=0;h<e.col;h++)e.tab[u].push(o[e.setValueAfterARandom()])}this.autoSaveBingo()},setValueAfterARandom:function(){var e=this.cptForRandom;return this.cptForRandom++,e},resetTabForSetValueAfterARandom:function(){this.cptForRandom=0},show:function(){this.$bvModal.show("superBingo",{title:"SUPER BINGO !"})},changeCell:function(){for(var e=this,t=document.getElementsByClassName("cell"),a=0;a<t.length;a++)t[a].style.width=e.widthCell+"rem"},appliquerPC1:function(){this.nom="[Pre-config] Mariage",this.line=5,this.col=5,this.widthCell=8,this.tab=[[["Il n'y avait pas d'émotion..."],["Le mari met 20/20 à sa chérie"],["7/20"],['J\'ai adoré "11/20"'],["C'est de la stratégie"]],[["Rencontre en boite de nuit / Sur Internet"],["8/20"],["Maître Gims / Lartiste / Khaled / MagicS"],["Insulte(s)"],["Budget plus de 25K"]],[["Carrelage dans la salle de réception"],["Un accent"],['"Chic/Strass" dans le nom du thème'],["T'as pas vu à son mariage à elle..."],["L'ambiance est arrivée trop tard"]],[["Ce n'est pas le thème"],["Pleurs"],['"Moi j\'ai été honnête"'],["Toutes les notes < 11"],["La gentille perd"]],[["Blague de merde"],["Mariée de moins de 25 ans"],["J'ai été déçu"],["Brelan de note"],["Note > 15"]]]},appliquerPC2:function(){this.nom="[Pre-config] Cauchemar",this.line=5,this.col=5,this.widthCell=8,this.tab=[[['"J\'ai jamais vu ça"'],["Cuisine sale"],['"Tu oses servir ça ?"'],["Bouffe périmée"],["Plus de 30 plats à la carte"]],[["Musique épique"],["Restau familial"],["Il mange < 20 % du plat"],["Mauvaise foi évidente d'un employé"],["Etchebest mal prononcé"]],[["Restau fermé depuis"],["Séquence Pascal le Grand Frère"],["Ça marchait avant"],["Un mec ne branle rien"],["Pleurs"]],[["Accent"],["Attente > 30 min"],["Zetsu (mec qui fait tout dans l'ombre)"],["Le chef n'a plus l'envie de cuisiner"],["Bouffe surgelée"]],[["le problème c'est la communication"],["Un des mecs est en retard le matin"],["Moins de 3 tables quand Etchebest arrive"],["Le chef ne goûte pas ses plats"],["On n'a jamais eu de plaintes"]]]},appliquerPC3:function(){this.nom="[Pre-config] Zevent",this.line=7,this.col=7,this.widthCell=8,this.tab=[[["1Million500K"],["CarlJR bat un de ses PB sur trackmania"],['La chanson "Belle" est chantée'],["Sardoche rage (masse)"],["Qqn fait une game TFT parfaite"],["Qqn casse son matos"],["Un streamer(hors sard) fait un 24h"]],[["Etoiles gagne l'UHC"],["444K à minuit Vendredi"],["La france gagne le showmatch CIV"],["1 Million"],["JDG atteint Mars sur Kerbal"],["Qqn fait un pentakill"],["Connexion/Courant qui saute"]],[["4 lignes dans le bingo REACT"],["Qqn fait un plus de 180 à la Golf It Cup"],["CarlJr gagne la TMCUP"],["Je dépasse 130 BPM"],["Aldériate crie de la merde"],["Un streamer valide 3 cases à lui seul"],["Pari de 1K entre streamers"]],[["Jiraya obtient Zaiross"],["MV finit 4 niveaux en super expert"],["Je passe Diamant sur TFT"],["Plus gros donation goal atteint par un streamer"],["Team Xari/Jiji gagne le mario Party"],["Don de 5000€ ou +"],["Sardoche dort moins de 10h"]],[["AntoineDaniel bat son PB sur GeoGuesser"],["Quelqu'un tombe"],["Qqn fait un nuke sur CoD"],["ITM au poker"],["Locklear se fait sortir/péter sa flûte"],["Un streamer pleure"],["350K viewvers simultanés"]],[["Narkuss/Doig chantent en live"],["Je mine plus de 150 Diams"],["Un streamer dort devant son live"],["Un streamer perd sa voix"],["Une case se valide 5 fois"],["Zevent au JT avant la fin de l'event"],["MV dépasse 200K de dons"]],[["Un streamer pack un 90+ sur FIFA"],["Plus de 10 streams à 7h du mat"],["30K teeshirts vendus"],["Je tue Gotaga sur Minecraft"],["Homme politique/Célébrité tweete"],["Je fais top1 sur Fortnite"],["Masterkill x200 ou +"]]]},autoSaveBingo:function(){var e={nom:this.nom,line:this.line,col:this.col,widthCell:this.widthCell,tab:this.tab};localStorage.setItem("lastBingo",JSON.stringify(e))},appliquerLastSavedBingo:function(){var e=JSON.parse(localStorage.getItem("lastBingo"));this.nom=e.nom,this.line=e.line,this.col=e.col,this.widthCell=e.widthCell,this.tab=e.tab},resetAll:function(){for(var e=0;e<this.line;e++)for(var t=0;t<this.col;t++)for(var a=this.tabGrad[e+"-"+t],n=0;n<a;n++)this.unColorErase(e,t);this.resetTabGradAndVue(),this.$store.state.isAuth&&this.sendToFirebase()},getShareLink:function(){this.$store.state.isAuth?alert("Lien du partage : /#/"+this.$route.fullPath+"/public"):alert("Il faut être connecté pour que le partage soit actif")},afficherElementSuivant:function(e,t){var a,n,i=this,o=i.tabGrad[e+"-"+t]-1;void 0===o||null==o||0==o?(a=document.getElementById("cell-"+e+"-"+t),n=a.parentElement.nextElementSibling):(a=document.getElementById("cell-"+e+"-"+t+"-"+o),n=a.parentElement.nextElementSibling),void 0==n&&null==n||(n=n.firstElementChild,a.style.display="none",n.style.display=""),i.checkBingo()},afficherElementPrecedent:function(e,t){var a,n,i=this,o=this.tabGrad[e+"-"+t]+1;if(a=document.getElementById("cell-"+e+"-"+t+"-"+o),void 0===a||null==a){if(o-=1,0===o)return void(a=document.getElementById("cell-"+e+"-"+t));a=document.getElementById("cell-"+e+"-"+t+"-"+o)}n=a.parentElement.previousElementSibling,void 0==n&&null==n||(n=n.firstElementChild,a.style.display="none",n.style.display=""),i.checkBingo()},resetTabGradAndVue:function(){for(var e=0;e<this.line;e++)for(var t=0;t<this.col;t++)this.colorPourcentage(e,t,this.validationColor);this.tabGrad={}},colorPourcentage:function(e,t,a){var n;n=null==this.tabGrad[e+"-"+t]||void 0===this.tabGrad[e+"-"+t]?0:this.tabGrad[e+"-"+t];var i=n/this.tab[e][t].length*100,o=document.getElementById("cell-"+e+"-"+t).parentElement;"TD"!=o.tagName&&(o=o.parentElement);var r="linear-gradient(bottom, "+a+" "+i+"%, white "+i+"%)";o.style.backgroundColor="",o.style.background="-webkit-"+r,o.style.background="-moz-"+r,o.style.background="-ms-"+r,o.style.background=r,o.style.backgroundSize="80%",i>0?o.classList.add("flagValide"):o.classList.remove("flagValide")},unColorErase:function(e,t){var a=document.getElementById("cell-"+e+"-"+t).parentElement;"TD"!=a.tagName&&(a=a.parentElement),this.uncolor(e,t),a.style.backgroundColor="",a.style.background=""},editCell:function(e,t){var a=this;this.edit&&(a.tabIndexSelecForEditModal=[e,t],a.tabToDisplayForEditModal=a.tab[e][t],a.indexToEdit=0,a.editedValue=a.tab[e][t][a.indexToEdit],a.$bvModal.show("modal-edit"))},editElementModalEdit:function(){this.tabToDisplayForEditModal[this.indexToEdit]=this.editedValue,this.tab[this.tabIndexSelecForEditModal[0]][this.tabIndexSelecForEditModal[1]]=this.tabToDisplayForEditModal,this.showAlert("Gradation modifiée !"),this.autoSaveBingo()},deleteElementModalEdit:function(){var e=this,t=this;void 0!==t.tabToDisplayForEditModal[this.indexToEdit]&&this.$bvModal.msgBoxConfirm('Êtes-vous sûr de vouloir supprimer "'+t.tabToDisplayForEditModal[this.indexToEdit]+'" ?',{title:"Confirmation de suppression",size:"sm",okTitle:"Oui",cancelTitle:"Non",centered:!0}).then((function(a){a&&(t.tabToDisplayForEditModal.splice(e.indexToEdit,1),t.tab[e.tabIndexSelecForEditModal[0]][e.tabIndexSelecForEditModal[1]]=t.tabToDisplayForEditModal,t.indexToEdit=0,t.editedValue=t.tab[e.tabIndexSelecForEditModal[0]][t.tabIndexSelecForEditModal[1]][t.indexToEdit],t.showAlert("Gradation supprimée !"),t.autoSaveBingo())}))},addElementModalEdit:function(){this.tab[this.tabIndexSelecForEditModal[0]][this.tabIndexSelecForEditModal[1]].push("Xari-Bingo"),this.showAlert("Gradation Ajoutée !"),this.autoSaveBingo()},preFill:function(){this.editedValue=this.tab[this.tabIndexSelecForEditModal[0]][this.tabIndexSelecForEditModal[1]][this.indexToEdit]},modalEditClose:function(){this.bingoKey=this.bingoKey+1,this.bingoKey=this.bingoKey-1,this.resetAll()},compteurAffichageChanged:function(e){this.compteurAffichage=e},showAlert:function(e){this.messageAlert=e,this.compteurAffichage=2},sendToFirebase:function(){var e=this;if(!this.edit){for(var t=[],a=0;a<this.line;a++){var n=[];t.push(n);for(var i=0;i<this.col;i++){var o=[];t[a].push(o),t[a][i]=!1}}for(var r=0;r<t.length;r++)for(var l=0;l<t[r].length;l++){t[r][l]={values:this.tab[r][l],validate:!1,nbValidate:void 0==this.tabGrad[r+"-"+l]?0:this.tabGrad[r+"-"+l]};var s=document.getElementById("cell-"+r+"-"+l).parentElement;"TD"!=s.tagName&&(s=s.parentElement),s.classList.contains("flagValide")&&(t[r][l].validate=!0)}var d=!0;b.a.database().ref("/streamer/88301612/bingos").once("value",(function(a){if(null!=a.val()||void 0!=a.val())for(var n=0,i=Object.entries(a.val());n<i.length;n++){var o=Object(p["a"])(i[n],2),r=o[0],l=o[1];l.name==e.nom&&(b.a.database().ref("/streamer/88301612/bingos/"+r).set({name:e.nom,grid:t}),b.a.database().ref("/streamer/88301612/currentOpen").set(r),d=!1)}if(d){var s=b.a.database().ref("/streamer/88301612/bingos").push({name:e.nom,grid:t});b.a.database().ref("/streamer/88301612/currentOpen").set(s.key)}}))}},goldenBuzzer:function(){var e=!0;while(e){var t=Math.floor(Math.random()*Math.floor(this.line)),a=Math.floor(Math.random()*Math.floor(this.col)),n=document.getElementById("cell-"+t+"-"+a);n.parentElement.parentElement.classList.contains("flagValide")||(e=!1,this.colorCell(t,a))}}}},k=S,x=(a("fde6"),Object(s["a"])(k,v,g,!1,null,"2b5186f2",null)),I=x.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bingoPart"},[a("table",{attrs:{border:"1"}},[a("thead",[a("tr",{attrs:{id:"headerBingo"}},[a("th",{attrs:{colspan:"99"}},[a("p",[e._v("BINGO "+e._s(this.nom))])])])]),a("tbody",e._l(e.tab,(function(t,n){return a("tr",{key:n,staticClass:"strikeout"},e._l(t,(function(t,i){return a("td",{key:i},[""!==t.valueOf()?a("p",{staticClass:"cell",attrs:{id:e.generateId(n,i)}},[e._v(e._s(t.valueOf()))]):a("p",{staticClass:"changeBackground",attrs:{id:e.generateId(n,i)}})])})),0)})),0)])])},T=[],N={name:"BingoPart",data:function(){return{nom:"",line:0,col:0,widthCell:8,tab:[],tabColor:[]}},created:function(){var e=this;b.a.database().ref("/bingo").once("value").then((function(t){var a=t.val();e.nom=a.nom,e.line=a.line,e.col=a.col,e.widthCell=a.widthCell,e.tab=a.tab,e.tabColor=a.tabColor}),(function(e){alert(e)}))},beforeDestroy:function(){},updated:function(){for(var e=this,t=document.getElementsByClassName("cell"),a=0;a<t.length;a++)t[a].style.width=e.widthCell+"rem";for(var n=0;n<e.line;n++)for(var i=0;i<e.col;i++){var o=document.getElementById("cell-"+n+"-"+i);o.parentElement.style.backgroundColor=e.tabColor[n][i]}},methods:{generateId:function(e,t){return"cell-"+e+"-"+t},changeCell:function(){for(var e=this,t=document.getElementsByClassName("cell"),a=0;a<t.length;a++)t[a].style.width=e.widthCell+"rem"}}},A=N,P=(a("40ed"),Object(s["a"])(A,M,T,!1,null,"2801e71c",null)),G=P.exports;n["default"].use(h["a"]);var D=new h["a"]({base:"/xari-bingo",routes:[{path:"*",redirect:{name:"bingo"}},{path:"/",redirect:{name:"bingo"}},{path:"/bingo",name:"bingo",component:I},{path:"/bingo/public",name:"bingo-part",component:G}]}),V=a("5f5b"),O=(a("f9e3"),a("2dd8"),a("ecee")),L=a("c074"),F=a("ad3d");a("77ed"),n["default"].use(V["a"]),n["default"].component("font-awesome-icon",F["a"]),n["default"].component("font-awesome-layers",F["b"]),n["default"].config.productionTip=!1;var q={apiKey:"AIzaSyCZKUDgg1cUGUy_CbdWWGAnmnQjKWQQiF8",authDomain:"bingo-3e03d.firebaseapp.com",databaseURL:"https://bingo-3e03d.firebaseio.com",projectId:"bingo-3e03d",storageBucket:"bingo-3e03d.appspot.com",messagingSenderId:"721358082968",appId:"1:721358082968:web:b0904c3a1a3955f02fd1ed"};b.a.initializeApp(q),O["c"].add(L["d"]),O["c"].add(L["h"]),O["c"].add(L["a"]),O["c"].add(L["k"]),O["c"].add(L["b"]),O["c"].add(L["j"]),O["c"].add(L["f"]),O["c"].add(L["i"]),O["c"].add(L["g"]),O["c"].add(L["l"]),O["c"].add(L["c"]),O["c"].add(L["e"]),new n["default"]({router:D,store:m,render:function(e){return e(c)}}).$mount("#app")},"64a9":function(e,t,a){},6986:function(e,t,a){"use strict";var n=a("06e4"),i=a.n(n);i.a},ccf8:function(e,t,a){},fde6:function(e,t,a){"use strict";var n=a("ccf8"),i=a.n(n);i.a}});
//# sourceMappingURL=app.7db45297.js.map