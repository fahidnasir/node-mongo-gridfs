$(document).ready(function() {
  $("#file.custom-file-input").change(function() {
    $(".custom-file-label").html($(this)[0].files[0].name);
  });
});
