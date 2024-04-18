const password = document.querySelector('#password')
const confirmation = document.querySelector('#confirmation')

confirmation.addEventListener('blur', () => {
    const err = confirmation.parentElement.querySelector('.error')
    if (password.value === confirmation.value) {
        err.innerText = ''
    }
    else if (password.value !== confirmation.value) {
        err.innerText = '* Passwords do not match'
    }
})