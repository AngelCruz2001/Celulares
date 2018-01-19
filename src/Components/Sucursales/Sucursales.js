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
        S:SInicial,
        row: 
        {
            ID: null,
            Ciudad: "",
            Pais: "",
            Direccion:"", 
            Telefono:""
        },
        Desactivado:true,
        ID:5,
        ID2:null,
        CambiarAgregar:1,
        IndexDatos:null,
        fun:true,
        PaisInvalido:"",
        CiudadInvalido:"",
        TelefonoInvalido:"",
        DireccionInvalido:"",
        textAreaClass:"form-control"
    }
    componentDidMount(){
        document.getElementById("Borrar").style.display = "none"
    }
    ChangePais =()=>{
       
        var Pais=this.state.row.Pais;
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ ]*$/g.test(Pais)){
            this.setState({PaisInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
        }else{
            this.setState({PaisInvalido:""})
            
        }
    }
    ChangeCiudad=()=>{
        var Ciudad=this.state.row.Ciudad;
        
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ ]*$/g.test(Ciudad)){
            this.setState({CiudadInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
        }else{
            this.setState({CiudadInvalido:""})
            
        }
    }
    ChangeTelefono=()=>{
var Telefono=this.state.row.Telefono;
if(!/^[0-9]{1,13}?$/g.test(Telefono)){
    this.setState({TelefonoInvalido:"Campo invalido"})
               
    this.setState({Desactivado:true})  
}else{
    this.setState({TelefonoInvalido:""})
    }   

}
    ChangeDireccion=()=>{
        var Direccion=this.state.row.Direccion;
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9#". ]*$/g.test(Direccion)){
            this.setState({DireccionInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
    }else{
        this.setState({DireccionInvalido:""})
    
        }
        if(Direccion.length<1){
            this.setState({textAreaClass:"form-control"})
        }
    
    }
    Change =(event)=>{

        var ids =this.state.ID+1;
        this.setState({ID2:ids})
        const row =this.state.row;
            
        row[event.target.name]=event.target.value.toUpperCase();
     this.setState({row});


    var Ciudad=row.Ciudad.trim();
    var Pais=row.Pais.trim();
    var Direccion=row.Direccion.trim();
    var Telefono=row.Telefono.trim();
console.log(Direccion)
if(/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9#". ]*$/g.test(Direccion)){
    this.setState({textAreaClass:"form-control textAreaCorrecta"})
    
    if (Ciudad.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,30}")){
        if(Pais.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,30}")){
            if(Telefono.match("[0-9-]{2,20}")){
                        this.setState({Desactivado:false})
                    }else{this.setState({Desactivado:true})}
                }else{this.setState({Desactivado:true})}
            }else{this.setState({Desactivado:true})}
        }else{this.setState({Desactivado:true,textAreaClass:"form-control textAreaIncorrecta"})}

        this.ChangeCiudad();
        this.ChangePais();
        this.ChangeDireccion();
        this.ChangeTelefono();
    }
    Eliminar=()=>{
        // this.RefreshCampInv();
        var S = this.state.S;
        var Convertir=JSON.stringify(S);
        var obj = JSON.parse(Convertir);
        for (var i = 0; i < obj.length; i++) {
        console.log(obj[i].ID)
            
            if (obj[i].ID == this.state.ID2) {
                obj.splice(i, 1);

              break;
            }
          }
        this.setState({S:obj})
        console.log(obj);         
            
        var IndexDatos=this.state.IndexDatos;
 
        this.Normalidad();
        var Extension=S.length;
        document.getElementById("Borrar").style.display = "none"
        for (var PP=1; PP<=Extension; PP++){ //Arriba
            document.getElementById('checkbox'+PP).checked=false;
             
        }
    }
    CambiarAgregar=()=>{
var fun=this.state.fun;
if(fun===true){
    this.Agregar();
}else if(fun===false){
this.Actualizar();
}
    }
    Agregar=()=>{
   
        console.log("Agrego");
        // this.RefreshCampInv();

      
         
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
        var row= {
            ID: ids,
            Ciudad: this.state.row.Ciudad,
            Pais: this.state.row.Pais,
            Direccion:this.state.row.Direccion, 
            Telefono:this.state.row.Telefono
        }
       
          var X=this.state.S.concat([row])
console.log(X)
this.setState({S:X})
console.log(this.state.S)
this.setState({CambiarAgregar:1,ID:ids});
        
           this.Normalidad();
       
    }
    Actualizar=()=>{
        // this.RefreshCampInv();
        
        console.log("Cambio");
        this.setState({fun1:false})
        var IndexDatos=this.state.IndexDatos;
        var row= {
            ID: this.state.row.ID,
            Ciudad: this.state.row.Ciudad,
            Pais: this.state.row.Pais,
            Direccion:this.state.row.Direccion, 
            Telefono:this.state.row.Telefono
        }
         this.state.S[IndexDatos] = row;
         
           
           this.Normalidad();
           this.setState({CambiarAgregar:2,Desactivado:true});
           
           var S=this.state.S;
           var Extension=S.length;
           for(var i=1; i<=Extension; i++)
           document.getElementById('checkbox'+i).checked=false;
        console.log(i);
        document.getElementById("Borrar").style.display = "none"
    }
    Traer=(IndexDatos)=>{
        this.setState({IndexDatos,fun: false})
        var S = this.state.S;
        var Convertir=JSON.stringify(S);
        var obj = JSON.parse(Convertir);
        var IdActTra=obj[IndexDatos].ID;
       var CiudadActTra=obj[IndexDatos].Ciudad;
       var PaisActTra=obj[IndexDatos].Pais;
       var TelefonoActTra=obj[IndexDatos].Telefono;
       var DireccionActTra=obj[IndexDatos].Direccion;
       var row={
           ID:IdActTra,
           Ciudad:CiudadActTra,
           Pais:PaisActTra,
           Telefono:TelefonoActTra,
           Direccion:DireccionActTra
       }
       this.setState({
           row,Desactivado:false,ID2:IdActTra
       })
    }
    Ver=(IdCheck)=>{
        var S=this.state.S;
    var Extension=S.length;
    var Desactivado=IdCheck+1
    var IndexDatos=IdCheck-1;
    console.log(IdCheck);
    console.log(Extension);
    this
       


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
     document.getElementById("Borrar").style.display = "initial"
    }else{
        console.log("Desactivado")
        this.Normalidad();
        document.getElementById("Borrar").style.display = "none"
    }
    for (var X=IdCheck; X<Extension;X++)

    if(document.getElementById('checkbox'+X).checked){
        
        for (var i=Desactivado; i<=Extension; i++){
            document.getElementById('checkbox'+i).checked=false;
            }

    }
}
Normalidad=()=>{
    var IDO=this.state.ID;
    var row = {
        ID: IDO,
        Ciudad: "",
        Pais: "",
        Direccion:"", 
        Telefono:""
    }
   
    this.setState({row:row,Desactivado:true,fun:true})

}
    render() {
        let fun =this.state.fun;
        return (
            <div className="container-fluid">

            <div className="" >
        
            <div className="Titulo">
                        <div className="container-fluid text-center"> 

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
                                        <div className="container-fluid">
                                        <div className="TablaToda ">
            <table class="table table-fixed">
        <thead>
        <tr className="text-center">
            <th></th>
            <th>ID</th>
            <th>Ciudad</th>
            <th>Pais</th>
            <th>Direccion</th>
            <th>Telefono</th>
        </tr>
        </thead>
        <tbody>

            {this.state.S.map(function(t,i){
            var iE=i+1;
            return(
                    <tr key = {i}>
                    <td>
                    <div className="ckbox">
                    <input type="checkbox" id={'checkbox'+iE}  onClick={() => this.Ver(iE)}/>
                    <label htmlFor={ 'checkbox'+iE} ></label>
                    </div>
                    </td>
                    <td>{t.ID}</td>
                    <td>{t.Ciudad}</td>
                    <td>{t.Pais}</td>
                    <td>{t.Direccion}</td>
                    <td>{t.Telefono}</td>
                    
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
                </div>
                </div>
                <div className="form-group col-xs-4">
                <label htmlFor="Ciudad">Ciudad:</label>
                    <input type="text" className="form-control" id="Ciudad" name="Ciudad" placeholder=""   value={this.state.row.Ciudad} onChange={this.Change.bind()} pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,30}" required  />
                    <label className="Advertencia" >{this.state.CiudadInvalido}</label>  
        </div>
            <div className="form-group col-xs-4">
            <label htmlFor="Pais">Pais:</label>
                <input type="text" className="form-control" id="Pais" name="Pais" placeholder=""   value={this.state.row.Pais} onChange={this.Change.bind()} pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,30}" required  />
                <label className="Advertencia" >{this.state.PaisInvalido}</label>  
                
        </div>
        <div className="form-group col-xs-4">
            <label htmlFor="Telefono">Telefono:</label>
                <input type="text" className="form-control" id="Telefono" name="Telefono" placeholder=""   value={this.state.row.Telefono} onChange={this.Change.bind()} pattern="[0-9-]{2,20}" required maxLength="13"  />
                <label className="Advertencia" >{this.state.TelefonoInvalido}</label>  
       
        </div>
       
        
        
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="container-fluid inputs2">
                            <div className="form-group col-xs-4">
                                    <label htmlFor="Direccion">Direccion:</label>
                                    <textarea rows="3" name="Direccion" cols="50" className={this.state.textAreaClass} form="usrform" onChange={this.Change.bind()} value={this.state.row.Direccion} pattern="[A-Z]{1,30}(,[A-Z]{1,30})*" required></textarea>
                                      <label className="Advertencia" >{this.state.DireccionInvalido}</label>  
                               </div>
                                <div className="form-group col-xs-8">
                                    <input type="hidden" className="form-control" id="ID" name="ID" placeholder=""   value={this.state.ID2} onChange={this.Change.bind()} pattern="[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,100}" required  />
                                </div> 
                                    
                            </div>
                        </div>
                    </div>
                        </div>
                        </div>
                        <div className="text-right container">    
                                        <button type="button" className="btn btn-success" data-toggle="modal"  onClick={this.CambiarAgregar.bind()} disabled={this.state.Desactivado}>{fun ? 'Agregar' : 'Actualizar'}</button>
                                        <button type="hidden"  className="btn btn-danger" id="Borrar" onClick={this.Eliminar.bind()}>Borrar</button>
                                        </div>

                        
            </div>
            </div>
            </div>
            
                
      

);
    }
}

export default Sucursales;