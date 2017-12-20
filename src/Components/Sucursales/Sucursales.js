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
        T:SInicial,
        fun: true, 
        CambiarAgregar:1,
        ID:5,
        Desactivado:true,
        IndexDatos:null,
       
        row:
            {
            ID: null,
            Ciudad: "",
            Pais: "",
            Direccion: "",
            Telefono: ""
            }
      
     
     }
     Refresh =()=>{
         this.setState({
             T:SInicial
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
        
           SInicial=X;
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
             
               this.Refresh();
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
            ID:IdActTra
        })
        console.log(row)
           
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
           SInicial=X;
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
            if (obj[i].ID == this.state.ID) {
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
        document.getElementById("Borrar").style.display = "none"
        }
    render() {
        let fun = this.state.fun;
        let Trabajadores=this.state.T;
        return (
        <div className="Todo">
     
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
                                    <th>Ciudad</th>
                                    <th>Pais</th>
                                    <th>Direccion</th>
                                    <th>Telefono</th>
                                    </tr>
                                </thead>
                                
                                <tbody>
                                
                                {Trabajadores.map(function(s,i){
                                var IdCheck=s.ID;
                                var iE=i+1;
                                    return  (
                                    <tr key={i} >
                                        <td>
                                                <div className="ckbox">
                                                <input type="checkbox" id={'checkbox'+iE} onClick={() => this.Ver(iE)} />
                                                <label htmlFor={ 'checkbox'+iE} ></label>
                                                </div>
                                        </td>
                                        <td>{s.ID}</td>
                                        <td>{s.Ciudad}</td>
                                        <td>{s.Pais}</td>
                                        <td>{s.Direccion}</td>
                                        <td>{s.Telefono}</td>
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
                                    <label htmlFor="Nombre">Ciudad:</label>
                                    <input type="text" className="form-control" name="Nombre" placeholder="" value={this.state.row.Nombre} onChange={this.Change.bind()}/>
                                    </div>
                                    <div className="form-group col-xs-4">
                                    <label htmlFor="Apellidos">Pais:</label>
                                    <input type="text" className="form-control" name="Apellidos" placeholder="" value={this.state.row.Apellidos} onChange={this.Change.bind()}/>
                                    </div>
                                    <div className="form-group col-xs-4">
                                    <label htmlFor="FechaNacimiento">Direccion:</label>
                                    <input type="text" className="form-control" placeholder="" name="FechaNacimiento" value={this.state.row.FechaNacimiento} onChange={this.Change.bind()}/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="row">
                                    <div className="container-fluid inputs2">
                                    <div className="form-group col-xs-4"> 
                                    <label htmlFor="FechaAdmision">Telefono:</label>
                                    <input type="text" className="form-control" name="FechaAdmision" id="fechaAdmision" value={this.state.row.FechaAdmision} onChange={this.Change.bind()}/>
                                    </div>
                                    </div>
                                    </div>
                                    
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
                </div>
                </div>
      

);
    }
}

export default Sucursales;