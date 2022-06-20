import { Button, Col, Form, FormGroup, FormLabel, FormSelect, Row } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";


const Forms = ()=> {

  const {purchaseOrder} = useCartContext()

  return (
    <Form>
      <Row>
        <Col>
          <input id="firstName" placeholder="Nombre completo" />
        </Col>
        <Col>
          <input id="lastName" placeholder="Apellido" />
        </Col>
      </Row>

      <Row className="mb-3">
        <FormGroup controlId="formGridEmail">
          <FormLabel></FormLabel>
          <input id="email" type="email" placeholder="Ingrese email..." />
        </FormGroup>

        <FormGroup controlId="formGridEmail">
          <FormLabel></FormLabel>
          <input id="formEmailRepeat" type="email" placeholder="Valide su email..." />
        </FormGroup>
      </Row>

      <FormGroup className="mb-3" controlId="formGridAddress">
        <FormLabel>Dirección</FormLabel>
        <input id="address" placeholder="San Juan 1234" />
      </FormGroup>

      <FormGroup className="mb-3" controlId="cellPhone">
        <FormLabel>Celular</FormLabel>
        <input id="cellPhone" placeholder="ingrese su celular" />
      </FormGroup>

      <Row className="mb-3">
        <FormGroup as={Col} controlId="formGridCity">
          <FormLabel>Ciudad</FormLabel>
          <input id="city" />
        </FormGroup>

        <FormGroup as={Col} controlId="formGridZip">
          <FormLabel>CP</FormLabel>
          <input id="zip"/>
        </FormGroup>

        <FormGroup as={Col} controlId="formGridState">
          <FormLabel>País</FormLabel>
          <FormSelect defaultValue="Argentina">
            <option>Argentina</option>
            <option>Uruguay</option>
            <option>Chile</option>
            <option>Brasil</option>
            <option>Paraguay</option>
            <option>Perú</option>
          </FormSelect>
        </FormGroup>

      </Row>

      <Button variant="primary" onClick={(e) => purchaseOrder(e)}>
        Generar Orden
      </Button>
    </Form>
  )
}



export default Forms