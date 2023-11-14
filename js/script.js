{
  const formElement = document.querySelector(".js-form");
  const eursumElement = document.querySelector(".js-eursum");
  const usdsumElement = document.querySelector(".js-usdsum");
  const btcsumElement = document.querySelector(".js-btcsum");
  const plnElement = document.querySelector(".js-pln");

  let rateEUR = 4.43;
  let rateUSD = 4.21;
  let btc = 148143;

  const init = () =>
    formElement.addEventListener("input", (event) => {
      event.preventDefault();
      let pln = plnElement.value;
      let sum = pln * rateEUR;
      let sumUSD = pln * rateUSD;
      let sumBTC = pln / btc;

      eursumElement.innerText = sum.toFixed(2);
      usdsumElement.innerText = sumUSD.toFixed(2);
      btcsumElement.innerText = sumBTC.toFixed(8);
    });
  init();
}
