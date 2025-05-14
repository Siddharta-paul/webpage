(function () {
    const username = localStorage.getItem("loggedInUser");
  
    if (!username) {
      window.location.href = "login.html";
      return;
    }
  
    const navbarHTML = `
      <nav class="navbar navbar-light bg-light justify-content-between px-4 py-2">
        <span class="navbar-brand mb-0 h4">
          <i class="fas fa-hard-hat text-primary me-2"></i> Smart Helmet Dashboard
        </span>
        <div>
          <span class="me-3 text-muted">Welcome, <strong>${username}</strong></span>
          <button class="btn btn-outline-danger btn-sm" onclick="logout()">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      </nav>
    `;
  
    document.getElementById("navbar-placeholder").innerHTML = navbarHTML;
  })();

  document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
  
    const navbarHTML = `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Smart Helmet</a>
          <div class="d-flex ms-auto">
            <span class="navbar-text text-white me-3">
              Welcome, ${user?.name || 'User'}
            </span>
            <button class="btn btn-outline-light btn-sm" onclick="logout()">Logout</button>
          </div>
        </div>
      </nav>
    `;
    document.getElementById('navbar-placeholder').innerHTML = navbarHTML;
  });
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    window.location.href = 'login.html';
  }

  