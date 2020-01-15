import {uxcandyAPI} from '../BackendAPI/api';
import {
    fetchingTaskListStart,
    fetchingTaskListSuccess,
    fetchingTaskListError,
    fetchingLoginTokenStart,
    fetchingLoginTokenSuccess,
    fetchingLoginTokenError,
    StartSendingNewTask,
    SendingNewTaskSuccess,
    SendingNewTaskError,
    StartPostingEditedData,
    PostingEditedDataSuccess,
    PostingEditedDataError,
    MessageRefresh,
    Exit
} from './actionCreators';

window.unload=()=>{
    localStorage.clear()
}

const showMesageTime=3000;


export function getTaskList(
        pageNumber=localStorage.getItem('currentPagePosition')||1,
        sortField=localStorage.getItem('sortField')||'id',
        sortDirection=localStorage.getItem('sortDirection')||'asc'
    ){
    return async dispatch=>{
        try{
            dispatch(fetchingTaskListStart());
            const response= await fetch(uxcandyAPI.page(pageNumber)+
                                        uxcandyAPI.sort_field(sortField)+
                                        uxcandyAPI.sort_direction(sortDirection));
            const data=await response.json();
        if(data.status==='ok'){
            const tasks=data.message.tasks;
            const total_task_count=[]
                for(let i=1;i<=Math.ceil(data.message.total_task_count/3);i++){
                    total_task_count.push(1)
                }
            dispatch(fetchingTaskListSuccess(tasks,total_task_count))
        }else{
            dispatch(fetchingTaskListError(data.message.error))
        }
        }catch(e){
            console.log(e);
        }
    }   
}

export  function getLogin(form){
    return async dispatch=>{
        try{
            dispatch(fetchingLoginTokenStart());
            const response=await fetch(uxcandyAPI.login(),{
                                                            method:'POST',
                                                            body:form
                                                        })
            const data=await response.json();
        if(data.status==='ok'){
            dispatch(fetchingLoginTokenSuccess(data.message.token));
            localStorage.setItem('token',data.message.token);                

        }else{
            setTimeout(()=>{
                dispatch(MessageRefresh())
            },showMesageTime);
            dispatch(fetchingLoginTokenError(data.message.password,data.status))
            }
        }catch(e){
            throw console.log(e)
        }
    }
}

export function sendNewTask(form){
    return async dispatch=>{
        try{
            dispatch(StartSendingNewTask());
            const response=await fetch(uxcandyAPI.create(),{
                                                            method:'POST',
                                                            body:form
                                                        });
            
            const data = await response.json();
        if(data.status==='ok'){
            setTimeout(()=>{
                dispatch(MessageRefresh())
            },showMesageTime);
            dispatch(SendingNewTaskSuccess(data.status))
            dispatch(getTaskList())
        }else{
            dispatch(SendingNewTaskError())
        } 
        }catch(e){
            console.log(e)
        }
    }
}
export function setEdit(taskId,text){
    return async dispatch=>{
        try{
            dispatch(StartPostingEditedData());
            const response=await fetch(uxcandyAPI.edit(taskId),{
                                                                method:'POST',
                                                                body:text
                                                            })
            const data=await response.json();
        if(data.status==='ok'){
            setTimeout(()=>{
                dispatch(MessageRefresh())
            },showMesageTime);
            dispatch(PostingEditedDataSuccess(data.status))
            }else{
            setTimeout(()=>{
                dispatch(MessageRefresh())
            },showMesageTime);
            dispatch(PostingEditedDataError(data.status,data.message.token))
            }
        }catch(e){
            console.log(e)
        }
    }
}

export function Logout(){
    return  dispatch=>{
        dispatch(Exit());
        dispatch(getTaskList())
    }
}


