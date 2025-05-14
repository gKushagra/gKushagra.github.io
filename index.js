document.addEventListener('DOMContentLoaded', () => {
  const terminal = document.getElementById('terminal-output');

  const introLines = [
    ' Hey!',
    ' Thanks for stopping by!',
    ' Let me introduce myself!'
  ];

  const introText = `
  My name is Kushagra, and I enjoy building scalable, high-performance systems for the web.
  I'm comfortable writing code in C#, Java, JavaScript, Python, and Node.js, and I've built frontend applications using Angular, React, and Next.js.
  On the backend, I work with .NET, Spring Boot, Express.js, and FastAPI to build RESTful APIs and event-driven microservices.
  I have hands-on experience with relational and NoSQL databases like PostgreSQL, MySQL, MongoDB, Cassandra, and ClickHouse.
  I've also worked with data engineering tools like Databricks, Apache Spark, and Kafka for real-time data processing.
  I'm also interested in cloud-native architectures and have built and deployed applications using AWS, Azure, DigitalOcean, and Linode.
  I like building end-to-end CI/CD pipelines and experimenting with new tools like LangChain and LLMs for AI-powered automation.
  I like to sketch sometimes!`;

  const steps = [
    `<span class="prompt-user">kushagra@www</span><span class="prompt-symbol">:~$</span> sudo apt-get install kushagras-webpage`,
    'Reading package lists... Done',
    'Building dependency tree... Done',
    'Reading state information... Done',
    'The following NEW packages will be installed:',
    '  kushagras-webpage',
    '0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.',
    'Need to get 1,024 kB of archives.',
    'After this operation, 4,096 kB of additional disk space will be used.',
    'Get:1 https://gKushagra.github.io ./kushagras-webpage.deb [1,024 kB]',
    'Fetched 1,024 kB in 0s (2,048 kB/s)',
    'Selecting previously unselected package kushagras-webpage.',
    'Preparing to unpack .../kushagras-webpage.deb ...',
    'Unpacking kushagras-webpage (1.0.0) ...',
    'Setting up kushagras-webpage (1.0.0) ...',
    '',
    'Installing personality module...',
    ...introLines.map(line => `<span class="terminal-line highlight-line">>>${line}</span>`),
    '',
    'Loading user bio...',
    ...introText.split('\n').map(line => line.trim() ? `<span class="terminal-line highlight-line">>>${line}</span>` : ''),
    '',
    'Installation complete. Press ⏎ Enter to continue.'
  ];

  let i = 0;

  function appendLine(text, className = 'terminal-line') {
    const div = document.createElement('div');
    div.className = className;
    div.innerHTML = text;
    terminal.appendChild(div);

    // Scroll terminal container, not window
    document.querySelector('.terminal-real').scrollTop = document.querySelector('.terminal-real').scrollHeight;
  }

  function typeLine() {
    if (i < steps.length) {
      const isPrompt = steps[i].includes('prompt-user');
      const isHighlight = steps[i].startsWith('>>');

      if (isPrompt) {
        appendLine(steps[i], 'terminal-line');
      } else if (isHighlight) {
        appendLine(steps[i], 'highlight-line');
      } else {
        appendLine(steps[i], 'terminal-line');
      }

      i++;
      setTimeout(typeLine, 55);
    } else {
      document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          window.location.href = '/home';
        }
      });
    }
  }

  typeLine();
});
