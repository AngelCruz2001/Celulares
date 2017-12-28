
import React, { Component } from 'react';
import $ from "jquery";
class Tabla extends Component {
    state = {  }



  render() {
        return (
           <div>
    <div className="container">

<div className="row">
    <div className="col-md-4">
        <h3>Default Styling</h3>

        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Checkbox Block (Default Checked)</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch">
                        <label>
                            <input type="checkbox" name="" checked="checked" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Checkbox Inline (Default Unchecked)</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch">
                        <input type="checkbox" name="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>

                <small className="text-uppercase text-muted"><b>Checkbox Disabled (Default Checked)</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>

                <small className="text-uppercase text-muted"><b>Checkbox Disabled (Default Unchecked)</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch">
                        <input type="checkbox" name="" disabled="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>
        
        
        <h3>Light Styling</h3>

        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Checkbox Block</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-light">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Checkbox Inline</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-light">
                        <input type="checkbox" name="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>

                <small className="text-uppercase text-muted"><b>Checkbox Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-light">
                        <input type="checkbox" name="" disabled="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>

        <h3>Success</h3>            
        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Default Checked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-success">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Unchecked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-success">
                        <label>
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-success">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>

        
    </div>
    <div className="col-md-4">
        <h3>Primary</h3>            
        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Default Checked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-primary">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Unchecked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-primary">
                        <label>
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-primary">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>

        <h3>Info</h3>            
        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Default Checked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-info">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Unchecked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-info">
                        <label>
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-info">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>

        <h3>Warning</h3>            
        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Default Checked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-warning">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Unchecked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-warning">
                        <label>
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-warning">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-4">
        <h3>Danger</h3>            
        <div className="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Default Checked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-danger">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Unchecked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-danger">
                        <label>
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-danger">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
                </div>
            </div>
        </div>
        
        
        <h3>Dark</h3>            
        <div classNameName="panel panel-default">
            <div className="panel-body">
                <small className="text-uppercase text-muted"><b>Default Checked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-dark">
                        <label>
                            <input type="checkbox" name="" checked="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Unchecked</b></small>
                <div className="form-group">
                    <div className="checkbox checbox-switch switch-dark">
                        <label>
                            <input type="checkbox" name="" />
                            <span></span>
                            Checkbox Label
                        </label>
                    </div>
                </div>

                <small className="text-uppercase text-muted"><b>Default Disabled</b></small>
                <div className="form-group">
                    <label className="checkbox-inline checbox-switch switch-dark">
                        <input type="checkbox" name="" disabled="" checked="" />
                        <span></span>
                        Checkbox Label
                    </label>
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

export default Tabla;