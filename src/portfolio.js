const header = {
  homepage: 'https://mihrettsegaye.github.io/portfolio', // Update with actual portfolio link if available
  title: 'MA',
}

const about = {
  name: 'Mahlet Amenu',
  role: 'Back-End Developer ',
  description:
    'A passionate and dedicated Computer Science student with a strong focus on backend development using Django. Experienced in building scalable web applications, designing RESTful APIs, and managing databases. Passionate about writing clean, efficient code and continuously improving backend performance. Eager to apply problem-solving skills and technical expertise to real-world projects',
  resume: 'https://docs.google.com/document/d/1nnWdaYazKrKokAbxq78-W5NWYQEuYUGZ5xRxugdZBks/edit?tab=t.0', // Update with actual resume link if available
  social: {
    linkedin: 'https://www.linkedin.com/in/mahlet-amenu16/', // Update with actual LinkedIn profile link
    github: 'https://github.com/mahlet-16', // Update with actual GitHub profile link
  },
}

const projects = [
  {
    name: 'Cleaning Website',
    description:
      ' A class project built for a local cleaning service company. It is a web-based application designed to manage service bookings, client information, and staff schedules efficiently.',
    stack: ['Bootstrap', 'php', 'MySQL'],
    sourceCode: 'https://github.com/mahlet-16/Cleanii', // Update with actual GitHub repo link
    livePreview: 'https://mahlet-16.github.io/Cleanii/', // Update with actual live preview link
  },
  {
    name: 'Gibi Website',
    description:
    ' A class project built for cpu college students which participate in this club. It is a web-based application designed to manage register new students, detail information, and program schedules efficiently.',
    stack: ['React'],
    sourceCode: 'https://github.com/mahlet-16/Gibi', // Placeholder link
    livePreview: ' https://mahlet-16.github.io/Gibi/Gibi-Website/', // Placeholder link
  },
  {
    name: ' Team Portfolio',
    description:
      'This project is a dynamic portfolio website built for a tech team of six members. Developed using Bootstrap for a responsive and modern front-end, PHP for server-side logic, and WAMP Server (Windows, Apache, MySQL, PHP) for local development and database management.',
    stack: [ 'Bootstrap', 'php', 'MySQL'],
    sourceCode: 'https://github.com/mahlet-16/Helix-s-Portfolio', // Placeholder link
    livePreview: ' https://mahlet-16.github.io/Helix-s-Portfolio/', // Placeholder link
  },
  {
    name: 'EventManagement API',
    description:
      'This project is a backend-only Event Management system built with Django. It provides a RESTful API to manage events, users, and registrations. Designed for flexibility and scalability, the API allows easy integration with any frontend (mobile apps, web apps, admin panels, etc.).',
    stack: [ 'Django'],
    sourceCode: 'https://github.com/mahlet-16/EventManagement_api', // Placeholder link
  },
  {
    name: 'API for online market',
    description:
      'TThis project is a backend-only system built with Django to manage the sale of skincare products. It exposes a RESTful API that handles product listings, customer orders, inventory management, and user authentication. The backend is designed to easily integrate with any frontend website, mobile app, or admin dashboard.',
    stack: [ 'Django'],
    sourceCode: 'https://github.com/mahlet-16/project_2/tree/main', // Placeholder link
  },
  {
    name: 'Library Project',
    description:
      'This project is a full-stack web application designed to simplify the management of books, users, and borrowing activities in a library.',
    stack: [ 'Django'],
    sourceCode: 'https://github.com/mahlet-16/Alx_DjangoLearnLab/tree/main/advanced_features_and_security/LibraryProject', // Placeholder link
  },
  {
    name: 'Social media API',
    description:
      'This project is a fully functional Social Media API built using Django and Django REST Framework. It provides the backend logic and endpoints for a basic social platform where users can create profiles, post content, interact through likes and comments, and follow/unfollow other users.',
    stack: [ 'Django'],
    sourceCode: 'https://github.com/mahlet-16/Alx_DjangoLearnLab/tree/main/social_media_api', // Placeholder link
  },
]

const skills = [
  'Django',
  'Python',
  'php',
  'REACT',
  'Java',
  'bootstrap',
  'c++',
  
]

const contact = {
  email: 'mahletamenu16@gmail.com',
}

export { header, about, projects, skills, contact}
