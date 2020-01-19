import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TaskItem from './TaskItem';
import { getTaskList } from '../../store/actions';
import { TaskContainer } from './Task.module.scss';

const Tasks = ({ taskList, onLoad }) => {
    useEffect(() => {
        onLoad()
    }, []);
    return (
        <div className={TaskContainer}>
            <ul>{taskList.length ?
                taskList.map(item => <TaskItem key={item.id} id={item.id} {...item} />) :
                <h2>Нет заданий на сегодня</h2>}
            </ul>
        </div>
    )
}
function mapStateToProps(state) {
    return {
        taskList: state.taskList,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        onLoad: param => dispatch(getTaskList(param)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
