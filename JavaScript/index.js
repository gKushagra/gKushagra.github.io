blockDiv("line-1");
blockDiv("line-2");
blockDiv("line-3");
blockDiv("intro");
displayDiv("line-1");
setProperties("line-1", "72", "center");
setPaddingTop("line-1");

homeTransition("line-1", "line-2", "62", "center", "", "line-2");
setTimeout(() => {
  homeTransition("line-2", "line-3", "62", "center", "", "line-3");
}, 2000);
setTimeout(() => {
  homeTransition("line-3", "intro", "22", "left", "intro", "");
}, 4000);

/*
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
*/

// Transitions for home screen

function homeTransition(
  div1,
  div2,
  fontSize = "",
  textAlign = "",
  padding = "",
  paddingTop = ""
) {
  setTimeout(() => {
    blockDiv(div1);
    displayDiv(div2);
    setProperties(div2, fontSize, textAlign);
    if (!paddingTop == "") {
      setPaddingTop(paddingTop);
    }
    if (!padding == "") {
      setPadding(padding);
    }
  }, 2000);
}

// Helper functions

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
  document.getElementById(`${divId}`).style.padding = "200px";
}
