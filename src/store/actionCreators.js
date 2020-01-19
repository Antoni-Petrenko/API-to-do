
export function fetchingTaskListStart() {
    return {
        type: 'FETCH_TASK_LIST_START'
    }
}
export function fetchingTaskListSuccess(taskList, total_task_count) {
    return {
        type: 'FETCH_TASK_LIST_SUCCESS',
        taskList,
        total_task_count
    }
}
export function fetchingTaskListError(errorMassage) {
    return {
        type: 'FETCH_TASK_LIST_ERROR',
        errorMassage
    }
}


export function fetchingLoginTokenStart() {
    return {
        type: 'FETCH_LOGIN_TOKEN_START'
    }
}
export function fetchingLoginTokenSuccess(token) {

    return {
        type: 'FETCH_LOGIN_TOKEN_SUCCESS',
        token
    }
}
export function fetchingLoginTokenError(mesage, status) {
    return {
        type: 'FETCH_LOGIN_TOKEN_ERROR',
        responseMassage: mesage,
        responseStatus: status
    }
}


export function StartSendingNewTask() {
    return {
        type: 'START_SENDING_NEW_TASK'
    }
}
export function SendingNewTaskSuccess(status) {
    return {
        type: 'SENDING_NEW_TASK_SUCCESS',
        responseStatus: status,
    }
}
export function SendingNewTaskError() {
    return {
        type: 'SENDING_NEW_TASK_ERROR'
    }
}

export function StartPostingEditedData() {
    return {
        type: 'START_POSTING_EDITED_DATA'
    }
}
export function PostingEditedDataSuccess(status) {
    return {
        type: 'POSTING_EDITED_DATA_SUCCESS',
        responseStatus: status,
    }
}
export function PostingEditedDataError(status, message) {
    message = (message === 'Невалидный токен' ? 'У вас нет прав администратора.' : message);
    return {
        type: 'POSTING_EDITED_DATA_ERROR',
        responseStatus: status,
        responseMessage: message
    }
}

export function MessageRefresh() {
    return {
        type: 'MESSAGE_REFRESH'
    }
}

export function Exit() {
    localStorage.removeItem('token');
    return {
        type: 'EXIT',
        isAdmin: false
    }
}












