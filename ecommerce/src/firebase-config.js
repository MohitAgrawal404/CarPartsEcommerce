// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5h7Hf17SUHHBpVs0llmc05JQdHKvOuXA",
  authDomain: "ecommerce-5e06f.firebaseapp.com",
  projectId: "ecommerce-5e06f",
  storageBucket: "ecommerce-5e06f.appspot.com",
  messagingSenderId: "873446370668",
  appId: "1:873446370668:web:4674f922dff59c27c4d749",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();

// const items = [
//     {
//         "Name": 'Rear View Mirror Acura MDX 2022',
//         "Description": 'A high quality interior rear view mirror',
//         "Price": '15.00',
//         "Company": 'Acura',
//         "Model": 'MDX',
//         "Year": '2022',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',
//
//     },
//     {
//         "Name": "Front Bumper Acura MDX 2022",
//         "Description": 'A high quality front bumper in black',
//         "Price": '115.00',
//         "Company": 'Acura',
//         "Model": 'MDX',
//         "Year": '2022',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',

//     },
//     {
//         "Name": "Front Bumper Porche 911 Carrera",
//         "Description": 'A high quality front bumper in black',
//         "Price": '1113.00',
//         "Company": 'Porshe',
//         "Model": '911 Carrera',
//         "Year": '2021',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',

//     },
//     {
//         "Name": "Series 252-5183 Wheel, 15 in. Diameter, 10 in. Width, 6 x 5.5 in",
//         "Description": "Enthusiasts who want an affordable, great-looking wheel that won't let them down out on the trail choose Pro Comp's Series 252 steel wheels. They're available in 15- or 16-inch diameters, in 8- or 10-inch widths, in 5- or 6-bolt patterns are finished in gloss or flat black. ",
//         "Price": '215.00',
//         "Company": 'BMW',
//         "Model": 'M3',
//         "Year": '2020',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',
//     },
//     {
//         "Name": 'Exhaust Pipe BMW M3',
//         "Description": 'Titanium Exhaust pipe built to last. Warranty for 3 years after sell date',
//         "Price": '600.00',
//         "Company": 'BMW',
//         "Model": 'M3',
//         "Year": '2020',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',
//     },
//     {
//         "Name": "Headlights Porche 911 Carrera",
//         "Description": 'Porche 911 Carrera front Headlight ',
//         "Price": '2300.00',
//         "Company": 'Porche',
//         "Model": '911 Carrera',
//         "Year": '2021',
//         "Photo": "https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c",
//     },
//     {
//         "Name": "Front Bumper Honda CRV 2018",
//         "Description": 'A high quality front bumper for the Honda CRV',
//         "Price": '503.00',
//         "Company": 'Honda',
//         "Model": 'CR-V',
//         "Year": '2018',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',
//     },
//     {
//         "Name": "Honda Rear Axles",
//         "Description": "Similar to OEM specs but re-engineered to provide the end user with not only a better product but a stronger and more durable CV axle.",
//         "Price": '450.00',
//         "Company": 'Honda',
//         "Model": 'CR-V',
//         "Year": '2018',
//         "Photo": 'https://firebasestorage.googleapis.com/v0/b/ecommerce-5e06f.appspot.com/o/bmw-m3-touring-with-m-performance-parts.jpg?alt=media&token=b8d8f2fe-1b2f-4d65-b6ee-1d30cd7d237c',
//     }
// ];

// items.forEach(function(obj){
//     db.collection("Parts").add({
//         Name: obj.Name,
//         Description: obj.Description,
//         Price: obj.Price,
//         Company: obj.Company,
//         Model: obj.Model,
//         Year: obj.Year,
//         Photo: obj.Photo,
//     }).then(function(docRef){
//         console.log("Document Writen: " + docRef.Name);
//     }).catch(function(error){
//         console.log("Error adding document: "+ error);
//     });
// });


