var droppedFiles = false;
var fileName = '';
var $dropzone = $('.dropzone');
var $uploadButton = $('.upload-btn');
var $doneButton = $('.done-btn');
var uploading = false;
var $syncing = $('.syncing');
var $done = $('.done');
var $bar = $('.bar');
var timeOut;

$dropzone.on('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
  e.preventDefault();
  e.stopPropagation();
})
  .on('dragover dragenter', function () {
    $dropzone.addClass('is-dragover');
  })
  .on('dragleave dragend drop', function () {
    $dropzone.removeClass('is-dragover');
  })
  .on('drop', function (e) {
    droppedFiles = e.originalEvent.dataTransfer.files;
    fileName = droppedFiles[0]['name'];
    $('.filename').html(fileName);
    $('.dropzone .upload').hide();
  });

$uploadButton.bind('click', function () {
  startUpload();
});

$doneButton.bind('click', function () {
  doneUpload();
});

$("input:file").change(function () {
  fileName = $(this)[0].files[0].name;
  $('.filename').html(fileName);
  $('.dropzone .upload').hide();
});

function startUpload() {
  if (!uploading && fileName != '') {
    uploading = true;
    $uploadButton.html('Uploading...');
    $dropzone.fadeOut();
    $syncing.addClass('active');
    $done.addClass('active');
    $bar.addClass('active');
    timeoutID = window.setTimeout(showDone, 3200);
  }
}

function showDone() {
  $doneButton.css({
    'opacity': '1',
    'z-index': '1'
  });
  $uploadButton.css({
    'opacity': '0',
    'z-index': '0'
  })
}

function showUpload() {
  $doneButton.css({
    'opacity': '0',
    'z-index': '0'
  });
  $uploadButton.css({
    'opacity': '1',
    'z-index': '1'
  })
}

function doneUpload() {
  uploading = false;
  fileName = '';
  $syncing.removeClass('active');
  $done.removeClass('active');
  $bar.removeClass('active');
  $dropzone.fadeIn();
  $uploadButton.html('Upload file');
  $('.dropzone .upload').show();
  $('.filename').html('');
  showUpload();
}