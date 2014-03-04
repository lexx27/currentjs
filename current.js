/*!
 * Currentjs 
 * https://github.com/lexx27/currentjs/
 *
 * Copyright 2014 Alexander Lingris
 * Released under the MIT license
 */

function Currentjs(selector, parentEl, classname) {
    var self = this;
    self.selector    = typeof selector  !== 'undefined' ? selector  : 'a';   
    self.parentEl    = typeof parentEl  !== 'undefined' ? parentEl  : false;   
    self.classname   = typeof classname !== 'undefined' ? classname : 'active';   
    self.filter();
}

Currentjs.prototype.filter = function(){
    var self = this;
    var absoluteLink = window.location.href;
    var relativeLink = window.location.pathname;
    absoluteLink = self.trimSlash(absoluteLink);
    relativeLink = self.trimSlash(relativeLink);
    $(self.selector).each(function(){

        var menulink = $(this).attr('href');
        menulink = self.trimSlash(menulink);

        if ( absoluteLink == menulink 
             || relativeLink == menulink 
        ) {
            if (self.parentEl !== false) {
                $(this).closest(self.parentEl).addClass(self.classname);
            }
            $(this).addClass(self.classname);
        }
        
    });
};

Currentjs.prototype.trimSlash = function(str) {
    str = str.trim();
    if(str.substr(-1) == '/') {
        str = str.substr(0, str.length - 1);
    }
    if(str.substr(0,1) == '/') {
        str = str.substr(1);
    }
    return str;
}
