class TypeWriter{constructor(t,i,s=3e3){this.txtElement=t,this.words=i,this.txt="",this.wordIndex=0,this.wait=parseInt(s,10),this.type(),this.isDeleting=!1}type(){let t=this.wordIndex%this.words.length,i=this.words[t];this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;let s=300;this.isDeleting&&(s/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,s=500):(s=this.wait,this.isDeleting=!0),setTimeout(()=>this.type(),s)}}function init(){let t=document.querySelector(".txt-type"),i=JSON.parse(t.getAttribute("data-words")),s=t.getAttribute("data-wait");new TypeWriter(t,i,s)}document.addEventListener("DOMContentLoaded",init);

//modal



