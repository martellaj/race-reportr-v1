var express = require('express');
var router = express.Router();
var markdown = require('markdown').markdown;

router.get('/', function (req, res, next) {
  console.log(req.query);

  // Add race information section.
  var source = '### Race information\n';
  source += '* **What?** ' + req.query.raceName + '\n';
  source += '* **When?** ' + req.query.raceDate + '\n';
  source += '* **How far?** ' + req.query.raceDistance + '\n';
  source += '* **Website?** ' + req.query.raceWebsite + '\n';
  source += '\n';

  // Add goals section.
  if (req.query.goalADescription || req.query.goalBDescription || req.query.goalCDescription) {
    source += '### Goals\n';
    source += '| Goal   | Description  | Completed?  |\n';
    source += '|------|-------------|------------|\n';
    source += '|  A   |' + req.query.goalADescription + ' | ' + (req.query.goalAIsCompleted === 'true' ? '*Yes*' : '*No*') + ' |\n';

    if (req.query.goalBDescription) {
      source += '|  B   |' + req.query.goalBDescription + ' | ' + (req.query.goalBIsCompleted === 'true' ? '*Yes*' : '*No*') + ' |\n';
    }

    if (req.query.goalCDescription) {
      source += '|  C   |' + req.query.goalCDescription + ' | ' + (req.query.goalCIsCompleted === 'true' ? '*Yes*' : '*No*') + ' |\n';
    }

    source += '\n';
  }

  // Add splits section.
  if (req.query.split1) {
    source += '### Splits\n';
    source += '| ' + (req.query.splitDistance === 'miles' ? 'Mile' : 'Kilometer') + ' | ' + ' Time  |\n';
    source += '|------|-------------|\n';
    var split = 1;

    do {
      source += '| ' + split + ' | ' + req.query['split' + split] + ' |\n';
      split++;
    } while (req.query.hasOwnProperty('split' + split));

    source += '\n';
  }

  // Add text heavy sections.
  if (req.query.textHeavySection1) {
    var textHeavySection = 1;

    do {
      source += '### ' + req.query['textHeavySection' + textHeavySection] + '\n';
      source += 'Café au lait id single shot cinnamon, white, coffee pumpkin spice turkish siphon as saucer. That crema extra, grounds lungo sit viennese that iced decaffeinated. Steamed affogato grinder caffeine sugar affogato french press plunger pot flavour cup cappuccino. Organic, eu ut kopi-luwak iced seasonal plunger pot.\n';
      textHeavySection++;
    } while (req.query.hasOwnProperty('textHeavySection' + textHeavySection));
  }

  // Add link back to the site.
  source += '\n*This report was generated using [race reportr](http://racereportr.azurewebsites.net), a tool built by [/u/BBQLays](https://www.reddit.com/u/bbqlays) for making great looking and informative race reports.*';

  res.render('generate', {
    rendered: markdown.toHTML(source, 'Maruku'),
    source: source.replace(/\n/g, '<br />').replace(/Café au lait id single shot cinnamon, white, coffee pumpkin spice turkish siphon as saucer. That crema extra, grounds lungo sit viennese that iced decaffeinated. Steamed affogato grinder caffeine sugar affogato french press plunger pot flavour cup cappuccino. Organic, eu ut kopi-luwak iced seasonal plunger pot./g, 'Add some interesting words here. <br />')
  });
});

module.exports = router;
