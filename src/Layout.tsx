import { Suspense } from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./pages/component/_header";
import Loader from "./_global/_loader";
import Footer from "./pages/component/_footer";

function Layout() {
    return (
        <>
            <Header />
            <Container fluid className="box-layout">
                <Row>
                    <Suspense fallback={<Loader />} >
                        <Outlet />
                    </Suspense>
                </Row>
            </Container>
            <Footer />
        </>
    );
}

export default Layout;
