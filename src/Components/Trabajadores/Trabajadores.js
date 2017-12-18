import React, { Component } from 'react';
import CSS from './Trabajadores.css';

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
        "Puesto": "GERENTE/DUEÑO" 

    },
    {
        "ID": 4,
        "Curp": "GOZE001107MDWEROA1",
        "Nombre": "ELIZABETH",
        "Apellidos": "GONZALEZ SAUCEDO",
        "FechaNacimiento":"2000/11-25" ,
        "FechaAdmision":"2015-05-16" ,
        "Sueldo": "2000",
        "Puesto": "VENDEDOR" 

    },
    {
        "ID": 5,
        "Curp": "UYRT120908MIQIERA1",
        "Nombre": "MIGUEL ANGEL",
        "Apellidos": "SANCHEZ MORAN",
        "FechaNacimiento":"2001-04-18" ,
        "FechaAdmision":"2014-12-24" ,
        "Sueldo": "7000",
        "Puesto": "CONDUCTOR" 
    
    }
 ];

class Trabajadores extends Component {

     
    state = { 
        T:TInicial,
        fun: true, 
        CambiarAgregar:1,
        ID:5,
        Desactivado:true,
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
            }
      
     
     }
     Refresh =()=>{
         this.setState({
             T:TInicial
         });
     }

            
        
    componentDidMount(){
   
  
    }

    TraerCrear =()=>{
        var fun=this.state.fun;
        if(fun===true){
         this.Traer();
        }
        if(fun==false){
            this.Normalidad();
         this.setState({fun:true})
        }
    }
Ver =(IdCheck)=>{
    console.log(IdCheck.target.value)
    var T=this.state.T;
    var Extension=T.length;
    var Desactivado=IdCheck+1
    
    for (var X=IdCheck; X<Extension;X++)

    if(document.getElementById('checkbox'+X).checked){
        
        for (var i=Desactivado; i<=Extension; i++){
            document.getElementById('checkbox'+i).checked=false;
            }

        }
        console.log(IdCheck,"Desactivado: "+Desactivado);
    }
    CambiarAgregar =()=>{
        var fun=this.state.fun;
        if (fun===true){
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
          
          var X=this.state.T.concat([row])
          console.log(X);
           TInicial=X;
           this.Refresh();
           console.log("Agrego");
           this.setState({CambiarAgregar:1});
        }
        if(fun===false){
            var IndexDatos=1;
            var row = {
                ID: this.state.row.ID,
                Curp: this.state.row.Curp,
                Nombre: this.state.row.Nombre,
                Apellidos: this.state.row.Apellidos,
                FechaNacimiento: this.state.row.FechaNacimiento,
                FechaAdmision: this.state.row.FechaAdmision,
                Sueldo: this.state.row.Sueldo,
                Puesto: this.state.row.Puesto 
            }
            this.state.T[IndexDatos] = row;
             
               this.Refresh();
               console.log(this.state.T);
               console.log("Cambio");
               this.setState({fun: true})
               this.Normalidad();
               this.setState({CambiarAgregar:2,Desactivado:true});

        }
        
        
        
        console.log(this.state.CambiarAgregar);
    }
    Traer =()=>{
        this.setState({fun: false})
        // var  i, j, x = "";
        //     var T=this.state.T;
        //     for (i in T.Trabajadores) {
        //         x += T.Trabajadores[i].Nombre +"<br/>"  this.setState({Traer:x});
        
        var IndexDatos=1;
        
            var T = this.state.T;
             var Convertir=JSON.stringify(T);
             var obj = JSON.parse(Convertir);
             var IdActTra=obj[IndexDatos].ID;
            var CurpActTra=obj[IndexDatos].Curp;
            var NombreActTra=obj[IndexDatos].Nombre;
            var ApellidosActTra=obj[IndexDatos].Apellidos;
            var FechaNacimientoActTra=obj[IndexDatos].FechaNacimiento;
            var FechaAdmisionActTra=obj[IndexDatos].FechaAdmision;
            var SueldoActTra=obj[IndexDatos].Sueldo;
            var PuestoActTra=obj[IndexDatos].Puesto;
            
            // var FechaNacimientoTraer = new date (FechaNacimientoActTra).getFullYear();
        
                var row = {
        ID: IdActTra,
        Curp: CurpActTra,
        Nombre: NombreActTra,
        Apellidos: ApellidosActTra,
        FechaNacimiento: FechaNacimientoActTra,
        FechaAdmision: FechaAdmisionActTra,
        Sueldo: SueldoActTra,
        Puesto: PuestoActTra }
        this.setState({
            row,
            Desactivado:false,
            fun:false
        })
        
           
            }

    updateForm = () =>{
        this.setState({fun: false})
       
    }
    Cambiar =()=>{
         var IndexDatos=1;
        var row = {
            ID: this.state.row.ID,
            Curp: this.state.row.Curp,
            Nombre: this.state.row.Nombre,
            Apellidos: this.state.row.Apellidos,
            FechaNacimiento: this.state.row.FechaNacimiento,
            FechaAdmision: this.state.row.FechaAdmision,
            Sueldo: this.state.row.Sueldo,
            Puesto: this.state.row.Puesto 
        }
        this.state.T[IndexDatos] = row;
         
           this.Refresh();
           console.log(this.state.T);
           console.log("Cambio");
           this.setState({fun: true})
           this.Normalidad();
    }
    Checked =()=>{
        document.form.checkbox1.checked=false;
    }
    
    Normalidad () {
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
    var rowVacio = {
            ID: null,
            Curp: "",
            Nombre: "",
            Apellidos: "",
            FechaNacimiento: "",
            FechaAdmision: "",
            Sueldo: "",
            Puesto: "" 
        }
        
        if(row.Curp!=rowVacio.Curp){
            if(row.Nombre!=rowVacio.Nombre){
                if(row.Apellidos!=rowVacio.Apellidos){
                    if(row.FechaNacimiento!=rowVacio.FechaNacimiento){
                        if(row.FechaAdmision!=rowVacio.FechaAdmision){
                            if(row.Sueldo!=rowVacio.Sueldo){
                                if(row.Puesto!=rowVacio.Puesto){
                                  this.setState({Desactivado:false})
                                }else{this.setState({Desactivado:true})}
                            }else{this.setState({Desactivado:true})}
                        }else{this.setState({Desactivado:true})}
                    }else{this.setState({Desactivado:true})}
                }else{this.setState({Desactivado:true})}             
            }else{this.setState({Desactivado:true})}
        }else{this.setState({Desactivado:true})}     
       
    
    // this.setState({row:T})
    } 
    createForm = () =>{

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
          
          var X=this.state.T.concat([row])
          console.log(X);
           TInicial=X;
           this.Refresh();
           console.log("Agrego");
        // this.setState({ 
        //     T: this.state.T.concat({row}),
        //      ID: ids 
        //   });
        //   console.log(this.state.row);
        //    console.log(this.state.T)


        //   this.Normalidad();
        }

     trselected = () => {}
    Eliminar =(event)=> {
      
        this.state.T.splice(2, 1);
    }
    render() {
        let fun = this.state.fun;
        let Trabajadores=this.state.T;
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
                              
                            {Trabajadores.map(function(t,i){
                            //  var t_Id=t.ID;
                            //  this.setState({Id_Trab:t_Id});
                             
                                return  (
                              
                                <tr key={i} >
                                     <td>
                                     {/* <label className="btn btn-success active">
                                     <input type="radio" name="options"  autocomplete="off"/>
                                     <span className="glyphicon glyphicon-ok"></span>
                                 </label> */}
                                            {/*  */}
                                          
 											<div className="ckbox">
 											<input type="checkbox" id={'checkbox'+t.ID} onClick={this.Ver.bind(t.ID)} />
                                             <label htmlFor={ 'checkbox'+t.ID} ></label>
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
                            }.bind(this))}                               
                                </tbody>
                        </table>
                      
                                <div className="text-right container">
                                <button type="button" className="btn btn-danger" onClick={this.state.Eliminar}>Borrar</button>
                                
                                <button type="button" className="btn btn-success" onClick={this.TraerCrear.bind()} >{fun ? 'Actualizar': 'Agregar'}</button>
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
                                <button type="button" className="btn btn-success"  onClick={this.CambiarAgregar.bind()} disabled={this.state.Desactivado}>{fun ? 'Agregar' : 'Actualizar'}</button>
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
                      
<br/>
                        <br/>
                        <br/>
                        <br/>
                </div>
        );
    }
} 

export default Trabajadores;