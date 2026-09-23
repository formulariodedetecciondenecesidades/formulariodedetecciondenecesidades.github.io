const tbody  = document.getElementById("tablaBody");
const tbody1 = document.getElementById("tablaBody1_1");
const tbody2 = document.getElementById("tablaBody2");
const tbody3 = document.getElementById("tablaBody3");
const tbodyP = document.getElementById("tablaBodyP");
const tbody4 = document.getElementById("tablaBody4");
const tbodyC = document.getElementById("tablaCotizaciones");
const tbody5 = document.getElementById("tablaBody5");


const tbody7 = document.getElementById("tablaBody7");

//--------------------------------------------------Para el Guardado de las URL-------------------------------------------------------

let urlCotizacionesActuales={};


//------------------------------------Construccion de tabla--------------------------


                       //----------------------------------Funciones para crear filas---------------------------------------------------------------------------



function agregarFila(){

    const tbody = document.getElementById("tablaBody");
    const tbody1 = document.getElementById("tablaBody1_1");

    const i = obtenerNumeroFila1();
    const j = obtenerNumeroFila1_1();
    


    const fila = document.createElement("tr");
    const fila1 = document.createElement("tr");

    fila.innerHTML = `
        <td>
            ${i}
        </td>

        <td>
            <textarea
                name="Programa_T1R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programas académicos, servicios o actividades de la dependencia">
            </textarea>

            <input
                name="Programa_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Programa_T1R${i}RO"
                data-campo="Programa_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios1_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios1">

            <input
                name="Usuarios1_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios1_T1R${i}RO"
                data-campo="Usuarios1_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios2_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios2">

            <input
                name="Usuarios2_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios2_T1R${i}RO"
                data-campo="Usuarios2_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios3_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios3">

            <input
                name="Usuarios3_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios3_T1R${i}RO"
                data-campo="Usuarios3_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios4_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios4">

            <input
                name="Usuarios4_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios4_T1R${i}RO"
                data-campo="Usuarios4_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios5_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios5">

            <input
                name="Usuarios5_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios5_T1R${i}RO"
                data-campo="Usuarios5_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios6_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios6">

            <input
                name="Usuarios6_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios6_T1R${i}RO"
                data-campo="Usuarios6_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios7_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios7">

            <input
                name="Usuarios7_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios7_T1R${i}RO"
                data-campo="Usuarios7_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios8_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios8">

            <input
                name="Usuarios8_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios8_T1R${i}RO"
                data-campo="Usuarios8_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios9_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios9">

            <input
                name="Usuarios9_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios9_T1R${i}RO"
                data-campo="Usuarios9_T1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios10_T1R${i}"
                class="input_tabla"
                aria-label="Usuarios10">

            <input
                name="Usuarios10_T1R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Usuarios10_T1R${i}RO"
                data-campo="Usuarios10_T1R${i}"
            >
        </td>
    <td>
            <button
        type="button"
        class="borrar-fila"
        title="Eliminar fila">
        ✕
    </button>
        </td>

    `;


    fila1.innerHTML = `
        <td>
            ${i}
        </td>

        <td>
            <textarea
                name="Programa_T1_1R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programas académicos, servicios o actividades de la dependencia">
            </textarea>

            <input
                name="Programa_T1_1R${i}RO"
                id="Programa_T1_1R${i}RO"
                data-campo="Programa_T1_1R${i}"
                readonly
                class="paso check-verificacion"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios1_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios1">

            <input
                name="Usuarios1_T1_1R${i}RO"
                class="paso check-verificacion"
                id="Usuarios1_T1_1R${i}RO"
                data-campo="Usuarios1_T1_1R${i}"
                readonly
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios2_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios2">

            <input
                name="Usuarios2_T1_1R${i}RO"
                class="paso check-verificacion"
                id="Usuarios2_T1_1R${i}RO"
                data-campo="Usuarios2_T1_1R${i}"
                readonly
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios3_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios3">

            <input
                name="Usuarios3_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios3_T1_1R${i}RO"
                data-campo="Usuarios3_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios4_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios4">

            <input
                name="Usuarios4_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios4_T1_1R${i}RO"
                data-campo="Usuarios4_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios5_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios5">

            <input
                name="Usuarios5_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios5_T1_1R${i}RO"
                data-campo="Usuarios5_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios6_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios6">

            <input
                name="Usuarios6_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios6_T1_1R${i}RO"
                data-campo="Usuarios6_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios7_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios7">

            <input
                name="Usuarios7_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios7_T1_1R${i}RO"
                data-campo="Usuarios7_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios8_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios8">

            <input
                name="Usuarios8_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios8_T1_1R${i}RO"
                data-campo="Usuarios8_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios9_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios9">

            <input
                name="Usuarios9_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios9_T1_1R${i}RO"
                data-campo="Usuarios9_T1_1R${i}"
            >
        </td>

        <td>
            <input
                type="number"
                name="Usuarios10_T1_1R${i}"
                class="input_tabla"
                aria-label="Usuarios10">

            <input
                name="Usuarios10_T1_1R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Usuarios10_T1_1R${i}RO"
                data-campo="Usuarios10_T1_1R${i}"
            >
        </td>

            <td>            
            <button
        type="button"
        class="borrar-fila"
        title="Eliminar fila">
        ✕
    </button>
        </td>
    
    `;


    tbody.appendChild(fila);
    tbody1.appendChild(fila1);

    activarAutoExpand(fila);
    activarAutoExpand(fila1);
}


//*-----------------------Agregar fila tabla 2*

function agregarFila2(){

    const tbody = document.getElementById("tablaBody2");
    const i = obtenerNumeroFila2();

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>
            ${i}
        </td>

        <td>
            <input
                name="Edificio_T2R${i}"
                class="input_tabla"
                aria-label="Edificio"
            >

            <input
                name="Edificio_T2R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Edificio_T2R${i}RO"
                data-campo="Edificio_T2R${i}"
            >
        </td>

        <td>
            <select
                   name="Nivel_T2R${i}"
                   class="input_tabla"
                   aria-label="Nivel"
            >
                <option value="">-- Selecciona un nivel --</option>
                <option value="Planta Baja">Planta Baja</option>
                <option value="Nivel 1">Nivel 1</option>
                <option value="Nivel 2">Nivel 2</option>
                <option value="Nivel 3">Nivel 3</option>
                <option value="Nivel 4">Nivel 4</option>
                <option value="Nivel 5">Nivel 5</option>
                <option value="Nivel 6">Nivel 6</option>
                <option value="Nivel 7">Nivel 7</option>
                <option value="Nivel 8">Nivel 8</option>
                <option value="Nivel 9">Nivel 9</option>
                 <option value="Nivel 10">Nivel 10</option>
                 <option value="Nivel 11">Nivel 11</option>
             </select>

            <input
                name="Nivel_T2R${i}RO"
                class="paso check-verificacion"
                readonly
                id="Nivel_T2R${i}RO"
                data-campo="Nivel_T2R${i}"
            >
        </td>
        
        <td>
            <input
                name="Espacio_T2R${i}"
                class="input_tabla"
                aria-label="Espacio"
            >

            <input
                name="Espacio_T2R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Espacio_T2R${i}RO"
                data-campo="Espacio_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Largo_T2R${i}"
                class="input_tabla"
                aria-label="Largo"
            >

            <input
                name="Largo_T2R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Largo_T2R${i}RO"
                data-campo="Largo_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Ancho_T2R${i}"
                class="input_tabla"
                aria-label="Ancho"
            >

            <input
                name="Ancho_T2R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Ancho_T2R${i}RO"
                data-campo="Ancho_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Alumnos_T2R${i}"
                class="input_tabla"
                aria-label="Numero de Alumnos"
            >

            <input
                name="Alumnos_T2R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Alumnos_T2R${i}RO"
                data-campo="Alumnos_T2R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="Horas_T2R${i}"
                class="input_tabla"
                aria-label="Horas de Servicio"
            >

            <input
                name="Horas_T2R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Horas_T2R${i}RO"
                data-campo="Horas_T2R${i}"
            >
        </td>

        <td>
            <button
        type="button"
        class="borrar-fila"
        title="Eliminar fila">
        ✕
    </button>
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


//*-----------------------Agregar fila tabla 3*

function agregarFila3(){

    const tbody = document.getElementById("tablaBody3");
    const i = obtenerNumeroFila3();

    const fila = document.createElement("tr");

    if (i === 1) {

        fila.innerHTML = `
            <td>
                ${i}
            </td>

            <td>
                <input
                    name="Edificio_T3R${i}"
                    class="input_tabla"
                    aria-label="Edificio"
                >

                <input
                    name="Edificio_T3R${i}RO"
                    type="text"
                    readonly
                    class="paso check-verificacion"
                    id="Edificio_T3R${i}RO"
                    data-campo="Edificio_T3R${i}"
                >
            </td>

            <td>
                <input
                    type="number"
                    name="MetrosCuadrados_T3R${i}"
                    class="input_tabla"
                    aria-label="MetrosCuadrados"
                >
                
                <input
                    name="MetrosCuadrados_T3R${i}RO"
                    type="text"
                    readonly
                    class="paso check-verificacion"
                    id="MetrosCuadrados_T3R${i}RO"
                    data-campo="MetrosCuadrados_T3R${i}"
                >
            </td>

            <td>
            <button
        type="button"
        class="borrar-fila"
        title="Eliminar fila">
        ✕
    </button>
        </td>

        `;

    } else {

        fila.innerHTML = `
            <td>
                ${i}
            </td>

            <td>
                <input
                    name="Edificio_T3R${i}"
                    class="input_tabla"
                    aria-label="Edificio"
                >

                <input
                    name="Edificio_T3R${i}RO"
                    type="text"
                    readonly
                    class="paso check-verificacion"
                    id="Edificio_T3R${i}RO"
                    data-campo="Edificio_T3R${i}"
                >
            </td>

            <td>
                <input
                    type="number"
                    name="MetrosCuadrados_T3R${i}"
                    class="input_tabla"
                    aria-label="MetrosCuadrados"
                >

                <input
                    name="MetrosCuadrados_T3R${i}RO"
                    type="text"
                    readonly
                    class="paso check-verificacion"
                    id="MetrosCuadrados_T3R${i}RO"
                    data-campo="MetrosCuadrados_T3R${i}"
                >
            </td>

            <td>
            <button
        type="button"
        class="borrar-fila"
        title="Eliminar fila">
        ✕
    </button>
        </td>
        `;
    }

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


//*-----------------------Agregar fila tabla Cotizaciones*

function agregarFilaC(){

    const tbody = document.getElementById("tablaCotizaciones");
    const i = obtenerNumeroFilaC();

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>
            ${i}
        </td>

        <td class="paso">
            <input
                name="nombreCotizacion_TCR${i}"
                id="nombreCotizacion_TCR${i}"

                class="input_tabla "
                aria-label="Nombre de la Cotizacion"
                readonly
            >

        </td>

        <td>
            <div class="contenedorArchivo">

                <input
                    type="file"
                    id="CotizacionAdquisicionG1_TCR${i}"
                    name="CotizacionAdquisicionG1_TCR${i}"
                    class="archivoInput "
                    data-compa2="nombrearchivo_TC${i}$"
                    data-compa="urlCotizacionAdquisicionG1_TCR${i}"
                    data-compa3="nombreCotizacion_TCR${i}"
                    accept=".pdf,.xlsx,.doc,.docx,.png,.jpg"
                >

                <span id="nombrearchivo_TC${i}$" class="nombreArchivo"></span>
                 
                <textarea
                id="urlCotizacionAdquisicionG1_TCR${i}"
                name="urlCotizacionAdquisicionG1_TCR${i}"
                class="auto-expand input_tabla paso"
                rows="1"
                readonly                
                style="resize:none;"
                aria-label="Url de las Cotizaciones"
            > </textarea> 



            </div>
        </td>

        <td class="cantidadCol">

            <input
                type="number"
                name="anio_TCR${i}"
                class="input_tabla"
                aria-label="Año de la cotizacion"
            >

            <input
                name="anio_TCR${i}RO"
                readonly
                class="paso check-verificacion"
                id="anio_TCR${i}RO"
                data-campo="anio_TCR${i}"
            >

        </td>

        <td class="paso">
            <input
                id="nombreCotizacion2_TCR${i}"
                name="nombreCotizacion2_TCR${i}"
                class="input_tabla"
                aria-label="Nombre de la Cotizacion 2"
                readonly
            >
        </td>

        <td>
            <div class="contenedorArchivo">

                <input
                    type="file"
                    id="CotizacionAdquisicionG2_TCR${i}"
                    name="CotizacionAdquisicionG2_TCR${i}"
                    data-compa="urlCotizacionAdquisicionG2_TCR${i}"
                    data-compa2="nombrearchivo2_TC${i}$"
                    data-compa3="nombreCotizacion2_TCR${i}"
                    class="archivoInput "
                    accept=".pdf,.xlsx,.doc,.docx,.png,.jpg"
                >

                <span 
                id="nombrearchivo2_TC${i}$"
                class="nombreArchivo"></span>

                <span class="nombreArchivo"></span>
                 
                <textarea
                id="urlCotizacionAdquisicionG2_TCR${i}"
                name="urlCotizacionAdquisicionG2_TCR${i}"
                class="auto-expand input_tabla paso"
                rows="1"
                readonly
                
                style="resize:none;"
                aria-label="Url de las Cotizaciones"
            > </textarea> 


            </div>
        </td>

        <td>
            <input
                type="number"
                name="anioA2_TCR${i}"
                class="input_tabla"
                aria-label="Año de la cotizacion"
            >

            <input
                name="anioA2_TCR${i}RO"
                readonly
                class="paso check-verificacion"
                id="anioA2_TCR${i}RO"
                data-campo="anioA2_TCR${i}"
            >
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}


//*-----------------------Agregar fila tabla 4*

function agregarFila4(){

    const tbody = document.getElementById("tablaBody4");
    const i = obtenerNumeroFila4();

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>
            ${i}
        </td>
        



        <td>
            <select
                id="ProgramaAcademico_T4R${i}"
                name="ProgramaAcademico_T4R${i}"
                class="tabla_select"
                aria-label="Programa academico">

                <option value="">
                    -- Selecciona un programa--
                </option>

            </select>
        
            <input
                name="ProgramaAcademico_T4R${i}RO"
                type="text"
                class="paso check-verificacion"
                id="ProgramaAcademico_T4R${i}RO"
                data-campo="ProgramaAcademico_T4R${i}"
                readonly
            >
        </td>



        <td>
            <select
                id="Espacio_T4R${i}"
                name="Espacio_T4R${i}"
                class="tabla_select"
                aria-label="Espacio">

                <option value="">
                    -- Selecciona un programa--
                </option>

            </select>


            <input
                name="Espacio_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Espacio_T4R${i}RO"
                data-campo="Espacio_T4R${i}"
            >
        </td>






        <td>
            <textarea
                name="Clave_T4R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="clave">
            </textarea>

            <input
                name="Clave_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Clave_T4R${i}RO"
                data-campo="Clave_T4R${i}"
            >
        </td>

          

        <td>
            <textarea
                name="nombredelEquipo_T4R${i}"
                id="nombredelEquipo_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del Equipo">
            </textarea>

            <input
                name="nombredelEquipo_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="nombredelEquipo_T4R${i}RO"
                data-campo="nombredelEquipo_T4R${i}"
            >
        </td>






        <td class="cantidadCol">
            <input
                type="number"
                id="cantidad_T4R${i}"
                name="cantidad_T4R${i}"
                class="input_tabla"
                aria-label="Cantidad"
            >

            <input
                name="cantidad_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="cantidad_T4R${i}RO"
                data-campo="cantidad_T4R${i}"
            >
        </td>








        <td>
            <textarea
                name="especificaciones_T4R${i}"
                class="auto-expand input_tabla expandible limite-altura"
                rows="1"
                style="resize:none;"
                aria-label="Especificaciones"
                >
            </textarea>

            <input
                name="especificaciones_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="especificaciones_T4R${i}RO"
                data-campo="especificaciones_T4R${i}"
            >
        </td>








        <td>
            <textarea
                id="justificacion_T4R${i}"
                name="justificacion_T4R${i}"
                class="auto-expand input_tabla expandible limite-altura"
                rows="1"
                style="resize:none;"
                aria-label="Justificación">
            </textarea>

            <input
                name="justificacion_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="justificacion_T4R${i}RO"
                data-campo="justificacion_T4R${i}"
            >
        </td>






        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    name="precio_T4R${i}"
                    class="input_tabla precio unitario"
                    data-cant="cantidad_T4R${i}"
                    data-precio="precioTotal_T4R${i}"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio"
                >
                <input
                name="precio_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="precio_T4R${i}RO"
                data-campo="precio_T4R${i}"
            >

            </div>
</td>
            





        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    readonly
                    id="precioTotal_T4R${i}"
                    name="precioTotal_T4R${i}"
                    class="input_tabla precio"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio Total mas IVA"
                >

            </div>

            
        </td>










        <td>
            <select
                id="nombreCotizacion_T4R${i}"
                name="nombreCotizacion_T4R${i}"
                class="tabla_select"
                aria-label="Nombre del archivo donde esta la Cotizacion del Equipo">

                <option value="">
                    -- Selecciona una cotización--
                </option>

            </select>

            <input
                name="nombreCotizacion_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="nombreCotizacion_T4R${i}RO"
                data-campo="nombreCotizacion_T4R${i}"
            >
        </td>







        <td class="paso">
            <div class="contenedorArchivo paso">

                <input
                    type="file"
                    name="CotizacionAdquisicion_T4R${i}"
                    class="archivoInput"
                    accept=".pdf,.xlsx,.doc,.docx,.png,.jpg"
                >

                <span class="nombreArchivo"></span>

                <button type="button" class="borrarArchivo">
                    ❌
                </button>

            </div>
        </td>







        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    name="precio2_T4R${i}"

                    class="input_tabla precio unitario"
                    data-cant="cantidad_T4R${i}"
                    data-precio="precioTotal2_T4R${i}"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio 2"
                >

            </div>

            <input
                name="precio2_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="precio2_T4R${i}RO"
                data-campo="precio2_T4R${i}"
            >


        </td>
        






        
        <td>
            <div class="precio-wrapper">

                <span class="peso">$</span>

                <input
                    type="text"
                    readonly
                    id="precioTotal2_T4R${i}"
                    name="precioTotal2_T4R${i}"
                    class="input_tabla precio"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio Total 2 mas IVA"
                >

            </div>


        </td>
        
        










        <td>
            <select
                id="nombreCotizacion2_T4R${i}"
                name="nombreCotizacion2_T4R${i}"
                class="tabla_select"
                aria-label="Nombre del archivo donde esta la Cotizacion de la alternativa 2 del Equipo">

                <option value="">
                    -- Selecciona una cotización--
                </option>

            </select>

            <input
                name="nombreCotizacion2_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="nombreCotizacion2_T4R${i}RO"
                data-campo="nombreCotizacion2_T4R${i}"
            >
        </td>








        <td class="paso">
            <div class="contenedorArchivo paso">

                <input
                    type="file"
                    name="CotizacionAdquisicion2_T4R${i}"
                    class="archivoInput"
                    accept=".pdf,.xlsx,.doc,.docx,.png,.jpg"
                >

                <span class="nombreArchivo"></span>

                <button type="button" class="borrarArchivo">
                    ❌
                </button>

            </div>
        </td>

        <td>
            <button
        type="button"
        class="borrar-fila"
        title="Eliminar fila">
        ✕
    </button>
        </td>
    `;

    const filaTotal =
  document.getElementById("filaTotalTabla4");

if (filaTotal) {
  tbody.insertBefore(fila, filaTotal);
} else {
  tbody.appendChild(fila);
}
    activarAutoExpand(fila);
}






function agregarFila5(){

    const tbody = document.getElementById("tablaBody5");
    const i = obtenerNumeroFila5();

    const fila = document.createElement("tr");

    fila.innerHTML = `
        <td>
            ${i}
        </td>

        <td>
            <textarea
                name="ProgramaAcademico_T5R${i}"
                id="ProgramaAcademico_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programa Académico"
                readonly
                data-relleno="ProgramaAcademico_T4R${i}"
                >
            </textarea>

            </td>

        <td>
            <textarea
                name="Espacio_T5R${i}"
                id="Espacio_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Espacio"
                data-relleno="Espacio_T4R${i}"
                readonly
                >
            </textarea>

        </td>

        <td>
            <textarea
                name="nombredelEquipo_T5R${i}"
                id="nombredelEquipo_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del Equipo"
                data-relleno="nombredelEquipo_T4R${i}"
                readonly
                >
            </textarea>
        </td>

        <td>
            <textarea
                name="especificaciones_T5R${i}"
                class="auto-expand input_tabla"
                rows="1"
                style="resize:none;"
                aria-label="Especificaciones">
            </textarea>

            <input
                name="especificaciones_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="especificaciones_T5R${i}RO"
                data-campo="especificaciones_T5R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="cantidadMal_estado_T5R${i}"
                class="input_tabla"
                aria-label="Cantidad en mal estado"
            >

            <input
                name="cantidadMal_estado_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="cantidadMal_estado_T5R${i}RO"
                data-campo="cantidadMal_estado_T5R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="cantidadBuen_estado_T5R${i}"
                class="input_tabla"
                aria-label="Cantidad en buen estado"
            >

            <input
                name="cantidadBuen_estado_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="cantidadBuen_estado_T5R${i}RO"
                data-campo="cantidadBuen_estado_T5R${i}"
            >
        </td>

        <td class="cantidadCol">
            <input
                type="number"
                name="cantidadRegular_estado_T5R${i}"
                class="input_tabla"
                aria-label="Cantidad en estado Regular"
            >

            <input
                name="cantidadRegular_estado_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="cantidadRegular_estado_T5R${i}RO"
                data-campo="cantidadRegular_estado_T5R${i}"
            >
        </td>
    `;

    tbody.appendChild(fila);

    activarAutoExpand(fila);
}






                //-------------------------Construccion de la Tabla


for (let i = 1; i <= 10; i++) {
  agregarFila();
  agregarFila2();
  agregarFila3();
  agregarFilaC();
  agregarFila4();
  agregarFila5();

}

crearFilaTotalTabla4();




//-----------------------------------------------Enlaces Tabla1-Tabla4-Tabla2------------------------------------------------------------------------- 



//---------------------------------------------------Actualizacion de los selects de nombres de archivos





//---------------------------------------Funciones para cargar selects---------------------------------------------------------

function actualizarOpcionesProgramas() {

    // Obtener todos los programas escritos actualmente en Tabla 1
    const programas = [];

    tbody.querySelectorAll(
    '[name^="Programa_T1R"]'
                             ).forEach(input => {

     if (input.classList.contains("check-verificacion")) return;
    //tbody.querySelectorAll('[name^="Programa_T1R"]').forEach(input => {

        const valor = input.value.trim();

        if (!valor) return;

        programas.push(valor);
    });


    // Actualizar todos los selects de Programa de Tabla 4
    tbody4.querySelectorAll(
        'select[name^="ProgramaAcademico_T4R"]'
    ).forEach(select => {

        // Guardar lo que tenía seleccionado
        const valorActual = select.value;

        // Borrar las opciones anteriores
        select.innerHTML =
            '<option value="">Seleccione...</option>';

        // Volver a crear las opciones
        programas.forEach(programa => {

            const option = document.createElement("option");

            option.value = programa;
            option.textContent = programa;

            select.appendChild(option);
        });

        // Conservar la selección si todavía existe
        select.value = valorActual;
    });
}

tbody.addEventListener("change", e => {

    if (!e.target.name?.startsWith("Programa_T1R")) return;

    actualizarOpcionesProgramas();
});


//-----------------------------------------selects- tabla 4.Espacio-------------------------------------------------

function actualizarOpcionesEspacios() {

    const espacios = [];

    tbody2.querySelectorAll('[name^="Espacio_T2R"]').forEach(input => {
         if (input.classList.contains("check-verificacion")) return;
        const valor = input.value.trim();
        
        if (!valor) return;

        espacios.push(valor);
    });


    tbody4.querySelectorAll(
        'select[name^="Espacio_T4R"]'
    ).forEach(select => {

        const valorActual = select.value;

        select.innerHTML =
            '<option value="">Seleccione...</option>';

        espacios.forEach(espacio => {

            const option = document.createElement("option");

            option.value = espacio;
            option.textContent = espacio;

            select.appendChild(option);
        });

        select.value = valorActual;
    });
}


tbody2.addEventListener("change", e => {

    if (!e.target.name?.startsWith("Espacio_T2R")) return;

    actualizarOpcionesEspacios();
});



function actualizarOpcionesCotizacion1() {
    const nombresCot = [];


    tbodyC.querySelectorAll('[name^="CotizacionAdquisicionG1_TCR"]').forEach(input => {
        
       const fila = input.closest("tr");

       const nombreCotizacion =fila.querySelector('[name^="nombreCotizacion_TCR"]');
        

       /* if (input.files.length === 0) return;
       
             const  valor = input.files[0].name;
//             const valor = input.value.trim();
        
            
        if (!valor) return;
        nombreCotizacion.value=valor;
        nombresCot.push(valor);
        */
       let valor = "";

// Si hay archivo nuevo, usamos su nombre
if (input.files.length > 0) {

    valor = input.files[0].name;

    // Solo sobrescribimos el nombre guardado
    // cuando realmente se eligió otro archivo
    nombreCotizacion.value = valor;

} else {

    // No hay archivo nuevo.
// Conservamos el nombre que ya estaba guardado.
    valor = nombreCotizacion.value.trim();
}

if (!valor) return;

nombresCot.push(valor);





    });


    
    // ---------------- COTIZACIÓN 1 ----------------

    tbody4.querySelectorAll(
        'select[name^="nombreCotizacion_T4R"]'
    ).forEach(select => {

        const valorActual = select.value;

        select.innerHTML =
            '<option value="">Seleccione...</option>';
        nombresCot.forEach(nombre => {

            const option = document.createElement("option");

            option.value = nombre;
            option.textContent = nombre;

            select.appendChild(option);
        });

        select.value = valorActual;
    });

    
}





function actualizarOpcionesCotizacion2() {
    const nombresCot = [];

    
    tbodyC.querySelectorAll('[name^="CotizacionAdquisicionG2_TCR"]').forEach(input => {
        const fila = input.closest("tr");

       const nombreCotizacion =fila.querySelector('[name^="nombreCotizacion2_TCR"]');

    /* 
        if (input.files.length === 0) return;
       
             const  valor = input.files[0].name;
//             const valor = input.value.trim();

        if (!valor) return;

        nombresCot.push(valor);
    */

        let valor = "";

        // Archivo nuevo
        if (input.files.length > 0) {

            valor = input.files[0].name;

            nombreCotizacion.value = valor;

        } else {

            // Cotización que ya estaba guardada
            valor = nombreCotizacion.value.trim();
        }

        if (!valor) return;

        nombresCot.push(valor);

    });
   
    

    // ---------------- COTIZACIÓN 1 ----------------

    tbody4.querySelectorAll(
        'select[name^="nombreCotizacion2_T4R"]'
    ).forEach(select => {

        const valorActual = select.value;

        select.innerHTML =
            '<option value="">Seleccione...</option>';
        nombresCot.forEach(nombre => {

            const option = document.createElement("option");

            option.value = nombre;
            option.textContent = nombre;

            select.appendChild(option);
        });

        select.value = valorActual;
    });
    
}


tbodyC.addEventListener("change", e => {

    if (!e.target.name?.startsWith("CotizacionAdquisicionG1_TCR")) return;

    actualizarOpcionesCotizacion1();
});

tbodyC.addEventListener("change", e => {

    if (!e.target.name?.startsWith("CotizacionAdquisicionG2_TCR")) return;
    actualizarOpcionesCotizacion2();
});



































//------------------------------------------------------------------------------------------------------------------------------------------------------

//------------------------Crear boton de borrar y cargar archivo

document.addEventListener("change", (e) => {

    if (!e.target.matches(".archivoInput")) return;

    const input = e.target;
    const contenedor = input.closest(".contenedorArchivo");
    const nombres = contenedor.querySelector(".nombreArchivo");

    if (input.files.length === 0) return;

    const file = input.files[0];

    // Crear renglón para este archivo
    const item = document.createElement("div");
    item.classList.add("archivoItem");

    // Guardamos referencia al input que contiene este archivo
    item.inputArchivo = input;

    item.innerHTML = `
       <div class="contnombre">
        <span>${file.name}</span>
        <button type="button" class="borrarArchivo">
            ❌



        </button>
        </div>
    `;

    nombres.appendChild(item);


    // Solo hacemos esto con los múltiples
    if (input.matches(".archivoMultipleInput")) {

        // Ocultamos el input que ya tiene el archivo
        input.style.display = "none";

        // Creamos uno nuevo vacío
        const nuevoInput = input.cloneNode();

        nuevoInput.value = "";
        nuevoInput.style.display = "block";

        contenedor.appendChild(nuevoInput);
    }
});

//------------------------Funcion de boton de borrado de archivo

document.addEventListener("click", (e) => {

    if (!e.target.matches(".borrarArchivo")) return;

    const item = e.target.closest(".archivoItem");
    if (!item) return;

    const input = item.inputArchivo;
    if (!input) return;

    // Eliminamos nombre + ❌
    item.remove();


    // ==========================================
    // ARCHIVOS MÚLTIPLES
    // ==========================================

    if (input.matches(".archivoMultipleInput")) {

        input.remove();

        return;
    }


    // ==========================================
    // COTIZACIONES
    // ==========================================

    const fila = input.closest("tr");

    if (fila) {

        // Cotización G1
        if (input.name.startsWith("CotizacionAdquisicionG1_TCR")) {

            const nombreCotizacion =
                fila.querySelector('[name^="nombreCotizacion_TCR"]');

            if (nombreCotizacion) {
                nombreCotizacion.value = "";
            }
        }


        // Cotización G2
        if (input.name.startsWith("CotizacionAdquisicionG2_TCR")) {

            const nombreCotizacion =
                fila.querySelector('[name^="nombreCotizacion2_TCR"]');

            if (nombreCotizacion) {
                nombreCotizacion.value = "";
            }
        }
    }


    // Conservamos el input de cotización
    input.value = "";
    input.style.display = "block";

});



















//---------------------------Definicion de variables para selects de D Generales-------------------------------



const tipoDeSolicitudInput = document.getElementById("tipoDeSolicitud");



const dependenciaInput = document.getElementById("dependencia");
const dependenciaEncabezado = document.getElementById("dependenciaSolicitud");






function actualizarEncabezado() {

    const dependencia =
        dependenciaInput.options[dependenciaInput.selectedIndex]?.value || "";

    const tipoSolicitud =
        tipoDeSolicitudInput.options[tipoDeSolicitudInput.selectedIndex]?.value || "";

    dependenciaSolicitud.textContent =
        dependencia + " - " + tipoSolicitud;
}



dependenciaInput.addEventListener("change", actualizarEncabezado);



tipoDeSolicitudInput.addEventListener("change", actualizarEncabezado);






//-----------------------------------Agregar fila cuando se agrega un equipo---------------------------------------
document.getElementById("tablaBody").addEventListener("change", e => {
  if (!e.target.name?.startsWith("Programa_T1R")) return;

  const filas = document.querySelectorAll("#tablaBody tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila();
  }
});
document.getElementById("tablaBody2").addEventListener("change", e => {
  if (!e.target.name?.startsWith("Edificio_T2R")) return;

  const filas = document.querySelectorAll("#tablaBody2 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila2();
  }
});
document.getElementById("tablaBody3").addEventListener("change", e => {
  if (!e.target.name?.startsWith("Edificio_T3R")) return;

  const filas = document.querySelectorAll("#tablaBody3 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila3();
  }
});



document.getElementById("tablaCotizaciones").addEventListener("change", e => {
  if (!e.target.name?.startsWith("CotizacionAdquisicionG1_TCR")) return;

  const filas = document.querySelectorAll("#tablaCotizaciones tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFilaC();
  }
});




document
  .getElementById("tablaBody4")
  .addEventListener("change", e => {

    if (!e.target.name?.startsWith("nombredelEquipo_T4R")) {
      return;
    }

    const filas = document.querySelectorAll(
      "#tablaBody4 tr:not(#filaTotalTabla4)"
    );

    const ultimaFila = filas[filas.length - 1];

    if (ultimaFila.contains(e.target)) {

      agregarFila4();

      actualizarTotalesTabla4();
    }
  });




  //---------------------------Recalcular Totales-------------------


  document
  .getElementById("tablaBody4")
  .addEventListener("input", function(event) {

    if (
      event.target.matches(
        '[name^="cantidad_T4R"],' +
        '[name^="precio_T4R"],' +
        '[name^="precioTotal_T4R"],' +
        '[name^="precio2_T4R"],' +
        '[name^="precioTotal2_T4R"]'
      )
    ) {
      actualizarTotalesTabla4();
    }
  });






document.getElementById("tablaBody5").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T5R")) return;

  const filas = document.querySelectorAll("#tablaBody5 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila5();
  }
});


//Recuerda agregar esta misma funcion para cada tabla en caso de que las 4 tablas queden en la misma pagina cosa que aun no decido














//------------------------Evaluacion para borrar------------------------------------
function generarDependencia() {
  const valor = dependenciaInput.value.trim();
  const celdasDep = document.querySelectorAll("[id^='dependenciaR']");
  celdasDep.forEach(celda => celda.textContent = valor);
}
//----------------------------------------------------------------------------


// Ajuste automatico de celdas con mucho texto

const textareas = document.querySelectorAll(".auto-expand");

function autoResize(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

textareas.forEach(textarea => {
  textarea.addEventListener("input", () => autoResize(textarea));

  // Ajusta la altura inicial si ya tiene texto
  autoResize(textarea);
});





const siglasDependencias = new Map([
    ["Dirección de Asuntos Jurídicos", "DAJ"],
    ["Dirección de Programación y Presupuesto", "DPP"],
    ["Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco", "ESIA-Zacatenco"],
    ['Centro de Estudios Científicos y Tecnológicos (CECyT 17) "León, Guanajuato"', "CECyT17"],
    ['Centro de Estudios Científicos y Tecnológicos (CECyT 19) "Leona Vicario"', "CECyT19"],
    ["Dirección de Apoyo a Estudiantes", "DAE"],
    ["Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco", "ESIA-Tecamachalco"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"', "CECyT10"],
    ["Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)", "CIIEMAD"],
    ['Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"', "CET1"],
    ["Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA)", "UPIITA"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco", "ESIME-Zacatenco"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)", "UPIICSA"],
    ["Escuela Superior de Turismo (EST)", "EST"],
    ["Centro de Investigaciones Económicas, Administrativas y Sociales (CIECAS)", "CIECAS"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán", "ESIME-Culhuacan"],
    ["Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)", "ENBA"],
    ["Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)", "CICS-SantoTomas"],
    ["Escuela Superior de Medicina (ESM)", "ESM"],
    ["Escuela Superior de Física y Matemáticas (ESFM)", "ESFM"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"', "CECyT12"],
    ["Centro de Investigación en Computación (CIC)", "CIC"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)", "UPIIP-Palenque"],
    ["Escuela Nacional de Medicina y Homeopatía (ENMH)", "ENMH"],
    ["Dirección de Educación Superior", "DES"],
    ["Dirección de Formación e Innovación Educativa", "DFIE"],
    ["Secretaría Académica", "SA"],
    ["Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco", "CENLEX-Zacatenco"],
    ["Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan", "ESCA-Tepepan"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)", "UPIIH-Hidalgo"],
    ["Escuela Superior de Enfermería y Obstetricia (ESEO)", "ESEO"],
    ["Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás", "ESCA-SantoTomas"],
    ["Centro de Nanociencia y Micro-nanotecnología (CNMN)", "CNMN"],
    ["Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)", "UPIEM"],
    ["Centro Interdisciplinario de Ciencias Marinas (CICIMAR)", "CICIMAR"],
    ["Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)", "ESIQIE"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán", "ESIME-Ticoman"],
    ["Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán", "ESIA-Ticoman"],
    ["Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)", "UPIBI"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"', "CECyT3"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira", "CICATA-Altamira"],
    ["Escuela Superior de Ingeniería Textil (ESIT)", "ESIT"],
    ["Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)", "CICS-MilpaAlta"],
    ["Dirección de Recursos Materiales E Infraestructura", "DRMI"],
    ["Escuela Nacional de Ciencias Biológicas (ENCB)", "ENCB"],
    ["Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)", "CITEDI"],
    ["Dirección de Difusión de Ciencia y Tecnología", "DDCyT"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"', "CECyT18"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría", "CICATA-Legaria"],
    ["Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca", "CIIDIR-Oaxaca"],
    ["Escuela Superior de Ingeniería Química e Industrias Extractivas (ESIQIE)", "ESIQIE"],
    ["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco", "ESIME-Azcapotzalco"],
    ["Escuela Superior de Economía (ESE)", "ESE"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)", "UPIIG-Guanajuato"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"', "CECyT8"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)", "UPIIT-Tlaxcala"],
    ["Centro de Desarrollo de Productos Bióticos (CEPROBI)", "CEPROBI"],
    ["Dirección de Información Institucional", "DII"],
    ["Escuela Superior de Cómputo (ESCOM)", "ESCOM"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos", "CICATA-Morelos"],
    ["Centro Interdisciplinario de Investigación para El Desarrollo Integral Regional (CIIDIR), Unidad Michoacán", "CIIDIR-Michoacan"],
    ["Defensoría de los Derechos Politécnicos", "DDP"],
    ["Dirección de Formación en Lenguas Extranjeras", "DFLE"],
    ["Dirección General", "DG"],
    ["Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)", "UPIIZ-Zacatecas"],
    ["Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla", "CIITA-Puebla"],
    ["Dirección de Relaciones Internacionales", "DRI"],
    ["Dirección de Capital Humano", "DCH"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"', "CECyT19"],
    ["Dirección de Educación Media Superior", "DIEMS"],
    ["Coordinación General de Planeación E Información Institucional", "CGPII"],
    ["Coordinación de Imagen Institucional", "CII"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"', "CECyT7"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"', "CECyT2"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán", "CVDR-Culiacan"],
    ["Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango", "CIIDIR-Durango"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán", "CVDR-Mazatlan"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche", "CVDR-Campeche"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca", "CVDR-Oaxaca"],
    ["Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)", "CIBA-Tlaxcala"],
    ["Dirección de Cómputo y Comunicaciones", "DCC"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"', "CECyT4"],
    ["Secretaría de Investigación y Posgrado", "SIP"],
    ["Dirección de Vinculación y Desarrollo Regional", "DVDR"],
    ["Centro Mexicano para la Producción Más Limpia (CMP+L)", "CMP+L"],
    ["Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro", "CICATA-Queretaro"],
    ["Secretaría General", "SG"],
    ["Dirección de Egresados y Servicio Social", "DESS"],
    ["Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás", "CENLEX-SantoTomas"],
    ["Secretaría de Innovación E Integración Social", "SIIS"],
    ["Dirección de Bibliotecas y Publicaciones", "DBP"],
    ["Centro de Biotecnología Genómica (CBG)", "CBG"],
    ["Dirección de Educación Virtual", "DEV"],
    ['Centro de Estudios Cientificos y Tecnológicos (CECYT 11) "Wilfrido Massieu"', "CECyT11"],
    ["Dirección de Planeación y Organización", "DPO"],
    ["Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún", "CVDR-Cancun"],
    ["Dirección de Difusión Cultural", "DDC"],
    ["Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)", "UPGPG"],
    ['Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)', "UPIIAP-Puebla"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"', "CECyT20"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"', "CECyT13"],
    ["Dirección de Recursos Materiales e Infraestructura", "DRMI"],
    ["Dirección de Incubación de Empresas Tecnológicas", "DIET"],
    ['Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"', "CECyT15"]
]);

const siglasTipoBienes = new Map([
    ["Equipamento General (Capitulo 5000)", "EGC5000"],
["Bienes Tics","BT"],
["Flota Vehicular","FV"],
["Equipo de Laboratorio","EL"]]);


/*
const mapaFolios = new Map([
[
    "ESIA-Zacatenco-EGC5000-001",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT17-BT-002",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECyT 17) "León, Guanajuato"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DAE-BT-004",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Tecamachalco-BT-005",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT10-EGC5000-006",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIEMAD-BT-007",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-BT-008",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-EGC5000-009",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-BT-011",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Zacatenco-EGC5000-012",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-BT-013",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "EST-EGC5000-014",
    {
        dependencia: 'Escuela Superior de Turismo (EST)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Culhuacan-BT-017",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENBA-EGC5000-018",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-EL-019",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESM-BT-020",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESM-EL-021",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESFM-BT-022",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT12-BT-023",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIC-BT-024",
    {
        dependencia: 'Centro de Investigación en Computación (CIC)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT10-BT-025",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIP-Palenque-EGC5000-026",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENMH-EGC5000-027",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT10-EL-028",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DES-EGC5000-029",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DFIE-BT-030",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SA-EGC5000-031",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CENLEX-Zacatenco-EGC5000-032",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DFIE-EGC5000-033",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-BT-034",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESCA-Tepepan-EGC5000-035",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESCA-Tepepan-BT-036",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-EGC5000-037",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESEO-EL-038",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-Zacatenco-BT-039",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESCA-SantoTomas-BT-040",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SA-BT-041",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CNMN-EGC5000-042",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIP-Palenque-BT-043",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-BT-044",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENBA-BT-045",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIEM-BT-046",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICIMAR-EGC5000-047",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DES-BT-048",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIQIE-BT-049",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Culhuacan-EGC5000-050",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-EL-051",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIME-Ticoman-EGC5000-052",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Ticoman-EGC5000-053",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Ticoman-EL-054",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIA-Ticoman-BT-055",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIBI-EGC5000-056",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-EGC5000-057",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT3-BT-058",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT3-EGC5000-059",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Altamira-BT-060",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Altamira-EGC5000-061",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIT-BT-062",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICS-MilpaAlta-EL-063",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIT-EL-065",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DRMI-EGC5000-066",
    {
        dependencia: 'Dirección de Recursos Materiales E Infraestructura',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DRMI-BT-067",
    {
        dependencia: 'Dirección de Recursos Materiales E Infraestructura',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENCB-EGC5000-068",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-EGC5000-069",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DDCyT-EGC5000-070",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESEO-EGC5000-071",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENCB-BT-072",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Zacatenco-BT-073",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESEO-BT-074",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Tecamachalco-EGC5000-075",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-MilpaAlta-BT-076",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIBI-BT-077",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT18-EGC5000-078",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DAE-FV-079",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DAE-EGC5000-080",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-BT-081",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Legaria-EGC5000-082",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Legaria-BT-083",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Oaxaca-EGC5000-084",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIDIR-Oaxaca-BT-085",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIQIE-EGC5000-086",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Azcapotzalco-EGC5000-088",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIEM-EGC5000-089",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENCB-EL-090",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIQIE-EL-091",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESE-BT-092",
    {
        dependencia: 'Escuela Superior de Economía (ESE)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIG-Guanajuato-EGC5000-093",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIG-Guanajuato-BT-094",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT8-EL-095",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT8-EGC5000-096",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT8-BT-097",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIT-Tlaxcala-EGC5000-098",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIEMAD-EL-099",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIEMAD-EGC5000-100",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT18-BT-101",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CEPROBI-EL-102",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CEPROBI-EGC5000-103",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CEPROBI-BT-104",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENMH-EL-105",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DII-BT-106",
    {
        dependencia: 'Dirección de Información Institucional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-FV-107",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CET1-EL-108",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCOM-BT-109",
    {
        dependencia: 'Escuela Superior de Cómputo (ESCOM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Morelos-BT-111",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Michoacan-BT-112",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para El Desarrollo Integral Regional (CIIDIR), Unidad Michoacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Azcapotzalco-BT-113",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDP-BT-114",
    {
        dependencia: 'Defensoría de los Derechos Politécnicos',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDP-EGC5000-115",
    {
        dependencia: 'Defensoría de los Derechos Politécnicos',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-FV-116",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DFLE-BT-117",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DFLE-EGC5000-118",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DG-EGC5000-119",
    {
        dependencia: 'Dirección General',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DG-BT-120",
    {
        dependencia: 'Dirección General',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Oaxaca-EL-121",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESM-EGC5000-122",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-MilpaAlta-EGC5000-123",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIZ-Zacatecas-BT-124",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Culhuacan-FV-125",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "SA-FV-126",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CIITA-Puebla-EGC5000-127",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIITA-Puebla-EL-128",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIITA-Puebla-BT-129",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIITA-Puebla-FV-130",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DRI-BT-131",
    {
        dependencia: 'Dirección de Relaciones Internacionales',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENMH-BT-132",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIZ-Zacatecas-EGC5000-134",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DCH-BT-135",
    {
        dependencia: 'Dirección de Capital Humano',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESFM-EGC5000-136",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESM-FV-137",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICIMAR-BT-138",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESFM-EL-140",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT19-EGC5000-142",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT19-FV-143",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Culhuacan-EL-144",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT12-EGC5000-145",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIC-EGC5000-146",
    {
        dependencia: 'Centro de Investigación en Computación (CIC)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Azcapotzalco-EL-147",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIBI-EL-148",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DIEMS-BT-149",
    {
        dependencia: 'Dirección de Educación Media Superior',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DIEMS-FV-150",
    {
        dependencia: 'Dirección de Educación Media Superior',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CGPII-BT-151",
    {
        dependencia: 'Coordinación General de Planeación E Información Institucional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CGPII-EGC5000-152",
    {
        dependencia: 'Coordinación General de Planeación E Información Institucional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CNMN-EL-153",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CII-EGC5000-154",
    {
        dependencia: 'Coordinación de Imagen Institucional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DES-FV-157",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIEM-EL-158",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIP-Palenque-EL-159",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ENMH-FV-160",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESCA-SantoTomas-EGC5000-161",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT7-EGC5000-162",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-FV-163",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DFIE-EL-164",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT2-BT-165",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT2-EGC5000-166",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-EGC5000-167",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIP-Palenque-FV-168",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "SA-EL-169",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DFLE-FV-170",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESCA-Tepepan-FV-171",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CNMN-BT-172",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CNMN-FV-173",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Culiacan-BT-174",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-FV-175",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ENBA-EL-176",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIH-Hidalgo-EL-177",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIDIR-Durango-EL-178",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIDIR-Durango-EGC5000-179",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CVDR-Mazatlan-EGC5000-180",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CVDR-Campeche-BT-181",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Oaxaca-EGC5000-182",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICIMAR-EL-183",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIA-Zacatenco-FV-184",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Altamira-EL-185",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICIMAR-FV-186",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Mazatlan-FV-187",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Ticoman-EL-188",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIME-Ticoman-BT-189",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Oaxaca-BT-190",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Ticoman-FV-191",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Ticoman-FV-192",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Oaxaca-FV-196",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICS-MilpaAlta-FV-197",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CIBA-Tlaxcala-BT-198",
    {
        dependencia: 'Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIBA-Tlaxcala-EGC5000-199",
    {
        dependencia: 'Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Zacatenco-EL-200",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCA-Tepepan-EL-201",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIBI-FV-202",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESE-EGC5000-203",
    {
        dependencia: 'Escuela Superior de Economía (ESE)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DCC-BT-204",
    {
        dependencia: 'Dirección de Cómputo y Comunicaciones',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DCC-EGC5000-205",
    {
        dependencia: 'Dirección de Cómputo y Comunicaciones',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT4-EGC5000-206",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIP-EGC5000-207",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIP-BT-208",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SIP-FV-209",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT3-FV-210",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Altamira-FV-211",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIEM-FV-212",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIIG-Guanajuato-EL-213",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-Zacatenco-EL-214",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DDCyT-BT-215",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DVDR-BT-216",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DVDR-EL-217",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DVDR-EGC5000-218",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DVDR-FV-219",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIIZ-Zacatecas-EL-220",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIZ-Zacatecas-FV-221",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Campeche-EGC5000-222",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIT-EGC5000-223",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CMP+L-BT-224",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CMP+L-EL-225",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICATA-Queretaro-FV-226",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Queretaro-EGC5000-227",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Queretaro-BT-228",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SG-EGC5000-229",
    {
        dependencia: 'Secretaría General',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CMP+L-EGC5000-230",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DESS-BT-231",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DESS-EGC5000-232",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-EL-233",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICATA-Morelos-EL-234",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DESS-EL-235",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-SantoTomas-BT-236",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDCyT-FV-237",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Morelos-EGC5000-238",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIIS-EGC5000-239",
    {
        dependencia: 'Secretaría de Innovación E Integración Social',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Queretaro-EL-240",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DBP-EGC5000-241",
    {
        dependencia: 'Dirección de Bibliotecas y Publicaciones',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DBP-BT-242",
    {
        dependencia: 'Dirección de Bibliotecas y Publicaciones',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CENLEX-SantoTomas-EGC5000-243",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Tecamachalco-EL-246",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCOM-EGC5000-247",
    {
        dependencia: 'Escuela Superior de Cómputo (ESCOM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CBG-EL-248",
    {
        dependencia: 'Centro de Biotecnología Genómica (CBG)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT18-FV-249",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DEV-BT-250",
    {
        dependencia: 'Dirección de Educación Virtual',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "EST-BT-252",
    {
        dependencia: 'Escuela Superior de Turismo (EST)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Mazatlan-BT-253",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT11-BT-254",
    {
        dependencia: 'Centro de Estudios Cientificos y Tecnológicos (CECYT 11) "Wilfrido Massieu"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DPO-BT-255",
    {
        dependencia: 'Dirección de Planeación y Organización',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SG-BT-256",
    {
        dependencia: 'Secretaría General',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Cancun-BT-257",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DESS-FV-258",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT4-BT-259",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT4-FV-260",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DDC-EGC5000-261",
    {
        dependencia: 'Dirección de Difusión Cultural',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DDC-BT-262",
    {
        dependencia: 'Dirección de Difusión Cultural',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPGPG-BT-263",
    {
        dependencia: 'Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPGPG-EGC5000-264",
    {
        dependencia: 'Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIAP-Puebla-BT-265",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIAP-Puebla-EL-267",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIT-Tlaxcala-EL-268",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIAP-Puebla-EGC5000-269",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIAP-Puebla-FV-271",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT20-BT-272",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT20-EGC5000-273",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT20-EL-275",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT13-EGC5000-276",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT18-EL-281",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIICSA-EL-282",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT19-BT-283",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DIET-BT-284",
    {
        dependencia: 'Dirección de Incubación de Empresas Tecnológicas',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT15-BT-285",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CBG-BT-286",
    {
        dependencia: 'Centro de Biotecnología Genómica (CBG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Cancun-EGC5000-287",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
]
]);

*/

const mapaFolios = new Map([
[
    "ESIA-Zacatenco-BG-001",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT17-BT-002",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECyT 17) "León, Guanajuato"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DAE-BT-004",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Tecamachalco-BT-005",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT10-BG-006",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIEMAD-BT-007",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-BT-008",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-BG-009",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-BT-011",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Zacatenco-BG-012",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-BT-013",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "EST-BG-014",
    {
        dependencia: 'Escuela Superior de Turismo (EST)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Culhuacan-BT-017",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENBA-BG-018",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-EL-019",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESM-BT-020",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESM-EL-021",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESFM-BT-022",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT12-BT-023",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIC-BT-024",
    {
        dependencia: 'Centro de Investigación en Computación (CIC)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT10-BT-025",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIP-Palenque-BG-026",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENMH-BG-027",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT10-EL-028",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DES-BG-029",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DFIE-BT-030",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SA-BG-031",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CENLEX-Zacatenco-BG-032",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DFIE-BG-033",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-BT-034",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESCA-Tepepan-BG-035",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESCA-Tepepan-BT-036",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-BG-037",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESEO-EL-038",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-Zacatenco-BT-039",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESCA-SantoTomas-BT-040",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SA-BT-041",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CNMN-BG-042",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIP-Palenque-BT-043",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-BT-044",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENBA-BT-045",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIEM-BT-046",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICIMAR-BG-047",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DES-BT-048",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIQIE-BT-049",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Culhuacan-BG-050",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-EL-051",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIME-Ticoman-BG-052",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Ticoman-BG-053",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Ticoman-EL-054",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIA-Ticoman-BT-055",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIBI-BG-056",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-BG-057",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT3-BT-058",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT3-BG-059",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Altamira-BT-060",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Altamira-BG-061",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIT-BT-062",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICS-MilpaAlta-EL-063",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIT-EL-065",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DRMI-BG-066",
    {
        dependencia: 'Dirección de Recursos Materiales E Infraestructura',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DRMI-BT-067",
    {
        dependencia: 'Dirección de Recursos Materiales E Infraestructura',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENCB-BG-068",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-BG-069",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DDCyT-BG-070",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESEO-BG-071",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENCB-BT-072",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Zacatenco-BT-073",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESEO-BT-074",
    {
        dependencia: 'Escuela Superior de Enfermería y Obstetricia (ESEO)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Tecamachalco-BG-075",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-MilpaAlta-BT-076",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIBI-BT-077",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT18-BG-078",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DAE-FV-079",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DAE-BG-080",
    {
        dependencia: 'Dirección de Apoyo a Estudiantes',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-BT-081",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Legaria-BG-082",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Legaria-BT-083",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Oaxaca-BG-084",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIDIR-Oaxaca-BT-085",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIQIE-BG-086",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Azcapotzalco-BG-088",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIEM-BG-089",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ENCB-EL-090",
    {
        dependencia: 'Escuela Nacional de Ciencias Biológicas (ENCB)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIQIE-EL-091",
    {
        dependencia: 'Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESE-BT-092",
    {
        dependencia: 'Escuela Superior de Economía (ESE)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIG-Guanajuato-BG-093",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIG-Guanajuato-BT-094",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT8-EL-095",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT8-BG-096",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT8-BT-097",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIT-Tlaxcala-BG-098",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIIEMAD-EL-099",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIEMAD-BG-100",
    {
        dependencia: 'Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente y Desarrollo (CIIEMAD)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT18-BT-101",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CEPROBI-EL-102",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CEPROBI-BG-103",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CEPROBI-BT-104",
    {
        dependencia: 'Centro de Desarrollo de Productos Bióticos (CEPROBI)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENMH-EL-105",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DII-BT-106",
    {
        dependencia: 'Dirección de Información Institucional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CET1-FV-107",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CET1-EL-108",
    {
        dependencia: 'Centro de Estudios Tecnológicos (CET 1) "Walter Cross Buchanan"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCOM-BT-109",
    {
        dependencia: 'Escuela Superior de Cómputo (ESCOM)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CICATA-Morelos-BT-111",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Michoacan-BT-112",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para El Desarrollo Integral Regional (CIIDIR), Unidad Michoacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Azcapotzalco-BT-113",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDP-BT-114",
    {
        dependencia: 'Defensoría de los Derechos Politécnicos',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDP-BG-115",
    {
        dependencia: 'Defensoría de los Derechos Politécnicos',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Zacatenco-FV-116",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DFLE-BT-117",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DFLE-BG-118",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DG-BG-119",
    {
        dependencia: 'Dirección General',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DG-BT-120",
    {
        dependencia: 'Dirección General',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIIDIR-Oaxaca-EL-121",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESM-BG-122",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-MilpaAlta-BG-123",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIZ-Zacatecas-BT-124",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIME-Culhuacan-FV-125",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "SA-FV-126",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CIITA-Puebla-BG-127",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIITA-Puebla-EL-128",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIITA-Puebla-BT-129",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIITA-Puebla-FV-130",
    {
        dependencia: 'Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DRI-BT-131",
    {
        dependencia: 'Dirección de Relaciones Internacionales',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ENMH-BT-132",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIZ-Zacatecas-BG-134",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DCH-BT-135",
    {
        dependencia: 'Dirección de Capital Humano',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESFM-BG-136",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESM-FV-137",
    {
        dependencia: 'Escuela Superior de Medicina (ESM)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICIMAR-BT-138",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESFM-EL-140",
    {
        dependencia: 'Escuela Superior de Física y Matemáticas (ESFM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT19-BG-142",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT19-FV-143",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Culhuacan-EL-144",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT12-BG-145",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CIC-BG-146",
    {
        dependencia: 'Centro de Investigación en Computación (CIC)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIME-Azcapotzalco-EL-147",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIBI-EL-148",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DIEMS-BT-149",
    {
        dependencia: 'Dirección de Educación Media Superior',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DIEMS-FV-150",
    {
        dependencia: 'Dirección de Educación Media Superior',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CGPII-BT-151",
    {
        dependencia: 'Coordinación General de Planeación E Información Institucional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CGPII-BG-152",
    {
        dependencia: 'Coordinación General de Planeación E Información Institucional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CNMN-EL-153",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CII-BG-154",
    {
        dependencia: 'Coordinación de Imagen Institucional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DES-FV-157",
    {
        dependencia: 'Dirección de Educación Superior',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIEM-EL-158",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIP-Palenque-EL-159",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ENMH-FV-160",
    {
        dependencia: 'Escuela Nacional de Medicina y Homeopatía (ENMH)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESCA-SantoTomas-BG-161",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Santo Tomás',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT7-BG-162",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIICSA-FV-163",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DFIE-EL-164",
    {
        dependencia: 'Dirección de Formación e Innovación Educativa',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT2-BT-165",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT2-BG-166",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICS-SantoTomas-BG-167",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Santo Tomás (CICS UST)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIP-Palenque-FV-168",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Palenque (UPIIP)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "SA-EL-169",
    {
        dependencia: 'Secretaría Académica',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DFLE-FV-170",
    {
        dependencia: 'Dirección de Formación en Lenguas Extranjeras',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESCA-Tepepan-FV-171",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CNMN-BT-172",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CNMN-FV-173",
    {
        dependencia: 'Centro de Nanociencia y Micro-nanotecnología (CNMN)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Culiacan-BT-174",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIH-Hidalgo-FV-175",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ENBA-EL-176",
    {
        dependencia: 'Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIH-Hidalgo-EL-177",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Hidalgo (UPIIH)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIDIR-Durango-EL-178",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CIIDIR-Durango-BG-179",
    {
        dependencia: 'Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CVDR-Mazatlan-BG-180",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CVDR-Campeche-BT-181",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Oaxaca-BG-182",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICIMAR-EL-183",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIA-Zacatenco-FV-184",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Altamira-EL-185",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICIMAR-FV-186",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias Marinas (CICIMAR)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Mazatlan-FV-187",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Ticoman-EL-188",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESIME-Ticoman-BT-189",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Oaxaca-BT-190",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "ESIA-Ticoman-FV-191",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESIME-Ticoman-FV-192",
    {
        dependencia: 'Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Oaxaca-FV-196",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICS-MilpaAlta-FV-197",
    {
        dependencia: 'Centro Interdisciplinario de Ciencias de la Salud, Unidad Milpa Alta (CICS UMA)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CIBA-Tlaxcala-BT-198",
    {
        dependencia: 'Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CIBA-Tlaxcala-BG-199",
    {
        dependencia: 'Centro de Investigación en Biotecnología Aplicada, IPN-tlaxcala (CIBA)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Zacatenco-EL-200",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCA-Tepepan-EL-201",
    {
        dependencia: 'Escuela Superior de Comercio y Administración (ESCA), Unidad Tepepan',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIBI-FV-202",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "ESE-BG-203",
    {
        dependencia: 'Escuela Superior de Economía (ESE)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DCC-BT-204",
    {
        dependencia: 'Dirección de Cómputo y Comunicaciones',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DCC-BG-205",
    {
        dependencia: 'Dirección de Cómputo y Comunicaciones',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT4-BG-206",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIP-BG-207",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIP-BT-208",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SIP-FV-209",
    {
        dependencia: 'Secretaría de Investigación y Posgrado',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT3-FV-210",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Altamira-FV-211",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIEM-FV-212",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIIG-Guanajuato-EL-213",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-Zacatenco-EL-214",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DDCyT-BT-215",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DVDR-BT-216",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DVDR-EL-217",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DVDR-BG-218",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DVDR-FV-219",
    {
        dependencia: 'Dirección de Vinculación y Desarrollo Regional',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "UPIIZ-Zacatecas-EL-220",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIZ-Zacatecas-FV-221",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CVDR-Campeche-BG-222",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIT-BG-223",
    {
        dependencia: 'Escuela Superior de Ingeniería Textil (ESIT)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CMP+L-BT-224",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CMP+L-EL-225",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICATA-Queretaro-FV-226",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Queretaro-BG-227",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Queretaro-BT-228",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SG-BG-229",
    {
        dependencia: 'Secretaría General',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CMP+L-BG-230",
    {
        dependencia: 'Centro Mexicano para la Producción Más Limpia (CMP+L)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DESS-BT-231",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DESS-BG-232",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CITEDI-EL-233",
    {
        dependencia: 'Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CICATA-Morelos-EL-234",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DESS-EL-235",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CENLEX-SantoTomas-BT-236",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DDCyT-FV-237",
    {
        dependencia: 'Dirección de Difusión de Ciencia y Tecnología',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CICATA-Morelos-BG-238",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Morelos',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "SIIS-BG-239",
    {
        dependencia: 'Secretaría de Innovación E Integración Social',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CICATA-Queretaro-EL-240",
    {
        dependencia: 'Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "DBP-BG-241",
    {
        dependencia: 'Dirección de Bibliotecas y Publicaciones',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DBP-BT-242",
    {
        dependencia: 'Dirección de Bibliotecas y Publicaciones',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CENLEX-SantoTomas-BG-243",
    {
        dependencia: 'Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "ESIA-Tecamachalco-EL-246",
    {
        dependencia: 'Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "ESCOM-BG-247",
    {
        dependencia: 'Escuela Superior de Cómputo (ESCOM)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CBG-EL-248",
    {
        dependencia: 'Centro de Biotecnología Genómica (CBG)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT18-FV-249",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DEV-BT-250",
    {
        dependencia: 'Dirección de Educación Virtual',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "EST-BT-252",
    {
        dependencia: 'Escuela Superior de Turismo (EST)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Mazatlan-BT-253",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT11-BT-254",
    {
        dependencia: 'Centro de Estudios Cientificos y Tecnológicos (CECYT 11) "Wilfrido Massieu"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DPO-BT-255",
    {
        dependencia: 'Dirección de Planeación y Organización',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "SG-BT-256",
    {
        dependencia: 'Secretaría General',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Cancun-BT-257",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DESS-FV-258",
    {
        dependencia: 'Dirección de Egresados y Servicio Social',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT4-BT-259",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT4-FV-260",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "DDC-BG-261",
    {
        dependencia: 'Dirección de Difusión Cultural',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "DDC-BT-262",
    {
        dependencia: 'Dirección de Difusión Cultural',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPGPG-BT-263",
    {
        dependencia: 'Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPGPG-BG-264",
    {
        dependencia: 'Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIAP-Puebla-BT-265",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "UPIIAP-Puebla-EL-267",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIT-Tlaxcala-EL-268",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus Tlaxcala (UPIIT)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIIAP-Puebla-BG-269",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "UPIIAP-Puebla-FV-271",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
        tipoDeBien: "Flota Vehicular"
    }
],
[
    "CECyT20-BT-272",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT20-BG-273",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT20-EL-275",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT13-BG-276",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
],
[
    "CECyT18-EL-281",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "UPIICSA-EL-282",
    {
        dependencia: 'Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)',
        tipoDeBien: "Equipo de Laboratorio"
    }
],
[
    "CECyT19-BT-283",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Tecámac"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "DIET-BT-284",
    {
        dependencia: 'Dirección de Incubación de Empresas Tecnológicas',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CECyT15-BT-285",
    {
        dependencia: 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CBG-BT-286",
    {
        dependencia: 'Centro de Biotecnología Genómica (CBG)',
        tipoDeBien: "Bienes Tics"
    }
],
[
    "CVDR-Cancun-BG-287",
    {
        dependencia: 'Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún',
        tipoDeBien: "Equipamento General (Capitulo 5000)"
    }
]
]);





function obtenerListaDependencias() {
    return Array.from(siglasDependencias.keys());
}






const opciones = obtenerListaDependencias();













  opciones.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    dependenciaInput.appendChild(option);
  });







function actualizarObligatoriedadFila(fila) {
  const equipo = fila.querySelector(".obligatorio");
  if (!equipo) return;

  const tieneEquipo = equipo.value.trim() !== "";
  const campos = fila.querySelectorAll("input, textarea, select");

  campos.forEach(campo => {
    if (tieneEquipo) {
      campo.setAttribute("required", "required");
    } else {
      campo.removeAttribute("required");
    }
  });
}


//----------------Esta parte se encarga de detectar un cambio en las celdas de la tabla y cuando recibe un cambio que no es 
//----------------en la clase obligatorio este no reacciona, en caso afirmativo cambio el estado de required
//--------------------------------------** *------------------------------------------/

document.getElementById("tablaBody").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});



document.getElementById("tablaBody2").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});


document.getElementById("tablaBody3").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});

document.getElementById("tablaCotizaciones").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;
  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});






document.getElementById("tablaBody4").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});







document.getElementById("tablaBody5").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});


  


function obtenerNumeroFila1(){
     const filas = document.querySelectorAll("#tablaBody tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

        // No contar total
 /*       if (fila.id === "filaTotalTabla") {
            return;
        }
*/
        numero++;
    });

    return numero;

    //  return document.querySelectorAll("#tablaBody tr").length -1;
}
function obtenerNumeroFila1_1(){
      const filas = document.querySelectorAll("#tablaBody1_1 tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

        // No contar total
 /*       if (fila.id === "filaTotalTabla") {
            return;
        }
*/
        numero++;
    });

    return numero;
  //return document.querySelectorAll("#tablaBody1_1 tr").length -1;
}


function obtenerNumeroFila2(){
       const filas = document.querySelectorAll("#tablaBody2 tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

        // No contar total
 /*       if (fila.id === "filaTotalTabla") {
            return;
        }
*/
        numero++;
    });

    return numero;
//  return document.querySelectorAll("#tablaBody2 tr").length - 1;
}

function obtenerNumeroFila3(){
       const filas = document.querySelectorAll("#tablaBody3 tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

        // No contar total
 /*       if (fila.id === "filaTotalTabla") {
            return;
        }
*/
        numero++;
    });

    return numero;
//    return document.querySelectorAll("#tablaBody3 tr").length - 1;
}

function obtenerNumeroFilaC(){
         const filas = document.querySelectorAll("#tablaCotizaciones tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

        // No contar total
 /*       if (fila.id === "filaTotalTabla") {
            return;
        }
*/
        numero++;
    });

    return numero;
//    return document.querySelectorAll("#tablaCotizaciones tr").length + 1;
}

function obtenerNumeroFila4(){

             const filas = document.querySelectorAll("#tablaBody4 tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

    // No contar total
         if (fila.id === "filaTotalTabla") {
            return;
        }

        numero++;
    });

    return numero;

//  return document.querySelectorAll("#tablaBody4 tr").length - 1;
}

function obtenerNumeroFila5(){

     
                const filas = document.querySelectorAll("#tablaBody5 tr");

    let numero = 1;

    filas.forEach(fila => {

        // No contar ejemplos
        if (
            fila.classList.contains("ejemplo") ||
            fila.querySelector(".ejemplo")
        ) {
            return;
        }

        // No contar total
 /*       if (fila.id === "filaTotalTabla") {
            return;
        }
*/
        numero++;
    });

    return numero;

//  return document.querySelectorAll("#tablaBody5 tr").length - 1;
}




function formatearMiles(input) {
  // Quitar todo menos números y punto
  let valor = input.value.replace(/[^0-9.]/g, "");

  // Evitar más de un punto decimal
  const partes = valor.split(".");
  if (partes.length > 2) {
    valor = partes[0] + "." + partes.slice(1).join("");
  }
  // Separar parte entera y decimal
  let [entero, decimal] = valor.split(".");

  // Agregar separador de miles
  entero = entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  input.value = decimal !== undefined
    ? `${entero}.${decimal.slice(0,2)}`
    : entero;
}







function crearFilaTotalTabla4() {

  const tbody = document.getElementById("tablaBody4");

  // Si ya existe, no crear otra
  if (document.getElementById("filaTotalTabla4")) return;

  const filaTotal = document.createElement("tr");

  filaTotal.id = "filaTotalTabla4";
  filaTotal.classList.add("fila-total");

  filaTotal.innerHTML = `
    <td></td>

    <td colspan="4">
      <strong>TOTAL</strong>
    </td>

    <td id="totalCantidad_T4"></td>

    <td></td>
    <td></td>

    <td id="totalPrecio1_T4"></td>

    <td id="totalPrecioIVA1_T4"></td>

    <td></td>
    <td class="paso"></td>

    <td id="totalPrecio2_T4"></td>

    <td id="totalPrecioIVA2_T4"></td>

    <td></td>
    <td class="paso"></td>
  `;

  tbody.appendChild(filaTotal);

  actualizarTotalesTabla4();
}


function numeroSinFormato(valor) {

  return Number(
    String(valor || "").replace(/,/g, "")
  ) || 0;
}


function formatoMilesNumero(numero) {

  return numero.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}


function actualizarTotalesTabla4() {

  let totalCantidad = 0;
  let totalPrecio1 = 0;
  let totalPrecioIVA1 = 0;
  let totalPrecio2 = 0;
  let totalPrecioIVA2 = 0;

  document
    .querySelectorAll('#tablaBody4 tr:not(#filaTotalTabla4)')
    .forEach(fila => {

      const cantidad =
        fila.querySelector('[name^="cantidad_T4R"]');

      const precio1 =
        fila.querySelector('[name^="precio_T4R"]:not([name$="RO"])');

      const precioIVA1 =
        fila.querySelector('[name^="precioTotal_T4R"]');

      const precio2 =
        fila.querySelector('[name^="precio2_T4R"]:not([name$="RO"])');

      const precioIVA2 =
        fila.querySelector('[name^="precioTotal2_T4R"]');

      if (cantidad) {
        totalCantidad += numeroSinFormato(cantidad.value);
      }

      if (precio1) {
        totalPrecio1 += numeroSinFormato(precio1.value);
      }

      if (precioIVA1) {
        totalPrecioIVA1 += numeroSinFormato(precioIVA1.value);
      }

      if (precio2) {
        totalPrecio2 += numeroSinFormato(precio2.value);
      }

      if (precioIVA2) {
        totalPrecioIVA2 += numeroSinFormato(precioIVA2.value);
      }
    });


  document.getElementById("totalCantidad_T4").textContent =
    totalCantidad;

  document.getElementById("totalPrecio1_T4").textContent =
    "$" + formatoMilesNumero(totalPrecio1);

  document.getElementById("totalPrecioIVA1_T4").textContent =
    "$" + formatoMilesNumero(totalPrecioIVA1);

  document.getElementById("totalPrecio2_T4").textContent =
    "$" + formatoMilesNumero(totalPrecio2);

  document.getElementById("totalPrecioIVA2_T4").textContent =
    "$" + formatoMilesNumero(totalPrecioIVA2);
}








function activarAutoExpand(fila){
  const textareas = fila.querySelectorAll(".auto-expand");
  textareas.forEach(textarea => {
    textarea.addEventListener("input", () => {
      textarea.style.height = "auto";
      textarea.style.height = textarea.scrollHeight + "px";
    });
  });
}





document.getElementById("miFormulario").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
});




//---------------------------Generar Folio
function generarFolio() {
   return Math.random().toString(36).substr(2, 8).toUpperCase();
}












function siguiente(numero,numeroActivar){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numeroActivar}`)
    .classList.add("activo");
}


function anterior(numero){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numero-1}`)
    .classList.add("activo");
}
function soloActivar(numero){
if(document
    .getElementById(`paso${numero}`)
    .classList.contains("activo")){
         document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");    
    }else{

  document
    .getElementById(`paso${numero}`)
    .classList.add("activo");
  }

}






function precioTotalMasIVA(precioInput) {
      
               
        
            let precioTotal=precioInput.dataset.precio;
            let cantidad=precioInput.dataset.cant;
        
        
        let cantidadInput=document
        .getElementById(cantidad);
        
        let precioTotalinput=document
        .getElementById(precioTotal);
        
       let valorUnitario = Number(
                precioInput.value.replace(/,/g, "")
              );
                 precioTotal=valorUnitario*cantidadInput.value*1.16;
                
                precioTotalinput.value=precioTotal;
                formatearMiles(precioTotalinput);
                actualizarTotalesTabla4();    
            }
    
document
               .querySelector(".Tabla4")
               .addEventListener("change",function (event){
    
            const origen = event.target;    
               document
            .querySelectorAll(`[data-relleno="${origen.id}"]`)
            .forEach(destino => {
                destino.value = origen.value;
            });
                
               precioTotalMasIVA(event.target);

               });






/*
document
        .getElementById(precioTotal);
document.querySelectorAll("#tablaBody5 [data-relleno]").forEach(campo => {

    const nombreOrigen = campo.dataset.relleno;

    const campoOrigen = document.querySelector(
        `[name="${nombreOrigen}"]`
    );

    if (!campoOrigen) return;

    campo.value = campoOrigen.value;

    if (campo.tagName === "TEXTAREA") {
        campo.style.height = "auto";
        campo.style.height = campo.scrollHeight + "px";
    }
});               

*/










const direccionEnlace="https://script.google.com/macros/s/AKfycbwGftGIEgkoj3eXcFHXFDOuKpWsoQdaivav-wBPdMP3k7CpR_TJyfhwxCv3qmbLvqa2YA/exec"

let folioActual=null;
let edicionActual=null;
let numerodeEnvio=0;
let ExistenciaDeCotizaciones=false;
let folioCargado = false;


let ExistenciaDeCotizaciones_T4=false;


let ExistenciaDeCotizacionesA2=false;



let ExistenciaDeCotizacionesA2_T4=false;

//--------------------------------------Cargar UltimaVersion

async function cargarDatosPorFolio() {

    const folio = document
        .getElementById("folioInput")
        .value
        .trim();

    if (!folio) {
        alert("Ingrese un folio.");
        return;
    }
    folioActual=folio;
    const datos = mapaFolios.get(folio);

    if (!datos) {
        alert("Folio no encontrado.");
        return;
    }

    // Cargar dependencia
setSelectValue(
        "dependencia",
        datos.dependencia
    );

    setSelectValue(
        "tipoDeSolicitud",
        datos.tipoDeBien
    );



try {    
    const res = await fetch(direccionEnlace, {
    method: "POST",
    body: JSON.stringify({
        action: "cargarUltimaVersion",
        dependencia:datos.dependencia,
        tipoDeBien:datos.tipoDeBien
    })
});

const json = await res.json();
const data =json.data;
alert(data.dependencia + "  su funcion y accion funcionan bien.Hora de la actualizacion:" + data.fechaModificacion +". el Origen es un" + json.origen );

  const form = document.getElementById("miFormulario");

  // Limpiar tabla
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones");
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");

  /*
  const tbody6 = document.getElementById("tablaBody6");
  */

  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  /*
  tbody6.innerHTML = "";
  
  */
  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }

//alert("despues de cargar Borrador"+folioActual);

//      folioActual = folio;
      edicionActual=data.edicion;
// Restaurar selects encadenados
/*setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
*/
//-------------------------------  activa selects
// folioValor.value=data.folio;
      setSelectValue("dependencia", data.dependencia);
      Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
                          if(name.includes("url")){
                                        urlCotizacionesActuales[name] = data[name];
                                        //alert("data:"+data[name]);
                                        //alert("urlcot"+urlCotizacionesActuales[name]);
                          };
                          if (name.includes("R")) return; //quitamos los campos de la tabla
                          if(name.includes("secretaria")) return;
                          if(name.includes("direccion")) return; 
                          if(name.includes("nivel")) return; 
                          if(name.includes("dependencia")) return;
//                          if(name.includes("folio")) return; 
                          const campo = document.querySelector(`[name="${name}"]`);
                          if (!campo) return;
                          
    campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });

let folioValor = document.getElementById("folioInput");
 folioValor.value=folioActual;


      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);
actualizarOpcionesProgramas();
actualizarOpcionesEspacios();
actualizarOpcionesCotizacion1()
actualizarOpcionesCotizacion2()



      document.querySelectorAll("textarea.auto-expand").forEach(textarea => {
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
});


document
    .querySelectorAll(".Tabla4 .unitario")
    .forEach(precioInput => {
        precioTotalMasIVA(precioInput);
    });




document.querySelectorAll(".check-verificacion").forEach(check => {

     const campo = document.querySelector(`[name="${check.dataset.campo}"]`);
    if (!campo) return;

    campo.readOnly = check.value === true || check.value === "true";
});


//document.getElementById("especificaciones").readOnly =    data.especificacionesRO ?? false;

      
const ejemplos = json.ejemplos;
    for(let index=1;index<3;index++){
   document.getElementById(`ProgramasE${index}`).textContent=ejemplos[`ProgramasE${index}`];   
   document.getElementById(`UsuariosHAnio1E${index}`).textContent=ejemplos[`UsuariosHAnio1E${index}`];
   document.getElementById(`UsuariosMAnio1E${index}`).textContent=ejemplos[`UsuariosMAnio1E${index}`];
   document.getElementById(`UsuariosHAnio2E${index}`).textContent=ejemplos[`UsuariosHAnio2E${index}`];
   document.getElementById(`UsuariosMAnio2E${index}`).textContent=ejemplos[`UsuariosMAnio2E${index}`];
   document.getElementById(`UsuariosHAnio3E${index}`).textContent=ejemplos[`UsuariosHAnio3E${index}`];
   document.getElementById(`UsuariosMAnio3E${index}`).textContent=ejemplos[`UsuariosMAnio3E${index}`];
   document.getElementById(`UsuariosHAnio4E${index}`).textContent=ejemplos[`UsuariosHAnio4E${index}`];
   document.getElementById(`UsuariosMAnio4E${index}`).textContent=ejemplos[`UsuariosMAnio4E${index}`];
   document.getElementById(`UsuariosHAnio5E${index}`).textContent=ejemplos[`UsuariosHAnio5E${index}`];
   document.getElementById(`UsuariosMAnio5E${index}`).textContent=ejemplos[`UsuariosMAnio5E${index}`];

 document.getElementById(`NumProfE${index}`        ).textContent     =ejemplos[`NumProfE${index}`        ]
 document.getElementById(`UsuariosAHAnio1E${index}`).textContent=ejemplos[`UsuariosAHAnio1E${index}`]
 document.getElementById(`UsuariosAMAnio1E${index}`).textContent=ejemplos[`UsuariosAMAnio1E${index}`]
 document.getElementById(`UsuariosAHAnio2E${index}`).textContent=ejemplos[`UsuariosAHAnio2E${index}`]
 document.getElementById(`UsuariosAMAnio2E${index}`).textContent=ejemplos[`UsuariosAMAnio2E${index}`]
 document.getElementById(`UsuariosAHAnio3E${index}`).textContent=ejemplos[`UsuariosAHAnio3E${index}`]
 document.getElementById(`UsuariosAMAnio3E${index}`).textContent=ejemplos[`UsuariosAMAnio3E${index}`]
 document.getElementById(`UsuariosAHAnio4E${index}`).textContent=ejemplos[`UsuariosAHAnio4E${index}`]
 document.getElementById(`UsuariosAMAnio4E${index}`).textContent=ejemplos[`UsuariosAMAnio4E${index}`]
 document.getElementById(`UsuariosAHAnio5E${index}`).textContent=ejemplos[`UsuariosAHAnio5E${index}`]
 document.getElementById(`UsuariosAMAnio5E${index}`).textContent=ejemplos[`UsuariosAMAnio5E${index}`]

document.getElementById(`Edificio_T2E${index}`).textContent= ejemplos[`Edificio_T2E${index}`];
document.getElementById(`Nivel_T2E${index}`   ).textContent= ejemplos[`Nivel_T2E${index}`   ];
document.getElementById(`Espacio_T2E${index}` ).textContent= ejemplos[`Espacio_T2E${index}` ];
document.getElementById(`Largo_T2E${index}`   ).textContent= ejemplos[`Largo_T2E${index}`   ];
document.getElementById(`Ancho_T2E${index}`   ).textContent= ejemplos[`Ancho_T2E${index}`   ];
document.getElementById(`Alumnos_T2E${index}` ).textContent= ejemplos[`Alumnos_T2E${index}` ];
document.getElementById(`Horas_T2E${index}`   ).textContent= ejemplos[`Horas_T2E${index}`   ];

document.getElementById(`Edificio_T3E${index}`).textContent       = ejemplos[`Edificio_T3E${index}`];
document.getElementById(`MetrosCuadrados_T3E${index}`).textContent= ejemplos[`MetrosCuadrados_T3E${index}`];


document.getElementById(`ProgramaAcademico_T4E${index}`).textContent= ejemplos[`ProgramaAcademico_T4E${index}`];              
document.getElementById(`Espacio_T4E${index}`).textContent= ejemplos[`Espacio_T4E${index}`];         
document.getElementById(`Clave_T4E${index}`).textContent= ejemplos[`Clave_T4E${index}`];       
document.getElementById(`Equipo_T4E${index}`).textContent= ejemplos[`Equipo_T4E${index}`];        
document.getElementById(`Cantidad_T4E${index}`).textContent= ejemplos[`Cantidad_T4E${index}`];         
document.getElementById(`Especificaciones_T4E${index}`).textContent= ejemplos[`Especificaciones_T4E${index}`];         
document.getElementById(`Justificacion_T4E${index}`).textContent= ejemplos[`Justificacion_T4E${index}`];      






document.getElementById(`PrecioUnitario_T4E${index}`).textContent= formatoMilesNumero(ejemplos[`PrecioUnitario_T4E${index}`]);

const precio = numeroSinFormato(
    ejemplos[`PrecioUnitario_T4E${index}`]
);

const cantidad = numeroSinFormato(
    ejemplos[`Cantidad_T4E${index}`]
);

alert(cantidad);
const total = precio * cantidad * 1.16;
alert(precio);
document.getElementById(
    `PrecioTotal_T4E${index}`
).textContent = total;

document.getElementById(`NombreArch_T4E${index}`).textContent= ejemplos[`NombreArch_T4E${index}`];     

document.getElementById(`Cotizacion_T4E${index}`).textContent= ejemplos[`Cotizacion_T4E${index}`];       
document.getElementById(`PrecioUnitario2_T4E${index}`).textContent=formatoMilesNumero(ejemplos[`PrecioUnitario2_T4E${index}`]);
document.getElementById(`PrecioTotal2_T4E${index}`).textContent= ejemplos[`PrecioUnitario2_T4E${index}`]*ejemplos[`Cantidad_T4E${index}`]*1.16
document.getElementById(`NombreArch2_T4E${index}`).textContent= ejemplos[`NombreArch2_T4E${index}`];  
document.getElementById(`Cotizacion2_T4E${index}`).textContent=ejemplos[`Cotizacion2_T4E${index}`];


document.getElementById(`ProgramaAcademico_T5E${index}`).textContent=ejemplos[`ProgramaAcademico_T5E${index}`];
document.getElementById(`Espacio_T5E${index}`).textContent=ejemplos[`Espacio_T5E${index}`]                     ;
document.getElementById(`Equipo_T5E${index}`).textContent=ejemplos[`Equipo_T5E${index}`]                        ;
document.getElementById(`Especificaciones_T5E${index}`).textContent=ejemplos[`Especificaciones_T5E${index}`]  ;
document.getElementById(`MalEstado_T5E${index}`).textContent=ejemplos[`MalEstado_T5E${index}`]               ;
document.getElementById(`BuenEstado_T5E${index}`).textContent=ejemplos[`BuenEstado_T5E${index}`]                ;
document.getElementById(`EstadoRegular_T5E${index}`).textContent=ejemplos[`EstadoRegular_T5E${index}`]            ;

}



      document.querySelectorAll("#tablaBody tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
                           activarAutoExpand(fila);
      });
      document.querySelectorAll("#tablaBody1_1 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
                           activarAutoExpand(fila);
      });
      document.querySelectorAll("#tablaBody2 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
                           activarAutoExpand(fila);
      });
      document.querySelectorAll("#tablaBody3 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
                           activarAutoExpand(fila);
      });
      document.querySelectorAll("#tablaBody4 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
                           activarAutoExpand(fila);
      });
      document.querySelectorAll("#tablaBody5 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
                           activarAutoExpand(fila);
      });




      


  alert("📂  datos de la solicitud cargados correctamente");

  folioActual = folio;
  folioCargado = true;

} catch (e) {
    alert("⚠️ Error de conexión al cargar los datos");
}
  

}

//   activarAutoExpand(fila);





document
    .getElementById("cargarDependencia")
    .addEventListener("click", cargarDatosPorFolio);






//---------------------------GuardarBorrador--------------------------------------------------


//-----------------------------Funcion-------------------------------------
let ultimoBorradorGuardado = "";
let temporizadorAutoguardado ;



//--------------------------------Funcion Guardar Borrador---------------------------------------

async function guardarBorradorAutomatico(mostrarAlerta = false) {

 if (!folioCargado) {
        return;
    }


const form = document.getElementById("miFormulario");
  const formData = new FormData(form);

  const data = {};

  formData.forEach((value, key) => {
    if (value instanceof File) return;
    data[key] = value;
  });

  // Guardamos también el número de filas actuales
  data.__filas1 = document.querySelectorAll("#tablaBody tr").length;
  data.__filas2 = document.querySelectorAll("#tablaBody2 tr").length;
  data.__filas3 = document.querySelectorAll("#tablaBody3 tr").length;
  data.__filas4 = document.querySelectorAll("#tablaBody4 tr").length;
  data.__filas5 = document.querySelectorAll("#tablaBody5 tr").length;
  
 // if(folioActual==null){
 //            folioActual = generarFolio();
 // }
  data.__folio = folioActual;


const borradorActual = JSON.stringify(data);
if (!mostrarAlerta && borradorActual === ultimoBorradorGuardado) {
    return;
}






try {

const partes = dividirData(data);



const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({
       action:"guardarBorrador",
           json1: partes[0],
           json2: partes[1],
           json3: partes[2],
           json4: partes[3],
           json5: partes[4],   
           json6: partes[5],
           json7: partes[6],
           json8:partes[7]
       })
    });
  
// ---------------Nuevo------------------------------------------- 

  const json = await res.json();
if (json.success) {

    ultimoBorradorGuardado = borradorActual;

    if (mostrarAlerta) {
    
                       alert(`✅ Borrador  de la dependencia ${data.dependencia} guardado correctamente. Recuerda que tu solicitud esta para : ${data.tipoDeSolicitud}`);
    }else{
                 mostrarEstadoGuardado("✅ Borrador guardado automáticamente");
    }
    
    
    } else {
                if (mostrarAlerta) {  

                       alert("⚠️ Error al guardar el borrador: " + json.message);
                }else{
                        mostrarEstadoGuardado("⚠ Error al guardar");

                }           
    }
  } catch (e) {
            if (mostrarAlerta) {
                                alert("⚠️ Error de conexión al guardar el borrador"+e.message);
            }else{
                                mostrarEstadoGuardado("⚠ Error de conexión");
            }

}

};


   let temporizadorToast;

function mostrarEstadoGuardado(mensaje) {

    const toast = document.getElementById("estadoGuardado");

    clearTimeout(temporizadorToast);

    toast.textContent = mensaje;
    toast.classList.add("mostrar");

    temporizadorToast = setTimeout(() => {
        toast.classList.remove("mostrar");
    }, 2500);
}





let hayCambios = false;

document
  .getElementById("miFormulario")
  .addEventListener("input", () => {

    hayCambios = true;

    clearTimeout(temporizadorAutoguardado);

    temporizadorAutoguardado = setTimeout(() => {
      guardarBorradorAutomatico(false);
      hayCambios = false;
    }, 20000);

  });


setInterval(() => {

  if (hayCambios) {
    guardarBorradorAutomatico(false);
    hayCambios = false;
  }

}, 1200000);


document.getElementById("guardarBorrador").addEventListener("click", () => {

        guardarBorradorAutomatico(true);

    });







function setSelectValue(selectId, value) {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.value = value;
  select.dispatchEvent(new Event("change"));
}





function restaurarTabla(data) {
 
 

 


  const filas1   = data.__filas1 || 10;
  const filas1_1 = data.__filas1_1 || 10;
  const filas2   = data.__filas2 || 10;
  const filas3   = data.__filas3 || 10;
  const filasC   = data.__filasC || 10;
  const filas4   = data.__filas4 || 10;
  const filas5   = data.__filas5 || 10;

  /*
  const filas6   = data.__filas6 || 10;
  
  */

  const tbody = document.getElementById("tablaBody");
  const tbody1 = document.getElementById("tablaBody1_1");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones"); 
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
  /*
  const tbody6 = document.getElementById("tablaBody6");
 
 */

  tbody.innerHTML = `<tr class="ejemplo">
                                                                             <td title="Numero de Fila" class="ejemplo">
                                                                                      Ejemplo                                  
                                                                              </td> 

                                                                             <td title="ProgramasE1" id="ProgramasE1" class="ejemplo">
                                                                                   
                                                                              </td>
                                                          
                                                                              <td id="UsuariosHAnio1E1" title="Matrícula Hombres 1" class="ejemplo">
                                                                                
                                                                              </td>   
                                          
                                                                              <td id="UsuariosMAnio1E1" title="Matrícula Mujeres 1" class="ejemplo">
                                                                                   
                                                                              </td>
                                                                              <td id="UsuariosHAnio2E1" title="Matrícula Hombres 2" class="ejemplo">
                                                                                  
                                                                              </td>
                                                                              <td  id="UsuariosMAnio2E1" title="Matrícula Mujeres 2" class="ejemplo">
                                                                                  
                                                                              </td>
                                          
                                                                              <td id="UsuariosHAnio3E1" title="Matrícula Hombres 3" class="ejemplo">
                                                                                
                                                                             </td>
                                                                              <td  id="UsuariosMAnio3E1" title="Matrícula Mujeres 3" class="ejemplo">  
                                                                             </td>
                                                                             <td id="UsuariosHAnio4E1" title="Matrícula Hombres 4" class="ejemplo">
                                                                               
                                                                             </td>
                                                                              <td  id="UsuariosMAnio4E1" title="Matrícula Mujeres 4" class="ejemplo">  
                                                                             </td>
                                                                             <td id="UsuariosHAnio5E1" title="Matrícula Hombres 5" class="ejemplo">
                                                                                 
                                                                             </td>
                                                                              <td  id="UsuariosMAnio5E1" title="Matrícula Mujeres 5" class="ejemplo">  
                                                                             </td>

                                                                         </tr> 

                                                                            <tr class="ejemplo">
                                                                               <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>
                                                                              <td title="ProgramasE2" id="ProgramasE2" class="ejemplo">
                                                                                   
                                                                              </td>
                                                          
                                                                              <td id="UsuariosHAnio1E2" title="Matrícula Hombres 1" class="ejemplo">
                                                                                
                                                                              </td>   
                                          
                                                                              <td id="UsuariosMAnio1E2" title="Matrícula Mujeres 1" class="ejemplo">
                                                                                   
                                                                              </td>
                                                                              <td id="UsuariosHAnio2E2" title="Matrícula Hombres 2" class="ejemplo">
                                                                                  
                                                                              </td>
                                                                              <td  id="UsuariosMAnio2E2" title="Matrícula Mujeres 2" class="ejemplo">
                                                                                  
                                                                              </td>
                                          
                                                                              <td id="UsuariosHAnio3E2" title="Matrícula Hombres 3" class="ejemplo">
                                                                                
                                                                             </td>
                                                                              <td  id="UsuariosMAnio3E2" title="Matrícula Mujeres 3" class="ejemplo">  
                                                                             </td>
                                                                             <td id="UsuariosHAnio4E2" title="Matrícula Hombres 4" class="ejemplo">
                                                                               
                                                                             </td>
                                                                              <td  id="UsuariosMAnio4E2" title="Matrícula Mujeres 4" class="ejemplo">  
                                                                             </td>
                                                                             <td id="UsuariosHAnio5E2" title="Matrícula Hombres 5" class="ejemplo">
                                                                                 
                                                                             </td>
                                                                              <td  id="UsuariosMAnio5E2" title="Matrícula Mujeres 5" class="ejemplo">  
                                                                             </td>

                                                                         </tr>` ;
                                                         tbody1.innerHTML = `<tr class="ejemplo">
                                                                              <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>

                                                                               <td title="Número de Profesores Superior y Posgrado  "    id="NumProfE1" class="ejemplo">
                                                                                   Número de Profesores Superior y Posgrado     
                                                                              </td>
                                                          
                                                                              <td   id="UsuariosAHAnio1E1" title="Número de Profesores y Administrativos Hombres 1"  class="ejemplo" >
                                                                              </td>
                                                                                <td id="UsuariosAMAnio1E1" title="Número de Profesores y Administrativos Mujeres 1" class="ejemplo">
                                                                                   
                                                                              </td>
                                                                              <td   id="UsuariosAHAnio2E1" title="Número de Profesores y Administrativos Hombres 2" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td   id="UsuariosAMAnio2E1" title="Número de Profesores y Administrativos Mujeres 2" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                             <td    id="UsuariosAHAnio3E1" title="Número de Profesores y Administrativos Hombres 3" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td   id="UsuariosAMAnio3E1" title="Número de Profesores y Administrativos Mujeres 3"class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td id="UsuariosAHAnio4E1" title="Número de Profesores y Administrativos Hombres 4"class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td   id="UsuariosAMAnio4E1" title="Número de Profesores y Administrativos Mujeres 4"class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td  id="UsuariosAHAnio5E1" title="Número de Profesores y Administrativos Hombres 5"class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td   id="UsuariosAMAnio5E1" title="Número de Profesores y Administrativos Mujeres 5"class="ejemplo">
                                                                                  
                                                                             </td>

                                                                         </tr>
                                                                         <tr class="ejemplo">
                                                                              <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>
                                                                              <td title="Número de Profesores Superior y Posgrado  " id="NumProfE2" class="ejemplo">
                                                                                   Número de Profesores Superior y Posgrado     
                                                                              </td>
                                                          
                                                                              <td id="UsuariosAHAnio1E2" title="Número de Profesores y Administrativos Hombres 1" class="ejemplo">
                                                                              </td>
                                                                                <td id="UsuariosAMAnio1E2" title="Número de Profesores y Administrativos Mujeres 1" class="ejemplo">
                                                                              
                                                                              </td>
                                                                              <td id="UsuariosAHAnio2E2" title="Número de Profesores y Administrativos Hombres 2" class="ejemplo">
                                                                                 
                                                                             </td>
                                                                              <td  id="UsuariosAMAnio2E2" title="Número de Profesores y Administrativos Mujeres 2" class="ejemplo">
                                                                                 
                                                                             </td>
                                                                             <td id="UsuariosAHAnio3E2" title="Número de Profesores y Administrativos Hombres 3" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td  id="UsuariosAMAnio3E2" title="Número de Profesores y Administrativos Mujeres 3" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td id="UsuariosAHAnio4E2" title="Número de Profesores y Administrativos Hombres 4" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td  id="UsuariosAMAnio4E2" title="Número de Profesores y Administrativos Mujeres 4" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td id="UsuariosAHAnio5E2" title="Número de Profesores y Administrativos Hombres 5" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                              <td  id="UsuariosAMAnio5E2" title="Número de Profesores y Administrativos Mujeres 5" class="ejemplo">
                                                                                  
                                                                             </td>
                                                                             <tr>
                                                                             `;
  tbody2.innerHTML = `<tr class="ejemplo">
                                                                   <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                   </td>

                                                                   <td title="Edificio" id="Edificio_T2E1" class="ejemplo">
                                                                         
                                                                   </td>
                                               
                                                                   <td title="Nivel" id="Nivel_T2E1" class="ejemplo">
                                                                      
                                                                   </td>   
                               
                                                                   <td title="Espacio" id="Espacio_T2E1" class="ejemplo">
                                                                   </td>
                                                                   <td title="Largo" id="Largo_T2E1" class="ejemplo">
                                                                   </td>
                                                                   <td title="Ancho" id="Ancho_T2E1" class="ejemplo">
                                                                   </td>
                               
                                                                   <td title="Alumnos" id="Alumnos_T2E1" class="ejemplo">
                                                                   </td> 
                                                                   
                                                                   <td title="HorasServicio" id="Horas_T2E1" class="ejemplo">
                                                                   </td>
                               
                                                                   
                                                              </tr>
                               
                                                              <tr class="ejemplo">
                                                                 <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>
                                                                   <td title="Edificio" id="Edificio_T2E2" class="ejemplo">
                                                                          
                                                                   </td>
                                               
                                                                   <td title="Nivel" id="Nivel_T2E2" class="ejemplo">
                                                                        
                                                                   </td>   
                               
                                                                   <td title="Espacio" id="Espacio_T2E2" class="ejemplo">
                                                                        
                                                                   </td>
                                                                   <td title="Largo" id="Largo_T2E2" class="ejemplo">
                                                                   </td>
                                                                   <td title="Ancho" id="Ancho_T2E2" class="ejemplo">
                                                                       
                                                                   </td>
                               
                                                                   <td title="Alumnos" id="Alumnos_T2E2" class="ejemplo">
                                                                       
                                                                   </td> 
                                                                   
                                                                   <td title="HorasServicio" id="Horas_T2E2" class="ejemplo">
                                                                       
                                                                   </td>
                                                              </tr>`;
  tbody3.innerHTML = `<tr class="ejemplo">
                                                                <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>

                                                                 <td title="Edificio" id="Edificio_T3E1" class="ejemplo">
                                                                          
                                                                 </td>
                                             
                                                                 <td title="MetrosCuadrados" id="MetrosCuadrados_T3E1" class="ejemplo">
                                                                       
                                                                 </td>   
                                                                 
                                                                 
                                                            </tr>
                                                            <tr class="ejemplo">
                                                                 <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>
                                                                 <td title="Edificio" id="Edificio_T3E2" class="ejemplo">
                                                                       
                                                                 </td>
                                             
                                                                 <td title="MetrosCuadrados" id="MetrosCuadrados_T3E2" class="ejemplo">
                                                                       
                                                                 </td>   
                                                                 
                                                                 
                                                            </tr>`;
  tbodyC.innerHTML = ``;

  tbody4.innerHTML = `<tr class="ejemplo">
                                                                     <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                     </td>
                                                                    <td title="ProgramaAcadémico" id="ProgramaAcademico_T4E1" class="ejemplo">
                                                                         Programa Académico  , Programas académicos, servicios o actividades que realiza la dependencia.     
                                                                    </td>                                                                                                             
                                                                                                              
                                                                    <td title="Espacio" title="Espacio" id="Espacio_T4E1" class="ejemplo">
                                                                         Espacio                                                                                                             
                                                                    </td>                                                                                                                
                                                                                                                                             
                                                                    <td title="Clave"  id="Clave_T4E1" class="ejemplo">
                                                                         Clave CUCOP                                                                                                             
                                                                    </td>                                                                                                             
                                                                    <td title="Equipo"  id="Equipo_T4E1" class="ejemplo">
                                                                        Nombre genérico del equipo                                                                                                             
                                                                    </td>                                                                                                             
                                                                    <td title="Cantidad"  id="Cantidad_T4E1" class="ejemplo">
                                                                        Cantidad Equipos solicitados                                                                                                              
                                                                    </td>                                                                                                             
                                                                                                                                             
                                                                    <td title=" Especificaciones Técnicas del Equipo"  class="ejemplo">
                                                                                
                                                                                      <textarea
                                                                                                           id="Especificaciones_T4E1"
                                                                                                           name="especificaciones_T4E1"
                                                                                                           class="auto-expand input_tabla expandible ejemplo"
                                                                                                           rows="1"
                                                                                                           style="resize:none;"
                                                                                                           aria-label="Especificaciones"
                                                                                                           readonly
                                                                                                           >
                                                                                       </textarea>                                                                                                              
                                                                    </td>                                                                                                              
                                                                                                                                                                                 
                                                                    <td title="Justificación (Equipo no Existente, Sustitución o Complemento)"  class="ejemplo">
                                                                                      
                                                                                   <textarea
                                                                                                           id="Justificacion_T4E1"
                                                                                                           name="Justificacion_T4E1"
                                                                                                           class="auto-expand input_tabla expandible ejemplo"
                                                                                                           rows="1"
                                                                                                           style="resize:none;"
                                                                                                           aria-label="Justificacion Ejemplo"
                                                                                                           readonly
                                                                                                           >
                                                                                       </textarea>

                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                    <td title="Precio unitario Adquisición Alternativa 1 (Sin IVA)" id="PrecioUnitario_T4E1" class="ejemplo">
                                                                        Precio unitario Adquisición Alternativa 1 (Sin IVA)                                                                                                                                                                                                                          
                                                                    </td>                                                                                                             
                                                                         
                                                                    <td title="Precio Total con IVA Alternativa 1 (Sin IVA)" id="PrecioTotal_T4E1" class="ejemplo">
                                                                                                                                                                                                                                                                                                  
                                                                    </td>

                                                                    <td title="Nombre del Archivo de la Cotización de Adquisición" id="NombreArch_T4E1" class="ejemplo">
                                                                        Nombre de la Cotización (En la tabla anterior)                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                    <td title="Cotización de Adquisición" id="Cotizacion_T4E1" class="ejemplo paso">
                                                                        Cotización de Adquisición                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                                    <td title="Precio unitario Adquisición Alternativa 2 (Sin IVA)" id="PrecioUnitario2_T4E1" class="ejemplo">
                                                                        Precio unitario Adquisición Alternativa 2 (Sin IVA)                                                                                                             
                                                                    </td>                                                                                                             
                                                                         
                                                                    <td title="Precio Total con IVA Alternativa 2 (Sin IVA)" id="PrecioTotal2_T4E1" class="ejemplo">
                                                                                                                                                                                                                                                                                                  
                                                                    </td>

                                                                    <td title="Nombre del Archivo de la Cotización de Adquisición 2" id="NombreArch2_T4E1" class="ejemplo">
                                                                        Nombre de la Cotización 2 (En la tabla anterior)                                                                                                             
                                                                    </td>                                                                                                                
                                                                                                             
                                                                    <td title="Cotización de Adquisición 2" id="Cotizacion2_T4E1" class="ejemplo paso">
                                                                        Cotización de Adquisición 2                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                               </tr>                                                                                                              


                                                               <tr class="ejemplo">
                                                                     <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                    </td>
                                                                    <td title="ProgramaAcadémico" id="ProgramaAcademico_T4E2" class="ejemplo">
                                                                         Programa Académico  , Programas académicos, servicios o actividades que realiza la dependencia.     
                                                                    </td>                                                                                                             
                                                                                                              
                                                                    <td title="Espacio" title="Espacio" id="Espacio_T4E2" class="ejemplo">
                                                                         Espacio                                                                                                             
                                                                    </td>                                                                                                                
                                                                                                                                             
                                                                    <td title="Clave"  id="Clave_T4E2" class="ejemplo">
                                                                         Clave CUCOP                                                                                                             
                                                                    </td>                                                                                                             
                                                                    <td title="Equipo"  id="Equipo_T4E2" class="ejemplo">
                                                                        Nombre genérico del equipo                                                                                                             
                                                                    </td>                                                                                                             
                                                                    <td title="Cantidad"  id="Cantidad_T4E2" class="ejemplo">
                                                                        Cantidad Equipos solicitados                                                                                                              
                                                                    </td>                                                                                                             
                                                                                                                                             
                                                                    <td title=" Especificaciones Técnicas del Equipo"  class="ejemplo">
                                                                                           <textarea
                                                                                                            id="Especificaciones_T4E2"
                                                                                                           name="especificaciones_T4E2"
                                                                                                           class="auto-expand input_tabla expandible ejemplo"
                                                                                                           rows="1"
                                                                                                           style="resize:none;"
                                                                                                           aria-label="Especificaciones"
                                                                                                           readonly
                                                                                                           >
                                                                                       </textarea>                                                                                                           
                                                                    </td>                                                                                                              
                                                                                                                                                                                 
                                                                    <td title="Justificación (Equipo no Existente, Sustitución o Complemento)"  class="ejemplo">
                                                                                                
                                                                                                    <textarea
                                                                                                           id="Justificacion_T4E2"
                                                                                                           name="Justificacion_T4E2"
                                                                                                           class="auto-expand input_tabla expandible ejemplo"
                                                                                                           rows="1"
                                                                                                           style="resize:none;"
                                                                                                           aria-label="Justificacion Ejemplo"
                                                                                                           readonly
                                                                                                           >
                                                                                       </textarea>
                                                                                        
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                    <td title="Precio unitario Adquisición Alternativa 1 (Sin IVA)" id="PrecioUnitario_T4E2" class="ejemplo">
                                                                        Precio unitario Adquisición Alternativa 1 (Sin IVA)                                                                                                                                                                                                                          
                                                                    </td>                                                                                                             
                                                                    
                                                                    <td title="Precio Total con IVA Alternativa 1 (Sin IVA)" id="PrecioTotal_T4E2" class="ejemplo">
                                                                                                                                                                                                                                                                                                  
                                                                    </td>

                                                                    <td title="Nombre del Archivo de la Cotización de Adquisición" id="NombreArch_T4E2" class="ejemplo">
                                                                        Nombre de la Cotización (En la tabla anterior)                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                    <td title="Cotización de Adquisición" id="Cotizacion_T4E2" class="ejemplo paso">
                                                                        Cotización de Adquisición                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                                    <td title="Precio unitario Adquisición Alternativa 2 (Sin IVA)" id="PrecioUnitario2_T4E2" class="ejemplo">
                                                                        Precio unitario Adquisición Alternativa 2 (Sin IVA)                                                                                                             
                                                                    </td>                                                                                                             
                                                                    
                                                                    <td title="Precio Total con IVA Alternativa 2 (Sin IVA)" id="PrecioTotal2_T4E2" class="ejemplo">
                                                                                                                                                                                                                                                                                                  
                                                                    </td>
                                                                    
                                                                    <td title="Nombre del Archivo de la Cotización de Adquisición 2" id="NombreArch2_T4E2" class="ejemplo">
                                                                        Nombre de la Cotización 2 (En la tabla anterior)                                                                                                             
                                                                    </td>                                                                                                                
                                                                                                             
                                                                    <td title="Cotización de Adquisición 2" id="Cotizacion2_T4E2" class="ejemplo paso">
                                                                        Cotización de Adquisición 2                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                               </tr>`;
  tbody5.innerHTML = `<tr class="ejemplo">
                                                                    <td title="Numero de Fila"  class="ejemplo">
                                                                                                                        
                                                                 </td>
                                                                    <td title="ProgramaAcadémico" id="ProgramaAcademico_T5E1" class="ejemplo" >                                                                                                                                                                                              
                                                                         Programa Académico  , Programas académicos, servicios o actividades que realiza la dependencia.                                                                                                                                                                                                   
                                                                    </td>                                                                                                                                                                                              
                                                                                                                                                                                                                                              
                                                                    <td title="Espacio" id="Espacio_T5E1" class="ejemplo">                                                                                                                                                                                              
                                                                         Espacio                                                                                                                                                                                              
                                                                    </td>                                                                                                                                                                                                 
                                                                                                                                                                                                                              
                                                                                                                                                                                                                                                                  
                                                                    <td title="Equipo" id="Equipo_T5E1" class="ejemplo">                                                                                                                                                                                              
                                                                        Nombre genérico del equipo                                                                                                                                                                                              
                                                                    </td>                                                                                                                                                                                              
                                                                                                                                                                                                                                                                  
                                                                    <td title=" Especificaciones y Desempeño Operativo"  class="ejemplo">                                                                                                                                                                                              
                                                                                            <textarea
                                                                                                            id="Especificaciones_T5E1"
                                                                                                           name="Especificaciones_T5E1"
                                                                                                           class="auto-expand input_tabla expandible ejemplo"
                                                                                                           rows="1"
                                                                                                           style="resize:none;"
                                                                                                           aria-label="Especificaciones"
                                                                                                           readonly
                                                                                                           >
                                                                                       </textarea>                                                                                                                                                                                              
                                                                    </td>                                                                                                                                                                                               
                                                                                                                                                                                                                                                                  
                                                                    <td title="Cuantos equipos en mal estado (obsoletos, a remplazar)" id="MalEstado_T5E1" class="ejemplo">                                                                                                                                                                                              
                                                                         Cuantos equipos en mal estado (obsoletos, a remplazar)                                                                                                                                                                                               
                                                                    </td>                                                                                                                                                                                              
                                                                    <td title="Cuantos equipos  en buen estado (útiles)" id="BuenEstado_T5E1" class="ejemplo">                                                                                                                                                                                              
                                                                         Cuantos equipos  en buen estado (útiles)                                                                                                                                                                                               
                                                                    </td>                                                                                                                                                                                              
                                                                                                                                                                                                                                                                  
                                                                    <td title="Cuantos equipos  en estado regular (útiles)" id="EstadoRegular_T5E1" class="ejemplo">                                                                                                                                                                                              
                                                                         Cuantos equipos  en estado regular (útiles)                                                                                                                                                                                               
                                                                    </td>                                                                                                                                                                                              
                                                                                                                                                                                                                                                                   
                                                               </tr>                                                                                                                                                                                              
                                                               
                                                               
                                                               <tr class="ejemplo">
                                                                     <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                 </td>
                                                                    <td title="ProgramaAcadémico" id="ProgramaAcademico_T5E2" class="ejemplo" >
                                                                         Programa Académico  , Programas académicos, servicios o actividades que realiza la dependencia.     
                                                                    </td>
                                                
                                                                    <td title="Espacio" id="Espacio_T5E2" class="ejemplo">
                                                                         Espacio
                                                                    </td>   
                                
                                                                    
                                                                    <td title="Equipo" id="Equipo_T5E2" class="ejemplo">
                                                                        Nombre genérico del equipo
                                                                    </td>
                                                                    
                                                                    <td title=" Especificaciones y Desempeño Operativo"  class="ejemplo">
                                                                                        <textarea
                                                                                                            id="Especificaciones_T5E2"
                                                                                                           name="Especificaciones_T5E2"
                                                                                                           class="auto-expand input_tabla expandible ejemplo"
                                                                                                           rows="1"
                                                                                                           style="resize:none;"
                                                                                                           aria-label="Especificaciones"
                                                                                                           readonly
                                                                                                           >
                                                                                       </textarea>
                                                                    </td> 
                                                                    
                                                                    <td title="Cuantos equipos en mal estado (obsoletos, a remplazar)" id="MalEstado_T5E2" class="ejemplo">
                                                                         Cuantos equipos en mal estado (obsoletos, a remplazar) 
                                                                    </td>
                                                                    <td title="Cuantos equipos  en buen estado (útiles)" id="BuenEstado_T5E2" class="ejemplo">
                                                                         Cuantos equipos  en buen estado (útiles) 
                                                                    </td>
                                                                    
                                                                    <td title="Cuantos equipos  en estado regular (útiles)" id="EstadoRegular_T5E2" class="ejemplo">
                                                                         Cuantos equipos  en estado regular (útiles) 
                                                                    </td>
                                                                     
                                                               </tr>`;
/*
  tbody6.innerHTML = "";
 
  
*/  
  for (let i = 1; i <= filas1; i++) {
    agregarFila();
  }
  for (let i = 1; i <= filas2; i++) {
    agregarFila2();
  }
  for (let i = 1; i <= filas3; i++) {
    agregarFila3();
  }
  for (let i = 1; i <= filasC; i++) {
    agregarFilaC();
  }
  for (let i = 1; i <= filas4; i++) {
    agregarFila4();
  }
  for (let i = 1; i <= filas5; i++) {
    agregarFila5();
  }



  /*
  for (let i = 1; i <= filas6; i++) {
    agregarFila6();
  }
*/

  Object.keys(data).forEach(name => {
    if (name.includes("__filas")) return;
     if (!name.includes("R")) return; // solo campos de la tabla
     
    const campo = document.querySelector(`[name="${name}"]`);


    if (!campo) return;
    if (campo.type === "file") {
    console.log("Archivo omitido:", name);
    return;
  }


  if (
    data[name] !== null &&
    typeof data[name] === "object"
  ) {
    console.log("Objeto omitido:", name, data[name]);
    return;
  }
  //--------------------------------------------------------------------------------    

    campo.value = data[name];
// }

if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });
  // generarNivel();
  // generarDependencia();
  document.querySelectorAll("#tablaBody5 [data-relleno]").forEach(campo => {

    const nombreOrigen = campo.dataset.relleno;

    const campoOrigen = document.querySelector(
        `[name="${nombreOrigen}"]`
    );

    if (!campoOrigen) return;

    campo.value = campoOrigen.value;

    if (campo.tagName === "TEXTAREA") {
        campo.style.height = "auto";
        campo.style.height = campo.scrollHeight + "px";
    }
});

document.querySelectorAll('[name^="CotizacionAdquisicionG"]').forEach(campo => {
         const url  = campo.dataset.compa;
         const name = campo.dataset.compa2;
         const nombre        =document.getElementById(name);
          
         const nameFile= campo.dataset.compa3;
         const nombreArchivo=document.getElementById(nameFile);
         nombre.innerHTML = `
                   <a href="${data[url]}" target="_blank">
                             ${nombreArchivo.value}
                    </a>
`;     
   

});


crearFilaTotalTabla4();
actualizarTotalesTabla4();


}








//------------------------------------

//  alert("ANtes de cargar Borrador"+folioActual);

document.getElementById("cargarBorrador").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  




  //-----------------------------nuevo----------------
  const dependencia = document.getElementById("dependencia").value.trim();
   
  const tipoDeEquipamento = document.getElementById("tipoDeSolicitud").value.trim();

   if (!dependencia) {
    alert("⚠️ Ingresa una dependencia válida");
    return;
   }


/*
  const folio = document.getElementById("folioInput").value.trim();
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }
*/
try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "cargarBorrador", dependencia,tipoDeEquipamento})
    });


    const json = await res.json();

    if (!json.success) {
      alert("⚠️ " + json.message);
      return;
    }

//----------------------------------------------------------------------------

  
//-------------BORRADOR LOCAL--------------------------------------------------  
//  const borrador = localStorage.getItem("borradorFormulario");
//  if (!borrador) {
//    alert("⚠️ No hay ningún borrador guardado");
//    return;
//  }

  
  //  (Datos locales)  const data = JSON.parse(borrador);



  const data =json.data;

  
  const form = document.getElementById("miFormulario");

  // Limpiar tabla
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones");
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");

  /*
  const tbody6 = document.getElementById("tablaBody6");
  */

  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  /*
  tbody6.innerHTML = "";
  
  */
  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }

//alert("despues de cargar Borrador"+folioActual);

//      folioActual = folio;
      edicionActual=data.edicion;
// Restaurar selects encadenados
/*setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
*/
//-------------------------------  activa selects
// folioValor.value=data.folio;
      setSelectValue("dependencia", data.dependencia);
      Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
                          if(name.includes("url")){
                                        urlCotizacionesActuales[name] = data[name];
                                        //alert("data:"+data[name]);
                                        //alert("urlcot"+urlCotizacionesActuales[name]);
                          };
                          if (name.includes("R")) return; //quitamos los campos de la tabla
                          if(name.includes("secretaria")) return;
                          if(name.includes("direccion")) return; 
                          if(name.includes("nivel")) return; 
                          if(name.includes("dependencia")) return;
//                          if(name.includes("folio")) return; 
                          const campo = document.querySelector(`[name="${name}"]`);
                          if (!campo) return;
                          
    campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });

let folioValor = document.getElementById("folioInput");
 folioValor.value=folioActual;


      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);
/*
for(let i =3;i<data.__filas4+2;i++){
  
  const estado = data[`ProgramaAcademico_T4R${i}RO`];
  alert(estado===true || estado==="true");
  alert(estado);
  //alert(document.getElementById(`ProgramaAcademico_T4R${i}`).readOnly);



  document.getElementById(`ProgramaAcademico_T4R${i}`).readOnly=estado === true || estado === "true";

  }
*/
/*
document.querySelectorAll(".check-verificacion").forEach(check => {

    if (data.hasOwnProperty(check.name)) {
        check.value= data[check.name];
    }

});
*/

document.querySelectorAll(".check-verificacion").forEach(check => {

     const campo = document.querySelector(`[name="${check.dataset.campo}"]`);
    if (!campo) return;

    campo.readOnly = check.value === true || check.value === "true";;
});




//document.getElementById("especificaciones").readOnly =    data.especificacionesRO ?? false;

const ejemplos = json.ejemplos;
    for(let index=1;index<3;index++){
   document.getElementById(`ProgramasE${index}`).textContent=ejemplos[`ProgramasE${index}`];   
   document.getElementById(`UsuariosHAnio1E${index}`).textContent=ejemplos[`UsuariosHAnio1E${index}`];
   document.getElementById(`UsuariosMAnio1E${index}`).textContent=ejemplos[`UsuariosMAnio1E${index}`];
   document.getElementById(`UsuariosHAnio2E${index}`).textContent=ejemplos[`UsuariosHAnio2E${index}`];
   document.getElementById(`UsuariosMAnio2E${index}`).textContent=ejemplos[`UsuariosMAnio2E${index}`];
   document.getElementById(`UsuariosHAnio3E${index}`).textContent=ejemplos[`UsuariosHAnio3E${index}`];
   document.getElementById(`UsuariosMAnio3E${index}`).textContent=ejemplos[`UsuariosMAnio3E${index}`];
   document.getElementById(`UsuariosHAnio4E${index}`).textContent=ejemplos[`UsuariosHAnio4E${index}`];
   document.getElementById(`UsuariosMAnio4E${index}`).textContent=ejemplos[`UsuariosMAnio4E${index}`];
   document.getElementById(`UsuariosHAnio5E${index}`).textContent=ejemplos[`UsuariosHAnio5E${index}`];
   document.getElementById(`UsuariosMAnio5E${index}`).textContent=ejemplos[`UsuariosMAnio5E${index}`];

 document.getElementById(`NumProfE${index}`        ).textContent     =ejemplos[`NumProfE${index}`        ]
 document.getElementById(`UsuariosAHAnio1E${index}`).textContent=ejemplos[`UsuariosAHAnio1E${index}`]
 document.getElementById(`UsuariosAMAnio1E${index}`).textContent=ejemplos[`UsuariosAMAnio1E${index}`]
 document.getElementById(`UsuariosAHAnio2E${index}`).textContent=ejemplos[`UsuariosAHAnio2E${index}`]
 document.getElementById(`UsuariosAMAnio2E${index}`).textContent=ejemplos[`UsuariosAMAnio2E${index}`]
 document.getElementById(`UsuariosAHAnio3E${index}`).textContent=ejemplos[`UsuariosAHAnio3E${index}`]
 document.getElementById(`UsuariosAMAnio3E${index}`).textContent=ejemplos[`UsuariosAMAnio3E${index}`]
 document.getElementById(`UsuariosAHAnio4E${index}`).textContent=ejemplos[`UsuariosAHAnio4E${index}`]
 document.getElementById(`UsuariosAMAnio4E${index}`).textContent=ejemplos[`UsuariosAMAnio4E${index}`]
 document.getElementById(`UsuariosAHAnio5E${index}`).textContent=ejemplos[`UsuariosAHAnio5E${index}`]
 document.getElementById(`UsuariosAMAnio5E${index}`).textContent=ejemplos[`UsuariosAMAnio5E${index}`]

document.getElementById(`Edificio_T2E${index}`).textContent= ejemplos[`Edificio_T2E${index}`];
document.getElementById(`Nivel_T2E${index}`   ).textContent= ejemplos[`Nivel_T2E${index}`   ];
document.getElementById(`Espacio_T2E${index}` ).textContent= ejemplos[`Espacio_T2E${index}` ];
document.getElementById(`Largo_T2E${index}`   ).textContent= ejemplos[`Largo_T2E${index}`   ];
document.getElementById(`Ancho_T2E${index}`   ).textContent= ejemplos[`Ancho_T2E${index}`   ];
document.getElementById(`Alumnos_T2E${index}` ).textContent= ejemplos[`Alumnos_T2E${index}` ];
document.getElementById(`Horas_T2E${index}`   ).textContent= ejemplos[`Horas_T2E${index}`   ];

document.getElementById(`Edificio_T3E${index}`).textContent       = ejemplos[`Edificio_T3E${index}`];
document.getElementById(`MetrosCuadrados_T3E${index}`).textContent= ejemplos[`MetrosCuadrados_T3E${index}`];


document.getElementById(`ProgramaAcademico_T4E${index}`).textContent= ejemplos[`ProgramaAcademico_T4E${index}`];              
document.getElementById(`Espacio_T4E${index}`).textContent= ejemplos[`Espacio_T4E${index}`];         
document.getElementById(`Clave_T4E${index}`).textContent= ejemplos[`Clave_T4E${index}`];       
document.getElementById(`Equipo_T4E${index}`).textContent= ejemplos[`Equipo_T4E${index}`];        
document.getElementById(`Cantidad_T4E${index}`).textContent= ejemplos[`Cantidad_T4E${index}`];         
document.getElementById(`Especificaciones_T4E${index}`).textContent= ejemplos[`Especificaciones_T4E${index}`];         
document.getElementById(`Justificacion_T4E${index}`).textContent= ejemplos[`Justificacion_T4E${index}`];      
document.getElementById(`PrecioUnitario_T4E${index}`).textContent= ejemplos[`PrecioUnitario_T4E${index}`];      
document.getElementById(`NombreArch_T4E${index}`).textContent= ejemplos[`NombreArch_T4E${index}`];     
document.getElementById(`Cotizacion_T4E${index}`).textContent= ejemplos[`Cotizacion_T4E${index}`];       
document.getElementById(`PrecioUnitario2_T4E${index}`).textContent= ejemplos[`PrecioUnitario2_T4E${index}`];
document.getElementById(`NombreArch2_T4E${index}`).textContent= ejemplos[`NombreArch2_T4E${index}`];  
document.getElementById(`Cotizacion2_T4E${index}`).textContent=ejemplos[`Cotizacion2_T4E${index}`];


document.getElementById(`ProgramaAcademico_T5E${index}`).textContent=ejemplos[`ProgramaAcademico_T5E${index}`];
document.getElementById(`Espacio_T5E${index}`).textContent=ejemplos[`Espacio_T5E${index}`]                     ;
document.getElementById(`Equipo_T5E${index}`).textContent=ejemplos[`Equipo_T5E${index}`]                        ;
document.getElementById(`Especificaciones_T5E${index}`).textContent=ejemplos[`Especificaciones_T5E${index}`]  ;
document.getElementById(`MalEstado_T5E${index}`).textContent=ejemplos[`MalEstado_T5E${index}`]               ;
document.getElementById(`BuenEstado_T5E${index}`).textContent=ejemplos[`BuenEstado_T5E${index}`]                ;
document.getElementById(`EstadoRegular_T5E${index}`).textContent=ejemplos[`EstadoRegular_T5E${index}`]            ;




}

      document.querySelectorAll("#tablaBody tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody1_1 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody2 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody3 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody4 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody5 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });

/*      
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
*/

//    }, 0);
//  }, 0);
//}, 0);
  alert("📂 Borrador cargado correctamente");
} catch (e) {
    alert("⚠️ Error de conexión al cargar el borrador");
}
  
});


document.getElementById("cargarRespuesta").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  
  const folio = document.getElementById("folioInput").value.trim();
  //-----------------------------nuevo----------------
  const dependencia = document.getElementById("dependencia").value.trim();
   
  const tipoDeEquipamento = document.getElementById("tipoDeSolicitud").value.trim();

   if (!dependencia) {
    alert("⚠️ Ingresa una dependencia válida");
    return;
   }

  //-------------------------------------------------------------




  /*-------- suprimido nuevo
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }
*/




try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "cargarRespuesta", dependencia,tipoDeEquipamento})
    });


    const json = await res.json();

    if (!json.success) {
      alert("⚠️ " + json.message);
      return;
    }

//----------------------------------------------------------------------------

  
//-------------BORRADOR LOCAL--------------------------------------------------  
//  const borrador = localStorage.getItem("borradorFormulario");
//  if (!borrador) {
//    alert("⚠️ No hay ningún borrador guardado");
//    return;
//  }

  
  //  (Datos locales)  const data = JSON.parse(borrador);



  const data =json.data;

  
  const form = document.getElementById("miFormulario");

  // Limpiar tabla
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones");
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
  /*
  const tbody6 = document.getElementById("tablaBody6");
  */
  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  /*
  tbody6.innerHTML = "";
  */
  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }

folioActual=folio;
edicionActual=data.edicion;
numerodeEnvio=data.numeroEnvio;
/*
alert("ExistenciaDeCotizaciones:"+ExistenciaDeCotizaciones);
   alert("ExistenciaDeCotizaciones_T4:"+ExistenciaDeCotizaciones_T4);
  
   alert("ExistenciaDeCotizacionesA2 :"+ExistenciaDeCotizacionesA2);
   alert("ExistenciaDeCotizacionesA2_T4 :"+ExistenciaDeCotizacionesA2_T4);

*/

// Restaurar selects encadenados
/*setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
*/
      setSelectValue("dependencia", data.dependencia);

      Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
                          if(name.includes("url")){
                                        urlCotizacionesActuales[name] = data[name];
                                        //alert("data:"+data[name]);
                                        //alert("urlcot"+urlCotizacionesActuales[name]);
                          };
                          if (name.includes("R")) return; //quitamos los campos de la tabla
                          if(name.includes("secretaria")) return;
                          if(name.includes("direccion")) return; 
                          if(name.includes("nivel")) return; 
                          if(name.includes("dependencia")) return; 
                          const campo = document.querySelector(`[name="${name}"]`);
                          if (!campo) return;
                          
    campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });




      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);


document.querySelectorAll(".check-verificacion").forEach(check => {

     const campo = document.querySelector(`[name="${check.dataset.campo}"]`);
    if (!campo) return;

    campo.readOnly = check.value === true || check.value === "true";;
});











const ejemplos = json.ejemplos;
for(let index=1;index<3;index++){
   document.getElementById(`ProgramasE${index}`).textContent=ejemplos[`ProgramasE${index}`];   
   document.getElementById(`UsuariosHAnio1E${index}`).textContent=ejemplos[`UsuariosHAnio1E${index}`];
   document.getElementById(`UsuariosMAnio1E${index}`).textContent=ejemplos[`UsuariosMAnio1E${index}`];
   document.getElementById(`UsuariosHAnio2E${index}`).textContent=ejemplos[`UsuariosHAnio2E${index}`];
   document.getElementById(`UsuariosMAnio2E${index}`).textContent=ejemplos[`UsuariosMAnio2E${index}`];
   document.getElementById(`UsuariosHAnio3E${index}`).textContent=ejemplos[`UsuariosHAnio3E${index}`];
   document.getElementById(`UsuariosMAnio3E${index}`).textContent=ejemplos[`UsuariosMAnio3E${index}`];
   document.getElementById(`UsuariosHAnio4E${index}`).textContent=ejemplos[`UsuariosHAnio4E${index}`];
   document.getElementById(`UsuariosMAnio4E${index}`).textContent=ejemplos[`UsuariosMAnio4E${index}`];
   document.getElementById(`UsuariosHAnio5E${index}`).textContent=ejemplos[`UsuariosHAnio5E${index}`];
   document.getElementById(`UsuariosMAnio5E${index}`).textContent=ejemplos[`UsuariosMAnio5E${index}`];

 document.getElementById(`NumProfE${index}`        ).textContent     =ejemplos[`NumProfE${index}`        ]
 document.getElementById(`UsuariosAHAnio1E${index}`).textContent=ejemplos[`UsuariosAHAnio1E${index}`]
 document.getElementById(`UsuariosAMAnio1E${index}`).textContent=ejemplos[`UsuariosAMAnio1E${index}`]
 document.getElementById(`UsuariosAHAnio2E${index}`).textContent=ejemplos[`UsuariosAHAnio2E${index}`]
 document.getElementById(`UsuariosAMAnio2E${index}`).textContent=ejemplos[`UsuariosAMAnio2E${index}`]
 document.getElementById(`UsuariosAHAnio3E${index}`).textContent=ejemplos[`UsuariosAHAnio3E${index}`]
 document.getElementById(`UsuariosAMAnio3E${index}`).textContent=ejemplos[`UsuariosAMAnio3E${index}`]
 document.getElementById(`UsuariosAHAnio4E${index}`).textContent=ejemplos[`UsuariosAHAnio4E${index}`]
 document.getElementById(`UsuariosAMAnio4E${index}`).textContent=ejemplos[`UsuariosAMAnio4E${index}`]
 document.getElementById(`UsuariosAHAnio5E${index}`).textContent=ejemplos[`UsuariosAHAnio5E${index}`]
 document.getElementById(`UsuariosAMAnio5E${index}`).textContent=ejemplos[`UsuariosAMAnio5E${index}`]

document.getElementById(`Edificio_T2E${index}`).textContent= ejemplos[`Edificio_T2E${index}`];
document.getElementById(`Nivel_T2E${index}`   ).textContent= ejemplos[`Nivel_T2E${index}`   ];
document.getElementById(`Espacio_T2E${index}` ).textContent= ejemplos[`Espacio_T2E${index}` ];
document.getElementById(`Largo_T2E${index}`   ).textContent= ejemplos[`Largo_T2E${index}`   ];
document.getElementById(`Ancho_T2E${index}`   ).textContent= ejemplos[`Ancho_T2E${index}`   ];
document.getElementById(`Alumnos_T2E${index}` ).textContent= ejemplos[`Alumnos_T2E${index}` ];
document.getElementById(`Horas_T2E${index}`   ).textContent= ejemplos[`Horas_T2E${index}`   ];

document.getElementById(`Edificio_T3E${index}`).textContent       = ejemplos[`Edificio_T3E${index}`];
document.getElementById(`MetrosCuadrados_T3E${index}`).textContent= ejemplos[`MetrosCuadrados_T3E${index}`];


document.getElementById(`ProgramaAcademico_T4E${index}`).textContent= ejemplos[`ProgramaAcademico_T4E${index}`];              
document.getElementById(`Espacio_T4E${index}`).textContent= ejemplos[`Espacio_T4E${index}`];         
document.getElementById(`Clave_T4E${index}`).textContent= ejemplos[`Clave_T4E${index}`];       
document.getElementById(`Equipo_T4E${index}`).textContent= ejemplos[`Equipo_T4E${index}`];        
document.getElementById(`Cantidad_T4E${index}`).textContent= ejemplos[`Cantidad_T4E${index}`];         
document.getElementById(`Especificaciones_T4E${index}`).textContent= ejemplos[`Especificaciones_T4E${index}`];         
document.getElementById(`Justificacion_T4E${index}`).textContent= ejemplos[`Justificacion_T4E${index}`];      
document.getElementById(`PrecioUnitario_T4E${index}`).textContent= ejemplos[`PrecioUnitario_T4E${index}`];      
document.getElementById(`NombreArch_T4E${index}`).textContent= ejemplos[`NombreArch_T4E${index}`];     
document.getElementById(`Cotizacion_T4E${index}`).textContent= ejemplos[`Cotizacion_T4E${index}`];       
document.getElementById(`PrecioUnitario2_T4E${index}`).textContent= ejemplos[`PrecioUnitario2_T4E${index}`];
document.getElementById(`NombreArch2_T4E${index}`).textContent= ejemplos[`NombreArch2_T4E${index}`];  
document.getElementById(`Cotizacion2_T4E${index}`).textContent=ejemplos[`Cotizacion2_T4E${index}`];


document.getElementById(`ProgramaAcademico_T5E${index}`).textContent=ejemplos[`ProgramaAcademico_T5E${index}`];
document.getElementById(`Espacio_T5E${index}`).textContent=ejemplos[`Espacio_T5E${index}`]                     ;
document.getElementById(`Equipo_T5E${index}`).textContent=ejemplos[`Equipo_T5E${index}`]                        ;
document.getElementById(`Especificaciones_T5E${index}`).textContent=ejemplos[`Especificaciones_T5E${index}`]  ;
document.getElementById(`MalEstado_T5E${index}`).textContent=ejemplos[`MalEstado_T5E${index}`]               ;
document.getElementById(`BuenEstado_T5E${index}`).textContent=ejemplos[`BuenEstado_T5E${index}`]                ;
document.getElementById(`EstadoRegular_T5E${index}`).textContent=ejemplos[`EstadoRegular_T5E${index}`]            ;

}



      document.querySelectorAll("#tablaBody tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody2 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody3 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody4 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      document.querySelectorAll("#tablaBody5 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
      /*
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });
*/
//    }, 0);
//  }, 0);
//}, 0);
  alert("📂 Respuesta cargada correctamente");
} catch (e) {
    alert("⚠️ Error de conexión al cargar la respuesta");
}
  
});












//Guardado de Datos    
  
 const form = document.getElementById("miFormulario");
 const aviso = document.getElementById("aviso");   



document.getElementById("Enviar").addEventListener("click", async () => {
   
//document.getElementById("Enviar").addEventListener("submit", function(e){
                //e.preventDefault();
                //if (!this.checkValidity()) {
                //    this.reportValidity(); // muestra mensajes
                //    return;  
               // }
                 const confirmar = confirm("¿Estás apunto de enviar el Formato de Detección de Necesidades deseas continuar?");

                if (!confirmar) {
                  // ❌ Usuario canceló
                  return;
                }
       //**
       



//const formData = new FormData(this);

const formData = new FormData(form);

  const data = {};

const selectsTexto = [
/*                      "secretaria",
                      "direccion",
                      "nivel",
                      */
                      "dependencia"
                ];
                selectsTexto.forEach(id => {
                        const select = document.getElementById(id);
                        if (select && select.selectedIndex >= 0) {
                        formData.set(id, select.options[select.selectedIndex].value);
                        }
                });
                aviso.textContent = " ";

  


  for (const [key, value] of formData.entries()) {
     
    if (!(value instanceof File)) {
        data[key] = value;
        continue;
    }

    if (value.size === 0) {
        data[key] = "";
        continue;
    }
     if(key.includes("CotizacionAdquisicion")){
                             const base64 = await new Promise(resolve => {
                             const reader = new FileReader();
                             reader.onload = () => resolve(reader.result);
                             reader.readAsDataURL(value);
        });
    


    data[key] = {
        nombre: value.name,
        tipo: value.type,
        contenido: base64
    };    
}
 




    if((data[key]!="")&&(key.includes("CotizacionAdquisicionG1"))){
            ExistenciaDeCotizaciones=true;
       //    alert(data[key].nombre);     
    }
    if((data[key]!="")&&(key.includes("CotizacionAdquisicionG2"))){
            ExistenciaDeCotizacionesA2=true;
         //     alert(data[key].nombre);     
    }
    if((data[key]!="")&&(key.includes("CotizacionAdquisicion_T4R"))){
            ExistenciaDeCotizaciones_T4=true;
           //     alert(data[key].nombre);     
    }
    if((data[key]!="")&&(key.includes("CotizacionAdquisicion2_T4R"))){
            ExistenciaDeCotizacionesA2_T4=true;
           //      alert(data[key].nombre);     
    }

}




const archivosPlanos = formData.getAll("Planos_T3");
data.planos = [];

for (const archivo of archivosPlanos) {

  if (archivo.size === 0) continue;

  const base64 = await new Promise(resolve => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(archivo);
  });

  data.planos.push({
    nombre: archivo.name,
    tipo: archivo.type,
    contenido: base64
  });
}








/*
data.secretariaT = document.getElementById("secretaria").options[
    document.getElementById("secretaria").selectedIndex
].text;

data.direccionT = document.getElementById("direccion").options[
    document.getElementById("direccion").selectedIndex
].text;

data.nivelT = document.getElementById("nivel").options[
    document.getElementById("nivel").selectedIndex
].text;
*/
data.dependenciaT = document.getElementById("dependencia").options[
    document.getElementById("dependencia").selectedIndex
].text;
/*
alert("ExistenciaDeCotizaciones: "+ExistenciaDeCotizaciones);


alert("ExistenciaDeCotizacionesA2: "+ExistenciaDeCotizacionesA2);

alert("ExistenciaDeCotizaciones_T4: "+ExistenciaDeCotizaciones_T4);
alert("ExistenciaDeCotizacionesA2_T4: "+ExistenciaDeCotizacionesA2_T4);


//------------------lleando de las url

alert("Antes ");*/
Object.keys(urlCotizacionesActuales).forEach(name => {
             data[name] = urlCotizacionesActuales[name];
/*             alert("data.envio:"+data.numeroEnvio);
             alert("url de cotizaciones:"+urlCotizacionesActuales[name]);
             alert("data: "+data[name]);
  */     
  });
//alert("Despues ");





  //-------------------------------------------------------------------



  // Guardamos también el número de filas actuales
  data.__filas1 = document.querySelectorAll("#tablaBody tr").length;
  data.__filas2 = document.querySelectorAll("#tablaBody2 tr").length;
  data.__filas3 = document.querySelectorAll("#tablaBody3 tr").length;
  data.__filasC = document.querySelectorAll("#tablaCotizaciones tr").length;
  data.__filas4 = document.querySelectorAll("#tablaBody4 tr").length;
  data.__filas5 = document.querySelectorAll("#tablaBody5 tr").length;

  /*
  data.__filas6 = document.querySelectorAll("#tablaBody6 tr").length;
  */
  if(folioActual==null){
      folioActual = generarFolio();
  }
  data.__folio = folioActual;
  data.__envioDependencia = true;
  data.edicion=edicionActual;
  data.numeroEnvio=numerodeEnvio+1;
  data.existenciaCotizaciones=ExistenciaDeCotizaciones;
  data.existenciaCotizaciones_T4=ExistenciaDeCotizaciones_T4;
  data.existenciaCotizaciones2=ExistenciaDeCotizacionesA2;
  data.existenciaCotizaciones2_T4=ExistenciaDeCotizacionesA2_T4;

/*  
alert("data.existenciaCotizaciones: "+data.existenciaCotizaciones);
alert("data.existenciaCotizaciones_T4: "+data.existenciaCotizaciones_T4);
alert("data.existenciaCotizaciones2: "+data.existenciaCotizaciones2);
alert("data.existenciaCotizaciones2_T4: "+data.existenciaCotizaciones2_T4);
*/



formData.append(
    "payload",
    JSON.stringify({
        action: "EnviarFormulario",
        data
    })
);  

try {

/*
    const res = await fetch(direccionEnlace, {
        method: "POST",
        body: formData
    });

  */ 
 
const partes = dividirData(data);

const res = await fetch(direccionEnlace, {
    method: "POST",
    body: JSON.stringify({
        action: "EnviarFormulario",
        json1: partes[0],
           json2: partes[1],
           json3: partes[2],
           json4: partes[3],
           json5: partes[4],   
           json6: partes[5],
           json7: partes[6],
           json8:partes[7]
    })
});


/*
const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "EnviarFormulario", data})
 });
*/
const json = await res.json();

   


    if (json.success) {

       if(numerodeEnvio==1){
        alert(`✅ Registro de solicitud correctamente Enviada del formato de detección correctamente capturado. Tu folio es: ${folioActual}`);

        }else{
          alert(`✅ Tus correcciones han sido correctamente actualizadas. Tu folio es: ${folioActual}`);

        } 
      
       

        aviso.textContent = "✅ Tu respuesta fue enviada correctamente";
        aviso.style.color = "green";

        form.reset();

    } else {

        alert("⚠️ Error al enviar los datos: " + json.message);

    }

} catch (e) {

    console.error(e);
    alert("⚠️ Error de conexión: " + e.message);

}

  });


 window.onload = async function () {

const res = await fetch(direccionEnlace,{
    method:"POST",
    body: JSON.stringify({
        action:"ObtenerConfiguracion"
    })
});
const config = await res.json();
let encabezados=config.encabezados;
/*
let ejemplos=config.ejemplos;
    for(let index=1;index<3;index++){
   document.getElementById(`ProgramasE${index}`).textContent=ejemplos[`ProgramasE${index}`];   
   document.getElementById(`UsuariosHAnio1E${index}`).textContent=ejemplos[`UsuariosHAnio1E${index}`];
   document.getElementById(`UsuariosMAnio1E${index}`).textContent=ejemplos[`UsuariosMAnio1E${index}`];
   document.getElementById(`UsuariosHAnio2E${index}`).textContent=ejemplos[`UsuariosHAnio2E${index}`];
   document.getElementById(`UsuariosMAnio2E${index}`).textContent=ejemplos[`UsuariosMAnio2E${index}`];
   document.getElementById(`UsuariosHAnio3E${index}`).textContent=ejemplos[`UsuariosHAnio3E${index}`];
   document.getElementById(`UsuariosMAnio3E${index}`).textContent=ejemplos[`UsuariosMAnio3E${index}`];
   document.getElementById(`UsuariosHAnio4E${index}`).textContent=ejemplos[`UsuariosHAnio4E${index}`];
   document.getElementById(`UsuariosMAnio4E${index}`).textContent=ejemplos[`UsuariosMAnio4E${index}`];
   document.getElementById(`UsuariosHAnio5E${index}`).textContent=ejemplos[`UsuariosHAnio5E${index}`];
   document.getElementById(`UsuariosMAnio5E${index}`).textContent=ejemplos[`UsuariosMAnio5E${index}`];

 document.getElementById(`NumProfE${index}`        ).textContent     =ejemplos[`NumProfE${index}`        ]
 document.getElementById(`UsuariosAHAnio1E${index}`).textContent=ejemplos[`UsuariosAHAnio1E${index}`]
 document.getElementById(`UsuariosAMAnio1E${index}`).textContent=ejemplos[`UsuariosAMAnio1E${index}`]
 document.getElementById(`UsuariosAHAnio2E${index}`).textContent=ejemplos[`UsuariosAHAnio2E${index}`]
 document.getElementById(`UsuariosAMAnio2E${index}`).textContent=ejemplos[`UsuariosAMAnio2E${index}`]
 document.getElementById(`UsuariosAHAnio3E${index}`).textContent=ejemplos[`UsuariosAHAnio3E${index}`]
 document.getElementById(`UsuariosAMAnio3E${index}`).textContent=ejemplos[`UsuariosAMAnio3E${index}`]
 document.getElementById(`UsuariosAHAnio4E${index}`).textContent=ejemplos[`UsuariosAHAnio4E${index}`]
 document.getElementById(`UsuariosAMAnio4E${index}`).textContent=ejemplos[`UsuariosAMAnio4E${index}`]
 document.getElementById(`UsuariosAHAnio5E${index}`).textContent=ejemplos[`UsuariosAHAnio5E${index}`]
 document.getElementById(`UsuariosAMAnio5E${index}`).textContent=ejemplos[`UsuariosAMAnio5E${index}`]

document.getElementById(`Edificio_T2E${index}`).textContent= ejemplos[`Edificio_T2E${index}`];
document.getElementById(`Nivel_T2E${index}`   ).textContent= ejemplos[`Nivel_T2E${index}`   ];
document.getElementById(`Espacio_T2E${index}` ).textContent= ejemplos[`Espacio_T2E${index}` ];
document.getElementById(`Largo_T2E${index}`   ).textContent= ejemplos[`Largo_T2E${index}`   ];
document.getElementById(`Ancho_T2E${index}`   ).textContent= ejemplos[`Ancho_T2E${index}`   ];
document.getElementById(`Alumnos_T2E${index}` ).textContent= ejemplos[`Alumnos_T2E${index}` ];
document.getElementById(`Horas_T2E${index}`   ).textContent= ejemplos[`Horas_T2E${index}`   ];

document.getElementById(`Edificio_T3E${index}`).textContent       = ejemplos[`Edificio_T3E${index}`];
document.getElementById(`MetrosCuadrados_T3E${index}`).textContent= ejemplos[`MetrosCuadrados_T3E${index}`];


document.getElementById(`ProgramaAcademico_T4E${index}`).textContent= ejemplos[`ProgramaAcademico_T4E${index}`];              
document.getElementById(`Espacio_T4E${index}`).textContent= ejemplos[`Espacio_T4E${index}`];         
document.getElementById(`Clave_T4E${index}`).textContent= ejemplos[`Clave_T4E${index}`];       
document.getElementById(`Equipo_T4E${index}`).textContent= ejemplos[`Equipo_T4E${index}`];        
document.getElementById(`Cantidad_T4E${index}`).textContent= ejemplos[`Cantidad_T4E${index}`];         
document.getElementById(`Especificaciones_T4E${index}`).textContent= ejemplos[`Especificaciones_T4E${index}`];         
document.getElementById(`Justificacion_T4E${index}`).textContent= ejemplos[`Justificacion_T4E${index}`];      
document.getElementById(`PrecioUnitario_T4E${index}`).textContent= ejemplos[`PrecioUnitario_T4E${index}`];      
document.getElementById(`NombreArch_T4E${index}`).textContent= ejemplos[`NombreArch_T4E${index}`];     
document.getElementById(`Cotizacion_T4E${index}`).textContent= ejemplos[`Cotizacion_T4E${index}`];       
document.getElementById(`PrecioUnitario2_T4E${index}`).textContent= ejemplos[`PrecioUnitario2_T4E${index}`];
document.getElementById(`NombreArch2_T4E${index}`).textContent= ejemplos[`NombreArch2_T4E${index}`];  
document.getElementById(`Cotizacion2_T4E${index}`).textContent=ejemplos[`Cotizacion2_T4E${index}`];


document.getElementById(`ProgramaAcademico_T5E${index}`).textContent=ejemplos[`ProgramaAcademico_T5E${index}`];
document.getElementById(`Espacio_T5E${index}`).textContent=ejemplos[`Espacio_T5E${index}`]                     ;
document.getElementById(`Equipo_T5E${index}`).textContent=ejemplos[`Equipo_T5E${index}`]                        ;
document.getElementById(`Especificaciones_T5E${index}`).textContent=ejemplos[`Especificaciones_T5E${index}`]  ;
document.getElementById(`MalEstado_T5E${index}`).textContent=ejemplos[`MalEstado_T5E${index}`]               ;
document.getElementById(`BuenEstado_T5E${index}`).textContent=ejemplos[`BuenEstado_T5E${index}`]                ;
document.getElementById(`EstadoRegular_T5E${index}`).textContent=ejemplos[`EstadoRegular_T5E${index}`]            ;




}    
*/                             
                             
                             
                             
                             
                             
                             
                             
                             


    document.getElementById("UsuariosHAnio1").textContent = encabezados.encabezado1;
    document.getElementById("UsuariosMAnio1").textContent = encabezados.encabezado2;
    document.getElementById("UsuariosHAnio2").textContent = encabezados.encabezado3;
    document.getElementById("UsuariosMAnio2").textContent = encabezados.encabezado4;
    document.getElementById("UsuariosHAnio3").textContent = encabezados.encabezado5;
    document.getElementById("UsuariosMAnio3").textContent = encabezados.encabezado6;
    document.getElementById("UsuariosHAnio1Obs").textContent = encabezados.encabezado1;
    document.getElementById("UsuariosMAnio1Obs").textContent = encabezados.encabezado2;
    document.getElementById("UsuariosHAnio2Obs").textContent = encabezados.encabezado3;
    document.getElementById("UsuariosMAnio2Obs").textContent = encabezados.encabezado4;
    document.getElementById("UsuariosHAnio3Obs").textContent = encabezados.encabezado5;
    document.getElementById("UsuariosMAnio3Obs").textContent = encabezados.encabezado6;
    


    document.getElementById("UsuariosHAnio4").textContent = encabezados.encabezado13;
    document.getElementById("UsuariosMAnio4").textContent = encabezados.encabezado14;
    document.getElementById("UsuariosHAnio5").textContent = encabezados.encabezado15;
    document.getElementById("UsuariosMAnio5").textContent = encabezados.encabezado16;
    
    document.getElementById("UsuariosHAnio4Obs").textContent = encabezados.encabezado13;
    document.getElementById("UsuariosMAnio4Obs").textContent = encabezados.encabezado14;
    document.getElementById("UsuariosHAnio5Obs").textContent = encabezados.encabezado15;
    document.getElementById("UsuariosMAnio5Obs").textContent = encabezados.encabezado16;
    

    document.getElementById("UsuariosAHAnio1").textContent = encabezados.encabezado7;
    document.getElementById("UsuariosAMAnio1").textContent = encabezados.encabezado8;
    document.getElementById("UsuariosAHAnio2").textContent = encabezados.encabezado9;
    document.getElementById("UsuariosAMAnio2").textContent = encabezados.encabezado10;
    document.getElementById("UsuariosAHAnio3").textContent = encabezados.encabezado11;
    document.getElementById("UsuariosAMAnio3").textContent = encabezados.encabezado12,
    
    document.getElementById("UsuariosAHAnio1Obs").textContent = encabezados.encabezado7;
    document.getElementById("UsuariosAMAnio1Obs").textContent = encabezados.encabezado8;
    document.getElementById("UsuariosAHAnio2Obs").textContent = encabezados.encabezado9;
    document.getElementById("UsuariosAMAnio2Obs").textContent = encabezados.encabezado10;
    document.getElementById("UsuariosAHAnio3Obs").textContent = encabezados.encabezado11;
    document.getElementById("UsuariosAMAnio3Obs").textContent = encabezados.encabezado12;


    document.getElementById("UsuariosAHAnio4").textContent = encabezados.encabezado17;
    document.getElementById("UsuariosAMAnio4").textContent = encabezados.encabezado18;
    document.getElementById("UsuariosAHAnio5").textContent = encabezados.encabezado19;
    document.getElementById("UsuariosAMAnio5").textContent = encabezados.encabezado20;
    
    document.getElementById("UsuariosAHAnio4Obs").textContent = encabezados.encabezado17;
    document.getElementById("UsuariosAMAnio4Obs").textContent = encabezados.encabezado18;
    document.getElementById("UsuariosAHAnio5Obs").textContent = encabezados.encabezado19;
    document.getElementById("UsuariosAMAnio5Obs").textContent = encabezados.encabezado20;

};


const formulario = document.getElementById("miFormulario");

let campoMoviendo = null;
let offsetX = 0;
let offsetY = 0;


// =======================
// AMPLIAR AL ENTRAR
// =======================

formulario.addEventListener("focusin", function (e) {

    const campo = e.target;

    if (!campo.matches(".expandible")) return;

    campo.classList.add("campo-ampliado");
    campo.classList.remove("ventanaFormulario");


    let leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (!leyenda) {

        leyenda = document.createElement("div");

        leyenda.className = "leyenda-textarea";
        leyenda.dataset.campo = campo.name;

        leyenda.textContent =
            campo.getAttribute("aria-label") || "Campo";

        document.body.appendChild(leyenda);
    }


    const rect = campo.getBoundingClientRect();

    leyenda.style.left = rect.left + "px";
    leyenda.style.top = (rect.top - 32) + "px";
});



// =======================
// RESTAURAR AL SALIR
// =======================

formulario.addEventListener("focusout", function (e) {

    const campo = e.target;

    if (!campo.matches(".expandible")) return;


    campo.classList.remove("campo-ampliado");
    campo.classList.add("ventanaFormulario");


    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (leyenda) {
        leyenda.remove();
    }


    campo.style.left = "";
    campo.style.top = "";


    requestAnimationFrame(() => {

        campo.style.height = "auto";
        campo.style.height = campo.scrollHeight + "px";

    });
});



// =======================
// INICIAR MOVIMIENTO
// CTRL + CLIC
// =======================

formulario.addEventListener("mousedown", function (e) {

    const campo = e.target;

    if (!campo.matches(".expandible")) return;

    if (!campo.classList.contains("campo-ampliado")) return;

    if (!e.ctrlKey) return;


    campoMoviendo = campo;


    const rect = campo.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;


    campo.style.cursor = "grabbing";

    e.preventDefault();
});



// =======================
// MOVER
// =======================

document.addEventListener("mousemove", function (e) {

    if (!campoMoviendo) return;


    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;


    campoMoviendo.style.left = left + "px";
    campoMoviendo.style.top = top + "px";


    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campoMoviendo.name}"]`
    );


    if (leyenda) {

        leyenda.style.left = left + "px";
        leyenda.style.top = (top - 32) + "px";

    }

});



// =======================
// TERMINAR MOVIMIENTO
// =======================

document.addEventListener("mouseup", function () {

    if (!campoMoviendo) return;


    campoMoviendo.style.cursor = "";

    campoMoviendo = null;

});




















function dividirData(data, partes = 8) {

    const json = JSON.stringify(data);

    const tam = Math.ceil(json.length / partes);

    const resultado = [];

    for (let i = 0; i < partes; i++) {
        resultado.push(
            json.substring(i * tam, (i + 1) * tam)
        );
    }

    return resultado;
}


document.addEventListener("click", function (event) {

    const boton = event.target.closest(".borrar-fila");
    if (!boton) return;

    const fila = boton.closest("tr");
    if (!fila) return;

    // Obtener tbody ANTES de borrar
    const tbody = fila.closest("tbody");

    // Prueba del name
    const campo = fila.querySelector("[name]");

    //  if (campo) {
    //    alert("Nombre antes de borrar: " + campo.name);
    //  }

    // Ahora sí borrar
    fila.remove();

    renumerarFilas(tbody);
});





function renumerarFilas(tbody) {

    const filas = tbody.querySelectorAll("tr");

    let nuevoNumero = 1;

    filas.forEach(fila => {

        // Si es fila de ejemplo, NO cuenta
        if (fila.querySelector(".ejemplo")) {
            return;
        }

        // Si es la fila TOTAL, tampoco cuenta
        if (fila.id === "filaTotalTabla4") {
            return;
        }

        const celdaNumero = fila.cells[0];

        if (celdaNumero) {
            celdaNumero.textContent = nuevoNumero;
        }

        fila.querySelectorAll("[name], [id]").forEach(elemento => {

            if (elemento.classList.contains("ejemplo")) return;

            if (elemento.name) {
                elemento.name = elemento.name.replace(
                    /R\d+/,
                    `R${nuevoNumero}`
                );
            }

            if (elemento.id) {
                elemento.id = elemento.id.replace(
                    /R\d+/,
                    `R${nuevoNumero}`
                );
            }
        });

        fila.querySelectorAll("[data-campo]").forEach(elemento => {
            elemento.dataset.campo =
                elemento.dataset.campo.replace(
                    /R\d+/,
                    `R${nuevoNumero}`
                );
        });

        fila.querySelectorAll("[data-precio]").forEach(elemento => {
            elemento.dataset.precio =
                elemento.dataset.precio.replace(
                    /R\d+/,
                    `R${nuevoNumero}`
                );
        });

        fila.querySelectorAll("[data-cant]").forEach(elemento => {
            elemento.dataset.cant =
                elemento.dataset.cant.replace(
                    /R\d+/,
                    `R${nuevoNumero}`
                );
        });

        // SOLO aumenta si fue una fila real
        nuevoNumero++;
    });
}






document.addEventListener("click", function (e) {

    
const boton = e.target.closest(".abrir-observaciones");


    if (!boton) return;


    const Obs=document.querySelector(

                             `[name="${boton.dataset.observacion}"]`
              
);


    const Duda = document.querySelector(

                             `[name="${boton.dataset.duda}"]`
    
                          );


    if (!Obs || !Duda) return;


    // Aquí haces lo que ya tienes para abrirlos

    // Sacarlos del contenedor oculto
    document.body.appendChild(Obs);
    document.body.appendChild(Duda);

    // Mostrar
    Obs.classList.remove("ventanaFormulario");
    Duda.classList.remove("ventanaFormulario");

    Obs.classList.add("campo-ampliadoO");
    Duda.classList.add("campo-ampliadoD");

   // Uno al lado del otro
    Obs.style.left = "10vw";
    Duda.style.left = "52vw";

    Obs.style.top = "25vh";
    Duda.style.top = "25vh";

    // Leyendas
    crearLeyenda(Obs);
    crearLeyenda(Duda);

});


document.addEventListener("click", function (e) {

    // Buscar Duda y Observación actualmente ampliadas
    const Duda = document.querySelector(".campo-ampliadoD");
    const Obs  = document.querySelector(".campo-ampliadoO");
    const boton = e.target.closest(".abrir-observaciones");

    // Si no hay ninguna abierta, no hacer nada
    if (!Duda && !Obs) return;

    // Si el click fue dentro de Duda o de Observación,
    // no cerrar nada
    if (
        (Duda && Duda.contains(e.target)) ||
        (Obs && Obs.contains(e.target)) || (boton && boton.contains(e.target)) 
    ) {
        return;
    }

    // Cerrar Observación
    if (Obs) {
        Obs.classList.remove("campo-ampliadoO");
        Obs.classList.add("ventanaFormulario");

        Obs.style.left = "";
        Obs.style.top = "";
    }

    if(Obs.classList.contains("info")){
         Obs.classList.add("paso");
    }

    // Cerrar Duda
    if (Duda) {
        Duda.classList.remove("campo-ampliadoD");
        Duda.classList.add("ventanaFormulario");

        Duda.style.left = "";
        Duda.style.top = "";
    }

    // Borrar leyendas
    document.querySelectorAll(".leyenda-textarea")
        .forEach(leyenda => {
            leyenda.remove();
        });

});




function crearLeyenda(campo) {
    
    
    let leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (!leyenda) {

        leyenda = document.createElement("div");
        leyenda.className = "leyenda-textarea";
        leyenda.dataset.campo = campo.name;

        leyenda.textContent =
            campo.getAttribute("aria-label") || "Campo";

        document.body.appendChild(leyenda);

        const rect = campo.getBoundingClientRect();

        leyenda.style.left = rect.left + "px";
        leyenda.style.top = (rect.top - 32) + "px";


    

        }
}





document.addEventListener("click", function (e) {

    
const boton = e.target.closest(".informacion");


    if (!boton) return;


    const texto=boton.dataset.info;
    
    const recuadro=document.getElementById(texto);


    
    // Mostrar
    recuadro.classList.remove("paso");
    
    recuadro.classList.add("campo-ampliadoO");

   // Uno al lado del otro
    recuadro.style.left = "10vw";
    
    recuadro.style.top = "25vh";
    
    // Leyendas
    crearLeyenda(recuadro);
    
});
