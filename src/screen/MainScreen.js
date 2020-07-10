import React, { useContext, useState } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/DataContext'
import { Card } from 'react-native-elements'
import { baseUrl } from '../api/baseUrl'


const MainScreen = ({ navigation }) => {
    const { state } = useContext(Context)
    const [card, setcard] = useState('')
    const [qn, setqn] = useState(b1[0])

    const s=state
    let b1=[],b2=[],b3=[],comb,iter_v,g_index=0

    const array_c_manipulation=(id)=>{
      if(b2.includes(id)){
          b2=b2.filter((i)=>i!==id)
          b3.push(id)
       } 
       if(b1.includes(id)){
        b1=b1.filter((i)=>i!==id)
        b2.push(id)
       } 
}
    const array_w_manipulation=(id)=>{
        if(b2.includes(id)){
            b2=b2.filter((i)=>i!==id)
            b1.push(id)
        }
        if(b3.includes(id)){
            b3=b3.filter((i)=>i!==id)
            b1.push(id)
           } 

    }

    const handlecorrect=(id)=>{
        array_c_manipulation(id)
        setcard('')
    }
    const handlewrong=()=>{
         array_w_manipulation(id)
    }
 const array_istate=()=>{
        for(let i=0;i<state.length;i++)
         {  b1[i]=i
           }
         iter_v=1
    }
 const array_provider=(iter_v)=>{
        let final_a

        if(iter_v%2===0){
            final_a=b1.concat(b2)
           return final_a
        }
        else if (iter_v%3===0){
            final_a=b1.concat(b3)
            return final_a
        }
        else if(iter_v%2===0 && iter_v%3===0){
            final_a=b1.concat(b2)
            final_a=final_a.concat(b3)
            return final_a
        }
        else{
            return b1
        }
        
    }

 const handleq=()=>{
    comb=array_provider(iter_v)
    
     g_index+=1
       setcard('')

     setqn(comb[g_index])   
    //    qn<4?setqn(qn+1):setqn(qn-4)
       console.log(qn)
    }


    if (s ===[]) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>Leitner FlashCard Game</Text>
                <Button title="got to Start" onPress={() => navigation.navigate('Load')} />
            </View>
        )
    }
    else {
        const bp = s.find((bl) => bl.id === qn)
        return (
            <View style={{ flex: 1 }}>
                <Text style={styles.header}>Leitner FlashCard Game</Text>
                <Card featuredTitle="Translate to German"
                    featuredSubtitle="Tap on word to know the answer"
                    image={{ uri: baseUrl + bp.picture }} >
                    <TouchableOpacity onPress={() => { setcard(bp.translate) }}>
                        <Text style={styles.word}> {bp.word}:{card} </Text>
                    </TouchableOpacity>
                <View style={{flexDirection:'row',marginBottom:10,justifyContent:'space-between'}} >
                    <Button title="press if you knew it" 
                    onPress={()=>handlecorrect(bp.id)}/>
                    <Button title="press if you didn't" 
                    onPress={()=>handlewrong(bp.id)}/>
                    
                 </View>
                 <Button title="Go to next question"  onPress={()=> handleq()}/>
                </Card>
                
                <Button title="got to Start" onPress={() => navigation.navigate('Load')} />
          
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        color: 'white', borderRadius: 6, shadowColor: "black", shadowOpacity: 0.6,
        backgroundColor: '#002152', fontSize: 40, top: 30, textAlign: 'center', fontWeight: 'bold',
        padding: 30, justifyContent: 'center'
    },
    word: { fontSize: 20, margin: 10, fontStyle: 'italic' }
})
export default MainScreen;