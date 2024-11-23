---
layout: default
title: CSSE 1 Lecture Notes
---

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<div style="display: flex; font-family: Arial, sans-serif; padding: 20px;">

    <!-- Sidebar for Week Selection -->
    <div style="flex: 1; border-right: 1px solid #ccc; padding-right: 20px;">
        <h2>Weeks</h2>
        <ul id="weeks-list" style="list-style: none; padding: 0;">
            <!-- Weeks will be populated dynamically -->
        </ul>
    </div>

    <!-- Main Content for Lecture Notes -->
    <div style="flex: 3; padding-left: 20px;">
        <h2>Lecture Notes</h2>
        <div id="notes-content" style="border: 1px solid #ddd; border-radius: 8px; padding: 15px; background-color: #f9f9f9;">
            <p>Select a week and day to view the notes.</p>
        </div>
    </div>
</div>

<script>
    // Base directory for lecture files
    const baseDir = '/flix/csse1/lectures';

    // Load weeks and files dynamically
    async function loadWeeks() {
        const weeksList = document.getElementById('weeks-list');
        const notesContent = document.getElementById('notes-content');

        try {
            // Dynamically fetch directory structure
            const response = await fetch(`${baseDir}/structure.json`);
            const directory = await response.json();

            for (const [week, days] of Object.entries(directory)) {
                // Add week to sidebar
                const weekItem = document.createElement('li');
                weekItem.innerHTML = `<strong>${week.replace(/_/g, ' ')}</strong>`;
                weeksList.appendChild(weekItem);

                const dayList = document.createElement('ul');
                dayList.style.listStyle = 'none';
                dayList.style.padding = '0';

                for (const [day, files] of Object.entries(days)) {
                    const dayItem = document.createElement('li');
                    dayItem.style.marginLeft = '15px';

                    const dayLink = document.createElement('a');
                    dayLink.href = '#';
                    dayLink.textContent = `${day.replace(/_/g, ' ')}`;
                    dayLink.style.textDecoration = 'none';
                    dayLink.style.color = '#007bff';
                    dayLink.onclick = (e) => {
                        e.preventDefault();
                        loadFiles(week, day, files); // Pass week, day, and files
                    };

                    dayItem.appendChild(dayLink);
                    dayList.appendChild(dayItem);
                }

                weeksList.appendChild(dayList);
            }
        } catch (error) {
            console.error('Error loading weeks:', error);
            notesContent.innerHTML = '<p>Error loading lecture notes. Please try again later.</p>';
        }
    }

    // Load files for a specific day
    function loadFiles(week, day, files) {
        const notesContent = document.getElementById('notes-content');

        // Clear previous content
        notesContent.innerHTML = `<h3>${day.replace(/_/g, ' ')}</h3>`;

        files.forEach(file => {
            // Construct the full file path, including the week
            const filePath = `${baseDir}/${week}/${day}/${file}`;

            // Add the file name before presenting the content
            const fileNameHeading = document.createElement('h4');
            fileNameHeading.textContent = `File: ${file}`;
            fileNameHeading.style.marginTop = '20px';
            fileNameHeading.style.textDecoration = 'underline'; // Underline the file name heading
            fileNameHeading.style.cursor = 'pointer'; // Pointer to indicate toggle
            notesContent.appendChild(fileNameHeading);

            // Create a container for file content (hidden by default)
            const fileContentContainer = document.createElement('div');
            fileContentContainer.style.display = 'none'; // Hidden initially
            fileContentContainer.style.marginTop = '10px';
            notesContent.appendChild(fileContentContainer);

            // Add click event to toggle visibility
            fileNameHeading.addEventListener('click', () => {
                fileContentContainer.style.display =
                    fileContentContainer.style.display === 'none' ? 'block' : 'none';
            });

            if (file.endsWith('.pdf')) {
                // Render PDF in iframe
                const pdfViewer = document.createElement('iframe');
                pdfViewer.src = filePath;
                pdfViewer.style.width = '100%';
                pdfViewer.style.height = '500px';
                pdfViewer.style.border = 'none';
                fileContentContainer.appendChild(pdfViewer);
            } else if (file.endsWith('.mp4')) {
                // Render video player
                const videoPlayer = document.createElement('video');
                videoPlayer.src = filePath;
                videoPlayer.controls = true;
                videoPlayer.style.width = '100%';
                videoPlayer.style.borderRadius = '8px';
                fileContentContainer.appendChild(videoPlayer);
            } else if (file.endsWith('.md')) {
                // Fetch and render Markdown file
                fetch(filePath)
                    .then(response => response.text())
                    .then(markdownContent => {
                        const markdownHTML = marked.parse(markdownContent); // Convert markdown to HTML
                        const markdownContainer = document.createElement('div');
                        markdownContainer.innerHTML = markdownHTML;
                        markdownContainer.style.padding = '10px';
                        markdownContainer.style.backgroundColor = '#f9f9f9';
                        markdownContainer.style.border = '1px solid #ddd';
                        fileContentContainer.appendChild(markdownContainer);
                    })
                    .catch(error => {
                        const errorMessage = document.createElement('p');
                        errorMessage.textContent = `Error loading markdown file: ${error}`;
                        fileContentContainer.appendChild(errorMessage);
                    });
            } else {
                // Unsupported file type
                const unsupportedMessage = document.createElement('p');
                unsupportedMessage.textContent = `Unsupported file type: ${file}. Please download to view.`;
                fileContentContainer.appendChild(unsupportedMessage);
            }
        });
    }

    // Initialize the page
    loadWeeks();
</script>