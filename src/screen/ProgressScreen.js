import React,{useContext} from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Context } from '../context/DataContext'

const ProgressScreen = () => {
    const { state:{b1,b2,b3} } = useContext(Context)
    return (
        <View style={{top:20}}>
            <Text style={{padding:20,fontSize:40,textAlign:'center',color:'white',backgroundColor:'#002152'}}>Progress</Text>
    <Text style={styles.t}>Box1(Dificult) contents id:{b1.map(i=><Text style={{fontStyle:'italic',fontFamily:'serif'}}>{i},</Text>)}</Text>
    <Text style={styles.t}>Box2(Medium) contents id:{b2.map(i=><Text style={{fontStyle:'italic',fontFamily:'serif'}}>{i},</Text>)}</Text>
    <Text style={styles.t}>Box3(Easy) contents id:{b3.map(i=><Text style={{fontStyle:'italic',fontFamily:'serif'}}>{i},</Text>)}</Text>

        </View>
    )
}
const styles=StyleSheet.create({
    t:{fontSize:40,marginBottom:20,fontWeight:'bold',textAlign:'center'

    }
})
export default ProgressScreen;