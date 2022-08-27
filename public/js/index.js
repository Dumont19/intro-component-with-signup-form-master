const form = document.querySelector('form')
const submitButton = document.querySelector('.btn')
const inputs = document.querySelectorAll('input')

const firstName = document.getElementsByName('first-name')[0]
const lastName = document.getElementsByName('last-name')[0]
const email = document.getElementsByName('email')[0]
const password = document.getElementsByName('password')[0]

form.addEventListener('submit', event => event.preventDefault())

function validateForm() {
    submitButton.addEventListener('click', () => {
        inputs.forEach(input => {
            if (input.value === '') {
                input.parentElement.classList.add('error')
            } else {
                input.parentElement.classList.remove('error')
            }
    
            checkEmail()
        })
    })
}
validateForm()


function checkEmail() {
    if (email.value === '' || email.value.includes('@') === false) {
        email.parentElement.classList.add('error')
        email.placeholder = 'email@example/com'
    } else {
        email.parentElement.classList.remove('error')
    }
}

