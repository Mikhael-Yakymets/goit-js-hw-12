import{a as l,S as f,i as n}from"./assets/vendor-DMjJPMAs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="49361857-acd351382a63090e65700df5d",h="https://pixabay.com/api/";l.defaults.baseURL=h;async function y(a){const r={q:a,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:{total:s,totalHits:i,hits:e}}=await l(`?key=${m}`,{params:{...r}});return{hits:e,totalHits:i}}const c=document.querySelector(".js-gallary"),u=document.querySelector(".loader-container");let g=new f(".js-gallary a",{captionsData:"alt",captionDelay:250});function b(){c.innerHTML=""}function v(a=[]){const r=a.map(({webformatURL:s,largeImageURL:i,tags:e,likes:t,views:o,comments:d,downloads:p})=>`<li class="gallery-item">
            <a
              href="${i}"
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
                <p class="attribute-value">${o}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Comments</p>
                <p class="attribute-value">${d}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Downloads</p>
                <p class="attribute-value">${p}</p>
              </div>
            </div>
          </li>`).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){u.classList.remove("visually-hidden")}function S(){u.classList.add("visually-hidden")}const $={form:document.querySelector(".js-search-form")},{form:w}=$;w.addEventListener("submit",x);async function x(a){a.preventDefault();const r=a.currentTarget,{searchText:s}=r.elements;if(r.elements.searchText.value.trim()===""){a.preventDefault(),n.warning({title:"Warning",message:"Please complete the field",position:"topCenter"});return}L(),b();try{const{hits:e,totalHits:t}=await y(s.value);if(!e||e.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}v(e)}catch(e){n.error({title:"Error",message:`Error fetching images: ${e}`,position:"topCenter"})}finally{S()}s.value=""}
//# sourceMappingURL=index.js.map
