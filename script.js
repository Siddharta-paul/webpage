const workers = [
  {
    id: 'W001',
    name: 'Atrayee Ghosh',
    avatar: 'https://ui-avatars.com/api/?name=Atrayee+Ghosh',
    heartRate: 78,
    bodyTemp: 36.5,
    surroundingTemp: 30,
    tunnelSlope: 5,
    detectionDistance: 10
  },
  {
    id: 'W002',
    name: 'Muskan Sharma',
    avatar: 'https://ui-avatars.com/api/?name=Muskan+Sharma&background=0D8ABC&color=fff',
    heartRate: 82,
    bodyTemp: 37.1,
    surroundingTemp: 30,
    tunnelSlope: 5,
    detectionDistance: 10
  },
  {
    id: 'W003',
    name: 'Ravi',
    avatar: 'https://ui-avatars.com/api/?name=Ravi&background=FF6F61&color=fff',
    heartRate: 75,
    bodyTemp: 36.8,
    surroundingTemp: 30,
    tunnelSlope: 5,
    detectionDistance: 10
  }
];

// Fill Table with avatars
const tableBody = document.getElementById("workerTableBody");
workers.forEach(worker => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${worker.id}</td>
    <td>
      <img src="${worker.avatar}" class="rounded-circle me-2" width="32" height="32" alt="${worker.name}">
      ${worker.name}
    </td>
    <td>${worker.heartRate}</td>
    <td>${worker.bodyTemp}</td>
    <td>${worker.surroundingTemp}</td>
    <td>${worker.tunnelSlope}</td>
    <td>${worker.detectionDistance}</td>
  `;
  tableBody.appendChild(row);
});

// Chart.js - Heart Rate Chart
const ctx = document.getElementById('heartRateChart').getContext('2d');
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['10:00', '10:05', '10:10', '10:15', '10:20'],
    datasets: workers.map(worker => ({
      label: worker.name,
      data: Array.from({ length: 5 }, () => worker.heartRate + Math.floor(Math.random() * 6 - 3)),
      borderColor: '#' + Math.floor(Math.random()*16777215).toString(16),
      fill: false,
      tension: 0.3
    }))
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        suggestedMin: 60,
        suggestedMax: 100
      }
    }
  }
});
