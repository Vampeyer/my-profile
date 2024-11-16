let e;function t(e){return e&&e.__esModule?e.default:e}var r=globalThis,n={},o={},a=r.parcelRequire1b70;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequire1b70=a),(0,a.register)("3EdIx",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),a("3EdIx").register(new URL("",import.meta.url).toString(),JSON.parse('["5SCbD","index.b61ea4c2.js","8S9Ei","bot.766f08d7.svg","8NBIN","user.13982071.svg"]'));var i={};i=new URL("bot.766f08d7.svg",import.meta.url).toString();var l={};l=new URL("user.13982071.svg",import.meta.url).toString();const s=document.querySelector("form"),c=document.querySelector("#chat_container");function d(e,r,n){return`
        <div class="wrapper ${e&&"ai"}">
            <div class="chat">
                <div class="profile">
                    <img 
                      src=${e?t(i):t(l)} 
                      alt="${e?"bot":"user"}" 
                    />
                </div>
                <div class="message" id=${n}>${r}</div>
            </div>
        </div>
    `}const u=async t=>{t.preventDefault();let r=new FormData(s);c.innerHTML+=d(!1,r.get("prompt")),s.reset();let n=function(){let e=Date.now(),t=Math.random().toString(16);return`id-${e}-${t}`}();c.innerHTML+=d(!0," ",n),c.scrollTop=c.scrollHeight;let o=document.getElementById(n);o.textContent="",e=setInterval(()=>{o.textContent+=".","...."===o.textContent&&(o.textContent="")},300);let a=await fetch("http://localhost:5000",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:r.get("prompt")})});if(clearInterval(e),o.innerHTML=" ",a.ok){let e,t;let r=(await a.json()).bot.trim();e=0,t=setInterval(()=>{e<r.length?(o.innerHTML+=r.charAt(e),e++):clearInterval(t)},20)}else{let e=await a.text();o.innerHTML="Something went wrong",alert(e)}};s.addEventListener("submit",u),s.addEventListener("keyup",e=>{13===e.keyCode&&u(e)});
//# sourceMappingURL=index.b61ea4c2.js.map
