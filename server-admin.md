---
layout: default
title: Server Details
---


<style>
    .server-status {
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-top: 50px;
    }

    .server {
        width: 150px;
        height: 150px;
        background-color: grey;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;
        font-family: Arial, sans-serif;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        position: relative; /* For absolute positioning of status icon */
    }

    .server-name {
        font-size: 20px;
        margin-bottom: 10px;
    }

    .status-icon {
        height: 20px;
        width: 20px;
        border-radius: 50%;
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 10px;
    }

    .online {
        background-color: #28a745;
    }

    .offline {
        background-color: #dc3545;
    }

    .maintenance {
        background-color: #ffc107;
    }

    .details-container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .server-card {
        background-color: #f2f2f2;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        padding: 20px;
        margin: 10px;
        width: 800px;
        font-family: monospace;
    }

    .server-title {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 15px;
    }

    .server-stats {
        white-space: pre-wrap;
        word-break: break-word;
    }
    .storage-chart {
        width: 100px;
        height: 100px;
    }
</style>
<div class="server-status">
    <!-- The server elements will be here as per your design -->
</div>

<div class="details-container">
    <div class="server-card">
        <!-- Server details and AWS data will be here -->
    </div>
    <div class="storage-chart-container">
        <canvas id="storageChart"></canvas>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
    // Function to update server information
    function updateServerInformation() {
        // Your fetch code for AWS API
    }

    function updateServerStatus() {
        // Your fetch code for server status
    }

    function drawStorageChart(storageData) {
        var ctx = document.getElementById('storageChart').getContext('2d');
        var storageChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Used', 'Free'],
                datasets: [{
                    label: 'Storage',
                    data: [storageData.used, storageData.free],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false
            }
        });
    }

    // Fetch storage data and draw chart
    function fetchAndDrawChart(serverName) {
        // Assuming `fetchStorageData` is an available function that fetches storage data
        fetchStorageData(serverName).then(storageData => {
            drawStorageChart(storageData);
        });
    }

    // Function to format instance data
    function formatInstanceData(instance) {
        // Your code to format instance data
    }

    // Call functions to initialize the page
    window.onload = function() {
        updateServerInformation();
        updateServerStatus();
        fetchAndDrawChart('ServerName'); // Replace 'ServerName' with actual server name variable
    };
</script>
