import React, { Component } from 'react';
import CCS from './Camiones.css'


var CInicial=
[
    {
        "ID": 1,
        "Placa": "NK-64-956",
        "Capacidad": "80KG",
        "Modelo": "SCANIA",
        "Año": "2018"
    },
    {     
        "ID": 2,
        "Placa": "KY-00-783",
        "Capacidad": "300KG",
        "Modelo": "MAN",
        "Año": "2018"
    },
    {
        
        "ID": 3,
        "Placa": "EC-67-239",
        "Capacidad": "100KG",
        "Modelo": "HINO",
        "Año": "1999"
    }
]
class Camiones extends Component {
    state = {  
        C:CInicial,
        row: 
        {
        ID:null,     
        Placa: "",
        Capacidad: "",
        Modelo: "",
        Año: ""
        },
        Desactivado:true,
        ID:5,
        ID2:0,    
        CambiarAgregar:1,
        IndexDatos:null,
        fun:true,
        PlacaInvalido: "",
        CapacidadInvalido: "",
        ModeloInvalido: "",
        AñoInvalido: "",
        patternPlaca:"([A-Z]{2}-[0-9]{2}-[0-9]{3})",
        Año:""
    }
    Refresh =()=>{
        this.setState({
            C:CInicial
        });
    }
    componentDidMount(){
        document.getElementById("Borrar").style.display = "none"
    }
    RefreshCampInv =()=>{
        this.setState({
            PlacaInvalido: "",
            CapacidadInvalido: "",
            ModeloInvalido: "",
            AñoInvalido: "",
        });
      }
      Ver = (IdCheck) => {

        var C=this.state.C;
        var Extension=C.length;
        var Desactivado=IdCheck+1
        var IndexDatos=IdCheck-1;
        
           
    
    
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
    }
    Actualizar =()=>{
        this.RefreshCampInv();
        
        console.log("Cambio");
        this.setState({fun1:false})
        var IndexDatos=this.state.IndexDatos;
        var  row= {
        ID:this.state.row.ID,     
        Placa: this.state.row.Placa,
        Capacidad: this.state.row.Capacidad,
        Modelo: this.state.row.Modelo,
        Año: this.state.row.Año
        }
            this.state.C[IndexDatos] = row;
            
        //    this.Refresh();
            
            this.setState({fun: true})
            this.Normalidad();
            this.setState({CambiarAgregar:2,Desactivado:true});
            
            var C=this.state.C;
            var Extension=C.length;
            for(var i=1; i<=Extension; i++)
            document.getElementById('checkbox'+i).checked=false;
        console.log(i);
        document.getElementById("Borrar").style.display = "none"
    }
    Traer =(IndexDatos)=>{
        this.RefreshCampInv();
        this.setState({Verificar2:true})
        this.setState({fun: false
        ,IndexDatos})
            var C = this.state.C;
                var Convertir=JSON.stringify(C);
                var obj = JSON.parse(Convertir);
                var IdActTra=obj[IndexDatos].ID;
            var PlacaActTra=obj[IndexDatos].Placa;
            var CapacidadActTra=obj[IndexDatos].Capacidad;
            var ModeloActTra=obj[IndexDatos].Modelo;
            var AñoActTra=obj[IndexDatos].Año;
        
                var row = {
        ID: IdActTra,
        Placa: PlacaActTra,
        Capacidad: CapacidadActTra,
        Modelo: ModeloActTra,
        Año: AñoActTra
        }
        this.setState({
            row,
            Desactivado:false,
            fun:false,
            ID2:IdActTra,
            Año:AñoActTra

        })
            
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
                ID: "",
                Placa: "",
                Capacidad: "",
                Modelo: "",
                Año: ""
                }
            
            this.setState({fun:true, row ,Desactivado:true,Año:""})
    
        }
        createForm = () =>{


            console.log("Agrego");
            this.RefreshCampInv();
    
        
            
                var ids =this.state.ID+1;
                this.setState({ID2:ids})
                var  row= {
                ID:ids,     
                Placa: this.state.row.Placa,
                Capacidad: this.state.row.Capacidad,
                Modelo: this.state.row.Modelo,
                Año: this.state.Año
                }
        
            var X=this.state.C.concat([row])
    this.setState({C:X})
    this.setState({CambiarAgregar:1,ID:ids});
            
            this.Normalidad();
            }            
            Eliminar =()=> {
            this.RefreshCampInv();
            var C = this.state.C;
            var Convertir=JSON.stringify(C);
            var obj = JSON.parse(Convertir);
            for (var i = 0; i < obj.length; i++) {
                if (obj[i].ID == this.state.ID2) {
                    obj.splice(i, 1);
    
                    break;
                }
                }
            this.setState({C:obj})
            
                
                //     var C=this.state.C;
            var IndexDatos=this.state.IndexDatos;
            this.Normalidad();
            var Extension=C.length;
            document.getElementById("Borrar").style.display = "none"
            for (var PP=1; PP<=Extension; PP++){ //Arriba
                document.getElementById('checkbox'+PP).checked=false;
                    
            }
        }
    ChangeAñoS =(event)=>{
        const ValorAño=event.target.value;
        const re= /^[1-2]{1}([0-9]{1,3})?$/
        if (re.test(event.target.value)||event.target.value==''){
            this.setState({Año:event.target.value})
        }

    }
    ChangePlaca =()=>{
       
        var Placa=this.state.row.Placa;
        if(!/^([A-Z]{2}-\d{2}-\d{3})*$/g.test(Placa)){
            this.setState({PlacaInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
        }else{

            this.setState({PlacaInvalido:""})
            if (Placa.length==9 && this.state.fun1===true){
                this.PlacaRepetida();
            }
        }
    }
    ChangeCapacidad=()=>{
        var Capacidad=this.state.row.Capacidad;
        
        if(!/^(\d{2,5}KG)*$/g.test(Capacidad)){
            this.setState({CapacidadInvalido:"Campo invalido"})
            
            this.setState({Desactivado:true})  
        }else{
            this.setState({CapacidadInvalido:""})
            
            
        }
    }
    ChangeModelo=()=>{
var Modelo=this.state.row.Modelo;
if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?$/g.test(Modelo)){
    this.setState({ModeloInvalido:"Campo invalido"})
    
    this.setState({Desactivado:true})  
}else{
    this.setState({ModeloInvalido:""})
    }   

}
    ChangeAño=()=>{
        var Año=this.state.Año;
        if(!/^[0-9]*$/g.test(Año)){
            this.setState({AñoInvalido:"Campo invalido"})
    this.setState({textAreaClass:"form-control textAreaIncorrecta"})
    
    this.setState({Desactivado:true})  
    
}else{
        this.setState({AñoInvalido:""})
        this.setState({textAreaClass:"form-control textAreaCorrecta"})
        }
    
    }

    PlacaRepetida =()=>{
        var C=this.state.C;
        var Placa=this.state.row.Placa.trim();
        var Extension = Placa.length;
                for (var i = 0; i < C.length; i++) {
                    if (C[i].Placa == this.state.row.Placa) {
                        
                        this.setState({PlacaInvalido:"Placa Repetida"})
                        this.setState({Desactivado:true,patternPlaca:"asd"})
                        console.log(this.state.patternPlaca)
                        this.setState({Modal:false}) //Existe       
                        
                        break;
                    }else{
                        //No existe
                        console.log("No Existente")

                    this.setState({PlacaInvalido:"",patternPlaca:"([A-Z]{2}-[0-9]{2}-[0-9]{3})"})
                    
                }

                }
    }
    Change =(event)=>{

        var ids =this.state.ID+1;
        this.setState({ID2:ids})
        const row =this.state.row;
            
        row[event.target.name]=event.target.value.toUpperCase();
     this.setState({row});

    var Placa=row.Placa.trim();
    var Capacidad=row.Capacidad.trim();
    var Modelo=row.Modelo.trim();
    var Año=this.state.Año.trim();
if(Modelo.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,50}")){
    if (Placa.match("[A-Z0-9-]{9,9}")){
        if(Capacidad.match("[0-9KG]{3,7}")){
            if(Año.match("[0-9]{4}")){
                        this.setState({Desactivado:false})
                    }else{this.setState({Desactivado:true})}
                }else{this.setState({Desactivado:true})}
            }else{this.setState({Desactivado:true})}
        }else{this.setState({Desactivado:true})}

        this.ChangePlaca();
        this.ChangeCapacidad();
        this.ChangeModelo();
        this.ChangeAño();
    }
    CambiarAgregar=()=>{
        var fun=this.state.fun;
        this.setState({fun1:true});
        if (fun===true){
           this.createForm();
        }
        if(fun===false){
        this.Actualizar();
        }
    }
   
    
    render() {
        let fun =this.state.fun;
        
        return (
            <div className="container-fluid">
                <div className="Titulo">
                    <div className="container-fluid text-center"> 
                        <hr/>
                        <h1>Camiones</h1>
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
            <div className="row">
                                        <div className="container-fluid">
            <table className="tableCamiones table-fixed">
        <thead>
        <tr className="text-center">
            <th></th>
            <th>ID</th>
            <th>Placa</th>
            <th>Capacidad</th>
            <th>Modelo</th>
            <th>Año</th>
        </tr>
        </thead>
        <tbody>

            {this.state.C.map(function(c,i){
            var iE=i+1;
            return(
                    <tr key = {i}>
                    <td>
                    <div className="ckbox">
                    <input type="checkbox" id={'checkbox'+iE}  onClick={() => this.Ver(iE)}/>
                    <label htmlFor={ 'checkbox'+iE} ></label>
                    </div>
                    </td>
                    <td>{c.ID}</td>
                    <td>{c.Placa}</td>
                    <td>{c.Capacidad}</td>
                    <td>{c.Modelo}</td>
                    <td>{c.Año}</td>
                    
                    </tr>
            )
            },this)}
            
        </tbody>
    </table>
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
                <label htmlFor="Placa">Placa:</label>
                    <input type="text" className="form-control" id="Placa" name="Placa" placeholder=""   value={this.state.row.Placa} onChange={this.Change.bind()} pattern={this.state.patternPlaca} required maxLength="9"  />
                    <label className="Advertencia" >{this.state.PlacaInvalido}</label>  
        </div>
            <div className="form-group col-xs-4">
            <label htmlFor="Capacidad">Capacidad:</label>
                <input type="text" className="form-control" id="Capacidad" name="Capacidad" placeholder=""   value={this.state.row.Capacidad} onChange={this.Change.bind()} pattern="(\d{2,5}KG)" required maxLength="7"  />
                <label className="Advertencia" >{this.state.CapacidadInvalido}</label>  
                
        </div>   
        <div className="form-group col-xs-4">
                                        <label htmlFor="Año">Año:</label>
                                        <input type="text" className="form-control" id="Año" name="Año" placeholder=""   value={this.state.Año} onChange={this.ChangeAñoS.bind()} pattern="[0-9]{4}" required maxLength="4"  />
                                        <label className="Advertencia" >{this.state.AñoInvalido}</label>  
                                    </div>
                                    <div className="form-group col-xs-8">
                                        <input type="hidden" className="form-control" id="ID" name="ID" placeholder=""   value={this.state.ID2} onChange={this.Change.bind()}    />
                                    </div>     
        </div>
        <div className="Inputs2">
        <div className="container-fluid">
        
        <div className="form-group col-xs-4">
            <label htmlFor="Modelo">Modelo:</label>
            <input type="text" className="form-control" id="Modelo" name="Modelo" placeholder=""   value={this.state.row.Modelo} onChange={this.Change.bind()} pattern="^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?" required maxLength="20"  />
            <label className="Advertencia" >{this.state.ModeloInvalido}</label>  
        </div>
        </div>
        </div>
                     </div>
                        </div>
                        <div className="text-right container">    
                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target='.bs-example-modal-lg'  onClick={this.CambiarAgregar.bind()} disabled={this.state.Desactivado}>{fun ? 'Agregar' : 'Actualizar'}</button>
                                        <button type="hidden"  className="btn btn-danger" id="Borrar" onClick={this.Eliminar.bind()}>Borrar</button>
                                        </div>

                        
            </div>
                                    <div className="row">
                                    
                                    
                                        <div className="row">

                                            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                        <div className="modal-body">
                                                        <h2>¡Correcto!</h2>
                                                        <h4>Camión {this.state.fun1 ? 'agregado correctamente.' : 'actualizado correctamente.'}</h4>
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

export default Camiones ;