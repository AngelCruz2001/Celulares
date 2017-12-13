import React, { Component } from 'react';
import CSS from './Trabajadores.css';



class Trabajadores extends Component {
    // componentDidMount() {
    //     ('.ckbox label').on('click', function () {
    //         (this).parents('tr').toggleClass('selected');
    //       });
    //       s('.star').on('click', function () {
    //         s(this).toggleClass('star-checked');
    //       });
    //     }
     
    state = { 
        T: [],
        fun: true, 
        
        row:
            {
            ID: null,
            Curp: "",
            Nombre: "",
            Apellidos: "",
            FechaNacimiento: "",
            FechaAdmision: "",
            Sueldo: "",
            Puesto: "" 
            },
       
        Limpio:""
     }

    componentDidMount(){
        this.getTrabajadores();

        // ('.ckbox label').on('click', function () {
        //             (this).parents('tr').toggleClass('selected');
        //           });
        //           ('.star').on('click', function () {
        //            (this).toggleClass('star-checked');
        //           });
    }

    updateForm = () =>{
        this.setState({fun: false})
    }
    createForm = () =>{
        this.setState({fun: true})
    }
    Normalidad =()=>{
        var row = {
            ID: null,
            Curp: "",
            Nombre: "",
            Apellidos: "",
            FechaNacimiento: "",
            FechaAdmision: "",
            Sueldo: "",
            Puesto: "" 
        }
        this.setState({fun:true, row })
        
    }
    Change = (event) =>{
        const row =this.state.row;
    row[event.target.name]=event.target.value;
    this.setState({row});

    } 
    
     getTrabajadores () {
         var T = [
            {
                "ID": 1,
                "Curp": "JIFB010925MASMGRA2",
                "Nombre": "BRENDA",
                "Apellidos": "JIMENEZ FIGUEROA",
                "FechaNacimiento": "25/09/2001",
                "FechaAdmision": "21/08/2017",
                "Sueldo": "5000",
                "Puesto": "ATENCION AL PUBLICO" 
            },
            {
                "ID": 2,
                "Curp": "CARG010921HDGHMRA5",
                "Nombre": "GERARDO",
                "Apellidos": "CHAVEZ ROMAN",
                "FechaNacimiento": "21/09/2001",
                "FechaAdmision": "18/08/2016",
                "Sueldo": "4500",
                "Puesto": "REPARADOR" 
            },
            {
                "ID": 3,
                "Curp": "CUGA010714HDGRRNA1",
                "Nombre": "ANGEL",
                "Apellidos": "CRUZ GARCIA",
                "FechaNacimiento": "14/07/2001",
                "FechaAdmision": "21/10/2013",
                "Sueldo": "5000",
                "Puesto": "GERENTE/DUEÑO" 
        
            },
            {
                "ID": 4,
                "Curp": "GOZE001107MDWEROA1",
                "Nombre": "ELIZABETH",
                "Apellidos": "GONZALEZ SAUCEDO",
                "FechaNacimiento": "25/11/2000",
                "FechaAdmision": "16/05/2015",
                "Sueldo": "2000",
                "Puesto": "VENDEDOR" 
        
            },
            {
                "ID": 5,
                "Curp": "UYRT120908MIQIERA1",
                "Nombre": "MIGUEL ANGEL",
                "Apellidos": "SANCHEZ MORAN",
                "FechaNacimiento": "18/04/2001",
                "FechaAdmision": "24/12/2014",
                "Sueldo": "7000",
                "Puesto": "CONDUCTOR" 
            
            }
        ]
        this.setState({
            T
        })
     }

     trselected = () => {}
    Eliminar =(event)=> {
      
        this.state.T.splice(2, 1);
    }
    render() {
        let fun = this.state.fun;
    
        return (

                <div className="container-fluid">
            
                    <br/>
                    <div className="Titulo">
                        <div className="container-fluid text-center"> 
                        <hr/>
                        <h1>Trabajadores</h1>
                        <hr/>
                        </div>
                    </div>
                    <br/>

                    <table className="table table-fixed">
                            <thead>
                                <tr>
                                <th></th>
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
                              
                                <tr key={i} >
                                     <td>
                                     {/* <label className="btn btn-success active">
                                     <input type="radio" name="options"  autocomplete="off"/>
                                     <span className="glyphicon glyphicon-ok"></span>
                                 </label> */}
                                            
                                          
 											<div className="ckbox">
 											<input type="checkbox" id={'checkbox'+t.ID}/>
                                             <label htmlFor={ 'checkbox'+t.ID}></label>
 											</div>
									</td>
                                    <td>{t.Nombre}</td>
                                    <td>{t.Apellidos}</td>
                                    <td>{t.FechaNacimiento}</td>
                                    <td>{t.Sueldo}</td>
                                    <td>{t.Puesto}</td>
                                    <td>{t.Curp}</td>
                                </tr> 
                                )
                            })}                               
                                </tbody>
                        </table>
                      
                                <div className="text-right container">
                                <button type="button" className="btn btn-danger" onClick={this.state.Eliminar}>Borrar</button>
                                
                                <button type="button" className="btn btn-success" onClick={this.updateForm.bind()}>{fun ? 'Actualizar': 'Agregar'}</button>
                                </div>
                                
                        <div className="text-center">
                        <h3>{fun ? 'Agregar' : 'Actualizar'}</h3>
                        <br/>
                        </div>
                        <div>
                        <div className="row">
                        <div className="container-fluid inputs1">
                                <div className="form-group col-xs-4">
                                <label htmlFor="Nombre">Nombre:</label>
                                <input type="text" className="form-control" name="Nombre" placeholder="" value={this.state.row.Nombre} onChange={this.Change.bind()}/>
                                </div>
                                <div className="form-group col-xs-4">
                                <label htmlFor="Apellidos">Apellidos:</label>
                                <input type="text" className="form-control" name="Apellidos" placeholder="" value={this.state.row.Apellidos} onChange={this.Change.bind()}/>
                                </div>
                                
                                <div className="form-group col-xs-4">
                                <label htmlFor="FechaNacimiento">Fecha de nacimiento:</label>
                                <input type="date" className="form-control" placeholder="" name="FechaNacimiento" value={this.state.row.FechaNacimiento} onChange={this.Change.bind()}/>
                                </div>
                                </div>
                                </div>
                                <div className="row">
                                <div className="container-fluid inputs2">
                                <div className="form-group col-xs-4"> 
                                <label htmlFor="FechaAdmision">Fecha de admision:</label>
                                <input type="date" className="form-control" name="FechaAdmision" id="fechaAdmision" value={this.state.row.FechaAdmision} onChange={this.Change.bind()}/>
                                </div>
                                <div className="form-group col-xs-4"> 
                                <label htmlFor="Sueldo">Sueldo:</label>
                                <input type="text" className="form-control" name="Sueldo" id="Sueldo" value={this.state.row.Sueldo} onChange={this.Change.bind()}/>
                                </div>
                                <div className="form-group col-xs-4"> 
                                <label htmlFor="Puesto">Puesto:</label>
                                <input type="text" className="form-control" name="Puesto" id="Puesto" value={this.state.row.Puesto} onChange={this.Change.bind()}/>
                                </div>
                                <div className="form-group col-xs-4"> 
                                <label htmlFor="Curp">Curp:</label>
                                <input type="text" className="form-control" name="Curp" id="Curp" value={this.state.row.Curp} onChange={this.Change.bind()}/>
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
                                <button type="button" className="btn btn-success">{fun ? 'Agregar' : 'Actualizar'}</button>
                                <button type="button" className="btn btn-danger" onClick={this.Normalidad.bind()} >Cancelar</button>
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
                        
 <div className="container">			

 	<div className="well well-sm text-center">

 		<h3>Radio</h3>
		
 		<div className="btn-group" data-toggle="buttons">
			
 			<label className="btn btn-success active">
 				<input type="radio" name="options"  autocomplete="off" />
 				<span className="glyphicon glyphicon-ok"></span>
 			</label>
             <label className="btn btn-success active">
 				<input type="radio" name="options"  autocomplete="off"/>
 				<span className="glyphicon glyphicon-ok"></span>
 			</label>
			
		
 		</div>


               
 	</div>

 </div> 

                </div>
      
        );
    }
} 

export default Trabajadores;