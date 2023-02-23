import React, { useState, useEffect }  from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";

const movieURL = "https://reactnative.dev/movies.json";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);  
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  // const [response, setResponse] = useState();

  // const debugging = () => {
  //   console.log(response);
  //   return <Text>Data</Text>
  // }

    useEffect(() => {
    fetch(movieURL)
      .then(response => response.json())
      .then((json) => {
        setData(json.movies);
        setTitle(json.title); 
        setDescription(json.description);
        // setResponse(json);
      })
      .catch((error) => alert(error))
      .finally(setLoading(false))            
  },[])


  return (
    <SafeAreaView style={styles.container}> 
      {isLoading ? 
        (<ActivityIndicator /> )
        :
        ( 
          <View>
             <Text style={styles.title}>{title}</Text>
             <FlatList 
              data={data}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => (
              <Text style={styles.movieText}>
              {item.title}
              {item.releaseYear}
              </Text>
          )}      
          />
          <Text style={styles.description}>{description}</Text>
          </View>
       
          )}     
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
    marginTop: 48
  },
  movieText: {
    fontSize: 26,
    fontWeight: "200"
  },
  title: {
    fontSize: 32,
    fontWeight: "bold"
  },
  description: {
    textAlign: "center",
    marginBottom: 18,
    // fontSize: 26,
    fontWeight: "200",
    color: "green"
  },


});

export default App; 