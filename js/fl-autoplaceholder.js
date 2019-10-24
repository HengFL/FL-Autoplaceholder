(function ( $ ) {
 
    $.fn.flAutoplaceholder = function() {
        var arr = this.serializeArray();
        $.each(arr, function (i,v) {
            var for = $("[for="+v.name+"]").text();
            var name = $("[name="+v.name+"]").attr("placeholder");
            if(!jQuery.isEmptyObject(name) && !jQuery.isEmptyObject(for)){
             $("[name="+v.name+"]").attr("placeholder",for.trim());
            }
        });
    };
 
}( jQuery ));
