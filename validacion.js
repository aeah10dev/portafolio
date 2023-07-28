//Copiar a portapapeles el correo electronico
   const emailImagen = document.getElementById('emailImagen');

  emailImagen.addEventListener('click', () => {
    const textoACopiar = "augusto.e.alonso.h10@gmail.com";
  
  // Crear un elemento de texto temporal para copiar al portapapeles
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = textoACopiar;
  document.body.appendChild(tempTextArea);
  
  // Seleccionar y copiar el contenido al portapapeles
  tempTextArea.select();
  document.execCommand('copy');
  
  // Eliminar el elemento de texto temporal
  document.body.removeChild(tempTextArea);
  
  // Mostrar una alerta
  alert('Correo copiado al portapapeles: ' + textoACopiar);
});

//Cambio de palabras en parrafo titulo
const miParrafo = document.getElementById('miParrafo');
const palabras = ['desarrollo', 'construyo', 'creo', 'ideo'];

let indice = 0;

setInterval(() => {
  const palabrasParrafo = miParrafo.textContent.split(' ');
  palabrasParrafo.forEach((palabra, index) => {
    if (palabra === palabras[indice]) {
      palabrasParrafo[index] = palabras[(indice + 1) % palabras.length];
    }
  });
  miParrafo.textContent = palabrasParrafo.join(' ');
  indice = (indice + 1) % palabras.length;
}, 1800); // Cambiar cada 2 segundos (2000 milisegundos)



// Evento click nombre

    // Agregar clases al h4 y al input cuando se le hace click
    nombre.addEventListener('click', () => {
        const input_nombre = document.getElementById('input_nombre');
        const containerInput_nombre = document.getElementById('containerInput_nombre');
        input_nombre.classList.add('nombreSelect')

        nombre.classList.add('input_textselect');
        input_nombre.focus();
        containerInput_nombre.classList.add('input_containerselect');
    });

    input_nombre.addEventListener('blur', () => {
        nombre.classList.add('input_textselected');
        containerInput_nombre.classList.add('input_containerselected');
    });
    
    input_nombre.addEventListener('focus', () => {
        nombre.classList.remove('input_textselected');
        containerInput_nombre.classList.remove('input_containerselected');
    });

// Evento click email

        // Agregar clases al h4 y al input cuando se le hace click
        email.addEventListener('click', () => {
            const input_email = document.getElementById('input_email');
            const containerInput_email = document.getElementById('containerInput_email');
            input_email.classList.add('emailSelect')
            
            email.classList.add('input_textselect');
            input_email.focus();
            containerInput_email.classList.add('input_containerselect');
        });
    
        input_email.addEventListener('blur', () => {
            email.classList.add('input_textselected');
            containerInput_email.classList.add('input_containerselected');
        });
        
        input_email.addEventListener('focus', () => {
            email.classList.remove('input_textselected');
            containerInput_email.classList.remove('input_containerselected');
        });

// Evento click asunto

        // Agregar clases al h4 y al input cuando se le hace click
        asunto.addEventListener('click', () => {
            const input_asunto = document.getElementById('input_asunto');
            const containerInput_asunto = document.getElementById('containerInput_asunto');
            input_asunto.classList.add('asuntoSelect')
            
            asunto.classList.add('input_textselect');
            input_asunto.focus();
            containerInput_asunto.classList.add('input_containerselect');
        });
    
        input_asunto.addEventListener('blur', () => {
            asunto.classList.add('input_textselected');
            containerInput_asunto.classList.add('input_containerselected');
        });
        
        input_asunto.addEventListener('focus', () => {
            asunto.classList.remove('input_textselected');
            containerInput_asunto.classList.remove('input_containerselected');
        });

// Evento click mensaje

        // Agregar clases al h4 y al input cuando se le hace click
        textArea_mensaje.addEventListener('click', () => {
            const containerInput_mensaje = document.getElementById('containerInput_mensaje');
            
            mensaje.classList.add('input_textselect');
            containerInput_mensaje.classList.add('input_containerselect');
        });
    
        textArea_mensaje.addEventListener('blur', () => {
            mensaje.classList.add('input_textselected');
            containerInput_mensaje.classList.add('input_containerselected');
        });
        
        textArea_mensaje.addEventListener('focus', () => {
            mensaje.classList.remove('input_textselected');
            containerInput_mensaje.classList.remove('input_containerselected');
        });
 
//Evento submit form

    const miFormulario = document.getElementById('miFormulario');
    const mensajeExito = document.getElementById('mensaje-exito');

    miFormulario.addEventListener('submit', (event) => {
         event.preventDefault(); // Evita que el formulario se envíe por defecto

        // Aquí puedes agregar código para enviar el formulario a un servidor si es necesario

         // Mostrar el mensaje de éxito
        mensajeExito.classList.remove('oculto');
    });

    //Boton para ok del submit exitoso
    const btnOcultar = document.getElementById('btnOcultar');

    btnOcultar.addEventListener('click', () => {
        // Ocultar el mensaje de éxito
        mensajeExito.classList.add('oculto');
      });


//Cambio de palabras en el footer
const miParraf = document.getElementById('miParraf');
const maspalabras = ['Develop', 'Created', 'Coded', 'Created'];

let indi = 0;

setInterval(() => {
  const palabrasParrafo = miParraf.textContent.split(' ');
  palabrasParrafo.forEach((palabra, index) => {
    if (palabra === maspalabras[indi]) {
      palabrasParrafo[index] = maspalabras[(indi + 1) % maspalabras.length];
    }
  });
  miParraf.textContent = palabrasParrafo.join(' ');
  indi = (indi + 1) % maspalabras.length;
}, 1000); // Cambiar cada 2 segundos (2000 milisegundos)

//Boton de subir pagina

    const btnRegresar = document.getElementById('btnRegresar');

    btnRegresar.addEventListener('click', () => {
    // Método 1: Usar scrollTo()
    // window.scrollTo({ top: 0, behavior: 'smooth' });

    // Método 2: Usar scrollIntoView()
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });




