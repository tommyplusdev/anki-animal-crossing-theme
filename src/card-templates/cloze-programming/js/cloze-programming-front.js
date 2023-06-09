var hint = document.querySelector('.hint');
var hintIndicator = document.querySelector('.hintIndicator');
var hintBlock = document.getElementById('hintBlock');
var timeout;

if (!hint || typeof hint === "null") {
  console.log("No hint available!");
  hintIndicator.style.display = 'none';
} else {
	hintIndicator.addEventListener('click', manuallyShowHintBlock);
  hint.addEventListener('click', showHintText);
  hint.textContent = "I need some help!"; //override default anki msg
}

function showHintText() {
  const hintBlock = document.querySelector('#hintBlock');
  
  // Check if hintBlock element exists
  if (hintBlock) {
    hintBlock.style.backgroundColor = '#442d0b';
  }

  // Check if element with class "hint" exists
	// Temporarily removed, as this strips the HTML formatting from Anki.
/*
  const hint = document.querySelector('div.hint');
  if (hint) {
    hint.innerText = `ⓘ ${hint.innerText}`;
  }
*/
}

function showHintBlock() {
  clearTimeout(timeout);
  hintBlock.style.display = 'block';
  hintIndicator.style.display = 'none';
}

function manuallyShowHintBlock() {
  showHintBlock();
  const hint = document.querySelector('a.hint');
    hint.style.display = 'none';
    const hintBlock = document.querySelector('a.hint + div');
    hintBlock.style.display = 'block';
}

function startTimer() {
  timeout = setTimeout(() => {
    hintBlock.style.display = 'block';
    hintIndicator.style.display = 'none';
    console.log("timer is working");
  }, 30000);
}

function delayedStartTimer() {
// Ask the global window object to queue a function
// at browser re-painting cycle.
  window.requestAnimationFrame(() => {
    startTimer();
  });
}

// check if the DOM finished loading and run ASAP
if (document.readyState === 'complete') {
  clearTimeout(timeout); // reset the timer on new card type (same cloze programming) load.
  delayedStartTimer();
} else {
	clearTimeout(timeout);
	// when the browser rendering is completed, run the event handler
  window.addEventListener('load', delayedStartTimer);
}

var typeColors = {
  "javascript": { color: "#e8b001", colorName: "Yellow" },
  "typescript": { color: "#00A6ED", colorName: "Light Blue" },
  "css": { color: "#0d47a1", colorName: "Dark Blue" },
  "html": { color: "#ff7714", colorName: "Orange" },
  "web development": { color: "#606ee8", colorName: "Purple" },
  "programming": { color: "#7a5634", colorName: "Brown" },
  "git": { color: "#f05032", colorName: "Git Orange" },
  "browsers": { color: "#B19CD9", colorName: "Lavender" },
  "node.js": { color: "#7CB701", colorName: "Lime" },
  "react": { color: "#61DAFB", colorName: "Cyan" },
  "rust": { color: "#DEA584", colorName: "Sandy Brown" },
  "vue.js": { color: "#41B883", colorName: "Greenish Teal" },
  "tailwind": { color: "#38B2AC", colorName: "Turquoise" },
  "docker": { color: "#0db7ed", colorName: "Sky Blue" },
  "mysql": { color: "#F29111", colorName: "Orange Red" },
  "bash": { color: "#000000", colorName: "Black" },
  "Unused1": { color: "#f44336", colorName: "Red" },
  "Unused2": { color: "#ff4081", colorName: "Pink" },
  "Unused3": { color: "#009688", colorName: "Teal" },
  "Unused4": { color: "#1E1E50", colorName: "Navy Blue" }
};


var typeElement = document.getElementById("type");

function getType(element) {
  const typeArray = element.textContent.trim().split(" ");
  let typeStringArray = [];
  for (let i = 0; i < typeArray.length; i++) {
    if (typeArray[i] === "/") {
      break;
    }
    typeStringArray.push(typeArray[i]);
  }
  const typeString = typeStringArray.join(" ");
	// correct string just in case
	return typeString;
};

function typeCorrector(string) {
	const newString = string.toLowerCase();
  if (newString === "javascript") {
    return "JavaScript";
  } else if (newString === "typescript") {
    return "TypeScript";
  }
  return string;
};

var typeString = getType(typeElement);

var type = typeColors[typeString.toLowerCase()] || {
  color: "#808080",
  type: "N/A",
  colorName: "Gray"
};

function setTypeStyle() {
 	typeElement.textContent = typeElement.textContent.replace(typeString, typeCorrector(typeString));
  typeElement.style.background = type.color;
  typeElement.setAttribute("data-type", typeString);
  typeElement.setAttribute("data-color-name", type.colorName);
  typeElement.setAttribute("data-color-string", type.color);
}

setTypeStyle();