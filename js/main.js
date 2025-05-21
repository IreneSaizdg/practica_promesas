// VARIABLES -> EVENTOS -> FUNCIONES -> INVOCACIONES A FUNCIONES

/*Comprobación de funcionamiento
    window.alert("Funciona!");
    alert("Funciona!");*/




//VARIABLES ---------------------->
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


//Variable Usuario Mostrado
const id = 5; //Se puede dinamizar (Math random?)
let name;
let email;


//EVENTOS ----------------------------------------------------------->
buttonAskInfo.addEventListener("click", drawUserInfo)



//FUNCIONES --------------------------------------------------------->

//Función-promesa para conseguir la info de usuario (después pintarla)
function getUserInfo(){
    //reoge toda la info (getUserName & getUserEmail)
}

//Función-promesa para conseguir el nombre
function getUserName(id){
    console.log("Nombre de usuario")
};


//Función-promesa para conseguir el email
function getUserEmail(id){
    console.log("Email de usuario")
}



//Función pintar información de usuario
function drawUserInfo(){
    console.log("Esto mostrará los datos de usuario al clickar")
}



//INVOCACIONES ------------------------------------------------------>



