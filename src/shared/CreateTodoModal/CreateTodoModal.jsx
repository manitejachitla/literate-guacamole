import React, { useState } from 'react';
import { Button, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import moment from 'moment';
import get from 'lodash/get';
import Select from 'react-select';

import {
    useTodoState,
    addNewTodo,
    setCreateTodoModal
} from '../../context/TodoContext';

import './style.scss';

const CreateTodoModal = () => {
    const [todoInfo, setTodoInfo] = useState({ title: '', description: '', status: '', assignee: '' })
    const todoContext = useTodoState();
    const todoState = todoContext.todoState;
    console.log('1-> todoContext', todoContext);

    const handleModal = () => {
        setCreateTodoModal(todoContext.setTodoState, !todoState.isNewTodoModal);
    }

    const handleSubmit = () => {
        const title = todoInfo.title ? todoInfo.title : get(todoState.selectedTodo, 'title', '')
        const description = todoInfo.description ? todoInfo.description : get(todoState.selectedTodo, 'description', '')
        const id = get(todoState.selectedTodo, 'id', '') ? get(todoState.selectedTodo, 'id', '') : Math.floor(Math.random() * 100000000)
        const status = todoInfo.status ? todoInfo.status : get(todoState.selectedTodo, 'status', '')
        const assignee = todoInfo.assignee ? todoInfo.assignee : get(todoState.selectedTodo, 'assignee', '')

        setCreateTodoModal(todoContext.setTodoState, false);
        addNewTodo(todoContext.setTodoState, { id: id, title: title, description: description, status: status, assignee: assignee, date: moment().format('LLL') })
        setTodoInfo({ title: '', description: '', status: '', assignee: '' })
    }

    const handleCancel = () => {
        setCreateTodoModal(todoContext.setTodoState, false);
    }

    const statusOptions = [
        { value: 1, label: 'ToDo' },
        { value: 2, label: 'InProgress' },
        { value: 3, label: 'InQA' },
        { value: 4, label: 'Done' },
        { value: 5, label: 'Blocked' },
        { value: 6, label: 'Deployed' },
    ];

    const assigneeOptions = [
        { value: 'test1@gmailcom', label: 'Test1' },
        { value: 'test2@gmailcom', label: 'Test2' },
        { value: 'test3@gmailcom', label: 'Test3' },
        { value: 'test4@gmailcom', label: 'Test4' },
        { value: 'test5@gmailcom', label: 'Test5' },
    ];

    const currentSelectedStatus = todoInfo.status ? todoInfo.status : get(todoState.selectedTodo, 'status', '')
    const selectedStatus = statusOptions.find(sts => sts.value === currentSelectedStatus)

    const currentAssigneeStatus = todoInfo.assignee ? todoInfo.assignee : get(todoState.selectedTodo, 'assignee', '')
    const selectedAssignee = assigneeOptions.find(sts => sts.value === currentAssigneeStatus)

    return (
        <Modal isOpen={todoState.isNewTodoModal} toggle={handleModal} className="todo_modal_section">
            <ModalHeader toggle={handleModal}>Create Todo</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label>Title</Label>
                    <Input value={todoInfo.title ? todoInfo.title : get(todoState.selectedTodo, 'title', '')} onChange={(e) => setTodoInfo({ ...todoInfo, title: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>Description</Label>
                    <Input value={todoInfo.description ? todoInfo.description : get(todoState.selectedTodo, 'description', '')} onChange={(e) => setTodoInfo({ ...todoInfo, description: e.target.value })} />
                </FormGroup>
                <FormGroup>
                    <Label>Status</Label>
                    <Select
                        value={selectedStatus}
                        onChange={(e) => setTodoInfo({ ...todoInfo, status: e.value })}
                        options={statusOptions}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Assignee</Label>
                    <Select
                        value={selectedAssignee}
                        onChange={(e) => setTodoInfo({ ...todoInfo, assignee: e.value })}
                        options={assigneeOptions}
                    />
                </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button className="submit_btn" onClick={handleSubmit}>Submit</Button>{' '}
                <Button className="cancel_btn" onClick={handleCancel}>Cancel</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateTodoModal;