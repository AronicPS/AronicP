var username = document.querySelector('#username')
var password = document.querySelector('#password')
var form = document.querySelector('form')

function showError(input) {
    
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input) {
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText = ''
}

function checkEmptyError(listInput) {
    listInput.forEach(input => {
        input.value = input.value.trim()

        if(input.value == '') {
            showError(input, 'Khong dc de trong')
        }else{
            showSuccess(input)
        }
    });

    form.addEventListener('submit', function(e){
        e.preventDefault()

        checkEmptyError([username, password])
    })
}