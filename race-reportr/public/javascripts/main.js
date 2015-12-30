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
    textHeavyRow += '\t\t<option>Kilometers [#] to [#]</option>';
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
  
  $('#preview-button').on('click', function () {
    saveFormData('/preview');
  });
  
  /**
   * @name saveFormData
   * @desc Takes the data from... not sure what this will actually do. Probably
   *       going to break it up.
   * @param uri The URI to append the query string to.
   */
  function saveFormData (uri) {
    console.log('Saving form data...');
    
    var formData = {};
    
    // Get race information from form.
    formData.raceName = $('#race-name').val() || '[race name goes here]';
    formData.raceDistance = $('#race-distance').val() || '[race distance goes here]';
    formData.raceDate = $('#race-date').val() || '[race date goes here]';
    formData.raceWebsite = $('#race-website').val() || '[race website goes here]';    
    
    // Get goals information from form.
    formData.goalA = {
      description: $('#goal-a').val(),
      isCompleted: $('#goal-a-completed').is(':checked')
    };
    
    formData.goalB = {
      description: $('#goal-b').val(),
      isCompleted: $('#goal-b-completed').is(':checked')
    };
    
    formData.goalC = {
      description: $('#goal-c').val(),
      isCompleted: $('#goal-c-completed').is(':checked')
    };
    
    // Get splits information from form.
    formData.splitDistance = $('input[name=split-distance]:checked').val();
    formData.splits = [];
    
    // Get number of splits entered.
    var splits = $('.splits').children();
    
    // Get value of each split.
    for (var i = 1; i < splits.length + 1; i++) {
      formData.splits.push($('#split-' + i).val());
    }
    
    // Get pictures information from form.
    formData.pictures = [];
    
    // Get number of pictures entered.
    var pictures = $('.pictures').children();
    
    // Get value of each picture group.
    for (var i = 1; i < pictures.length + 1; i++) {
      formData.pictures.push({
        link: $('#picture-' + i + '-link').val(),
        description: $('#picture-' + i + '-description').val()
      });
    }
    
    // Get text-heavy section information from form.
    formData.textHeavySections = [];
    
    // Get number of text-heavy sections entered.
    var textHeavySections = $('.text-heavy-sections').children();
    
    // Get value of each text-heavy section.
    for (var i = 1; i < textHeavySections.length + 1; i++) {
      formData.textHeavySections.push($('#text-select-' + i + ' option:selected').text());
    }
    
    // Add race information to query string.
    uri += '?raceName=' + encodeURIComponent(formData.raceName);
    uri += '&raceDistance=' + encodeURIComponent(formData.raceDistance);
    uri += '&raceDate=' + encodeURIComponent(formData.raceDate);
    uri += '&raceWebsite=' + encodeURIComponent(formData.raceWebsite);
    
    // Add goal information to query string.
    if (formData.goalA.description !== '') {
      uri += '&goalADescription=' + encodeURIComponent(formData.goalA.description);
      uri += '&goalAIsCompleted=' + encodeURIComponent(formData.goalA.isCompleted); 
    }
    
    if (formData.goalB.description !== '') {
      uri += '&goalBDescription=' + encodeURIComponent(formData.goalB.description);
      uri += '&goalBIsCompleted=' + encodeURIComponent(formData.goalB.isCompleted); 
    }
    
    if (formData.goalC.description !== '') {
      uri += '&goalCDescription=' + encodeURIComponent(formData.goalC.description);
      uri += '&goalCIsCompleted=' + encodeURIComponent(formData.goalC.isCompleted); 
    }
    
    // Add splits information to query string.
    if (formData.splits.length > 0) {
      uri += '&splitDistance=' + encodeURIComponent(formData.splitDistance);
      
      for (var i = 0; i < formData.splits.length; i++) {
        uri += '&split' + (i + 1) + '=' + encodeURIComponent(formData.splits[i]);
      }
    }
    
    // Add pictures information to query string.
    if (formData.pictures.length > 0) {
      for (var i = 0; i < formData.pictures.length; i++) {
        uri += '&picture' + (i + 1) + 'Link=' + encodeURIComponent(formData.pictures[i].link);
        uri += '&picture' + (i + 1) + 'Description=' + encodeURIComponent(formData.pictures[i].description);        
      }
    }
    
    // Add text-heavy section information to query string.
    if (formData.textHeavySections.length > 0) {
      for (var i = 0; i < formData.textHeavySections.length; i++) {
        uri += '&textHeavySection' + (i + 1) + '=' + encodeURIComponent(formData.textHeavySections[i]);  
      }
    }
    
    window.open(uri, '_blank');
  }
});
