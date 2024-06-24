import logo from './logo.svg';
import './App.css';
import { Container,Row,Col } from 'reactstrap';
import Sidebar from './Sidebar';
import NavBar from './NavBar';
import Template from './Template';

let pages = {p1 : "page 1",p2 : "page 2",p3 : "page 3",p4 : "page 4"}

function App() {
  return (
    <section>
      <Container fluid>
      <Row>
        {/* Sol taraftaki menü */}
        <Col md={3} >
          <Sidebar></Sidebar>
        </Col>
        {/* Sağ taraftaki 12'de 6 bölümü tutan navigasyon elemanları */}
        <Col style={{backgroundColor:"lightgray",marginTop:"50px",marginRight:"30px"}}>
          <Row>
            <Col md={12} >
              <NavBar texts = {pages}>
                
              </NavBar>
            </Col>
          </Row>
          <Row>
            <Col md={8}>
              <Template></Template>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default App;
