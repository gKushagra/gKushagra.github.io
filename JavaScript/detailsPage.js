blockDiv("projects");
blockDiv("education");

// Drop down menu
function selectClick() {
  var e = document.getElementById("nav-select");
  var val = e.options[e.selectedIndex].value;
  if (val === "projects") {
    displayProjects();
  } else if (val === "education") {
    displayEducation();
  }
}

// Display projects
function displayProjects() {
  if (document.getElementById("education").style.display === "block") {
    blockDiv("education");
  }
  displayDiv("projects");
}

// Display education
function displayEducation() {
  if (document.getElementById("projects").style.display === "block") {
    blockDiv("projects");
  }
  displayDiv("education");
}

// Block a div
function blockDiv(divId) {
  document.getElementById(`${divId}`).style.display = "none";
}

// Display a div
function displayDiv(divId) {
  document.getElementById(`${divId}`).style.display = "block";
}

// Get current Time and date

