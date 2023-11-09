var num=10;
var name="yk";
function yadhu(){
    function myname(){  /// Understand Variable Scope
        var name="Yadhukrishna";
        num=11;
    }
    myname()
}
yadhu()
console.log(name);
console.log(num);