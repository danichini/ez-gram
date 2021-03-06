// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { blur } from 'redux-form';
import SeleccionarImagen from '../SeleccionarImagen';
import {
  actionCargarPublicacion,
  actionSubirPublicacion,
} from '../../Store/ACCIONES';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
  },
  imagen: {
    flex: 2,
  },
  texto: {
    flex: 2,
  },
});

// create a component
class SeleccionarGaleria extends Component {
  render() {
    const { cargarImagen, imagen, subirPublicacion } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.imagen}>
          <SeleccionarImagen
            imagen={imagen.imagen}
            cargar={cargarImagen}
            radius
          />
        </View>
        <View style={styles.texto}>
          <SeleccionarGaleriaForm
            imagen={imagen.imagen}
            registro={(values) => {
              subirPublicacion(values);
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  imagen: state.reducerImagenPublicacion,
});

const mapDispatchToProps = dispatch => ({
  cargarImagen: (imagen) => {
    dispatch(actionCargarPublicacion(imagen));
    dispatch(blur('SeleccionarGaleriaForm', 'imagen', Date.now()));
  },
  subirPublicacion: (values) => {
    dispatch(actionSubirPublicacion(values));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
