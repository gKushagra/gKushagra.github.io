// Set the initial terminal prompt
function setPrompt(text) {
  const promptLine = document.getElementById('terminal-prompt-line');
  if (promptLine) {
    promptLine.innerHTML = `<span class="prompt">kushagra@www:~$</span> ${text}`;
  }
}

// Show a specific section (Projects, Education, Experience, Articles)
function showSection(sectionId) {
  const section = document.getElementById(sectionId);
  const folderList = document.getElementById('ls-output');

  if (!section || !folderList) return;  // Exit if the section or folder list doesn't exist

  // Hide all sections
  const sections = ["projects", "education", "experience", "articles"];
  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.style.display = 'none';
  });

  // Hide the folder list
  folderList.style.display = 'none';

  // Show the selected section
  section.style.display = 'block';

  // Set terminal prompt based on the section
  const promptText = `man ${sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}`;
  setPrompt(promptText);
}

// Return to the main terminal view
function showTerminal() {
  setPrompt('ls');
  const sections = ["projects", "education", "experience", "articles", "contact"];
  sections.forEach(id => {
    const element = document.getElementById(id);
    if (element) element.style.display = 'none';
  });

  // Show the folder list
  const outputArea = document.getElementById('ls-output');
  if (outputArea) outputArea.style.display = 'block';
}

// Initialize terminal and event listeners
document.addEventListener("DOMContentLoaded", function () {
  setPrompt('ls');

  // Add click event listeners for each folder
  const folderIds = ["projects-folder", "education-folder", "experience-folder", "articles-folder", "contact-folder"];
  folderIds.forEach(id => {
    const folder = document.getElementById(id);
    if (folder) {
      folder.style.cursor = "pointer";
      folder.addEventListener("click", function () {
        const sectionId = id.replace("-folder", "");
        showSection(sectionId);
      });
    }
  });

  // Add back link functionality
  document.querySelectorAll('.back-link').forEach(function (link) {
    link.style.cursor = 'pointer';
    link.addEventListener('click', showTerminal);
  });

  // Add 'q' key to exit sections
  document.addEventListener('keydown', function (e) {
    const sections = ["projects", "education", "experience", "articles", "contact"];
    const anySectionActive = sections.some(id => {
      const element = document.getElementById(id);
      return element && element.style.display === 'block';
    });

    if (e.key === 'q' && anySectionActive) {
      showTerminal();
    }
  });
});
