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
        fun1:true,
        CambiarAgregar:1,
        ID:5,
        Desactivado:true,
        IndexDatos:null,
        ID2: 0,
       
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
            Verificar:0
      
     
     }
     Refresh =()=>{
         this.setState({
             T:TInicial
         });
     }

            
        
    componentDidMount(){
        document.getElementById("Borrar").style.display = "none"
    }

  
Ver = (IdCheck) => {

    var T=this.state.T;
    var Extension=T.length;
    var Desactivado=IdCheck+1
    var IndexDatos=IdCheck-1;
    console.log(IdCheck);
    console.log(Extension);
    
       


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
        this.setState({fun1:true});
        if (fun===true){
           this.createForm();
        }
        if(fun===false){
        this.Actualizar();
        }
        
        
        
        
    }

    Actualizar =()=>{
        console.log("Cambio");
        this.setState({fun1:false})
        var IndexDatos=this.state.IndexDatos;
        console.log(this.state.IndexDatos)
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
    Traer =(IndexDatos)=>{
        this.setState({fun: false
        ,IndexDatos})
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
   
    
     mayus = (e) => {
        e.value = e.value.toUpperCase();
    }

    
     Change = (event) =>{
      
        var ids =this.state.ID+1;
        this.setState({ID2:ids})
  
        const row =this.state.row;
        
    row[event.target.name]=event.target.value.toUpperCase();
   
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

        if(row.Curp.match("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$")){
            if(row.Nombre.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                if(row.Apellidos.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                    if(row.FechaNacimiento!=rowVacio.FechaNacimiento){
                        if(row.FechaAdmision!=rowVacio.FechaAdmision){
                            if(row.Sueldo.match("[0-9]+[^.]")){
                                if(row.Puesto.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                                    this.setState({Desactivado:false})
                                }else{this.setState({Desactivado:true})}
                            }else{this.setState({Desactivado:true})}
                        }else{this.setState({Desactivado:true})}
                    }else{this.setState({Desactivado:true})}
                }else{this.setState({Desactivado:true})}             
            }else{this.setState({Desactivado:true})}
        }else{this.setState({Desactivado:true})}  


        
    } 

 

    createForm = () =>{
        console.log("Agrego");
        var T=this.state.T;
        var Verificar=this.state.Verificar;
        var Extension=T.length;
        for (var i = 0; i < Extension; i++) {
            if (T[i].Curp === this.state.row.Curp) {
                 Verificar=1;
              break;
            }else{
                console.log("Curp no repetida: ",T[i].Curp)
            }
          } 
          if (Verificar===0){
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
          if(this.state.Verificar===0){
          var X=this.state.T.concat([row])
          }else{
              console.log("Existente")
          }
           TInicial=X;
           this.Refresh();
           
           this.setState({CambiarAgregar:1,ID:ids});
        
           this.Normalidad();
          }else {
              console.log("Curp Repetida")
          }
       
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
        let fun1 = this.state.fun1;
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
                    
                        <div className="Cuerpo">
                       
                                <div className="TablaToda ">
                           
                             
                            
                            <table className="table table-fixed" id="DatosT">
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
                                    
                                    {Trabajadores.map(function(t,i){
                                    
                                    var IdCheck=t.ID;
                                    var iE=i+1;
                                        return  (
                                    
                                        <tr key={i} >
                                            <td className="TDCheck">
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
                                        
                                        
                                            <div className="Titulo2 text-center">
                                            <h3>{fun ? 'Agregar' : 'Actualizar'}</h3>
                                            <br/>
                                            </div>
                                            <div>
                                            <div className="inputsTodos">
                                            <div className="container-fluid">
                                            <div className="row">
                                            <div className="container-fluid inputs1">

                                                    <div className="form-group col-xs-4">
                                                    <label htmlFor="Nombre">Nombre:</label>
                                                    <input type="text" className="form-control glyphicon glyphicon-ok" name="Nombre" placeholder="" value={this.state.row.Nombre}  onChange={this.Change.bind()} pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}" required/>
                                                    </div>
                                                    <div className="form-group col-xs-4">
                                                    <label htmlFor="Apellidos">Apellidos:</label>
                                                    <input type="text" className="form-control" name="Apellidos" placeholder="" value={this.state.row.Apellidos} onChange={this.Change.bind()} pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}" required/>
                                                    </div>
                                                    
                                                    <div className="form-group col-xs-4">
                                                    <label htmlFor="FechaNacimiento">Fecha de nacimiento:</label>
                                                    <input type="date"  className="form-control" placeholder="" name="FechaNacimiento" value={this.state.row.FechaNacimiento} onChange={this.Change.bind()} required/>
                                                    </div>
                                                    </div>
                                                    </div>
                                                    <div className="row">
                                                    <div className="container-fluid inputs2">
                                                    <div className="form-group col-xs-4"> 
                                                    <label htmlFor="FechaAdmision">Fecha de admision:</label>
                                                    <input type="date" className="form-control" name="FechaAdmision" id="fechaAdmision" value={this.state.row.FechaAdmision} onChange={this.Change.bind()} required/>
                                                    </div>
                                                    <div className="form-group col-xs-4"> 
                                                    <label htmlFor="Sueldo">Sueldo:</label>
                                                    <input type="text" className="form-control" name="Sueldo" id="Sueldo" value={this.state.row.Sueldo} onChange={this.Change.bind()}pattern="[0-9]+[^.]" required/>
                                                    </div>
                                                    <div className="form-group col-xs-4"> 
                                                    <label htmlFor="Puesto">Puesto:</label>
                                                    <input type="text" className="form-control" name="Puesto" id="Puesto" value={this.state.row.Puesto} onChange={this.Change.bind()} pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}" required/>
                                                    </div>
                                                    <div className="form-group col-xs-4"> 
                                                    <label htmlFor="Curp">Curp:</label>
                                                    <input type="text" className="form-control" name="Curp" id="Curp" value={this.state.row.Curp} onChange={this.Change.bind()} pattern="^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$"  required/>
                                                    </div>
                                                    <div className="form-group col-xs-4">
                                                    <input type="hidden" className="form-control" name="ID" id="Id"  value={this.state.ID2} onChange={this.Change.bind()} />
                                                    </div>
                                                    <i className="fa fa-check check-ok"></i>
                                                    <br/>
                                                    </div>
                                                    </div>
                                            </div>
                                            </div>
                                         </div>     
                                
            

                                        <br/>
                                        <div className="text-right container">
                                        
                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target=".bs-example-modal-lg"  onClick={this.CambiarAgregar.bind()} disabled={this.state.Desactivado}>{fun ? 'Agregar' : 'Actualizar'}</button>
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
                                
                                <div className="container">
                                    <div className="row">
                                    
                                    
                                        <div className="row">


                                            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                        <div className="modal-body">
                                                        <h2>¡Correcto!</h2>
                                                        <h4>Trabajador {fun1 ? 'agregado correctamente.' : 'actualizado correctamente.'}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                        
                        

                                </div>
                </div>
               
        );
    }
} 

export default Trabajadores;