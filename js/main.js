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
function getRandomUserId() {
  const ids = arrayUsersName.map(user => user.id);
  const randomIndex = Math.floor(Math.random() * ids.length);
  return ids[randomIndex];
}




//Funciones para conseguir nombre y email --------------------------------->
//Función-promesa para conseguir el nombre
function getUserName(id){
    const name = arrayUsersName.find((user) => user.id === id)?.name;
    return new Promise((resolve, reject) => {
        if (name){resolve(name)}        
        else{reject(`El nombre del usuario con id ${id} es desconocido.`)}
    })
};




//Función-promesa para conseguir el email
function getUserEmail(id){
    const email = arrayUsersInfo.find((user) => user.id === id)?.email;


    return new Promise((resolve, reject) => {
        if (email){resolve(email)}
        else{reject(`El email del usuario con id ${id} es desconocido`)}
    })
}






//Funciones para crear y pintar la card --------------------------------->
//Función para crear la card
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
    liName.textContent = "Cargando nombre..."


    const liEmail = document.createElement('LI');
    liEmail.classList.add("userLi")
    liEmail.textContent = "Cargando email..."


    //Colocación
    usersContainer.append(userCard)
    userCard.append(ulUserInfo)
    ulUserInfo.append(liName, liEmail)


    return {liName, liEmail} //Desestructuración del objeto
}






//Función para pintar la card con el contenido del array
function drawUserInfo(id) {
  usersContainer.innerHTML = "";
  const { liName, liEmail } = createUserCard();




    setTimeout(() => {
        getUserName(id)
            .then((nameResult) => {
            name = nameResult;
            liName.textContent = `Nombre: ${name}`;
            })
            .catch((error) => {
            liName.textContent = "Nombre no disponible";
            console.error(`${error}`);
            });


        getUserEmail(id)
            .then((emailResult) => {
            email = emailResult;
            liEmail.textContent = `Email: ${email}`;
            })
            .catch((error) => {
            liEmail.textContent = "Email: no disponible";
            console.error(`${error}`);
            });


    },2000); //añade 2 segundos (2000ms) de retardo.
}
