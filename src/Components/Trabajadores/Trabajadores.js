import React, { Component } from 'react';
import Trabajadores from 'Trabajadores.json';

var Nombre="Sara";
var Apellidos="Abarca Botella";
var fechaNacimiento="2017/11/22";
var Sueldo="7000";
var Puesto="Conductor";
var Curp="AEHM920624HDGRRR07";

class Trabajadores extends Component {

    state = { 
        T: Trabajadores,
        Produccion: ""
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

                { 
                    this.state.T.map()
                }

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
                          {this.state.Trabajadores.map(function(t){
                            return  (
                            <tr>
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
                     <div className="container-fluid">
                        <div className="form-group">
                        <label for="Nombre">Nombre:</label>
                        <input type="text" class="form-control" id="Nombre"/>
                        </div>
                        <div className="form-group">
                        <label for="Apellidos">Apellidos:</label>
                        <input type="text" class="form-control" id="Apellidos"/>
                        </div>
                        </div>
                        <div className="form-group">
                        <label for="fechaNac">Fecha de nacimiento:</label>
                        <input type="text" class="form-control" id="fechaNac"/>
                        </div>
                        <div className="form-group"> 
                        <label for="Apellidos">Apellidos:</label>
                        <input type="text" class="form-control" id="Apellidos"/>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className='col-sm-6'>
                                    <div className="form-group">
                                        {/* <div className='input-group date' id='datetimepicker1'>
                                            <input type='text' className="form-control" />
                                            <span className="input-group-addon">
                                                <span className="glyphicon glyphicon-calendar"></span>
                                            </span>
                                        </div> */}
                                    </div>
                                </div>
                                   
                                     
                                 
                            </div>
                
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
            </div>
        );
    }
}

export default Trabajadores;