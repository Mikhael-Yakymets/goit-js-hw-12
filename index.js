import{a as f,S as w,i as n}from"./assets/vendor-DMjJPMAs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const E="49361857-acd351382a63090e65700df5d",P="https://pixabay.com/api/",u=15;f.defaults.baseURL=P;async function m(o,r=1){const s={q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:u},{data:{total:a,totalHits:e,hits:t}}=await f(`?key=${E}`,{params:{...s}});return{hits:t,totalHits:e}}const h=document.querySelector(".js-gallary"),y=document.querySelector(".loader-container"),p=document.querySelector(".load-btn");let M=new w(".js-gallary a",{captionsData:"alt",captionDelay:250});function $(){h.innerHTML=""}function g(o=[]){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:L,downloads:S})=>`<li class="gallery-item">
            <a
              href="${a}"
            >
              <img
                src="${s}"
                alt="${e}"
              />
            </a>
            <div class="gallery-item-attributes">
              <div class="attribute">
                <p class="attribute-title">Likes</p>
                <p class="attribute-value">${t}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Views</p>
                <p class="attribute-value">${i}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Comments</p>
                <p class="attribute-value">${L}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Downloads</p>
                <p class="attribute-value">${S}</p>
              </div>
            </div>
          </li>`).join("");h.insertAdjacentHTML("beforeend",r),M.refresh()}function b(){y.classList.remove("visually-hidden")}function v(){y.classList.add("visually-hidden")}function q(){p.classList.remove("visually-hidden-btn")}function d(){p.classList.add("visually-hidden-btn")}function C(){const o=document.querySelectorAll(".gallery-item");if(o.length>0){const r=o[0].getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}const H={form:document.querySelector(".js-search-form")};p.addEventListener("click",O);const{form:A}=H;A.addEventListener("submit",B);let c=null,l=1;async function B(o){o.preventDefault();const r=o.currentTarget,{searchText:s}=r.elements;if(c=s.value.trim(),!c){n.warning({title:"Warning",message:"Please complete the field",position:"topCenter"});return}b(),d(),l=1,$();try{const{hits:a,totalHits:e}=await m(c);if(!a||a.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}g(a);const t=Math.ceil(e/u);a.length<u||t===l?d():q()}catch(a){n.error({title:"Error",message:`Error fetching images: ${a}`,position:"topCenter"})}finally{v()}s.value=""}async function O(o){l+=1,b();try{const{hits:r,totalHits:s}=await m(c,l);g(r),C();const a=Math.ceil(s/u);l>=a&&(d(),n.info({title:"Hello",message:"We're sorry, but you've reached the end of search results.",position:"bottomCenter"}))}catch(r){n.error({title:"Error",message:`Error fetching more images: ${r}`,position:"topCenter"})}finally{v()}}
//# sourceMappingURL=index.js.map
