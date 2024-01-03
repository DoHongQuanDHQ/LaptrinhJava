var bieuthuc = "";
        function tt(pt){
            bieuthuc =bieuthuc + pt;

        }
        function th(x){
            bieuthuc=bieuthuc + x;

        }
        function thucHien(){
            var kq = eval (bieuthuc);
            bieuthuc="";
            alert('Ket qua la = ' + kq);
        }