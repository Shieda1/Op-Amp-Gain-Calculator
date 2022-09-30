// https://www.omnicalculator.com/other/op-amp-gain

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const gainRadio = document.getElementById('gainRadio');
const inputresistanceRadio = document.getElementById('inputresistanceRadio');
const feedbackresistanceRadio = document.getElementById('feedbackresistanceRadio');

let gain;
let inputresistance = v1;
let feedbackresistance = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

gainRadio.addEventListener('click', function() {
  variable1.textContent = 'Input resistance';
  variable2.textContent = 'Feedback resistance';
  inputresistance = v1;
  feedbackresistance = v2;
  result.textContent = '';
});

inputresistanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Gain';
  variable2.textContent = 'Feedback resistance';
  gain = v1;
  feedbackresistance = v2;
  result.textContent = '';
});

feedbackresistanceRadio.addEventListener('click', function() {
  variable1.textContent = 'Gain';
  variable2.textContent = 'Input resistance';
  gain = v1;
  inputresistance = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(gainRadio.checked)
    result.textContent = `Gain = ${computegain().toFixed(2)}`;

  else if(inputresistanceRadio.checked)
    result.textContent = `Input resistance = ${computeinputresistance().toFixed(2)}`;

  else if(feedbackresistanceRadio.checked)
    result.textContent = `Feedback resistance = ${computefeedbackresistance().toFixed(2)}`;
})

// calculation

function computegain() {
  return Number(feedbackresistance.value) / Number(inputresistance.value);
}

function computeinputresistance() {
  return Number(feedbackresistance.value) / Number(gain.value);
}

function computefeedbackresistance() {
  return Number(gain.value) * Number(inputresistance.value);
}