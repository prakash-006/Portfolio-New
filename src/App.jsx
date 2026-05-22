import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaCode,
  FaServer,
  FaTools,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import praash1 from './assets/praash1.jpg'
import prakash2 from './assets/prakash2.jpg'

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_35%),radial-gradient(circle_at_bottom_right,#bfdbfe,transparent_30%),#ffffff] text-slate-900 overflow-hidden">
      <style>
        {`
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(35px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-up {
            animation: fadeUp 0.8s ease both;
            animation-timeline: view();
            animation-range: entry 0% cover 30%;
          }
        `}
      </style>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-5">
        <div className="absolute top-20 left-10 w-52 h-52 bg-blue-300/30 blur-3xl rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-60 h-60 bg-blue-400/20 blur-3xl rounded-full"></div>

        <div className="w-38 h-38 rounded-full bg-gradient-to-br from-sky-400 to-blue-700 flex items-center justify-center text-white text-4xl font-bold shadow-2xl shadow-blue-300 border-4 border-white fade-up">
          <img src={prakash2} className="rounded-full" alt="" />
        </div>
    

        <p className="mt-5 text-sm text-blue-600 font-medium fade-up">Hi, I am</p>

        <h1 className="text-4xl md:text-6xl font-extrabold mt-2 fade-up">
          Prakash <span className="text-blue-600"></span>
        </h1>

        <h2 className="text-xl md:text-2xl text-blue-600 font-bold mt-3 fade-up">
          MERN Stack Developer
        </h2>

        <p className="max-w-xl text-slate-600 mt-5 leading-7 fade-up">
         Hello, I’m Prakash Prajapat, a passionate MERN Stack Developer focused on building modern and responsive web applications.
        </p>

      expierence
      <a href="#expierence" className="mt-7 px-7 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition fade-up">Expierince</a>
          

        {/* <button className="mt-7 px-7 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition fade-up">
          Contact Me
        </button> */}

        <div className="flex gap-4 mt-7 fade-up">
       
      
        
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-5 px-5 text-center fade-up">
        <p className="text-blue-500 tracking-widest">● ● ●</p>
        <h2 className="text-3xl font-bold mt-3">About Me</h2>

        <p className="max-w-2xl mx-auto mt-6 text-slate-600 leading-8">
         Hello i am Passionate MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js and MongoDB. Built responsive and secure applications with JWT authentication, email verification, OTP password reset, CRUD operations, REST APIs and profile management systems. Focused on clean UI, responsive frontend development and modern backend architecture.
Currently improving my full-stack development skills by building real-world projects and learning modern web technologies.
        </p>

      </section>

      {/* SKILLS */}
  <section className="relative py-5 px-5 bg-gradient-to-b from-white via-blue-50/40 to-white">
  <div className="max-w-5xl mx-auto text-center">
    <p className="text-blue-500 tracking-[8px] text-sm">● ● ●</p>
    <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
     Skills
    </h2>
    <p className="text-slate-500 mt-3">
      My technologies divided by frontend, backend and tools
    </p>
  </div>

  <div className="max-w-5xl mx-auto mt-16 relative">
    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-300 via-blue-500 to-blue-300 md:-translate-x-1/2"></div>

    {/* Frontend */}
    <div className="relative grid md:grid-cols-2 gap-8 mb-14 items-center">
      <div className="md:text-right">
        <div className="bg-white rounded-3xl p-7 shadow-lg shadow-blue-100 border border-blue-100 transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-200">
          <h3 className="text-2xl font-bold text-blue-600">Frontend</h3>
          <p className="text-slate-500 mt-2">Beautiful UI and responsive layouts</p>

          <div className="flex flex-wrap gap-3 mt-5 md:justify-end">
            {["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap"].map((skill) => (
              <span className="px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-sm font-semibold shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block"></div>

      <div className="absolute left-6 md:left-1/2 invisible md:visible  top-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-white shadow-lg md:-translate-x-1/2"></div>
    </div>

    {/* Backend */}
    <div className="relative grid md:grid-cols-2 gap-8 mb-14 items-center">
      <div className="hidden md:block"></div>

      <div>
        <div className="bg-white rounded-3xl p-7 shadow-lg shadow-blue-100 border border-blue-100 transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-200">
          <h3 className="text-2xl font-bold text-sky-600">Backend</h3>
          <p className="text-slate-500 mt-2">APIs, auth and database management</p>

          <div className="flex flex-wrap gap-3 mt-5">
            {["Node.js", "Express.js", "MongoDB", "REST API", "JWT"].map((skill) => (
              <span className="px-4 py-2 rounded-full bg-sky-50  border border-sky-100 text-sm font-semibold shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute left-6 md:left-1/2 invisible md:visible  top-1/2 w-5 h-5 rounded-full bg-sky-500 border-4 border-white shadow-lg md:-translate-x-1/2"></div>
    </div>

    {/* Tools */}
    <div className="relative grid md:grid-cols-2 gap-8 items-center">
      <div className="md:text-right">
        <div className="bg-white rounded-3xl p-7 shadow-lg shadow-blue-100 border border-blue-100 transition duration-300 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-200">
          <h3 className="text-2xl font-bold text-indigo-600">Tools</h3>
          <p className="text-slate-500 mt-2">Development, testing and deployment</p>

          <div className="flex flex-wrap gap-3 mt-5 md:justify-end">
            {["Git", "GitHub", "Postman", "VS Code", "vercal", "Render", "Figma"].map((skill) => (
              <span className="px-4 py-2 rounded-full bg-indigo-50  border border-indigo-100 text-sm font-semibold shadow-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block"></div>

      <div className="absolute left-6 md:left-1/2 invisible md:visible  top-1/2 w-5 h-5 rounded-full bg-indigo-500 border-4 border-white shadow-lg md:-translate-x-1/2"></div>
    </div>
  </div>
</section>

      {/* EXPERIENCE */}
<section id="expierence" className="py-24 px-5 bg-gradient-to-b from-white via-blue-50/50 to-white">
  <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
    <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-100 transition duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-200">
      
      <div className="flex items-center gap-4">
        <span className="w-2 h-12 rounded-full bg-blue-600"></span>
        <h2 className="text-xl md:text-3xl font-extrabold text-slate-900">
          Experience
        </h2>
      </div>

      <div className="mt-10 border-l-2 border-blue-200 pl-7 md:pl-10 relative">
        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></span>

        <p className="text-blue-600 font-extrabold sm:text-xl  text-sm">
          2025 - Present
        </p>

        <h3 className="text-sm wrap-break-word sm:text-base font-extrabold text-slate-900 mt-4">
          Freelance MERN Stack Developer
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600 md:text-base sm:text-xs font-medium">
          <li className="flex   gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
            Developed full-stack web applications
          </li>
          <li className="flex   gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
            Built responsive user interfaces
          </li>
          <li className="flex  gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
            Worked on authentication systems
          </li>
          <li className="flex  gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
            Created CRUD based management systems
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-white/80 backdrop-blur-xl border border-blue-100 rounded-3xl p-8 md:p-12 shadow-xl shadow-blue-100 transition duration-300 hover:scale-[1.01] hover:shadow-2xl hover:shadow-blue-200">
      
      <div className="flex items-center gap-4">
        <span className="w-2 h-12 rounded-full bg-blue-600"></span>
        <h2 className="text-xl md:text-3xl font-extrabold text-slate-900">
          Tech Stack

        </h2>
      </div>

      <div className="mt-10 border-l-2 border-blue-200 pl-7 md:pl-10 relative">
        <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-md"></span>

        <ul className="mt-6 space-y-4  text-slate-600 font-medium grid grid-cols-1 sm:grid-cols-1 md:text-base sm:text-xs md:grid-cols-2">
          <li className="flex gap-3 ">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
          Frontend Development
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
          Backend Development


          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
           REST API Integration

          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
           Authentication System
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
          CRUD Operations
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
           Database Management
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
          Responsive Design
          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
           State Management


          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
           File Upload System


          </li>
          <li className="flex gap-3">
            <span className="mt-2 w-2 h-2 rounded-full bg-blue-500"></span>
           Clean UI Development


          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* PROJECTS */}
      <section className="py-5 px-5 fade-up">
        <p className="text-center text-blue-500 tracking-widest">● ● ●</p>
        <h2 className="text-3xl font-bold text-center mt-3">Projcts</h2>

        <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-10">
        
            <div className="grid  sm:grid-cols-2  gap-5 items-center">
              <div className="bg-slate-900 rounded-xl p-3 shadow-xl">
                <div className="h-32 bg-gradient-to-br from-slate-800 to-blue-900 rounded-lg"></div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-black ">TaskFlow</h3>
                <p className="text-sm text-blue-500 mt-1">
                 
                </p>
                <p className="text-slate-600 mt-3 text-sm leading-6">
                  Modern responsive website with clean UI, smooth experience and
                  professional layout.
                </p>

               <div className="mt-4">
                 <a href="https://github.com/prakash-006/TaskFlow" className="mt-8 px-5 py-2  border border-blue-500 text-blue-600 rounded-full text-sm hover:bg-blue-600 hover:text-white transition">View Project →</a>
               </div>
              </div>
            </div>
          
        </div>
      </section>

      {/* CONTACT */}
   <section id="contact" className=" px-5 py-10 pb- ">
        <div className=" max-w-7xl m-auto shadow-blue-100 shadow-lg border-blue-100 border bg-white text-black  rounded-xl p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          <div>
            <h2 className="text-3xl font-bold">Let's Connect</h2>
            <p className="text-gray-500 mt-3">Open to work, projects and collaboration.</p>
          </div>

          <div className="space-y-3">
            <p className="flex items-center gap-3"><FaEnvelope /> prakashprajapat9079@gmail.com</p>
            <p className="flex items-center gap-3"><FaPhoneAlt /> +91 8824940669</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> Jodhpur, Rajasthan</p>
          </div>

          <div className="flex gap-4 md:justify-end text-xl">
            <a href="https://github.com/prakash-006" className="w-12 h-12 bg-gray-200 rounded-full flex items-center hover:text-white  hover:bg-green-500 justify-center"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/prakash-prajapat-25b241265/" className="w-12 h-12 bg-gray-200 rounded-full hover:text-white flex items-center hover:bg-blue-500 justify-center"><FaLinkedin/></a>
            <a href="https://www.instagram.com/mr_kumar_ll" className="w-12 h-12 bg-gray-200 rounded-full flex items-center hover:text-white hover:bg-red-500 justify-center"><FaInstagram /></a>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-slate-500 text-sm">
        Prakash Prajapat. All rights reserved.
      </footer>
    </div>
  );
}