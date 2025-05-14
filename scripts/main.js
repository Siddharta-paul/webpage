(function () {
    document.getElementById("stats-cards").innerHTML = `
      <div class="col-12 col-md-4 mb-3">
        <div class="card-stat">
          <i class="fas fa-temperature-high"></i>
          <h5>Temperature</h5>
          <p class="fs-5 mb-0" id="tempCard">30°C</p>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="card-stat">
          <i class="fas fa-ruler-vertical"></i>
          <h5>Tunnel Slope</h5>
          <p class="fs-5 mb-0" id="slopeCard">5 cm</p>
        </div>
      </div>
      <div class="col-12 col-md-4 mb-3">
        <div class="card-stat">
          <i class="fas fa-ruler-horizontal"></i>
          <h5>Detection Distance</h5>
          <p class="fs-5 mb-0" id="distanceCard">10 m</p>
        </div>
      </div>
    `;
  
    const tbody = document.getElementById("workerTableBody");
    window.workers.forEach(worker => {
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
      tbody.appendChild(row);
    });
  })();
  