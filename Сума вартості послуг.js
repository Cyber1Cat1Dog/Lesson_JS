var services = {
стрижка: "60 грн",
гоління: "80 грн",
"Миття голови": "100 грн", price() {
let totalPrice = 0;
for (const key in this) {
if (typeof this[key] !== "function") {
totalPrice += Number.parseFloat(this[key]);
}
}
return totalPrice; },
minPrice() {
let min = Infinity;
for (const key in this) {
if (typeof this[key] !== "function") {
const val = Number.parseFloat(this[key]);
if (val < min) min = val;
}
}
return min; },
maxPrice() {
let max = -Infinity;
for (const key in this) {
if (typeof this[key] !== "function") {
const val = Number.parseFloat(this[key]);
if (val > max) max = val;
}
}
return max;
},
};
services["Розбити скло"] = "200 грн";
console.log(services.price());
console.log(services.minPrice());
console.log(services.maxPrice());