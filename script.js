// MQTT Connection
const mqttBroker = 'wss://broker.hivemq.com:8884/mqtt'; // Ganti dengan URL HiveMQ Anda
const mqttTopic = 'greenhouse/';

const client = mqtt.connect(mqttBroker);
client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe(`${mqttTopic}suhu`);
    client.subscribe(`${mqttTopic}humidity`);
    client.subscribe(`${mqttTopic}ldr`);
    client.subscribe(`${mqttTopic}soil`);
});

// Function to calculate average
function calculateAverage(dataArray) {
    if (dataArray.length === 0) return 0;

    const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
    return sum / dataArray.length;
}

// Interval to update averages every 1 minute (60000 milliseconds)
setInterval(function () {
    const mqttData = mqttChart.data.datasets[0].data;
    const humidData = humidChart.data.datasets[0].data;
    const lightData = lightChart.data.datasets[0].data;
    const soilData = soilChart.data.datasets[0].data;

    const mqttAverage = calculateAverage(mqttData);
    const humidAverage = calculateAverage(humidData);
    const lightAverage = calculateAverage(lightData);
    const soilAverage = calculateAverage(soilData);

    // Update the HTML content of the boxes with the calculated averages
    document.getElementById('mqttAverage').innerText = `MQTT  ${mqttAverage.toFixed(2)}`;
    document.getElementById('humidAverage').innerText = `Humidity  ${humidAverage.toFixed(2)}`;
    document.getElementById('lightAverage').innerText = `Light  ${lightAverage.toFixed(2)}`;
    document.getElementById('soilAverage').innerText = `Soil  ${soilAverage.toFixed(2)}`;
}, 60000); // Update averages every 1 minute

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

// Chart Setup
const ctx = document.getElementById('mqttChart').getContext('2d');
const mqttChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'MQTT Data',
            data: [],
            borderColor: 'rgb(75, 192, 192)',
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

const humidCtx = document.getElementById('humidChart').getContext('2d');
const humidChart = new Chart(humidCtx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Humidity Data',
            data: [],
            borderColor: 'rgb(255, 99, 132)',
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

// MQTT Message Handlers
client.on('message', function (topic, message) {
    if (topic.endsWith('suhu')) {
        handleMQTTMessage(mqttChart, topic, message);
    } else if (topic.endsWith('humidity')) {
        handleMQTTMessage(humidChart, topic, message);
    } else if (topic.endsWith('ldr')) {
        handleMQTTMessage(lightChart, topic, message);
    } else if (topic.endsWith('soil')) {
        handleMQTTMessage(soilChart, topic, message);
    }
});

// Variables to store highest values
let highestMqtt = 0;
let highestHumid = 0;
let highestLight = 0;
let highestSoil = 0;

// Function to update highest values
function updateHighestValues(payload, type) {
  switch (type) {
    case 'MQTT':
      highestMqtt = Math.max(highestMqtt, payload);
      document.getElementById('highestMqtt').innerText = `MQTT: ${highestMqtt.toFixed(2)}`;
      break;
    case 'Humidity':
      highestHumid = Math.max(highestHumid, payload);
      document.getElementById('highestHumid').innerText = `Humidity: ${highestHumid.toFixed(2)}`;
      break;
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

// MQTT Message Handlers
client.on('message', function (topic, message) {
  if (topic.endsWith('suhu')) {
    handleMQTTMessage(mqttChart, topic, message);
    updateHighestValues(parseFloat(message.toString()), 'MQTT');
  } else if (topic.endsWith('humidity')) {
    handleMQTTMessage(humidChart, topic, message);
    updateHighestValues(parseFloat(message.toString()), 'Humidity');
  } else if (topic.endsWith('ldr')) {
    handleMQTTMessage(lightChart, topic, message);
    updateHighestValues(parseFloat(message.toString()), 'Light');
  } else if (topic.endsWith('soil')) {
    handleMQTTMessage(soilChart, topic, message);
    updateHighestValues(parseFloat(message.toString()), 'Soil');
  }
});

function showData(timeRange) {
    // You can implement logic to filter and display data based on the selected time range
    console.log(`Showing data for ${timeRange}`);
    // For example, you can update chart data or make API calls to fetch data for the selected time range
}
