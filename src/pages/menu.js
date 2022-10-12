import React from "react";
import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Components/Footer/Footer";
import axiosInstance from "../config/axiosInstance";
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    Input,
    } from "reactstrap";
    const menus = [
        { id: 1, name: "Burger elite", status: "Disponible", price: 800, details: "Hambuerguesa Doble con cheddar y bacon y con papas y gaseosa", category: "Hamburgesa Premiun" },
        { id: 2, name: "Burger elite", status: "Disponible", price: 800, details: "Hambuerguesa Doble con cheddar y bacon y con papas y gaseosa", category: "Hamburgesa Premiun" },
        { id: 3, name: "Burger elite", status: "Disponible", price: 800, details: "Hambuerguesa Doble con cheddar y bacon y con papas y gaseosa", category: "Hamburgesa Premiun" },
        { id: 4, name: "Burger elite", status: "Disponible", price: 800, details: "Hambuerguesa Doble con cheddar y bacon y con papas y gaseosa", category: "Hamburgesa Premiun" },
        { id: 5, name: "Burger elite", status: "Disponible", price: 800, details: "Hambuerguesa Doble con cheddar y bacon y con papas y gaseosa", category: "Hamburgesa Premiun" },
        { id: 6, name: "Burger elite", status: "Disponible", price: 800, details: "Hambuerguesa Doble con cheddar y bacon y con papas y gaseosa", category: "Hamburgesa Premiun"},
        ];
class App extends React.Component {
    state = {
        data: axiosInstance.get("/menu"),
        refreshModal: false,
        insertModal: false,
        form: {
            id: "",
            Nombre: "",
            Estado: "",
            Precio: Number,
            Detalles: "",
            Categoria: "",
            },
        };
        viewRefreshModal = (dato) => {
            this.setState({
            form: dato,
            refreshModal: true,
        });
        };
        closeRefreshModal = () => {
            this.setState({ refreshModal: false });
        };
        viewInsertModal = () => {
            this.setState({
                insertModal: true,
            });
        };
        closeInsertModal = () => {
            this.setState({ insertModal: false });
        };
        edit = (dato) => {
            var counter = 0;
            var array = this.state.data;
            array.map((registro) => {
            if (dato.id == registro.id) {
                array[counter].name = dato.name;
                array[counter].status = dato.status;
                array[counter].price = dato.price;
                array[counter].details = dato.details;
                array[counter].category = dato.category;
            }
            counter++;
            });
            this.setState({ data: array, refreshModal: false });
        };
        delete = (dato) => {
            var option = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
            if (option == true) {
            var counter = 0;
            var array = this.state.data;
            array.map((registro) => {
                if (dato.id == registro.id) {
                array.splice(counter, 1);
                }
                counter++;
            });
            this.setState({ data: array, refreshModal: false });
            }
        };
        insert= ()=>{
            var newValue= {...this.state.form};
            newValue.id=this.state.data.length+1;
            var list= this.state.data;
            list.push(newValue);
            this.setState({ insertModal: false, data: list });
        };
        handleChange = (e) => {
            this.setState({
                form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
                },
            });
            };
    render() { return(
            <>
            <Container>
            <br />
            <Button color="success" onClick={()=>this.viewInsertModal()}>Crear</Button>
            <br />
            <br />
            <Table hover size="sm" responsive>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>Precio</th>
                    <th>Detalles</th>
                    <th>Categoria</th>
                    <th>Acciones</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.name}</td>
                    <td>{dato.status}</td>
                    <td>{dato.price}</td>
                    <td>{dato.details}</td>
                    <td>{dato.category}</td>
                    <td>
                        <Button
                        color="primary"
                        onClick={() => this.viewRefreshModal(dato)}
                        >
                        Editar
                        </Button>{" "}
                        </td>
                    <td>
                        <Button color="danger" onClick={()=> this.delete(dato)}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Container>
            <Modal isOpen={this.state.refreshModal}>
            <ModalHeader>
                <div><h3>Editar Menu</h3></div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                <label>
                    Id:
                </label>
                <input
                    className="form-control"
                    readOnly
                    type="Number"
                    value={this.state.form.id}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Nombre: 
                </label>
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.name}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Estado: 
                </label>
                <input
                    className="form-control"
                    name="status"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.status}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Precio: 
                </label>
                <input
                    className="form-control"
                    name="price"
                    type="Number"
                    onChange={this.handleChange}
                    value={this.state.form.price}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Detalles: 
                </label>
                <input
                    className="form-control details"
                    name="details"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.details}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Categoria: 
                </label>
                <Input
                    className="form-control"
                    name="category"
                    type="select"
                    onChange={this.handleChange}
                    value={this.state.form.category}
                    >
                        <option>
                            "Hambuerguesa Premiun"
                        </option>
                        <option>
                            "Hambuerguesa Deluxe"
                        </option>
                        <option>
                            "Agregados Premiun"
                        </option>
                        <option>
                            "Hambuerguesa Comun"
                        </option>
                        <option>
                            "Agregados Comunes"
                        </option>
                    
                </Input>
                </FormGroup>

            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                onClick={() => this.edit(this.state.form)}
                >
                Editar
                </Button>
                <Button
                color="danger"
                onClick={() => this.closeRefreshModal()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>  
            <Modal isOpen={this.state.insertModal}>
            <ModalHeader>
                <div><h3>Insertar Menu</h3></div>
            </ModalHeader>
            <ModalBody>
                <FormGroup>
                <label>
                    Id: 
                </label>
                
                <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length+1}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Nombre: 
                </label>
                <input
                    className="form-control"
                    name="name"
                    type="text"
                    onChange={this.handleChange}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Estado: 
                </label>
                <input
                    className="form-control"
                    name="status"
                    type="text"
                    onChange={this.handleChange}
                />
                </FormGroup>
                
                <FormGroup>
                <label>
                    Precio: 
                </label>
                <input
                    className="form-control"
                    name="price"
                    type="Number"
                    onChange={this.handleChange}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Detalles: 
                </label>
                <input
                    className="form-control details" 
                    name="details"
                    type="text"
                    onChange={this.handleChange}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Categoria: 
                </label>
                <Input
                    className="form-control"
                    name="category"
                    type="select"
                    onChange={this.handleChange}
                    >
                    <option>
                    "Hambuerguesa Premiun"
                </option>
                <option>
                    "Hambuerguesa Deluxe"
                </option>
                <option>
                    "Agregados Premiun"
                </option>
                <option>
                    "Hambuerguesa Comun"
                </option>
                <option>
                    "Agregados Comunes"
                </option>
                </Input>
                </FormGroup>

            </ModalBody>
            <ModalFooter>
                <Button
                color="primary"
                onClick={() => this.insert()}
                >
                Insertar
                </Button>
                <Button
                className="btn btn-danger"
                onClick={() => this.closeInsertModal()}
                >
                Cancelar
                </Button>
            </ModalFooter>
            </Modal>
            <Footer/>
            </>
        );
        }
    }
    export default App;
