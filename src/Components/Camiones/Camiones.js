import React, { Component } from 'react';



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
        AñoInvalido: ""
    }
    componentDidMount(){
        document.getElementById("Borrar").style.display = "none"
    }
    ChangePlaca =()=>{
       
        var Placa=this.state.row.Placa;
        if(!/^([A-Z]{2}-\d{2}-\d{3})*$/g.test(Placa)){
            console.log("Placa Incorrecta")
            this.setState({PlacaInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
        }else{
            console.log("Placa Correcta")
            this.setState({PlacaInvalido:""})
            
        }
    }
    ChangeCapacidad=()=>{
        var Capacidad=this.state.row.Capacidad;
        
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ ]*$/g.test(Capacidad)){
            this.setState({CapacidadInvalido:"Campo invalido"})
            this.setState({Desactivado:true})  
        }else{
            this.setState({CapacidadInvalido:""})
            
        }
    }
    ChangeModelo=()=>{
var Modelo=this.state.row.Modelo;
if(!/^[0-9]{1,13}?$/g.test(Modelo)){
    this.setState({ModeloInvalido:"Campo invalido"})
               
    this.setState({Desactivado:true})  
}else{
    this.setState({ModeloInvalido:""})
    }   

}
    ChangeAño=()=>{
        var Año=this.state.row.Año;
        if(!/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9#",. ]*$/g.test(Año)){
            this.setState({AñoInvalido:"Campo invalido"})
    this.setState({textAreaClass:"form-control textAreaIncorrecta"})
            this.setState({Desactivado:true})  
    }else{
        this.setState({AñoInvalido:""})
        this.setState({Desactivado:true,textAreaClass:"form-control textAreaCorrecta"})
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
    var Año=row.Año.trim();
console.log(Modelo)
if(/^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0-9#",. ]*$/g.test(Modelo)){
    
    if (Placa.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,30}")){
        if(Capacidad.match("[A-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ0 ]{2,30}")){
            if(Año.match("[0-9-]{2,20}")){
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
    CambiarAgregar=()=>{}
    Eliminar=()=>{}
    
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
            <table className="table table-fixed">
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
                    <input type="text" className="form-control" id="Placa" name="Placa" placeholder=""   value={this.state.row.Placa} onChange={this.Change.bind()} pattern="([A-Z]{2}-\d{2}-\d{3})" required  />
                    <label className="Advertencia" >{this.state.PlacaInvalido}</label>  
        </div>
            <div className="form-group col-xs-4">
            <label htmlFor="Capacidad">Capacidad:</label>
                <input type="text" className="form-control" id="Capacidad" name="Capacidad" placeholder=""   value={this.state.row.Capacidad} onChange={this.Change.bind()} pattern="(\d{2,5}KG)" required maxLength="7"  />
                <label className="Advertencia" >{this.state.CapacidadInvalido}</label>  
                
        </div>   
        <div className="form-group col-xs-4">
                                        <label htmlFor="Año">Año:</label>
                                        <input type="text" className="form-control" id="Año" name="Año" placeholder=""   value={this.state.row.Año} onChange={this.Change.bind()} pattern="[0-9]{4}" required maxLength="13"  />
                                        <label className="Advertencia" >{this.state.AñoInvalido}</label>  
                                    </div>
                                    <div className="form-group col-xs-8">
                                        <input type="hidden" className="form-control" id="ID" name="ID" placeholder=""   value={this.state.ID2} onChange={this.Change.bind()}    />
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

export default Camiones ;