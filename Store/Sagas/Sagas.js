import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroEnFirebase = values => autenticacion
  .createUserWithEmailAndPassword(values.correo, values.password)
  .then(success => success);

const registroEnBaseDeDatos = ({ uid, email, nombre }) => baseDeDatos
  .ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });

function* sagaRegistro(values) {
  try {
    console.log('values de registro', values);
    const registro = yield call(registroEnFirebase, values.datos);
    console.log('registro', registro);
    // uid, email, nombre
    const { user: { email, uid } } = registro;
    const { datos: { nombre } } = values;
    yield call(registroEnBaseDeDatos, { uid, email, nombre });
  } catch (error) {
    console.log(error);
  }
}

const loginEnFirebase = ({ email, password }) => autenticacion
  .signInWithEmailAndPassword(email, password)
  .then(success => success);

function* sagaLogin(values) {
  try {
    console.log(values);
    const resultado = yield call(loginEnFirebase, values.datos);
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

export default function* funcionPrimaria() {
  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  console.log('funcion generadora');
}