// Importa funciones básicas de Firebase Functions
const functions = require("firebase-functions");

// Importa el SDK de administrador para interactuar con Firestore
const admin = require("firebase-admin");

// Inicializa Firebase Admin (necesario para acceder a Firestore desde funciones)
admin.initializeApp();

// ----------- 👇 COMIENZA SECCIÓN OPCIONAL (INACTIVA) ------------
// Si quieres usar Nodemailer en el futuro, descomenta estas líneas
// const nodemailer = require("nodemailer");

// Configuración del servicio de correo (solo si decides usarlo luego)
// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "tucorreo@gmail.com",            // ← tu correo
//     pass: "tu_contraseña_de_aplicación"    // ← contraseña generada desde Gmail (App Password)
//   }
// });

// Función que se activa al crear una reserva en Firestore
// exports.enviarConfirmacionReserva = functions.firestore
//   .document("reservas/{reservaId}")
//   .onCreate(async (snap, context) => {
//     const data = snap.data();

//     const mailOptions = {
//       from: "AXD Hotel <tucorreo@gmail.com>",
//       to: data.email,
//       subject: "Confirmación de Reserva - AXD Hotel",
//       text: `Hola ${data.nombre},\n\nGracias por reservar con nosotros.\n\nDetalles:\n📅 Llegada: ${data.checkin}\n📅 Salida: ${data.checkout}\n🏨 Habitación: ${data.habitacion}\n\n¡Te esperamos!\nAXD Hotel`
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       console.log(" Correo enviado a:", data.email);
//     } catch (error) {
//       console.error(" Error al enviar correo:", error);
//     }
//   });

// Puedes agregar más funciones aquí si deseas
// Ejemplo de función activa (comentada):
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hola desde Firebase Functions!");
// });
