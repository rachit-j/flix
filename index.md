---
layout: default
title: RIFT Frontend
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
</style>

<body>

<div class="server-status">
    <div class="server">
        <span class="status-icon" id="statusIconRiftP1"></span>
        <div class="server-name">RIFT P1</div>
        <div class="server-status-text" id="statusTextRiftP1">Offline</div>
    </div>
    <div class="server">
        <span class="status-icon" id="statusIconRiftP3"></span>
        <div class="server-name">RIFT P3</div>
        <div class="server-status-text" id="statusTextRiftP3">Offline</div>
    </div>
    <div class="server">
        <span class="status-icon" id="statusIconRiftDev"></span>
        <div class="server-name">RIFT Dev</div>
        <div class="server-status-text" id="statusTextRiftDev">Offline</div>
    </div>
</div>
<div class="server-status">
    <div class="server">
        <span class="status-icon" id="statusIconWolfP1"></span>
        <div class="server-name">WOLF P1</div>
        <div class="server-status-text" id="statusTextWolfP1">Offline</div>
    </div>
    <div class="server">
        <span class="status-icon" id="statusIconWolfP2"></span>
        <div class="server-name">WOLF P2</div>
        <div class="server-status-text" id="statusTextWolfP2">Offline</div>
    </div>
    <div class="server">
        <span class="status-icon" id="statusIconWolfP4"></span>
        <div class="server-name">WOLF P4</div>
        <div class="server-status-text" id="statusTextWolfP4">Offline</div>
    </div>
    <div class="server">
        <span class="status-icon" id="statusIconWolfP5"></span>
        <div class="server-name">WOLF P5</div>
        <div class="server-status-text" id="statusTextWolfP5">Offline</div>
    </div>
</div>

<div class="details-container">
    <div class="server-card">
        <div class="server-title" id="riftP1Title">RIFT P1 / RIFT-CSA-P1</div>
        <div class="server-stats" id="riftP1Stats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <div class="server-card">
        <div class="server-title" id="riftP3Title">RIFT P3 / RIFT-CSA-P3</div>
        <div class="server-stats" id="riftP3Stats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <div class="server-card">
        <div class="server-title" id="wolfP1Title">WOLF P1 / WOLF-CSP-P1</div>
        <div class="server-stats" id="wolfP1Stats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <div class="server-card">
        <div class="server-title" id="wolfP2Title">WOLF P2 / WOLF-CSP-P2</div>
        <div class="server-stats" id="wolfP2Stats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <div class="server-card">
        <div class="server-title" id="wolfP4Title">WOLF P4 / WOLF-CSP-P4</div>
        <div class="server-stats" id="wolfP4Stats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <div class="server-card">
        <div class="server-title" id="wolfP5Title">WOLF P5 / WOLF-CSP-P5</div>
        <div class="server-stats" id="wolfP5Stats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <div class="server-card">
        <div class="server-title" id="riftDevTitle">RIFT Dev / RIFT_Dev</div>
        <div class="server-stats" id="riftDevStats">
            <!-- Stats will be filled here -->
        </div>
    </div>
    <!-- Repeat for other servers as needed -->
</div>

</body>
<script>
    window.onload = function() {
        // Update server information immediately on page load
        updateServerInformation();

        // Then continue to update every 5 minutes
        setInterval(updateServerInformation, 300000); // 300000 milliseconds = 5 minutes
    };

    function updateServerInformation() {
        fetch('https://riftflask.stu.nighthawkcodingsociety.com/get-ec2-instances')
        .then(response => response.json())
        .then(data => {
            const instances = data.Reservations.flatMap(reservation => reservation.Instances);
            for (let instance of instances) {

                // rift
                if (instance.InstanceId === 'i-0a6835e0c56b95b57') {
                    document.getElementById('riftP1Stats').innerHTML = formatInstanceData(instance);
                }
                if (instance.InstanceId === 'i-001557f2df873a93b') {
                    document.getElementById('riftP3Stats').innerHTML = formatInstanceData(instance);
                }
                if (instance.InstanceId === 'i-07494ecf4435591be') {
                    document.getElementById('riftDevStats').innerHTML = formatInstanceData(instance);
                }

                // wolf
                if (instance.InstanceId === 'i-0b1ece591456a0bc2') {
                    document.getElementById('wolfP1Stats').innerHTML = formatInstanceData(instance);
                }
                if (instance.InstanceId === 'i-09a844a3230fa36b1') {
                    document.getElementById('wolfP2Stats').innerHTML = formatInstanceData(instance);
                }
                if (instance.InstanceId === 'i-00bdf61c12083db17') {
                    document.getElementById('wolfP4Stats').innerHTML = formatInstanceData(instance);
                }
                if (instance.InstanceId === 'i-06a12432c2ed36514') {
                    document.getElementById('wolfP5Stats').innerHTML = formatInstanceData(instance);
                }
                updateServerStatus(instance);
                // Repeat for other instances
            }
        })
        .catch(error => {
            console.error('Error fetching EC2 instance data:', error);
        });
    }

    function formatInstanceData(instance) {
        const coreCount = instance.CpuOptions.CoreCount;
        const imageId = instance.ImageId;
        const instanceId = instance.InstanceId;
        const securityGroups = instance.SecurityGroups.map(group => `${group.GroupName} (${group.GroupId})`).join(', ');
        const platformDetails = instance.PlatformDetails;

        // Get current time in PST
        const pstTime = new Date().toLocaleString('en-US', { timeZone: 'America/Los_Angeles' });

        return `
            System information as of ${pstTime} (PST)

            Core Count: ${coreCount}
            Image ID: ${imageId}
            Instance ID: ${instanceId}
            Security Groups: ${securityGroups}
            Platform Details: ${platformDetails}

            AWS public IP: ${instance.PublicIpAddress || 'N/A'}
        `;
    }


    function updateServerStatus(instance) {
        let statusIconElement, statusTextElement;
        if (instance.InstanceId === 'i-0a6835e0c56b95b57') {
            statusIconElement = document.getElementById('statusIconRiftP1');
            statusTextElement = document.getElementById('statusTextRiftP1');
        }
        if (instance.InstanceId === 'i-001557f2df873a93b') {
            statusIconElement = document.getElementById('statusIconRiftP3');
            statusTextElement = document.getElementById('statusTextRiftP3');
        }
        if (instance.InstanceId === 'i-07494ecf4435591be') {
            statusIconElement = document.getElementById('statusIconRiftDev');
            statusTextElement = document.getElementById('statusTextRiftDev');
        }

        if (instance.InstanceId === 'i-0b1ece591456a0bc2') {
            statusIconElement = document.getElementById('statusIconWolfP1');
            statusTextElement = document.getElementById('statusTextWolfP1');
        }
        if (instance.InstanceId === 'i-09a844a3230fa36b1') {
            statusIconElement = document.getElementById('statusIconWolfP2');
            statusTextElement = document.getElementById('statusTextWolfP2');
        }
        if (instance.InstanceId === 'i-00bdf61c12083db17') {
            statusIconElement = document.getElementById('statusIconWolfP4');
            statusTextElement = document.getElementById('statusTextWolfP4');
        }
        if (instance.InstanceId === 'i-06a12432c2ed36514') {
            statusIconElement = document.getElementById('statusIconWolfP5');
            statusTextElement = document.getElementById('statusTextWolfP5');
        }
        
        // Repeat for other instances

        if (statusIconElement && statusTextElement) {
            if (instance.State.Name === 'running') {
                statusIconElement.className = 'status-icon online';
                statusTextElement.innerText = 'Online';
            } else {
                statusIconElement.className = 'status-icon offline';
                statusTextElement.innerText = 'Offline';
            }
        }
    }

</script>