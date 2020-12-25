import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';

import { TodoStatus } from '../../config/const'
import CardInfo from '../../shared/CardInfo/CardInfo';
import ToolInfo from '../../shared/ToolInfo/ToolInfo';

const Dashboard = ({
    setCreateTodoModal,
    todoStatus,
    inProgressStatus,
    inQAStatus,
    doneStatus,
    blockedStatus,
    deployedStatus
}) => {

    return (
        <Container fluid className="dashboard_section">
            <Row className="mb-3">
                <Col>
                    <Button className="create_todo_btn" onClick={setCreateTodoModal}>
                        Create Todo
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3} lg={2} className="mb-4">
                    <ToolInfo title={TodoStatus[1]}>
                        {todoStatus && todoStatus.map((todo) => (
                            <CardInfo todo={todo} id={todo.id} title={todo.title} description={todo.description} openTodoModal={(e)=>setCreateTodoModal(e)}/>
                        ))}
                    </ToolInfo>
                </Col>
                <Col xs={12} md={3} lg={2} className="mb-4">
                    <ToolInfo title={TodoStatus[2]}>
                        {inProgressStatus && inProgressStatus.map((todo) => (
                            <CardInfo todo={todo} id={todo.id} title={todo.title} description={todo.description} openTodoModal={(e)=>setCreateTodoModal(e)} />
                        ))}
                    </ToolInfo>
                </Col>
                <Col xs={12} md={3} lg={2}className="mb-4">
                    <ToolInfo title={TodoStatus[3]}>
                        {inQAStatus && inQAStatus.map((todo) => (
                            <CardInfo todo={todo} id={todo.id} title={todo.title} description={todo.description} openTodoModal={(e)=>setCreateTodoModal(e)} />
                        ))}
                    </ToolInfo>
                </Col>
                <Col xs={12} md={3} lg={2} className="mb-4">
                    <ToolInfo title={TodoStatus[4]}>
                        {doneStatus && doneStatus.map((todo) => (
                            <CardInfo todo={todo} id={todo.id} title={todo.title} description={todo.description} openTodoModal={(e)=>setCreateTodoModal(e)} />
                        ))}
                    </ToolInfo>
                </Col>
                <Col xs={12} md={3} lg={2} className="mb-4">
                    <ToolInfo title={TodoStatus[5]}>
                        {blockedStatus && blockedStatus.map((todo) => (
                            <CardInfo todo={todo} id={todo.id} title={todo.title} description={todo.description} openTodoModal={(e)=>setCreateTodoModal(e)} />
                        ))}
                    </ToolInfo>
                </Col>
                <Col xs={12} md={3} lg={2} className="mb-4">
                    <ToolInfo title={TodoStatus[6]}>
                        {deployedStatus && deployedStatus.map((todo) => (
                            <CardInfo todo={todo} id={todo.id} title={todo.title} description={todo.description} openTodoModal={(e)=>setCreateTodoModal(e)} />
                        ))}
                    </ToolInfo>
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard