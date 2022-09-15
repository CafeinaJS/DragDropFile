const $fileInput = $('.file-input');
const $droparea = $('.file-drop-area');
const $delete = $('.item-delete');

$fileInput.on('dragenter focus click', function () {
  $droparea.addClass('is-active');
});

$fileInput.on('dragleave blur drop', function () {
  $droparea.removeClass('is-active');
});

$fileInput.on('change', function () {
  let filesCount = $(this)[0].files.length;
  let $textContainer = $(this).prev();

  if (filesCount === 1) {
    let fileName = $(this).val().split('\\').pop();
    $textContainer.text(fileName);
    $('.item-delete').css('display', 'inline-block');
  } else if (filesCount === 0) {
    $textContainer.text('ou arraste os arquivos aqui');
    $('.item-delete').css('display', 'none');
  } else {
    $textContainer.text(filesCount + ' arquivos selecionados');
    $('.item-delete').css('display', 'inline-block');
  }
});

$delete.on('click', function () {
  $('.file-input').val(null);
  $('.file-msg').text('ou arraste os arquivos aqui');
  $('.item-delete').css('display', 'none');
});