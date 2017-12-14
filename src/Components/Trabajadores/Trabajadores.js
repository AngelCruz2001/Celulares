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
        ID:5,
    
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
   
    
     getTrabajadores () {
    
            var T = [
               {
                   "ID": 1,
                   "Curp": "JIFB010925MASMGRA2",
                   "Nombre": "BRENDA",
                   "Apellidos": "JIMENEZ FIGUEROA",
                   "FechaNacimiento":"2001/09/25" ,
                   "FechaAdmision":"2017/08/21" ,
                   "Sueldo": "5000",
                   "Puesto": "ATENCION AL PUBLICO" 
               },
               {
                   "ID": 2,
                   "Curp": "CARG010921HDGHMRA5",
                   "Nombre": "GERARDO",
                   "Apellidos": "CHAVEZ ROMAN",
                   "FechaNacimiento":"2001/09/21" ,
                   "FechaAdmision":"2016/08/18" ,
                   "Sueldo": "4500",
                   "Puesto": "REPARADOR" 
               },
               {
                   "ID": 3,
                   "Curp": "CUGA010714HDGRRNA1",
                   "Nombre": "ANGEL",
                   "Apellidos": "CRUZ GARCIA",
                   "FechaNacimiento":"2001/07/14" ,
                   "FechaAdmision":"2013/10/21" ,
                   "Sueldo": "5000",
                   "Puesto": "GERENTE/DUEÑO" 
           
               },
               {
                   "ID": 4,
                   "Curp": "GOZE001107MDWEROA1",
                   "Nombre": "ELIZABETH",
                   "Apellidos": "GONZALEZ SAUCEDO",
                   "FechaNacimiento":"2000/11/25" ,
                   "FechaAdmision":"2015/05/16" ,
                   "Sueldo": "2000",
                   "Puesto": "VENDEDOR" 
           
               },
               {
                   "ID": 5,
                   "Curp": "UYRT120908MIQIERA1",
                   "Nombre": "MIGUEL ANGEL",
                   "Apellidos": "SANCHEZ MORAN",
                   "FechaNacimiento":"2001/04/18" ,
                   "FechaAdmision":"2014/12/24" ,
                   "Sueldo": "7000",
                   "Puesto": "CONDUCTOR" 
               
               }
           ]
           this.setState({
               T
           })
   }

     Change = (event) =>{
        const row =this.state.row;
    row[event.target.name]=event.target.value;
   
    this.setState({row});

    
    // this.setState({row:T})
    } 
    createForm = () =>{
    //     const Id=this.state.Id+1;
    //     this.setState({Id})
    //     const T=this.state.T;
    //     const Datos=this.state.row;
    //  var Maximo=Math.max(this.state.T.ID);
//    var DatosAct=new Array(this.state.row);
// var DatosAct=Array.from(this.state.row);
    //  var DatosAct = Array.prototype.slice.apply(this.state.row);

    //   this.setState({
    //       Id:this.state.Id+1
    //   })  
    //   var IdAct='"ID":'+this.state.Id;
    //   console.log(IdAct);
    //   this.setState({
    //     Id_Act:this.state.Id+1
    // })  
        // const Id_Trab1=this.state.Id_Trab+1; //5+1 (Id actual + 1)
        // var Id_Trab=new Array(Id_Trab1);  //Se transforma el dato anterior Array
        // this.state.Id.concat(Id_Trab); //Se concatena en el Array con el ID
        // this.setState({
        //     row: this.state.row.concat([this.state.Id])
        // });
        // console.log('Id: ',this.state.Id)
        // console.log('6=',Id_Trab1)
        // console.log('Array: Con "6" ',Id_Trab)
        // this.setState({
        //     row: this.state.row.concat([this.state.Id_Act])
        // });
        // T.push(this.state.row)
        // this.setState({T})
        var ids = this.state.ID + 1;
        var row = {
            ID: ids,
            Curp: this.state.row.Curp,
            Nombre: this.state.row.Nombre,
            Apellidos: this.state.row.Apellidos,
            FechaNacimiento: this.state.row.FechaNacimiento,
            FechaAdmision: this.state.row.FechaAdmision,
            Sueldo: this.state.row.Sueldo,
            Puesto: this.state.row.Puesto 
        }

        this.setState({ 
            T: this.state.T.concat([row]),
             ID: ids 
          });
          console.log(this.state.row);
           console.log(this.state.T)
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
                                <th>Id</th>
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
                            //  var t_Id=t.ID;
                            //  this.setState({Id_Trab:t_Id});
                             
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
                                    <td>{t.ID}</td>
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
                                
                                <button type="button" className="btn btn-success" onClick={this.updateForm.bind()} >{fun ? 'Actualizar': 'Agregar'}</button>
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
                                <div className="form-group col-xs-4">
                                <input type="hidden" className="form-control" name="ID" id="Id"  value={this.state.ID} onChange={this.Change.bind()} />
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
                                <button type="button" className="btn btn-success"  onClick={this.createForm.bind()}>{fun ? 'Agregar' : 'Actualizar'}</button>
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
                        
      <h1>{this.state.Id}</h1>
                </div>
      
        );
    }
} 

export default Trabajadores;