import React, { useContext, useState,useEffect } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { Context } from '../context/DataContext'
import { Card } from 'react-native-elements'
import { baseUrl } from '../api/baseUrl'
import Icon from 'react-native-vector-icons/FontAwesome'


const MainScreen = ({ navigation }) => {
    const { state:{b1,b2,b3,ques,id,email},putu,setb1,setb2,setb3 } = useContext(Context)
    const [card, setcard] = useState('')
   console.log("b1",b1)
    const [qn, setqn] = useState(b1[0])
 
    
    const [iter_v, setiter_v] = useState(1)
    
    const [g_index, setg_index] = useState(0)

    const [comb, setcomb] = useState(b1)

    const s=ques
    

    
    const array_c_manipulation=(id)=>{
      if(b2.includes(id)){
        //   b2=b2.filter((i)=>i!==id)
        setb2(b2.filter((i)=>i!==id))
          setb3(b3.concat(id))
       } 
       if(b1.includes(id)){
        // b1=b1.filter((i)=>i!==id)
        setb1(b1.filter((i)=>i!==id))
        setb2(b2.concat(id))
       } 
}
    const array_w_manipulation=(id)=>{
        if(b2.includes(id)){
            // b2=b2.filter((i)=>i!==id)
            setb2(b2.filter(i=>i!==id))
            // b1.push(id)
            setb1(b1.concat(id))
        }
        if(b3.includes(id)){
            // b3=b3.filter((i)=>i!==id)
            setb3(b3.filter((i)=>i!==id))
            setb1(b1.concat(id))
           } 

    }
const handlecorrect=(id)=>{
        array_c_manipulation(id)
        setcard('')
    }

const handlewrong=(id)=>{
         array_w_manipulation(id)
         setcard('')
    }   

 


    

 
console.log('-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-==-=-=-=-=')
console.log("itr_v",iter_v)
console.log("comb",comb)
console.log("g_index",g_index)
console.log('comb.length',comb.length)

// console.log("qn",qn)
console.log("b1",b1)
console.log("b2",b2)
console.log("b3",b3)
// console.log("comb[g_index]",comb[g_index])                         


 const handleq=()=>{
   
    setcard('')
    setg_index(g_index+1)
    
if(g_index===comb.length)
      { // iter_v+=1
        setiter_v(iter_v+1)
        let k=iter_v+1
 console.log("itr_v 2nd",iter_v)
      if(k%2===0){
            setcomb(b1.concat(b2))
        }
       else if(k%3===0){
            setcomb(b1.concat(b3))
        }
       else if(k%2===0&&k%3){
            setcomb(b1.concat(b2).concat(b3))
        }
        else{
            setcomb(b1)
        }
       
        //  g_index=0
        setg_index(0)
        
       
    }

 //    qn<4?setqn(qn+1):setqn(qn-4)
         
        if(g_index<5){
         setqn(comb[g_index])
        }
       
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
        console.log("bp.id",bp.id)
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
                 <View style={{marginBottom:10,flexDirection:'column',justifyContent:'space-between',alignSelf:'center'}}>
                 <Button title="Go to next question"  onPress={()=> handleq()}/> 
                 </View>
                 <View style={{flexDirection:'column',justifyContent:'space-between',alignSelf:'center'}} >
                 <Button title="Save Progress"  onPress={()=>putu(b1,b2,b3,id,email)}/>
                 </View>
                 
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

MainScreen.navigationOptions=()=>{
    return{title:"Main",fontSize:30,
    tabBarIcon:<Icon name="home" size={30} color="#900" />
  
    }
  }
export default MainScreen;