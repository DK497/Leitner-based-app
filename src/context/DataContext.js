import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const dataReducer=(state,action)=>{
        switch(action.type)
        {   case 'b1':{
            return{...state,b1:action.payload}
        }
        case 'b2':{
            return{...state,b2:action.payload}
        }
        case 'b3':{
            return{...state,b3:action.payload}
        }
            case 'get_q':
             { return {...state,ques:action.payload}}
            case 'get_u':{
                return {...state,b1:action.payload.b1,b2:action.payload.b2,b3:action.payload.b3}
            }
            default:{
                return state
            }
        }
}
const setb1=(dispatch)=>{
    return(k)=>{
        dispatch({type:'b1',payload:k})

    }
}
const setb2=(dispatch)=>{
    return(k)=>{
        dispatch({type:'b2',payload:k})
    }
}
const setb3=(dispatch)=>{
    return (k)=>{
        dispatch({type:'b3',payload:k})

    }
}
const putu=(dispatch)=>{
    return async (b1,b2,b3)=>{
        await jsonServer.put('userb/1',{b1:b1,b2:b2,b3:b3}) }
    
}

const getu=(dispatch)=>{
    return async()=>{
      const res= await jsonServer.get('userb/1')
      dispatch({type:'get_u',payload:res.data})
      
      
    }
}

const getq=(dispatch)=>{
    return async()=>{
      const res= await jsonServer.get('maindb')
      dispatch({type:'get_q',payload:res.data})
    }
}


const postu=(dispatch)=>{
    return async (b1,b2,b3,callback)=>{
        await jsonServer.post('userb',{b1:b1,b2:b2,b3:b3})
        callback()
 }
    
}


export const {Context,Provider}=createDataContext(dataReducer,{getq,postu,getu,putu,setb1,setb2,setb3},{ques:[],b1:[],b2:[],b3:[]})