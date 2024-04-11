import Header from "../Common/Header";
import './About.css';
const About = () => {
    return (
        <div className="about-body">
            <Header />
            <div className="about-body">
                <div className="about-main">
                    <div className="about-logo">
                        <img src="https://www.pngitem.com/pimgs/m/236-2366651_transparent-student-icon-png-transparent-student-png-icon.png" alt="student logo"></img>
                    </div>
                    <div className="about-content">
                        <h1>Student Management System</h1><hr />
                        <p>Schools and Universities are the foundation of knowledge and an educational body on which students rely upon. Therefore, they need to maintain a proper database of its students to keep all the updated records and easily share information with students. Most schools and Universities count on an advanced software tool knows as 'Student Information System (SIS)' to keep all their student records and administrative operations including, examinations, attendance, and other activities.</p>
                    </div>
                </div>
                <div className="about-tech">
                    <h1>Technology Used in this System</h1> <hr />
                    <p>In the STUDENT MANAGEMENT SYSTEM we use <strong>MERN</strong> Technology. MERN Stack is a Javascript Stack that is used for easier and faster deployment of full-stack web applications. MERN Stack comprises of 4 technologies namely: MongoDB, Express, React and Node.js. It is designed to make the development process smoother and easier.
                        Each of these 4 powerful technologies provides an end-to-end framework for the developers to work in and each of these technologies play a big part in the development of web applications.</p>
                </div>
                <div className="tech-container">
                    <div className="react-logo">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="react logo"></img>
                    </div>
                    <div className="react-about">
                        <h2 id="reacth2">About React.JS</h2> <hr />
                        <p>ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition
                            React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time. Lots of people use React as the V in MVC. React abstracts away the DOM from you, offering a simpler programming model and better performance. React can also render on the server using Node, and it can power native apps using React Native. React implements one-way reactive data flow, which reduces the boilerplate and is easier to reason about than traditional data binding.</p>
                    </div>
                </div>
                <div className="tech-container">
                    <div className="react-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="express logo" id="expressimg"></img>
                    </div>
                    <div className="react-about">
                        <h2 id="expressh2">About Express.JS</h2> <hr />
                        <p>Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing. It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.</p>
                    </div>
                </div>
                <div className="tech-container">
                    <div className="react-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png" alt="node logo" id="nodeimg"></img>
                    </div>
                    <div className="react-about">
                        <h2 id="nodeh2">About Node.JS</h2> <hr />
                        <p>Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js runtime on OS X, Microsoft Windows, and Linux.
                            Node.js also provides a rich library of various JavaScript modules which simplifies the development of web applications using Node.js to a great extent.</p>
                    </div>
                </div>
                <div className="tech-container">
                    <div className="react-logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png" alt="node logo" id="mongoimg"></img>
                    </div>
                    <div className="react-about">
                        <h2 id="mongoh2">About MongoDB</h2> <hr />
                        <p>MongoDB is an open-source document-oriented database that is designed to store a large scale of data and also allows you to work with that data very efficiently. It is categorized under the NoSQL (Not only SQL) database because the storage and retrieval of data in the MongoDB are not in the form of tables.
                            The MongoDB database is developed and managed by MongoDB.Inc under SSPL(Server Side Public License) and initially released in February 2009. It also provides official driver support for all the popular languages like C, C++, C#, and .Net, Go, Java, Node.js, Perl, PHP, Python, Motor, Ruby, Scala, Swift, Mongoid. So, that you can create an application using any of these languages. Nowadays there are so many companies that used MongoDB like Facebook, Nokia, eBay, Adobe, Google, etc. to store their large amount of data. </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

