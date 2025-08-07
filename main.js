$(function() {
  $('#dataForm').on('submit', function(e) {
    e.preventDefault();
    // Collect data
    const data = {};
    $(this).serializeArray().forEach(function(item) {
      data[item.name] = item.value;
    });
    // Fill summary
    let summaryHtml = `
      <div class="row">
        <div class="col-6"><strong>Registration No.:</strong> ${data.registrationNo || ''}</div>
        <div class="col-6"><strong>Admission Date:</strong> ${data.admissionDate || ''}</div>
      </div>
      <div class="row">
        <div class="col-6"><strong>Name:</strong> ${data.name || ''}</div>
        <div class="col-6"><strong>Guardian Name:</strong> ${data.guardianName || ''}</div>
      </div>
      <div class="row">
        <div class="col-6"><strong>Mobile No.:</strong> ${data.mobileNo || ''}</div>
        <div class="col-6"><strong>Address:</strong> ${data.address || ''}</div>
      </div>
      <div class="row">
        <div class="col-4"><strong>State:</strong> ${data.state || ''}</div>
        <div class="col-4"><strong>Country:</strong> ${data.country || ''}</div>
        <div class="col-4"><strong>Age:</strong> ${data.age || ''}</div>
      </div>
      <div class="row">
        <div class="col-4"><strong>Gender:</strong> ${data.gender || ''}</div>
        <div class="col-4"><strong>Weight:</strong> ${data.weight || ''} kg</div>
        <div class="col-4"><strong>Identification Mark:</strong> ${data.identificationMark || ''}</div>
      </div>
      <div class="row">
        <div class="col-12"><strong>Health Status:</strong> ${data.healthStatus || ''}</div>
      </div>
    `;
    $('#summary-content').html(summaryHtml);
    $('#form-section').hide();
    $('#summary-section').show();
  });

  $('#editFormBtn').on('click', function() {
    $('#summary-section').hide();
    $('#form-section').show();
  });

  $('#printBtn').on('click', function() {
    window.print();
  });
});