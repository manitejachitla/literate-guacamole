import React from 'react';
import { CardTitle, Card, CardBody } from 'reactstrap';

import './style.scss';

const CardInfo = ({ id, title, description, openTodoModal, todo }) => {
    return (
        <Card key={id} className="card_info_section" onClick={() => openTodoModal(todo)}>
            <CardTitle className="card_info_title">{title}</CardTitle>
            <CardBody className="p-0">
                <p className="card_info_description">{description}</p>
            </CardBody>
        </Card>
    )
}

export default CardInfo;