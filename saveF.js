document.getElementById('save_1').addEventListener('click', () => saveTXT(1)); //Ставим слушателей сохранения
document.getElementById('save_2').addEventListener('click', () => saveTXT(2));
document.getElementById('save_3').addEventListener('click', () => saveTXT(3));
document.getElementById('save_4').addEventListener('click', () => saveTXT(4));
document.getElementById('save_5').addEventListener('click', () => saveTXT(5));
document.getElementById('save_6').addEventListener('click', () => saveTXT(6));
document.getElementById('save_7').addEventListener('click', () => saveTXT(7));
document.getElementById('save_8').addEventListener('click', () => saveTXT(8));

function saveTXT(index) { //Алгоритм сохранения заметки
    let nameOfTextaera = 'z' + index;
    let nameForLocal = 'zametka' + index;
    let TXT = document.getElementById(nameOfTextaera).value;
    if (TXT == null) {
        window.localStorage.removeItem(nameForLocal);
    } else {
        window.localStorage.setItem(nameForLocal, TXT);
    }
}