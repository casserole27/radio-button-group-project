/****** VARIABLES ******/

let selectedValue;  
let setSelectedValue;
const radioEl = document.getElementsByName('options')


/****** FUNCTIONS ******/

function getRadioValue() {
  radioEl.forEach(radio => {
    if (radio.checked) {
        selectedValue = radio.value;
    }
    })
    return selectedValue
}

/****** EVENT LISTENERS ******/
document.getElementById('radio-field').addEventListener('change', () => {
    setSelectedValue = getRadioValue()
    document.getElementById('selection').textContent = `You have chosen ${selectedValue}.`;
        
})