$(document).ready(function(){
    $("#btn").click(function(){
        const textElement=document.querySelector("#activity");
        const txt=textElement.value;
        var newRow = document.createElement("TR");
        var boxCol = document.createElement("TD");
        var textCol = document.createElement("TD");
        var btnCol = document.createElement("TD");

        var box = document.createElement('input');
        box.type = "checkbox";
        textCol.innerHTML=txt;

        var btn = document.createElement("button");
        btn.innerHTML = "<i class = 'fa fa-trash'></i>";

        $(box).click(function(){
            if($(this).is(':checked')){
                $(this).parent().parent().addClass('checked');
            }
            else{
                $(this).parent().parent().removeClass('checked');
            }
        });
        $(btn).click(function()
        {
            $(this).parent().parent().remove();
        });

        boxCol.appendChild(box);
        btnCol.appendChild(btn);

        newRow.appendChild(boxCol);
        newRow.appendChild(textCol);
        newRow.appendChild(btnCol);

        document.querySelector("#myTable").appendChild(newRow);
        document.querySelector("#activity").value = ""
    });
});
