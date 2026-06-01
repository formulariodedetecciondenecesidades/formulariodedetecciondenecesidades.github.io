const tbody = document.getElementById("tablaBody");
const tbody2 = document.getElementById("tablaBody2");
const tbody3 = document.getElementById("tablaBody3");
const tbody4 = document.getElementById("tablaBody4");
//------------------------------------Construccion de tabla--------------------------


for (let i = 1; i <= 10; i++) {
  const tr = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const tr3 = document.createElement("tr");
  const tr4 = document.createElement("tr");
  tr.innerHTML = `
    <td>
      <textarea
        name="ProgramasR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    </td>

    <td>
    <input type="number" name="Usuarios1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios2R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    </td>
    <td> 
    <input type="number" name="Usuarios3R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
     </td>
    <td>
    <input type="number" name="Usuarios4R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios5R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    </td>
  `;
                                    





tr2.innerHTML = `
    <td>
    <input name="EdificioR${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="NivelR${i}" class="input_tabla" aria-label="Nivel"> </input>
    </td>

    <td>
    <input name="EspacioR${i}" class="input_tabla" aria-label="Espacio"> </input>
    </td>    
    
    
    
    

      <td class="cantidadCol">

      <input type="number" name="LargoR${i}" class="input_tabla " aria-label="Largo"> </input>  
    
      </td>

      
    
      <td class="cantidadCol">

              <input type="number" name="AnchoR${i}" class="input_tabla " aria-label="Ancho">
              </input>  
    
      </td>
      

      <td class="cantidadCol">

      <input type="number" name="AlumnosR${i}" class="input_tabla " aria-label="Numero de Alumnos"> </input>  
    
      </td>
      

   
      <td class="cantidadCol">

      <input type="number" name="HorasR${i}" class="input_tabla " aria-label="Horas de Servicio"> </input>  
    
      </td>

  `;


tr3.innerHTML = `
    <td>
    <input name="EdificioR${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="MetrosCuadradosR${i}" class="input_tabla" aria-label="MetrosCuadrados"> </input>
    </td>

     
    

  `;

tr4.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcadémicoR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td id="EspacioR${i}" class="input_tabla fijasCol" aria-label="Espacio"></td>
    
    <td>
      <textarea
        name="ClaveR${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="clave"
        > </textarea>
      </td>
    <td>
      <textarea
        name="nombredelEquipoR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    <td class="cantidadCol">

      <input type="number" name="cantidadR${i}" class="input_tabla " aria-label="Cantidad"> </input>  
    
      </td>


    <td>
      <textarea
        name="especificacionesR${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

    <td>
      <select id="justificacionR${i}" name="justificacionR${i}" class="tabla_select" aria-label="Justificación">
                   <option value="">-- Selecciona una prioridad--</option>
                   <option value="Equipo no Existente">Equipo no Existente</option>
                   <option value="Sustitución">Sustitución</option>
                   <option value="Complemento">Complemento</option>
      </select>
    </td>

    
    
     <td>
      <div class="precio-wrapper">
            <span class="peso">$</span>
            <input type="text"
                   name="precioR${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio"> 
            </input>
      </div>
      </td>
    
    <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
                       name="CotizacionAdquisicionR${i}" 
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
                   name="precio2R${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio 2"> 
            </input>
      </div>
      </td>
   
  <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
                       name="CotizacionAdquisicion2R${i}" 
                       class="archivoInput"
                       accept=".pdf,.xlsx,.doc,.docx,.png,.jpg">
                 <span class="nombreArchivo"></span>
                 <button type="button" class="borrarArchivo">
                   ❌
                 </button>
     </div>            
</td>


  `;








  tbody.appendChild(tr);
  tbody2.appendChild(tr2);
  tbody3.appendChild(tr3);
  tbody4.appendChild(tr4);
}


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
  if (!e.target.name?.startsWith("nombredelEquipoR")) return;

  const filas = document.querySelectorAll("#tablaBody tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila();
  }
});
document.getElementById("tablaBody2").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipoR")) return;

  const filas = document.querySelectorAll("#tablaBody2 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila2();
  }
});
document.getElementById("tablaBody3").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipoR")) return;

  const filas = document.querySelectorAll("#tablaBody3 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila3();
  }
});
document.getElementById("tablaBody4").addEventListener("change", e => {
  if (!e.target.name?.startsWith("nombredelEquipoR")) return;

  const filas = document.querySelectorAll("#tablaBody4 tr");
  const ultimaFila = filas[filas.length - 1];

  if (ultimaFila.contains(e.target)) {
    agregarFila4();
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


//----------------Esta parte se encarga de detectar un cambio en las celdas de la tabla y cuando recibre un cambio que no es 
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



document.getElementById("tablaBody4").addEventListener("input", function (e) {
  if (!e.target.classList.contains("obligatorio")) return;

  const fila = e.target.closest("tr");
  actualizarObligatoriedadFila(fila);
});




//----------------------Agregar fila

//-----------------------Agergar fila tabla 1

function agregarFila(){
  const tbody = document.getElementById("tablaBody");
  const i = obtenerNumeroFila1();


  const fila = document.createElement("tr");
  fila.innerHTML = `
    <td>
      <textarea
        name="ProgramasR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programas académicos, servicios o actividades de la dependencia"
        > </textarea>
    </td>

    <td>
    <input type="number" name="Usuarios1R${i}" class="input_tabla " aria-label="Usuarios1"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios2R${i}" class="input_tabla " aria-label="Usuarios2"> </input>
    </td>
    <td> 
    <input type="number" name="Usuarios3R${i}" class="input_tabla " aria-label="Usuarios3"> </input>
     </td>
    <td>
    <input type="number" name="Usuarios4R${i}" class="input_tabla " aria-label="Usuarios4"> </input>
    </td>
    <td>
    <input type="number" name="Usuarios5R${i}" class="input_tabla " aria-label="Usuarios5"> </input>
    </td>
  `;

  tbody.appendChild(fila);

  generarNivel();
  generarDependencia();
  activarAutoExpand(fila);
}    





//-----------------------Agergar fila tabla 2


function agregarFila2(){
  const tbody = document.getElementById("tablaBody2");
  const i = obtenerNumeroFila2();


  const fila = document.createElement("tr");
  fila.innerHTML = tr.innerHTML = `
    <td>
    <input name="EdificioR${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="NivelR${i}" class="input_tabla" aria-label="Nivel"> </input>
    </td>

    <td>
    <input name="EspacioR${i}" class="input_tabla" aria-label="Espacio"> </input>
    </td>    
    
    
    
    

      <td class="cantidadCol">

      <input type="number" name="LargoR${i}" class="input_tabla " aria-label="Largo"> </input>  
    
      </td>

      
    
      <td class="cantidadCol">

              <input type="number" name="AnchoR${i}" class="input_tabla " aria-label="Ancho">
              </input>  
    
      </td>
      

      <td class="cantidadCol">

      <input type="number" name="AlumnosR${i}" class="input_tabla " aria-label="Numero de Alumnos"> </input>  
    
      </td>
      

   
      <td class="cantidadCol">

      <input type="number" name="HorasR${i}" class="input_tabla " aria-label="Horas de Servicio"> </input>  
    
      </td>

  `;
  tbody.appendChild(fila);

  generarNivel();
  generarDependencia();
  activarAutoExpand(fila);
}



//-----------------------Agregar fila tabla 3

function agregarFila3(){
  const tbody = document.getElementById("tablaBody3");
  const i = obtenerNumeroFila3();


  const fila = document.createElement("tr");
  fila.innerHTML = tr.innerHTML = `
    <td>
    <input name="EdificioR${i}" class="input_tabla" aria-label="Edificio"> </input>
    </td>

    <td>
    <input name="MetrosCuadradosR${i}" class="input_tabla" aria-label="MetrosCuadrados"> </input>
    </td>

     
    

  `;

  tbody.appendChild(fila);

  generarNivel();
  generarDependencia();
  activarAutoExpand(fila);
}

//-----------------------Agergar fila tabla 4

function agregarFila4(){
  const tbody = document.getElementById("tablaBody4");
  const i = obtenerNumeroFila4();


  const fila = document.createElement("tr");
  fila.innerHTML = tr.innerHTML = `
    <td>
      <textarea
        name="ProgramaAcadémicoR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Programa Académico"
        > </textarea>
    </td> 
    
    <td id="EspacioR${i}" class="input_tabla fijasCol" aria-label="Espacio"></td>
    
    <td>
      <textarea
        name="ClaveR${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="clave"
        > </textarea>
      </td>
    <td>
      <textarea
        name="nombredelEquipoR${i}"
        class="auto-expand input_tabla obligatorio"
        rows="1"
        style="resize:none;"
        aria-label="Nombre del Equipo"
        > </textarea>
    </td>
    
    

    <td class="cantidadCol">

      <input type="number" name="cantidadR${i}" class="input_tabla " aria-label="Cantidad"> </input>  
    
      </td>


    <td>
      <textarea
        name="especificacionesR${i}"
        class="auto-expand input_tabla"
        rows="1"
        style="resize:none;"
        aria-label="Especificaciones"
        > </textarea>
    </td>

    <td>
      <select id="justificacionR${i}" name="justificacionR${i}" class="tabla_select" aria-label="Justificación">
                   <option value="">-- Selecciona una prioridad--</option>
                   <option value="Equipo no Existente">Equipo no Existente</option>
                   <option value="Sustitución">Sustitución</option>
                   <option value="Complemento">Complemento</option>
      </select>
    </td>

    
    
     <td>
      <div class="precio-wrapper">
            <span class="peso">$</span>
            <input type="text"
                   name="precioR${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio"> 
            </input>
      </div>
      </td>
    
    <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
                       name="CotizacionAdquisicionR${i}" 
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
                   name="precio2R${i}"
                   class="input_tabla precio"
                   oninput="formatearMiles(this)"
                   inputmode="decimal" 
                   aria-label="Precio 2"> 
            </input>
      </div>
      </td>
   
  <td>
    <div class="contenedorArchivo">
                      <input 
                       type="file" 
                       name="CotizacionAdquisicion2R${i}" 
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

  generarNivel();
  generarDependencia();
  activarAutoExpand(fila);
}





function obtenerNumeroFila1(){
  return document.querySelectorAll("#tablaBody tr").length + 1;
}
function obtenerNumeroFila2(){
  return document.querySelectorAll("#tablaBody2 tr").length + 1;
}

function obtenerNumeroFila3(){
  return document.querySelectorAll("#tablaBody3 tr").length + 1;
}
function obtenerNumeroFila4(){
  return document.querySelectorAll("#tablaBody4 tr").length + 1;
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






//---------------------------GuardarBorrador--------------------------------------------------

/*
  document.getElementById("guardarBorrador").addEventListener("click", async () => {
  const form = document.getElementById("miFormulario");
  const formData = new FormData(form);

  const data = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  // Guardamos también el número de filas actuales
  data.__filas = document.querySelectorAll("#tablaBody tr").length;
 
  const folio = generarFolio();
  data.__folio = folio;


try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzxz08ox-WUn2YKXPyX0GqfEx2BIAJzB0ODKZSefiF4tTfE2wYhJg93WkZXsjja3I-40g/exec", {
      method: "POST",
      body: JSON.stringify({action: "guardarBorrador", data})
    });
    
  //              localStorage.setItem("borradorFormulario", JSON.stringify(data));

//  alert("✅ Borrador guardado correctamente");

  
// ---------------Nuevo------------------------------------------- 

  const json = await res.json();
if (json.success) {
      alert(`✅ Borrador guardado correctamente. Tu folio es: ${folio}`);
    } else {
      alert("⚠️ Error al guardar el borrador: " + json.message);
    }
  } catch (e) {
    alert("⚠️ Error de conexión al guardar el borrador");
  }

});



*/



function setSelectValue(selectId, value) {
  const select = document.getElementById(selectId);
  if (!select) return;

  select.value = value;
  select.dispatchEvent(new Event("change"));
}

function restaurarTabla(data) {
  const filas = data.__filas || 10;
  const tbody = document.getElementById("tablaBody");
  tbody.innerHTML = "";

  for (let i = 1; i <= filas; i++) {
    agregarFila();
  }

  Object.keys(data).forEach(name => {
    if (name === "__filas") return;
    if (!name.includes("R")) return; // solo campos de la tabla

    const campo = document.querySelector(`[name="${name}"]`);
    if (!campo) return;

    campo.value = data[name];

    if (campo.tagName === "TEXTAREA") {
      campo.style.height = "auto";
      campo.style.height = campo.scrollHeight + "px";
    }
  });

  generarNivel();
  generarDependencia();
}


/*
document.getElementById("cargarBorrador").addEventListener("click", async () => {
//-------------------------- Borrador con  folio (Backend)   
  
  const folio = document.getElementById("folioInput").value.trim();
  if (!folio) {
    alert("⚠️ Ingresa un folio válido");
    return;
  }

try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbzxz08ox-WUn2YKXPyX0GqfEx2BIAJzB0ODKZSefiF4tTfE2wYhJg93WkZXsjja3I-40g/exec", {
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
  tbody.innerHTML = "";

  // Reconstruir filas
//  const filas = data.__filas || 10;
//  for (let i = 1; i <= filas; i++) {
//    agregarFila();
//  }



// Restaurar selects encadenados
setSelectValue("secretaria", data.secretaria);

setTimeout(() => {
  setSelectValue("direccion", data.direccion);

  setTimeout(() => {
    setSelectValue("nivel", data.nivel);

    setTimeout(() => {
      setSelectValue("dependencia", data.dependencia);

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

      
      // ⬇️ Ahora sí, restaurar la tabla
      restaurarTabla(data);
      document.querySelectorAll("#tablaBody tr").forEach(fila => {
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

*/





//Guardado de Datos    
/*    
 const form = document.getElementById("miFormulario");
 const aviso = document.getElementById("aviso");   
    document.getElementById("miFormulario").addEventListener("submit", function(e){
                e.preventDefault();
                if (!this.checkValidity()) {
                    this.reportValidity(); // muestra mensajes
                    return;  
                }
                 const confirmar = confirm("¿Estás seguro de que deseas enviar el formulario?");

                if (!confirmar) {
                  // ❌ Usuario canceló
                  return;
                }
                const formData = new FormData(this);
                const selectsTexto = [
                      "secretaria",
                      "direccion",
                      "nivel",
                      "dependencia"
                ];
                selectsTexto.forEach(id => {
                        const select = document.getElementById(id);
                        if (select && select.selectedIndex >= 0) {
                        formData.set(id, select.options[select.selectedIndex].text);
                        }
                });
                aviso.textContent = " ";
                const data = Object.fromEntries(formData);
                //fetch("https://script.google.com/macros/s/AKfycbylJPoK0gXZxnMQzAWlCLGbwMvi7OsMV-rKF3eEpNDSkpbzZ8R6kzFAadKFIonA97Of-Q/exec", {
                //                 method: "POST",
                //                 body: new FormData(this)
               // })
                
                 fetch("https://script.google.com/macros/s/AKfycbzxz08ox-WUn2YKXPyX0GqfEx2BIAJzB0ODKZSefiF4tTfE2wYhJg93WkZXsjja3I-40g/exec", {
                  method: "POST",
                  body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(res => {
                 if (!res.success) {
                   aviso.textContent = "⚠️ " + res.message;
                   aviso.style.color = "red";
                   return;
                 }
                 aviso.textContent = "✅ Tu respuesta fue enviada correctamente";
                 aviso.style.color = "green";
                 form.reset();
                 alert("Datos enviados correctamente");
                 this.reset();
  })
  .catch(() => alert("Error al enviar"));
});

*/

















