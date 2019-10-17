var rows =[];
var counterId = 0;

var parseLateSwitch = (value) => {
    if(value){
        return "Tarde :(";
    }
    return "A tiempo :)";
}
function addRow(carnet,schedule,late,tbody){
    var newRow = document.createElement("tr");
    var date = new Date();
    rows.push({
        "id" :counterId,
        "carnet": carnet,
        "schedule": schedule,
        "late" : late
    })

    console.log(rows);
    newRow.innerHTML = 
            `<td><b>${carnet}</b></td>
            <td>${schedule}</td>
            <td>${date.toLocaleString()}</td>
            <td>${late}</td> `;


    var cellContainer = document.createElement("td");
    var deleteButton = document.createElement("button");


    var cellContainer2 = document.createElement("td");
    var validInput = document.createElement("input");
    validInput.id="input"+counterId;
    validInput.type = Text;

    
    deleteButton.classList.add("btn");
    deleteButton.classList.add("btn-danger");
    deleteButton.innerText ="Eliminar";
    deleteButton.value = counterId;

    deleteButton.addEventListener("click",function(event){

        var idElement = event.srcElement.value;
        //para eliminar
        var trToDelete = document.querySelector(`button[value='${idElement}']`).parentElement.parentElement;

        //para validar el carnet y luego eliminar
        var validCarnet = document.querySelector(`#input${idElement}`).value;


        rows.forEach((item,index) => {
            if(item.id == idElement){ //validacion
                if(item.carnet == validCarnet)
                {
                    tbody.removeChild(trToDelete)
                    rows.splice(index, 1);
                    //si el carnet no coincide con el ingresado mensaje alerta
                }else{
                    alert("Carnet no coincide")
                }
            }
        })
    })

    cellContainer.appendChild(deleteButton);
    newRow.appendChild(cellContainer);

    cellContainer2.appendChild(validInput);
    newRow.appendChild(cellContainer2);
    tbody.appendChild(newRow);
    counterId++;
}

window.onload = function() 
{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');

    submit_btn.addEventListener("click",()=>{
        var carnet =carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        //debe cumplir con el formato de 8 digitos
        if(carnetRegex.test(carnet)){
            addRow(carnet,schedule,late,tBody);
        }else{
            alert("Formato no valido");
        }
    });


    carnet_field.addEventListener("keyup",(event) =>{
        var carnet =carnet_field.value;
        //para boton, se habilita solo si cumple con formato
        if(carnetRegex.test(carnet)){
            submit_btn.disabled = false;
        }else{
            submit_btn.disabled = true;
        }
    });
};