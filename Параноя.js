var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru"
    },
];

// перевіряємо емейл
var regex = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/

var trustedEmails = [] // тут будуть норм емейли

for(var i = 0; i < arr.length; i++){
    var email = arr[i].email // беремо емейл
    if(regex.test(email)){
        trustedEmails.push(email)
    }
}

console.log(trustedEmails) // виводимо результат