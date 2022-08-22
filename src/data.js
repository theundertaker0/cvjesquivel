const introInfo = {
    name: 'Juan Esquivel Méndez',
    title: 'Desarrollador',
    location: 'Progreso, Yucatán',
    description: '<strong>Turpis, sit amet iaculis dui consectetur at.</strong> Cras sagittis molestie orci. <strong>Suspendisse ut laoreet mi</strong>. Phasellus eu tortor vehicula, blandit enim eu, auctor massa. Nulla ultricies tortor dolor, sit amet suscipit enim <strong>condimentum id</strong>. Etiam eget iaculis tellus. Varius sit amet.',
    image: 'foto.jpg',
}

//dynamic icon
const socialMediaInfo = [{
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/ctheundertaker0/',
        username: 'theundertaker0',
        displayName: 'linkedin/theundertaker0'
    },

    {
        name: 'github',
        link: 'https://github.com/theundertaker0',
        username: 'theundertaker0',
        displayName: 'github/theundertaker0'
    },
     {
         name: 'twitter',
         link: 'https://twitter.com/theundertaker0',
         username: 'theundertaker0',
         displayName: 'twitter/theundertaker0'
     },
    // {
    //     name: 'stack-overflow',
    //     link: 'http://localhost:8080',
    //     username: 'coskuncayemre',
    //     displayName:'stackoverflow.com'
    // },
]


const contactInfo = [
    {
        name: 'envelope',
        context: 'amadeusdigital@gmail.com',
        size: '20px',
        style: "font-size:20px;margin-right: 10px;",
        link: 'mailto:amadeusdigital@gmail.com'
    },
    {
        name: 'phone-square',
        context: '9996569317',
        size: '23px',
        style: "font-size:23px;margin-right: 10px;",
        link: 'tel:9996569317'
    },
]

const summaryInfo = 
    'Desarrollador de aplicaciones web, móviles y de escritorio en diferentes tecnologías tales como: Laravel, Flutter, Angular, Bootstrap y Vue entre otras.'


//desc v-html 
const experinceInfo = [
    {
        workAt: 'Dirección de estrategia de datos de Gobierno de Yucatán',
        position: 'Desarrollador',
        duration: 'Nov 2020 – Presente',
        description: 'Desarrollador de diversos aplicativos con múltiples tecnologías tales como: Angular, Vue.js, Phalcon y Laravel. También destacar la implementación de servicios, contenedores e imágenes de Docker en proyectos recientes así como el manejo de Referencias Geo espaciales y la manipulación y visualización de capas y estilos de geoserver así como archivos kml, geojson y shape.',
        techs: ["PHP","Javascript","Postgresql","Phalcon", "Laravel"]
    },
    {
        workAt: 'Edumatics',
        position: 'Lider de proyectos de desarrollo',
        duration: 'May 2019 - Jun 2020',
        description: 'Lider de proyectos de desarrollo web en diversas tecnologías tales como: Laravel, Angular y Node, utilizando metologías ágiles (SCRUM) para el desarrollo de proyectos, entre mis funciones se encontraban, generación de historias de usuarios, backlogs, QA, etc.',
        techs: ["PHP","Javascript","Mysql","HTML5","CSS3", "Laravel"]
    },
    {
        workAt: 'Contigo Systems',
        position: 'Desarrollador Sr.',
        duration: 'Jun 2018 – Aug 2018',
        description: 'Desarrollador Sr. en proyectos de aplicaciones web y móvil principalmente utilizando las tecnologías de .net, Kotlin y SQL Server, entre los recursos utilizados en esta etapa destaca el uso de Stored Procedures en bases de datos y la generación de apis de consumo en aplicaciones móviles.',
        techs: [".NET", "Html5", "Bootstrap", "SQL Server", "Javascript"]
    },
]

const educationInfo = [
    {
        school: 'Universidad Interamericana para el Desarrollo',
        location: 'Mérida, Yucatán',
        title: 'Maestría en Tecnologías de la información',
        duration: '2010 -2012',
        description: 'Título y Cédula',
    },
    {
        school: 'Instituto Tecnológico Superior Progreso',
        location: 'Progreso, Yucatán',
        title: 'Licenciado en Informática',
        duration: '2000 – 2005',
        description: 'Titulación por examen EGEL con desempeño sobresaliente',
    },
]

const volunteerInfo = [
    // {
    //     organisation: 'The English Studio Language School',
    //     title: 'Student',
    //     duration: 'July 2018 - Sep 2018',
    //     description: 'London,UK',
    // },
    {
        organisation: 'Hacettepe University,Social Life Organization',
        title: 'Organization Manager',
        duration: '2015 – 2021',
        description: '',
    }, {
        organisation: 'Hacettepe University,Community of Contest',
        title: 'Organization Manager',
        duration: '2016 – 2018',
        description: '',
    },
    {
        organisation: 'Hacettepe University ACM',
        title: 'Member',
        duration: '2015 – 2020',
        description: '',
    }
]


const certificateInfo = [
    {
        organisation: 'Google',
        title: 'Introducción al Desarrollo Web',
        duration: 'Jul,2020',
        description: 'ID de la credencial 9Q7 A79 82F',
    },
    {
        organisation: 'CertiProf',
        title: 'Cyber Security Foundation Professional Certificate',
        duration: 'Ene,2021',
        description: 'ID de la credencial 32021',
    },
]

const projectInfo = [{
        title: 'Project 1',
        meta: 'Propulsion Engineer',
        description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
        images: [{
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
            }
        ]
    },
    {
        title: 'Project 1',
        meta: 'Propulsion Engineer',
        description: 'Responsibilities included: writing technical reports and other documentation, such as handbooks and bulletins, for use by engineering staff, management, and customers, analyzing project requests and proposals and engineering data to determine feasibility, predictability, cost, and production time of aerospace or aeronautical product.',
        images: [{
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=firstimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=secondimage&w=900&h=900'
            },
            {
                thumbnail: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=150&h=150',
                original: 'http://placeholdit.imgix.net/~text?txtsize=33&txt=thirdImage&w=900&h=900'
            }
        ]
    }
]


const skillInfo = [
    {
        name: 'Javascript',
        rate: 90,
    },
    {
        name: '.NET Core',
        rate: 65,
    },{
        name: 'Flutter',
        rate: 80,
    }, 
    {
        name: 'VueJS',
        rate: 75,
    },
    {
        name: 'Docker',
        rate: 75,
    },
    {
        name: 'Laravel (php)',
        rate: 85,
    },
    
]

const otherSkillInfo = ['TypeScript', 'phalcon', 'geoserver', 'Bootstrap']

const proSkillInfo = ['Liderazgo','Trabajo en Equipo','Autodidacta']

// 0,1,2,3,4,5
const languageInfo = [{
        name: 'Español',
        rate: 5,
        level: 'Nativo',
    },
    {
        name: 'Ingles',
        rate: 4,
        level: 'Int',
    },
  
]


const interestInfo = [{
        name: 'Traveler',
        description: "22 Countries,for now",
    },
    {
        name: 'Swimming',
        description: "",
    },
    {
        name: 'Entrepreneurship Ideas',
        description: "",
    },
    {
        name: 'Smart Home Ideas',
        description: "",
    },
]

export default {
    introInfo: introInfo,
    socialMediaInfo: socialMediaInfo,
    experinceInfo: experinceInfo,
    educationInfo: educationInfo,
    projectInfo: projectInfo,
    skillInfo: skillInfo,
    certificateInfo: certificateInfo,
    volunteerInfo: volunteerInfo,
    languageInfo: languageInfo,
    contactInfo: contactInfo,
    interestInfo: interestInfo,
    summaryInfo: summaryInfo,
    otherSkillInfo: otherSkillInfo,
    proSkillInfo: proSkillInfo
}