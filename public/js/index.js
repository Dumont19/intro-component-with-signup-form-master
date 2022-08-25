const signUpButton = document.querySelector('.btn')
const errorMessage = document.querySelectorAll('.error-message')

const fName = document.getElementsByName('first-name')[0]
const lName = document.getElementsByName('last-name')[0]
const email = document.getElementsByName('email')[0]
const password = document.getElementsByName('password')[0]

function showErrorMessage() {
    signUpButton.addEventListener('click', (event) => {
        event.preventDefault()

        if (fName.value === '') {
            errorMessage[0].style.display = 'block'
            fName.classList.add('error')
            fName.placeholder = ''
        } else {
            errorMessage[0].style.display = 'none'
            fName.classList.remove('error')
            fName.value = ''
            fName.placeholder = 'First Name'
        }

        if (lName.value === '') {
            errorMessage[1].style.display = 'block'
            lName.classList.add('error')
            lName.placeholder = ''
        } else {
            errorMessage[1].style.display = 'none'
            lName.classList.remove('error')
            lName.value = ''
            lName.placeholder = 'Last Name'
        }
         
        if (email.value === '' || email.value.includes('@') == false) {
            errorMessage[2].style.display = 'block'
            email.classList.add('error')
            email.placeholder = 'email@example/com'
            email.value = ''
        } else {
            errorMessage[2].style.display = 'none'
            email.classList.remove('error')
            email.value = ''
            email.placeholder = 'Email Adress'
        }

        if (password.value === '') {
            errorMessage[3].style.display = 'block'
            password.classList.add('error')
            password.placeholder = ''
        } else {
            errorMessage[3].style.display = 'none'
            password.classList.remove('error')
            password.value = ''
            password.placeholder = 'Password'
        }
    })
}
showErrorMessage()

