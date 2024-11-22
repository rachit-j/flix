---
layout: default
title: Flix
---

<div style="font-family: Arial, sans-serif; padding: 0 30px; margin: auto; width: calc(100% - 60px);">
    <!-- Progress and Notifications -->
    <div style="display: flex; justify-content: space-between; margin: 20px 0; gap: 20px;">
        <!-- Progress Circle -->
        <div style="flex: 1; display: flex; justify-content: center; align-items: center;">
            <svg id="progressCircle" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" style="width: 120px; height: 120px;">
                <!-- Background Circle -->
                <path
                    style="fill: none; stroke: #d3d3d3; stroke-width: 3;"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 1 0 0.00001 0"
                ></path>
                <!-- Progress Circle -->
                <path
                    id="progressPath"
                    style="fill: none; stroke: #6c63ff; stroke-width: 3; stroke-dasharray: 0, 100; stroke-linecap: round; transition: stroke-dasharray 0.5s ease;"
                    d="M18 2.0845
                       a 15.9155 15.9155 0 1 0 0.00001 0"
                ></path>
                <!-- Text -->
                <text id="progressText" x="18" y="21.5" style="fill: #333; font-size: 12px; font-family: 'Courier New', monospace; text-anchor: middle;">
                    0%
                </text>
            </svg>
        </div>
        <!-- Notifications -->
        <div style="flex: 3; padding: 15px; background-color: #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
            <h3>Notifications</h3>
            <p>- Upcoming assignment: Personal Blog</p>
            <!-- <p>- Upcoming assignment: AI Project</p> -->
        </div>
    </div>
    <!-- Upcoming Events and Quick Links -->
    <div style="display: flex; gap: 20px; margin: 20px 0;">
        <!-- Upcoming Events -->
        <div style="flex: 3; padding: 15px; background-color: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">
            <h3>Upcoming Events</h3>
            <ul style="list-style: none; padding: 0;">
                <li><strong>Live Review:</strong> Dec 4, 2024</li>
                <!-- <li><strong>Hackathon Kickoff:</strong> Dec 5, 2024</li>
                <li><strong>Final Exam Review:</strong> Dec 10, 2024</li> -->
            </ul>
        </div>
        <!-- Quick Links -->
        <div style="flex: 1; display: flex; flex-direction: column; gap: 15px;">
            <!-- Slack -->
            <a href="https://join.slack.com/t/cs-se-hq/shared_invite/zt-2ujkvh4di-sgFGmafJ1H9Jx_G1AJSKtA" style="text-decoration: none;">
                <div style="background-color: white; color: black; border: 2px solid black; text-align: center; padding: 15px; border-radius: 8px; font-size: 18px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                    Slack
                </div>
            </a>
            <!-- Canvas -->
            <a href="https://poway.instructure.com/courses/166623" style="text-decoration: none; color: white;">
                <div style="background-color: #E34F26; text-align: center; padding: 15px; border-radius: 8px; font-size: 18px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                    Canvas
                </div>
            </a>
            <!-- Kasm -->
            <a href="https://kasm.nighthawkcodingsociety.com" style="text-decoration: none; color: white;">
                <div style="background-color: #010427; text-align: center; padding: 15px; border-radius: 8px; font-size: 18px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                    Kasm
                </div>
            </a>
        </div>
    </div>
    <!-- GitHub Repository Box -->
    <div style="margin: 20px 0; padding: 15px; background-color: #f0f0f0; border: 1px solid #ccc; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
        <h3>GitHub Repository</h3>
        <p>Explore the source code and collaborate on the course project.</p>
        <a href="https://github.com/nighthawkcoders/student_2025" target="_blank" style="color: #007bff; text-decoration: none;">
            <strong>CSSE GitHub Repository</strong>
        </a>
    </div>
    <!-- Inspirational Quote -->
    <div style="margin: 20px 0; padding: 15px; background-color: #fff7e6; border: 1px solid #ffc107; border-radius: 8px;">
        <h3>Quote of the Day</h3>
        <p><em>"The only way to do great work is to love what you do." - Steve Jobs</em></p>
    </div>
    <!-- Static Coding Challenge -->
    <div style="margin: 20px 0; padding: 15px; background-color: #e8f5e9; border: 1px solid #4caf50; border-radius: 8px;">
        <h3>Daily Coding Challenge</h3>
        <p><strong>Problem:</strong> Write a function to reverse a string.</p>
        <pre style="background-color: #f8f9fa; padding: 10px; border: 1px solid #ccc; border-radius: 4px;">def reverse_string(s):
    # Your code here
    pass</pre>
    </div>
</div>

<script>
    // Function to update the progress circle
    function updateProgress(percent) {
        const circle = document.getElementById('progressPath');
        const text = document.getElementById('progressText');

        // Limit percent to valid range (0-100)
        percent = Math.min(100, Math.max(0, percent));

        // Calculate the stroke-dasharray value
        const dashArray = (percent / 100) * 100;

        // Update the circle and text
        circle.style.strokeDasharray = `${dashArray}, 100`;
        text.textContent = `${percent}%`;
    }

    // Example: Set initial progress to 70%
    updateProgress(8);
</script>