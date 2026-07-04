const tbody = document.getElementById("tablaBody");
const tbody1 = document.getElementById("tablaBody1_1");
const tbody2 = document.getElementById("tablaBody2");
const tbody3 = document.getElementById("tablaBody3");
const tbody4 = document.getElementById("tablaBody4");
const tbodyC = document.getElementById("tablaCotizaciones");
const tbody5 = document.getElementById("tablaBody5");
const tbody6 = document.getElementById("tablaBody6");
const tbody7 = document.getElementById("tablaBody7");
let urlCotizacionesActuales={};
//------------------------------------Construccion de tabla--------------------------


for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const tr3 = document.createElement("tr");
  const tr4 = document.createElement("tr");
  const trC = document.createElement("tr");
  const tr5 = document.createElement("tr");
  const tr6 = document.createElement("tr");
  const tr7 = document.createElement("tr");
    

  tr.innerHTML = `
    <td>
      <textarea
        name="Programa_T1R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    </td>

    <td>
    <input type="number" name="Usuarios1_T1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios2_T1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    </td>
    <td> 
    <input type="number" name="Usuarios3_T1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
     </td>
    <td>
    <input type="number" name="Usuarios4_T1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios5_T1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios6_T1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    </td>
  `;
    
  tr1.innerHTML = `
    <td>
      <textarea
        name="Programa_T1_1R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    </td>
    <td>
    <input type="number" name="Usuarios1_T1_1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios2_T1_1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    </td>
    <td> 
    <input type="number" name="Usuarios3_T1_1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios4_T1_1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios5_T1_1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios6_T1_1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    </td>
  `;








tr2.innerHTML = `
    <td>
    <input name="Edificio_T2R${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="Nivel_T2R${i}" class="input_tabla" aria-label="Nivel"> </input>
    </td>

    <td>
    <input name="Espacio_T2R${i}" class="input_tabla" aria-label="Espacio"> </input>
    </td>    
    
    
    
    

      <td class="cantidadCol">

      <input type="number" name="Largo_T2R${i}" class="input_tabla " aria-label="Largo"> </input>  
    
      </td>

      
    
      <td class="cantidadCol">

              <input type="number" name="Ancho_T2R${i}" class="input_tabla " aria-label="Ancho">
              </input>  
    
      </td>
      

      <td class="cantidadCol">

      <input type="number" name="Alumnos_T2R${i}" class="input_tabla " aria-label="Numero de Alumnos"> </input>  
    
      </td>
      

   
      <td class="cantidadCol">

      <input type="number" name="Horas_T2R${i}" class="input_tabla " aria-label="Horas de Servicio"> </input>  
    
      </td>

  `;


tr3.innerHTML = `
    <td>
    <input name="Edificio_T3R${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input type="number" name="MetrosCuadrados_T3R${i}" class="input_tabla" aria-label="MetrosCuadrados"> </input>
    </td>

  `;

trC.innerHTML = `
     
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

      <input type="number" name="anio_TCR${i}" class="input_tabla " aria-label="Año de la cotizacion"> </input>  
    
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
                       class="archivoInput"
                       accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">
                 <span class="nombreArchivo"></span>
                 <button type="button" class="borrarArchivo">
                   ❌
                 </button>
     </div>            
</td>
<td>
      <input type="number" name="anioA2_TCR${i}" class="input_tabla " aria-label="Año de la cotizacion"> </input>  
    
      </td>

     




`;








tr4.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcademico_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td>
         <textarea
        name="Espacio_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea>
    </td>    
    <td>
      <textarea
        name="Clave_T4R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="clave"
        > </textarea>
      </td>
    <td>
      <textarea
        name="nombredelEquipo_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    <td class="cantidadCol">

      <input type="number" name="cantidad_T4R${i}" class="input_tabla " aria-label="Cantidad"> </input>  
    
      </td>


    <td>
      <textarea
        name="especificaciones_T4R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

    <td>
      <textarea id="justificacion_T4R${i}" name="justificacion_T4R${i}"
                   class="auto-expand input_tabla"
                   rows="1"
                   style="resize:none;"  aria-label="Justificación">
                   
      </textarea>
    </td>

    
    
     <td>
      <div class="precio-wrapper">
            <span class="peso">$</span>
            <input type="text"
                   name="precio_T4R${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio"> 
            </input>
      </div>
      </td>
    




    <td>
      <select id="nombreCotizacion_T4R${i}" name="nombreCotizacion_T4R${i}" class="tabla_select" aria-label="Nombre del archivo donde esta la Cotizacion del Equipo" >
                   <option value="">-- Selecciona una prioridad--</option>
      </select>
    </td>
    
    
    
    <td>
    <div class="contenedorArchivo">
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
            <input type="text"
                   name="precio2_T4R${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio 2"> 
            </input>
      </div>
      </td>
     
  <td>
       <select id="nombreCotizacion2_T4R${i}"
        name="nombreCotizacion2_T4R${i}"
        class="tabla_select"
        aria-label="Nombre del archivo donde esta la Cotizacion de la alternativa 2 del Equipo"
        > 
                 <option value="">-- Selecciona una prioridad--</option>
        </select>
                 
    </td>


  <td>
    <div class="contenedorArchivo">
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
      <textarea
        name="ProgramaAcademico_T5R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    
    <td >
    <textarea
        name="Espacio_T5R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea></td>


    <td>
      <textarea
        name="nombredelEquipo_T5R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    

    <td>
      <textarea
        name="especificaciones_T5R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

      <td class="cantidadCol">

      <input type="number" name="cantidadMal_estado_T5R${i}" class="input_tabla " aria-label="Cantidad en mal estado"> </input>  
    
      </td>

    <td class="cantidadCol">

      <input type="number" name="cantidadBuen_estado_T5R${i}" class="input_tabla " aria-label="Cantidad en buen estado"> </input>  
    
      </td>
    <td class="cantidadCol">

      <input type="number" name="cantidadRegular_estado_T5R${i}" class="input_tabla " aria-label="Cantidad en estado Regular"> </input>  
    
      </td>
     

`;







tr6.innerHTML = `
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






  tbody.appendChild(tr);
  tbody1.appendChild(tr1);
  tbody2.appendChild(tr2);
  tbody3.appendChild(tr3);
  tbody4.appendChild(tr4);
  tbodyC.appendChild(trC);
  tbody5.appendChild(tr5);
  tbody6.appendChild(tr6);

}
/*
//-----------------------------Actualizacion de los nombres de los archivos----------------------------------------------------------
tbodyC.addEventListener("change", e => {
  if (!(e.target.name?.startsWith("CotizacionAdquisicionG1_TCR") ||e.target.name?.startsWith("CotizacionAdquisicionG2_TCR"))) return;
      
      const fila = e.target.closest("tr");

      const numeroFila = Array.from(tbodyC.rows).indexOf(fila)+1;
      const input = e.target;

      if (input.files.length === 0) return;
       
      const archivo = input.files[0];
      
    if (e.target.name?.startsWith("CotizacionAdquisicionG1_TCR")){  
             document.getElementById(`nombreCotizacion_TCR${numeroFila}`).value=archivo.name;
  
    }
    if(e.target.name?.startsWith("CotizacionAdquisicionG2_TCR")){

            document.getElementById(`nombreCotizacion2_TCR${numeroFila}`).value=archivo.name;
    }
});
*/






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



document.addEventListener("change", (e) => {

  if (!e.target.matches(".archivoInput")) return;

  const input = e.target;
  const contenedor = input.closest(".contenedorArchivo");

  const nombre = contenedor.querySelector(".nombreArchivo");

  if (input.files.length > 0) {

    nombre.textContent = input.files[0].name;

    input.style.display = "none";

  }

});

document.addEventListener("click", (e) => {

  if (!e.target.matches(".borrarArchivo")) return;

  const contenedor = e.target.closest(".contenedorArchivo");

  const input = contenedor.querySelector(".archivoInput");

  const nombre = contenedor.querySelector(".nombreArchivo");

  input.value = "";

  input.style.display = "block";

  nombre.textContent = "";

});
















//---------------------------Definicion de variables para selects de D Generales-------------------------------

const secretariaInput = document.getElementById("secretaria");
const direccionInput = document.getElementById("direccion");
const nivelInput = document.getElementById("nivel");
const dependenciaInput = document.getElementById("dependencia");

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

document.getElementById("tablaBody6").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipo_T6R")) return;

  const filas = document.querySelectorAll("#tablaBody6 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila6();
  }
});



//Recuerda agregar esta misma funcion para cada tabla en caso de que las 4 tablas queden en la misma pagina cosa que aun no decido
//----------------------------------------rellenado automatico de Nivel y dependencia----------------------------------------------
nivelInput.addEventListener("change", generarNivel);
dependenciaInput.addEventListener("change", generarDependencia);















function generarNivel() {
  const select = nivelInput;
  const texto = select.options[select.selectedIndex].text;

  const celdasNivel = document.querySelectorAll("[id^='nivelR']");
  celdasNivel.forEach(celda => {
    celda.textContent = texto;
  });
}


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

//------------------------------Listas desplegables que dependen de otros valores

//--------------------------------1.-Secretarias-----------------------------------------------------------------
const secretarias={

SG:[{text:"Unidad Politécnica de gestión con perspectiva de género (UPGPG)",value:"UPGPG"},
        {text:"Secretaría General",value:"SG"},
        {text:"Defensoría de los Derechos Politécnicos",value:"DDP"}],
    /*  YA---------------------------------------------- */
    DG:[{text:"Dirección General", value:"DG"},
        {text:"Coordinación Politécnica para la Sustentabilidad",value:"CPPS"}
        ],
    /*  YA---------------------------------------------- */
    AG:[{text:"Oficina del Abogado General",value:"AG"},
        {text:"Dirección de Asuntos Jurídicos",value:"DAJ"}, 
        {text:"Dirección de Convenios y Trámite Registral",value:"DCTR"},  
        {text:"Dirección de Legislación, Consulta y Transparencia",value:"DLCT"}],

    DAJ:[{text:"Administrativo", value:"ADMIN_DAJ_AG"}],
    
    DCTR:[{text:"Administrativo", value:"ADMIN_DCTR_AG"}],
    
    DLCT:[{text:"Administrativo", value:"ADMIN_DLCT_AG"}],
    
    /*  YA---------------------------------------------- */ 
    PD:[{text:"Presidencia del Decanato", value:"PD"}],
     /*  YA---------------------------------------------- */
    SACAD:[{text:"Dirección de Educación Media Superior", value:"DEMS"},
        {text:"Dirección de Educación Superior", value:"DES"},
        {text:"Dirección de Formación en Lenguas Extranjeras", value:"DFLE_SA"},
        {text:"Secretaría Académica", value:"SACAD"},
        {text:"Dirección de educación virtual", value:"DEV"},
        {text:"Dirección de formación e innovación educativa", value:"DFIE"}],
        

     /*  YA---------------------------------------------- */
    SADMIN:[{text:"Secretaría de Administración",value:"SA"},
        {text:"Dirección de Capital Humano", value:"DCH"},
        {text:"Dirección de Programación y Presupuesto", value:"DPP"},
        {text:"Dirección de Recursos Financieros", value:"DRF"},
        {text:"Dirección de Recursos Materiales e Infraestructua", value:"DRMI"},
        {text:"Dirección de Servicios Generales", value:"DSG"},
        {text:"Coordinación de Centros de Desarrollo Infantil", value:"CCDI"}],
     /*  YA---------------------------------------------- */
    SIIS:[{text:"Dirección de Vinculación y Desarrollo Regional", value:"DVDR"},
          {text:"Secretaría de Innovación e Integración Social", value:"SIIS"},
          {text:"Dirección de Egresados y Servicio Social", value:"DESS"},
          {text:"Dirección de Relaciones Internacionales", value:"DRI"},
          {text:"Dirección de Servicios Empresariales y Transferencia Tecnológica", value:"DSETT"},
          {text:"Dirección de Incubación de Empresas Tecnológicas", value:"DIET"},
          {text:"Dirección de Prospectiva e Inteligencia Tecnológica Tecnópoli", value:"DPITT"}],
    /*  YA---------------------------------------------- */
    SIP:[{text:"Dirección de Investigación", value:"DI"},
         {text:"Secretaría de Investigación y Posgrado", value:"SIP"},
         {text:"Dirección de Posgrado", value:"DP"},
         {text:"Dirección de Difusión de Ciencia y Tecnología", value:"DDCT"},
         {text:"Dirección de Investigación / Dirección de Posgrado", value:"DI_DP"}],

    SSE:[{text:"Secretaría de Servicios Educativos", value:"SSE"},
         {text:"Dirección de Administración Escolar", value:"DAES"},
         {text:"Dirección de Difusión Cultural", value:"DDC_SE"},
         {text:"Dirección de Actividades Deportivas", value:"DAD"},
         {text:"Dirección de Bibliotecas y Publicaciones", value:"DBP"},
         {text:"Dirección de Apoyos a Estudiantes", value:"DAE"}],
   /*YA                    */
   CGPII:[{text:"Coordinación General de Planeación e Información Institucional", value:"CGPII"},
           {text:"Dirección de información institucional", value:"DII"},
           {text:"Dirección de Planeación y Organización", value:"DPO"}],         
   /*  YA                 */ 
   CII:[{text:"Coordinación de Imagen Institucional", value:"CII"}],
   /* YA                  */
   CENAC:[{text:"Centro Nacional de Cálculo (CENAC)", value:"CGCENAC"},
          {text:"Dirección de cómputo y comunicaciones", value:"DCC"}, 
          {text:"Dirección de sistemas informáticos", value:"DSI"}],  
   /*YA */   
    ER:[{text:"Estación de Radiodifusión XHIPN-FM 95.7 MHz", value:"ER"}],    
    POI:[{text:"Patronato de Obras e Instalaciones  (POI)", value:"POI"}],
    COFAA:[{text:"Comisión de Operación y Fomento de Actividades Académicas (COFAA)", value:"COFAA"}],
}



//---------------------Definicion de opciones de selects con base a la eleccion en a secretaria------------------------------------------------

secretariaInput.addEventListener("change", () => {
  const valor = secretariaInput.value;

  // Limpiar subcategoría
  direccionInput.innerHTML = '<option value="">-- Selecciona Direccion--</option>';
  direccionInput.disabled = !valor;

  if (!valor || !secretarias[valor]) return;

  secretarias[valor].forEach(op => {
    const option = document.createElement("option");
    option.value = op.value;
    option.textContent = op.text;
    direccionInput.appendChild(option);
  });
});



//--------------------------------2.-Direcciones-----------------------------------------------------------------




const direcciones={
                  //Secretaria General
    UPGPG:[{text:"Administrativo", value:"ADMIN_UPGPG"}],

    DDP:[{text:"Administrativo", value:"ADMIN_DDP"} ],

    SG:[{text:"Administrativo", value:"ADMIN_SG_SG"}],

//Direccion General
    DG:[{text:"Administrativo", value:"ADMIN_DG_DG"}],

    CPPS:[{text:"Administrativo", value:"ADMIN_CPPS"}],
    
//Abogado General
    AG:[{text:"Administrativo", value:"ADMIN_AG_AG"}],

    DAJ:[{text:"Administrativo", value:"ADMIN_DAJ_AG"}],
    
    DCTR:[{text:"Administrativo", value:"ADMIN_DCTR_AG"}],
    
    DLCT:[{text:"Administrativo", value:"ADMIN_DLCT_AG"}],
  
//Presidencia del Decanato
    PD:[{text:"Administrativo", value:"ADMIN_PD_PD"}],

//Secretaria Academica 
   
    DEMS:[{text:"Nivel Medio Superior", value:"NMS"},{text:"Administrativo", value:"ADMIN_NMS"}],

    DES:[{text:"Nivel Superior", value:"NS"},{text:"Administrativo", value:"ADMIN_NS"}],

    DFLE_SA:[{text:"Lenguas", value:"L_DFLE_SA"},{text:"Administrativo", value:"ADMIN_DFLE_SA"}],

    DEV:[{text:"Administrativo", value:"ADMIN_DEV_SA"}],

    DFIE:[{text:"Administrativo", value:"ADMIN_DFIE_SA"}],

    SACAD:[{text:"Administrativo", value:"ADMIN_SACAD_SACAD"}],

    //Secretaria Administrativa
    SA:[{text:"Administrativo", value:"ADMIN_SA_SA"}],
    
    DCH:[{text:"Administrativo", value:"ADMIN_DCH_SA"}],
    
    DPP:[{text:"Administrativo", value:"ADMIN_DPP_SA"}],
    
    DRF:[{text:"Administrativo", value:"ADMIN_DRF_SA"}],
    
    DRMI:[{text:"Administrativo", value:"ADMIN_DRMI_SA"}],
    
    DSG:[{text:"Administrativo", value:"ADMIN_DSG_SA"}],
    
    CCDI:[{text:"Administrativo", value:"ADMIN_CCDI_SA"}],
    
    

//Secretaria de Inovacion e Integracion Social

    DVDR:[{text:"Vinculación y Desarrollo", value:"VD"},{text:"Administrativo", value:"ADMIN_DVDR"}],


    SIIS:[{text:"Administrativo", value:"ADMIN_SIIS_SIIS"}],
    
    DESS:[{text:"Administrativo", value:"ADMIN_DESS_SIIS"}],
    
    DRI:[{text:"Administrativo", value:"ADMIN_DRI_SIIS"}],
    
    DSETT:[{text:"Administrativo", value:"ADMIN_DSETT_SIIS"}],
    
    DIET:[{text:"Administrativo", value:"ADMIN_DIET_SIIS"}],
    
    DPITT:[{text:"Administrativo", value:"ADMIN_DPITT_SIIS"}],
   
    

    //Secretaria de Investigacion y Posgrado

    DI:[{text:"Administrativo", value:"ADMIN_DI"}],

    SIP:[{text:"Administrativo", value:"ADMIN_SIP_SIP"}],
    
    DP:[{text:"Administrativo", value:"ADMIN_DP_SIP"}],
    
    DDCT:[{text:"Administrativo", value:"ADMIN_DDCT_SIP"}],
   
    DI_DP:[{text:"Investigacion", value:"I_DI_DP"},{text:"Investigación y Posgrado", value:"INV_POSG"}],

    //Secretaria de Servicios Educativos 

    SSE:[{text:"Administrativo", value:"ADMIN_SSE_SSE"}],
    
    DAES:[{text:"Administrativo", value:"ADMIN_DAES_SSE"}],
    
    DDC_SE:[{text:"Administrativo", value:"ADMIN_DDC_SSE"}],
    
    DAD:[{text:"Administrativo", value:"ADMIN_DAD_SSE"}],
    
    DBP:[{text:"Administrativo", value:"ADMIN_DBP_SSE"}],
    
    DAE:[{text:"Administrativo", value:"ADMIN_DAE_SSE"}],
  // Coordinación General de Planeacion e Informacion Institucional 
    
    CGPII:[{text:"Administrativo", value:"ADMIN_CGPII_DG"}],

    DPO:[{text:"Administrativo", value:"ADMIN_DPO_DG"}],

    DII:[{text:"Administrativo", value:"ADMIN_DII_DG"}],
    
    // Coordinación de Imagen Institucional

    CII:[{text:"Administrativo", value:"ADMIN_CII_DG"}],

    //Centro Nacional de Calculo

    CGCENAC:[{text:"Administrativo", value:"ADMIN_CGCENAC_SA"}],
  
    DCC:[{text:"Administrativo", value:"ADMIN_DCC_CENAC"}],
    
    DSI:[{text:"Administrativo", value:"ADMIN_DSI_CENAC"}],
    
    //Estacion de Radio
    
    ER:[{text:"Administrativo",value:"ADMIN_ER"}],
    // POI
    POI:[{text:"Administrativo",value:"ADMIN_POI"}],

    // 
    COFAA:[{text:"Administrativo",value:"ADMIN_COFAA"}]

}    

direccionInput.addEventListener("change", () => {
  const valor = direccionInput.value;

  // Limpiar subcategoría
  nivelInput.innerHTML = '<option value="">-- Selecciona Nivel--</option>';
  nivelInput.disabled = !valor;

  if (!valor || !direcciones[valor]) return;

  direcciones[valor].forEach(op => {
    const option = document.createElement("option");
    option.value = op.value;
    option.textContent = op.text;
    nivelInput.appendChild(option);
  });
});



//------------------------Nivel-----------------------------------------------------------------------------------





const opciones = {
//Secretaria General
ADMIN_UPGPG:["Unidad Politécnica de Gestión con Perspectiva de Género (UPGPG)", "Defensoría de los Derechos Politécnicos"],
ADMIN_DDP:["Defensoría de los Derechos Politécnicos"],
ADMIN_SG_SG:["Secretaría General"],
//Direcion General

ADMIN_DG_DG:["Dirección General"],

ADMIN_CPPS:["Coordinación Politécnica para la Sustentabilidad"],



//Abogado General
ADMIN_AG_AG:["Oficina del Abogado General"],

ADMIN_DAJ_AG :["Dirección de Asuntos Jurídicos"],
  
ADMIN_DCTR_AG:["Dirección de Convenios y Trámite Registral"],  

ADMIN_DLCT_AG:["Dirección de Legislación, Consulta y Transparencia"],  

  
//Presidencia del decanato
ADMIN_PD_PD:["Presidencia del Decanato"],

//Secretaria Academica
NMS: ['Centro de Estudios Tecnológicos (CET 1)"Walter Cross Buchanan"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 1)  "Gonzalo Vázquez Vela"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 2)  "Miguel Bernard"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 3)  "Estanislao Ramírez Ruiz"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 4)  "Lázaro Cárdenas"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 5)  "Benito Juárez"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 6)  "Miguel Othón De Mendizábal"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 7)  "Cuauhtémoc"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 8)  "Narciso Bassols"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 9)  "Juan De Dios Bátiz"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 10) "Carlos Vallejo Márquez"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 11) "Wilfrido Massieu"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 12) "José María Morelos"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 13) "Ricardo Flores Magón"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 14) "Luis Enrique Erro"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 15) "Diódoro Antúnez Echegaray"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 16) "Hidalgo"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 17) "León, Guanajuato"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 18) "Zacatecas"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 19) "Leona Vicario"',
       'Centro de Estudios Científicos y Tecnológicos (CECyT 20) "Natalia Serdán Alatriste"'],
ADMIN_NMS:["Dirección de Educación Media Superior"],
NS:["Escuela Superior de Ingeniería Mecánica y Eléctrica (ESIME), Unidad Zacatenco",
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
    'Unidad Profesional Interdisciplinaria de Ingeniería, Campus "Alejo Peralta" Puebla (UPIIAP)'],
    ADMIN_NS:["Dirección de Educación Superior"],
    
    ADMIN_DEV_SA:["Dirección de Educación Virtual"],
    
    ADMIN_DFIE_SA:["Dirección de Formación e Innovación Educativa"],

    ADMIN_DFLE_SA:["Dirección de Formación en Lenguas Extranjeras"],
    
    L_DFLE_SA:["Centro de Lenguas Extranjeras (CENLEX), Unidad Zacatenco",
               "Centro de Lenguas Extranjeras (CENLEX), Unidad Santo Tomás]"],           
    
    ADMIN_SACAD_SACAD:["Secretaría Académica"],
    
    
    

    
    
    


           
                 
//Secretaria Administrativa
ADMIN_SA_SA:["Secretaría de Administración"],
ADMIN_DCH_SA:["Dirección de Capital Humano"],
ADMIN_DPP_SA:["Dirección de Programación y Presupuesto"],
ADMIN_DRF_SA:["Dirección de Recursos Financieros"],
ADMIN_DRMI_SA:["Dirección de Recursos Materiales e Infraestructua"],
ADMIN_DSG_SA:["Dirección de Servicios Generales"],
ADMIN_CCDI_SA:["Coordinación de Centros de Desarrollo Infantil"],



//Secretaria de Inovacion e Integracion Social

VD:["Centro de Vinculación y Desarrollo Regional (CVDR),Unidad Cajeme -Sonora",
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
    "Centro de Innovación e Integración de Tecnologías Avanzadas (CIITA), Unidad Puebla"],
ADMIN_DVDR:["Dirección de Vinculación y Desarrollo Regional"],
ADMIN_SIIS_SIIS:["Secretaría de Innovación e Integración Social"],
ADMIN_DESS_SIIS:["Dirección de Egresados y Servicio Social"],
ADMIN_DRI_SIIS:["Dirección de Relaciones Internacionales"],
ADMIN_DSETT_SIIS:["Dirección de Servicios Empresariales y Transferencia Tecnológica"],
ADMIN_DIET_SIIS:["Dirección de Incubación de Empresas Tecnológicas"],
ADMIN_DPITT_SIIS:["Dirección de Prospectiva e Inteligencia Tecnológica Tecnópoli"],





//Secretaria de Investigacion y Posgrado
ADMIN_DI:["Dirección de Investigación"],
ADMIN_SIP_SIP:["Secretaría de Investigación y Posgrado"],
ADMIN_DP_SIP:["Dirección de Posgrado"],
ADMIN_DDCT_SIP:["Dirección de Difusión de Ciencia y Tecnología"],
I_DI_DP:["Centro de Desarrollo Aeroespacial (CDA)","Centro de Nanociencias y Micro y Nanotecnologías (CNMN)"],
INV_POSG:["Centro Interdisciplinario de Ciencias Marinas (CICIMAR)",
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
   "Centro Mexicano para la Producción Más Limpia (CMP+L)"],









//Secretaria de SE
ADMIN_SSE_SSE:["Secretaría de Servicios Educativos"],
ADMIN_DAES_SSE:["Dirección de Administración Escolar"],
ADMIN_DDC_SSE:["Dirección de Difusión Cultural"],
ADMIN_DAD_SSE:["Dirección de Actividades Deportivas"],
ADMIN_DBP_SSE:["Dirección de Bibliotecas y Publicaciones"],
ADMIN_DAE_SSE:["Dirección de Apoyos a Estudiantes"],


//Coordinacion General de Planeacion e Informacion Institucional

ADMIN_CGPII_DG:["Coordinación General de Planeación e Información Institucional"],

ADMIN_DPO_DG:["Dirección de Planeación y Organización"],

ADMIN_DII_DG:["Dirección de Información Institucional"],



// Coordinación de Imagen Institucional

ADMIN_CII_DG:["Coordinación de Imagen Institucional"],


//Centro Nacional de Calculo

ADMIN_CGCENAC_SA:["Centro Nacional de Cálculo (CENAC)"],
ADMIN_DCC_CENAC:["Dirección de cómputo y comunicaciones"],                 
ADMIN_DSI_CENAC:["Dirección de sistemas informáticos"],

  
//Estacion de Radio

ADMIN_ER:["Estación de Radiodifusión Radio IPN XHIPN-FM 95.7 MHZ."],

ADMIN_POI:["Patronato de Obras e Instalaciones  (POI)"],
ADMIN_COFAA:["Comisión de Operación y Fomento de Actividades Académicas (COFAA)"],  
};


//--------------------Actualizacion de la opciones de dependencia con base al valor elegido en el nivel


nivelInput.addEventListener("change", () => {
  const valor = nivelInput.value;

  // Limpiar subcategoría
  dependenciaInput.innerHTML = '<option value="">-- Selecciona --</option>';
  dependenciaInput.disabled = !valor;

  if (!valor || !opciones[valor]) return;

  opciones[valor].forEach(texto => {
    const option = document.createElement("option");
    option.value = texto;
    option.textContent = texto;
    dependenciaInput.appendChild(option);
  });
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



document.getElementById("tablaBody6").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});




//----------------------Agregar fila

//-----------------------Agergar fila tabla 1

function agregarFila(){

  const tbody = document.getElementById("tablaBody");
  const tbody1 = document.getElementById("tablaBody1");
  const i = obtenerNumeroFila1();
  const j = obtenerNumeroFila1_1();

  const fila = document.createElement("tr");
  const fila1 = document.createElement("tr");
  fila.innerHTML = `
    <td>
      <textarea
        name="Programa_T1R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    </td>

    <td>
    <input type="number" name="Usuarios1_T1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    </td>
    
    <td>
    <input type="number" name="Usuarios2_T1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    </td>
    
    <td> 
    <input type="number" name="Usuarios3_T1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
     </td>
    
    <td>
    <input type="number" name="Usuarios4_T1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    </td>
    
    <td>
    <input type="number" name="Usuarios5_T1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios6_T1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    </td>
  `;

  tr1.innerHTML = `
    <td>
      <textarea
        name="Programa_T1.1R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    </td>

    <td>
    <input type="number" name="Usuarios1_T1.1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios2_T1.1R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    </td>
    <td> 
    <input type="number" name="Usuarios3_T1.1R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
     </td>
    <td>
    <input type="number" name="Usuarios4_T1.1R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios5_T1.1R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios6_T1.1R${i}" class="input_tabla " aria-label="Usuarios6"> </input>
    </td>
  `;

  tbody.appendChild(fila);
  tbody1.appendChild(fila1);

 // generarNivel();
 // generarDependencia();
  activarAutoExpand(fila);
  activarAutoExpand(fila1);

  }    





//-----------------------Agergar fila tabla 2


function agregarFila2(){
  const tbody = document.getElementById("tablaBody2");
  const i = obtenerNumeroFila2();


  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>
    <input name="Edificio_T2R${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="Nivel_T2R${i}" class="input_tabla" aria-label="Nivel"> </input>
    </td>

    <td>
    <input name="Espacio_T2R${i}" class="input_tabla" aria-label="Espacio"> </input>
    </td>    
    
    
    
    

      <td class="cantidadCol">

      <input type="number" name="Largo_T2R${i}" class="input_tabla " aria-label="Largo"> </input>  
    
      </td>

      
    
      <td class="cantidadCol">

              <input type="number" name="Ancho_T2R${i}" class="input_tabla " aria-label="Ancho">
              </input>  
    
      </td>
      

      <td class="cantidadCol">

      <input type="number" name="Alumnos_T2R${i}" class="input_tabla " aria-label="Numero de Alumnos"> </input>  
    
      </td>
      

   
      <td class="cantidadCol">

      <input type="number" name="Horas_T2R${i}" class="input_tabla " aria-label="Horas de Servicio"> </input>  
    
      </td>

  `;
  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}



//-----------------------Agregar fila tabla 3

function agregarFila3(){
  const tbody = document.getElementById("tablaBody3");
  const i = obtenerNumeroFila3();


  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>
    <input name="Edificio_T3R${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="MetrosCuadrados_T3R${i}" class="input_tabla" aria-label="MetrosCuadrados"> </input>
    </td>

     
    

  `;

  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}




function agregarFilaC(){
  const tbody = document.getElementById("tablaCotizaciones");
  const i = obtenerNumeroFilaC();


  const fila = document.createElement("tr");


fila.innerHTML = `     
     <td>
      <textarea
        name="nombreCotizacion_TCR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre de la Cotizacion"
        > </textarea>
    </td>

     <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
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

      <input type="number" name="anio_TCR${i}" class="input_tabla " aria-label="Año de la cotizacion"> </input>  
    
      </td>    



               <td>
      <textarea
        name="nombreCotizacion2_TCR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre de la Cotizacion 2"
        > </textarea>
    </td>


  <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
                       name="CotizacionAdquisicionG2_TCR${i}" 
                       class="archivoInput"
                       accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">
                 <span class="nombreArchivo"></span>
                 <button type="button" class="borrarArchivo">
                   ❌
                 </button>
     </div>            
</td>
     <td>
            <input type="number" name="anioA2_TCR${i}" class="input_tabla " aria-label="Año de la cotizacion"> </input>  
    
      </td>

    






  `;

  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}


//-----------------------Agergar fila tabla 4

function agregarFila4(){
  const tbody = document.getElementById("tablaBody4");
  const i = obtenerNumeroFila4();


  const fila = document.createElement("tr");
  fila.innerHTML  = `
    <td>
      <textarea
        name="ProgramaAcademico_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td>
         <textarea
        name="Espacio_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea>
    </td>
    <td>
      <textarea
        name="Clave_T4R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="clave"
        > </textarea>
      </td>
    <td>
      <textarea
        name="nombredelEquipo_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    <td class="cantidadCol">

      <input type="number" name="cantidad_T4R${i}" class="input_tabla " aria-label="Cantidad"> </input>  
    
      </td>


    <td>
      <textarea
        name="especificaciones_T4R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

    <td>
          <textarea id="justificacion_T4R${i}" name="justificacion_T4R${i}"
                   class="auto-expand input_tabla"
                   rows="1"
                   style="resize:none;"  aria-label="Justificación">
                   
      </textarea>
    </td>

    
    
     <td>
      <div class="precio-wrapper">
            <span class="peso">$</span>
            <input type="text"
                   name="precio_T4R${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio"> 
            </input>
      </div>
      </td>
    <td>
      <textarea
        name="nombreCotizacion_T4R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del archivo donde esta la Cotizacion del Equipo"
        > </textarea>
    </td>



    <td>
    <div class="contenedorArchivo">
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
            <input type="text"
                   name="precio2_T4R${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio 2"> 
            </input>
      </div>
      </td>
   
  <td>
      
       <select id="nombreCotizacion2_T4R${i}"
        name="nombreCotizacion2_T4R${i}"
        class="tabla_select"
        aria-label="Nombre del archivo donde esta la Cotizacion de la alternativa 2 del Equipo"
        > </select>
                 <option value="">-- Selecciona una prioridad--</option>

    </td>


  <td>
    <div class="contenedorArchivo">
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

  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}

function agregarFila5(){
  const tbody = document.getElementById("tablaBody5");
  const i = obtenerNumeroFila5();


  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcademico_T5R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td >
    <textarea
        name="Espacio_T5R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Espacio"
        > </textarea></td>
    
    <td>
      <textarea
        name="nombredelEquipo_T5R${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    

    <td>
      <textarea
        name="especificaciones_T5R${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

      <td class="cantidadCol">

      <input type="number" name="cantidadMal_estado_T5R${i}" class="input_tabla " aria-label="Cantidad en mal estado"> </input>  
    
      </td>

    <td class="cantidadCol">

      <input type="number" name="cantidadBuen_estado_T5R${i}" class="input_tabla " aria-label="Cantidad en buen estado"> </input>  
    
      </td>
    <td class="cantidadCol">

      <input type="number" name="cantidadRegular_estado_T5R${i}" class="input_tabla " aria-label="Cantidad en estado Regular"> </input>  
    
      </td>
     

`;

  tbody.appendChild(fila);

//  generarNivel();
//  generarDependencia();
  activarAutoExpand(fila);
}

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







function obtenerNumeroFila1(){
  return document.querySelectorAll("#tablaBody tr").length + 1;
}
function obtenerNumeroFila1_1(){
  return document.querySelectorAll("#tablaBody1.1 tr").length + 1;
}


function obtenerNumeroFila2(){
  return document.querySelectorAll("#tablaBody2 tr").length + 1;
}

function obtenerNumeroFila3(){
  return document.querySelectorAll("#tablaBody3 tr").length + 1;
}

function obtenerNumeroFilaC(){
  return document.querySelectorAll("#tablaCotizaciones tr").length + 1;
}

function obtenerNumeroFila4(){
  return document.querySelectorAll("#tablaBody4 tr").length + 1;
}

function obtenerNumeroFila5(){
  return document.querySelectorAll("#tablaBody5 tr").length + 1;
}
function obtenerNumeroFila6(){
  return document.querySelectorAll("#tablaBody6 tr").length + 1;
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
function siguiente(numero){

  document
    .getElementById(`paso${numero}`)
    .classList.remove("activo");

  document
    .getElementById(`paso${numero+1}`)
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



const direccionEnlace="https://script.google.com/macros/s/AKfycby6l6JY_ZsTBX2NW-U5CQhCTi1LdMxpAZfyp7ZbngXK5tMVdgGIamNDXJ9by9N_xDdnVg/exec"

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
  data.__filas6 = document.querySelectorAll("#tablaBody6 tr").length;
  
  if(folioActual==null){
             folioActual = generarFolio();
  }
  data.__folio = folioActual;



 // formData.append(
 //   "payload",
 //   JSON.stringify({
 //       action: "guardarBorrador",
 //       data
 //   })
//);

try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "guardarBorrador", data})
    });

 //   const res = await fetch(direccionEnlace, {
 //       method: "POST",
 //       body: formData
 //   });
  //              localStorage.setItem("borradorFormulario", JSON.stringify(data));

//  alert("✅ Borrador guardado correctamente");

  
// ---------------Nuevo------------------------------------------- 

  const json = await res.json();
if (json.success) {
      alert(`✅ Borrador guardado correctamente. Tu folio es: ${folioActual}`);
    } else {
      alert("⚠️ Error al guardar el borrador: " + json.message);
    }
  } catch (e) {
    alert("⚠️ Error de conexión al guardar el borrador");
  }

});






function setSelectValue(selectId, value) {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.value = value;
  select.dispatchEvent(new Event("change"));
}

function restaurarTabla(data) {
 
 

 


  const filas1 = data.__filas1 || 10;
  const filas2 = data.__filas2 || 10;
  const filas3 = data.__filas3 || 10;
  const filasC = data.__filasC || 10;
  const filas4 = data.__filas4 || 10;
  const filas5 = data.__filas5 || 10;
  const filas6 = data.__filas6 || 10;
  
  
  const tbody = document.getElementById("tablaBody");
  const tbody2 = document.getElementById("tablaBody2");
  const tbody3 = document.getElementById("tablaBody3");
  const tbodyC = document.getElementById("tablaCotizaciones"); 
  const tbody4 = document.getElementById("tablaBody4");
  const tbody5 = document.getElementById("tablaBody5");
  const tbody6 = document.getElementById("tablaBody6");
 
 
  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  tbody6.innerHTML = "";
  
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
  for (let i = 1; i <= filas6; i++) {
    agregarFila6();
  }


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


/*




    formData.append(
    "payload",
    JSON.stringify({
        action: "guardarBorrador",
        data
    })
);

try {
    const res = await fetch(direccionEnlace, {
        method: "POST",
        body: formData
    });

    */








document.getElementById("cargarBorrador").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  
  const folio = document.getElementById("folioInput").value.trim();
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }

try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "cargarBorrador", folio})
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
  const tbody6 = document.getElementById("tablaBody6");
  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  tbody6.innerHTML = "";
  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }
  
      folioActual = folio;
      edicionActual=data.edicion;
// Restaurar selects encadenados
setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
      setSelectValue("dependencia", data.dependencia);
/*
      const titular = document.getElementById("titular");   
      titular.value = data.titular;
      const telTitular = document.getElementById("telefonoTitular");   
      telTitular.value = data.telefonoTitular;
      const CorreoTitular = document.getElementById("correoTitular");   
      CorreoTitular.value = data.correoTitular;
      const responsable = document.getElementById("responsable");   
      responsable.value = data.responsable;
      const telResponsable = document.getElementById("telefonoResponsable");   
      telResponsable.value = data.telefonoResponsable;
      const CorreoResponsable = document.getElementById("correoResponsable");   
      CorreoResponsable.value = data.correoResponsable;
*/
      Object.keys(data).forEach(name => {
                          if (name.includes("__filas")) return;
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
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });

    }, 0);
  }, 0);
}, 0);
  alert("📂 Borrador cargado correctamente");
} catch (e) {
    alert("⚠️ Error de conexión al cargar el borrador");
}
  
});


document.getElementById("cargarRespuesta").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  
  const folio = document.getElementById("folioInput").value.trim();
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }

try {
    const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "cargarRespuesta", folio})
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
  const tbody6 = document.getElementById("tablaBody6");
  tbody.innerHTML = "";
  tbody2.innerHTML = "";
  tbody3.innerHTML = "";
  tbodyC.innerHTML = "";
  tbody4.innerHTML = "";
  tbody5.innerHTML = "";
  tbody6.innerHTML = "";
  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }

folioActual=folio;
edicionActual=data.edicion;
numerodeEnvio=data.numeroEnvio;

alert("ExistenciaDeCotizaciones:"+ExistenciaDeCotizaciones);
   alert("ExistenciaDeCotizaciones_T4:"+ExistenciaDeCotizaciones_T4);
  
   alert("ExistenciaDeCotizacionesA2 :"+ExistenciaDeCotizacionesA2);
   alert("ExistenciaDeCotizacionesA2_T4 :"+ExistenciaDeCotizacionesA2_T4);

// Restaurar selects encadenados
setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
      setSelectValue("dependencia", data.dependencia);
/*
      const titular = document.getElementById("titular");   
      titular.value = data.titular;
      const telTitular = document.getElementById("telefonoTitular");   
      telTitular.value = data.telefonoTitular;
      const CorreoTitular = document.getElementById("correoTitular");   
      CorreoTitular.value = data.correoTitular;
      const responsable = document.getElementById("responsable");   
      responsable.value = data.responsable;
      const telResponsable = document.getElementById("telefonoResponsable");   
      telResponsable.value = data.telefonoResponsable;
      const CorreoResponsable = document.getElementById("correoResponsable");   
      CorreoResponsable.value = data.correoResponsable;
*/
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
      document.querySelectorAll("#tablaBody6 tr").forEach(fila => {
                           actualizarObligatoriedadFila(fila);
      });

    }, 0);
  }, 0);
}, 0);
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
                 const confirmar = confirm("¿Estás seguro de que deseas enviar el formulario?");

                if (!confirmar) {
                  // ❌ Usuario canceló
                  return;
                }
       //**
       



//const formData = new FormData(this);

const formData = new FormData(form);

  const data = {};

const selectsTexto = [
                      "secretaria",
                      "direccion",
                      "nivel",
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
    if((data[key]!="")&&(key.includes("CotizacionAdquisicionG1"))){
            ExistenciaDeCotizaciones=true;
           alert(data[key].nombre);     
    }
    if((data[key]!="")&&(key.includes("CotizacionAdquisicionG2"))){
            ExistenciaDeCotizacionesA2=true;
           alert(data[key].nombre);     
    }
    if((data[key]!="")&&(key.includes("CotizacionAdquisicion_T4R"))){
            ExistenciaDeCotizaciones_T4=true;
           alert(data[key].nombre);     
    }
    if((data[key]!="")&&(key.includes("CotizacionAdquisicion2_T4R"))){
            ExistenciaDeCotizacionesA2_T4=true;
           alert(data[key].nombre);     
    }

}


data.secretariaT = document.getElementById("secretaria").options[
    document.getElementById("secretaria").selectedIndex
].text;

data.direccionT = document.getElementById("direccion").options[
    document.getElementById("direccion").selectedIndex
].text;

data.nivelT = document.getElementById("nivel").options[
    document.getElementById("nivel").selectedIndex
].text;

data.dependenciaT = document.getElementById("dependencia").options[
    document.getElementById("dependencia").selectedIndex
].text;

alert("ExistenciaDeCotizaciones: "+ExistenciaDeCotizaciones);


alert("ExistenciaDeCotizacionesA2: "+ExistenciaDeCotizacionesA2);

alert("ExistenciaDeCotizaciones_T4: "+ExistenciaDeCotizaciones_T4);
alert("ExistenciaDeCotizacionesA2_T4: "+ExistenciaDeCotizacionesA2_T4);


//------------------lleando de las url

alert("Antes ");
Object.keys(urlCotizacionesActuales).forEach(name => {
             data[name] = urlCotizacionesActuales[name];
/*             alert("data.envio:"+data.numeroEnvio);
             alert("url de cotizaciones:"+urlCotizacionesActuales[name]);
             alert("data: "+data[name]);
  */     
  });
alert("Despues ");





  //-------------------------------------------------------------------



  // Guardamos también el número de filas actuales
  data.__filas1 = document.querySelectorAll("#tablaBody tr").length;
  data.__filas2 = document.querySelectorAll("#tablaBody2 tr").length;
  data.__filas3 = document.querySelectorAll("#tablaBody3 tr").length;
  data.__filasC = document.querySelectorAll("#tablaCotizaciones tr").length;
  data.__filas4 = document.querySelectorAll("#tablaBody4 tr").length;
  data.__filas5 = document.querySelectorAll("#tablaBody5 tr").length;
  data.__filas6 = document.querySelectorAll("#tablaBody6 tr").length;
  
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

  
alert("data.existenciaCotizaciones: "+data.existenciaCotizaciones);
alert("data.existenciaCotizaciones_T4: "+data.existenciaCotizaciones_T4);
alert("data.existenciaCotizaciones2: "+data.existenciaCotizaciones2);
alert("data.existenciaCotizaciones2_T4: "+data.existenciaCotizaciones2_T4);





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
const res = await fetch(direccionEnlace, {
      method: "POST",
      body: JSON.stringify({action: "EnviarFormulario", data})
 });
  const json = await res.json();

   


    if (json.success) {

        alert(`✅ Registro de solicitud correctamente Enviada del formato de detección correctamente capturado. Tu folio es: ${folioActual}`);

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
    document.getElementById("UsuariosHAnio1").textContent = config.encabezado1;
    document.getElementById("UsuariosMAnio1").textContent = config.encabezado2;
    document.getElementById("UsuariosHAnio2").textContent = config.encabezado3;
    document.getElementById("UsuariosMAnio2").textContent = config.encabezado4;
    document.getElementById("UsuariosHAnio3").textContent = config.encabezado5;
    document.getElementById("UsuariosMAnio3").textContent = config.encabezado6;
    document.getElementById("UsuariosAHAnio1").textContent = config.encabezado7;
    document.getElementById("UsuariosAMAnio1").textContent = config.encabezado8;
    document.getElementById("UsuariosAHAnio2").textContent = config.encabezado9;
    document.getElementById("UsuariosAMAnio2").textContent = config.encabezado10;
    document.getElementById("UsuariosAHAnio3").textContent = config.encabezado11;
    document.getElementById("UsuariosAMAnio3").textContent = config.encabezado12
    

};
