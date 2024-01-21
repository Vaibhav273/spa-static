import { Col, Container, Row } from "react-bootstrap";

interface Props {
    title: string
}
const CommonBreadcrumb = ({ title }: Props) => {
    return (
        <>
            <div className="header-breadcrumb">
                <Container>
                    <Row>
                        <Col xl={12} className="header-title">
                            <h4>{title}</h4>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default CommonBreadcrumb;