window.onload = () => {
    const ctx = document.getElementById('heartRateChart').getContext('2d');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['10:00', '10:05', '10:10', '10:15', '10:20'],
        datasets: window.workers.map(worker => ({
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
  };

  