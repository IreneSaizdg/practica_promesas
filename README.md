## Práctica Promesas

### Enunciado del Ejercicio

**Ejercicio: Simulador de Consulta a API**

Imagina que estás creando una página web que consulta una API ficticia para obtener datos sobre usuarios. Tu tarea es crear una simulación de consulta a una API utilizando promesas en JavaScript. La página debe permitir al usuario hacer clic en un botón para obtener la información del usuario, y mostrar los datos en la página.

**Características y Requerimientos:**

1. **HTML:**

   - Un contenedor para mostrar la información del usuario.
   - Un botón que, al hacer clic, solicita los datos del usuario.

2. **CSS:**

   - Agrega estilos básicos para el contenedor y el botón para que se vea bien.

3. **JavaScript:**
   - Crea una función que simule una llamada a una API y devuelva una promesa.
   - La promesa debe resolverse después de un retraso simulado (por ejemplo, 2 segundos).
   - La promesa debe resolver con un objeto de usuario ficticio (nombre, correo electrónico).
   - Maneja la promesa usando `.then()` y `.catch()` para mostrar los datos en el contenedor o mostrar un mensaje de error en caso de fallo.