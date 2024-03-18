var txtbirthDate = document.getElementById("txtbirthDate") ; 
var Total = document.getElementById("Total") ; 
var btn = document.getElementById("btn") ; 

btn.onclick = function(dateString) {
    var today = new Date(); // التاريخ الحالي 
    var birthDate = new Date(txtbirthDate.value); // التاريخ بناء علي القيمه اللي راجعه من الحقل بترتيب شهر / يوم / سنه
    var age = today.getFullYear() - birthDate.getFullYear(); // عمليه طرح بين السنه للتاريخ الحالي والسنه للتاريخ المدخل في الحقل
    var m = today.getMonth() - birthDate.getMonth(); //  بجيب الشهر الحالي و الشهر المدخل في الحقل

    // كود شرط لو التاريخ الحالي اقل من التاريخ المدخل سيكون النتيجه بالسالب
    // ويقوم طرح السنه الحاليه من الاكبر 2030 - 2024
    //يعطي الناتج  7- وهكذا 
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    //عرض النتيجه`
    Total.innerHTML = " Your Age Is :  " + "<b>" + age + " </b>" + " Years Old" ; 
    Total.style.display = "block";
}