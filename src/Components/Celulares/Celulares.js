import React, { Component } from 'react';
import CSS from './Celulares.css';
var CInicial=
[
    {
        "ID":1,
        "Marca": "SAMSUNG",
        "Modelo": "GRAND PRIME",
        "Ensamblado":"REINO UNIDO" ,
        "Precio": 15000
    },
    {
        "ID":2,
        "Marca": "MOTOROLA",
        "Modelo": "MOTO G5 PLUS",
        "Ensamblado":"MEXICO" ,
        "Precio": 5000
    },
    {
        "ID":3,
        "Marca": "APPLE",
        "Modelo": "IPHONE X",
        "Ensamblado":"DUBAI" ,
        "Precio": 250000
    },
    {
        "ID":4,
        "Marca": "LG",
        "Modelo": "LG K3",
        "Ensamblado":"CHINA" ,
        "Precio": 1300
    },
    {
        "ID":5,
        "Marca": "HUAWEI",
        "Modelo": "P9 LITE",
        "Ensamblado":"BRASIL" ,
        "Precio": 2150
    }
];

class Celulares extends Component {
    state = { 
        C:CInicial

     }
    render() {
        return (
            <div className="container-fluid">
                 <div className="Titulo">
                    <div className="container-fluid text-center"> 
                        <hr/>
                        <h1>Celulares</h1>
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
            

        <table className="table-responsive">
        <thead>
        <tr className="text-center">
            <th></th>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ensamblado</th>
            <th>Precio</th>
        </tr>
        </thead>
        <tbody>

            {this.state.C.map(function(C,i){
            var iE=i+1;
            return(
                <tr key={i} className="">

                    <td>
                    <div className="ckbox">
                    <input type="checkbox" id={'checkbox'+iE}  />
                    <label htmlFor={ 'checkbox'+iE} ></label>
                    </div>
                    </td>
                    <td>{C.ID}</td>
                    <td>{C.Marca}</td>
                    <td>{C.Modelo}</td>
                    <td>{C.Ensamblado}</td>
                    <td>{C.Precio}</td>
                    
                    </tr>
            )
            },this)}
            
        </tbody>
    </table>



        </div>
        );
    }
}

export default Celulares;