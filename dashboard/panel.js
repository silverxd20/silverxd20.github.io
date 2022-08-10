import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js"
import { collection, getDocs, addDoc, doc } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-firestore.js";

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
let infoProductosJson = {
    "infoProducts": infoProductosArray
}

leerDatos()

document.getElementById('btnAgregar').onclick = function () {
    console.log("ejecutando")
    //leerDatos()
}

async function leerDatos() {
    // Initialize Firebase
    // const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const colRef = collection(db, "data");
    const docsSnap = await getDocs(colRef);
    docsSnap.forEach(doc => {
        console.log(doc.data().infoProducts);

        //agrega las categorias al al dropdown
        for (const key in doc.data().tipo) {
            const element = doc.data().tipo[key];
            let daySelect = document.getElementById('selectCategoria');
            daySelect.options[daySelect.options.length] = new Option(element, 'Value1');
        }

        //guarda el json de los productos agregados
        for (const key in doc.data().infoProducts) {
            console.log(doc.data().infoProducts[key])
            //infoProductos = doc.data().infoProducts[key]
            infoProductosArray.push(doc.data().infoProducts)
        }
        //infoProductosArray.push(doc.data().infoProducts)
    })
    console.log(infoProductosArray)
}

async function agregarProducto() {
    const db = getFirestore(app);
    const dbRef = collection(db, "data");

    const docRef = firebase.firestore().collection("data").doc("datos")

}