const animalDiv = document.getElementById('animal-div'); /* Animal */
const animalButton = document.getElementById('show-animal')

const powerDiv = document.getElementById('power-div'); /* Superpower */
const powerButton = document.getElementById('show-power')

const skillsDiv = document.getElementById('skills-div'); /* Skills */
const skillsButton = document.getElementById('show-skills')

animalButton.addEventListener('click', () => { /* Animal */
    animalDiv.classList.toggle('hidden');
})

powerButton.addEventListener('click', () => { /* Superpower */
    powerDiv.classList.toggle('hidden');
})

skillsButton.addEventListener('click', () => { /* Skills */
    skillsDiv.classList.toggle('hidden');
})

