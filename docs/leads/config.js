/* ZO Leads · configuración del evento y del enrutado por territorio.
   Edita este fichero para reutilizar la app en otro congreso.
   Los cambios hechos desde la pestaña "Ajustes" del móvil se guardan en el
   propio dispositivo y tienen prioridad sobre este fichero.

   ATENCIÓN: el reparto provincia → territorio es una PROPUESTA deducida de los
   nombres de los territorios (no había tabla en Box). Hay que validarlo con
   Ventas antes del congreso. Los delegados y sus correos sí están confirmados. */
window.LEADS_CONFIG = {
  version: 1,
  evento: { nombre: "GEDET 2026", lugar: "", fechas: "" },

  /* quién está en el stand (aparece como desplegable "Captado por") */
  captadores: ["Jorge", "Aitana", "Marina"],

  /* territorio → delegado responsable + provincias que enruta */
  territorios: [
    { nombre: "Central Hub", delegado: "Mar Zorrilla", email: "mzorrillaabad@zoskinhealth.com",
      provincias: ["Madrid","Toledo","Guadalajara","Cuenca","Ciudad Real","Albacete","Segovia","Ávila","Valladolid","Salamanca","Zamora","León","Palencia","Burgos","Soria","Cáceres","Badajoz"] },
    { nombre: "North Mediterranean Cluster", delegado: "Chus Marques", email: "cmarquesmedina@zoskinhealth.com",
      provincias: ["Barcelona","Girona","Lleida","Tarragona","Illes Balears"] },
    { nombre: "East Corridor", delegado: "Inés Justamante", email: "ijustamante@zoskinhealth.com",
      provincias: ["Valencia","Castellón","Alicante","Murcia","Zaragoza","Huesca","Teruel"] },
    { nombre: "South Division", delegado: "Karmen Arellano", email: "karrellano@zoskinhealth.com",
      provincias: ["Sevilla","Málaga","Cádiz","Córdoba","Granada","Jaén","Almería","Huelva","Ceuta","Melilla","Las Palmas","Santa Cruz de Tenerife"] },
    { nombre: "North Corridor", delegado: "Nerea Iratzagorria", email: "niratzagorria@zoskinhealth.com",
      provincias: ["Bizkaia","Gipuzkoa","Araba/Álava","Navarra","La Rioja","Cantabria"] },
    { nombre: "Atlantic Cluster", delegado: "Raúl Santana", email: "rsantana@zoskinhealth.com",
      provincias: ["A Coruña","Lugo","Ourense","Pontevedra","Asturias"] }
  ],

  /* territorio de reserva si la provincia no está en ninguna lista */
  territorioPorDefecto: "Sin territorio asignado",

  especialidades: ["Dermatología","Medicina estética","Cirugía plástica","Medicina general","Enfermería / esteticista","Farmacia","Distribuidor","Otro"],
  intereses: ["Abrir cuenta ZO","Getting Skin Ready®","Correct","Strengthen","Protect","Optimize","Formación","Peelings / protocolos en clínica","Solo información"],
  acciones: ["Visita del delegado","Enviar información","Enviar muestras","Invitar a formación","Llamada de seguimiento","Sin acción"],

  rgpd: {
    responsable: "ZO Skin Health España",
    email: "privacidad@zoskinhealth.com",
    texto: "Consiente que ZO Skin Health España trate sus datos para contactarle con información comercial, científica y de formación sobre sus productos. Puede retirar el consentimiento y ejercer sus derechos escribiendo al correo indicado."
  }
};
