window.onload = () => {

    let pagina = document.getElementById('pagina').value;


    // -------------------- FORMULARIO ----------------------------------------

    if (pagina === 'contacto') {

        let btnContacto = document.getElementById('btnContacto')
        let formularioContacto = document.getElementById('formularioContacto')
        let radioComunicacion = document.getElementsByName('comunicacion')
        let campoEmail = document.getElementById('campoEmail')
        let campoTelefono = document.getElementById('campoTelefono')

        formularioContacto.onsubmit = (e) => {
            e.preventDefault()
            document.getElementById('nombres').value = '';
            document.getElementById('apellidos').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefono').value = '';
            document.getElementById('mensaje').value = '';

            setTimeout(() => {
                alert("EL MENSAJE SE HA ENVIADO EXITOSAMENTE")
            }, 300);
        }

        radioComunicacion.forEach(radio => {
            radio.addEventListener('change', () => {
                campoEmail.classList.remove('d-block')
                campoTelefono.classList.remove('d-block')
                campoEmail.classList.add('d-none')
                campoTelefono.classList.add('d-none')
                if (radio.value === 'email') {
                    campoEmail.classList.remove('d-none')
                    campoEmail.classList.add('d-block')
                }
                if (radio.value === 'telefono') {
                    campoTelefono.classList.remove('d-none')
                    campoTelefono.classList.add('d-block')
                }

            })
        });

        btnContacto.addEventListener('click', (e) => {
            validarFormulario(e)
        })

        const validarFormulario = (e) => {
            validarRequeridos(e)
            validarComunicacion(e)
        }


        const validarComunicacion = (e) => {
            let opcion = ''
            radioComunicacion.forEach(radio => {
                if (radio.checked)
                    opcion = radio.value
            });


            if (opcion === 'email')
                validarEmail(e)

            if (opcion === 'telefono')
                validarTelefono(e)
        }
    }







    const validarRequeridos = (e) => {
        let requeridos = document.getElementsByClassName('campo-requerido')

        for (let requerido of requeridos) {
            let padre = requerido.parentNode
            let error = padre.childNodes[5]
            requerido.classList.remove('border-danger')
            error.classList.remove('d-block')
        }

        for (let requerido of requeridos) {
            if (requerido.value.trim() === '') {
                let padre = requerido.parentNode
                let error = padre.childNodes[5]
                requerido.classList.add('border-danger')
                error.classList.add('d-block')
                e.preventDefault()
            }
        }
    }




    const validarEmail = (e) => {
        let email = document.getElementById('email')
        let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

        let padre = email.parentNode
        let error = padre.childNodes[5]

        email.classList.remove('border-danger')
        error.classList.remove('d-block')

        if (email.value.trim() === '' || !emailRegex.test(email.value)) {
            if (email.value.trim() === '')
                error.innerHTML = 'Campo requerido'
            else
                error.innerHTML = 'El email no tiene formato correcto'

            email.classList.add('border-danger')
            error.classList.add('d-block')
            e.preventDefault()
        }
    }

    const validarTelefono = (e) => {
        let telefono = document.getElementById('telefono')
        let telefonoRegex = /^([0-9])*$/;

        let padre = telefono.parentNode.parentNode
        let error = padre.childNodes[5]

        telefono.classList.remove('border-danger')
        error.classList.remove('d-block')
        error.innerHTML = "";

        if (telefono.value.trim() === '' || !telefonoRegex.test(telefono.value)) {
            if (telefono.value.trim() === '')
                error.innerHTML = 'Campo requerido y numerico'
            else
                error.innerHTML = 'Solo ingresar numeros'

            telefono.classList.add('border-danger')
            error.classList.add('d-block')
            e.preventDefault()
        }
    }
}