// MQTT Connection
const mqttBroker = 'wss://broker.hivemq.com:8884/mqtt'; // Ganti dengan URL HiveMQ Anda
const mqttTopic = 'greenhouse/';

const client = mqtt.connect(mqttBroker);

// Chart Setup
const lightCtx = document.getElementById('lightChart').getContext('2d');
const lightChart = new Chart(lightCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Light Data',
            data: [],
            borderColor: 'rgb(255, 205, 86)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            x: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

const soilCtx = document.getElementById('soilChart').getContext('2d');
const soilChart = new Chart(soilCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Soil Data',
            data: [],
            borderColor: 'rgb(54, 162, 235)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        scales: {
            x: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
});

// Function to calculate average
function calculateAverage(dataArray) {
    if (dataArray.length === 0) return 0;

    const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
    return sum / dataArray.length;
}

// Common MQTT Message Handler
function handleMQTTMessage(chart, topic, message) {
    const payload = parseFloat(message.toString());
    const timestamp = new Date().toLocaleTimeString();

    // Update chart data
    chart.data.labels.push(timestamp);
    chart.data.datasets[0].data.push(payload);

    // Remove the oldest data point if more than 10 points
    if (chart.data.labels.length > 10) {
        chart.data.labels.shift();
        chart.data.datasets[0].data.shift();
    }

    // Update chart
    chart.update();
}

async function handleApiData(chart, type) {
    try {
        const response = await fetch(`https://iottugas.000webhostapp.com/get.php?type=${type}`);
        const data = await response.json();

        const timestamp = new Date(data.timestamp).toLocaleTimeString();
        const payload = parseFloat(data.value);

        chart.data.labels.push(timestamp);
        chart.data.datasets[0].data.push(payload);

        if (chart.data.labels.length > 10) {
            chart.data.labels.shift();
            chart.data.datasets[0].data.shift();
        }

        chart.update();
        updateHighestValues(payload, type);
    } catch (error) {
        console.error(`Error fetching data from the API: ${error.message}`);
    }
}

// MQTT Message Handlers
client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe(`${mqttTopic}suhu`);
    client.subscribe(`${mqttTopic}humidity`);
    client.subscribe(`${mqttTopic}ldr`);
    client.subscribe(`${mqttTopic}soil`);
});

client.on('message', function (topic, message) {
    if (topic.endsWith('ldr')) {
        handleMQTTMessage(lightChart, topic, message);
    } else if (topic.endsWith('soil')) {
        handleMQTTMessage(soilChart, topic, message);
    }
});

// Variables to store highest values
let highestLight = 0;
let highestSoil = 0;

// Function to update highest values
function updateHighestValues(payload, type) {
    switch (type) {
        case 'Light':
            highestLight = Math.max(highestLight, payload);
            document.getElementById('highestLight').innerText = `Light: ${highestLight.toFixed(2)}`;
            break;
        case 'Soil':
            highestSoil = Math.max(highestSoil, payload);
            document.getElementById('highestSoil').innerText = `Soil: ${highestSoil.toFixed(2)}`;
            break;
        default:
            break;
    }
}

// Set interval to update averages every 1 minute (60000 milliseconds)
setInterval(function () {
    const lightData = lightChart.data.datasets[0].data;
    const soilData = soilChart.data.datasets[0].data;

    const lightAverage = calculateAverage(lightData);
    const soilAverage = calculateAverage(soilData);

    document.getElementById('lightAverage').innerText = `Light: ${lightAverage.toFixed(2)}`;
    document.getElementById('soilAverage').innerText = `Soil: ${soilAverage.toFixed(2)}`;
}, 60000);

// Initial API data retrieval
handleApiData(lightChart, 'Light');
handleApiData(soilChart, 'Soil');




  

