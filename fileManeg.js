
document.querySelector('.container-maip').style.display = "none"


function resetMindMapPro() {
    isAddingNode = false;
    AddNodeshape = ""
    isConnectingNodes = false;
    selectedNodeForConnection = [];
    zoomLevel = 0.9;

    lastBoardLoc = null;
    selectForDragNode = null;
    isDeletingNode = false;
    isDeletingConnection = false;
    selectNodeForEdit = null;
    document.getElementById('zoomPrint').textContent = '100%';
}

// Creaigin Mind Map at calendar
const addingMindmap = document.querySelector('.adding-mindmap');
addingMindmap.addEventListener('click', () => {
    isCreatingMindMap = true;
    document.querySelector('.container').style.display = "none"
    document.querySelector('.container-maip').style.display = "flex"
    CalendarMindMapData = null;

    // reset
    resetMindMapPro();

    currentFileName = `${currentDateForStoring}-file-${(daysMindMap[currentDateForStoring]) ? daysMindMap[currentDateForStoring].length + 1 : 1}`
    // currentFileName = `${currentDateForStoring}`
    updateValue();
})


// Navigation

// calendar
const navigateIconMap = document.querySelector('.navigate-icon-map');
navigateIconMap.addEventListener('click', () => {
    document.querySelector('.container').style.display = "none"
    document.querySelector('.container-maip').style.display = "flex"
    // CalendarMindMapData = null;

    // resetMindMapPro();

    if (!CalendarMindMapData)
        currentFileName = `${currentDateForStoring}-file-${(daysMindMap[currentDateForStoring]) ? daysMindMap[currentDateForStoring].length + 1 : 1}`

    updateValue();
})




// MindMap
const navigatemapiconcalendar = document.querySelector('.navigate-map-icon-calendar');
navigatemapiconcalendar.addEventListener('click', () => {
    document.querySelector('.container').style.display = "flex"
    document.querySelector('.container-maip').style.display = "none"
    CalendarMindMapData = null;

    resetMindMapPro();
    updateValue();
})



// // cancel Map Window
const cancelMapWindow = document.querySelector('#cancelMapWindow');
cancelMapWindow.addEventListener('click', () => {
    document.querySelector('.container').style.display = "flex"
    document.querySelector('.container-maip').style.display = "none"
    CalendarMindMapData = null;
    resetMindMapPro();
    updateValue();
})



// Save Window at MindMap For Day
const saveMapWindow = document.querySelector('#saveMapWindow');
saveMapWindow.addEventListener('click', () => {
    document.querySelector('.container').style.display = "flex"
    document.querySelector('.container-maip').style.display = "none"

    let filename = ""
    if (currentFileName) {
        filename = currentFileName;
    } else {
        filename = `${currentDateForStoring}-file-${CalendarMindMapID + 1}`;
    }

    currentMindMapData = {
        name: filename,
        date: currentDateForStoring,
        node: nodes,
        connection: nodesConnections
    }

    if (!daysMindMap[currentDateForStoring]) {
        daysMindMap[currentDateForStoring] = [];
    }

    if (CalendarMindMapData) {
        daysMindMap[currentDateForStoring][CalendarMindMapID] = currentMindMapData;
    } else {
        daysMindMap[currentDateForStoring].push(currentMindMapData);
    }

    // console.log(daysMindMap)
    CalendarMindMapData = null;
    printAllMindMapAtCalendarDate()

    resetMindMapPro();

})


// mind-map-section-body
document.querySelector('.mind-map-section-body').addEventListener('click', ({ target }) => {

    if (target.classList.contains('mind-map-box') || target.tagName === "IMG" || target.tagName === "H3") {
        let id;
        if (target.classList.contains('mind-map-box')) {
            id = +target.getAttribute('dayMapId')

        } else if (target.tagName === "IMG") {
            id = +target.parentElement.getAttribute('dayMapId')

        } else if (target.tagName === "H3") {
            id = +target.parentElement.getAttribute('dayMapId')

        }

        CalendarMindMapID = id;
        document.querySelector('.container').style.display = "none"
        document.querySelector('.container-maip').style.display = "flex"

        isCalendarMindMap = true;

        CalendarMindMapData = daysMindMap[currentDateForStoring][id];

        currentFileName = daysMindMap[currentDateForStoring][CalendarMindMapID].name;

        resetMindMapPro();
        updateValue();
    }

    if (target.tagName === "I") {
        let deleteDate = target.parentElement.parentElement.getAttribute('full-date')
        let deleteId = target.parentElement.parentElement.getAttribute('dayMapId');

        daysMindMap[deleteDate].splice(deleteId, 1)

        printAllMindMapAtCalendarDate()
    }
})


// print-all-mind-map
document.querySelector('.print-all-mind-map').addEventListener('click', ({ target }) => {

    if (target.classList.contains('mind-map-box') || target.tagName === "IMG" || target.tagName === "H3") {
        let id;
        let date;
        if (target.classList.contains('mind-map-box')) {
            id = +target.getAttribute('dayMapId')
            date = target.getAttribute('full-date')

        } else if (target.tagName === "IMG") {
            id = +target.parentElement.getAttribute('dayMapId')
            date = target.parentElement.getAttribute('full-date')

        } else if (target.tagName === "H3") {
            id = +target.parentElement.getAttribute('dayMapId')
            date = target.parentElement.getAttribute('full-date')
        }

        CalendarMindMapID = id;
        document.querySelector('.container').style.display = "none"
        document.querySelector('.container-maip').style.display = "flex"

        isCalendarMindMap = true;

        CalendarMindMapData = daysMindMap[date][id];

        currentFileName = daysMindMap[date][CalendarMindMapID].name;

        resetMindMapPro();
        updateValue();
    }
})

