var i = 0; //Счётчик
var z = 'zametka'; //Заготовка имени ключа
var prostoZ = 'z' //Заготовка имени поля с текстом
var zPart2 = 1; //Вторая часть имени поля
while (i < 9) { //Алгоритм рендинга
    let itog = z + zPart2;
    let itogForArea = prostoZ + zPart2;
    let renderLoveIndex = 'Love' + i + 'Zam';
    if (window.localStorage.getItem(renderLoveIndex) == '1') {
        document.getElementById(renderLoveIndex).style.backgroundImage = 'url(love_active.png)';
    }
    if (window.localStorage.getItem(itog) != null) {
        document.getElementById(itogForArea).value = window.localStorage.getItem(itog);
    }
    zPart2++;
    i++;
}