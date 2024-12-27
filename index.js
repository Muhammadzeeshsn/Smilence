  let container = document.getElementById('container')

toggle = () => {
    container.classList.toggle('sign-in')
    container.classList.toggle('sign-up')
}

setTimeout(() => {
    container.classList.add('sign-in')
}, 200)

const sign_in = document.getElementById('sign_in');
sign_in.addEventListener("click", function(event){
// event.preventDefault()
alert('Signing in...')
})

const appointment = document.getElementById('appointment');
appointment.addEventListener("click", function(event){
event.preventDefault()
alert('Thank You, You will receive confirmation mail shortly...')
})