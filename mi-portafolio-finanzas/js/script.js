/**
 * Almacén de Datos Estructurados de Evidencias
 * Las rutas apuntan perfectamente de forma relativa desde index.html hacia: assets/evidencias/...
 * Se eliminaron los bloques y etiquetas intermedias en los módulos para mostrar las imágenes en orden directo.
 */
const moduleData = {
    1: {
        title: "Módulo 1: Fundamentos Contables",
        desc: "Visualización ordenada de lecturas analíticas, quizzes teóricos y confirmaciones de nota final.",
        content: `
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-1.png" alt="Evidencia 1"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-2.png" alt="Evidencia 2"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-3.png" alt="Evidencia 3"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-4.png" alt="Evidencia 4"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-5.png" alt="Evidencia 5"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-6.png" alt="Evidencia 6"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-7.png" alt="Evidencia 7"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-8.png" alt="Evidencia 8"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo1/modulo1-9.png" alt="Evidencia 9"></div>
            <div class="gallery-image-wrapper"><img src="assets/evidencias/modulo1/modulo1-10.png" alt="Evidencia 10"></div>
        `
    },
    2: {
        title: "Módulo 2: Gestión y Costeo",
        desc: "Soportes prácticos enfocados en la asignación de flujos de producción y cálculo del Punto de Equilibrio.",
        content: `
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-1.png" alt="Evidencia 1"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-2.png" alt="Evidencia 2"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-3.png" alt="Evidencia 3"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-4.png" alt="Evidencia 4"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-5.png" alt="Evidencia 5"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-6.png" alt="Evidencia 6"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-7.png" alt="Evidencia 7"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo2/modulo2-8.png" alt="Evidencia 8"></div>
            <div class="gallery-image-wrapper"><img src="assets/evidencias/modulo2/modulo2-9.png" alt="Evidencia 9"></div>
        `
    },
    3: {
        title: "Módulo 3: Indicadores y DuPont",
        desc: "Registros del comportamiento financiero operativo y desglose del sistema DuPont.",
        content: `
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-1.png" alt="Evidencia 1"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-2.png" alt="Evidencia 2"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-3.png" alt="Evidencia 3"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-4.png" alt="Evidencia 4"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-5.png" alt="Evidencia 5"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-6.png" alt="Evidencia 6"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-7.png" alt="Evidencia 7"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo3/modulo3-8.png" alt="Evidencia 8"></div>
            <div class="gallery-image-wrapper"><img src="assets/evidencias/modulo3/modulo3-9.png" alt="Evidencia 9"></div>
        `
    },
    4: {
        title: "Módulo 4: Evaluación de Proyectos",
        desc: "Soportes finales sobre flujos netos de efectivo, estimación de tasas de descuento, VPN y TIR.",
        content: `
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-1.png" alt="Evidencia 1"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-2.png" alt="Evidencia 2"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-3.png" alt="Evidencia 3"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-4.png" alt="Evidencia 4"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-5.png" alt="Evidencia 5"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-6.png" alt="Evidencia 6"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-7.png" alt="Evidencia 7"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;"><img src="assets/evidencias/modulo4/modulo4-8.png" alt="Evidencia 8"></div>
            <div class="gallery-image-wrapper"><img src="assets/evidencias/modulo4/modulo4-9.png" alt="Evidencia 9"></div>
        `
    }
};

const introData = {
    title: "Apertura e Inducción al Programa",
    desc: "Primer contacto con los contenidos de la plataforma y distribución metodológica del plan formativo.",
    content: `
        <div class="gallery-block">
            <span class="gallery-label">1. Informacion acerca del curso</span>
            <div class="gallery-image-wrapper">
                <img src="assets/evidencias/introduccion/introduccion-1.png" alt="Inducción al programa">
            </div>
        </div>
        <div class="gallery-block">
            <span class="gallery-label">2. Encuesta de Satisfaccion del Curso</span>
            <div class="gallery-image-wrapper">
                <img src="assets/evidencias/introduccion/introduccion-2.png" alt="Estructura evaluativa del curso">
            </div>
        </div>
        <div class="gallery-block">
            <span class="gallery-label">3. Guia de referencia del curso</span>
            <div class="gallery-image-wrapper">
                <img src="assets/evidencias/introduccion/introduccion-3.png" alt="Check de inicio aprobado en Coursera">
            </div>
        </div>
    `
};

const summaryData = {
    title: "Resumen de Logros y Finalización",
    desc: "Validación global de notas, listas de verificación del plan de estudios y aprobaciones finales.",
    content: `
        <div class="gallery-block">
            <span class="gallery-label">1. Felicitación Oficial por Culminación del Curso</span>
            <div class="gallery-image-wrapper">
                <img src="assets/constancia-certificado.png" alt="Felicitaciones de Coursera">
            </div>
        </div>
        <div class="gallery-block">
            <span class="gallery-label">2. Panel Centralizado de Tareas y Estado de Aprobaciones</span>
            <div class="gallery-image-wrapper" style="margin-bottom: 15px;">
                <img src="assets/evidencias/resumen-curso/resumen-curso3.png" alt="Estado global de aprobaciones">
            </div>
        </div>
        <div class="gallery-block">
            <span class="gallery-label">3. Desglose Validado del Plan de Contenidos del Programa</span>
            <div class="gallery-image-wrapper"><img src="assets/evidencias/resumen-curso/resumen-curso4.png" alt="Ítems validados de la estructura 3"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 12px;"><img src="assets/evidencias/resumen-curso/resumen-curso5.png" alt="Ítems validados de la estructura 1"></div>
            <div class="gallery-image-wrapper" style="margin-bottom: 12px;"><img src="assets/evidencias/resumen-curso/resumen-curso6.png" alt="Ítems validados de la estructura 2"></div>
            <div class="gallery-image-wrapper"><img src="assets/evidencias/resumen-curso/resumen-curso7.png" alt="Ítems validados de la estructura 3"></div>
        </div>
    `
};


const modal = document.getElementById('evidence-modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalGallery = document.querySelector('.modal-body-gallery');

function openModuleModal(event) {
    const card = event.target.closest('.card');
    const moduleNumber = card.getAttribute('data-module');
    const data = moduleData[moduleNumber];
    
    if (data) {
        renderModal(data.title, data.desc, data.content);
    }
}

function openIntroModal() {
    renderModal(introData.title, introData.desc, introData.content);
}

function openSummaryModal() {
    renderModal(summaryData.title, summaryData.desc, summaryData.content);
}

function renderModal(title, desc, content) {
    modalTitle.textContent = title;
    modalDescription.textContent = desc;
    modalGallery.innerHTML = content;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    modalGallery.scrollTop = 0;         
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; 
}

window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}