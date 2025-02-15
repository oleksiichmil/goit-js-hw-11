import{a as g,S as m,i as l}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u=async(o,r=1,s=20)=>{const i="https://pixabay.com/api/";try{return(await g.get(i,{params:{key:"47161865-40d939b38272e547a09e56cd8",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:s,page:r}})).data}catch(e){throw console.error("Error fetching images:",e),e}},A=o=>o.map(r=>`
    <li class='gallery-item'>
      <a href="${r.largeImageURL}">
        <img alt="${r.tags}" src="${r.webformatURL}" class='gallery-image'/>
      </a>
      <ul class='list-info'>
        <li class='item-info'>
          <p class='title-info'>Likes</p>
          <p class='count-info'>${r.likes}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Views</p>
          <p class='count-info'>${r.views}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Comments</p>
          <p class='count-info'>${r.comments}</p>
        </li>
        <li class='item-info'>
          <p class='title-info'>Downloads</p>
          <p class='count-info'>${r.downloads}</p>
        </li>
      </ul>
    </li>
    `).join(""),c="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",p=document.querySelector(".form"),f=document.querySelector("ul.gallery"),a=document.querySelector(".loader");let d=new m(".gallery a",{captionsData:"alt",captionDelay:250});l.settings({timeout:4e3,position:"topRight"});const y=o=>{o.preventDefault(),f.innerHTML="",a.style.display="block";const r=o.target.elements.search.value.trim();if(!r){l.error({iconUrl:c,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Please write a query for search"}),a.style.display="none";return}u(r).then(({hits:s})=>{if(s.length===0){l.error({iconUrl:c,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Sorry, there are no images matching your search query. Please try again!"}),a.style.display="none";return}const i=A(s);f.innerHTML=i,a.style.display="none",d.refresh(),p.reset()}).catch(s=>{console.error("Error fetching images:",s),l.error({iconUrl:c,iconColor:"#fff",imageWidth:24,messageColor:"#fff",message:"Error fetching images. Please try again later."}),a.style.display="none"})};p.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
