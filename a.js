const pickr_1 = Pickr.create({
  el: '.color-picker-1',
  theme: 'classic',
  defaultRepresentation: 'HEX',
  default: '#28de5f',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

var lastAndInitialColorPicker1 = '#28de5f';

pickr_1.on('save', (color) => {
  var newPicker3Color = color.toRGBA().toString(0).toLowerCase().split(',');
  newPicker3Color.pop();
  newPicker3Color[0] = newPicker3Color[0].replace('a', '');

  var newColor = newPicker3Color.join() + ')';

  if (lastAndInitialColorPicker1 === '#28de5f') {
    $(`path[style*='fill:${lastAndInitialColorPicker1}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  } else {
    $(`path[style*='fill: ${lastAndInitialColorPicker1}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  }

  lastAndInitialColorPicker1 = newColor;
});

const pickr_2 = Pickr.create({
  el: '.color-picker-2,
  theme: 'classic',
  defaultRepresentation: 'HEX',
  default: '#1cbd57',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

var lastAndInitialColorPicker2 = '#1cbd57';

pickr_2.on('save', (color) => {
  var newPicker3Color = color.toRGBA().toString(0).toLowerCase().split(',');
  newPicker3Color.pop();
  newPicker3Color[0] = newPicker3Color[0].replace('a', '');

  var newColor = newPicker3Color.join() + ')';

  if (lastAndInitialColorPicker2 === '#1cbd57') {
    $(`path[style*='fill:${lastAndInitialColorPicker2}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  } else {
    $(`path[style*='fill: ${lastAndInitialColorPicker2}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  }

  lastAndInitialColorPicker2 = newColor;
});

const pickr_3 = Pickr.create({
  el: '.color-picker-3',
  theme: 'classic',
  defaultRepresentation: 'HEX',
  default: '#00ab3c',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

var lastAndInitialColorPicker3 = '#00ab3c';

pickr_3.on('save', (color) => {
  var newPicker3Color = color.toRGBA().toString(0).toLowerCase().split(',');
  newPicker3Color.pop();
  newPicker3Color[0] = newPicker3Color[0].replace('a', '');

  var newColor = newPicker3Color.join() + ')';

  if (lastAndInitialColorPicker3 === '#00ab3c') {
    $(`path[style*='fill:${lastAndInitialColorPicker3}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  } else {
    $(`path[style*='fill: ${lastAndInitialColorPicker3}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  }

  lastAndInitialColorPicker3 = newColor;
});

const pickr_4 = Pickr.create({
  el: '.color-picker-4',
  theme: 'classic',
  defaultRepresentation: 'HEX',
  default: '#00ab3c',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {
    preview: true,
    opacity: true,
    hue: true,
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

var lastAndInitialColorPicker4 = '#00ab3c';

pickr_4.on('save', (color) => {
  var newPicker3Color = color.toRGBA().toString(0).toLowerCase().split(',');
  newPicker3Color.pop();
  newPicker3Color[0] = newPicker3Color[0].replace('a', '');

  var newColor = newPicker3Color.join() + ')';

  if (lastAndInitialColorPicker4 === '#00ab3c') {
    $(`path[style*='fill:${lastAndInitialColorPicker4}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  } else {
    $(`path[style*='fill: ${lastAndInitialColorPicker4}']`).each(function (index) {
      $(this).css('fill', newColor);
    });
  }

  lastAndInitialColorPicker4 = newColor;
});
































//////////////////////////////////////////////////////////////////////////

const pickr_1 = Pickr.create({
  el: '.color-picker-1',
  theme: 'classic', // or 'monolith', or 'nano'
  defaultRepresentation: 'HEX',
  default: '#28de5f',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

pickr_1.on('change', (color, instance) => {
  console.log('change', color, instance);
  var newColor_1 = pickr_1.getColor().toHEXA().toString();
  console.log(newColor_1);
  //$("path#path3772").css("fill", newColor_1);

  $("path#path31394").css("fill", newColor_1);
  $("path#path31406").css("fill", newColor_1);
  $("path#path31414").css("fill", newColor_1);
  $("path#path31426").css("fill", newColor_1);
  $("path#path31438").css("fill", newColor_1);
  $("path#path32258").css("fill", newColor_1);
  $("path#path32270").css("fill", newColor_1);
});

const pickr_2 = Pickr.create({
  el: '.color-picker-2',
  theme: 'classic', // or 'monolith', or 'nano'
  defaultRepresentation: 'HEX',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

pickr_2.on('change', (color, instance) => {
  console.log('change', color, instance);
  var newColor_2 = pickr_2.getColor().toHEXA().toString();
  console.log(newColor_2);
  //$("path#path3772").css("fill", newColor_2);

  $("path#path3800").css("fill", newColor_2);
  $("path#path31390").css("fill", newColor_2);
  $("path#path31402").css("fill", newColor_2);
  $("path#path31418").css("fill", newColor_2);
  $("path#path31430").css("fill", newColor_2);
  $("path#path31442").css("fill", newColor_2);
  $("path#path32266").css("fill", newColor_2);
  $("path#path32278").css("fill", newColor_2);

});

const pickr_3 = Pickr.create({
  el: '.color-picker-3',
  theme: 'classic', // or 'monolith', or 'nano'
  defaultRepresentation: 'HEX',
  default: '#1ab849',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});

var lastAndInitialColor = '#1ab849';

pickr_3.on('save', (color, instance) => {
  var newPicker3Color = color.toRGBA().toString(0).toLowerCase().split(',');
  newPicker3Color.pop();
  newPicker3Color[0] = newPicker3Color[0].replace('a', '');

  var newColor = newPicker3Color.join() + ')';

  if (lastAndInitialColor === '#1ab849') {
    $(`path[style*='fill:${lastAndInitialColor}']`).each(function(index) {
      $(this).css('fill', newColor);
    });
  } else {
    $(`path[style*='fill: ${lastAndInitialColor}']`).each(function(index) {
      $(this).css('fill', newColor);
    });
  }

  //#00ab3c
  lastAndInitialColor = newColor;
});

const pickr_4 = Pickr.create({
  el: '.color-picker-4',
  theme: 'classic', // or 'monolith', or 'nano'
  defaultRepresentation: 'HEX',
  swatches: [
    'rgba(244, 67, 54, 1)',
  ],

  components: {

    // Main components
    preview: true,
    opacity: true,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: true,
      save: true
    }
  }
});
