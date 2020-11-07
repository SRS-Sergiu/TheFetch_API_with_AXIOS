const showBitcoin = document.querySelector(".card-title");
const fetchBitconPrice = async () => {
    const result = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
    const data = await result.json();
    const bitcoinPrice = data.ticker.price;

}
function dateFunction() {
    var d = new Date();
    document.querySelector(".card-footer").innerHTML = d;
  }
showBitcoin.addEventListener("load",  fetchBitconPrice(),  dateFunction() );