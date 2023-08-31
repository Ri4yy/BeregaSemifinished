const previousButton = document.querySelector('#prev')
const nextButton = document.querySelector('#next')
const submitButton = document.querySelector('#submit')
const tabTargets = document.querySelectorAll('.tab')
const tabPanels = document.querySelectorAll('.tabpanel')
const isEmpty = (str) => !str.trim().length
let currentStep = 0


// Next: Change UI relative to current step and account for button permissions
nextButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Hide current tab
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')

    // Show next tab
    tabPanels[currentStep + 1].classList.remove('hidden')
    tabTargets[currentStep + 1].classList.add('active')
    currentStep += 1

    updateStatusDisplay()
})

// Previous: Change UI relative to current step and account for button permissions
previousButton.addEventListener('click', (event) => {
    event.preventDefault()

    // Hide current tab
    tabPanels[currentStep].classList.add('hidden')
    tabTargets[currentStep].classList.remove('active')

    // Show previous tab
    tabPanels[currentStep - 1].classList.remove('hidden')
    tabTargets[currentStep - 1].classList.add('active')
    currentStep -= 1

    nextButton.removeAttribute('disabled')
    updateStatusDisplay()
})


function updateStatusDisplay() {
    // If on the last step, hide the next button and show submit
    if (currentStep === tabTargets.length - 1) {
        nextButton.classList.add('hidden')
        previousButton.classList.remove('hidden')
        submitButton.classList.remove('hidden')

        // If it's the first step hide the previous button
    } else if (currentStep == 0) {
        nextButton.classList.remove('hidden')
        previousButton.classList.add('hidden')
        submitButton.classList.add('hidden')
        // In all other instances display both buttons
    } else {
        nextButton.classList.remove('hidden')
        previousButton.classList.remove('hidden')
        submitButton.classList.add('hidden')
    }
}