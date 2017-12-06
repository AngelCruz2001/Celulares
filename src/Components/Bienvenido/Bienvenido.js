
import React, { Component } from 'react';
import  './Bienvenido.css';
import JPG_Logo from '../../Assets/JPG_Logo.png';
 var Celular1="6188005053";
 var Celular2="6181234532";
 var Correo1="Jpg_Cel@Hotmail.com";
 var Facebook="Jpg Celulares";



class Bienvenido extends Component {
    state = {  }
    render() {
        return (
            // Todo
            <div className="container"> 
            {/* // Titulo, Boton */} 
            
        {/* <img src={JPG_Logo} width="300" height="300"/> */}
                 <div className="text-center container">
                <h1>Bienvenido</h1>  
                
                <div className="text-right">
                <button type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Iniciar sesion </button>
              
                
                </div>
               </div>
               <br/>
          
                        <div> 
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
                                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">CRUD <span className="caret"></span></a>
                                                <ul className="dropdown-menu">
                                                    <li><a href="#">Trabajadores</a></li>
                                                    <li><a href="#">Camiones</a></li>
                                                    <li><a href="#">Celulares</a></li>
                                                    <li><a href="#">Sucursales</a></li>
                                                    <li><a href="#">Usuarios</a></li>
                                                    <li><a href="#"></a></li>
                                                    {/* <li role="separator" className="divider"></li>
                                                    <li><a href="#">Separated link</a></li>
                                                    <li role="separator" className="divider"></li>
                                                    <li><a href="#">One more separated link</a></li> */}
                                                </ul>
                                                </li>
                                            </ul>
                                    
                                            </div>
                                           
                                        </div>
                                        </nav>
                                        
                <div className="modal fade" id="myModal" role="dialog">
                    <div className="modal-dialog">
                    
                    
                    <div className="modal-content">
                        <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        <h4 className="modal-title">Iniciar Sesion</h4>
                        </div>
                        <div className="modal-body">
                              <div class="container-fluid">
                                
                                    <form action="/action_page.php">
                                        <div class="form-group">
                                        <label for="email">Usuario:</label>
                                        <input type="email" class="form-control" id="email" placeholder="Inserte su usuario" name="email"/>
                                        </div>
                                        <div class="form-group">
                                        <label for="pwd">Contraseña:</label>
                                        <input type="password" class="form-control" id="pwd" placeholder="Inserte su contraseña" name="pwd"/>
                                        </div>
                                        
                                        <button type="submit" class="btn btn-default">Ingresar</button>
                                    </form>
                                        </div>
                                                                </div>
                                                                <div className="modal-footer">
                                                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                                                </div>
                                                            </div>
                                                            
                                                            </div>
                                                        </div>
                       
                    
                        <hr/>
                        <br/>
                     <h1>Imagenes (Carrusel)</h1>
                        <hr/>
                        <br/>
                 <h3>Contacto</h3>
                 <h5>Celular: {Celular1}</h5>
                 <h5>Celular: {Celular2}</h5>           
                 <h5>Correo: {Correo1}</h5>
                 <div>
                     <h5>Facebook:{Facebook}</h5>
                 </div>
            </div> 
         </div> 
             
        );
    }
}

export default Bienvenido;