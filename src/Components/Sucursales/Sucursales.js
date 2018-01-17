import React, { Component } from 'react';
// import ReactDataGrid from 'react-data-grid';
import  CSS from './Sucursales.css';
var SInicial=
[
    {
        "ID": 1,
        "Ciudad": "AGUASCALIENTES",
        "Pais": "MEXICO",
        "Direccion": "OJOCALIENTE I #213",
        "Telefono": "4499150881"
    },
    {
        "ID": 2,
        "Ciudad": "DURANGO",
        "Pais": "MEXICO",
        "Direccion": "ZARAGOZA #109 SUR ZONA CENTRO C.P: 34000",
        "Telefono": "6181532456"
    },
    {
        "ID": 3,
        "Ciudad": "DURANGO",
        "Pais": "MEXICO",
        "Direccion": "MEXICO 45, DURANGO",
        "Telefono": "016188174748"
    },
    {
        "ID": 4,
        "Ciudad": "TLAXCALA",
        "Pais": "MEXICO",
        "Direccion": "SAN FRNASISCO, TLAXCALA DE XICOHTENATL, CENTRO, 90000 TLAXCALA DE XICOHTENATL",
        "Telefono": "012464621511"
    },
    {
        "ID": 5,
        "Ciudad": "FLORENCIA",
        "Pais": "ITALIA",
        "Direccion": "PONTE VECCHIO, 50125 FIRENZE FI",
        "Telefono": "39055294883"
    }
]
class Sucursales extends Component {
    state = { 
        S:SInicial

    }


    render() {
        let fun = this.state.fun;
        let Sucursales=this.state.T;
        return (
        <div className="">

            <div className="" >
        
            <div className="Titulo">
                        <div className=" text-center"> 
                        <hr/>
                        <h1>Sucursales</h1>
                        
                        <hr/>
                        </div>
                        </div>
                        <nav className="navbar navbar-default">
                                        <div className="container-fluid">

                                            <div className="navbar-header">
                                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                                <span className="icon-bar"></span>
                                            </button>
                                            <a className="navbar-brand" href="#">JPG</a>
                                            </div>

                                        
                                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                            <ul className="nav navbar-nav">
                                                <li className=""><a href="#">¿Que hacemos? <span className="sr-only">(current)</span></a></li>
                                                <li><a href="#">¿Quienes somos?</a></li>
                                                <li className="dropdown">
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Secciones <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                  
                                                    <li><a href="#">Trabajadores</a></li>
                                                    <li><a href="#">Camiones</a></li>
                                                    <li><a href="#">Celulares</a></li>
                                                    <li><a href="{Sucursales}">Sucursales</a></li>
                                                    <li><a href="#">Usuarios</a></li>
                                                    <li><a href="#"></a></li>
                                                </ul>
                                                </li>
                                            </ul>
                                    
                                            </div>
                                           
                                        </div>
             
                                        </nav>
                                        </div>
                                        <div className="row">
            <table class="table-responsive tabla">
        <thead>
        <tr className="text-center">
            <th></th>
            <th>ID</th>
            <th className="thCiudad">Ciudad</th>
            <th className="thPais">Pais</th>
            <th>Direccion</th>
            <th>Telefono</th>
        </tr>
        </thead>
        <tbody>

            {this.state.S.map((t,i)=>
                    <tr key = {i}>
                    <td></td>
                    <td>{t.ID}</td>
                    <td>{t.Ciudad}</td>
                    <td>{t.Pais}</td>
                    <td>{t.Direccion}</td>
                    <td>{t.Telefono}</td>
                    
                    </tr>
                
            )}
            
        </tbody>
    </table>
            </div>
                </div>
      

);
    }
}

export default Sucursales;