/* global $, Elevator */

$(function () {
  /**
   * @desc Creating an elevator and adding its elevate function to the button.
   */
  var elevator = new Elevator({
    mainAudio: '/music/elevator.mp3',
    endAudio: '/music/ding.mp3'
  });

  $('#elevator-button').on('click', function () {
    elevator.elevate();
  });

  /**
   * @desc Event handler for clicking the add button in the splits section.
   *       This function adds a new input row to the splits section.
   */
  $('.splits-section').on('click', '.split-add-btn', function (event) {
    event.preventDefault();
    console.debug('Splits row add button clicked.');

    // Get the new row number.
    var newRowNumber = $('.splits').children().length + 1;

    // Build the new row HTML.
    var splitRow = '';

    // Include placeholder value if first row.
    if (newRowNumber === 1) {
      splitRow = '<div class="form-group split-div-1">';
      splitRow += '\t<label for="split-1" style="display: inline">1 </label>';
      splitRow += '\t<input id="split-1" type="text" style="display: inline" placeholder="8:46">';
      splitRow += '</div>';
    } else {
      splitRow = '<div class="form-group split-div-' + newRowNumber + '">\n';
      splitRow += '\t<label for="split-' + newRowNumber + '" style="display: inline">' + newRowNumber + ' </label>\n';
      splitRow += '\t<input id="split-' + newRowNumber + '" type="text" style="display: inline">\n';
      splitRow += '</div>\n';
    }

    // Add the row to the splits section.
    $('.splits').append(splitRow);
  });

  /**
   * @desc Event handler for clicking the subtract button in the splits section.
   *       This function removes the last row in the splits section, and adds the
   *       add and remove buttons to the previous row.
   */
  $('.splits-section').on('click', '.split-sub-btn', function (event) {
    event.preventDefault();
    console.debug('Splits row subtract button clicked.');

    // Gets the last row ID and removes it.
    var lastRow = $('.splits').children().length;
    $('.split-div-' + lastRow).remove();
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
    var pictureRow = '';

    if (newRowNumber === 1) {
      pictureRow = '<div class="picture-div-1">\n';
      pictureRow += '\t<div class="form-group">';
      pictureRow += '\t\t<label for="picture-1-link">picture #1 link</label>\n';
      pictureRow += '\t\t<input class="longer" id="picture-1-link" type="text" placeholder="http://i.imgur.com/1brDP61.jpg">\n';
      pictureRow += '\t</div>';
      pictureRow += '\t<div class="form-group">';
      pictureRow += '\t\t<label for="picture-1-description">picture #1 description</label>\n';
      pictureRow += '\t\t<input class="longer" id="picture-1-description" type="text" placeholder="me at mile 8">\n';
      pictureRow += '\t</div>\n';
      pictureRow += '</div>\n';
    } else {
      pictureRow = '<div class="picture-div-' + newRowNumber + '">\n';
      pictureRow += '\t<div class="form-group">';
      pictureRow += '\t\t<label for="picture-' + newRowNumber + '-link">picture #' + newRowNumber + ' link</label>\n';
      pictureRow += '\t\t<input class="longer" id="picture-' + newRowNumber + '-link" type="text">\n';
      pictureRow += '\t</div>';
      pictureRow += '\t<div class="form-group">';
      pictureRow += '\t\t<label for="picture-' + newRowNumber + '-description">picture #' + newRowNumber + ' description</label>\n';
      pictureRow += '\t\t<input class="longer" id="picture-' + newRowNumber + '-description" type="text">\n';
      pictureRow += '\t</div>\n';
      pictureRow += '</div>\n';
    }

    // Add the row to the pictures section.
    $('.pictures').append(pictureRow);
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
  });

  /**
   * @desc Event handler for clicking the add button in the text-heavy section.
   *       This function adds a new input row to the text-heavy section.
   */
  $('.text-heavy-section').on('click', '.text-add-btn', function (event) {
    event.preventDefault();
    console.debug('Text-heavy section button clicked.');

    // Get the new row number.
    var newRowNumber = $('.text-heavy-sections').children().length + 1;

    // Build the new row HTML.
    var textHeavyRow = '<div class="text-div-' + newRowNumber + '">\n';
    textHeavyRow += '\t<select class="form-control" id="text-select-' + newRowNumber + '">';
    textHeavyRow += '\t\t<option>Training</option>';
    textHeavyRow += '\t\t<option>Race strategy</option>';
    textHeavyRow += '\t\t<option>Pre-race</option>';
    textHeavyRow += '\t\t<option>Race</option>';
    textHeavyRow += '\t\t<option>Mile [#]</option>';
    textHeavyRow += '\t\t<option>Miles [#] to [#]</option>';
    textHeavyRow += '\t\t<option>Kilometer [#]</option>';
    textHeavyRow += '\t\t<option>Kilomters [#] to [#]</option>';
    textHeavyRow += '\t\t<option>Post-race</option>';
    textHeavyRow += "\t\t<option>What's next?</option>";
    textHeavyRow += '\t\t<option>Custom</option>';
    textHeavyRow += '\t</select>';
    textHeavyRow += '</div>';

    // Add the row to the text-heavy section.
    $('.text-heavy-sections').append(textHeavyRow);
  });

  /**
   * @desc Event handler for clicking the subtract button in the text-heavy section.
   *       This function removes the last row in the text-heavy section,
   */
  $('.text-heavy-section').on('click', '.text-sub-btn', function (event) {
    event.preventDefault();
    console.debug('Text-heavy section subtract button clicked.');

    // Gets the last row ID and removes it.
    var lastRow = $('.text-heavy-sections').children().length;
    $('.text-div-' + lastRow).remove();
  });
});
