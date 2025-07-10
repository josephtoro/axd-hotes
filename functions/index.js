// Este archivo contiene una función para enviar un correo al crear una nueva reserva
// PERO está desactivado porque requiere el plan Blaze de Firebase

/*
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

// Inicializa la app de Firebase Admin
admin.initializeApp();

// Configura el transporte con Nodemailer (puedes usar Gmail u otro servicio SMTP)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tucorreo@gmail.com", // ← Reemplaza con tu correo real
    pass: "tu_contraseña_de_aplicación" // ← Usa una contraseña de aplicación
  }
});

// Función que se ejecuta automáticamente cuando se crea un nuevo documento en la colección "reservas"
exports.enviarConfirmacionReserva = functions.firestore
  .document("reservas/{reservaId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    // Estructura del correo
    const mailOptions = {
      from: "AXD Hotel <tucorreo@gmail.com>", // ← Debe coincidir con el correo autenticado
      to: data.email,
      subject: "Confirmación de Reserva - AXD Hotel",
      text: `Hola ${data.nombre},

Gracias por reservar con nosotros.

Detalles de tu reserva:
📅 Llegada: ${data.checkin}
📅 Salida: ${data.checkout}
🏨 Habitación: ${data.habitacion}

¡Te esperamos!
AXD Hotel`
    };

    try {
      // En
