import React,{useState} from 'react'
import {Text,Input,Button  } from 'react-native-elements';



const AuthForm = ({headerText,onSubmit,sbuttontext}) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    
    return (
    <>
        
           <Text h3>{headerText}</Text>
          
            <Input label="Email" autoCapitalize="none" autoCorrect={false}
                value={email} onChangeText={(ne) => setemail(ne)} />
         
            <Input secureTextEntry={true} label="Password" autoCapitalize="none" 
                autoCorrect={false}
                value={password} onChangeText={(np) => setpassword(np)} />
           
           <Button title={sbuttontext} 
                onPress={() => onSubmit({ email, password })} />
            
    </>
        
    )
}

export default AuthForm;