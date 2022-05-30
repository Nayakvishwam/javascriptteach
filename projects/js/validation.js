console.log('Form validation');
let Name = document.getElementById("name")
let email = document.getElementById("email")
let pn = document.getElementById("phone")
let validname = false
let validemail = false
let validphone = false
$('#success').hide();
$('#failure').hide();
Name.addEventListener('blur', () => {
    let namevalue = Name.value;
    let rege = /[a-zA-Z]/
    let rege3 = /[a-zA-Z][0-9]/
    let rege4 = /[0-9][a-zA-Z]/
    try {
        if (Number(namevalue)) {
            Name.classList.add('is-invalid');
            document.getElementById('para').innerText = "Please No enter Numberices values only in name"
            validname = false
        }
    }
    catch (error) { }
    let rege2 = /[a-zA-Z]/
    if (rege3.test(namevalue)) {
        Name.classList.add('is-invalid');
        document.getElementById('para').innerText = 'Please No enter Numberices values only in name'
        validname = false
    } else if (rege4.test(namevalue)) {
        Name.classList.add('is-invalid');
        document.getElementById('para').innerText = 'Please No enter Numberices values only in name'
        validname = false
    }
    else if (rege2.test(namevalue)) {
        validname = true
        Name.classList.remove('is-invalid')
        document.getElementById('para').innerText = ''
    }
    else {
        validname = false
        Name.classList.add('is-invalid')
        document.getElementById('para').innerText = 'Please Enter Name'
    }
});
pn.addEventListener('blur', () => {
    let rege = /[a-zA-Z]/
    let rege3 = /[a-zA-Z][0-9]/
    let rege4 = /[0-9][a-zA-Z]/

    if (rege3.test(pn.value)) {
        validphone = false
        pn.classList.add('is-invalid');
        document.getElementById('checkpn').innerText = 'Please No enter Numberices values only in phonenumber field'
    } else if (rege4.test(pn.value)) {
        validphone = false
        pn.classList.add('is-invalid');
        document.getElementById('checkpn').innerText = 'Please No enter Numberices values only in phonenumber field'
    }
    else if (rege.test(pn.value)) {
        validphone = false
        pn.classList.add('is-invalid')
        document.getElementById('checkpn').innerText = 'Enter your valid phonenumber'
    }
    else {
        validphone = true
        pn.classList.remove('is-invalid')
        document.getElementById('checkpn').innerText = ''
    }
})
email.addEventListener('blur', () => {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regex.test(email.value)) {
        validemail = true
        email.classList.remove('is-invalid')
    } else {
        validemail = false
        email.classList.add('is-invalid')
    }
})
document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    console.log(validemail)
    console.log(validphone)
    console.log(validname)
    if (validemail == true && validname == true && validphone == true) {
        document.getElementById('success').classList.add('show')
        $('#success').show()
        $('#failure').hide()
    }
    else {
        document.getElementById('failure').classList.add('show')
        $('#failure').show()
        $('#success').hide()

    }
})