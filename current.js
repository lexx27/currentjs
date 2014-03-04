/*!
 * Currentjs 
 * https://github.com/lexx27/currentjs/
 *
 * Copyright 2014 Alexander Lingris
 * Released under the MIT license
 */

 ;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var currentjs = 'currentjs',
        defaults = {
            parentElement: false,
            classname: 'active',
            startsonly: false
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = currentjs;
        this.init();
    }

    Plugin.prototype.init = function () {
        this.filter();
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[currentjs] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + currentjs)) {
                $.data(this, 'plugin_' + currentjs,
                new Plugin( this, options ));
            }
        });
    }

    Plugin.prototype.filter = function(){
        var self = this;
        var absoluteLink = window.location.href;
        var relativeLink = window.location.pathname;
        absoluteLink = self.trimSlash(absoluteLink);
        relativeLink = self.trimSlash(relativeLink);
        var isActive = false;
        $(self.element).each(function(){

            var menulink = $(this).attr('href');
            menulink = self.trimSlash(menulink);

            if (self.options.startsonly === true) {
                if (absoluteLink.indexOf(menulink) != -1 || relativeLink.indexOf(menulink) != -1) {
                    isActive = true;
                }
            }else if ( absoluteLink == menulink || relativeLink == menulink ) {
                isActive = true;
            }
            if (isActive) {
                if (self.options.parentElement !== false) {
                    $(this).closest(self.options.parentElement).addClass(self.options.classname);
                }
                $(this).addClass(self.options.classname);
            }
            isActive = false;
        });
    };

    Plugin.prototype.trimSlash = function(str) {
        str = str.trim();
        if(str.substr(-1) == '/') {
            str = str.substr(0, str.length - 1);
        }
        if(str.substr(0,1) == '/') {
            str = str.substr(1);
        }
        return str;
    }

})( jQuery, window, document );
