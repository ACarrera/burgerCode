import React from "react";
const menu = require("../AddModal/Menu");
import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    } from "reactstrap";
import App from "../../App";
class App extends React.Component {
    state = {
        data: data,
            refreshModal: false,
            insertModal: false,
            form: {
                id: "",
                Nombre: "",
                Estado: true("Disponible") || false("No disponible"),
                Precio: Number,
                Detalles: "",
                Categoria: "",
            },
        };
        
        addMenu = async (req,res)=>{
            try {
                const newmenu = new menu(req.body);
                await newmenu.save();
                res.status(201).json({message:'El nuevo menu ha sido guardado'})
            } catch (error) {
                res.status(error.code || 500).json({message:error.message})
            }
        }
        
        getMenus = async (req,res)=>{
            try {
                const { page } = req.query;
                const [ menusCount, menus ] = await Promise.all([
                menu.countDocuments(),
                menu.find().skip(page*5).limit(5)
                ])
                res.status(200).json({menusCount,page,menus})
            } catch (error) {
                res.status(error.code || 500).json({message:error.message})
            }
        }
        
        autocomplete = async (req,res) =>{
            try {
                const { q } =req.query;
                const menu = await menu.find({name:{$regex:q, $options:'i'}}).select('-_id -createdAt -updatedAt');
                res.status(200).json({menus})
            } catch (error) {
                res.status(error.code || 500).json({message:error.message})
            }
        }
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
                array[counter].detail = dato.detail;
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
        }
    }
return(
        <MenuTable>
            <Container>
            <br />
            <Button color="success" onClick={()=>this.addMenu()}>Crear</Button>
            <br />
            <br />
            <Table>
                <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Estado</th>
                    <th>precio</th>
                    <th>detalles</th>
                    <th>categoria</th>
                </tr>
                </thead>
                <tbody>
                {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.name}</td>
                    <td>{dato.status}</td>
                    <td>{dato.price}</td>
                    <td>{dato.detail}</td>
                    <td>{dato.category}</td>
                    <td>
                        <Button
                        color="primary"
                        onClick={() => this.getMenus(dato)}
                        >
                        Editar
                        </Button>{" "}
                        <Button color="danger" onClick={()=> this.delete(dato)}>Eliminar</Button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            </Container>
            <Modal>
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
                    type="text"
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
                    type="check-box"
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
                    className="form-control"
                    name="detail"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.detail}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Categoria: 
                </label>
                <input
                    className="form-control"
                    name="category"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.category}
                />
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
            <Modal>
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
                    className="form-control"
                    name="detail"
                    type="text"
                    onChange={this.handleChange}
                />
                </FormGroup>

                <FormGroup>
                <label>
                    Categoria: 
                </label>
                <input
                    className="form-control"
                    name="category"
                    type="text"
                    onChange={this.handleChange}
                />
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
        </MenuTable>
        );
    
    export default App;
