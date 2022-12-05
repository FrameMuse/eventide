            $(document).ready(function(){
                
                
                $(".detail").bind("click", function() {
                    if ( $(this).hasClass("active") ) {
                        $(this).removeClass("active");
                    } else {
                        $(this).addClass("active");
                    }
                });
                
                
                $(".as a[to]").bind("click", function() {
                    var ato = $(this).attr("to");
                    var as = $(this).closest(".as").find("a[to]");
                    
                    for (var i = 0; i < as.length; i++) {
                        var xer = $(as[i]).attr("to");
                        var block = $(".block .blocks div[id='"+xer+"']");
                        
                        if ( $(as[i]).attr("to") ==  ato ) {
                            $(as[i]).addClass("yy");
                            $(block).addClass("yy");
                        } else {
                            $(as[i]).removeClass("yy");
                            $(block).removeClass("yy");
                        }
 
                    }
                });
                
                
            });