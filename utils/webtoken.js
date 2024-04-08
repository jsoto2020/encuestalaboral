import jwt from 'jsonwebtoken';
const secretKey = 'marmotech';

export function encriptarParametro(parametro) {
  const token = jwt.sign({ parametro }, secretKey);
  return token;
}

export function desencriptarParametro(tokenEncriptado) {
  try {
    const parametro = jwt.verify(tokenEncriptado, secretKey);
    return parametro;
  } catch (error) {
    // Manejo de errores si el JWT no es válido
    console.error('Error al desencriptar el parámetro:', error);
    return null;
  }
}
