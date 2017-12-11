import React, { Component } from 'react';
import CSS from './Trabajadores.css';
var Nombre="Sara";
var Apellidos="Abarca Botella";
var fechaNacimiento="2017/11/22";
var Sueldo="7000";
var Puesto="Conductor";
var Curp="AEHM920624HDGRRR07";

class Trabajadores extends Component {

    state = { 
        T: [],
        Produccion: ""
     }

    componentDidMount(){
        this.getTrabajadores();
    }
    
     getTrabajadores () {
         var T = [
            {
                "ID": 1,
                "Curp": "JIFB010925MASMGRA2",
                "Nombre": "BRENDA",
                "Apellidos": "JIMENEZ FIGUEROA",
                "FechaNacimiento": "2001/09/25",
                "FechaAdmision": "2017/08/21",
                "Sueldo": "5000",
                "Puesto": "ATENCION AL PUBLICO" 
            },
            {
                "ID": 2,
                "Curp": "CARG010921HDGHMRA5",
                "Nombre": "GERARDO",
                "Apellidos": "CHAVEZ ROMAN",
                "FechaNacimiento": "2001/09/21",
                "FechaAdmision": "2016/08/18",
                "Sueldo": "4500",
                "Puesto": "REPARADOR" 
            },
            {
                "ID": 3,
                "Curp": "CUGA010714HDGRRNA1",
                "Nombre": "ANGEL",
                "Apellidos": "CRUZ GARCIA",
                "FechaNacimiento": "2001/07/14",
                "FechaAdmision": "2013/10/21",
                "Sueldo": "5000",
                "Puesto": "GERENTE/DUEÑO" 
        
            },
            {
                "ID": 4,
                "Curp": "GOZE001107MDWEROA1",
                "Nombre": "ELIZABETH",
                "Apellidos": "GONZALEZ SAUCEDO",
                "FechaNacimiento": "2000/11/25",
                "FechaAdmision": "2015/05/16",
                "Sueldo": "2000",
                "Puesto": "VENDEDOR" 
        
            },
            {
                "ID": 5,
                "Curp": "UYRT120908MIQIERA1",
                "Nombre": "MIGUEL ANGEL",
                "Apellidos": "SANCHEZ MORAN",
                "FechaNacimiento": "2001/04/18",
                "FechaAdmision": "2014/12/24",
                "Sueldo": "7000",
                "Puesto": "CONDUCTOR" 
            
            }
        ]
        this.setState({
            T
        })
     }
    
    render() {
        return (
            <div className="container-fluid">
                <br/>
                <div className="container-fluid text-center">
                <hr/>
                <h1>Trabajadores</h1>
                <hr/>
                </div>
                <br/>

                <table className="table table-fixed">
                        <thead>
                            <tr>
                            <th>Nombre</th>
                            <th>Apellidos</th>
                            <th>Fecha de nacimiento</th>
                            <th>Sueldo</th>
                            <th>Puesto</th>
                            <th>Curp</th>
                            
                            </tr>
                        </thead>
                        
                        <tbody>
                          {this.state.T.map(function(t,i){
                            return  (
                            <tr key={i}>
                                <td>{t.Nombre}</td>
                                <td>{t.Apellidos}</td>
                                <td>{t.fechaNacimiento}</td>
                                <td>{t.Sueldo}</td>
                                <td>{t.Puesto}</td>
                                <td>{t.Curp}</td>
                            </tr> 
                            )
                          })}                               
                            </tbody>
                     </table>
                     <div className="text-center">
                      <h3>Agregar Datos</h3>
                      <br/>
                      </div>
                     <div>
                      <div className="row">
                      <div className="container-fluid inputs1">
                            <div className="form-group col-xs-4">
                            <label htmlFor="Nombre">Nombre:</label>
                            <input type="text" className="form-control" placeholder=""/>
                            </div>
                            <div className="form-group col-xs-4">
                            <label htmlFor="Apellidos">Apellidos:</label>
                            <input type="text" className="form-control" placeholder=""/>
                            </div>
                            
                            <div className="form-group col-xs-4">
                            <label htmlFor="fechaNac">Fecha de nacimiento:</label>
                            <input type="text" className="form-control" placeholder=""/>
                            </div>
                            </div>
                            </div>
                            <div className="row">
                            <div className="container-fluid inputs2">
                            <div className="form-group col-xs-4"> 
                            <label htmlFor="fechaAdmision">Fecha de admision:</label>
                            <input type="text" className="form-control" id="fechaAdmision"/>
                            </div>
                            <div className="form-group col-xs-4"> 
                            <label htmlFor="Sueldo">Sueldo:</label>
                            <input type="text" className="form-control" id="Sueldo"/>
                            </div>
                            <div className="form-group col-xs-4"> 
                            <label htmlFor="Puesto">Puesto:</label>
                            <input type="text" className="form-control" id="Puesto"/>
                            </div>
                            <br/>
                             </div>
                             </div>
                     </div>
                     
{/* 
                           
                            <div className="col-xs-3">
                                <input type="text" className="form-control" placeholder=".col-xs-3"/>
                                </div>
                            <div className="col-xs-4">
                                <input type="text" className="form-control" placeholder=".col-xs-4"/>
                            </div>
                            <div className="col-xs-5">
                                <input type="text" className="form-control" placeholder=".col-xs-5"/>
                                </div>
                           
 */}

                             <br/>
                            <div className="text-right container">
                            <button type="button" class="btn btn-success">Agregar</button>
                            </div>
                        {/* <div className="container">
                            <div className="row">
                                <div className='col-sm-6'>
                                    <div className="form-group">
                                        <div className='input-group date' id='datetimepicker1'>
                                            <input type='text' className="form-control" />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                   
                                     
                                 
                            </div>
                
                    </div> */}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </div>
        );
    }
}

export default Trabajadores;