
import React, { Component } from 'react';


class Tabla extends Component {
    state = {  }
    render() {
        return (
           <div>
       <div className="container">
       <div className="row" style="position:relative;">
           <table className="table table-fixed table-bordered">
               <tbody className="header">
                 <tr>
                   <td width="10%">#</td>
                   <td width="80%">Name </td>
                   <td width="10%">Points</td>
                 </tr>
               </tbody>
               <tbody className="body">
                 <tr>
                   <td width="10%">1</td><td width="80%">Mike Adams</td><td width="10%">23</td>
                 </tr>
                 <tr>
                   <td width="10%">2</td><td width="80%">Holly Galivan</td><td width="10%">44</td>
                 </tr>
                 <tr>
                   <td width="10%">3</td><td width="80%">Mary Shea</td><td width="10%">86</td>
                 </tr>
                 <tr>
                   <td width="10%">4</td><td width="80%">Jim Adams</td><td width="10%">86</td>
                 </tr>
                 <tr>
                   <td width="10%">5</td><td width="80%">Henry Galivan</td><td width="10%">44</td>
                 </tr>
                 <tr>
                   <td width="10%">6</td><td width="80%">Bob Shea</td><td width="10%">26</td>
                 </tr>
                 <tr>
                   <td width="10%">7</td><td width="80%">Andy Parks</td><td width="10%">56</td>
                 </tr>
                 <tr>
                   <td width="10%">8</td><td width="80%">Bob Skelly</td><td width="10%">96</td>
                 </tr>
                 <tr>
                   <td width="10%">9</td><td width="80%">William Defoe</td><td width="10%">13</td>
                 </tr>
                 <tr>
                   <td width="10%">10</td><td width="80%">Will Tripp</td><td width="10%">16</td>
                 </tr>
                 <tr>
                   <td width="10%">11</td><td width="80%">Bill Champion</td><td width="10%">44</td>
                 </tr>
                 <tr>
                   <td width="10%">12</td><td width="80%">Lastly Jane</td><td width="10%">6</td>
                 </tr>
               </tbody>
             </table>
       </div>
     </div>
                    </div>
            
        );
    }
}

export default Tabla;