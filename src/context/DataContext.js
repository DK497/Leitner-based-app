import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const dataReducer=(state,action)=>{
        switch(action.type)
        {   case 'get_q':
             { return {...state,ques:action.payload}}
            case 'get_u':{
                return {...state,userd:action.payload}
            }
            default:{
                return state
            }
        }
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


export const {Context,Provider}=createDataContext(dataReducer,{getq,postu,getu},{ques:[],userd:{}})