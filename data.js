// Function to update table with MQTT data
function updateTable(timestamp, mqttData, humidityData, lightData, soilData) {
    const tableBody = document.getElementById('data-table');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${timestamp}</td>
        <td>${mqttData}</td>
        <td>${humidityData}</td>
        <td>${lightData}</td>
        <td>${soilData}</td>
    `;

    tableBody.appendChild(newRow);
}

// MQTT Message Handlers
client.on('message', function (topic, message) {
    // Handle messages and update table
    // ...
    // Example: Assuming you have variables for each data
    const timestamp = new Date().toLocaleTimeString();
    const mqttData = 25; // Replace this with actual MQTT data
    const humidityData = 60; // Replace this with actual humidity data
    const lightData = 800; // Replace this with actual light data
    const soilData = 40; // Replace this with actual soil data

    updateTable(timestamp, mqttData, humidityData, lightData, soilData);
});


// Function to update table with MQTT data
function updateTable(timestamp, mqttData, humidData, lightData, soilData) {
    const tableBody = document.getElementById('data-table-body');
    const newRow = document.createElement('tr');

    const timestampCell = document.createElement('td');
    timestampCell.textContent = timestamp;
    newRow.appendChild(timestampCell);

    const mqttCell = document.createElement('td');
    mqttCell.textContent = mqttData;
    newRow.appendChild(mqttCell);

    const humidCell = document.createElement('td');
    humidCell.textContent = humidData;
    newRow.appendChild(humidCell);

    const lightCell = document.createElement('td');
    lightCell.textContent = lightData;
    newRow.appendChild(lightCell);

    const soilCell = document.createElement('td');
    soilCell.textContent = soilData;
    newRow.appendChild(soilCell);

    tableBody.appendChild(newRow);
}

// MQTT Message Handlers
client.on('message', function (topic, message) {
    // Process MQTT messages and update chart or variables
    // Example:
    if (topic.endsWith('greenhouse/suhu')) {
        mqttData = parseMQTTMessage(message); // Replace this with your logic to parse MQTT message for temperature data
    } else if (topic.endsWith('greenhouse/humidity')) {
        humidData = parseMQTTMessage(message); // Replace this with your logic to parse MQTT message for humidity data
    } else if (topic.endsWith('greenhouse/ldr')) {
        lightData = parseMQTTMessage(message); // Replace this with your logic to parse MQTT message for light data
    } else if (topic.endsWith('greenhouse/soil')) {
        soilData = parseMQTTMessage(message); // Replace this with your logic to parse MQTT message for soil data
    }

    const timestamp = new Date().toLocaleTimeString();

    // Update table with the latest data
    updateTable(timestamp, mqttData, humidData, lightData, soilData);
});

