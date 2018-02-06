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
        "Puesto": "GERENTE" 

    },
    {
        "ID": 4,
        "Curp": "GOZE000512MDGRRNA1",
        "Nombre": "ELIZABETH",
        "Apellidos": "GONZALEZ SAUCEDO",
        "FechaNacimiento":"2000-11-25" ,
        "FechaAdmision":"2015-05-16" ,
        "Sueldo": "2000",
        "Puesto": "VENDEDOR" 

    },
    {
        "ID": 5,
        "Curp": "SAMM010418HASNRGA2",
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
        Funcion2:true,
        CambiarAgregar:1,
        ID:5,
        Desactivado:true,
        IndexDatos:null,
        ID2: 0,
       Modal:true,
       NombreInvalido:"",
       ApellidosInvalidos:"",
       PuestoInvalido:"",
       SueldoInvalido:"",
       CurpInvalido:"",
       Vocal:"",
       patternCurp:"^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$",
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
            Verificar:0,
            Verificar2:false,
            filaClass:"FilaColor" 
     
     }
     Refresh =()=>{
         this.setState({
             T:TInicial
         });
     }

            
        
    componentDidMount(){
        document.getElementById("Borrar").style.display = "none"
    }

  RefreshCampInv =()=>{
    this.setState({
    NombreInvalido:"",
    ApellidosInvalidos:"",
    PuestoInvalido:"",
    SueldoInvalido:"",
    CurpInvalido:""
    });
  }
Ver = (IdCheck) => {

    var T=this.state.T;
    var Extension=T.length;
    var Desactivado=IdCheck+1
    var IndexDatos=IdCheck-1;
        if(Extension!=IdCheck){
    for (var DD=1; DD!=IdCheck; DD++){ //Arriba
        document.getElementById('checkbox'+DD).checked=false;
        if(DD%2==0) {
            var Color="#ddd";
        }else{
            var Color="#FFFFFF";
            
        }             
     this.setState({filaClass:"FilaColor"});
        
        document.getElementById("FilaColor"+DD).style.backgroundColor=Color;
    }
}
if (IdCheck===Extension){
    var ExtensionExcepcion=Extension-1;
    for (ExtensionExcepcion; ExtensionExcepcion!=0; ExtensionExcepcion--){//Abajo
        document.getElementById('checkbox'+ExtensionExcepcion).checked=false;
        if(ExtensionExcepcion%2==0) {
            var Color="#ddd";
        }else{
            var Color="#FFFFFF";
            
        }             
        document.getElementById("FilaColor"+ExtensionExcepcion).style.backgroundColor=Color;
    
    }
}
    for (Extension; Extension!=IdCheck; Extension--){//Abajo
        document.getElementById('checkbox'+Extension).checked=false;
        if(Extension%2==0) {
            var Color="#ddd";
        }else{
            var Color="#FFFFFF";
            
        }             
        document.getElementById("FilaColor"+Extension).style.backgroundColor=Color;
    
        
    }
    if(document.getElementById('checkbox'+IdCheck).checked){
       this.Traer(IndexDatos);
       this.setState({Funcion2:false})
     document.getElementById("Borrar").style.display = "initial"
     document.getElementById("FilaColor"+IdCheck).style.backgroundColor="rgb(35, 198, 192)";
     this.setState({filaClass:"No"});
    }else{
        this.Normalidad();
        document.getElementById("Borrar").style.display = "none"

        for (var PP=1; PP<=Extension; PP++){ //Arriba
            if(PP%2==0) {
                var Color="#ddd";
            }else{
                var Color="#FFFFFF";
                
            }    
            this.setState({filaClass:"FilaColor"});
                     
            document.getElementById("FilaColor"+PP).style.backgroundColor=Color;
        }




    }
    for (var X=IdCheck; X<Extension;X++)

    if(document.getElementById('checkbox'+X).checked){
        
        for (var i=Desactivado; i<=Extension; i++){
            document.getElementById('checkbox'+i).checked=false;
            }

        }
    }
    CambiarAgregar =()=>{
        var fun=this.state.fun;
        if (fun===true){
           this.createForm();
        }
        if(fun===false){
        this.Actualizar();
        }
        
        
        
        
    }

    Actualizar =()=>{
        this.RefreshCampInv();
        
        // this.setState({Funcion2:false})
        
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
           
           this.setState({fun: true})
           this.Normalidad();
           this.setState({CambiarAgregar:2,Desactivado:true});
           
           var T=this.state.T;
           var Extension=T.length;
           for(var i=1; i<=Extension; i++){
           document.getElementById('checkbox'+i).checked=false;
        document.getElementById("Borrar").style.display = "none"
        for (var PP=1; PP<=Extension; PP++){ //Arriba
            document.getElementById('checkbox'+PP).checked=false;
            if(PP%2==0) {
                var Color="#ddd";
            }else{
                var Color="#FFFFFF";
                
            }             
            this.setState({filaClass:"FilaColor"});
            
            document.getElementById("FilaColor"+PP).style.backgroundColor=Color;
        }
     
        
    }
    }
    onClickTr =(IdCheck)=>{
        var Extension=this.state.T.length;
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
        Traer =(IndexDatos)=>{
        this.setState({CurpInvalido:"",patternCurp:"^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$"})
        this.RefreshCampInv();
        this.setState({Verificar2:true,Modal:false})
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
           
            }

    updateForm = () =>{
        this.setState({fun: false})
       
    }
  
    Checked =()=>{
        document.form.checkbox1.checked=false;
    }
    
    Normalidad () {
        var IDO=this.state.ID;
       var IdCheck=this.state.IndexDatos-1;
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
        document.getElementById("Borrar").style.display = "none"
       
        this.setState({fun:true, row ,Desactivado:true,Modal:true})
        
    }
   

    ChangePuesto =()=>{
       
        var Puesto=this.state.row.Puesto;
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?)?$/g.test(Puesto)){
            if(Puesto!=""){
            this.setState({PuestoInvalido:"Campo invalido"})
                       
            this.setState({Desactivado:true})  
        }else{
            this.setState({PuestoInvalidos:""})
            
        }
        }else{
            this.setState({PuestoInvalido:""})
            
        }
    }
    ChangeApellidos =()=>{
        var Apellidos=this.state.row.Apellidos;
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{3,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{3,15})?$/g.test(Apellidos)){
            if(Apellidos!=""){
            this.setState({ApellidosInvalidos:"Campo invalidos"})
             
            this.setState({Desactivado:true})
        }else{
            this.setState({ApellidosInvalidos:""})
            
        }
        }else{
            this.setState({ApellidosInvalidos:""})
            
        }
    }
    ChangeNombre =()=>{
    
        var Nombre=this.state.row.Nombre;
        
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{3,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{3,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{3,15})?)?$/g.test(Nombre)){
            if(Nombre!=""){
            this.setState({NombreInvalido:"Campo invalido"})
            

            this.setState({Desactivado:true})
            }else{
                this.setState({NombreInvalido:""})

            }
        }else{
            this.setState({NombreInvalido:""})
            
        }
       
    }
   
    ChangeSueldo =()=>{
        var Sueldo=this.state.row.Sueldo;
        
    if(!/^[1-9]+[0-9]*([.][0-9])?$/.test(Sueldo)){
        if(Sueldo!=""){
            this.setState({SueldoInvalido:"Campo invalido"})
            

            this.setState({Desactivado:true})
        }else{
            this.setState({SueldoInvalido:""})
            
        }
        }else{
            this.setState({SueldoInvalido:""})
            
        }
    }

    ChangeCurp =(patternCurp)=>{

        var Nombre=this.state.row.Nombre.trim();
        var Curp=this.state.row.Curp.trim();
        var Apellidos = this.state.row.Apellidos.trim();

        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 0-9]*$/g.test(Curp)){
            this.setState({CurpInvalido:"Caracteres invalidos"})
            
            if(Curp.length==18){
                this.setState({CurpInvalido:"No coincide con el formato"})
                    
                }
            
            this.setState({Desactivado:true})
        }else{
            this.setState({CurpInvalido:""})
       
            if (Curp.length==18 && this.state.Funcion2===true){
            this.CurpRepetida();
            
        }
        }
        
       
   
}

    CurpRepetida =()=>{
        var T=this.state.T;
        var Curp=this.state.row.Curp.trim();
        var Extension = Curp.length;
                for (var i = 0; i < T.length; i++) {
                    if (T[i].Curp == this.state.row.Curp) {
                        
                        this.setState({CurpInvalido:"Curp Repetida"})
                        this.setState({Modal:false,patternCurp:"asd"}) //Existe       
                         this.setState({Desactivado:true})
                      break;
                    }else{
                     //No existe
                     
                     this.setState({CurpInvalido:"",patternCurp:"^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$"})
                     
    }
                }
        }
    
     Change = (event) =>{
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
    
        var Curp=row.Curp.trim();
        var Nombre=row.Nombre.trim();
        var Apellidos=row.Apellidos.trim();
        var Puesto=row.Puesto.trim();
        var FechaNacimiento=row.FechaNacimiento.trim();
        var FechaAdmision=row.FechaAdmision.trim();
        var Sueldo=row.Sueldo.trim();
        var patternCurp=this.state.patternCurp;

        if(Curp.match("^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$")){
            
            if(Nombre.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                if(Apellidos.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                    if(FechaNacimiento!=rowVacio.FechaNacimiento){
                        if(FechaAdmision!=rowVacio.FechaAdmision){
                            if(Sueldo.match("[0-9]+[^.]{1,15}")){
                                if(Puesto.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,20}")){
                                        this.setState({Desactivado:false})
                                }else{this.setState({Desactivado:true})}
                            }else{this.setState({Desactivado:true})}
                        }else{this.setState({Desactivado:true})}
                    }else{this.setState({Desactivado:true})}
                }else{this.setState({Desactivado:true})}             
            }else{this.setState({Desactivado:true})}
        }else{this.setState({Desactivado:true})
        if(Curp.length==18){
            this.setState({CurpInvalido:"No coincide con el formato"})
                
            }}  
    
    
        

            
            
                   
this.ChangeNombre();
this.ChangeApellidos();
this.ChangePuesto();
this.ChangeSueldo();
// this.CurpRepetida();
this.ChangeCurp(patternCurp);

    
    } 

 

    createForm = () =>{

        
        this.RefreshCampInv();

      
         
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
this.setState({T:X})
this.setState({CambiarAgregar:1,ID:ids});
        
           this.Normalidad();
        }

     
     
    Eliminar =()=> {
        this.RefreshCampInv();
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
        this.Normalidad();
        var Extension=T.length;
        document.getElementById("Borrar").style.display = "none"
        for (var PP=1; PP<=Extension; PP++){ //Arriba
            document.getElementById('checkbox'+PP).checked=false;
            if(PP%2==0) {
                var Color="#ddd";
            }else{
                var Color="#FFFFFF";
                
            }             
            this.setState({filaClass:"FilaColor"});
            
            document.getElementById("FilaColor"+PP).style.backgroundColor=Color;
        }
    }


    CurpRepetidaCheck =(event)=>{
        var Curp=event.target.value;
        var Extension=Curp.length;
        var Funcion2=this.state.Funcion2;
        var T = this.state.T;
        var Id=this.state.ID2;
        var IndexDatos=this.state.IndexDatos;
        var Convertir=JSON.stringify(T);
        var obj = JSON.parse(Convertir);
        var Extension = Curp.length;

        if (Funcion2===false){
            if(Curp.length===18){
            if (obj[IndexDatos].Curp === Curp) {
                console.log("Curp para actualizar")
                console.log(obj[IndexDatos].Curp, Curp)
            }else{

                for (var i = 0; i < T.length; i++) {
                    if (T[i].Curp == Curp) {
                        
                        this.setState({CurpInvalido:"Curp Repetida"})
                        this.setState({Modal:false,patternCurp:"asd"}) //Existe       
                         this.setState({Desactivado:true})
                      break;
                    }else{
                     
                     this.setState({CurpInvalido:"",patternCurp:"^[A-Z]{1}[AEIOU]{1}[A-Z]{2}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[HM]{1}(AS|BC|BS|CC|CS|CH|CL|CM|DF|DG|GT|GR|HG|JC|MC|MN|MS|NT|NL|OC|PL|QT|QR|SP|SL|SR|TC|TS|TL|VZ|YN|ZS|NE)[B-DF-HJ-NP-TV-Z]{3}[0-9A-Z]{1}[0-9]{1}$"})
                     
    }
                }


            }
    }
    }
}
CheckColorOn=(IdCheck)=>{
    var Extension=this.state.T.length;
    if(document.getElementById('checkbox'+IdCheck).checked){
        document.getElementById("FilaColor"+IdCheck).style.backgroundColor="rgb(35, 198, 192)";
    
        
    }else{
        for (var PP=1; PP<=Extension; PP++){ //Arriba
         this.CheckColor(PP);
            
             
        }
    }
    
}
CheckColor =(PP)=>{
    var T=this.state.T;
    var Extension=T.length;
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

    render() {
        let fun = this.state.fun;
        let Trabajadores=this.state.T;
        let Funcion2 = this.state.Funcion2;
        return (

                <div className="container-fluid">
            
                 
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
                           
                             
                            
                            <table className="table Curp table-fixed" id="DatosT">
                                    <thead>
                                        <tr>
                                        <th className="TDCheck"></th>
                                        <th className="TDID">Id</th>
                                        <th className="TDNombre">Nombre</th>
                                        <th className="TDApellidos">Apellidos</th>
                                        <th className="TDFecha">Fecha de nacimiento</th>
                                        <th className="TDSueldo">Sueldo</th>
                                        <th>Puesto</th>
                                        <th>Curp</th>
                                        
                                        </tr>
                                    </thead>
                                    
                                    <tbody>
                                    
                                    {Trabajadores.map(function(t,i){
                                    
                                    var IdCheck=t.ID;
                                    var iE=i+1;
                                        return  (
                                    
                                            <tr key={i} className={this.state.filaClass+" FilaColor"+iE} id={"FilaColor"+iE} onClick={()=> this.onClickTr(iE)}>

                                            <td className="TDCheck">
                                            {/* <label className="btn btn-success active">
                                            <input type="radio" name="options"  autocomplete="off"/>
                                            <span className="glyphicon glyphicon-ok"></span>
                                        </label> */}
                                                    {/*  */}
                                                
                                                    <div className="ckbox">
                                                    
                                                    <input type="checkbox" id={'checkbox'+iE}  />
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
                                                         <input type="text" className="form-control" id="Nombre" name="Nombre" placeholder=""   value={this.state.row.Nombre} onChange={this.Change.bind()} pattern="[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{3,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{3,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{3,15})?)?" required  />
                                                        <label className="Advertencia" >{this.state.NombreInvalido}</label>                                                
                                                    </div>
                                                    <div className="form-group col-xs-4">
                                                    <label htmlFor="Apellidos">Apellidos:</label>
                                                    <input type="text" className="form-control" name="Apellidos" placeholder="" value={this.state.row.Apellidos}  onChange={this.Change.bind()} pattern="[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{3,15}([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{3,15})?" required/>
                                                      <label className="Advertencia">{this.state.ApellidosInvalidos} </label>
                                                    </div>
                                                    
                                                    <div className="form-group col-xs-4">
                                                    <label htmlFor="FechaNacimiento">Fecha de nacimiento:</label>
                                                    <input type="date" placeholder="Fecha de Nacimiento"  className="form-control" placeholder="" name="FechaNacimiento" value={this.state.row.FechaNacimiento} onChange={this.Change.bind()} required/>
                                                      <label className="Advertencia"> </label>
                                                    </div>
                                                </div>
                                            </div>
                                                    <div className="row">
                                                        <div className="container-fluid inputs2">
                                                            <div className="form-group col-xs-4"> 
                                                            <label htmlFor="FechaAdmision">Fecha de admision:</label>
                                                            <input type="date" className="form-control" name="FechaAdmision" id="fechaAdmision" value={this.state.row.FechaAdmision} onChange={this.Change.bind()} required/>
                                                            <label className="Advertencia"> </label>
                                                           </div>
                                                            <div className="form-group col-xs-4"> 
                                                            <label htmlFor="Sueldo">Sueldo:</label>
                                                            <input type="text" className="form-control" name="Sueldo" id="Sueldo" value={this.state.row.Sueldo} onChange={this.Change.bind()}pattern="^[1-9]+[0-9]*([.][0-9])?$"  required/>
                                                            <label className="Advertencia">{this.state.SueldoInvalido} </label>                                                         
                                                            </div>
                                                            <div className="form-group col-xs-4"> 
                                                            <label htmlFor="Puesto">Puesto:</label>
                                                            <input type="text" className="form-control" name="Puesto" id="Puesto" value={this.state.row.Puesto}  onChange={this.Change.bind()} pattern="[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ]{2,15}(([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?([ ][A-ZÁÀÉÈÍÌÓÒÚÙÑÜ]{2,15})?)?" required/>
                                                            <label className="Advertencia">{this.state.PuestoInvalido} </label>
                                                            </div>
                                                            <div className="form-group col-xs-4"> 
                                                            <label htmlFor="Curp">Curp:</label>
                                                            <input type="text" className="form-control" name="Curp" id="Curp" value={this.state.row.Curp} onInput={this.Change.bind()}  onChange={this.CurpRepetidaCheck.bind()} pattern={this.state.patternCurp} maxLength="18"  required/>
                                                            <label className="Advertencia">{this.state.CurpInvalido} </label>
                                                            </div>    
                                                            <div className="form-group col-xs-4">
                                                            <input type="hidden" className="form-control" name="ID" id="Id"  value={this.state.ID2} onChange={this.Change.bind()} />
                                                            </div>
                                                            <br/>
                                                        </div>
                                                    </div>
                                            </div>
                                            </div>
                                         </div>     
                                
            

                                        <br/>
                                        <div className="text-right container">
                                        
                                        <button type="button" className="btn btn-success" data-toggle="modal" data-target='.bs-example-modal-lg' onClick={this.CambiarAgregar.bind()} disabled={this.state.Desactivado}>{fun ? 'Agregar' : 'Actualizar'}</button>
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
                                
                                
                                    
                                    

                                            <div className="modal fade bs-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                <div className="modal-dialog modal-lg">
                                                        <div className="modal-content">
                                                        <div className="modal-body">
                                                        <h2>¡Correcto!</h2>
                                                        <h4>Trabajador {Funcion2 ? 'agregado correctamente.' : 'actualizado correctamente.'}</h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> 
                                           
                                                
                                                
                                                    <div className="row">

                                                        <div className="modal fade bs-example-modal-lg2" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel">
                                                                <div className="modal-dialog2 modal-lg2">
                                                                        <div className="modal-content2">
                                                                        <div className="modal-body2">
                                                                        <h2>¡Error!</h2>
                                                                        <h4>Este Trabajador ya se encuentra registrado.</h4>
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