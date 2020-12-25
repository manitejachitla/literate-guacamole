import React from 'react'

import Dashboard from './Dashboard'
import CreateTodoModal from '../../shared/CreateTodoModal/CreateTodoModal'
import {
    useTodoState,
    setCreateTodoModal
} from '../../context/TodoContext';

import './style.scss';

const DashboardContainer = () => {
    const todoContext = useTodoState()
    const todoState = todoContext.todoState;

    return (
        <>
            <Dashboard
                todoStatus={todoState.list.filter((list) => list.status === 1)}
                inProgressStatus={todoState.list.filter((list) => list.status === 2)}
                inQAStatus={todoState.list.filter((list) => list.status === 3)}
                doneStatus={todoState.list.filter((list) => list.status === 4)}
                blockedStatus={todoState.list.filter((list) => list.status === 5)}
                deployedStatus={todoState.list.filter((list) => list.status === 6)}
                setCreateTodoModal={(e) => setCreateTodoModal(todoContext.setTodoState, { status: true, data: e })}
            />
            <CreateTodoModal />
        </>
    )
}

export default DashboardContainer