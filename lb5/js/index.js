$(document).ready(function() {
  $('.rollButton').click(function() {
    const rollResult = getRandomNumber(1, 6);
    const rollResultc = getRandomNumber(1, 6);
    $('.rollResult').text(rollResult);
    $('.rollResultc').text(rollResultc);
    configure(rollResult, "roll");
    configure(rollResultc, "rollc");
  });

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function configure(pips, lclass) {
    let $topFace;
    let $leftFace;
    let $rightFace;

    switch (pips) {
      case 1:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(5, "Left");
        $rightFace = faceGenerator(4, "Right");
        break;
      case 2:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(1, "Left");
        $rightFace = faceGenerator(4, "Right");
        break;
      case 3:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(5, "Left");
        $rightFace = faceGenerator(1, "Right");
        break;
      case 4:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(1, "Left");
        $rightFace = faceGenerator(5, "Right");
        break;
      case 5:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(4, "Left");
        $rightFace = faceGenerator(1, "Right");
        break;
      case 6:
        $topFace = faceGenerator(pips, "Top");
        $leftFace = faceGenerator(4, "Left");
        $rightFace = faceGenerator(5, "Right");
        break;
    }
    draw($topFace, $leftFace, $rightFace, lclass);
  }

  function faceGenerator(quantity, face) {
    const $face = $(`<div class="${face}Face"></div>`);
    const $pipContainer = $(`<div class="face-${quantity}"></div>`);
    const $column1 = $('<div class="column column1"></div>');
    const $column2 = $('<div class="column column2"></div>');
    const $column3 = $('<div class="column column3"></div>');
    const pip = '<div class="pip"></div>';

    switch (quantity) {
      case 4:
        for (let index = 0; index < quantity / 2; index++) {
          $column1.append(pip);
          $column2.append(pip);
        }
        $pipContainer.append($column1).append($column2);
        break;
      case 5:
        for (let index = 0; index < 2; index++) {
          $column1.append(pip);
          $column3.append(pip);
        }
        $column2.append(pip);
        $pipContainer.append($column1).append($column2).append($column3);
        break;
      case 6:
        for (let index = 0; index < (quantity / 2); index++) {
          $column1.append(pip);
          $column2.append(pip);
        }
        $pipContainer.append($column1).append($column2);
        break;
      default:
        for (let index = 0; index < quantity; index++) {
          $pipContainer.append(pip);
        }
    }
    $face.append($pipContainer);
    return $face;
  }

  function draw(top, left, right, lclass) {
    $(`.${lclass}`).empty();
    $(`.${lclass}`).append(top).append(left).append(right);
  }

});
