function insertDivWithInfo() {
  const infoDiv = document.createElement("div");
  infoDiv.innerText = "This is some information.";
  document.body.appendChild(infoDiv);
}

insertDivWithInfo();
