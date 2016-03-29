/**
 * @copyright (c) 2015 ActiveState Software Inc.
 * @license Mozilla Public License v. 2.0
 * @author NathanR, CareyH
 * @overview col sub module for the ko/ui SDK
 *
 */

var parent = require("./element");
var Module = Object.assign({}, parent); 
module.exports = Module;

// Main module (module.exports)
(function() {
    
    this.Model = Object.assign({}, this.Model);
    
    (function() {
        
        this.name = "button";
        
        this.init = this.initWithLabel;
        
        this.onCommand = function (callback)
        {
            this.$element.on("command", callback);
        };
        
    }).apply(this.Model); 
    
}).apply(Module);
