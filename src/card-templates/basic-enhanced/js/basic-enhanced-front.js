var typeColors = {
    "javascript": { color: "#e8b001", colorName: "Yellow" },
    "typescript": { color: "#00A6ED", colorName: "Light Blue" },
    "css": { color: "#60d6fc", colorName: "Blue" },
    "html": { color: "#ff7714", colorName: "Orange" },
    "web development": { color: "#606ee8", colorName: "Purple" },
    "programming": { color: "#7a5634", colorName: "Brown" },
    "git": { color: "#f05032", colorName: "Git Orange" },
    "browsers": { color: "#4caf50", colorName: "Green" },
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