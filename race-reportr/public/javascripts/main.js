/* global $ */

$(function () {
  /**
   * @desc Event handler for clicking the add button in the splits section.
   *       This function adds a new input row to the splits section.
   */
  $('.splits').on('click', '.split-add-btn', function (event) {
    event.preventDefault();
    console.debug('Splits row add button clicked.');

    // Get the new row number.
    var newRowNumber = $('.splits').children().length + 1;

    // Remove the add and remove buttons from the last row.
    $('.split-add-btn').remove();
    $('.split-sub-btn').remove();

    // Build the new row HTML.
    var splitRow = '<div class="form-group split-div-' + newRowNumber + '">\n';
    splitRow += '\t<label for="split-' + newRowNumber + '" style="display: inline">' + newRowNumber + ' </label>\n';
    splitRow += '\t<input id="split-' + newRowNumber + '" type="text" style="display: inline">\n';
    splitRow += '\t<input class="square-btn-inline split-add-btn" type="button" value="+">\n';
    splitRow += '\t<input class="square-btn-inline split-sub-btn" type="button" value="-">\n';
    splitRow += '</div>\n';

    // Add the row to the splits section.
    $('.splits').append(splitRow);
  });

  /**
   * @desc Event handler for clicking the subtract button in the splits section.
   *       This function removes the last row in the splits section, and adds the
   *       add and remove buttons to the previous row.
   */
  $('.splits').on('click', '.split-sub-btn', function (event) {
    event.preventDefault();
    console.debug('Splits row subtract button clicked.');

    // Gets the last row ID and removes it.
    var lastRow = $('.splits').children().length;
    $('.split-div-' + lastRow).remove();

    // Start building the add and remove buttons HTML.
    var addRemoveButtons = '\t<input class="square-btn-inline split-add-btn" type="button" value="+">\n';

    // If there is only 1 row left, don't add the subtract button.
    if (lastRow !== 2) {
      console.log(lastRow);
      addRemoveButtons += '\t<input class="square-btn-inline split-sub-btn" type="button" value="-">\n';
    }

    // Add the add and remove buttons HTML to the new last row.
    $('.split-div-' + (lastRow - 1)).append(addRemoveButtons);
  });

  /**
   * @desc Event handler for clicking the add button in the pictures section.
   *       This function adds a new input row to the pictures section.
   */
  $('.pictures-section').on('click', '.picture-add-btn', function (event) {
    event.preventDefault();
    console.debug('Pictures row section button clicked.');

    // Get the new row number.
    var newRowNumber = $('.pictures').children().length + 1;

    // Build the new row HTML.
    var pictureRow = '<div class="picture-div-' + newRowNumber + '">\n';
    pictureRow += '\t<div class="form-group">';
    pictureRow += '\t\t<label for="picture-' + newRowNumber + '-link">picture #' + newRowNumber + ' link</label>\n';
    pictureRow += '\t\t<input id="picture-' + newRowNumber + '-link" type="text">\n';
    pictureRow += '\t</div>';
    pictureRow += '\t<div class="form-group">';
    pictureRow += '\t\t<label for="picture-' + newRowNumber + '-description">picture #' + newRowNumber + ' description</label>\n';
    pictureRow += '\t\t<input id="picture-' + newRowNumber + '-description" type="text">\n';
    pictureRow += '\t</div>\n';
    pictureRow += '</div>\n';

    // Add the row to the pictures section.
    $('.pictures').append(pictureRow);

    $('.picture-sub-btn').prop('disabled', false);
  });

  /**
   * @desc Event handler for clicking the subtract button in the pictures section.
   *       This function removes the last row in the pictures section,
   */
  $('.pictures-section').on('click', '.picture-sub-btn', function (event) {
    event.preventDefault();
    console.debug('Pictures section subtract button clicked.');

    // Gets the last row ID and removes it.
    var lastRow = $('.pictures').children().length;
    $('.picture-div-' + lastRow).remove();

    if (lastRow === 2) {
      $('.picture-sub-btn').prop('disabled', true);
    }
  });
});
