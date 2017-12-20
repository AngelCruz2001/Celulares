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
        "FechaNacimiento":"2000-11-25" ,
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
        IndexDatos:null,
        ID2: null,
       
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
        document.getElementById("Borrar").style.display = "none"
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
Ver = (IdCheck) => {
    var Cambio=this.state.Cambio;
    var T=this.state.T;
    var Extension=T.length;
    var Desactivado=IdCheck+1
    var IndexDatos=IdCheck-1;
    // console.log(IdCheck);
    // console.log(Extension);
    
        if(Cambio==="Alteracion"){
            for (var PP=1; PP<=Extension; PP++){ //Arriba
                document.getElementById('checkbox'+PP).checked=false;
                 
            }
        }


        if(Extension!=IdCheck){
    for (var DD=1; DD!=IdCheck; DD++){ //Arriba
        document.getElementById('checkbox'+DD).checked=false;
         
    }
}
if (IdCheck===Extension){
    var ExtensionExcepcion=Extension-1;
    for (ExtensionExcepcion; ExtensionExcepcion!=0; ExtensionExcepcion--){//Abajo
        document.getElementById('checkbox'+ExtensionExcepcion).checked=false;
   
    }
}
    for (Extension; Extension!=IdCheck; Extension--){//Abajo
        document.getElementById('checkbox'+Extension).checked=false;
        
    }
    if(document.getElementById('checkbox'+IdCheck).checked){
       console.log("Activado")
       this.Traer(IndexDatos);
     console.log(this.state.Desactivado);
     document.getElementById("Borrar").style.display = "initial"
    }else{
        console.log("Desactivado")
        this.Normalidad();
        console.log(this.state.Desactivado);
        document.getElementById("Borrar").style.display = "none"
    }
    
   
    
    
    
    
    for (var X=IdCheck; X<Extension;X++)

    if(document.getElementById('checkbox'+X).checked){
        
        for (var i=Desactivado; i<=Extension; i++){
            document.getElementById('checkbox'+i).checked=false;
            }

        }
    //     console.log(Desactivado);
    }
    CambiarAgregar =()=>{
        var fun=this.state.fun;
        if (fun===true){
            
        
            var ids =this.state.ID+1;
            this.setState({ID2:ids})
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
        
           TInicial=X;
           this.Refresh();
           console.log("Agrego");
           this.setState({CambiarAgregar:1,ID:ids});
           console.log('Lenght: ');
           this.Normalidad();
        }
        if(fun===false){
            var IndexDatos=this.state.IndexDatos;
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
             
            //    this.Refresh();
               console.log(this.state.T);
               console.log("Cambio");
               this.setState({fun: true})
               this.Normalidad();
               this.setState({CambiarAgregar:2,Desactivado:true});
               var T=this.state.T;
               var Extension=T.length;
               for(var i=1; i<=Extension; i++)
               document.getElementById('checkbox'+i).checked=false;
            console.log(i);
            document.getElementById("Borrar").style.display = "none"
        }
        
        
        
        
    }
    Traer =(IndexDatos)=>{
        this.setState({fun: false
        ,IndexDatos})
       
        // var  i, j, x = "";
        //     var T=this.state.T;
        //     for (i in T.Trabajadores) {
        //         x += T.Trabajadores[i].Nombre +"<br/>"  this.setState({Traer:x});
        
        
        
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
            fun:false,
            ID2:IdActTra
        })
        console.log(row)
           
            }

    updateForm = () =>{
        this.setState({fun: false})
       
    }
   
    Checked =()=>{
        document.form.checkbox1.checked=false;
    }
    
    Normalidad () {
        var IDO=this.state.ID;
        var row = {
            ID: IDO,
            Curp: "",
            Nombre: "",
            Apellidos: "",
            FechaNacimiento: "",
            FechaAdmision: "",
            Sueldo: "",
            Puesto: "" 
        }
       
        this.setState({fun:true, row ,Desactivado:true})

    }
   
    
   

     Change = (event) =>{
        var ids =this.state.ID+1;
        this.setState({ID2:ids})
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

    // isValidate (){
    //     const { ID, Curp, Nombre, Apellidos, FechaNacimiento, FechaAdmision, Sueldo, Puesto } = this.state.row;
    //     if(ID || !Curp || !Nombre || !Apellidos || !FechaNacimiento || !FechaAdmision || !Sueldo || !Puesto){
    //             return true
    //     }
    //     return false;
    // }

    createForm = () =>{
        var ID=this.state.T.length;
        
        var ids =ID+1;
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
          console.log(this.state.T);
           TInicial=X;
           this.Refresh();
           console.log("Agrego");
           console.log('Lenght: ',ID);
        // this.setState({ 
        //     T: this.state.T.concat({row}),
        //      ID: ids 
        //   });
        //   console.log(this.state.row);
        //    console.log(this.state.T)


        //   this.Normalidad();
        }

     
     
    Eliminar =()=> {
        var T = this.state.T;
        var Convertir=JSON.stringify(T);
        var obj = JSON.parse(Convertir);
        for (var i = 0; i < obj.length; i++) {
            if (obj[i].ID == this.state.ID2) {
                obj.splice(i, 1);

              break;
            }
          }
this.setState({T:obj})
console.log(this.state.T.ID)
   
 console.log(obj);//json sin su elemento          
     
           //     var T=this.state.T;
        var IndexDatos=this.state.IndexDatos;
    //    var Azul=T.splice(IndexDatos,1);
    //    console.log(Azul);



        // document.getElementById("DatosT").deleteRow(IndexDatos);
        
        
        this.Normalidad();
        var Extension=T.length;
        document.getElementById("Borrar").style.display = "none"
        for (var PP=1; PP<=Extension; PP++){ //Arriba
            document.getElementById('checkbox'+PP).checked=false;
             
        }
    }
    Id =()=>{
        console.log(this.state.ID);
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
                   
                    <table className="table table-fixed" id="DatosT">
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
                            
                             var IdCheck=t.ID;
                              var iE=i+1;
                                return  (
                              
                                <tr key={i} >
                                     <td>
                                     {/* <label className="btn btn-success active">
                                     <input type="radio" name="options"  autocomplete="off"/>
                                     <span className="glyphicon glyphicon-ok"></span>
                                 </label> */}
                                            {/*  */}
                                          
 											<div className="ckbox">
                                             
 											<input type="checkbox" id={'checkbox'+iE} onClick={() => this.Ver(iE)} />
                                             <label htmlFor={ 'checkbox'+iE} ></label>
                                            
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
                            },this)}                               
                                </tbody>
                        </table>
                      
                                
                                
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
                                <input type="hidden" className="form-control" name="ID" id="Id"  value={this.state.ID2} onChange={this.Change.bind()} />
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
                                <button type="hidden"  className="btn btn-danger" id="Borrar" onClick={this.Eliminar.bind()}>Borrar</button>
                                
                                
                                
                                </div>
                  
                          
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