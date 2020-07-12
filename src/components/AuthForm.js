import React,{useState} from 'react'
import {Text,Input,Button  } from 'react-native-elements';



const AuthForm = ({headerText,onSubmit,sbuttontext}) => {
    const [email, setemail] = useState('')
   
    return (
    <>
        
           <Text h3>{headerText}</Text>
          
            <Input label="Email" autoCapitalize="none" autoCorrect={false}
                value={email} onChangeText={(ne) => setemail(ne)} />
         
            <Button title={sbuttontext} 
                onPress={() => onSubmit(email)} />
            
    </>
        
    )
}

export default AuthForm;