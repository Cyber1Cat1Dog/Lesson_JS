var str = "Wonderful Happiness Joyful Time Task Apple"
//без букви А довші за 6 символів
var regex = /[^Aa]{6,}/g //щоб знайшло всі
var result = str.match(regex) // шукаємо в строці
console.log(result) 