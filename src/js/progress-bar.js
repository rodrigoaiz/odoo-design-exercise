  function initializeProgress() {
    var containers = document.querySelectorAll('.progress-container');

    containers.forEach(function(container) {
      var initialPercentage = parseInt(container.getAttribute('data-percentage'));
      updateProgress(container, initialPercentage);
    });
  }

  function updateProgress(container, percentage) {
    var progressBar = container.querySelector('.progress-bar');
    progressBar.style.width = percentage + '%';
    container.setAttribute('data-percentage', percentage);
  }

  initializeProgress();
