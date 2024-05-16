$(document).ready(function () {
  const apiUrl = 'http://0.0.0.0:5001/api/v1/status/';

  function updateApiStatus() {
    $.get(apiUrl, function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    }).fail(function () {
      $('#api_status').removeClass('available');
    });
  }

  updateApiStatus();

  setInterval(updateApiStatus, 5000); // Update every 5 seconds
});
