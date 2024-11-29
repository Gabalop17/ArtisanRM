<?php
// Configuración de la conexión
$servername = "localhost"; // Servidor, generalmente "localhost" si estás trabajando en local
$username = ""; // Usuario de la base de datos
$password = ""; // Contraseña de la base de datos
$database = "arm"; // Nombre de la base de datos

// Crear la conexión
$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
echo "Conexión exitosa";

// Cerrar la conexión (opcional en algunos casos)
$conn->close();
?>

