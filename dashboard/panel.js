import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"
import { collection, getDocs, addDoc, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4a33fFr6SgUAXjZ6FeFB_XDGL6SKuCuY",
    authDomain: "wowprices-74a82.firebaseapp.com",
    projectId: "wowprices-74a82",
    storageBucket: "wowprices-74a82.appspot.com",
    messagingSenderId: "380944707410",
    appId: "1:380944707410:web:2f229f9fbf99d96e39148b"
};

const app = initializeApp(firebaseConfig);

let infoProductosArray = []
let campoUrl = document.getElementById("campoUrl")
let campoTraduccion = document.getElementById("campoTraduccion")
let campoUnicoNombre = document.getElementById("campoUnicoNombre")
let campoCategoria = document.getElementById("campoCategoria")
let selectCategoria = document.getElementById("selectCategoria")
let selectExpansion = document.getElementById("selectExpansion")

leerDatos()

document.getElementById('btnAgregar').onclick = function () {
    console.log("ejecutando pues vale")
    agregarProducto()
}

async function leerDatos() {
    // Inicializa Firebase si no esta inicializado
    if (!firebase.apps.length) {
        const app = initializeApp(firebaseConfig);
    }
    const db = getFirestore(app);
    const colRef = collection(db, "data");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
        console.log(doc.data().infoProducts);

        //agrega las categorias al al dropdown
        for (const key in doc.data().tipo) {
            const element = doc.data().tipo[key];
            let daySelect = document.getElementById('selectCategoria');
            daySelect.options[daySelect.options.length] = new Option(element, element);
        }

        //guarda el json de los productos agregados
        for (const key in doc.data().infoProducts) {
            //console.log(doc.data().infoProducts[key])
            infoProductosArray.push(doc.data().infoProducts[key])
        }
        //infoProductosArray.push(doc.data().infoProducts)
    })
    console.log(infoProductosArray)
}

async function agregarProducto() {
    // Inicializa Firebase si no esta inicializado
    if (!firebase.apps.length) {
        const app = initializeApp(firebaseConfig);
    }
    let indicadorDeEnvio = true
    let nombreUnicoTitulo = campoUnicoNombre.value
    const db = getFirestore(app);

    //Comprobamos el url del producto ya esta en la base de datos
    for (let index = 0; index < infoProductosArray.length; index++) {
        if (infoProductosArray[index].url == campoUrl.value) {
            indicadorDeEnvio = false
            console.log("este producto ya existe, indidador es: " + indicadorDeEnvio)
            alert("Este producto ya EXISTE!")
            break
        }
    }

    if (indicadorDeEnvio == true) {
        console.log("campoNombre: " + campoUnicoNombre.value)
        console.log("campoUrl: " + campoUrl.value)
        console.log("campoTraduccion: " + campoTraduccion.value)

        //Antes de enviar comprueba si todos los campos estan llenos
        if (campoUrl.value == "" || campoTraduccion.value == "" || campoUnicoNombre.value == "" ) {
            alert("Hay campos vacíos, debe llenarlos todos antes de enviar.")

        } else {

            //Si no existen el url del producto se procede a enviar el nuevo producto
            await setDoc(doc(db, "data", "datos"), {
                "infoProducts": {
                    [nombreUnicoTitulo]: {
                        "url": campoUrl.value,
                        "traduccion": campoTraduccion.value,
                        "categoria": selectCategoria.value,
                        "nombreUnico": campoUnicoNombre.value,
                        "expansion": selectExpansion.value
                    }
                }
            }, { merge: true }).then(resp => {
                console.log("Se han guardado los datos")
                //Luego de guardar los datos limpiamos los campos de texto
                campoUrl.value = ""
                campoTraduccion.value = ""
                campoUnicoNombre.value = ""
                alert("Agregado correctamente!")
            }).catch(function (reason) {
                console.log(reason)
                alert("Hay campos vacíos, debe llenarlos todos antes de enviar.")
            });
        }

    }


    //Luego de guardar los datos limpiamos
}