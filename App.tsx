import React from 'react';
import {
  Button,
  ScrollView,
  StatusBar,
  View,
  Alert,
  StyleSheet,
} from 'react-native';

function App(): React.JSX.Element {
  const handleFetchTodo = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Statut HTTP ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        Alert.alert(
          'Succès',
          `TODO #${json.id} :\n${json.title}\n\nComplété : ${json.completed}`,
        );
        console.log(json);
      })
      .catch(error => {
        Alert.alert(
          'Erreur',
          `Impossible de récupérer le TODO :\n${error.message}`,
        );
        console.error('Erreur lors du fetch :', error);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Button title="Récupérer le TODO" onPress={handleFetchTodo} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Prend tout l'écran
  },
  scrollContent: {
    flexGrow: 1, // Permet au ScrollView de prendre toute la hauteur disponible
    justifyContent: 'center', // Centre verticalement le contenu
    alignItems: 'center', // Centre horizontalement le contenu
  },
});

export default App;
