document.getElementById("Love1Zam").addEventListener('click', () => loveZ("Love1Zam")); //Ставим слушателей
document.getElementById('Love2Zam').addEventListener('click', () => loveZ('Love2Zam'));
document.getElementById('Love3Zam').addEventListener('click', () => loveZ('Love3Zam'));
document.getElementById('Love4Zam').addEventListener('click', () => loveZ('Love4Zam'));
document.getElementById('Love5Zam').addEventListener('click', () => loveZ('Love5Zam'));
document.getElementById('Love6Zam').addEventListener('click', () => loveZ('Love6Zam'));
document.getElementById('Love7Zam').addEventListener('click', () => loveZ('Love7Zam'));
document.getElementById('Love8Zam').addEventListener('click', () => loveZ('Love8Zam'));

function loveZ(nameLove) {
    if (window.localStorage.getItem(nameLove) == '0') {
        document.getElementById(nameLove).style.backgroundImage = 'url(love_active.png)';
        window.localStorage.setItem(nameLove, '1');
    } else if (window.localStorage.getItem(nameLove) == '1') {
        document.getElementById(nameLove).style.backgroundImage = 'url(love.png)';
        window.localStorage.setItem(nameLove, '0');
    }
    if (window.localStorage.getItem(nameLove) == null) {
        document.getElementById(nameLove).style.backgroundImage = 'url(love_active.png)';
        window.localStorage.setItem(nameLove, '1');
    }
}
/*
1 - Любимая
0 - Просто
*/