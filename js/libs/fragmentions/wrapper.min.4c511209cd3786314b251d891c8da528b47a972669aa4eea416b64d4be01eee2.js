"use strict";if(!('fragmention'in window.location))(function(){location.fragmention=location.fragmention||'';function getElementsByText(scope,text){for(var all=scope.childNodes,index=0,element,list=[];(element=all[index]);++index){if(element.nodeType===1&&(element.textContent||element.innerText||'').replace(/\s+/g,' ').indexOf(text)!==-1){list=list.concat(getElementsByText(element,text));}}
return list.length?list:scope;}
function getAnchorableElementByName(fragment){var elements=document.getElementsByName(fragment),index=-1;while(elements[++index]&&!/^A(REA)?$/.test(elements[index].nodeName)){}
return elements[index];}
function setFragmention(){var
id=location.href.match(/#((?:#|%23)?)(.+)/)||[0,'',''],node,match=decodeURIComponent(id[2].replace(/\+/g,' ')).split('  ');location.fragmention=match[0];location.fragmentionIndex=parseFloat(match[1])||0;if(id[1]+id[2]){node=document.getElementById(id[1]+id[2])||getAnchorableElementByName(id[1]+id[2]);}
if(element){element.removeAttribute('fragmention');if(element.runtimeStyle){element.runtimeStyle.windows=element.runtimeStyle.windows;}}
if(!node&&location.fragmention){var
elements=getElementsByText(document,location.fragmention),length=elements.length,modulus=length&&location.fragmentionIndex%length,index=length&&modulus>=0?modulus:length+modulus;element=length&&elements[index];if(element){element.scrollIntoView();element.setAttribute('fragmention','');if(element.runtimeStyle){element.runtimeStyle.windows=element.runtimeStyle.windows;}}
else{element=null;}}}
var element;window.addEventListener("hashchange",setFragmention,false);document.addEventListener('readystatechange',setFragmention,false);setFragmention();})();(function(){if(!window.getSelection||!encodeURI||!('content'in document.createElement('template'))){return;}
var
BUTTON_HTML='<div id="fragmentioner-ui" class="no-text-decoration" hidden><a href="">Link to text</a></div>';var
BUTTON=document.createElement('template');BUTTON.innerHTML=BUTTON_HTML;function show_frag_btn(){var
selected=get_selection(),text=selected.text,node=selected.node,offsets=get_offsets();if(text!=''){ui.getElementsByTagName("a")[0].setAttribute("href",text2frag(text,node));ui.style.left=selected.left+offsets.left+(selected.width)/2+"px";ui.style.top=selected.top+offsets.top-40+"px";ui.hidden=false;}
else{ui.hidden=true;}}
function text2frag(text,node){function getElementsByText(scope,text){for(var all=scope.childNodes,index=0,element,list=[];(element=all[index]);++index){if(element.nodeType===1&&(element.innerText||element.textContent||'').replace(/\s+/g,' ').indexOf(text)!==-1){list=list.concat(getElementsByText(element,text));}}
return list.length?list:scope;}
var hash='#'+text;var elements=getElementsByText(document,text),length=elements.length,which=length&&elements.indexOf(node);if(which&&which>0){hash+='++'+which;}
return encodeURI(window.location.protocol+"//"+window.location.host+window.location.pathname+hash);}
function get_selection(){var sel=window.getSelection();if(sel.rangeCount){var range=sel.getRangeAt(0).cloneRange();if(range.getBoundingClientRect){var rect=range.getBoundingClientRect(),text=sel.toString(),node=sel.anchorNode&&sel.anchorNode.parentElement,left=rect.left,top=rect.top,width=rect.right-rect.left;}}
text=text.replace(/\s+/g,' ');return{text:text,node:node,left:left,top:top,width:width};}
function get_offsets(){var left=0,top=0;if('pageXOffset'in window){left=window.pageXOffset;top=window.pageYOffset;}
else if('scrollLeft'in document.documentElement){left=document.documentElement.scrollLeft;top=document.documentElement.scrollTop;}
return{left:left,top:top};}
var ui=BUTTON.content.cloneNode(true).firstElementChild;document.body.appendChild(ui);document.body.addEventListener("mouseup",show_frag_btn,false);document.body.addEventListener("touchend",show_frag_btn,false);})();