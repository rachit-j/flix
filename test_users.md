---
layout: default
title: CSA Quiz Users and ID
permalink: /quiz-users
---


# CSA User Data

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
        const headers = ['ID', 'Name', 'UID'];

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
                cell.textContent = item[header.toLowerCase()]; // Adjust based on actual CSV column names
            });
        });
        table.appendChild(tbody);
        container.appendChild(table);
    }

    // Replace with the path to your CSV file in the repository
    const csvUrl = 'https://raw.githubusercontent.com/RIFT24/RIFT-Frontend/main/csa_users.csv';
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
