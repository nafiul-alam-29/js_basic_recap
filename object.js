var shopping ={
    book: 3,
    sunglass: 1,
    keyboard: 5,
    mouse:2,
    pen:5,

}

const keys = Object.keys(shopping);
console.log(keys);

for(var i=0; i< keys.length; i++)
{
    var propertyName = keys[i];
    var propertyValue = shopping[propertyName];
    console.log(propertyName, propertyValue);
}
