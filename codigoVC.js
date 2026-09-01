const tbody  = document.getElementById("tablaBody");
const tbody1 = document.getElementById("tablaBody1_1");
const tbody2 = document.getElementById("tablaBody2");
const tbody3 = document.getElementById("tablaBody3");
const tbody4 = document.getElementById("tablaBody4");
const tbodyC = document.getElementById("tablaCotizaciones");
const tbody5 = document.getElementById("tablaBody5");
/*const tbody6 = document.getElementById("tablaBody6");
*/


const tbody7 = document.getElementById("tablaBody7");
let urlCotizacionesActuales={};
//------------------------------------Construccion de tabla--------------------------










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
            <input
                name="Nivel_T2R${i}"
                class="input_tabla"
                aria-label="Nivel"
            >

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

            <td rowspan="5">
                <div class="contenedorArchivo">
                    <input
                        type="file"
                        id="Planos_T3"
                        name="Planos_T3"
                        class="archivoInput archivoMultipleInput"
                        accept=".pdf,.xlsx,.doc,.docx,.png,.jpg,.rar,.zip"
                        multiple
                    >

                    <span class="nombreArchivo"></span>
                </div>
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

        <td>
            <input
                name="nombreCotizacion_TCR${i}"
                id="nombreCotizacion_TCR${i}"
                class="input_tabla"
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
                    class="archivoInput"
                    accept=".pdf,.xlsx,.doc,.docx,.png,.jpg"
                >

                <span class="nombreArchivo"></span>

                <button type="button" class="borrarArchivo">
                    ❌
                </button>

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

        <td>
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
            <textarea
                name="ProgramaAcademico_T4R${i}"
                id="ProgramaAcademico_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programa Académico">
            </textarea>

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
            <textarea
                name="Espacio_T4R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Espacio">
            </textarea>

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
                class="auto-expand input_tabla expandible"
                rows="1"
                style="resize:none;"
                aria-label="Especificaciones">
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
                class="auto-expand input_tabla expandible"
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
                    class="input_tabla precio"
                    oninput="formatearMiles(this)"
                    inputmode="decimal"
                    aria-label="Precio"
                >

            </div>

            <input
                name="precio_T4R${i}RO"
                readonly
                class="paso check-verificacion"
                id="precio_T4R${i}RO"
                data-campo="precio_T4R${i}"
            >
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
                    class="input_tabla precio"
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
    `;

    tbody.appendChild(fila);

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
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Programa Académico">
            </textarea>

            <input
                name="ProgramaAcademico_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="ProgramaAcademico_T5R${i}RO"
                data-campo="ProgramaAcademico_T5R${i}"
            >
        </td>

        <td>
            <textarea
                name="Espacio_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Espacio">
            </textarea>

            <input
                name="Espacio_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="Espacio_T5R${i}RO"
                data-campo="Espacio_T5R${i}"
            >
        </td>

        <td>
            <textarea
                name="nombredelEquipo_T5R${i}"
                class="auto-expand input_tabla obligatorio"
                rows="1"
                style="resize:none;"
                aria-label="Nombre del Equipo">
            </textarea>

            <input
                name="nombredelEquipo_T5R${i}RO"
                readonly
                class="paso check-verificacion"
                id="nombredelEquipo_T5R${i}RO"
                data-campo="nombredelEquipo_T5R${i}"
            >
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









for (let i = 1; i <= 10; i++) {
  agregarFila();
  agregarFila2();
  agregarFila3();
  agregarFilaC();
  agregarFila4();
  agregarFila5();
 /* const tr  = document.createElement("tr");
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const tr3 = document.createElement("tr");
  const tr4 = document.createElement("tr");
  const trC = document.createElement("tr");
  const tr5 = document.createElement("tr");
  
 const tr7 = document.createElement("tr");
 
tr.innerHTML = `

    <td>
      ${i}
    </td>

    <td>
      <textarea
        name="Programa_T1R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
        
        <input
         name="Programa_T1R${i}RO" 
             readonly
             class="paso"
             id="Programa_T1R${i}RO"
         data-campo="Programa_T1R${i}"
       >

    </td>

    <td>
    <input type="number" name="Usuarios1_T1R${i}" class="input_tabla " aria-label="Usuarios1"> </input> 
    <input
         name="Usuarios1_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios1_T1R${i}RO"
         data-campo="Usuarios1_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios2_T1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
     <input
         name="Usuarios2_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios2_T1R${i}RO"
         data-campo="Usuarios2_T1R${i}"
       > 

    </td>
    <td> 
    <input type="number" name="Usuarios3_T1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
    <input
         name="Usuarios3_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios3_T1R${i}RO"
         data-campo="Usuarios3_T1R${i}"
       > 
    </td>
    <td>
    <input type="number" name="Usuarios4_T1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    <input
         name="Usuarios4_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios4_T1R${i}RO"
         data-campo="Usuarios4_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios5_T1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    <input
         name="Usuarios5_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios5_T1R${i}RO"
         data-campo="Usuarios5_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios6_T1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    <input
         name="Usuarios6_T1R${i}RO" 
             readonly
             class="paso"
             id="Usuarios6_T1R${i}RO"
         data-campo="Usuarios6_T1R${i}"
       >
    </td>
    <td>
    <input type="number" name="Usuarios7_T1R${i}" class="input_tabla " aria-label="Usuarios7"> </input>
    <input
         name="Usuarios7_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios7_T1R${i}RO"
         data-campo="Usuarios7_T1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios8_T1R${i}" class="input_tabla " aria-label="Usuarios8"> </input>
    <input
         name="Usuarios8_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios8_T1R${i}RO"
         data-campo="Usuarios8_T1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios9_T1R${i}" class="input_tabla " aria-label="Usuarios9"> </input>
    <input
         name="Usuarios9_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios9_T1R${i}RO"
         data-campo="Usuarios9_T1R${i}"
       >
    </td>


    <td>
    <input type="number" name="Usuarios10_T1R${i}" class="input_tabla " aria-label="Usuarios10"> </input>
    <input
         name="Usuarios10_T1R${i}RO" 
             readonly
             class="paso"
         id="Usuarios10_T1R${i}RO"
         data-campo="Usuarios10_T1R${i}"
       >
    </td>

  `;

                                    
  tr1.innerHTML = `

    
    <td>
      ${i}
    </td>

    <td>
      <textarea
        name="Programa_T1_1R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    <input
         name="Programa_T1_1R${i}RO" 
         id="Programa_T1_1R${i}RO"
         data-campo="Programa_T1_1R${i}"
         readonly
         class="paso"
       >    
    </td>


    <td>
    <input type="number" name="Usuarios1_T1_1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    <input
         name="Usuarios1_T1_1R${i}RO" 
             class="paso"
         id="Usuarios1_T1_1R${i}RO"
         data-campo="Usuarios1_T1_1R${i}"
         readonly
       >
    </td>


    <td>
    <input type="number" name="Usuarios2_T1_1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    <input
         name="Usuarios2_T1_1R${i}RO" 
         class="paso"
         id="Usuarios2_T1_1R${i}RO"
         data-campo="Usuarios2_T1_1R${i}"
       >
    </td>
    
    
    
    <td> 
    <input type="number" name="Usuarios3_T1_1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
    <input
         name="Usuarios3_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios3_T1_1R${i}RO"
         data-campo="Usuarios3_T1_1R${i}"
       >
    </td>


    <td>
    <input type="number" name="Usuarios4_T1_1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    <input
         name="Usuarios4_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios4_T1_1R${i}RO"
         data-campo="Usuarios4_T1_1R${i}"
       >
    </td>


    <td>
    <input type="number" name="Usuarios5_T1_1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    <input
         name="Usuarios5_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios5_T1_1R${i}RO"
         data-campo="Usuarios5_T1_1R${i}"
       >
    </td>


    <td>
    <input type="number" name="Usuarios6_T1_1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    <input
         name="Usuarios6_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios6_T1_1R${i}RO"
         data-campo="Usuarios6_T1_1R${i}"
       >
    </td>


    <td>
    <input type="number" name="Usuarios7_T1_1R${i}" class="input_tabla " aria-label="Usuarios7"> </input>
    <input
         name="Usuarios7_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios7_T1_1R${i}RO"
         data-campo="Usuarios7_T1_1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios8_T1_1R${i}" class="input_tabla " aria-label="Usuarios8"> </input>
    <input
         name="Usuarios8_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios8_T1_1R${i}RO"
         data-campo="Usuarios8_T1_1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios9_T1_1R${i}" class="input_tabla " aria-label="Usuarios9"> </input>
    <input
         name="Usuarios9_T1_1R${i}RO" 
         class="paso"
             readonly
         id="Usuarios9_T1_1R${i}RO"
         data-campo="Usuarios9_T1_1R${i}"
       >
    </td>

    <td>
    <input type="number" name="Usuarios10_T1_1R${i}" class="input_tabla " aria-label="Usuarios10"> </input>
    <input
         name="Usuarios10_T1_1R${i}RO" 
         class="paso"
         readonly
         id="Usuarios10_T1_1R${i}RO"
         data-campo="Usuarios10_T1_1R${i}"
       >
    </td>
  `;







tr2.innerHTML = `
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
        class="paso"
        readonly
        id="Edificio_T2R${i}RO" 
        data-campo="Edificio_T2R${i}"
    >
</td>

<td>
    <input 
        name="Nivel_T2R${i}" 
        class="input_tabla" 
        aria-label="Nivel"
    >

    <input 
        name="Nivel_T2R${i}RO" 
        class="paso"
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
        readonly class="paso"
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
        readonly class="paso"
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
        readonly class="paso"
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
        readonly class="paso"
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
       readonly  class="paso"
        id="Horas_T2R${i}RO" 
        data-campo="Horas_T2R${i}"
    >

</td>

  `;

if (i === 1) {

  tr3.innerHTML = `

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
        class="paso"
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
        class="paso"
        id="MetrosCuadrados_T3R${i}RO"
        data-campo="MetrosCuadrados_T3R${i}"
      >

    </td>

    <td rowspan="5">

      <div class="contenedorArchivo">

        <input 
          type="file"
          id="Planos_T3"
          name="Planos_T3" 
          class="archivoInput archivoMultipleInput"
          accept=".pdf,.xlsx,.doc,.docx,.png,.jpg,.rar,.zip"
          multiple
        >

        <span class="nombreArchivo"></span>

      </div>

    </td>

  `;

} else {

  tr3.innerHTML = `

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
        class="paso"
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
        class="paso"
        id="MetrosCuadrados_T3R${i}RO"
        data-campo="MetrosCuadrados_T3R${i}"
      >

    </td>

  `;

}



trC.innerHTML = `
     <td>
      ${i}
    </td>
     <td>
          <input 
                name="nombreCotizacion_TCR${i}" 
                id= "nombreCotizacion_TCR${i}"
                class="input_tabla" 
                aria-label="Nombre de la Cotizacion" 
                readonly
          > 
          </input>
     </td>
     
    
    <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file"
                       id= "CotizacionAdquisicionG1_TCR${i}"
                       name="CotizacionAdquisicionG1_TCR${i}" 
                       class="archivoInput"
                       accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">
                 <span class="nombreArchivo"></span>
                 <button type="button" class="borrarArchivo">
                   ❌
                 </button>
     </div>            
    </td>
    
    
    
<td class="cantidadCol">

      <td class="cantidadCol">

    <input
        type="number"
        name="anio_TCR${i}"
        class="input_tabla"
        aria-label="Año de la cotizacion">
    </input>

    <input
        name="anio_TCR${i}RO"
        readonly
        class="paso"
        id="anio_TCR${i}RO"
        data-campo="anio_TCR${i}">
        
</td>
               <td>
      <input
        id="nombreCotizacion2_TCR${i}"
        name="nombreCotizacion2_TCR${i}"
        class="input_tabla"
        aria-label="Nombre de la Cotizacion 2"
        readonly
        > </input>
    </td>


  <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
                       id="CotizacionAdquisicionG2_TCR${i}"
                       name="CotizacionAdquisicionG2_TCR${i}" 
                       class="archivoInput "
                       accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">
                 <span class="nombreArchivo"></span>
                 <button type="button" class="borrarArchivo">
                   ❌
                 </button>
     </div>            
</td>
      <td>

    <input
        type="number"
        name="anioA2_TCR${i}"
        class="input_tabla"
        aria-label="Año de la cotizacion">
    </input>

    <input
        name="anioA2_TCR${i}RO"
        readonly
        class="paso"
        id="anioA2_TCR${i}RO"
        data-campo="anioA2_TCR${i}">
        
</td>
     




`;









tr4.innerHTML = `
    <td>
        ${i}
    </td>
     

    <td>
      <textarea
        name="ProgramaAcademico_T4R${i}"
        id="ProgramaAcademico_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
        
        <input
            name="ProgramaAcademico_T4R${i}RO"
            type="text"
            class="paso"
         id="ProgramaAcademico_T4R${i}RO" readonly
       >

    </td> 
    

    <td>
        <textarea
            name="Espacio_T4R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Espacio">
        </textarea>

        <input
            name="Espacio_T4R${i}RO"
            readonly
            class="paso"
            id="Espacio_T4R${i}RO"
            data-campo="Espacio_T4R${i}">
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
            class="paso"
            id="Clave_T4R${i}RO"
            data-campo="Clave_T4R${i}">
    </td>

    <td>
        <textarea
            name="nombredelEquipo_T4R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Nombre del Equipo">
        </textarea>

        <input
            name="nombredelEquipo_T4R${i}RO"
            readonly
            class="paso"
            id="nombredelEquipo_T4R${i}RO"
            data-campo="nombredelEquipo_T4R${i}">
    </td>

    <td class="cantidadCol">

        <input
            type="number"
            name="cantidad_T4R${i}"
            class="input_tabla"
            aria-label="Cantidad">
        </input>

        <input
            name="cantidad_T4R${i}RO"
            readonly
            class="paso"
            id="cantidad_T4R${i}RO"
            data-campo="cantidad_T4R${i}">
    </td>

    <td>
        <textarea
            name="especificaciones_T4R${i}"
            class="auto-expand input_tabla expandible"
            rows="1"
            style="resize:none;"
            aria-label="Especificaciones">
        </textarea>

        <input
            name="especificaciones_T4R${i}RO"
            readonly
            class="paso"
            id="especificaciones_T4R${i}RO"
            data-campo="especificaciones_T4R${i}">
    </td>

    <td>
        <textarea
            id="justificacion_T4R${i}"
            name="justificacion_T4R${i}"
            class="auto-expand input_tabla expandible"
            rows="1"
            style="resize:none;"
            aria-label="Justificación">
        </textarea>

        <input
            name="justificacion_T4R${i}RO"
            readonly
            class="paso"
            id="justificacion_T4R${i}RO"
            data-campo="justificacion_T4R${i}">
    </td>

    <td>
        <div class="precio-wrapper">
            <span class="peso">$</span>

            <input
                type="text"
                name="precio_T4R${i}"
                class="input_tabla precio"
                oninput="formatearMiles(this)"
                inputmode="decimal"
                aria-label="Precio">
            </input>
        </div>

        <input
            name="precio_T4R${i}RO"
            readonly
            class="paso"
            id="precio_T4R${i}RO"
            data-campo="precio_T4R${i}">
    </td>

    <td>
        <select
            id="nombreCotizacion_T4R${i}"
            name="nombreCotizacion_T4R${i}"
            class="tabla_select"
            aria-label="Nombre del archivo donde esta la Cotizacion del Equipo">

            <option value="">-- Selecciona una cotización--</option>
        </select>

        <input
            name="nombreCotizacion_T4R${i}RO"
            readonly
            class="paso"
            id="nombreCotizacion_T4R${i}RO"
            data-campo="nombreCotizacion_T4R${i}">
    </td>

    <td class="paso">
        <div class="contenedorArchivo paso">

            <input
                type="file"
                name="CotizacionAdquisicion_T4R${i}"
                class="archivoInput"
                accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">

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
                class="input_tabla precio"
                oninput="formatearMiles(this)"
                inputmode="decimal"
                aria-label="Precio 2">
            </input>
        </div>

        <input
            name="precio2_T4R${i}RO"
            readonly
            class="paso"
            id="precio2_T4R${i}RO"
            data-campo="precio2_T4R${i}">
    </td>

    <td>
        <select
            id="nombreCotizacion2_T4R${i}"
            name="nombreCotizacion2_T4R${i}"
            class="tabla_select"
            aria-label="Nombre del archivo donde esta la Cotizacion de la alternativa 2 del Equipo">

            <option value="">-- Selecciona una cotización--</option>
        </select>

        <input
            name="nombreCotizacion2_T4R${i}RO"
            readonly
            class="paso"
            id="nombreCotizacion2_T4R${i}RO"
            data-campo="nombreCotizacion2_T4R${i}">
    </td>

    <td class="paso">
        <div class="contenedorArchivo paso">

            <input
                type="file"
                name="CotizacionAdquisicion2_T4R${i}"
                class="archivoInput"
                accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">

            <span class="nombreArchivo"></span>

            <button type="button" class="borrarArchivo">
                ❌
            </button>

        </div>
    </td>
`;





tr5.innerHTML = `
    <td>
        ${i}
    </td>

    <td>
        <textarea
            name="ProgramaAcademico_T5R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Programa Académico">
        </textarea>

        <input
            name="ProgramaAcademico_T5R${i}RO"
            readonly
            class="paso"
            id="ProgramaAcademico_T5R${i}RO"
            data-campo="ProgramaAcademico_T5R${i}">
    </td>

    <td>
        <textarea
            name="Espacio_T5R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Espacio">
        </textarea>

        <input
            name="Espacio_T5R${i}RO"
            readonly
            class="paso"
            id="Espacio_T5R${i}RO"
            data-campo="Espacio_T5R${i}">
    </td>

    <td>
        <textarea
            name="nombredelEquipo_T5R${i}"
            class="auto-expand input_tabla obligatorio"
            rows="1"
            style="resize:none;"
            aria-label="Nombre del Equipo">
        </textarea>

        <input
            name="nombredelEquipo_T5R${i}RO"
            readonly
            class="paso"
            id="nombredelEquipo_T5R${i}RO"
            data-campo="nombredelEquipo_T5R${i}">
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
            class="paso"
            id="especificaciones_T5R${i}RO"
            data-campo="especificaciones_T5R${i}">
    </td>

    <td class="cantidadCol">

        <input
            type="number"
            name="cantidadMal_estado_T5R${i}"
            class="input_tabla"
            aria-label="Cantidad en mal estado">
        </input>

        <input
            name="cantidadMal_estado_T5R${i}RO"
            readonly
            class="paso"
            id="cantidadMal_estado_T5R${i}RO"
            data-campo="cantidadMal_estado_T5R${i}">
    </td>

    <td class="cantidadCol">

        <input
            type="number"
            name="cantidadBuen_estado_T5R${i}"
            class="input_tabla"
            aria-label="Cantidad en buen estado">
        </input>

        <input
            name="cantidadBuen_estado_T5R${i}RO"
            readonly
            class="paso"
            id="cantidadBuen_estado_T5R${i}RO"
            data-campo="cantidadBuen_estado_T5R${i}">
    </td>

    <td class="cantidadCol">

        <input
            type="number"
            name="cantidadRegular_estado_T5R${i}"
            class="input_tabla"
            aria-label="Cantidad en estado Regular">
        </input>

        <input
            name="cantidadRegular_estado_T5R${i}RO"
            readonly
            class="paso"
            id="cantidadRegular_estado_T5R${i}RO"
            data-campo="cantidadRegular_estado_T5R${i}">
    </td>
`;












  tbody.appendChild(tr);
  tbody1.appendChild(tr1);
  tbody2.appendChild(tr2);
  tbody3.appendChild(tr3);
  tbody4.appendChild(tr4);
  tbodyC.appendChild(trC);
  tbody5.appendChild(tr5);
/*  tbody6.appendChild(tr6);
*/
}






//---------------------------------------------------Actualizacion de los selects de nombres de archivos
tbodyC.addEventListener("change", e => {
  if (!(e.target.name?.startsWith("CotizacionAdquisicionG1_TCR") ||e.target.name?.startsWith("CotizacionAdquisicionG2_TCR"))) return;
      
      const fila = e.target.closest("tr");

      const numeroFila = Array.from(tbodyC.rows).indexOf(fila)+1;
      const input = e.target;

      if (input.files.length === 0) return;
       
      const archivo = input.files[0];
      
    if (e.target.name?.startsWith("CotizacionAdquisicionG1_TCR")){  
             document.getElementById(`nombreCotizacion_TCR${numeroFila}`).value=archivo.name;

             for (const fila of tbody4.rows) {
                        const select = fila.querySelector(
                                        'select[name^="nombreCotizacion_T4R"]'
                                       );

                        const option = document.createElement("option");

                        option.value = numeroFila;
                        option.textContent = archivo.name;

                        select.appendChild(option);
             }
  
    }
    if(e.target.name?.startsWith("CotizacionAdquisicionG2_TCR")){

            document.getElementById(`nombreCotizacion2_TCR${numeroFila}`).value=archivo.name;
            for (const fila of tbody4.rows) {
                        const select = fila.querySelector(
                                        'select[name^="nombreCotizacion2_T4R"]'
                                       );

                        const option = document.createElement("option");

                        option.value = numeroFila;
                        option.textContent = archivo.name;

                        select.appendChild(option);
             }
    }
});




























//----------------------------------------Archivos y su mecanismo-----------------------------------------------------


/*
document.addEventListener("change", (e) => {

  if (!e.target.matches(".archivoInput")) return;

  const input = e.target;
  const contenedor = input.closest(".contenedorArchivo");

  const nombre = contenedor.querySelector(".nombreArchivo");
  let nombresFiles="";
  if (input.files.length > 0) {
   for(int =1;i<input.files.length;i++) {
     nombresFiles+= input.files[i].name;
   };
   nombre.textContent=nombresFiles; 
   input.style.display = "none";

  }

});
*/
//-------------------------------------------------------------------------------


/*
document.addEventListener("change", (e) => {

    if (!e.target.matches(".archivoInput")) return;

    const input = e.target;
    const contenedor = input.closest(".contenedorArchivo");
    const nombre = contenedor.querySelector(".nombreArchivo");

    if (input.files.length === 0) return;

    // Agregar el nombre de cada archivo
    [...input.files].forEach(file => {

        const archivoNombre = document.createElement("div");

        archivoNombre.textContent = file.name;

        nombre.appendChild(archivoNombre);
    });


    // Si NO es de los que aceptan archivos sucesivos,
    // aquí terminamos.
    if (input.matches(".archivoMultipleInput")){
          const nuevoInput = input.cloneNode();

          nuevoInput.value = "";
          nuevoInput.style.display = "";

    contenedor.appendChild(nuevoInput);
    };


    // Este input conserva el archivo seleccionado
    input.style.display = "none";


    // Crear otro input para seleccionar el siguiente
    

});


document.addEventListener("click", (e) => {

    if (!e.target.matches(".borrarArchivo")) return;

    const contenedor = e.target.closest(".contenedorArchivo");
    const inputs = contenedor.querySelectorAll(".archivoInput");
    const nombre = contenedor.querySelector(".nombreArchivo");

    // Dejamos únicamente el último input
    const inputPrincipal = inputs[inputs.length - 1];

    // Eliminamos los demás inputs que contienen archivos
    inputs.forEach(input => {
        if (input !== inputPrincipal) {
            input.remove();
        }
    });

    // Limpiamos el input que dejamos
    inputPrincipal.value = "";
    inputPrincipal.style.display = "block";

    // Limpiamos los nombres
    nombre.textContent = "";
});

*/




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




document.addEventListener("click", (e) => {

    if (!e.target.matches(".borrarArchivo")) return;

    const item = e.target.closest(".archivoItem");

    // Recuperamos el input correspondiente
    const input = item.inputArchivo;

    // Eliminamos el input que contiene ESE archivo
    input.remove();

    // Eliminamos su nombre de la pantalla
    item.remove();
});




//------------------------------------------------------------------------
/*
document.addEventListener("change", (e) => {
  if (!e.target.matches(".archivoInput")) return;

  const input = e.target;
  const contenedor = input.closest(".contenedorArchivo");
  const nombre = contenedor.querySelector(".nombreArchivo");

  if (input.files.length > 0) {
    nombre.innerHTML = [...input.files]
      .map(file => file.name)
      .join("<br>");
//----------------
      if (e.target.matches(".archivoMultipleInput")){
           const nuevoInput = input.cloneNode();
           nuevoInput.value = "";
           contenedor.appendChild(nuevoInput);
      }; 
//---------------------------- 
      input.style.display = "none";
  }
});

*/


/*
document.addEventListener("click", (e) => {

  if (!e.target.matches(".borrarArchivo")) return;

  const contenedor = e.target.closest(".contenedorArchivo");

  const input = contenedor.querySelector(".archivoInput");

  const nombre = contenedor.querySelector(".nombreArchivo");

  input.value = "";

  input.style.display = "block";

  nombre.textContent = "";

});
*/















//---------------------------Definicion de variables para selects de D Generales-------------------------------

// const secretariaInput = document.getElementById("secretaria");
// const direccionInput = document.getElementById("direccion");
// const nivelInput = document.getElementById("nivel");


/*
const dependenciaInput = document.getElementById("dependencia");

const dependenciaEncabezado = document.getElementById("dependenciaSolicitud");

*/

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





document.getElementById("tablaBody4").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T4R")) return;

  const filas = document.querySelectorAll("#tablaBody4 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila4();
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
/*
document.getElementById("tablaBody6").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T6R")) return;

  const filas = document.querySelectorAll("#tablaBody6 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila6();
  }
});
*/


//Recuerda agregar esta misma funcion para cada tabla en caso de que las 4 tablas queden en la misma pagina cosa que aun no decido
//----------------------------------------rellenado automatico de Nivel y dependencia----------------------------------------------
//nivelInput.addEventListener("change", generarNivel);
//dependenciaInput.addEventListener("change", generarDependencia);














/*
function generarNivel() {
  const select = nivelInput;
  const texto = select.options[select.selectedIndex].text;

  const celdasNivel = document.querySelectorAll("[id^='nivelR']");
  celdasNivel.forEach(celda => {
    celda.textContent = texto;
  });
}
*/

function generarDependencia() {
  const valor = dependenciaInput.value.trim();
  const celdasDep = document.querySelectorAll("[id^='dependenciaR']");
  celdasDep.forEach(celda => celda.textContent = valor);
}

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



const opciones = ["Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)",
                  "Defensoría de los Derechos Politécnicos",
                  "Secretaría General",
                  //Direcion General
                  "Dirección General",
                  "Coordinación Politécnica para la Sustentabilidad",
                  //Abogado General
                  "Oficina del Abogado General",
                  "Dirección de Asuntos Jurídicos",
                  "Dirección de Convenios y Trámite Registral",  
                  "Dirección de Legislación, Consulta y Transparencia",    
                  //Presidencia del decanato 
                  "Presidencia del Decanato",

                  //Secretaria Academica
                 'Centro de Estudios Tecnológicos (CET 1)"Walter Cross Buchanan"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 1) "Gonzalo Vázquez Vela"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 5) "Benito Juárez"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 6) "Miguel Othón De Mendizábal"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 9) "Juan De Dios Bátiz"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 11) "Wilfrido Massieu"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 14) "Luis Enrique Erro"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 16) "Hidalgo"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 17) "León, Guanajuato"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Leona Vicario"',
                 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"',
                 "Dirección de Educación Media Superior",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco",
                 "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán",
                 "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco",
                 "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco", 
                 "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán",
                 "Escuela Superior de Ingeniería Textil (ESIT)",
                 "Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)",
                 "Escuela Superior de Física y Matemáticas (ESFM)",
                 "Escuela Superior de Cómputo (ESCOM)",
                 "Escuela Nacional de Ciencias Biológicas (ENCB)",
                 "Escuela Superior de Medicina (ESM)",
                 "Escuela Nacional de Medicina y Homeopatía (ENMH)",
                 "Escuela Superior de Enfermería y Obstetricia (ESEO)",
                 "Centro Interdisciplinario de Ciencias de la Salud (CICS)Unidad Milpa Alta",
                 "Centro Interdisciplinario de Ciencias de la Salud (CICS) Unidad Santo Tomás",
                 "Escuela Superior de Comercio y Administración (ESCA) Unidad Santo Tomás",
                 "Escuela Superior de Comercio y Administración (ESCA) Unidad Tepepan",
                 "Escuela Superior de Economía (ESE)",
                 "Escuela Superior de Turismo (EST)",
                 "Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)",
                 "Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)",
                 "Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo (UPIIH)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)",
                 "Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Palenque (UPIIP)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Coahuila (UPIIC)",
                 "Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT)",
                 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)',
                 "Dirección de Educación Superior",
                 "Dirección de Educación Virtual",
                 "Dirección de Formación e Innovación Educativa",
                 "Dirección de Formación en Lenguas Extranjeras",
                 "Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco",
                 "Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás",           
                 "Secretaría Académica",
                     
                                  
                 //Secretaria Administrativa
                 "Secretaría de Administración",
                 "Dirección de Capital Humano",
                 "Dirección de Programación y Presupuesto",
                 "Dirección de Recursos Financieros",
                 "Dirección de Recursos Materiales e Infraestructua",
                 "Dirección de Servicios Generales",
                 "Coordinación de Centros de Desarrollo Infantil",
                 
                 //Secretaria de Inovacion e Integracion Social
                 
                 "Centro de Vinculación y Desarrollo Regional (CVDR),Unidad Cajeme -Sonora",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Durango",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Los Mochis",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Morelia",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tampico",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tijuana",
                 "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tlaxcala", 
                 "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Cuidad Juárez, Chihuahua",
                 "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Papantla, Veracruz",
                 "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla",
                 "Dirección de Vinculación y Desarrollo Regional",
                 "Secretaría de Innovación e Integración Social",
                 "Dirección de Egresados y Servicio Social",
                 "Dirección de Relaciones Internacionales",
                 "Dirección de Servicios Empresariales y Transferencia Tecnológica",
                 "Dirección de Incubación de Empresas Tecnológicas",
                 "Dirección de Prospectiva e Inteligencia Tecnológica Tecnópoli",
                 




                 //Secretaria de Investigacion y Posgrado
                 "Dirección de Investigación",
                 "Secretaría de Investigación y Posgrado",
                 "Dirección de Posgrado",
                 "Dirección de Difusión de Ciencia y Tecnología",
                 "Centro de Desarrollo Aeroespacial (CDA)",
                 "Centro de Nanociencias y Micro y Nanotecnologías (CNMN)",
                 "Centro Interdisciplinario de Ciencias Marinas (CICIMAR)",
                 "Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente Y Desarrollo (CIIEMAD)",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Sinaloa",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Michoacán",
                 "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca",
                 "Centro de Desarrollo de Productos Bióticos (CEPROBI)",
                 "Centro de Biotecnología Genómica (CBG)",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro",
                 "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada  (CICATA), Unidad Morelos",
                 "Centro de Investigación en Computación (CIC)",
                 "Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)",
                 "Centro de Investigaciones Económicas, Administrativas y Sociales (CIECAS)",
                 "Centro de Investigación en Biotecnología Aplicada, IPN -Tlaxcala (CIBA)",
                 "Centro de Innovación y Desarrollo Tecnológico En Cómputo (CIDETEC)",
                 "Centro de Investigación e Innovación Tecnológica (CIITEC)",
                 "Centro Mexicano para la Producción Más Limpia (CMP+L)",




                 "Secretaría de Servicios Educativos",
                 "Dirección de Administración Escolar",
                 "Dirección de Difusión Cultural",
                 "Dirección de Actividades Deportivas",
                 "Dirección de Bibliotecas y Publicaciones",
                 "Dirección de Apoyos a Estudiantes",


                 //Coordinacion General de Planeacion e Informacion Institucional
                 
                 "Coordinación General de Planeación e Información Institucional",
                 "Dirección de Planeación y Organización",
                 "Dirección de Información Institucional",



                 // Coordinación de Imagen Institucional
                 
                 "Coordinación de Imagen Institucional",
                 
                 
                 //Centro Nacional de Calculo
                 
                 "Centro Nacional de Cálculo (CENAC)",
                 "Dirección de cómputo y comunicaciones",                 
                 "Dirección de sistemas informáticos",
                 
                   
                 //Estacion de Radio
                 
                 "Estación de Radiodifusión Radio IPN XHIPN-FM 95.7 MHZ.",
                 
                 "Patronato de Obras e Instalaciones  (POI)",
                 "Comisión de Operación y Fomento de Actividades Académicas (COFAA)"
                 ];
                 
  
const dependencias =new Map( [
              [ "FDN-UPGPG-001","Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)"],                                                                                                     
              [ "FDN-DDP-002","Defensoría de los Derechos Politécnicos"],                                                                                                     
              [ "FDN-SG-003","Secretaría General"],                                                                                                                                                                                                           
              [ "FDN-DG-004","Dirección General"],                                                                                                     
              [ "FDN-CPS-005","Coordinación Politécnica para la Sustentabilidad"],                                                                                                     
              [ "FDN-OAG-006","Oficina del Abogado General"],                                                                                                     
              [ "FDN-DAJ-007","Dirección de Asuntos Jurídicos"],                                                                                                                                                                                  
              [ "FDN-DCT-008","Dirección de Convenios y Trámite Registral"],                                                                                                       
              [ "FDN-LCT-009","Dirección de Legislación, Consulta y Transparencia"],                                                                                                 
              [ "FDN-PD-010","Presidencia del Decanato"],                                                                                                 
              [ "FDN-CET1-011",'Centro de Estudios Tecnológicos (CET 1)"Walter Cross Buchanan"'],                                                                                                 
              [ "FDN-CECyT1-012", 'Centro de Estudios Científicos y Tecnológicos (CECYT 1) "Gonzalo Vázquez Vela"'],
              [ "FDN-CECyT2-013", 'Centro de Estudios Científicos y Tecnológicos (CECYT 2) "Miguel Bernard"'],
              [ "FDN-CECyT3-014", 'Centro de Estudios Científicos y Tecnológicos (CECYT 3) "Estanislao Ramírez Ruiz"'],
              [ "FDN-CECyT4-015", 'Centro de Estudios Científicos y Tecnológicos (CECYT 4) "Lázaro Cárdenas"'],
              [ "FDN-CECyT5-016", 'Centro de Estudios Científicos y Tecnológicos (CECYT 5) "Benito Juárez"'],
              [ "FDN-CECyT6-017", 'Centro de Estudios Científicos y Tecnológicos (CECYT 6) "Miguel Othón De Mendizábal"'],
              [ "FDN-CECyT7-018", 'Centro de Estudios Científicos y Tecnológicos (CECYT 7) "Cuauhtémoc"'],
              [ "FDN-CECyT8-019", 'Centro de Estudios Científicos y Tecnológicos (CECYT 8) "Narciso Bassols"'],
              [ "FDN-CECyT9-020", 'Centro de Estudios Científicos y Tecnológicos (CECYT 9) "Juan De Dios Bátiz"'],
              [ "FDN-CECyT10-021", 'Centro de Estudios Científicos y Tecnológicos (CECYT 10) "Carlos Vallejo Márquez"'],
              [ "FDN-CECyT11-022", 'Centro de Estudios Científicos y Tecnológicos (CECYT 11) "Wilfrido Massieu"'],
              [ "FDN-CECyT12-023", 'Centro de Estudios Científicos y Tecnológicos (CECYT 12) "José María Morelos"'],
              [ "FDN-CECyT13-024", 'Centro de Estudios Científicos y Tecnológicos (CECYT 13) "Ricardo Flores Magón"'],
              [ "FDN-CECyT14-025", 'Centro de Estudios Científicos y Tecnológicos (CECYT 14) "Luis Enrique Erro"'],
              [ "FDN-CECyT15-026", 'Centro de Estudios Científicos y Tecnológicos (CECYT 15) "Diódoro Antúnez Echegaray"'],
              [ "FDN-CECyT16-027", 'Centro de Estudios Científicos y Tecnológicos (CECYT 16) "Hidalgo"'],
              [ "FDN-CECyT17-028", 'Centro de Estudios Científicos y Tecnológicos (CECYT 17) "León, Guanajuato"'],
              [ "FDN-CECyT18-029", 'Centro de Estudios Científicos y Tecnológicos (CECYT 18) "Zacatecas"'],
              [ "FDN-CECyT19-030", 'Centro de Estudios Científicos y Tecnológicos (CECYT 19) "Leona Vicario"'],
              [ "FDN-CECyT20-031", 'Centro de Estudios Científicos y Tecnológicos (CECYT 20) "Natalia Serdán Alatriste"'],
              [ "FDN-DIEMS-032", "Dirección de Educación Media Superior"],
              [ "FDN-ESIME-Zacatenco-033", "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco"],
              [ "FDN-ESIME-Culhuacán-034", "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Culhuacán"],
              [ "FDN-ESIME-Azcapotzalco-035", "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Azcapotzalco"],
              [ "FDN-ESIME-Ticomán-036", "Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Ticomán"],
              [ "FDN-ESIA-Zacatenco-037", "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Zacatenco"],
              [ "FDN-ESIA-Tecamachalco-038", "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Tecamachalco"],
              [ "FDN-ESIA-Ticoman-039", "Escuela Superior de Ingeniería y Arquitectura (ESIA), Unidad Ticomán"],
              [ "FDN-ESIT-040", "Escuela Superior de Ingeniería Textil (ESIT)"],
              [ "FDN-ESIQIE-041", "Escuela Superior de Ingeniería Química E Industrias Extractivas (ESIQIE)"],
              [ "FDN-ESFM-042", "Escuela Superior de Física y Matemáticas (ESFM)"],
              [ "FDN-ESCOM-043", "Escuela Superior de Cómputo (ESCOM)"],
              [ "FDN-ENCB-044", "Escuela Nacional de Ciencias Biológicas (ENCB)"],
              [ "FDN-ESM-045", "Escuela Superior de Medicina (ESM)"],
              [ "FDN-ENMH-046", "Escuela Nacional de Medicina y Homeopatía (ENMH)"],
              [ "FDN-ESEO-047", "Escuela Superior de Enfermería y Obstetricia (ESEO)","Escuela Superior de Enfermería y Obstetricia (ESEO)"],
              [ "FDN-CICS-MilpaAlta-048", "Centro Interdisciplinario de Ciencias de la Salud (CICS)Unidad Milpa Alta"],
              [ "FDN-CICS-SantoTomas-049", "Centro Interdisciplinario de Ciencias de la Salud (CICS) Unidad Santo Tomás"],
              [ "FDN-ESCA-SantoTomas-050", "Escuela Superior de Comercio y Administración (ESCA) Unidad Santo Tomás"],
              [ "FDN-ESCA-Tepepan-051", "Escuela Superior de Comercio y Administración (ESCA) Unidad Tepepan"],
              [ "FDN-ESE-052", "Escuela Superior de Economía (ESE)"],
              [ "FDN-EST-053", "Escuela Superior de Turismo (EST)"],
              [ "FDN-ENBA-054", "Escuela Nacional de Biblioteconomía y Archivonomía (ENBA)"],
              [ "FDN-UPIITA-055", "Unidad Profesional Interdisciplinaria en Ingeniería y Tecnologías Avanzadas (UPIITA)"],
              [ "FDN-UPIICSA-056", "Unidad Profesional Interdisciplinaria de Ingeniería y Ciencias Sociales y Administrativas (UPIICSA)"],
              [ "FDN-UPIBI-057", "Unidad Profesional Interdisciplinaria de Biotecnología (UPIBI)"],
              [ "FDN-UPIIH-Hidalgo-058", "Unidad Profesional Interdisciplinaria de Ingeniería Campus Hidalgo (UPIIH)"],
              [ "FDN-UPIIG-Guanajuato-59", "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Guanajuato (UPIIG)"],
              [ "FDN-UPIIZ-Zacatecas-60", "Unidad Profesional Interdisciplinaria de Ingeniería, Campus Zacatecas (UPIIZ)"],
              [ "FDN-UPIEM-061", "Unidad Profesional Interdisciplinaria de Energía y Movilidad (UPIEM)"],
              [ "FDN-UPIIP-Palenque-062", "Unidad Profesional Interdisciplinaria de Ingeniería Campus Palenque (UPIIP)"],
              [ "FDN-UPIIC-Coahuila-063", "Unidad Profesional Interdisciplinaria de Ingeniería Campus Coahuila (UPIIC)"],
              [ "FDN-UPIIT-Tlaxcala-064", "Unidad Profesional Interdisciplinaria de Ingeniería Campus Tlaxcala (UPIIT)"],
              [ 'FDN-UPIIAP-Puebla-065', 'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)'],
              [ "FDN-DES-066", "Dirección de Educación Superior"],
              [ "FDN-DEV-067", "Dirección de Educación Virtual"],
              [ "FDN-DFIE-068", "Dirección de Formación e Innovación Educativa"],
              [ "FDN-DFLE-069", "Dirección de Formación en Lenguas Extranjeras"],
              [ "FDN-CENLEX-Zacatenco-70", "Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco"],
              [ "FDN-CENLEX-SantoTomas-071", "Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás"],
              [ "FDN-SA-072", "Secretaría Académica"],
              [ "FDN-SAD-073", "Secretaría de Administración"],
              [ "FDN-DCH-074", "Dirección de Capital Humano"],
              [ "FDN-DPP-075", "Dirección de Programación y Presupuesto"],
              [ "FDN-DRF-076", "Dirección de Recursos Financieros"],
              [ "FDN-DRMI-077", "Dirección de Recursos Materiales e Infraestructua"],
              [ "FDN-DSG-078", "Dirección de Servicios Generales"],
              [ "FDN-CCDI-079", "Coordinación de Centros de Desarrollo Infantil"],
              [ "FDN-CVDR-Cajeme-080", "Centro de Vinculación y Desarrollo Regional (CVDR),Unidad Cajeme -Sonora"],
              [ "FDN-CVDR-Campeche-81", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Campeche"],
              [ "FDN-CVDR-Cancun-082", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Cancún"],
              [ "FDN-CVDR-Culiacan-083", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Culiacán"],
              [ "FDN-CVDR-Durango-084", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Durango"],
              [ "FDN-CVDR-LosMochis-085", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Los Mochis"],
              [ "FDN-CVDR-Mazatlan-086", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Mazatlán"],
              [ "FDN-CVDR-Morelia-087", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Morelia"],
              [ "FDN-CVDR-Oaxaca-088", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Oaxaca"],
              [ "FDN-CVDR-Tampico-089", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tampico"],
              [ "FDN-CVDR-Tijuana-090", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tijuana"],
              [ "FDN-CVDR-Tlaxcala-091", "Centro de Vinculación y Desarrollo Regional (CVDR), Unidad Tlaxcala"],
              [ "FDN-CIITA-Ciudad Juarez-092", "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Cuidad Juárez, Chihuahua"],
              [ "FDN-CIITA-Papantla-093", "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Papantla, Veracruz"],
              [ "FDN-CIITA-Puebla-094", "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla"],
              [ "FDN-DVDR-095", "Dirección de Vinculación y Desarrollo Regional"],
              [ "FDN-SIIS-096", "Secretaría de Innovación e Integración Social"],
              [ "FDN-DESS-097", "Dirección de Egresados y Servicio Social"],
              [ "FDN-DRI-098", "Dirección de Relaciones Internacionales"],
              [ "FDN-DSETT-099", "Dirección de Servicios Empresariales y Transferencia Tecnológica"],
              [ "FDN-DIET-100", "Dirección de Incubación de Empresas Tecnológicas"],
              [ "FDN-DPIT-101 - Tecnópoli", "Dirección de Prospectiva e Inteligencia Tecnológica Tecnópoli"],
              [ "FDN-DI-102", "Dirección de Investigación"],
              [ "FDN-SIP-103", "Secretaría de Investigación y Posgrado"],
              [ "FDN-DP-104", "Dirección de Posgrado"],
              [ "FDN-DDCyT-105", "Dirección de Difusión de Ciencia y Tecnología"],
              [ "FDN-CDA-106", "Centro de Desarrollo Aeroespacial (CDA)"],
              [ "FDN-CNMN-107", "Centro de Nanociencias y Micro y Nanotecnologías (CNMN)"],
              [ "FDN-CICIMAR-108", "Centro Interdisciplinario de Ciencias Marinas (CICIMAR)"],
              [ "FDN-CIIEMAD-109", "Centro Interdisciplinario de Investigación y Estudios Sobre Medio Ambiente Y Desarrollo (CIIEMAD)"],
              [ "FDN-CIIDIR-Durango-110", "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Durango"],
              [ "FDN-CIIDIR-Sinaloa-111", "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Sinaloa"],
              [ "FDN-CIIDIR-Michoacán-112", "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Michoacán"],
              [ "FDN-CIIDIR-Oaxaca-113", "Centro Interdisciplinario de Investigación para el Desarrollo Integral Regional (CIIDIR), Unidad Oaxaca"], 
              [ "FDN-CEPROBI-114", "Centro de Desarrollo de Productos Bióticos (CEPROBI)"],
              [ "FDN-CBG-115", "Centro de Biotecnología Genómica (CBG)"],
              [ "FDN-CICATA-Legaria-116", "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Legaría"],
              [ "FDN-CICATA-Altamira-117", "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Altamira"],
              [ "FDN-CICATA-Querétaro-118", "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada (CICATA), Unidad Querétaro"],
              [ "FDN-CICATA-Morelos-119", "Centro de Investigación en Ciencia Aplicada y Tecnología Avanzada  (CICATA), Unidad Morelos"],
              [ "FDN-CIC-120", "Centro de Investigación en Computación (CIC)"],
              [ "FDN-CITEDI-121", "Centro de Investigación y Desarrollo de Tecnología Digital (CITEDI)"],
              [ "FDN-CIECAS-122", "Centro de Investigaciones Económicas, Administrativas y Sociales (CIECAS)"],
              [ "FDN-CIBA-Tlaxcala-123", "Centro de Investigación en Biotecnología Aplicada, IPN -Tlaxcala (CIBA)"],
              [ "FDN-CIDETEC-124", "Centro de Innovación y Desarrollo Tecnológico En Cómputo (CIDETEC)"],
              [ "FDN-CIITEC-125", "Centro de Investigación e Innovación Tecnológica (CIITEC)"],
              [ "FDN-CMP+L-126", "Centro Mexicano para la Producción Más Limpia (CMP+L)"],
              [ "FDN-SSE-127", "Secretaría de Servicios Educativos"],
              [ "FDN-DAE-128", "Dirección de Administración Escolar"],
              [ "FDN-DDC-129", "Dirección de Difusión Cultural"],
              [ "FDN-DAD-130", "Dirección de Actividades Deportivas"],
              [ "FDN-DBP-131", "Dirección de Bibliotecas y Publicaciones"],
              [ "FDN-DAE-132", "Dirección de Apoyos a Estudiantes"],
              [ "FDN-CGPII-133", "Coordinación General de Planeación e Información Institucional"],
              [ "FDN-DPO-134", "Dirección de Planeación y Organización"],
              [ "FDN-DII-135", "Dirección de Información Institucional"],
              [ "FDN-CII-136", "Coordinación de Imagen Institucional"],
              [ "FDN-CENAC-137", "Centro Nacional de Cálculo (CENAC)"],
              [ "FDN-DCC-138", "Dirección de cómputo y comunicaciones"],
              [ "FDN-DSI-139", "Dirección de sistemas informáticos"],
              [ "FDN-Radio-IPN-140", "Estación de Radiodifusión Radio IPN XHIPN-FM 95.7 MHZ."],
              [ "FDN-POI-141", "Patronato de Obras e Instalaciones  (POI)"],
              [ "FDN-COFAA-142", "Comisión de Operación y Fomento de Actividades Académicas (COFAA)"]
              ]);


                 
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


/*
document.getElementById("tablaBody6").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});

*/


//----------------------Agregar fila


                                    













 






//-----------------------Agergar fila tabla 1

/*
function agregarFila6(){
  const tbody = document.getElementById("tablaBody6");
  const i = obtenerNumeroFila6();


  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcademico_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td>
    <textarea
        name="Espacio_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea></td>
    
    <td>
      <textarea
        name="nombredelEquipo_T6R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    

    <td>
      <textarea
        name="especificaciones_T6R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

      

    <td class="cantidadCol">

      <input type="number" name="cantidadBuen_estado_T6R${i}" class="input_tabla " aria-label="Cantidad en buen estado"> </input>  
    
      </td>
    <td class="cantidadCol">

      <input type="number" name="cantidadRegular_estado_T6R${i}" class="input_tabla " aria-label="Cantidad en estado Regular"> </input>  
    
      </td>
     

`;

  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}


*/




function obtenerNumeroFila1(){
  return document.querySelectorAll("#tablaBody tr").length -1;
}
function obtenerNumeroFila1_1(){
  return document.querySelectorAll("#tablaBody1_1 tr").length -1;
}


function obtenerNumeroFila2(){
  return document.querySelectorAll("#tablaBody2 tr").length - 1;
}

function obtenerNumeroFila3(){
  return document.querySelectorAll("#tablaBody3 tr").length - 1;
}

function obtenerNumeroFilaC(){
  return document.querySelectorAll("#tablaCotizaciones tr").length + 1;
}

function obtenerNumeroFila4(){
  return document.querySelectorAll("#tablaBody4 tr").length - 1;
}

function obtenerNumeroFila5(){
  return document.querySelectorAll("#tablaBody5 tr").length - 1;
}

/*
function obtenerNumeroFila6(){
  return document.querySelectorAll("#tablaBody6 tr").length + 1;
}

*/


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












//------------------------Separacion de tablas por ventana
/*function siguiente(numero){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numero+1}`)
    .classList.add("activo");
}

*/

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







const direccionEnlace="https://script.google.com/macros/s/AKfycbxMWW1L4i_8R0b8GM9M-Hn3WOYriq_-GKdkYoauB5PfN8N-XOlG85jMrzuama1AnPr_/exec"

let folioActual=null;
let edicionActual=null;
let numerodeEnvio=0;
let ExistenciaDeCotizaciones=false;

let ExistenciaDeCotizaciones_T4=false;


let ExistenciaDeCotizacionesA2=false;



let ExistenciaDeCotizacionesA2_T4=false;



/*
CotizacionAdquisicionG1_TCR
CotizacionAdquisicionG2_TCR
CotizacionAdquisicion_T4R
CotizacionAdquisicion2_T4R
*/
//---------------------------GuardarBorrador--------------------------------------------------


  document.getElementById("guardarBorrador").addEventListener("click", async () => {
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
  /*
  data.__filas6 = document.querySelectorAll("#tablaBody6 tr").length;
  
  */
  if(folioActual==null){
             folioActual = generarFolio();
  }
  data.__folio = folioActual;




try {
/*  
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "guardarBorrador", data})
    });

*/

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
      alert(`✅ Borrador  de la dependencia ${data.dependencia} guardado correctamente. Recuerda que tu solicitud esta para : ${data.tipoDeSolicitud}`);
    } else {
      alert("⚠️ Error al guardar el borrador: " + json.message);
    }
  } catch (e) {
    alert("⚠️ Error de conexión al guardar el borrador"+e.message);
  }

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

  tbody.innerHTML = `<tr>
                                                                             <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
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

                                                                            <tr>
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
                                                         tbody1.innerHTML = `<tr>
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
                                                                         <tr>
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
  tbody2.innerHTML = `<tr>
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
                               
                                                              <tr>
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
  tbody3.innerHTML = `<tr>
                                                                <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>

                                                                 <td title="Edificio" id="Edificio_T3E1" class="ejemplo">
                                                                          
                                                                 </td>
                                             
                                                                 <td title="MetrosCuadrados" id="MetrosCuadrados_T3E1" class="ejemplo">
                                                                       
                                                                 </td>   
                                                                 
                                                                 
                                                            </tr>
                                                            <tr>
                                                                 <td title="Numero de Fila" class="ejemplo">
                                                                                                                        
                                                                              </td>
                                                                 <td title="Edificio" id="Edificio_T3E2" class="ejemplo">
                                                                       
                                                                 </td>
                                             
                                                                 <td title="MetrosCuadrados" id="MetrosCuadrados_T3E2" class="ejemplo">
                                                                       
                                                                 </td>   
                                                                 
                                                                 
                                                            </tr>`;
  tbodyC.innerHTML = ``;

  tbody4.innerHTML = `<tr>
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
                                                                                                                                             
                                                                    <td title=" Especificaciones Técnicas del Equipo" id="Especificaciones_T4E1" class="ejemplo">
                                                                         Características /Especificaciones Técnicas                                                                                                              
                                                                    </td>                                                                                                              
                                                                                                                                                                                 
                                                                    <td title="Justificación (Equipo no Existente, Sustitución o Complemento)" id="Justificacion_T4E1" class="ejemplo">
                                                                        Justificación Porque se requiere el equipo; las cantidades; las funciones que realizara; Mejora operativa obtenida
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                    <td title="Precio unitario Adquisición Alternativa 1 (Sin IVA)" id="PrecioUnitario_T4E1" class="ejemplo">
                                                                        Precio unitario Adquisición Alternativa 1 (Sin IVA)                                                                                                                                                                                                                          
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
                                                                                                                                             
                                                                    <td title="Nombre del Archivo de la Cotización de Adquisición 2" id="NombreArch2_T4E1" class="ejemplo">
                                                                        Nombre de la Cotización 2 (En la tabla anterior)                                                                                                             
                                                                    </td>                                                                                                                
                                                                                                             
                                                                    <td title="Cotización de Adquisición 2" id="Cotizacion2_T4E1" class="ejemplo paso">
                                                                        Cotización de Adquisición 2                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                               </tr>                                                                                                              


                                                               <tr>
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
                                                                                                                                             
                                                                    <td title=" Especificaciones Técnicas del Equipo" id="Especificaciones_T4E2" class="ejemplo">
                                                                         Características /Especificaciones Técnicas                                                                                                              
                                                                    </td>                                                                                                              
                                                                                                                                                                                 
                                                                    <td title="Justificación (Equipo no Existente, Sustitución o Complemento)" id="Justificacion_T4E2" class="ejemplo">
                                                                        Justificación Porque se requiere el equipo; las cantidades; las funciones que realizara; Mejora operativa obtenida
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                                                                                                                                                                                          
                                                                                                                                                                                                                          
                                                                    <td title="Precio unitario Adquisición Alternativa 1 (Sin IVA)" id="PrecioUnitario_T4E2" class="ejemplo">
                                                                        Precio unitario Adquisición Alternativa 1 (Sin IVA)                                                                                                                                                                                                                          
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
                                                                                                                                             
                                                                    <td title="Nombre del Archivo de la Cotización de Adquisición 2" id="NombreArch2_T4E2" class="ejemplo">
                                                                        Nombre de la Cotización 2 (En la tabla anterior)                                                                                                             
                                                                    </td>                                                                                                                
                                                                                                             
                                                                    <td title="Cotización de Adquisición 2" id="Cotizacion2_T4E2" class="ejemplo paso">
                                                                        Cotización de Adquisición 2                                                                                                             
                                                                    </td>                                                                                                             
                                                                                                                                                                                 
                                                               </tr>`;
  tbody5.innerHTML = `<tr>
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
                                                                                                                                                                                                                                                                  
                                                                    <td title=" Especificaciones y Desempeño Operativo" id="Especificaciones_T5E1" class="ejemplo">                                                                                                                                                                                              
                                                                         Especificaciones y Desempeño Operativo                                                                                                                                                                                               
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
                                                               
                                                               
                                                               <tr>
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
                                                                    
                                                                    <td title=" Especificaciones y Desempeño Operativo" id="Especificaciones_T5E2" class="ejemplo">
                                                                         Especificaciones y Desempeño Operativo 
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
    campo.value = data[name];
    
    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });
  // generarNivel();
  // generarDependencia();
}



//-------------------------------------CargarDep---------------------------------

//const folioValor = document.getElementById("folioInput");

//const folio = folioValor.value.trim();

//  const folio = document.getElementById("folioInput").value.trim();
  

//folioActual=folio;

//  alert("ANtes de cargar dep: "+folioActual);

function obtenerDependencia(folioA) {
     
 // const clave = extraerClaveDependencia(folio);

    return dependencias.get(folioA) ?? "Dependencia no encontrada";
}

function cargarDep(){

const    folio = document.getElementById("folioInput").value.trim();

   folioActual=folio;
    if (!folio) {
        alert("Escribe un folio primero.");
        return;
    }

    const dependenciaB = obtenerDependencia(folio);

    setSelectValue("dependencia", dependenciaB);    
       
             
}
// document.querySelector("#dependencia").value = ;



document.getElementById("cargarDependencia").addEventListener("click", cargarDep);




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

      
const resC = await fetch(direccionEnlace,{
    method:"POST",
    body: JSON.stringify({
        action:"ObtenerConfiguracion"
    })
});
const config = await resC.json();
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











const resC = await fetch(direccionEnlace,{
    method:"POST",
    body: JSON.stringify({
        action:"ObtenerConfiguracion"
    })
});
const config = await resC.json();
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
                             
                             
                             
                             
                             
                             
                             
                             
                             


    document.getElementById("UsuariosHAnio1").textContent = config.encabezado1;
    document.getElementById("UsuariosMAnio1").textContent = config.encabezado2;
    document.getElementById("UsuariosHAnio2").textContent = config.encabezado3;
    document.getElementById("UsuariosMAnio2").textContent = config.encabezado4;
    document.getElementById("UsuariosHAnio3").textContent = config.encabezado5;
    document.getElementById("UsuariosMAnio3").textContent = config.encabezado6;
    document.getElementById("UsuariosHAnio1Obs").textContent = config.encabezado1;
    document.getElementById("UsuariosMAnio1Obs").textContent = config.encabezado2;
    document.getElementById("UsuariosHAnio2Obs").textContent = config.encabezado3;
    document.getElementById("UsuariosMAnio2Obs").textContent = config.encabezado4;
    document.getElementById("UsuariosHAnio3Obs").textContent = config.encabezado5;
    document.getElementById("UsuariosMAnio3Obs").textContent = config.encabezado6;
    


    document.getElementById("UsuariosHAnio4").textContent = config.encabezado13;
    document.getElementById("UsuariosMAnio4").textContent = config.encabezado14;
    document.getElementById("UsuariosHAnio5").textContent = config.encabezado15;
    document.getElementById("UsuariosMAnio5").textContent = config.encabezado16;
    
    document.getElementById("UsuariosHAnio4Obs").textContent = config.encabezado13;
    document.getElementById("UsuariosMAnio4Obs").textContent = config.encabezado14;
    document.getElementById("UsuariosHAnio5Obs").textContent = config.encabezado15;
    document.getElementById("UsuariosMAnio5Obs").textContent = config.encabezado16;
    

    document.getElementById("UsuariosAHAnio1").textContent = config.encabezado7;
    document.getElementById("UsuariosAMAnio1").textContent = config.encabezado8;
    document.getElementById("UsuariosAHAnio2").textContent = config.encabezado9;
    document.getElementById("UsuariosAMAnio2").textContent = config.encabezado10;
    document.getElementById("UsuariosAHAnio3").textContent = config.encabezado11;
    document.getElementById("UsuariosAMAnio3").textContent = config.encabezado12,
    
    document.getElementById("UsuariosAHAnio1Obs").textContent = config.encabezado7;
    document.getElementById("UsuariosAMAnio1Obs").textContent = config.encabezado8;
    document.getElementById("UsuariosAHAnio2Obs").textContent = config.encabezado9;
    document.getElementById("UsuariosAMAnio2Obs").textContent = config.encabezado10;
    document.getElementById("UsuariosAHAnio3Obs").textContent = config.encabezado11;
    document.getElementById("UsuariosAMAnio3Obs").textContent = config.encabezado12;


    document.getElementById("UsuariosAHAnio4").textContent = config.encabezado17;
    document.getElementById("UsuariosAMAnio4").textContent = config.encabezado18;
    document.getElementById("UsuariosAHAnio5").textContent = config.encabezado19;
    document.getElementById("UsuariosAMAnio5").textContent = config.encabezado20;
    
    document.getElementById("UsuariosAHAnio4Obs").textContent = config.encabezado17;
    document.getElementById("UsuariosAMAnio4Obs").textContent = config.encabezado18;
    document.getElementById("UsuariosAHAnio5Obs").textContent = config.encabezado19;
    document.getElementById("UsuariosAMAnio5Obs").textContent = config.encabezado20;

};





document.querySelectorAll("#miFormulario .expandible").forEach(campo => {

    campo.addEventListener("focus", function () {
        this.classList.add("campo-ampliado");
         let leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${this.name}"]`
    );

    if (!leyenda) {

        leyenda = document.createElement("div");

        leyenda.className = "leyenda-textarea";
        leyenda.dataset.campo = this.name;

        leyenda.textContent =
            this.getAttribute("aria-label") || "Campo";

        document.body.appendChild(leyenda);
    }

    const rect = this.getBoundingClientRect();

    leyenda.style.left = rect.left + "px";
    leyenda.style.top = (rect.top - 32) + "px";
    });





   
campo.addEventListener("blur", function () {
    this.classList.remove("campo-ampliado");
    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${this.name}"]`
    );

    if (leyenda) {
        leyenda.remove();
    }

    this.style.left = "";
    this.style.top = "";

    // Esperamos a que vuelva a su tamaño normal
    requestAnimationFrame(() => {
        this.style.height = "auto";
        this.style.height = this.scrollHeight + "px";
    });
});




    let moviendo = false;
    let offsetX = 0;
    let offsetY = 0;

    campo.addEventListener("mousedown", function(e) {

        if (!this.classList.contains("campo-ampliado")) return;

        // Ctrl + clic para mover la ventana
        if (!e.ctrlKey) return;

        moviendo = true;

        const rect = this.getBoundingClientRect();

        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;

        this.style.cursor = "grabbing";

        e.preventDefault();
    });

    document.addEventListener("mousemove", function(e) {

        if (!moviendo) return;

    const left = e.clientX - offsetX;
    const top = e.clientY - offsetY;

    campo.style.left = left + "px";
    campo.style.top = top + "px";

    const leyenda = document.querySelector(
        `.leyenda-textarea[data-campo="${campo.name}"]`
    );

    if (leyenda) {
        leyenda.style.left = left + "px";
        leyenda.style.top = (top - 32) + "px";
    }

    });

    document.addEventListener("mouseup", function() {

        if (!moviendo) return;

        moviendo = false;
        campo.style.cursor = "";

    });

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




