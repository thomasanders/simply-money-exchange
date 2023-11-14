{
  const formElement = document.querySelector(".js-form");
  // const resultElement = document.querySelector(".js-result");

  const eursumElement = document.querySelector(".js-eursum");
  const usdsumElement = document.querySelector(".js-usdsum");
  const btcsumElement = document.querySelector(".js-btcsum");

  const plnElement = document.querySelector(".js-pln");
  const eurElement = document.querySelector(".js-eur");
  const usdElement = document.querySelector(".js-usd");

  const init = () =>   formElement.addEventListener("input", (event) => {
    event.preventDefault();
  
    let eur = eurElement.value;
    let usd = usdElement.value;
    let pln = plnElement.value;
    let btc = 148143;
  
    let sum = pln * eur;
    let sumUSD = pln * usd;
    let sumBTC = pln / btc;
  
    eursumElement.innerText = sum.toFixed(2);
    usdsumElement.innerText = sumUSD.toFixed(2);
    btcsumElement.innerText = sumBTC.toFixed(10);
  });
  init();
}
