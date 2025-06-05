import React from 'react';
import {Button, ScrollView, StatusBar, View, Alert} from 'react-native';

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
    <View>
      <StatusBar />
      <ScrollView>
        <Button title="Récupérer le TODO" onPress={handleFetchTodo} />
      </ScrollView>
    </View>
  );
}

export default App;
