function createNewChild(){var e=document.getElementById("list"),n=document.createElement("li");n.innerHTML="NEW ITEM ",e.appendChild(n)}function removeFirstChild(){var e=document.getElementById("list"),n=e.children[0];null!=n&&e.removeChild(n)}