import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Navegacion from './Componentes/Navegacion';
import ProviderAlumno from './Provider/ProviderAlumno';

export default function App() {
  return (
    <ProviderAlumno>
      <Navegacion></Navegacion>
    </ProviderAlumno>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
