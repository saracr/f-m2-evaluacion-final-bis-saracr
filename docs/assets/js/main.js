"use strict";const cards4=document.querySelector("#four_cards"),cards6=document.querySelector("#six_cards"),cards8=document.querySelector("#eight_cards"),button=document.querySelector(".btn"),resultsCards=document.querySelector(".cards"),adalabCard="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB";let number=0;function choosePairs(){cards4.checked?(number=4,saveData(4)):cards6.checked?(number=6,saveData(6)):cards8.checked&&(number=8,saveData(8)),getInfo(`https://raw.githubusercontent.com/Adalab/cards-data/master/${number}.json`)}function getInfo(e){resultsCards.innerHTML="",fetch(e).then(e=>e.json()).then(e=>{for(const a of e)resultsCards.innerHTML+=`\n        <li class="cards__list">\n          <img class="cards__image-adalab" src="${adalabCard}">\n          <img class="cards__image-pokemon hidden" src="${a.image}">\n        </li>`;const a=document.querySelectorAll(".cards__list");for(const e of a)e.addEventListener("click",flipCards)}),button.addEventListener("click",getInfo)}function flipCards(e){const a=e.currentTarget,t=a.querySelector(".cards__image-pokemon"),c=a.querySelector(".cards__image-adalab");t.classList.toggle("hidden"),c.classList.toggle("hidden")}button.addEventListener("click",choosePairs);const saveValue=localStorage.getItem("inputValue");function inputValue(){"4"===saveValue?cards4.checked=!0:"6"===saveValue?cards6.checked=!0:"8"===saveValue&&(cards8.checked=!0)}function saveData(e){localStorage.setItem("inputValue",e)}inputValue();