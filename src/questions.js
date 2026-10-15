// src/questions.js - 8 Semesters BTech Structure, PYQs & Question Bank

export const btechSemesters = [
  {
    semester: "Semester 1",
    subjects: ["Engineering Mathematics-I", "Engineering Physics", "Programming for Problem Solving", "Basic Electrical Engineering"]
  },
  {
    semester: "Semester 2",
    subjects: ["Engineering Mathematics-II", "Engineering Chemistry", "Basic Electronics", "Environmental Science"]
  },
  {
    semester: "Semester 3",
    subjects: ["Data Structures and Algorithms (DSA)", "Object Oriented Programming (OOPs)", "Discrete Mathematics", "Computer Organization & Architecture"]
  },
  {
    semester: "Semester 4",
    subjects: ["Operating Systems", "Database Management Systems (DBMS)", "Computer Networks", "Software Engineering"]
  },
  {
    semester: "Semester 5",
    subjects: ["Web Technologies (HTML, CSS, JS)", "Design and Analysis of Algorithms", "Artificial Intelligence", "Compiler Design"]
  },
  {
    semester: "Semester 6",
    subjects: ["Cloud Computing", "Machine Learning", "Information Security", "Mobile App Development"]
  },
  {
    semester: "Semester 7",
    subjects: ["Big Data Analytics", "Cyber Security", "Internet of Things (IoT)", "DevOps"]
  },
  {
    semester: "Semester 8",
    subjects: ["BlockChain Technology", "Quantum Computing", "Major Project", "Professional Ethics"]
  }
];

export const samplePYQs = [
  {
    id: 1,
    semester: "Semester 3",
    subject: "Data Structures and Algorithms (DSA)",
    year: "2024",
    title: "End-Term Examination Paper 2024",
    questionUrl: "#"
  }
];

export const questionBank = [
  {id:1, topic:'HTML', q:'What does HTML stand for?', options:['HyperText Markup Language','HighText Machine Language','Hyper Transfer Main Link','Home Tool Markup Language'], a:0, explanation:'HTML stands for HyperText Markup Language.'},
  {id:2, topic:'HTML', q:'Which tag creates a hyperlink?', options:['<link>','<a>','<href>','<url>'], a:1, explanation:'The anchor tag <a> creates a hyperlink.'},
  {id:3, topic:'CSS', q:'What does CSS stand for?', options:['Computer Style Syntax','Cascading Style Sheets','Creative Styling System','Colorful Sheet Syntax'], a:1, explanation:'CSS stands for Cascading Style Sheets.'},
  {id:4, topic:'JavaScript', q:'Which keyword declares a block-scoped variable?', options:['const','let','fixed','static'], a:1, explanation:'let declares a block-scoped variable.'},
  {id:5, topic:'DSA', q:'Which data structure follows LIFO?', options:['Queue','Stack','Graph','Heap'], a:1, explanation:'A stack uses last-in, first-out order.'}

];