import smsImage from "./assets/Images/cardImages/sms.png"
import shilpaImage from "./assets/Images/cardImages/shilpa.png"
import unilifeImage from "./assets/Images/cardImages/unilife.png"
import hosImage from "./assets/Images/cardImages/hos.png"
import prezzImage from "./assets/Images/cardImages/prezz.png"
import nieImage from "./assets/Images/cardImages/nie.png"
import tmmImage from "./assets/Images/cardImages/tmm.png"
import puff from "./assets/Images/cardImages/electro.png"
import weather from "./assets/Images/cardImages/weather.jpeg"
import note from "./assets/Images/cardImages/note.jpg"
import news from "./assets/Images/cardImages/news.jpg"
import device from "./assets/Images/cardImages/device.jpg"
export const ProjectList =[
    
      {
        id:"1",
        name: "School Management System",
        type:"academic",
        image: smsImage,
        technology:"VueJS , NodeJS,MongoDb",
        tools:"VS Code, Postman",
        gitLink:{
          linkone:"https://github.com/asankagamage98/iGradePlus-sms-frontend.git",
          linktwo:"https://github.com/asankagamage98/iGradePlus-sms-backend.git"
        },
        description:
          "The School Management System is a comprehensive web application designed to streamline various administrative tasks for school staff members. Developed by a team of four using Vue.js for the frontend and Node.js for the backend, this system offers efficient management of school resources and activities.",
      },
      {
        id:"2",
        name: "Electrogird system",
        type:"academic",
        image: puff,
        technology:"Java",
        tools:"Eclips, Postman",
        gitLink:{
          linkone:"https://github.com/asankagamage98/PAF_assigment2.git",
          linktwo:"https://github.com/asankagamage98/PAF-2022"
        },
        description:
          "The Electrogird system is a versatile platform designed for seamless management of various electrogird operations. From efficiently handling user accounts to managing bills, processing payments, and overseeing notifications, this system offers a comprehensive solution for streamlined and effective electrogird operations. With a user-friendly interface and robust functionalities, it ensures a smooth and organized workflow in the electrified grid ecosystem.",
      },
      {
        id:"3",
        name: "Education institute management system",
        type:"academic",
        image: shilpaImage,
        technology:"VueJS,Laravel,MySql",
        tools:"VS Code, Postman",
        gitLink:{
          linkone:"https://github.com/asankagamage98/Shilpa-eims-frontend-employee-",
          linktwo:"https://github.com/asankagamage98/Shilpa-eims-backend-employee-"
        },
        description:
          "The Shilpa Education Institute Management System was created to replace the manual system previously used by the institute located in Mahiyanganaya. As undergraduate students in Information Technology, a group proposed to develop a fully automated system to address issues of detail misplacement. After discussing requirements with the institute owner, Mr. V.P.A Vidanapathirana, the group decided to develop a web application connected to a database management system. They identified and developed eight interconnected subsystems including Student, Teacher, and Employee Management, Time Scheduling, Classroom Management, Finance, Examination, Attendance, and Notification Management Systems. The group regularly updated the client with prototypes, accommodating changes according to requirements. The system was completed within the agreed timeline and passed all test cases, providing the institute with a successful and error-free automated management solution.",
      },
      {
         id:"4",
        name: "UniLife mobile application",
        type:"academic",
        image: unilifeImage,
        technology:"Java,Sqlite,XML",
        tools:"Android Studio, Postman",
        gitLink:{
          linkone:"https://github.com/asankagamage98/UniLife.git",
          linktwo:""
        },
        description:
          "The UniLife app aims to enhance students' academic performance by providing tools to calculate GPA and organize academic responsibilities. Its main features include a GPA calculator, exam reminders, event reminders, and lecture reminders. Users can set GPA improvement goals and track their progress throughout the semester. Additionally, the app allows students to arrange their academic schedule, set reminders for lectures, exams, and special events, helping them stay on top of their academic commitments. Overall, UniLife streamlines the academic experience, promoting better organization and focus for students striving to excel in their studies.",
      },
      {
         id:"5",
        name: "Re designed NIE website",
        type:"academic",
        image: nieImage,
        technology:"",
        tools:"Adobe XD",
        gitLink:{
          linkone:"https://www.behance.net/gallery/128582503/NIE-Website-Redesigned-Prototype",
          linktwo:""
        },
        description:
          "The project entails revamping the NIE website, plagued by usability issues like CRUD problems, poor color scheme, small font size, complex navigation, unappealing layout, data validation flaws, and lack of thematic consistency. This Sri Lankan Government-owned site serves teachers, students, and employers. After selecting NIE.lk from five options with issues, stakeholders were identified, and personas were crafted per the Gantt Chart plan. Usability testing involved three stakeholders to pinpoint existing issues. The goal is to rebuild the NIE website, addressing these challenges. The report will summarize the first four weeks, covering issue identification, stakeholder analysis, persona creation, and usability test findings.",
      },
      {
         id:"6",
        name: " E-channeling system ",
        type:"academic",
        image: hosImage,
        technology:"HTML,CSS,Java,MySql",
        tools:"VS Code",
        gitLink:{
          linkone:"https://github.com/asankagamage98/second_year_1stsem_project.git",
          linktwo:""
        },
        description:
          "The online e-channeling system for private hospitals simplifies doctor and patient interactions. Doctors and patients can register, and patients can easily book appointments with their preferred physicians. The system, built using HTML, CSS, and Java, ensures seamless appointment scheduling, improving accessibility and efficiency in healthcare services.",
      },
      {
         id:"7",
        name: " Prezz Online presentation system",
        type:"academic",
        image: prezzImage,
        technology:"HTML,CSS,PHP",
        tools:"VS Code,XAMPP",
        gitLink:{
          linkone:"https://github.com/asankagamage98/second_sem_project.git",
          linktwo:""
        },
        description:
          "In our first-year second-semester project, a team of five members collaborated to develop a dynamic platform using HTML, CSS, and PHP. This project revolves around creating an online presentation tool, offering users the capability to generate presentations seamlessly. Through the integration of various web technologies, we aimed to provide an intuitive and user-friendly experience. With a focus on teamwork and leveraging multiple programming languages, our goal was to develop a robust system that empowers users to craft compelling presentations effortlessly.",
      },


      //other projects
      {
        id:"8",
       name: "Training Material Management System",
       type:"industry",
       image: tmmImage,
       technology:"ReactJS,Laravel,MySql",
       tools:"VS Code,Postman,Selenium",
       gitLink:{
        linkone:"",
        linktwo:""
      },
       description:
         "The Training Material Management System (TMMS) is a user-friendly platform designed to assist new trainees in gaining the necessary knowledge and skills for their roles within the company. Accessible from any web-enabled device, TMMS offers resources such as documents, guides, videos, notices, and policies tailored to each trainee's division. Users can also take practice tests to reinforce learning and identify areas for improvement. System administrators have full control over user management and content, ensuring information is up-to-date and relevant. Overall, TMMS aims to empower new trainees to succeed in their roles by providing comprehensive and accessible training resources.",
     },

     {
      id:"9",
     name: "Weather Api Management System",
     type:"industry",
     image: weather,
     technology:"NodeJs,MongoDB",
     tools:"VS Code,Postman",
     gitLink:{
      linkone:"https://github.com/asankagamage98/Node-Weather-API-Management.git",
      linktwo:"https://assessment-code-scale.vercel.app/"
    },
     description:
       "The Weather Report API is a Node.js application designed to store users' emails and locations, providing automatic hourly weather reports every 3 hours. It leverages MongoDB for data storage, Mongoose for schema definition, and the OpenWeatherMap API for fetching weather data. The application includes routes for storing user details, updating locations, and retrieving weather data for a specific day. Additionally, it utilizes Nodemailer and Gmail to send periodic weather reports to users.",
   },
   {
    id:"10",
   name: "My Note Management System",
   type:"industry",
   image:note,
   technology:"NodeJs,MongoDB,ReactJS,Tailwindcss",
   tools:"VS Code,Postman",
   gitLink:{
    linkone:"https://github.com/asankagamage98/Note-management-frontend.git",
    linktwo:"https://github.com/asankagamage98/Note-management-backend.git"
  },
   description:
     "This is a simple web application that allows users to manage their notes. Users can create, view, update, and delete notes through an intuitive user interface. The application consists of frontend and backend components.",
 },
 {
  id:"101",
 name: "News Management System(News WebApp)",
 type:"industry",
 image:news,
 technology:"NodeJs,MongoDB,NextJS,Tailwindcss",
 tools:"VS Code,Postman",
 gitLink:{
  linkone:"https://github.com/asankagamage98/news-webApp.git",
  linktwo:"https://github.com/asankagamage98/News-Management-Backend.git"
},
 description:
   "NEWS WEBAPP: Next.js & Tailwind CSS power secure admin dashboards for article(news) management. Admin can manage the news he can edit, delete, and add news from the admin dashboard. Non-registered users can view articale.Node.js (Express.js) backend with MongoDB. Mobile-responsive, with CRUD operations. ",
},
{
  id:"101",
 name: "Location-Based Device Control System",
 type:"industry",
 image:device,
 technology:"NodeJs,MongoDB,ReactJS,Tailwindcss",
 tools:"VS Code,Postman",
 gitLink:{
  linkone:"https://github.com/asankagamage98/location-device-manager-frontend.git",
  linktwo:"https://github.com/asankagamage98/location-device-manager-backend.git"
},
 description:
   "The project, (Location-Based Device Control), integrates a React-based front-end and a Node.js/Express.js backend to manage locations and associated devices. The React interface offers intuitive forms and interactive components for users to view, add, update, and remove locations and devices. Meanwhile, the Node.js backend provides a RESTful API for CRUD operations on this data, with MongoDB serving as the database to store location and device information.",
},
]