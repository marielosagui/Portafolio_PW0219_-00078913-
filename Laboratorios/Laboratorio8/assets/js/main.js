var all_rows = []
var id_counter = 0;

var parseLateSwitch = (value) => {
    if(value){
        return "Tarde :("
    }
    return "A tiempo :)"
}

function addRow(carnet, schedule, late, tbody){
    var newRow = document.createElement("tr");
    var date = new Date();

   
    all_rows.push({
        "id" : id_counter,
        "carnet": carnet,
        "schedule": schedule,
        "late": late
    })

    newRow.innerHTML =
    `    <td><b>${carnet}</b></td>
        <td>${schedule}</td>
        <td>${date.toLocaleString()}</td>
        <td>${late}</td>`

    // nueva celda que conedrá el boton
    let cell_conteiner = document.createElement("td")

    let new_btn = document.createElement("button")
    new_btn.classList.add("btn")
    new_btn.classList.add("btn-danger")
    new_btn.classList.add("mx-2")

    new_btn.innerText = "Drop"
   
    new_btn.value  = id_counter


    new_btn.addEventListener("click", (event)=>{
        let id_element = event.srcElement.value

       
        let element_node = document.querySelector(`tr>td>button[value='${id_element}']`).parentElement.parentElement
        table_body.removeChild(element_node)

        all_rows.forEach((item, index) =>{
            if(item.id == id_element){
                all_rows.splice(index, 1)
            }
        })
    })

     let new_btn_2 = document.createElement("button")
    new_btn_2.classList.add("btn")
    new_btn_2.classList.add("btn-primary")
    new_btn_2.classList.add("mx-2") 

   // new_btn_2.innerHTML = "<i class='fas fa-edit font-2'>"
    new_btn_2.value  = id_counter

    new_btn_2.addEventListener("click", (event)=>{
        var id_element = new_btn_2.value
        console.log(id_element);
        all_rows.forEach((item, index) =>{
            if(item.id == id_element){
              fillForm(item);
            }
        })
    })

    cell_conteiner.appendChild(new_btn)
    cell_conteiner.appendChild(new_btn_2)
    newRow.appendChild(cell_conteiner)

    tbody.appendChild(newRow);

    id_counter++
};

function fillForm(item)
{
  var carnet_field = document.querySelector("#carnet_field");
  var schedule_field = document.querySelector("#schedule_field");
  var late_switch = document.querySelector("#late_switch");

  carnet_field.value = item.carnet;
  schedule_field.value = item.schedule;

  if(item.late == "Tarde :("){
    late_switch.checked = true;
  }
  else{
    late_switch.checked = false;
  }
}

window.onload = function()
{
    var submit_btn = document.querySelector("#submit_btn");
    var carnet_field = document.querySelector("#carnet_field");
    var schedule_field = document.querySelector("#schedule_field");
    var late_switch = document.querySelector("#late_switch");
    var tBody = document.querySelector("#table_body");

    var carnetRegex = new RegExp('[0-9]{8}');

    submit_btn.addEventListener("click", function(){
        var carnet = carnet_field.value;
        var schedule = schedule_field.options[schedule_field.selectedIndex].text;
        var late = parseLateSwitch(late_switch.checked);
        if(carnetRegex.test(carnet)){
            addRow(carnet, schedule, late, tBody);
        }else{
            alert("Formato no valido")
        }
    });

    carnet_field.addEventListener("keyup", (event)=>{
        var carnet = carnet_field.value;
        if(carnetRegex.test(carnet)){
            submit_btn.disabled = false;
        }else{
            submit_btn.disabled = true;
        }
    });
}
