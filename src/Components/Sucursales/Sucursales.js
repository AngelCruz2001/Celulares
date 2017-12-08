import React, { Component } from 'react';
// import ReactDataGrid from 'react-data-grid';
import  CSS from './Sucursales.css';
var Id ="1";
var Ciudad="Durango";
var Pais="Mexico";
var Direccion="Zaragoza 109 Int 7 Zona centro C.P 34000";
var Telefono="6181234567"

class Sucursales extends Component {
    state = {  }
    render() {
        return (
        <div className="Todo">
            <div className="Titulo">
                <hr/>
            <div className="text-center">
            <h1>Sucursales</h1>
            </div>
            </div>
            <hr/>
        
              <table className="table table-fixed">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Ciudad</th>
                            <th>Pais</th>
                            <th>Direccion</th>
                            <th>Telefono</th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>      
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>     
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>      
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>  
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>      
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>  
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>      
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>  
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>      
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>  
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>      
                            <tr>
                            <td>{Id}</td>
                            <td>{Ciudad}</td>
                            <td>{Pais}</td>
                            <td>{Direccion}</td>
                            <td>{Telefono}</td>
                            </tr>  

                        </tbody>
                     </table>
                     <br/>
                     
                     <br/>
          <br/>
          <br/>
          <br/>
          <br/>

            </div>
                
        
      

);
    }
}

export default Sucursales;