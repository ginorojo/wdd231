const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Seleccionar elementos clave del DOM
const coursesContainer = document.querySelector('.courses');
const creditsContainer = document.querySelector('.credits p');
const dialog = document.querySelector('#course-dialog'); // Nuevo: Cuadro de diálogo añadido en el HTML
const dialogContent = {
    courseName: document.querySelector('#dialog-course-name'),
    courseTitle: document.querySelector('#dialog-course-title'),
    courseCredits: document.querySelector('#dialog-course-credits'),
    courseCertificate: document.querySelector('#dialog-course-certificate'),
    courseDescription: document.querySelector('#dialog-course-description'),
    courseTechnologies: document.querySelector('#dialog-course-technologies'),
};
const closeButton = dialog.querySelector('.close-dialog'); // Nuevo: Seleccionar el botón para cerrar el cuadro de diálogo

// Función para filtrar cursos según el filtro seleccionado
function filterCourses(filter) {
    return filter === 'all' 
        ? courses 
        : courses.filter(course => course.subject.toLowerCase() === filter);
}

// Función para renderizar las tarjetas de los cursos
function renderCourses(filteredCourses) {
    coursesContainer.innerHTML = ''; // Limpiar las tarjetas existentes
    let totalCredits = 0;

    filteredCourses.forEach(course => {
        const courseCard = document.createElement('button'); // Nuevo: Cambiar las tarjetas a botones interactivos
        courseCard.className = 'course-card';
        courseCard.style.backgroundColor = course.completed ? '#0ba948' : '#a92f0b'; // Colores según el estado completado
        courseCard.setAttribute('type', 'button'); // Nuevo: Asegurar que el elemento sea un botón

        courseCard.innerHTML = `
            <h4>${course.subject} ${course.number}</h4>
        `;

        courseCard.addEventListener('click', () => showDialog(course)); // Nuevo: Evento para mostrar el cuadro de diálogo

        coursesContainer.appendChild(courseCard);
        totalCredits += course.credits;
    });

    creditsContainer.textContent = `Total Credits: ${totalCredits}`;
}

// Nuevo: Función para mostrar el cuadro de diálogo con la información del curso
function showDialog(course) {
    dialogContent.courseName.textContent = `${course.subject}${course.number}`;
    dialogContent.courseTitle.textContent = course.title;
    dialogContent.courseCredits.textContent = `Credits: ${course.credits}`;
    dialogContent.courseCertificate.textContent = `Certificate: ${course.certificate}`;
    dialogContent.courseDescription.textContent = `Description: ${course.description}`;
    dialogContent.courseTechnologies.textContent = `Technologies: ${course.technology.join(', ')}`;

    dialog.classList.remove('hidden'); // Mostrar el cuadro de diálogo
    dialog.showModal(); // Activar el cuadro de diálogo
}

// Nuevo: Evento para cerrar el cuadro de diálogo
closeButton.addEventListener('click', () => {
    dialog.classList.add('hidden'); // Ocultar el cuadro de diálogo
    dialog.close(); // Cerrar el cuadro de diálogo
});

// Asignar eventos a los botones de filtro
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.trim().toLowerCase();
        const filteredCourses = filterCourses(filter);
        renderCourses(filteredCourses);
    });
});

// Renderizar todos los cursos al cargar la página
renderCourses(courses);


const hamburguer = document.querySelector('#hamburguer');
const link = document.querySelector('#nav-links');

hamburguer.addEventListener('click', () => {
    link.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;
});
