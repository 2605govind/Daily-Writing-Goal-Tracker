const canvasBody = document.querySelector('.left-body')

const canvas = document.getElementById("mindMapCanvas");
canvas.width = canvasBody.clientWidth;
canvas.height = canvasBody.clientHeight - 10;



window.addEventListener('resize', () => {
  canvas.width = canvasBody.scrollWidth;
  canvas.height = canvasBody.scrollHeight - 10;
  draw()
})

const ctx = canvas.getContext("2d");


const Definedcolors = ["#ffffff", "#000000", "#7158ee", "#406dfb", "#5a8c71", "#faca00", "#ff7f50", "#75bea1", "#c840fb", "#19a8b4", "#fe938c", "#2a7fc6", "#ff0087",
  "#40fbed", "#61e741", "#fb9740", "#fb4040", "#f640fb", "#2ac671", "#0a4e4e", "#579446", "#ab549a", "#c76558", "#765da4", "#48687c", "#a4905d", "#89c4f4", "#fc4445", "#f2784b", "#f64072", "#18243c", "#ffa600", "#c2b9af",
]

let nodes = [];
let nodesConnections = [];


// Adding Node
let isAddingNode = false;
let AddNodeshape = ""

// Connecting Nodes
let isConnectingNodes = false;
let selectedNodeForConnection = [];

// Zooming
let zoomLevel = 0.9;
let zoomStep = 0.1;
let MIN_ZOOM = 0.3;
let MAX_ZOOM = 3;

// Dragging
let dragxOffset = { x: 0, y: 0 };
let isBoardDrag = false;
let lastBoardLoc = null;
let selectForDragNode = null;

// Deleting
let isDeletingNode = false;
let isDeletingConnection = false;

// For Outline
let selectNodeForEdit = null;


function updateValue() {
  if (CalendarMindMapData) {
    nodes = CalendarMindMapData.node;
    nodesConnections = CalendarMindMapData.connection;
  } else {
    nodes = [];
    nodesConnections = [];
  }

  document.getElementById('mapfileName').value = currentFileName;
  draw()
}

document.getElementById('mapfileName').addEventListener('input', (event) => {
  currentFileName = event.target.value;
})


// Finding Node Base on Cordinates
function findNodeInCanvas(dirX, dirY) {
  return nodes.find((node) => {
    let width = node.width + 2;
    let height = node.height + 2;

    if (node.shape == "circle") {
      width = 2 * width;
      height = 2 * height;
    }

    const left = node.x - width / 2;
    const right = node.x + width / 2;
    const top = node.y - height / 2;
    const bottom = node.y + height / 2;

    return dirX >= left && dirX <= right && dirY >= top && dirY <= bottom;
  });
}

// Draw Funtion
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();

  // Move Acording to dragxOffset
  ctx.translate(dragxOffset.x, dragxOffset.y);
  ctx.scale(zoomLevel, zoomLevel);

  // Creating All Connection
  nodesConnections.forEach(({ start, end }) => {
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.strokeStyle = "black";
    ctx.stroke();
  });

  // Draw Outline
  if (selectNodeForEdit) {
    let w = selectNodeForEdit.width + 2;
    let h = selectNodeForEdit.height + 2;
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;
    if (selectNodeForEdit.shape === "rectangle") {
      ctx.rect(selectNodeForEdit.x - w / 2, selectNodeForEdit.y - h / 2, w, h);
    } else {
      w = 2 * w;
      h = 2 * h;
      ctx.rect(selectNodeForEdit.x - w / 2, selectNodeForEdit.y - h / 2, w, h);
    }
    ctx.stroke();
  }

  // Creating All Nodes
  nodes.forEach((node) => {
    ctx.beginPath();
    ctx.fillStyle = node.backgroundcolor;
    ctx.strokeStyle = "black";
    if (node.shape === "circle") {
      // ctx.arc(node.x, node.y, node.width/2, 0, 2 * Math.PI);
      ctx.ellipse(node.x, node.y, node.width, node.height, 0, 0, 2 * Math.PI);
    } else {
      ctx.rect(
        node.x - node.width / 2,
        node.y - node.height / 2,
        node.width,
        node.height
      );
    }

    ctx.fill();
    ctx.stroke();

    ctx.font = `${node.fontsize}px Arial`;
    ctx.fillStyle = node.fontcolor;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(node.label, node.x, node.y);
  });

  ctx.restore();
}



const zoomPrint = document.getElementById('zoomPrint')
// Zooming
document.getElementById("zoomIn").addEventListener("click", () => {
  if (zoomLevel < MAX_ZOOM) {
    zoomLevel += zoomStep;
    selectNodeForEdit = null;
    zoomPrint.textContent = Math.floor(zoomLevel * 100) + '%';
    draw();
  }
});

document.getElementById("zoomOut").addEventListener("click", () => {
  if (zoomLevel > MIN_ZOOM) {
    zoomLevel -= zoomStep;
    selectNodeForEdit = null;
    zoomPrint.textContent = Math.floor(zoomLevel * 100) + '%';
    draw();
  }
});

document.getElementById("resetZoom").addEventListener("click", () => {
  zoomLevel = 1;
  dragxOffset = { x: 0, y: 0 };
  zoomPrint.textContent = "100%"
  draw();
});

// Node
document.getElementById("addNodeCircle").addEventListener("click", () => {
  isAddingNode = true;
  isDeletingNode = false;
  isConnectingNodes = false;
  isDeletingConnection = false;

  AddNodeshape = "circle";
});

document.getElementById("addNodeRectangle").addEventListener("click", () => {
  isAddingNode = true;
  isDeletingNode = false;
  isConnectingNodes = false;
  isDeletingConnection = false;

  AddNodeshape = "rectangle";
});

document.getElementById("connectNodes").addEventListener("click", () => {
  isConnectingNodes = true;
  isDeletingNode = false;
  isAddingNode = false;
  isDeletingConnection = false;
  selectedNodeForConnection = [];
});

document.getElementById("deleteNode").addEventListener("click", () => {
  isDeletingNode = true;
  isAddingNode = false;
  isConnectingNodes = false;
  isDeletingConnection = false;
});

document.getElementById("deleteconnectNodes").addEventListener("click", () => {
  isDeletingConnection = true;
  isDeletingNode = false;
  isAddingNode = false;
  isConnectingNodes = false;
});




// Width
const widhtincrementdecriment = document.getElementById('widht-increment-decriment')
const widthPrint = document.getElementById('widthPrint')
widhtincrementdecriment.addEventListener("click", ({ target }) => {
  if (selectNodeForEdit) {

    if (target.id === "widthIncrement") {
      selectNodeForEdit.width += 1;
    }

    if (target.id === "widthDecrement") {
      selectNodeForEdit.width -= 1;
    }

    widthPrint.textContent = `${selectNodeForEdit.width}px`
    draw();
  }
});

document.getElementById('nodeWidthInput').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.width = Number(event.target.value);
    widthPrint.textContent = `${event.target.value}px`
    draw();
  }
})


// Height
const heightincrementdecriment = document.getElementById('height-increment-decriment')
const heightPrint = document.getElementById('heightPrint')
heightincrementdecriment.addEventListener("click", ({ target }) => {
  if (selectNodeForEdit) {

    if (target.id === "heightIncrement") {
      selectNodeForEdit.height += 1;
    }

    if (target.id === "heightDecrement") {
      selectNodeForEdit.height -= 1;
    }

    heightPrint.textContent = `${selectNodeForEdit.height}px`
    draw();
  }
});

document.getElementById('nodeheightInput').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.height = Number(event.target.value);
    heightPrint.textContent = `${event.target.value}px`
    draw();
  }
})


// Font size
const fontincrementdecriment = document.getElementById('font-increment-decriment')
const fontPrint = document.getElementById('fontPrint')
fontincrementdecriment.addEventListener("click", ({ target }) => {
  if (selectNodeForEdit) {

    if (target.id === "fontIncrement") {
      selectNodeForEdit.fontsize += 1;
    }

    if (target.id === "fontDecrement") {
      selectNodeForEdit.fontsize -= 1;
    }

    fontPrint.textContent = `${selectNodeForEdit.fontsize}px`
    draw();
  }
});

document.getElementById('nodefontInput').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.fontsize = Number(event.target.value);
    fontPrint.textContent = `${event.target.value}px`
    draw();
  }
})



// Adding Adding Descriptiong
document.getElementById('nodeTitle').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.label = event.target.value;
    draw();
  }
})


// Adding Title
document.getElementById('nodeDescription').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.description = event.target.value;
  }
})




// Adding Color
// Font color
document.getElementById('selecColorForFont').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.fontcolor = event.target.value;
    draw();
  }
})

// Background color
document.getElementById('selecColorForBackground').addEventListener('input', (event) => {
  if (selectNodeForEdit) {
    selectNodeForEdit.backgroundcolor = event.target.value;
    draw();
  }
})

const predefineColorPannal = document.querySelector('.predefine-color-pannal');
Definedcolors.forEach((col) => {
  const span = document.createElement('span');
  span.classList.add('predefine-color-pannal-pro');
  span.setAttribute('color', col);
  span.style.backgroundColor = col;
  predefineColorPannal.appendChild(span);
})


const fontColorSelect = document.getElementById('fontColorSelect')
const BackgroundColorSelect = document.getElementById('BackgroundColorSelect')

fontColorSelect.addEventListener('click', () => {
  fontColorSelect.classList.add('controler-container-color-active')
  BackgroundColorSelect.classList.remove('controler-container-color-active')
})

BackgroundColorSelect.addEventListener('click', () => {
  BackgroundColorSelect.classList.add('controler-container-color-active')
  fontColorSelect.classList.remove('controler-container-color-active')
})


predefineColorPannal.addEventListener('click', ({ target }) => {
  if (selectNodeForEdit && target.classList.contains('predefine-color-pannal-pro')) {

    if (fontColorSelect.classList.contains('controler-container-color-active')) {
      selectNodeForEdit.fontcolor = target.getAttribute('color');

    } else {
      selectNodeForEdit.backgroundcolor = target.getAttribute('color');
    }

    draw()
  }

})



canvas.addEventListener("click", (event) => {
  // Get canvas Location
  const rec = canvas.getBoundingClientRect();

  // Finding Excect Cordingates
  const dirX = (event.clientX - rec.left - dragxOffset.x) / zoomLevel;
  const dirY = (event.clientY - rec.top - dragxOffset.y) / zoomLevel;

  let selectedNode = findNodeInCanvas(dirX, dirY);

  // For outline
  if (selectedNode) {
    // Ouline line
    selectNodeForEdit = selectedNode;
    draw();
  } else {
    selectNodeForEdit = null;
  }

  // If Adding Node is True
  if (isAddingNode) {
    isAddingNode = false;

    // Pushing new node
    nodes.push({
      x: dirX,
      y: dirY,
      label: "New Node",
      shape: AddNodeshape,
      width: 75,
      height: 75,
      isActive: false,
      fontsize: 16,
      description: "",
      fontcolor: "black",
      backgroundcolor: "green",
      connections: [],
    });
    draw();


    // Connecting Node
  } else if (isConnectingNodes) {
    let clickedNode = findNodeInCanvas(dirX, dirY);

    if (clickedNode) {
      selectedNodeForConnection.push(clickedNode);

      if (selectedNodeForConnection.length == 2) {
        nodesConnections.push({
          start: { x: selectedNodeForConnection[0].x, y: selectedNodeForConnection[0].y },
          end: { x: selectedNodeForConnection[1].x, y: selectedNodeForConnection[1].y },
        });

        // let connectLine = {
        //   start: {x: } , 
        //   end: 
        // }

        isConnectingNodes = false;
        selectedNodeForConnection = [];

        draw();
      }
    }

    // Deleting Node width all connection
  } else if (isDeletingNode) {
    if (selectedNode) {
      nodes = nodes.filter((node) => node != selectedNode);
      console.log(nodesConnections);
      nodesConnections = nodesConnections.filter(
        ({ start, end }) => {
          return (start.x !== selectedNode.x && start.y !== selectedNode.y) &&
            (end.x !== selectedNode.x && end.y !== selectedNode.y)
        }
      );
      console.log(nodesConnections);
      selectNodeForEdit = null;
      draw();
    }
    isDeletingNode = false;

    // Deleting selected connection
  } else if (isDeletingConnection) {
    let clickedNode = findNodeInCanvas(dirX, dirY);

    if (clickedNode) {
      selectedNodeForConnection.push(clickedNode);

      if (selectedNodeForConnection.length == 2) {

        nodesConnections = nodesConnections.filter(
          ({ start, end }) =>
            (start.x !== selectedNodeForConnection[0].x && start.y !== selectedNodeForConnection[0].y) ||
            (end.x !== selectedNodeForConnection[1].x && end.y !== selectedNodeForConnection[1].y)
        );

        nodesConnections = nodesConnections.filter(
          ({ start, end }) =>

            (start.x !== selectedNodeForConnection[1].x && start.y !== selectedNodeForConnection[1].y) ||
            (end.x !== selectedNodeForConnection[0].x && end.y !== selectedNodeForConnection[0].y)
        );

        isDeletingConnection = false;
        selectedNodeForConnection = [];

        draw();
      }
    }
  }
});

canvas.addEventListener("mousedown", (event) => {
  const rect = canvas.getBoundingClientRect();
  let dirX = (event.clientX - rect.left - dragxOffset.x) / zoomLevel;
  let dirY = (event.clientY - rect.top - dragxOffset.y) / zoomLevel;

  // Finding if Node then dragging node
  selectForDragNode = findNodeInCanvas(dirX, dirY);

  // Ouline line
  selectNodeForEdit = selectForDragNode;

  // Inisialize values
  if (selectNodeForEdit) {
    document.getElementById('nodeTitle').value = selectNodeForEdit?.label;
    document.getElementById('nodeDescription').value = selectNodeForEdit?.description;
    document.getElementById('widthPrint').textContent = `${selectNodeForEdit?.width}px`
    document.getElementById('heightPrint').textContent = `${selectNodeForEdit?.height}px`
    document.getElementById('fontPrint').textContent = `${selectNodeForEdit?.fontsize}px`


    document.getElementById('nodeWidthInput').value = selectNodeForEdit?.width;
    document.getElementById('nodeheightInput').value = selectNodeForEdit?.height;
    document.getElementById('nodefontInput').value = selectNodeForEdit?.fontsize;

  }

  // Deraging Board initial step
  if (!selectForDragNode) {
    isBoardDrag = true;
    lastBoardLoc = { x: event.clientX, y: event.clientY };
  }
});

canvas.addEventListener("mousemove", (event) => {
  // Dragging node
  if (selectForDragNode) {
    const rect = canvas.getBoundingClientRect();
    let dirX = (event.clientX - rect.left - dragxOffset.x) / zoomLevel;
    let dirY = (event.clientY - rect.top - dragxOffset.y) / zoomLevel;

    nodesConnections.forEach(({ start, end }) => {
      if (start.x == selectForDragNode.x && start.y == selectForDragNode.y) {
        start.x = dirX;
        start.y = dirY;
      }

      if (end.x == selectForDragNode.x && end.y == selectForDragNode.y) {
        end.x = dirX;
        end.y = dirY;
      }

    });


    selectForDragNode.x = dirX;
    selectForDragNode.y = dirY;


    draw();

    // Dragging Board
  } else if (isBoardDrag) {
    let dirX = event.clientX - lastBoardLoc.x;
    let dirY = event.clientY - lastBoardLoc.y;

    dragxOffset.x += dirX;
    dragxOffset.y += dirY;
    lastBoardLoc = { x: event.clientX, y: event.clientY };
    draw();
  }
});

canvas.addEventListener("mouseup", () => {
  selectForDragNode = null;
  isBoardDrag = false;
});

canvas.addEventListener("mouseleave", () => {
  selectForDragNode = null;
  isBoardDrag = false;
});


// reset 
document.getElementById('saveMapWindow').addEventListener('click', () => {
  isAddingNode = false;
  AddNodeshape = ""
  isConnectingNodes = false;
  selectedNodeForConnection = [];
  zoomLevel = 0.9;

  isBoardDrag = false;
  lastBoardLoc = null;
  selectForDragNode = null;
  isDeletingNode = false;
  isDeletingConnection = false;
  selectNodeForEdit = null;

})





document.querySelector('.map-templates-body').addEventListener('click', (event) => {
  if (event.target.classList.contains('map-templates-box') || event.target.tagName === "H4") {
    let index;
    if (event.target.tagName === "H4") {
      index = +event.target.parentElement.getAttribute('index-val');
    } else {
      index = +event.target.getAttribute('index-val');
    }

    nodes = mindmapTemplate[index].node;
    nodesConnections = mindmapTemplate[index].connection;


    // reset
    isAddingNode = false;
    AddNodeshape = ""
    isConnectingNodes = false;
    selectedNodeForConnection = [];
    zoomLevel = 0.9;

    isBoardDrag = false;
    lastBoardLoc = null;
    selectForDragNode = null;
    isDeletingNode = false;
    isDeletingConnection = false;
    selectNodeForEdit = null;

    draw()
  }
})