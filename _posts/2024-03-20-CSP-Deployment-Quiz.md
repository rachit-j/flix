---
title: Deployment Quiz README - CSP
description: What to do day of the deployment quiz for COMPUTER SCIENCE P
toc: True
layout: post
---

# Foreword

Hello everyone! Today you will be graded on your capabilities in deploying a backend server from scratch on your own instance. You are permitted to use any outside resources, including this website, except for other people (don't try and bend the rules we will know). 

You will be setting up a Python Flask Server on your own Amazon EC2 Instance. You will be tasked with the following:
- Connecting to an EC2 Instance
- Setting up an EC2 Instance for Deployment
- Copying the quiz backend to your EC2 instance
- Changing the port on the quiz backend
- Changing the homepage of the quiz backend to reflect "your page"
- Deploying the Backend (the main part)

**Whoever does not have an instance, please let me know.**

# Critical Information

Each person will have their own EC2 Instance that has its own ID based on the ID you have provided at the start of the year, which is shown below. You will be deploying on your OWN EC2 instance, NOT the RIFT servers. A table with all the people, their ID's, and the randomized ports is shown below. 

You will need to copy the quiz backend onto the AWS server. You will need to clone [this backend](https://github.com/RIFT24/cspquizbackend) and then modify it on EC2 using a text editor...

You will also have to change the port to a randomized port. We will be running a test to see if you are using the port. 

You must also change the homepage of the quiz backend to have your title be your [NAME]:[Github-ID]. This should be visible on the page (I would change the Homepage title).

You must then create a route53 route on the test subdomain with your ID as the prefix. It must be routed to your container. (ex. 84.stu.nighthawkcodingsociety.com)

You must finally have https. If you do not know how to do this, start looking around.

# Submission and Grading

Once all changes have been made as per the requirements, please come up to the front with your device. You will be asked to have an EC2 Terminal open for us to validate your port, and you must have an open runtime on your browser. 

After grading, you must make an issue with the following:
- Screenshot of curl command (must include the prompt where you entered in actual command) with score out of 0.5
- Screenshot of website working without interferance, add score out of 2
- Screenshot of website working on deployed server with website security panel, example below. Add score out of 0.5

In total, you must have **three** screenshots. Put them in an issue.

Example of website security panel:
![example](https://rackets-assets.vercel.app/assets/csa_quiz/example_submission.png)

*I know this shows springboot but the panel with the lock is what you should be capturing, with your index page as well*

# CSP Quiz Data

<div id="csv-root">Loading data...</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<script>
window.onload = function() {
    // Function to fetch and display CSV data
    function fetchAndDisplayCSV(csvUrl) {
        Papa.parse(csvUrl, {
            download: true,
            header: true, // Assuming your CSV has headers
            complete: function(results) {
                const data = results.data;
                displayData(data);
            }
        });
    }

    // Function to display the data on the page, focusing on ID, Name, and UID columns
    function displayData(data) {
        const container = document.getElementById('csv-root');
        container.innerHTML = ''; // Clear loading message or previous data

        // Example: Create and append a table to display the CSV data
        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');
        const headers = ['ID', 'Name', 'Port'];

        // Create table header
        let row = thead.insertRow();
        headers.forEach(header => {
            let th = document.createElement('th');
            th.textContent = header;
            row.appendChild(th);
        });
        table.appendChild(thead);

        // Populate the table body with data
        data.forEach(item => {
            let row = tbody.insertRow();
            headers.forEach(header => {
                let cell = row.insertCell();
                // Convert header to field name as used in your CSV file
                // Assuming CSV headers match exactly, including case sensitivity
                cell.textContent = item[header]; // Adjust based on actual CSV column names
            });
        });
        table.appendChild(tbody);
        container.appendChild(table);
    }

    // Replace with the path to your CSV file in the repository
    const csvUrl = 'https://raw.githubusercontent.com/RIFT24/RIFT-Frontend/main/data/csp_quiz_r6.csv';
    fetchAndDisplayCSV(csvUrl);
};
</script>

<style>
/* Optional: Add some basic styling for the table */
table {
    border-collapse: collapse;
    width: 100%;
}
th, td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}
th {
    background-color: #f2f2f2;
}
</style>
