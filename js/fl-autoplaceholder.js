(function ( $ ) {
 
    $.fn.flAutoplaceholder = function() {
        var arr = this.serializeArray();
        $.each(arr, function (i,v) {
            var label = $("[for="+v.name+"]").text();
            var name = $("[name="+v.name+"]").attr("placeholder");
            if(jQuery.isEmptyObject(name) && !jQuery.isEmptyObject(label)){
             $("[name="+v.name+"]").attr("placeholder",label.trim());
            }
        });
    };
 
}( jQuery ));
