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
  } else if (val === "./Docs/pdf1.pdf") {
    window.open(val, "_blank");
  } else if (
    val ===
    "https://docs.google.com/forms/d/e/1FAIpQLScT75h-GG0wehBKPcu_jERbolat1wQvJ2ZDGEKmkwfT-PGYhg/viewform?embedded=true"
  ) {
    window.open(val, "_blank");
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
