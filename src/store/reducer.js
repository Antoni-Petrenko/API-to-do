
const initialState={
    taskList:[],
    isAdmin:localStorage.getItem('token')?true:false,
    responseStatus:'',
    responseMessage:'',
    total_task_count:'',
}


export default (state=initialState,action)=>{
    switch(action.type){
        case 'FETCH_LOGIN_TOKEN_START':
            return {
                ...state
            }
        case 'FETCH_LOGIN_TOKEN_SUCCESS':
            return {
                ...state,
                isAdmin:true,
                adminToken:action.token
            }
        case 'FETCH_LOGIN_TOKEN_ERROR':
            return {
                ...state,
                isAdmin:false,
                responseMessage:action.responseMassage,
                responseStatus:action.responseStatus
            } 

        case 'FETCH_TASK_LIST_START':
            return{
                ...state
            }
        case 'FETCH_TASK_LIST_SUCCESS':
            return  {
            ...state,
            taskList:action.taskList,
            total_task_count:action.total_task_count
            }
        case 'FETCH_TASK_LIST_ERROR':
            return {
                ...state,
                errorMassage:action.errorMassage
            }
        case 'START_POSTING_EDITED_DATA':
            return {
                ...state
            }
        case 'POSTING_EDITED_DATA_SUCCESS':
            return{
                ...state,responseStatus:action.responseStatus
            }    
        case 'POSTING_EDITED_DATA_ERROR': 
        return{
            ...state,
            isAdmin:false,
            responseStatus:action.responseStatus,
            responseMessage:action.responseMessage
        }   
        case 'START_SENDING_NEW_TASK':
            return{
                ...state
            }
        case 'SENDING_NEW_TASK_SUCCESS':
            return{
                ...state,
                responseStatus:action.responseStatus,
                responseMessage:''
            }
        case 'SENDING_NEW_TASK_ERROR':
            return{
                ...state
            }
        case 'EXIT':
            return{
                ...state,adminToken:action.adminToken,isAdmin:action.isAdmin
            }
        case 'MESSAGE_REFRESH':
        return{
            ...state,
            responseStatus:'',
            responseMessage:''
        }    
        
        default:
        return state
    }
}