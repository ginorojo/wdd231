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
const creditsContainer = document.createElement('div'); // Contenedor para los créditos
creditsContainer.className = 'credits';
document.querySelector('.filters').after(creditsContainer);

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
        // Crear tarjeta para el curso
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.style.backgroundColor = course.completed ? '#d4edda' : '#f8d7da'; // Colores según completado

        // Contenido de la tarjeta
        courseCard.innerHTML = `
            <h4>${course.subject} ${course.number}</h4>
            <p>${course.title}</p>
            <p>Credits: ${course.credits}</p>
        `;

        // Añadir la tarjeta al contenedor
        coursesContainer.appendChild(courseCard);

        // Sumar créditos del curso
        totalCredits += course.credits;
    });

    // Actualizar y mostrar créditos totales
    creditsContainer.textContent = `Total Credits: ${totalCredits}`;
}

// Asignar eventos a los botones de filtro
document.querySelectorAll('.filters button').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.textContent.trim().toLowerCase(); // Filtro según texto del botón
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
