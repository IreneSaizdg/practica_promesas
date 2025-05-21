// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIONES A FUNCIONES


/*Comprobación de funcionamiento
    window.alert("Funciona!");
    alert("Funciona!");*/







//VARIABLES ---------------------------------------------------------------------------------->
const buttonAskInfo = document.querySelector('#buttonAskInfo')
const usersContainer = document.querySelector('#usersContainer')


//Array usuarios
const arrayUsersName =[
    { id: 1, name: "Pepe" },
    { id: 2, name: "Ana" },
    { id: 3, name: "Juan" },
    { id: 4, name: "Pepi" },
    { id: 5, name: "bea" },
]

const arrayUsersInfo =[
    { id: 1, email: "pepe@email.com" },
    { id: 2, email: "ana@email.com" },
    { id: 5, email: "bea@email.com" },
]

//Variable usuario mostrado
const id = getRandomUserId(); //Dinamiza el index volviéndolo randomn.





//EVENTOS ----------------------------------------------------------------------------------->
//Evento para generar la card al hacer click en el botón información del usuario
buttonAskInfo.addEventListener("click", () => { //recibe una función con varias instrucciones (otras funciones).
  const id = getRandomUserId();// Ofrece un id aleatorio de entre los existentes en cada click.
  drawUserInfo(id); // Acciona la función tomando el argumento id.
});





//FUNCIONES --------------------------------------------------------------------------------->
//Función generar un index randomn
/**
 * Function for getting a random id between the ones that are inside the arrayUserName objects. 
 * @returns {number} a random ID from arrayUserName's objects. 
 */
function getRandomUserId() {
  const ids = arrayUsersName.map((user) => user.id); //Crea un nuevo array con todos los ids de los objetos. 
  const randomIndex = Math.floor(Math.random() * ids.length); //Genera un número aleatorio mediante diferentes métodos.
  /* Math.random -> elige un número entre el 0-1 que se multiplica 
  .length() -> por la longitud del anterior array 
  Math.floor() -> y después redondea ese númeroa la baja.  */
  return ids[randomIndex]; //Accede al array "ids" y aplica e conjunto de métodos para sacar un index aleatorio. 
 }



//Funciones para conseguir nombre y email --------------------------------->

//Función-promesa para conseguir el nombre
/**
 * Function that founds a user's name based on his id in the arrayUserName objects.
 * It returns a promise that: 
 *  - Resolve: with the name of the user if it finds it
 *  - Reject: error message if the name is not found.
 * @param {number} id an id from arrayUserName's objects (randomized in this case).
 * @returns {Promise<string>} that solves with the user name. If it exists returns the name, else, an error message.  
 */
function getUserName(id){
    const name = arrayUsersName.find((user) => user.id === id)?.name; // busca en el array, un objeto con un id igual al recibido.
    //Operador ?.name --> devuelve el valor de name si el objeto existe (no es undefined ni null) o undefined si no. 
    return new Promise((resolve, reject) => {
        if (name){resolve(name)} //si el nombre existe se resuelve la promesa con el nombre        
        else{reject(`El nombre del usuario con id ${id} es desconocido.`)}//si no, rechaza la promesa y da un mensaje de error
    })
};


//Función-promesa para conseguir el email
/**
 * Function that founds a user's email based on his id in the arrayUserInfo objects.
 * It returns a promise that: 
 *  - Resolve: with the info of the user if it finds it
 *  - Reject: error message if the info is not found.
 * @param {number} id an id from arrayUserInfo's objects (randomized in this case).
 * @returns {Promise<string>} that solves with the user's info. If it exists returns the info, else, an error message.  
 */
function getUserEmail(id){
    const email = arrayUsersInfo.find((user) => user.id === id)?.email;
   
    return new Promise((resolve, reject) => {
        if (email){resolve(email)}
        else{reject(`El email del usuario con id ${id} es desconocido`)}
    })
}



//Funciones para crear y pintar la card --------------------------------->
//Función para crear la card
/**
 * Creates a user card with HTML elements and user information. 
 * It has provisional charging texts. The card inserts in the global container "usersContainer"
 * @returns {Object} An object with two properties: 
 *  - liName {HTMLLIElement}: `<li>` element where the user's name will show.
 *  - liEmail {HTMLLIElement}: `<li>` element where the user's email will show.
 */
function createUserCard(){
    //Card de usuario
    const userCard = document.createElement('DIV');
    userCard.classList.add("userCard")
    //Lista de datos
    const ulUserInfo = document.createElement('UL');
    ulUserInfo.classList.add("userInfo")
    //Datos
    const liName = document.createElement('LI');
    liName.classList.add("userLi")
    liName.textContent = "Cargando nombre..." //Mensaje que aparece durante los 2 segundos de espera antes de pintar la info
    
    const liEmail = document.createElement('LI');
    liEmail.classList.add("userLi")
    liEmail.textContent = "Cargando email..."

    //Colocación
    usersContainer.append(userCard)
    userCard.append(ulUserInfo)
    ulUserInfo.append(liName, liEmail)

    return {liName, liEmail} //Desestructuración del objeto
    /* const { liName, liEmail } = createUserCard();
        liName.textContent = "nombreUser";
        liEmail.textContent = "emailUser";*/
}


//Función para pintar la card con el contenido del array y añadir el retardo
/**
 * Function for drawing the card. 
 * First empties the content of the user container
 * After a retard of 2 seconds obtains and draws the card.
 * In each click updates with a random user. 
 * @param {number} id an id from arrayUserName's objects (randomized in this case).
 */
function drawUserInfo(id) {
    usersContainer.innerHTML = ""; //vacía el html del contenedor antes de nada
    const { liName, liEmail } = createUserCard(); //Llama a la función para que cree la card

    setTimeout(() => { //Añade el retardo incluyendo lo que hará después como instrucciones de una función anónima. 
        getUserName(id)// Invoca la función-promesa para obtener el nombre
            .then((nameResult) => {//resolve
            name = nameResult;
            liName.textContent = `Nombre: ${name}`;
            })
            .catch((error) => {//reject
            liName.textContent = "Nombre no disponible";
            console.error(`${error}`);//coje el error de la función getUserName
            });

        getUserEmail(id)// Invoca la función-promesa para obtener el email
            .then((emailResult) => {//resolve
            email = emailResult;
            liEmail.textContent = `Email: ${email}`;
            })
            .catch((error) => {//reject
            liEmail.textContent = "Email: no disponible";
            console.error(`${error}`);//coje el error de la función getUserEmail
            });

    },2000); //añade 2 segundos (2000ms) de retardo.
}





//INVOCACIONES --------------------------------------------------------------------------------->