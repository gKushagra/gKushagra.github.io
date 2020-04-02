blockDiv("intro");
setProperties("welcome", "62", "center");
setPaddingTop("welcome");

window.onscroll = function replace() {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    blockDiv("welcome");
    displayDiv("intro");
    setProperties("intro", "32", "center");
    setPadding("intro");
  } else if (
    document.body.scrollTop > -1 ||
    document.documentElement.scrollTop > -1
  ) {
    blockDiv("intro");
    displayDiv("welcome");
    setProperties("welcome", "62", "center");
  }
};

function setProperties(divId, fontSize = "", textAlign = "") {
  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight;
  document.getElementById(`${divId}`).style.width = `${screenWidth}px`;
  document.getElementById(`${divId}`).style.height = `${screenHeight}px`;
  setFontSize(divId, fontSize);
  setTextAlign(divId, textAlign);
}

function blockDiv(divId) {
  document.getElementById(`${divId}`).style.display = "none";
}

function displayDiv(divId) {
  document.getElementById(`${divId}`).style.display = "block";
}

function setPaddingTop(divId) {
  document.getElementById(`${divId}`).style.paddingTop = `${window.innerHeight /
    2}px`;
}

function setFontSize(divId, fontSize) {
  document.getElementById(`${divId}`).style.fontSize = `${fontSize}px`;
}

function setTextAlign(divId, textAlign) {
  document.getElementById(`${divId}`).style.textAlign = `${textAlign}`;
}

function setPadding(divId) {
  document.getElementById(`${divId}`).style.padding = "50px";
}
