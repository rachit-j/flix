document.getElementById('loadData').addEventListener('click', function() {
    $.ajax({
        url: 'https://riftflask.stu.nighthawkcodingsociety.com//get-ec2-instances',
        type: 'GET',
        success: function(response) {
            displayInstances(response);
        },
        error: function(error) {
            console.log(error);
        },
        
    });
});

function displayInstances(data) {
    const container = document.getElementById('instanceInfo');
    container.innerHTML = '';

    const currentDate = new Date().toLocaleString();  // Get current date and time

    data.Reservations.forEach(reservation => {
        reservation.Instances.forEach(instance => {
            let instanceId = instance.InstanceId;
            let publicIp = instance.PublicIpAddress || 'No Public IP';
            let instanceName = 'No Name';
            if (instance.Tags) {
                instance.Tags.forEach(tag => {
                    if (tag.Key === 'Name') {
                        instanceName = tag.Value;
                    }
                });
            }

            container.innerHTML += `<p>Instance ID: ${instanceId}, Name: ${instanceName}, Public IP: ${publicIp}, Request Date: ${currentDate}</p>`;
        });
    });
}
