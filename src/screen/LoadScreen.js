import React, { useEffect, useContext } from 'react'
import { ScrollView,View, Text, Button, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { Context } from '../context/DataContext'
import { baseUrl } from '../api/baseUrl'


const LoadScreen = ({ navigation }) => {
    const { state,getq,postu,getu } = useContext(Context)
    const email=navigation.getParam('email')

    useEffect(() => {
        getu(email)
        getq()
      
        const listener = navigation.addListener('didFocus', () => {
            getu(email)
            getq()
          })
      
          return () => {
            listener.remove()
          }

    }, [])
 
  const handleuser=()=>{
    //   postu([],[],[],navigation.navigate('mainFlow'))
  
   navigation.navigate('mainFlow')
     
     
  }
    return (
        <ScrollView style={{ top: 40}}>
            <View >
            <Text style={{ textAlign: 'center', fontSize: 30, fontFamily: 'serif' }}>Text we will learn to translate</Text>
            <FlatList data={state.ques} keyExtractor={(i) => i.id}
                renderItem={({ item }) => {
                    return (

                        <ListItem key={item.id} leftAvatar={{ source: { uri: baseUrl + item.picture } }}
                            title={item.word}
                            subtitle={item.tags}
                            bottomDivider />)
                }} />
            <Button title="Press to Learn" onPress={() => handleuser()} />
            </View>
            <View style={{margin:5}}>
            <Button title="Go Back" onPress={() => navigation.navigate('Signin')} />  
            </View>
           
        </ScrollView>
    )
}

export default LoadScreen;