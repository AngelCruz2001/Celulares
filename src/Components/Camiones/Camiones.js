import React, { Component } from 'react';
import CCS from './Camiones.css'


var CInicial=
[
    {
        "ID": 1,
        "Placa": "NK-64-956",
        "Capacidad": "800KG",
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
        Año:"",
        Funcion2:true,
        filaClass:"FilaColor",
        AñoPattern:"[0-9]{4}"

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
            this.CheckColor(DD);

        }
    }

    if (IdCheck===Extension){
        var ExtensionExcepcion=Extension-1;
        for (ExtensionExcepcion; ExtensionExcepcion!=0; ExtensionExcepcion--){//Abajo
            document.getElementById('checkbox'+ExtensionExcepcion).checked=false;
            this.CheckColor(ExtensionExcepcion);

        }
    }
    for (Extension; Extension!=IdCheck; Extension--){//Abajo
        document.getElementById('checkbox'+Extension).checked=false;
        this.CheckColor(Extension);

    }
    if(document.getElementById('checkbox'+IdCheck).checked){
        this.Traer(IndexDatos);
        this.setState({Funcion2:false})
        document.getElementById("FilaColor"+IdCheck).style.backgroundColor="rgb(35, 198, 192)";
        document.getElementById("Borrar").style.display = "initial"
        this.setState({filaClass:"No"});

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
    onClickTr =(IdCheck)=>{
        var Extension=this.state.C.length;
    
    for (var i=1; i<=Extension; i++){
        if(document.getElementById('checkbox'+i).checked){
            break;
        }
    }
        if(this.state.onClickTr===true){
            document.getElementById('checkbox'+IdCheck).checked=true;
            this.CheckColorOn(IdCheck);
            this.Ver(IdCheck); 
            this.setState({filaClass:"No"});
            this.setState({onClickTr:false})
            
        }else {
            if (IdCheck===i){
                for (var PP=1; PP<=Extension; PP++){ //Arriba
                    document.getElementById('checkbox'+PP).checked=false;
                }
                document.getElementById('checkbox'+IdCheck).checked=false;
                this.CheckColorOn(IdCheck);
                this.setState({onClickTr:true})
                this.Normalidad();
            }else {
                document.getElementById('checkbox'+IdCheck).checked=true;
                this.CheckColorOn(IdCheck);
                this.Ver(IdCheck);
                this.setState({filaClass:"No"});
                this.setState({onClickTr:false})
                var IdCheck2=IdCheck;
                }
            }
    }
    CheckColorOn=(IdCheck)=>{
        var Extension=this.state.C.length;
        if(document.getElementById('checkbox'+IdCheck).checked){
            document.getElementById("FilaColor"+IdCheck).style.backgroundColor="rgb(35, 198, 192)";
        
            
        }else{
            for (var PP=1; PP<=Extension; PP++){ //Arriba
             this.CheckColor(PP);
                
                 
            }
        }
        
    }
    Actualizar =()=>{
        this.RefreshCampInv();
        
        console.log("Cambio");
        this.setState({Funcion2:false})
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
        this.CheckColor(i);

    }
    Traer =(IndexDatos)=>{
        this.setState({PlacaInvalido:"",patternPlaca:"([A-Z]{2}-[0-9]{2}-[0-9]{3})"})
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
            document.getElementById("Borrar").style.display = "none"

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
                this.CheckColor(PP);        
            }

        }
    ChangeAñoS =(event)=>{
        const ValorAño=event.target.value;
        const re= /^[1-2]{1}([0-9]{1,3})?$/
        var Number=parseInt(event.target.value);
        var fecha = new Date();
        var AñoActual = fecha.getFullYear();

        
            if (re.test(event.target.value)||event.target.value==''){
                this.setState({Año:event.target.value})
           
                    if(event.target.value.length===4){
                        if(Number>=1999 && Number<=AñoActual){
                            this.setState({AñoInvalido:""})
                            this.setState({AñoPattern:"[0-9]{4}"});
                    }else{
                        this.setState({AñoInvalido:"Uy, parece que este camion no existe"})
                        this.setState({Desactivado:true})  
                        this.setState({AñoPattern:"0000"});
                    }
            }
            }
        

    }
    ChangePlaca =()=>{
       
        var Placa=this.state.row.Placa;
        if(!/^([A-Z]{2}-\d{2}-\d{3})*$/g.test(Placa)){
            this.setState({PlacaInvalido:"¡Ey! Revisa este campo."})
            this.setState({Desactivado:true})  
        }else{

            this.setState({PlacaInvalido:""})
            console.log(Placa.length, this.state.Funcion2)
            if (Placa.length==9 && this.state.Funcion2===true){
                this.PlacaRepetida();
            }
        }
    }
    ChangeCapacidad=()=>{
        var Capacidad=this.state.row.Capacidad;
        if(Capacidad.length>0){
        if(!/^[1-9]{1}[0-9]{2,8}(KG)/g.test(Capacidad)){
            this.setState({CapacidadInvalido:"¡Ey! Revisa este campo."})
            
            this.setState({Desactivado:true})  
        }else{
            this.setState({CapacidadInvalido:""})
            
            
        }
    }
}
    ChangeModelo=()=>{
var Modelo=this.state.row.Modelo;
if(!/^([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?)*$/g.test(Modelo)){
    this.setState({ModeloInvalido:"¡Ey! Revisa este campo."})
    
    this.setState({Desactivado:true})  
}else{
    this.setState({ModeloInvalido:""})
    }   

}
    ChangeAño=()=>{
        var Año=this.state.Año;
        if(!/^[0-9]*$/g.test(Año)){
            this.setState({AñoInvalido:"¡Ey! Revisa este campo."})
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
                        
                        this.setState({PlacaInvalido:"Ups, esta placa ya se encuentra registrada."})
                        this.setState({Desactivado:true,patternPlaca:"asd"})
                        console.log(this.state.patternPlaca)
                        
                        break;
                    }else{
                        //No existe
                        console.log("No Existente")

                    this.setState({PlacaInvalido:"",patternPlaca:"([A-Z]{2}-[0-9]{2}-[0-9]{3})"})
                    
                }

                }
    }
    Change =(event)=>{

        
        const row =this.state.row;
            
        row[event.target.name]=event.target.value.toUpperCase();
     this.setState({row});

    var Placa=row.Placa.trim();
    var Capacidad=row.Capacidad.trim();
    var Modelo=row.Modelo.trim();
    var Año=this.state.Año.trim();
if(Modelo.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,50}")){
    if (Placa.match("[A-Z0-9-]{9,9}")){
        if(Capacidad.match("(([1-9]{1}[0-9]{2,8}KG))")){
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
        if (fun===true){
           this.createForm();
        }
        if(fun===false){
        this.Actualizar();
        }
    }

    PlacaRepetidaCheck =(event)=>{
        var Placa=event.target.value;
        var Extension=Placa.length;
        var Funcion2=this.state.Funcion2;
        var C = this.state.C;
        var Id=this.state.ID2;
        var IndexDatos=this.state.IndexDatos;
        var Convertir=JSON.stringify(C);
        var obj = JSON.parse(Convertir);
        var Extension = Placa.length;

        if (Funcion2===false){
            if(Placa.length===9){
            if (obj[IndexDatos].Placa === Placa) {
                console.log("Placa para actualizar")
                console.log(obj[IndexDatos].Placa, Placa)
            }else{

                for (var i = 0; i < C.length; i++) {
                    if (C[i].Placa == Placa) {
                        
                        this.setState({PlacaInvalido:"Ups, esta placa ya se encuentra registrada."})
                        this.setState({patternPlaca:"asd"}) //Existe       
                         this.setState({Desactivado:true})
                      break;
                    }else{
                     
                     this.setState({PlacaInvalido:"",patternPlaca:"([A-Z]{2}-[0-9]{2}-[0-9]{3})"})
                     
    }
                }


            }
    }
    }
}
CheckColor =(PP)=>{
    var C=this.state.C;
    var Extension=C.length;
    for (var PP=1; PP<=Extension; PP++){
        if(PP%2==0) {
            var Color="#ddd";
        }else{
            var Color="#FFFFFF";
            
        }             
        this.setState({filaClass:"FilaColor"});
        
        document.getElementById("FilaColor"+PP).style.backgroundColor=Color;
    }
}
onClickTr =(IdCheck)=>{
    var Extension=this.state.C.length;
for (var i=1; i<=Extension; i++){
    if(document.getElementById('checkbox'+i).checked){
        break;
    }
}
if(this.state.onClickTr===true && as===true){
    console.log(1)
    document.getElementById('checkbox'+IdCheck).checked=true;
    this.CheckColorOn(IdCheck);
    this.Ver(IdCheck); 
        this.setState({filaClass:"No"});
        this.setState({onClickTr:false})
        
    }else {
        if (IdCheck===i){
            console.log(2)
            for (var PP=1; PP<=Extension; PP++){ //Arriba
                document.getElementById('checkbox'+PP).checked=false;
            }
            document.getElementById('checkbox'+IdCheck).checked=false;
            this.CheckColorOn(IdCheck);
            this.setState({onClickTr:true})
            this.Normalidad();
            
        }else {
            
            console.log(3)
            document.getElementById('checkbox'+IdCheck).checked=true;
            this.CheckColorOn(IdCheck);
            this.Ver(IdCheck);
            this.setState({filaClass:"No"});
            this.setState({onClickTr:false})
            var as=true;
            var IdCheck2=IdCheck;
            }
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
                        <li><a href="#">Sucursales</a></li>
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
            <table className="table-responsive">
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

            {this.state.C.map(function(C,i){
            var iE=i+1;
            return(
                <tr key={i} className={this.state.filaClass+" FilaColor"+iE} id={"FilaColor"+iE} onClick={()=> this.onClickTr(iE)}>

                    <td>
                    <div className="ckbox">
                    <input type="checkbox" id={'checkbox'+iE}  />
                    <label htmlFor={ 'checkbox'+iE} ></label>
                    </div>
                    </td>
                    <td>{C.ID}</td>
                    <td>{C.Placa}</td>
                    <td>{C.Capacidad}</td>
                    <td>{C.Modelo}</td>
                    <td>{C.Año}</td>
                    
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
                <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="Placa">Placa:</label>
                    <input type="text" className="form-control" id="Placa" name="Placa" placeholder=""   value={this.state.row.Placa} onChange={this.PlacaRepetidaCheck.bind()} onInput={this.Change.bind()} pattern={this.state.patternPlaca} required maxLength="9"  />
                    <label className="Advertencia" >{this.state.PlacaInvalido}</label>  
        </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label htmlFor="Capacidad">Capacidad:</label>
                <input type="text" className="form-control" id="Capacidad" name="Capacidad" placeholder=""   value={this.state.row.Capacidad} onChange={this.Change.bind()} pattern="(([1-9]{1}[0-9]{2,8}KG))" required maxLength="7"  />
                <label className="Advertencia" >{this.state.CapacidadInvalido}</label>  
                
        </div>   
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                                        <label htmlFor="Año">Año:</label>
                                        <input type="text" className="form-control" id="Año" name="Año" placeholder=""   value={this.state.Año} onChange={this.ChangeAñoS.bind()} pattern={this.state.AñoPattern} required maxLength="4"  />
                                        <label className="Advertencia" >{this.state.AñoInvalido}</label>  
                                    </div>
                                    <div className="form-group col-xs-8">
                                        <input type="hidden" className="form-control" id="ID" name="ID" placeholder=""   value={this.state.ID2} onChange={this.Change.bind()}    />
                                    </div>     
        </div>
        <div className="Inputs2">
        <div className="container-fluid">
        
        <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
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
                                                        <h4>Camión {this.state.Funcion2 ? 'agregado correctamente.' : 'actualizado correctamente.'}</h4>
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