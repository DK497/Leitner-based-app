import React, { useEffect, useContext } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
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
        <View style={{ top: 40 }}>
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
            <View style={{margin:20}}>
            <Button title="Go Back" onPress={() => navigation.navigate('Signin')} />  
            </View>
           
        </View>
    )
}

export default LoadScreen;