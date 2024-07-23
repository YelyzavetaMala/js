function getShippingCost(country) {
  let shippingCost;
  switch (country.toLowerCase()) {
    case "china":
      shippingCost = 100;
      break;
    case "chile":
      shippingCost = 250;
      break;
    case "australia":
      shippingCost = 170;
      break;
    case "jamaica":
      shippingCost = 120;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
  return `Shipping to ${country} will cost ${shippingCost} credits`;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
