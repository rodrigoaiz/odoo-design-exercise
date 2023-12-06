  // Function to initialize progress
  function initializeProgress() {
    // Get all elements with the class "progress-container"
    var containers = document.querySelectorAll('.progress-container');

    containers.forEach(function(container) {
      var initialPercentage = parseInt(container.getAttribute('data-percentage'));
      updateProgress(container, initialPercentage);
    });
  }

  // Function to update progress
  function updateProgress(container, percentage) {
    var progressBar = container.querySelector('.progress-bar');
    progressBar.style.width = percentage + '%';
    container.setAttribute('data-percentage', percentage);
  }

  // Initialize progress
  initializeProgress();