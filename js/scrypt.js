let tabList = document.querySelector('#tabList');
let tabContent = document.querySelectorAll('.tabcontent');
let tablinks = document.querySelectorAll('.tablink');

let defaultOpen = document.querySelector('#defaultOpen');
let tabActive = document.querySelector('.tabcontent.active');

// getComputedStyle(element) - позволяет получить значение любого CSS свойтсва элемента, даже из CSS файла

defaultOpen.style.backgroundColor = getComputedStyle(tabActive).backgroundColor;

tabList.addEventListener('click', (e) => {
    // Кнопка по которой кликнули
    const targetElement = e.target;
    console.log(targetElement);
    // элемент.dataset.имя - обращение к data атрибуту с указанным именем
    const dataCity = targetElement.dataset.city;
    console.log(dataCity);
    for (let item of tabContent) {
        item.classList.remove('active');

    }
})








































/*
let Moscow = document.querySelector('#Moscow');
let Patris = document.querySelector('#Paris');
let Tokyo = document.querySelector('#Tokyo');
let Oslo = document.querySelector('#Oslo');
*/

