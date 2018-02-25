import React, { Component } from 'react';
import CSS from './Celulares.css';
var CInicial=
[
    {
        "ID":1,
        "Marca": "SAMSUNG",
        "Modelo": "GRAND PRIME",
        "Ensamblado":"REINO UNIDO" ,
        "Precio": "15000"
    },
    {
        "ID":2,
        "Marca": "MOTOROLA",
        "Modelo": "MOTO G5 PLUS",
        "Ensamblado":"MEXICO" ,
        "Precio": "5000"
    },
    {
        "ID":3,
        "Marca": "APPLE",
        "Modelo": "IPHONE X",
        "Ensamblado":"DUBAI" ,
        "Precio": "250000"
    },
    {
        "ID":4,
        "Marca": "LG",
        "Modelo": "LG K3",
        "Ensamblado":"CHINA" ,
        "Precio": "1300"
    },
    {
        "ID":5,
        "Marca": "HUAWEI",
        "Modelo": "P9 LITE",
        "Ensamblado":"BRASIL" ,
        "Precio": "2150"
    }
];

class Celulares extends Component {
    state = { 
        C:CInicial,
        row: 
        {
        ID:null,
        Marca: "",
        Modelo: "",
        Ensamblado:"" ,
        Precio: ""
        },
        Desactivado:true,
        ID:5,
        ID2:0,    
        CambiarAgregar:1,
        IndexDatos:null,
        fun:true,
        MarcaInvalido: "",
        ModeloInvalido: "",
        EnsambladoInvalido: "",
        PrecioInvalido: "",
        patternMarca:"/^([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,10}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,10})?)/g",
        Precio:"",
        Funcion2:true,
        filaClass:"FilaColor" 
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
            MarcaInvalido: "",
            ModeloInvalido: "",
            EnsambladoInvalido: "",
            PrecioInvalido: "",
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
        Marca: this.state.row.Marca,
        Modelo: this.state.row.Modelo,
        Ensamblado: this.state.row.Ensamblado,
        Precio: this.state.row.Precio
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
        this.RefreshCampInv();
        this.setState({Verificar2:true})
        this.setState({fun: false
        ,IndexDatos})
            var C = this.state.C;
                var Convertir=JSON.stringify(C);
                var obj = JSON.parse(Convertir);
                var IdActTra=obj[IndexDatos].ID;
            var MarcaActTra=obj[IndexDatos].Marca;
            var ModeloActTra=obj[IndexDatos].Modelo;
            var EnsambladoActTra=obj[IndexDatos].Ensamblado;
            var PrecioActTra=obj[IndexDatos].Precio;
        console.log(PrecioActTra)
                var row = {
        ID: IdActTra,
        Marca: MarcaActTra,
        Modelo: ModeloActTra,
        Ensamblado: EnsambladoActTra,
        Precio: PrecioActTra
        }
        this.setState({
            row,
            Desactivado:false,
            fun:false,
            ID2:IdActTra,
            Precio:PrecioActTra

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
                ID: "",
                Marca: "",
                Modelo: "",
                Ensamblado: "",
                Precio: ""
                }
            
            this.setState({fun:true, row ,Desactivado:true,Precio:""})
            document.getElementById("Borrar").style.display = "none"

        }
        createForm = () =>{


            console.log("Agrego");
            this.RefreshCampInv();
    
        
            
                var ids =this.state.ID+1;
                this.setState({ID2:ids})
                var  row= {
                ID:ids,     
                Marca: this.state.row.Marca,
                Modelo: this.state.row.Modelo,
                Ensamblado: this.state.row.Ensamblado,
                Precio: this.state.Precio
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
 
    

    ChangeMarca =()=>{
       
        var Marca=this.state.row.Marca;
        
        if(!/^([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,10}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,10})?)*/g.test(Marca)){
            this.setState({MarcaInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
            console.log("Paso Incorrecto")
        }else{
console.log("Paso Correcto")
            this.setState({MarcaInvalido:""})
         
        }
    }
    ChangeModelo=()=>{
        var Modelo=this.state.row.Modelo;
        
        if(!/^[A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{1}[A-ZÁÀÉÈÍÌÓÒÚÙÑÜ0-9]{1,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ0-9]{2,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ0-9]{2,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ0-9]{2,15})?)?$/g.test(Modelo)){
            this.setState({ModeloInvalido:"Campo invalido"})
            
            this.setState({Desactivado:true})  
        }else{
            this.setState({ModeloInvalido:""})
            
            
        }
    }
    ChangeEnsamblado=()=>{
var Ensamblado=this.state.row.Ensamblado;
if(!/^([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?)*$/g.test(Ensamblado)){
    this.setState({EnsambladoInvalido:"Campo invalido"})
    
    this.setState({Desactivado:true})  
}else{
    this.setState({EnsambladoInvalido:""})
    }   

}
    ChangePrecio=()=>{
        var Precio=this.state.Precio;
        if(!/^[1-9]+[0-9]*([.][0-9])?$/.test(Precio)){
            this.setState({PrecioInvalido:"Campo invalido"})
    this.setState({textAreaClass:"form-control textAreaIncorrecta"})
    
    this.setState({Desactivado:true})  
    
}else{
        this.setState({PrecioInvalido:""})
        this.setState({textAreaClass:"form-control textAreaCorrecta"})
        }
    
    }

    
    Change =(event)=>{

        
        const row =this.state.row;
            
        row[event.target.name]=event.target.value.toUpperCase();
     this.setState({row});

    var Marca=row.Marca.trim();
    var Modelo=row.Modelo.trim();
    var Ensamblado=row.Ensamblado.trim();
    var Precio=row.Precio.trim();
if(Ensamblado.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,50}")){
    if (Marca.match("([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15}))?)")){
        if(Modelo.match("([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15}))?)")){
            if(Precio.match("([1-9]+[0-9]*([.][0-9]{2s})?)")){
                        this.setState({Desactivado:false})
                    }else{this.setState({Desactivado:true})}
                }else{this.setState({Desactivado:true})}
            }else{this.setState({Desactivado:true})}
        }else{this.setState({Desactivado:true})}

        this.ChangeMarca();
        this.ChangeModelo();
        this.ChangeEnsamblado();
        this.ChangePrecio();
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
                        <h1>Celulares</h1>
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
            

        <table className="table-responsive">
        <thead>
        <tr className="text-center">
            <th></th>
            <th>ID</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ensamblado</th>
            <th>Precio</th>
        </tr>
        </thead>
        <tbody>

            {this.state.C.map(function(C,i){
            var iE=i+1;
            return(
                <tr key={i}  className={this.state.filaClass+" FilaColor"+iE} id={"FilaColor"+iE} onClick={()=> this.onClickTr(iE)}>

                    <td>
                    <div className="ckbox">
                    <input type="checkbox" id={'checkbox'+iE}  />
                    <label htmlFor={ 'checkbox'+iE} ></label>
                    </div>
                    </td>
                    <td>{C.ID}</td>
                    <td>{C.Marca}</td>
                    <td>{C.Modelo}</td>
                    <td>{C.Ensamblado}</td>
                    <td>{C.Precio}</td>
                    
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
                <div className="inputs1">
            </div>
            </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label htmlFor="Marca">Marca:</label>
            <input type="text" className="form-control" id="Marca" name="Marca" placeholder=""   value={this.state.row.Marca} onChange={this.Change.bind()} pattern="([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,10}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,10})?)" required maxLength="20"  />
            <label className="Advertencia" >{this.state.MarcaInvalido}</label>  
            </div>
            <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label htmlFor="Modelo">Modelo:</label>
            <input type="text" className="form-control" id="Modelo" name="Modelo" placeholder=""   value={this.state.row.Modelo} onChange={this.Change.bind()} pattern="([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15}))" required maxLength="60"  />
            <label className="Advertencia" >{this.state.ModeloInvalido}</label>  
            </div>   
            <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
            <label htmlFor="Ensamblado">Ensamblado:</label>
            <input type="text" className="form-control" id="Ensamblado" name="Ensamblado" placeholder=""   value={this.state.row.Ensamblado} onChange={this.Change.bind()} pattern="([a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})" required maxLength="30"  />
            <label className="Advertencia" >{this.state.EnsambladoInvalido}</label>  
            </div>
            <div className="form-group col-xs-8">
            <input type="hidden" className="form-control" id="ID" name="ID" placeholder=""   value={this.state.ID2} onChange={this.Change.bind()}    />
            </div>     
            </div>
            <div className="Inputs2 container-fluid">

            <div className="form-group col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <label htmlFor="Precio">Precio:</label>
                <input type="text" className="form-control" id="Precio" name="Precio" placeholder=""   value={this.state.row.Precio} onChange={this.Change.bind()} pattern="[1-9]+[0-9]*([.][0-9])?" required maxLength="8"  />
                <label className="Advertencia" >{this.state.PrecioInvalido}</label>  
            </div>
            </div>
            </div>
            </div>
           
            <div className="text-right">    
            <button type="button" className="btn btn-success" data-toggle="modal" data-target='.bs-example-modal-lg'  onClick={this.CambiarAgregar.bind()} disabled={this.state.Desactivado}>{fun ? 'Agregar' : 'Actualizar'}</button>
            <button type="hidden"  className="btn btn-danger" id="Borrar" onClick={this.Eliminar.bind()}>Borrar</button>
            </div>          
            
            <div className="row">
                <div className="row">
                <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                    <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                            <div className="modal-body">
                            <h2>¡Correcto!</h2>
                            <h4>Celular {this.state.Funcion2 ? 'agregado correctamente.' : 'actualizado correctamente.'}</h4>
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

export default Celulares;