// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIONES A FUNCIONES

/*Comprobación de funcionamiento
    window.alert("Funciona!");
    alert("Funciona!");*/




//VARIABLES ---------------------->
const buttonAskInfo = document.querySelector('#buttonAskInfo')
const usersContainer = document.querySelector('#usersContainer')


//Variable usuario mostrado
const id = 10; //Se puede dinamizar (Math random?)
let name;
let email;

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





//EVENTOS ----------------------------------------------------------->
buttonAskInfo.addEventListener("click", drawUserInfo)



//FUNCIONES --------------------------------------------------------->

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




//INVOCACIONES ------------------------------------------------------>

getUserName(id)
  .then((nameResult) => { 
    name = nameResult;//Devuelve el nombre
    return getUserEmail(id); //Este return inicia la siguiente promesa
  })

  .then((emailResult) => {
    email = emailResult;//Devuelve el email
    console.log(
      `El alumno con id ${id} se llama ${name} y su email es ${email}`//Muestra el mensaje en consola
    );
  })
  
  .catch((error) => {
    console.log(`ERROR: ${error}`);
  });

