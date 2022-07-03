const cacheHeight=window.innerHeight,cacheWidth=window.innerWidth;function animateBurger(){const e=document.getElementById("menu-toggle"),t=document.getElementById("menu");e.addEventListener("click",(()=>{e.classList.toggle("open"),t.classList.toggle("uncollapse")}))}function horizontalScroll(){const e=document.getElementsByTagName("html");window.innerWidth>1200&&window.innerHeight>750&&e[0].addEventListener("wheel",(t=>{e[0].scrollLeft+=350*t.deltaY}),{passive:!1})}function layering(e,t){const n=document.querySelectorAll(e);let i=e;"."!==i[0]&&"#"!==i[0]||(i=i.substring(1)),n.forEach((e=>{const n=[],s=e.innerText.replace(/(\r\n|\n|\r)/gm,""),o=document.createElement("div");o.classList.add(`container-${i}`),e.classList.contains("primary-color")?o.classList.add("container-primary-color"):e.classList.contains("secondary-color")?o.classList.add("container-secondary-color"):e.classList.contains("tertiary-color")&&o.classList.add("container-tertiary-color"),e.classList.contains("number")&&o.classList.add("number"),e.replaceWith(o),o.append(e);for(let i=0;i<t;i+=1)n[i]=document.createElement("span"),n[i].classList.add("glow-layer",`layer-${i}`),n[i].innerText=s,e.classList.contains("title-btn")&&n[i].classList.add("title-btn"),o.append(n[i])}))}function frameLayering(e,t){const n=[];document.querySelectorAll(`.${e}`).forEach((e=>{for(let i=0;i<t;i+=1)n[i]=document.createElement("div"),n[i].classList.add("glow-layer",`layer-${i}`),e.append(n[i])}))}function playAnthem(){const e=document.getElementById("community"),t=document.getElementById("m-community"),n=document.getElementById("t-community");let i=!1;if(null!=e||null!=t||null!=n){const e=document.getElementById("anthem-play-button"),t=document.getElementById("anthem"),n=document.querySelectorAll(".icon-section-2"),s=document.querySelectorAll('animate[from="M 18 10 L 90 49 L 18 90"]'),o=document.querySelectorAll('animate[from="M 82 10 L 82 49 L 82 90"]');e.addEventListener("click",(()=>{!1===i?(t.play(),n.forEach((e=>{e.classList.add("play")})),s.forEach((e=>{e.beginElement()})),i=!0):(t.pause(),n.forEach((e=>{e.classList.remove("play")})),o.forEach((e=>{e.beginElement()})),i=!1)}))}}function previewFile(){const e=new FileReader;e.onload=()=>{document.getElementById("image-preview").style.backgroundImage=`url(${e.result})`},e.readAsDataURL(event.target.files[0])}function resizeCarousel(){const e=document.querySelector(".slideshow-container");null!=e&&(window.innerWidth>920?e.style.height=String(.7*e.offsetWidth+"px"):window.innerWidth<=920&&window.innerWidth>780?e.style.height=String(1*e.offsetWidth+"px"):window.innerWidth<=780&&window.innerWidth>680?e.style.height=String(.8*e.offsetWidth+"px"):window.innerWidth<=680&&(e.style.height=String(.7*e.offsetWidth+"px")))}function resizeWrapper(){const e=document.getElementById("wrapper");if(null!=e){const t=document.querySelectorAll('section[class^="slice"]').length;e.style.width=String(100*t+22+"vw")}}function resizeRouting(){const e=function(){let e;return""!==window.location.href.split("/").slice(-1)?(e=window.location.href.split("/").slice(-1),e=e[0].split(".").shift()):e="index",e.includes("-")&&(e=e.split("-").pop()),e}(),t="/views/"+e+"/"+e+".html",n="/views/"+e+"/m-"+e+".html",i="/views/"+e+"/t-"+e+".html";window.innerWidth>1200&&window.innerHeight>750?window.location.pathname!==t&&window.location.replace(t):window.innerWidth<=600?window.location.pathname!==n&&window.location.replace(n):(window.innerWidth<=1200&&window.innerWidth>600&&window.innerHeight<=750||window.innerWidth>1200&&window.innerHeight<=750||window.innerWidth<=1200&&window.innerWidth>600)&&window.location.pathname!==i&&window.location.replace(i)}function slideshowConstructor(){const e=document.querySelectorAll(".slideshow-item"),t=[];if(null!=e&&0!==e.length){e.forEach((()=>{const e=document.createElement("div"),n=[];e.classList.add("container-btn-neon","point"),document.getElementById("slideshow-pointers").append(e);for(let t=0;t<6;t+=1)n[t]=document.createElement("div"),n[t].classList.add("glow-layer",`layer-${t}`),e.append(n[t]);t.push(e)}));for(let n=0;n<t.length;n+=1)t[n].addEventListener("click",(()=>{e.forEach((e=>{e.classList.contains("active")&&e.classList.remove("active"),e.classList.contains("following")&&e.classList.remove("following"),e.classList.contains("previous")&&e.classList.remove("previous")})),e[n].classList.add("active"),0===n?(e[e.length-1].classList.add("previous"),e[1].classList.add("following")):n===e.length-1?(e[n-1].classList.add("previous"),e[0].classList.add("following")):(e[n-1].classList.add("previous"),e[n+1].classList.add("following"))}));document.getElementById("slideshow-next").addEventListener("click",(()=>{for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("active")){e[t].classList.remove("active"),e[t].classList.add("previous"),0===t?e[e.length-1].classList.remove("previous"):e[t-1].classList.remove("previous"),t===e.length-2?(e[0].classList.add("following"),e[t+1].classList.remove("following"),e[t+1].classList.add("active")):t===e.length-1?(e[0].classList.remove("following"),e[0].classList.add("active"),e[1].classList.add("following")):(e[t+1].classList.remove("following"),e[t+1].classList.add("active"),e[t+2].classList.add("following"));break}})),document.getElementById("slideshow-prev").addEventListener("click",(()=>{for(let t=0;t<e.length;t+=1)if(e[t].classList.contains("active")){e[t].classList.remove("active"),e[t].classList.add("following"),t===e.length-1?e[0].classList.remove("following"):e[t+1].classList.remove("following"),0===t?(e[e.length-1].classList.remove("previous"),e[e.length-1].classList.add("active"),e[e.length-2].classList.add("previous")):1===t?(e[0].classList.remove("previous"),e[0].classList.add("active"),e[e.length-1].classList.add("previous")):(e[t-1].classList.remove("previous"),e[t-1].classList.add("active"),e[t-2].classList.add("previous"));break}}))}}document.addEventListener("DOMContentLoaded",(()=>{animateBurger(),frameLayering("container-neon-frame",6),horizontalScroll(),layering("h1",6),layering("h2",6),layering("h3",6),layering(".btn-neon",6),layering(".check-neon",6),layering(".footer-text",6),layering(".hamburger",6),layering(".input-neon",6),layering(".neon-strip",6),layering(".stroke-neon",6),playAnthem(),resizeCarousel(),resizeWrapper(),slideshowConstructor()})),window.addEventListener("resize",(()=>{window.innerWidth===cacheWidth&&window.innerWidth===cacheHeight||(horizontalScroll(),resizeCarousel(),resizeRouting())}));