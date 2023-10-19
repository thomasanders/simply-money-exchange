let plnElement = document.querySelector(".js-pln");
let eurElement = document.querySelector(".js-eur");
let usdElement = document.querySelector(".js-usd");
let formElement = document.querySelector(".js-form");
let eursumElement = document.querySelector(".js-eursum");
let usdsumElement = document.querySelector(".js-usdsum");
let btcsumElement = document.querySelector(".js-btcsum");

formElement.addEventListener("input", (event) => {
    event.preventDefault();
  
    let eur = eurElement.value;
    let usd = usdElement.value;
    let pln = plnElement.value;
    let btc = 119143;
  
    let sum = pln * eur;
    let sumUSD = pln * usd;
    let sumBTC = pln / btc;
  
    eursumElement.innerText = sum.toFixed(2);
    usdsumElement.innerText = sumUSD.toFixed(2);
    btcsumElement.innerText = sumBTC.toFixed(10);
  });
