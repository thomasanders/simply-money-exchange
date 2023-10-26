{
  const plnElement = document.querySelector(".js-pln");
  const eurElement = document.querySelector(".js-eur");
  const usdElement = document.querySelector(".js-usd");
  const formElement = document.querySelector(".js-form");
  const eursumElement = document.querySelector(".js-eursum");
  const usdsumElement = document.querySelector(".js-usdsum");
  const btcsumElement = document.querySelector(".js-btcsum");

  formElement.addEventListener("input", (event) => {
    event.preventDefault();

    const eur = eurElement.value;
    const usd = usdElement.value;
    const pln = plnElement.value;
    const btc = 119143;

    const sum = pln * eur;
    const sumUSD = pln * usd;
    const sumBTC = pln / btc;

    eursumElement.innerText = sum.toFixed(2);
    usdsumElement.innerText = sumUSD.toFixed(2);
    btcsumElement.innerText = sumBTC.toFixed(10);
  });
}
