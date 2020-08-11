document.querySelector("#add-time").addEventListener("click", clonefield);

function clonefield(){

    const newFieldsContainer = document.querySelector(".schedule-item").cloneNode(true);

    const fields = newFieldsContainer.querySelectorAll("input");

    fields.forEach(function(field){
        field.value = ""
    })

    document.querySelector("#schedule-items").appendChild(newFieldsContainer)
}