let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let fecha = document.getElementById("fecha");
let descripcion = document.getElementById("descripcion");

let formularioEditar = document.getElementById("formularioEditar");
let nombreEditar = document.getElementById("nombreEditar");
let fechaEditar = document.getElementById("fechaEditar");
let descripcionEditar = document.getElementById("descripcionEditar");

let idTarea = document.getElementById("idTarea");

let btnGuardar = document.getElementById("btnGuardar");
let listaTareas = document.getElementById("listaTareas");

let tareas = [];

let agregarDatos = () => {
    tareas.push({
        nombre: nombre.value,
        fecha: fecha.value,
        descripcion: descripcion.value

    });
    console.log(tareas);
}

let cerrarModal = () => {
    btnGuardar.setAttribute("data-bs-dismiss","modal");
    btnGuardar.click();
}

let resetearFormulario = () => {
    nombre.value = '';
    fecha.value = '';
    descripcion.value = '';

}

let mostrarTareas = () => {
    listaTareas.innerHTML = "";
    tareas.forEach((tarea, indice) => {
        listaTareas.innerHTML += `
        <div class='row' id=${indice}>
                <div class='col-3 border p-3 textoalineado'>
                    <strong>${tarea.nombre}</strong>
                </div>
                <div class='col-2 border p-3 textoalineado'>
                    <strong>${tarea.fecha}</strong>
                </div>
                <div class='col-3 border p-3 textoalineado'>
                    <strong>${tarea.descripcion}</strong>
                </div>
                <div class='col-2 border p-3 text-center'>
                    <button class='btn btn-success'
                    onClick="editarTarea(${indice});" 
                    data-bs-toggle="modal" data-bs-target="#exampleModalEditar">
                    <i class="bi bi-pencil"></i> Editar </buttom>
                </div>
                <div class='col-2 border p-3 text-center'>
                    <button class='btn btn-danger' onClick ="borrarTarea(this,${indice});"><i class="bi bi-trash"></i> Borrar</button>
                </div>
            </div>
        `;
    });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    agregarDatos();
    cerrarModal();
    resetearFormulario();
    mostrarTareas();
});

formularioEditar.addEventListener("submit", (e) => {
    e.preventDefault();
    let indice = idTarea.value;
    tareas [indice].nombre = nombreEditar.value;
    tareas [indice].fecha = fechaEditar.value;
    tareas [indice].descripcion = descripcionEditar.value;
    mostrarTareas();
    cerrarModalEditar();
});

let borrarTarea = (boton, indice) => {
    if(confirm("¿Estas seguro de eliminar este registro?"))
    {

        boton.parentElement.parentElement.remove();
        tareas.splice(indice,1);
    }
}

let editarTarea = (indice) => {
    nombreEditar.value = tareas[indice].nombre;
    fechaEditar.value = tareas[indice].fecha;
    descripcionEditar.value = tareas[indice].descripcion;
    idTarea.value = indice;
}

let cerrarModalEditar = () => {
    btnGuardarEditar.setAttribute("data-bs-dismiss","modal");
    btnGuardarEditar.click();
}


