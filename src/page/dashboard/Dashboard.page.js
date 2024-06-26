import React from "react";
import {Row,Col, Container, Button} from 'react-bootstrap';
import { TicketTable } from "../../components/ticket-table/TicketTable.comp";
import tickets from '../../assets/data/dummy-tickets.json';
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

export const Dashboard = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                    <br/>
                    <PageBreadcrumb page="Dashboard"/>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mt-5 mb-2">
                    <Button variant="info" style={{fontSize:'2rem',
                        padding: '10px 30px', color:'white' }}>
                        Add New Ticket
                    </Button>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center mb-2">
                     <div>Total tickets: 50</div>
                     <div>Pending tickets: 5</div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mb-2">
                      Recently Added tickets
                    </Col>
                </Row>
                <Row>
                    <Col className="recent-ticket">
                      <TicketTable tickets={tickets} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}