var fixation = {
    type: 'html-keyboard-response',
    stimulus: '<div style="font-size:60px;"> + </div>',
    choices: jsPsych.NO_KEYS,
    trial_duration: 1000, // [ms]
    data: {test_part: 'fixation'}
  }
var flip1 = {
  type: 'html-keyboard-response',
  stimulus: function(){
    return `<p class = "flip_text">${jsPsych.timelineVariable('flip1', true).toUpperCase()}</p>`
  },
  choices:['ArrowDown'],
  data: {test_part: 'flip1'}
}

var flip2 = {
  type: 'html-keyboard-response',
  stimulus: function(){
    return `<p class = "flip_text">${jsPsych.timelineVariable('flip2', true).toUpperCase()}</p>`
  },
  choices:['ArrowDown'],
  data: {test_part: 'flip2'}
}
var flip3 = {
  type: 'html-keyboard-response',
  stimulus: function(){
    return `<p class = "flip_text">${jsPsych.timelineVariable('flip3', true).toUpperCase()}</p>`
  },
  choices:['ArrowDown'],
  data: {test_part: 'flip3'}
}
var flip4 = {
  type: 'html-keyboard-response',
  stimulus: function(){
    return `<p class = "flip_text">${jsPsych.timelineVariable('flip4', true).toUpperCase()}</p>`
  },
  choices:['ArrowDown'],
  data: {test_part: 'flip4'}
}
var question = {
  type: 'html-keyboard-response',
  stimulus: function(){
    return `<p class = "flip_text">${jsPsych.timelineVariable('flip5', true).toUpperCase()}</p>`
  },
  choices:['ArrowDown'],
  data: {test_part: 'flip5'}
}
var judgement = {
  type: 'html-keyboard-response',
  stimulus: function(){
    return `<p class = "flip_text">${jsPsych.timelineVariable('flip6', true).toUpperCase()}</p>`
  },
  choices:['ArrowLeft', 'ArrowRight'],
  data: {test_part: 'flip6'}
}
