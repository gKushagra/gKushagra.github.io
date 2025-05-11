console.log('Script loaded');

// Initialize all elements as hidden
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded');
  
  // Hide all elements initially
  const elements = ['line1', 'line2', 'line3', 'intro'];
  elements.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'none';
    }
  });
  
  // The intro text as a string (with <br><br> for line breaks)
  const introString = `My name is Kushagra, and I enjoy building <b>scalable, high-performance systems</b> for the web.<br><br>
I'm comfortable writing code in <b>C#</b>, <b>Java</b>, <b>JavaScript</b>, <b>Python</b>, and <b>Node.js</b>, and I've built frontend applications using <b>Angular</b>, <b>React</b>, and <b>Next.js</b>.<br><br>
On the backend, I work with <b>.NET</b>, <b>Spring Boot</b>, <b>Express.js</b>, and <b>FastAPI</b> to build RESTful APIs and event-driven microservices.<br><br>
I have hands-on experience with relational and NoSQL databases like <b>PostgreSQL</b>, <b>MySQL</b>, <b>MongoDB</b>, <b>Cassandra</b>, and <b>ClickHouse</b>.<br><br>
I've also worked with data engineering tools like <b>Databricks</b>, <b>Apache Spark</b>, and <b>Kafka</b> for real-time data processing.<br><br>
I'm also interested in <b>cloud-native</b> architectures and have built and deployed applications using <b>AWS</b>, <b>Azure</b>, <b>DigitalOcean</b>, and <b>Linode</b>.<br><br>
I like building end-to-end CI/CD pipelines and experimenting with new tools like <b>LangChain</b> and <b>LLMs</b> for AI-powered automation.<br><br>
I like to sketch sometimes!<br><br>Sounds good?`;

  // Typewriter effect for the intro text
  function typeWriterEffect(element, text, speed, callback) {
    let i = 0;
    function type() {
      if (i < text.length) {
        // Handle HTML tags
        if (text[i] === '<') {
          const closeIdx = text.indexOf('>', i);
          if (closeIdx !== -1) {
            element.innerHTML += text.substring(i, closeIdx + 1);
            i = closeIdx + 1;
          } else {
            element.innerHTML += text[i];
            i++;
          }
        } else {
          element.innerHTML += text[i];
          i++;
        }
        setTimeout(type, speed);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

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
                
                // After third line is done, keep it visible for 2 seconds
                setTimeout(() => {
                  // Add a pause before showing intro text
                  setTimeout(() => {
                    line3.style.display = 'none';
                    const intro = document.getElementById('intro');
                    intro.style.display = 'block';
                    const introText = document.getElementById('intro-text');
                    introText.innerHTML = '';
                    // Start typewriter effect for intro text
                    typeWriterEffect(introText, introString, 18, () => {
                      // Show the link after the text is done
                      document.getElementById('intro-link').style.display = 'block';
                    });
                  }, 1000); // 1 second pause after third line disappears
                }, 2000); // Keep third line visible for 2 seconds
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
