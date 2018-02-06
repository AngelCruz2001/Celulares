
import React, { Component } from 'react';
import CSS from './Prueba.css';
var TInicial = [
    {
        "ID": 1,
        "Curp": "JIFB010925MASMGRA2",
        "Nombre": "BRENDA",
        "Apellidos": "JIMENEZ FIGUEROA",
        "FechaNacimiento":"2001-09-25" ,
        "FechaAdmision":"2017-08-21" ,
        "Sueldo": "5000",
        "Puesto": "ATENCION AL PUBLICO" 
    },
    {
        "ID": 2,
        "Curp": "CARG010921HDGHMRA5",
        "Nombre": "GERARDO",
        "Apellidos": "CHAVEZ ROMAN",
        "FechaNacimiento":"2001-09-21" ,
        "FechaAdmision":"2016-08-18" ,
        "Sueldo": "4500",
        "Puesto": "REPARADOR" 
    },
    {
        "ID": 3,
        "Curp": "CUGA010714HDGRRNA1",
        "Nombre": "ANGEL",
        "Apellidos": "CRUZ GARCIA",
        "FechaNacimiento":"2001-07-14" ,
        "FechaAdmision":"2013-10-21" ,
        "Sueldo": "5000",
        "Puesto": "GERENTE" 

    },
    {
        "ID": 4,
        "Curp": "GOZE000512MDGRRNA1",
        "Nombre": "ELIZABETH",
        "Apellidos": "GONZALEZ SAUCEDO",
        "FechaNacimiento":"2000-11-25" ,
        "FechaAdmision":"2015-05-16" ,
        "Sueldo": "2000",
        "Puesto": "VENDEDOR" 

    },
    {
        "ID": 5,
        "Curp": "SAMM010418HASNRGA2",
        "Nombre": "MIGUEL ANGEL",
        "Apellidos": "SANCHEZ MORAN",
        "FechaNacimiento":"2001-04-18" ,
        "FechaAdmision":"2014-12-24" ,
        "Sueldo": "7000",
        "Puesto": "CONDUCTOR" 
    
    }
 ];
class Tabla extends Component {
    state = { 
        T:TInicial

     }



  render() {
        return (
    <div className="TablaToda ">
                           
                             
                            
    <table>
            <thead>
                <tr>
                <th className="TDCheck"></th>
                <th className="TDID">Id</th>
                <th className="TDNombre">Nombre</th>
                <th>Apellidos</th>
                <th>Fecha de nacimiento</th>
                <th>Sueldo</th>
                <th>Puesto</th>
                <th>Curp</th>
                
                </tr>
            </thead>
            
            <tbody>
            
            {this.state.T.map(function(t,i){
            
            var IdCheck=t.ID;
            var iE=i+1;
                return  (
            
                    <tr key={i} className={this.state.filaClass+" FilaColor"+iE} id={"FilaColor"+iE} >

                   
                    <td className="TDID">{t.ID}</td>
                    <td className="TDNombre">{t.Nombre}</td>
                    <td>{t.Apellidos}</td>
                    <td>{t.FechaNacimiento}</td>
                    <td>{t.Sueldo}</td>
                    <td>{t.Puesto}</td>
                    <td>{t.Curp}</td>
                </tr> 
                )
            },this)}                               
                </tbody>
        </table>
    </div>
                  
            
        );
    }
}

export default Tabla;