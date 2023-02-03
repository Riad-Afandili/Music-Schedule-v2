'use strict';

const instruments = [
    {
        id: 1,
        category: "Violin",
        day: "Monday, Tuesday, Wednesday, Thursday, Friday", 
        time: "4-5pm.......4-5pm..........➖............4-5pm.......➖",
    },
    {
        id: 2,
        category: "Piano",
        day: "Monday, Tuesday, Wednesday, Thursday, Friday",
        time: "5-6pm.......5-6pm.......4-5pm.......5-6pm.......4-5pm",
    },
    {
        id: 3,
        category: "Cello",
        day: "Monday, Tuesday, Wednesday, Thursday, Friday",
        time: "➖...............➖...........4-5pm..........➖........4-5pm",
    },
]

const sectionCenter = document.querySelector(".holder");
const filterBtns = document.querySelectorAll('.filter-btn')

window.addEventListener("DOMContentLoaded", function () {
    displayInstrumentsItems(instruments)
})

filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const instrumentsCategory = instruments.filter(function (instrumentsItem) {
            if (instrumentsItem.category === category) {
                return instrumentsItem;
            }
        })
        if (category === 'all') {
            displayInstrumentsItems(instruments)
        }
        else {
            displayInstrumentsItems(instrumentsCategory)
        }
    })
})

function displayInstrumentsItems(instrumentsItems) {
    let displayInstruments = instrumentsItems.map(function (item) {
        return `<section>
            <header>
            <h4>${item.category}</h4>
            <h4>${item.day}</h4>  
            <h4>${item.time}</h4>
            </header>
      </section>`
    });
    displayInstruments = displayInstruments.join("");
    sectionCenter.innerHTML = displayInstruments
}
