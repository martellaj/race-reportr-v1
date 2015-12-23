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
    splitRow += '\t<input class="square-btn split-add-btn" type="button" value="+">\n';
    splitRow += '\t<input class="square-btn split-sub-btn" type="button" value="-">\n';
    splitRow += '</div>\n';

    // Add the row to the splits section.
    $('.splits').append(splitRow);
  });

  /**
   * @desc Event handler for clicking the subtract button in the splits section.
   *       This function removes the last row in the input section, and adds the
   *       add and remove buttons to the previous row.
   */
  $('.splits').on('click', '.split-sub-btn', function (event) {
    event.preventDefault();
    console.debug('Splits row subtract button clicked.');

    // Gets the last row ID and removes it.
    var lastRow = $('.splits').children().length;
    $('.split-div-' + lastRow).remove();

    // Start building the add and remove buttons HTML.
    var addRemoveButtons = '\t<input class="square-btn split-add-btn" type="button" value="+">\n';

    // If there is only 1 row left, don't add the subtract button.
    if (lastRow !== 2) {
      console.log(lastRow);
      addRemoveButtons += '\t<input class="square-btn split-sub-btn" type="button" value="-">\n';
    }

    // Add the add and remove buttons HTML to the new last row.
    $('.split-div-' + (lastRow - 1)).append(addRemoveButtons);
  });
});
