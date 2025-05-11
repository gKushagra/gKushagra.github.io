console.log('Script loaded');

// Initialize all elements as hidden
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  
  // Hide all elements initially
  const elements = ['line-1', 'line-2', 'line-3', 'intro'];
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
      element.style.opacity = '0';
    }
  });
  
  // Start with a delay
  setTimeout(() => {
    // Show first line with typewriter effect
    const line1 = document.getElementById('line1');
    line1.style.display = 'block';
    line1.classList.add('typewriter', 'typewriter-1');
    
    // After first line is done, wait, then show second line
    setTimeout(() => {
      // Keep first line visible for 2 seconds
      setTimeout(() => {
        line1.style.display = 'none';
        
        // Add a pause before showing second line
        setTimeout(() => {
          const line2 = document.getElementById('line2');
          line2.style.display = 'block';
          line2.classList.add('typewriter', 'typewriter-2');
          
          // After second line is done, wait, then show third line
          setTimeout(() => {
            // Keep second line visible for 2 seconds
            setTimeout(() => {
              line2.style.display = 'none';
              
              // Add a pause before showing third line
              setTimeout(() => {
                const line3 = document.getElementById('line3');
                line3.style.display = 'block';
                line3.classList.add('typewriter', 'typewriter-3');
              }, 500);
            }, 2000);
          }, 2000);
        }, 500);
      }, 2000);
    }, 1000);
  }, 1000);
});

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
  var screenHeight = window.innerHeight;
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
  document.getElementById(`${divId}`).style.paddingTop = `${
    window.innerHeight / 2
  }px`;
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
