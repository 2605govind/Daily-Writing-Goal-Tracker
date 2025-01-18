// let daysData = [];

let currentSelecetedDate = null;

const monthYear = document.getElementById('month-year');
const daysContainer = document.getElementById('day-container');
const prevCalButton = document.getElementById('prevCal');
const nextCalButton = document.getElementById('nextCal');
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// right-goal-container h2
const currentDateDiv = document.getElementById('current-date');

// Gaol Box
const addGoal = document.getElementById('add-goal'); // input
const addNewGoal = document.getElementById('addNewGoal'); // click

// Incomplete container 
const incompleteGoalBody = document.querySelector('.incomplete-goal-body'); // click
const completeGoalBody = document.querySelector('.complete-goal-body'); // click



// document.querySelector('.container-maip').style.display ="none"


document.addEventListener('DOMContentLoaded', () => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let currentDate = new Date();
    let today = new Date();

    function renderCalender(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        monthYear.textContent = `${months[month]} ${year}`

        daysContainer.innerHTML = '';


        // prev month's dates
        const prevMonthLastDay = new Date(year, month, 0).getDate();
        for (let i = firstDay; i > 0; i--) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = prevMonthLastDay - i + 1;

            // Set full date Attribute For Storing Data
            currentDate.setMonth(currentDate.getMonth() - 1);
            dayDiv.setAttribute("full-date", `${prevMonthLastDay - i + 1}-${months[date.getMonth()]}-${date.getFullYear()}`);
            currentDate.setMonth(currentDate.getMonth() + 1);

            dayDiv.classList.add('fade-date')
            daysContainer.appendChild(dayDiv)
        }

        // current months's dates
        for (let i = 1; i <= lastDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            // Set full date Attribute For Storing Data
            dayDiv.setAttribute("full-date", `${i}-${months[date.getMonth()]}-${date.getFullYear()}`);

            if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                dayDiv.classList.add('selected')
                // dayDiv.classList.add('today')
                dayDiv.innerHTML = `${i} <span class="today"><span>`;
                currentSelecetedDate = dayDiv;
                currentDateForStoring = currentSelecetedDate.getAttribute('full-date');

                printAllIncompleteGoalAtCalendar()

                printAllMindMapAtCalendarDate()

                // Date and WeekDay
                let nowDate = new Date(`${i}-${months[date.getMonth()]}-${date.getFullYear()}`)
                currentDateDiv.textContent = `${nowDate.getDate()} ${daysOfWeek[nowDate.getDay()]}`
            }


            daysContainer.appendChild(dayDiv)
        }

        // next month's dates
        const nextMonthSartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
        for (let i = 1; i <= nextMonthSartDay; i++) {
            const dayDiv = document.createElement('div');
            dayDiv.textContent = i;

            // Set full date Attribute For Storing Data
            currentDate.setMonth(currentDate.getMonth() + 1);
            dayDiv.setAttribute("full-date", `${i}-${months[date.getMonth()]}-${date.getFullYear()}`);
            currentDate.setMonth(currentDate.getMonth() - 1);

            dayDiv.classList.add('fade-date')
            daysContainer.appendChild(dayDiv)
        }
    }

    renderCalender(currentDate)


    prevCalButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalender(currentDate)
    })

    nextCalButton.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalender(currentDate)
    })
})


// Handle Calendar Date Selecting By User 
daysContainer.addEventListener('click', (event) => {
    // console.log(currentSelecetedDate)
    if (event.target.tagName === "DIV") {

        // Adding and removing selected class
        event.target.classList.add('selected');
        currentSelecetedDate.classList.remove('selected')
        currentSelecetedDate = event.target;

        // Date and WeekDay
        let nowDate = new Date(event.target.getAttribute('full-date'))
        currentDateDiv.textContent = `${nowDate.getDate()} ${daysOfWeek[nowDate.getDay()]}`

        // Print
        printAllIncompleteGoalAtCalendar()
        printAllMindMapAtCalendarDate();
    }
})


// Adding New Goal at Calendar Date
addNewGoal.addEventListener('click', () => {
    // console.log(addGoal.value)
    if (addGoal.value !== "") {
        let currentDate = currentSelecetedDate.getAttribute('full-date');
        if (!daysData[currentDate]) {
            daysData[currentDate] = [];
        }

        let currentTime = new Date().toTimeString().slice(0, 5);

        // Making Object Of Date
        let obj = {
            status: "",
            title: addGoal.value.trim(),
            priortiy: "Priortiy",
            details: "",
            startTime: currentTime,
            endTime: currentTime,
        }

        addGoal.value = "";
        daysData[currentDate].push(obj)

        // Print

        printAllIncompleteGoalAtCalendar();

        addGoal.style.height = "auto";
    }
})


// Print
function printAllIncompleteGoalAtCalendar() {
    let currentDate = currentSelecetedDate.getAttribute('full-date');
    incompleteGoalBody.innerHTML = ""
    completeGoalBody.innerHTML = ""
    let idx = 0;
    if (daysData[currentDate]) {
        daysData[currentDate].forEach((obj) => {
            const goalBox = document.createElement('div');
            goalBox.setAttribute('box-id', `${idx++}`)
            goalBox.classList.add('goal-box');
            goalBox.innerHTML = `
                                <div class="goal-box-body" ">
                                    <div class="complete-sign "><i class=" ${obj.status} fa-solid fa-circle-check selectTaskDoneOrNot"></i></div>
                                    <div class="priority-sign">
                                        <span id="Priortiy-value">${obj.priortiy}</span>

                                        <!-- hidden part  -->
                                        <span class="priority-box ">
                                            <div class="Priortiy-inner"><img src="./images/fire.png">Highest</div>
                                            <div class="Priortiy-inner"><img src="./images/jewelry.png">High</div>
                                            <div class="Priortiy-inner"><img src="./images/coin.png">Medium</div>
                                            <div class="Priortiy-inner"><img src="./images/silver-medal.png">Low</div>
                                            <div class="Priortiy-inner">None</div>
                                        </span>
                                    </div>

                                    <div class="goal-inbox">
                                        <input value="${obj.title}" spellcheck="false" autocomplete="off" id="goal-indeb-id" type="text" readonly="true" >
                                    </div>
                                    
                                    
                                    <span id="goal-inbox-edit"><i class="fa-regular fa-pen-to-square"></i></span>
                                    <span id="delete-goal-row"><i class="fa-solid fa-trash"></i></span>
                                    <span id="goal-inbox-drop-down"><i class="active fa-solid fa-angle-up goal-inbox-drop-i"></i></span>
                                </div>

                                
                                <label for="start-time">Start Time:</label>
                                <input type="time" id="start-time" name="start-time" value="${obj.startTime}" required>

                                <label for="end-time">End Time:</label>
                                <input type="time" id="end-time" name="end-time" value="${obj.endTime}" required>

                                <textarea readonly="true" class="active-inbox goal-inbox-detail" rows="1" spellcheck="false" autocomplete="off" id="goal-inbox-details" placeholder="Writing..." >${obj.details}</textarea>
                            `

            if (obj.status === "active") {

                completeGoalBody.appendChild(goalBox)
            } else {
                incompleteGoalBody.appendChild(goalBox)
            }
        })
    }


}

// Print All Mind Map At Calendar Date
function printAllMindMapAtCalendarDate() {
    const mindMapContainer = document.querySelector('.mind-map-section-body');
    mindMapContainer.innerHTML = "";

    let currentDate = currentSelecetedDate.getAttribute('full-date');
    currentDateForStoring = currentDate;

    if (daysMindMap[currentDate]) {

        daysMindMap[currentDate].forEach((obj, inx) => {
            const div = document.createElement('div');
            div.classList.add('mind-map-box');
            div.setAttribute("dayMapId", inx);

            div.setAttribute("full-date", obj.date);

            div.innerHTML = `<h3>${daysMindMap[obj.date][inx].name}</h3>
                          <img class="mind-map-img" src="./images/mind-map.png">
                          <span><i class="fa-solid fa-trash"></i></span>`
            mindMapContainer.appendChild(div);
        })
    }


    const printAllMindMap = document.querySelector('.print-all-mind-map');
    printAllMindMap.innerHTML = "";

    for (let key in daysMindMap) {
        daysMindMap[key].forEach((obj, inx) => {
            const div = document.createElement('div');
            div.classList.add('mind-map-box');
            div.setAttribute("dayMapId", inx);
            div.setAttribute("full-date", obj.date);
            div.innerHTML = `<h3>${obj.name}</h3>
                          <img class="mind-map-img" src="./images/mind-map.png">`
            printAllMindMap.appendChild(div);
        })
    }
}




// For Incomplete goal
const toggleIncompleteGoal = document.querySelector('#toggle-incomplete-goal');
toggleIncompleteGoal.addEventListener('click', () => {
    toggleIncompleteGoal.classList.toggle('active-body');
    incompleteGoalBody.classList.toggle('goal-body-active')
});


// For Complete goal
const toggleCompleteGoal = document.querySelector('#toggle-complete-goal');
toggleCompleteGoal.addEventListener('click', () => {
    toggleCompleteGoal.classList.toggle('active-body');
    completeGoalBody.classList.toggle('goal-body-active')
});





// Goal
const rightGoalContainer = document.querySelector('.right-goal-container');
rightGoalContainer.addEventListener('click', (event) => {
    let currentDate = currentSelecetedDate.getAttribute('full-date');

    // For Priority
    if (event.target.classList.contains('Priortiy-inner')) {
        let index = +event.target.parentElement.parentElement.parentElement.parentElement.getAttribute('box-id');
        switch (event.target.textContent) {
            case "Highest":
                event.target.parentElement.parentElement.children[0].innerHTML = `<img src="./images/fire.png"> Highest`
                daysData[currentDate][index].priortiy = `<img src="./images/fire.png"> Highest`;
                break;

            case "High":
                event.target.parentElement.parentElement.children[0].innerHTML = `<img src="./images/jewelry.png"> High`
                daysData[currentDate][index].priortiy = `<img src="./images/jewelry.png"> High`
                break;

            case "Medium":
                event.target.parentElement.parentElement.children[0].innerHTML = `<img src="./images/coin.png"> Low`
                daysData[currentDate][index].priortiy = `<img src="./images/coin.png"> Medium`
                break;

            case "Low":
                event.target.parentElement.parentElement.children[0].innerHTML = `<img src="./images/silver-medal.png"> Lowest`
                daysData[currentDate][index].priortiy = `<img src="./images/silver-medal.png"> Low`
                break;

            case "None":
                event.target.parentElement.parentElement.children[0].innerHTML = `Priortiy`
                daysData[currentDate][index].priortiy = `Priortiy`
                break;
        }
        event.target.parentElement.classList.remove('priority-activate')
        printAllIncompleteGoalAtCalendar()
    }

    if (event.target.id === "Priortiy-value") {
        event.target.parentElement.children[1].classList.add('priority-activate')
    }


    // // Update Title and Details
    // Input and TextArea can write
    if (event.target.classList.contains('fa-pen-to-square')) {
        event.target.parentElement.parentElement.children[2].children[0].readOnly = false;
        event.target.parentElement.parentElement.parentElement.lastElementChild.readOnly = false;

        event.target.parentElement.innerHTML = `<i class="fa-solid fa-check"></i>`

    }

    // Input and TextArea cannot write
    if (event.target.classList.contains('fa-check')) {
        event.target.parentElement.parentElement.children[2].children[0].readOnly = true;
        event.target.parentElement.parentElement.parentElement.lastElementChild.readOnly = true;

        // Update new Title
        let index = +event.target.parentElement.parentElement.parentElement.getAttribute('box-id')
        daysData[currentDate][index].title = event.target.parentElement.parentElement.children[2].children[0].value;
        daysData[currentDate][index].details = event.target.parentElement.parentElement.parentElement.lastElementChild.value;

        event.target.parentElement.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`
    }

    // open textarea 
    if (event.target.classList.contains('goal-inbox-drop-i')) {
        event.target.parentElement.parentElement.parentElement.lastElementChild.classList.toggle('active-inbox')
        event.target.classList.toggle('goal-inbox-drop')
    }

    // Delete Gaol
    if (event.target.classList.contains('fa-trash')) {
        event.target.parentElement.parentElement.parentElement.remove()
        let index = +event.target.parentElement.parentElement.parentElement.getAttribute('box-id')
        delete daysData[currentDate][index]
    }

    // Goal complete or not Selecting
    if (event.target.classList.contains('selectTaskDoneOrNot')) {
        let index = +event.target.parentElement.parentElement.parentElement.getAttribute('box-id')
        if (daysData[currentDate][index].status === "active") {
            daysData[currentDate][index].status = ""
        } else {
            daysData[currentDate][index].status = "active"
        }

        printAllIncompleteGoalAtCalendar()
    }



})



// Update Time of Goal
rightGoalContainer.addEventListener('input', (event) => {
    let currentDate = currentSelecetedDate.getAttribute('full-date');

    if (event.target.id == "start-time") {
        let index = +event.target.parentElement.getAttribute('box-id')
        daysData[currentDate][index].startTime = event.target.value
    }

    if (event.target.id == "end-time") {
        let index = +event.target.parentElement.getAttribute('box-id')
        daysData[currentDate][index].endTime = event.target.value
    }
})



const addGoalField = document.getElementById('add-goal');
addGoalField.addEventListener('input', (event) => {
    addGoalField.style.height = 'auto';
    addGoalField.style.height = `${event.target.scrollHeight}px`;
})