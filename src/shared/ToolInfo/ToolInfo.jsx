import React from 'react';
import { CardBody, CardTitle, Card } from 'reactstrap';

import './style.scss';

const ToolInfo = ({ title, children }) => {
    return (
        <Card key={title} className="tool_info">
            <CardTitle className="tool_into_title">{title}</CardTitle>
            <CardBody className="p-0">
                {children}
            </CardBody>
        </Card>
    )
}

export default ToolInfo;