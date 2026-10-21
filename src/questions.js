// src/questions.js - 8 Semesters BTech Structure, PYQs & Question Bank

export const btechSemesters = [
  {
    semester: "Semester 1",
    subjects: ["Engineering Mathematics-I", "Engineering Physics", "Programming for Problem Solving (PPS)", "Basic Electrical Engineering"]
  },
  {
    semester: "Semester 2",
    subjects: ["Engineering Mathematics-II", "Engineering Chemistry", "Basic Electronics", "Environmental Science"]
  },
  {
    semester: "Semester 3",
    subjects: ["Data Structures and Algorithms (DSA)", "Object Oriented Programming (OOPs)", "Discrete Mathematics", "Computer Organization and Architecture"]
  },
  {
    semester: "Semester 4",
    subjects: ["Operating Systems", "Database Management Systems (DBMS)", "Computer Networks", "Software Engineering"]
  },
  {
    semester: "Semester 5",
    subjects: ["Web Technology (HTML, CSS, JavaScript)", "Design and Analysis of Algorithms", "Artificial Intelligence", "Compiler Design"]
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
export const branchWiseSemesters = {
  // Computer Science and Engineering
  CSE: btechSemesters,

  // Information Technology
  IT: [
    {
      semester: "Semester 1",
      subjects: [
        "Engineering Mathematics-I",
        "Engineering Physics",
        "Programming for Problem Solving (PPS)",
        "Basic Electrical Engineering"
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        "Engineering Mathematics-II",
        "Engineering Chemistry",
        "Basic Electronics",
        "Environmental Science"
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        "Data Structures and Algorithms (DSA)",
        "Object Oriented Programming (OOPs)",
        "Discrete Mathematics",
        "Computer Organization and Architecture"
      ]
    },
    {
      semester: "Semester 4",
      subjects: [
        "Operating Systems",
        "Database Management Systems (DBMS)",
        "Computer Networks",
        "Software Engineering"
      ]
    },
    {
      semester: "Semester 5",
      subjects: [
        "Web Technology (HTML, CSS, JS)",
        "Design and Analysis of Algorithms",
        "Artificial Intelligence",
        "Computer Graphics"
      ]
    },
    {
      semester: "Semester 6",
      subjects: [
        "Cloud Computing",
        "Machine Learning",
        "Information Security",
        "Mobile App Development"
      ]
    },
    {
      semester: "Semester 7",
      subjects: [
        "Big Data Analytics",
        "Cyber Security",
        "Internet of Things (IoT)",
        "DevOps"
      ]
    },
    {
      semester: "Semester 8",
      subjects: [
        "Blockchain Technology",
        "Data Mining",
        "Major Project",
        "Professional Ethics"
      ]
    }
  ],

  // Electrical Engineering
  Electrical: [
    {
      semester: "Semester 1",
      subjects: [
        "Engineering Mathematics-I",
        "Engineering Physics",
        "Programming for Problem Solving",
        "Basic Electrical Engineering"
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        "Engineering Mathematics-II",
        "Engineering Chemistry",
        "Basic Electronics",
        "Environmental Science"
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        "Electrical Circuit Analysis",
        "Electrical Machines-I",
        "Electromagnetic Field Theory",
        "Analog Electronics"
      ]
    },
    {
      semester: "Semester 4",
      subjects: [
        "Electrical Machines-II",
        "Power Systems-I",
        "Signals and Systems",
        "Digital Electronics"
      ]
    },
    {
      semester: "Semester 5",
      subjects: [
        "Power Systems-II",
        "Control Systems",
        "Power Electronics",
        "Electrical Measurements and Instrumentation"
      ]
    },
    {
      semester: "Semester 6",
      subjects: [
        "Electrical Drives",
        "Power System Protection",
        "Microprocessors and Microcontrollers",
        "Renewable Energy Systems"
      ]
    },
    {
      semester: "Semester 7",
      subjects: [
        "High Voltage Engineering",
        "Power System Operation and Control",
        "Electric Vehicle Technology",
        "Industrial Automation"
      ]
    },
    {
      semester: "Semester 8",
      subjects: [
        "Smart Grid Technology",
        "Advanced Power Electronics",
        "Major Project",
        "Professional Ethics"
      ]
    }
  ],

  // Civil Engineering
  Civil: [
    {
      semester: "Semester 1",
      subjects: [
        "Engineering Mathematics-I",
        "Engineering Physics",
        "Engineering Mechanics",
        "Basic Electrical Engineering"
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        "Engineering Mathematics-II",
        "Engineering Chemistry",
        "Engineering Drawing",
        "Environmental Science"
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        "Building Materials and Construction",
        "Surveying-I",
        "Strength of Materials",
        "Fluid Mechanics"
      ]
    },
    {
      semester: "Semester 4",
      subjects: [
        "Structural Analysis-I",
        "Surveying-II",
        "Geotechnical Engineering-I",
        "Hydraulics and Hydraulic Machines"
      ]
    },
    {
      semester: "Semester 5",
      subjects: [
        "Design of Reinforced Concrete Structures",
        "Geotechnical Engineering-II",
        "Transportation Engineering",
        "Environmental Engineering-I"
      ]
    },
    {
      semester: "Semester 6",
      subjects: [
        "Steel Structure Design",
        "Water Resources Engineering",
        "Environmental Engineering-II",
        "Construction Planning and Management"
      ]
    },
    {
      semester: "Semester 7",
      subjects: [
        "Foundation Engineering",
        "Irrigation Engineering",
        "Estimation and Costing",
        "Remote Sensing and GIS"
      ]
    },
    {
      semester: "Semester 8",
      subjects: [
        "Earthquake Resistant Design",
        "Advanced Structural Engineering",
        "Major Project",
        "Professional Ethics"
      ]
    }
  ],

  // Mechanical Engineering
  Mechanical: [
    {
      semester: "Semester 1",
      subjects: [
        "Engineering Mathematics-I",
        "Engineering Physics",
        "Engineering Mechanics",
        "Basic Electrical Engineering"
      ]
    },
    {
      semester: "Semester 2",
      subjects: [
        "Engineering Mathematics-II",
        "Engineering Chemistry",
        "Engineering Drawing",
        "Environmental Science"
      ]
    },
    {
      semester: "Semester 3",
      subjects: [
        "Engineering Thermodynamics",
        "Mechanics of Materials",
        "Manufacturing Processes",
        "Material Science and Engineering"
      ]
    },
    {
      semester: "Semester 4",
      subjects: [
        "Fluid Mechanics",
        "Theory of Machines",
        "Applied Thermodynamics",
        "Machine Drawing"
      ]
    },
    {
      semester: "Semester 5",
      subjects: [
        "Heat Transfer",
        "Machine Design-I",
        "Manufacturing Technology",
        "Metrology and Measurements"
      ]
    },
    {
      semester: "Semester 6",
      subjects: [
        "Internal Combustion Engines",
        "Refrigeration and Air Conditioning",
        "Machine Design-II",
        "Industrial Engineering"
      ]
    },
    {
      semester: "Semester 7",
      subjects: [
        "Finite Element Analysis",
        "Computer Aided Design and Manufacturing",
        "Robotics and Automation",
        "Automobile Engineering"
      ]
    },
    {
      semester: "Semester 8",
      subjects: [
        "Renewable Energy Systems",
        "Advanced Manufacturing",
        "Major Project",
        "Professional Ethics"
      ]
    }
  ]
};

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

{
  id:6, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of x² with respect to x?', options:['x','2x','x²','2'], a:1, explanation:'Using the power rule, d(x²)/dx = 2x.'},
{id:7, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of sin(π/2)?', options:['0','1','-1','1/2'], a:1, explanation:'sin(π/2) = 1.'},
{id:8, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of 1 with respect to x?', options:['0','x + C','1 + C','x² + C'], a:1, explanation:'The integral of 1 is x + C.'},
{id:9, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the determinant of [[1, 0], [0, 1]]?', options:['0','1','2','-1'], a:1, explanation:'The determinant of the identity matrix is 1.'},
{id:10, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of 2³?', options:['6','8','9','4'], a:1, explanation:'2³ = 2 × 2 × 2 = 8.'},
{id:11, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of a constant?', options:['1','The constant itself','0','x'], a:2, explanation:'The derivative of a constant is zero.'},
{id:12, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is cos(0)?', options:['0','1','-1','Undefined'], a:1, explanation:'cos(0) = 1.'},
{id:13, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the sum of the diagonal entries of a square matrix called?', options:['Determinant','Rank','Trace','Transpose'], a:2, explanation:'The trace is the sum of the main diagonal entries.'},
{id:14, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'If f(x) = 3x, what is f(2)?', options:['5','6','9','3'], a:1, explanation:'Substituting x = 2 gives f(2) = 3 × 2 = 6.'},
{id:15, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of 2x with respect to x?', options:['2x² + C','x² + C','2 + C','x + C'], a:1, explanation:'The antiderivative of 2x is x² + C.'}
,
{id:16, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of sin(x)?', options:['cos(x)','-cos(x)','sin(x)','-sin(x)'], a:0, explanation:'The derivative of sin(x) is cos(x).'},
{id:17, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of cos(x)?', options:['sin(x)','-sin(x)','cos(x)','-cos(x)'], a:1, explanation:'The derivative of cos(x) is -sin(x).'},
{id:18, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of logₑ(1)?', options:['1','e','0','Undefined'], a:2, explanation:'The natural logarithm of 1 is 0.'},
{id:19, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of 5!?', options:['25','60','120','720'], a:2, explanation:'5! = 5 × 4 × 3 × 2 × 1 = 120.'},
{id:20, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the slope of the line y = 4x + 3?', options:['3','4','7','-4'], a:1, explanation:'In y = mx + c, the slope is the coefficient m of x.'},
{id:21, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of tan(π/4)?', options:['0','1','√3','Undefined'], a:1, explanation:'tan(π/4) = 1.'},
{id:22, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the order of a matrix with 3 rows and 2 columns?', options:['2 × 3','3 × 2','3 × 3','2 × 2'], a:1, explanation:'Matrix order is rows × columns, so it is 3 × 2.'},
{id:23, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of x³?', options:['x²','2x','3x²','3x'], a:2, explanation:'By the power rule, d(x³)/dx = 3x².'},
{id:24, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of cos(x)?', options:['-sin(x) + C','sin(x) + C','cos(x) + C','-cos(x) + C'], a:1, explanation:'The derivative of sin(x) is cos(x), so its integral is sin(x) + C.'},
{id:25, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'If A is a 2 × 3 matrix, how many elements does A contain?', options:['5','6','8','9'], a:1, explanation:'A matrix with 2 rows and 3 columns contains 2 × 3 = 6 elements.'}
,
{id:26, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of eˣ?', options:['eˣ','xeˣ','eˣ + C','x e'], a:0, explanation:'The derivative of eˣ is eˣ.'},
{id:27, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of sin(0)?', options:['1','-1','0','Undefined'], a:2, explanation:'sin(0) = 0.'},
{id:28, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the determinant of [[a, 0], [0, b]]?', options:['a + b','ab','a - b','0'], a:1, explanation:'The determinant of a diagonal 2 × 2 matrix is the product of its diagonal entries, ab.'},
{id:29, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of ln(x), for x > 0?', options:['x','1/x','ln(x)','eˣ'], a:1, explanation:'The derivative of ln(x) is 1/x for x > 0.'},
{id:30, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the sum of the first five positive integers?', options:['10','15','20','25'], a:1, explanation:'1 + 2 + 3 + 4 + 5 = 15.'},
{id:31, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of 3 with respect to x?', options:['3x + C','x³ + C','3 + C','3x² + C'], a:0, explanation:'The integral of a constant 3 is 3x + C.'},
{id:32, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of cos(π)?', options:['1','0','-1','1/2'], a:2, explanation:'cos(π) = -1.'},
{id:33, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'If a square matrix has a non-zero determinant, what does that imply?', options:['It is singular','It is invertible','All entries are zero','It has no rows'], a:1, explanation:'A square matrix with non-zero determinant is invertible.'},
{id:34, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of a constant multiple 5x²?', options:['5x','10x','10x²','x²'], a:1, explanation:'Using the power rule, d(5x²)/dx = 10x.'},
{id:35, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of 2⁰?', options:['0','1','2','-1'], a:1, explanation:'Any non-zero number raised to the power zero equals 1.'}
,
{id:36, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of x⁴?', options:['4x³','x³','3x⁴','4x'], a:0, explanation:'By the power rule, d(x⁴)/dx = 4x³.'},
{id:37, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of 1/x, for x > 0?', options:['x² + C','ln(x) + C','1/x² + C','eˣ + C'], a:1, explanation:'For x > 0, the integral of 1/x is ln(x) + C.'},
{id:38, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of sin(π)?', options:['1','-1','0','1/2'], a:2, explanation:'sin(π) = 0.'},
{id:39, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the trace of the matrix [[2, 0], [0, 5]]?', options:['7','10','3','5'], a:0, explanation:'The trace is the sum of diagonal entries: 2 + 5 = 7.'},
{id:40, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of 7x?', options:['7','x','7x','0'], a:0, explanation:'The derivative of 7x with respect to x is 7.'},
{id:41, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of log₁₀(100)?', options:['1','2','10','100'], a:1, explanation:'10² = 100, so log₁₀(100) = 2.'},
{id:42, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of x²?', options:['2x + C','x³/3 + C','x²/2 + C','3x² + C'], a:1, explanation:'Using the power rule for integration, ∫x² dx = x³/3 + C.'},
{id:43, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of cos(π/2)?', options:['1','-1','0','1/2'], a:2, explanation:'cos(π/2) = 0.'},
{id:44, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'For a 2 × 2 matrix [[a, b], [c, d]], what is its determinant?', options:['ad − bc','ab − cd','ac − bd','a + d'], a:0, explanation:'The determinant of a 2 × 2 matrix is ad − bc.'},
{id:45, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of √x, for x > 0?', options:['√x','1/(2√x)','2√x','1/x'], a:1, explanation:'Writing √x as x^(1/2) and differentiating gives 1/(2√x).'}
,
{id:46, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of x⁵?', options:['5x⁴','x⁴','4x⁵','5x'], a:0, explanation:'By the power rule, d(x⁵)/dx = 5x⁴.'},
{id:47, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of tan(0)?', options:['0','1','-1','Undefined'], a:0, explanation:'tan(0) = sin(0)/cos(0) = 0.'},
{id:48, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'If f(x) = x² + 1, what is f(3)?', options:['7','9','10','12'], a:2, explanation:'f(3) = 3² + 1 = 10.'},
{id:49, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the integral of 1 with respect to x from 0 to 2?', options:['0','1','2','4'], a:2, explanation:'The definite integral is [x] from 0 to 2, which equals 2.'},
{id:50, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the value of the determinant of [[3, 0], [0, 4]]?', options:['7','12','1','0'], a:1, explanation:'The determinant is 3 × 4 − 0 × 0 = 12.'},
{
  id: 51,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the derivative of x²?',
  options: ['x', '2x', 'x³', '2'],
  a: 1,
  explanation: 'Using the power rule, d(x²)/dx = 2x.'
},
{
  id: 52,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the integral of 1 with respect to x?',
  options: ['0', '1', 'x + C', 'x² + C'],
  a: 2,
  explanation: 'The integral of 1 is x + C.'
},
{
  id: 53,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is sin(90°)?',
  options: ['0', '1', '-1', '1/2'],
  a: 1,
  explanation: 'sin(90°) = 1.'
},
{
  id: 54,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the determinant of the matrix [[1, 2], [3, 4]]?',
  options: ['2', '-2', '10', '4'],
  a: 1,
  explanation: 'The determinant is (1 × 4) − (2 × 3) = −2.'
},
{
  id: 55,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the value of log₁₀(100)?',
  options: ['1', '2', '10', '100'],
  a: 1,
  explanation: 'Since 10² = 100, log₁₀(100) = 2.'
},
{
  id: 56,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of frequency?',
  options: ['Hertz', 'Newton', 'Joule', 'Watt'],
  a: 0,
  explanation: 'Frequency is measured in hertz (Hz).'
},
{
  id: 57,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the speed of light in vacuum?',
  options: ['3 × 10⁶ m/s', '3 × 10⁸ m/s', '3 × 10⁵ m/s', '3 × 10¹⁰ m/s'],
  a: 1,
  explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s.'
},
{
  id: 58,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which phenomenon explains the bending of light around an obstacle?',
  options: ['Reflection', 'Refraction', 'Diffraction', 'Polarization'],
  a: 2,
  explanation: 'Diffraction is the bending or spreading of waves around obstacles.'
},
{
  id: 59,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of force?',
  options: ['Joule', 'Newton', 'Pascal', 'Watt'],
  a: 1,
  explanation: 'Force is measured in newtons (N).'
},
{
  id: 60,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which law states that energy cannot be created or destroyed?',
  options: ['Newton’s first law', 'Ohm’s law', 'Conservation of energy', 'Hooke’s law'],
  a: 2,
  explanation: 'The law of conservation of energy states that energy cannot be created or destroyed.'
},
{
  id: 61,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of wavelength?',
  options: ['Second', 'Metre', 'Hertz', 'Kilogram'],
  a: 1,
  explanation: 'Wavelength is a length, so its SI unit is the metre.'
},
{
  id: 62,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which type of wave requires a material medium to travel?',
  options: ['Electromagnetic wave', 'Mechanical wave', 'Light wave in vacuum', 'Radio wave in vacuum'],
  a: 1,
  explanation: 'Mechanical waves require a medium such as air, water, or a solid.'
},
{
  id: 63,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of electric charge?',
  options: ['Ampere', 'Volt', 'Coulomb', 'Ohm'],
  a: 2,
  explanation: 'Electric charge is measured in coulombs (C).'
},
{
  id: 64,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which phenomenon produces a rainbow?',
  options: ['Dispersion of light', 'Magnetic induction', 'Nuclear fission', 'Total absorption'],
  a: 0,
  explanation: 'Dispersion separates white light into its component colours.'
},
{
  id: 65,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of power?',
  options: ['Joule', 'Newton', 'Watt', 'Coulomb'],
  a: 2,
  explanation: 'Power is measured in watts (W).'
},
{
  id: 66,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which law relates voltage, current, and resistance?',
  options: ['Faraday’s law', 'Ohm’s law', 'Newton’s law', 'Snell’s law'],
  a: 1,
  explanation: 'Ohm’s law states V = IR.'
},
{
  id: 67,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of resistance?',
  options: ['Volt', 'Ampere', 'Ohm', 'Tesla'],
  a: 2,
  explanation: 'Electrical resistance is measured in ohms (Ω).'
},
{
  id: 68,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which device converts electrical energy into mechanical energy?',
  options: ['Electric motor', 'Generator', 'Transformer', 'Rectifier'],
  a: 0,
  explanation: 'An electric motor converts electrical energy into mechanical energy.'
},
{
  id: 69,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of magnetic flux?',
  options: ['Tesla', 'Weber', 'Henry', 'Ohm'],
  a: 1,
  explanation: 'Magnetic flux is measured in webers (Wb).'
},
{
  id: 70,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which particles carry a negative electric charge?',
  options: ['Protons', 'Neutrons', 'Electrons', 'Photons'],
  a: 2,
  explanation: 'Electrons carry a negative electric charge.'
},
{
  id: 71,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which lens converges parallel rays of light?',
  options: ['Concave lens', 'Convex lens', 'Plane glass', 'None of these'],
  a: 1,
  explanation: 'A convex lens converges parallel rays of light.'
},
{
  id: 72,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of pressure?',
  options: ['Pascal', 'Joule', 'Watt', 'Coulomb'],
  a: 0,
  explanation: 'Pressure is measured in pascals (Pa).'
},
{
  id: 73,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which principle explains the working of optical fibre?',
  options: ['Diffraction', 'Total internal reflection', 'Interference only', 'Photoelectric effect'],
  a: 1,
  explanation: 'Optical fibres guide light using total internal reflection.'
},
{
  id: 74,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What happens to the frequency of a wave when it enters another medium?',
  options: ['It always doubles', 'It always becomes zero', 'It remains unchanged', 'It always halves'],
  a: 2,
  explanation: 'At a stationary boundary, the frequency remains unchanged; the speed and wavelength may change.'
},
{
  id: 75,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which phenomenon demonstrates the particle nature of light?',
  options: ['Photoelectric effect', 'Diffraction', 'Interference', 'Polarization'],
  a: 0,
  explanation: 'The photoelectric effect supports the particle nature of light.'
},
{
  id: 76,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which quantity is measured in joules?',
  options: ['Force', 'Energy', 'Power', 'Pressure'],
  a: 1,
  explanation: 'The SI unit of energy is the joule (J).'
},
{
  id: 77,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which law gives the relationship between induced emf and the rate of change of magnetic flux?',
  options: ['Faraday’s law', 'Ohm’s law', 'Hooke’s law', 'Boyle’s law'],
  a: 0,
  explanation: 'Faraday’s law relates induced emf to the rate of change of magnetic flux.'
},
{
  id: 78,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of capacitance?',
  options: ['Henry', 'Farad', 'Weber', 'Tesla'],
  a: 1,
  explanation: 'Capacitance is measured in farads (F).'
},
{
  id: 79,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which type of electromagnetic radiation has the shortest wavelength?',
  options: ['Radio waves', 'Microwaves', 'Visible light', 'Gamma rays'],
  a: 3,
  explanation: 'Gamma rays have the shortest wavelengths in the electromagnetic spectrum.'
},
{
  id: 80,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the approximate acceleration due to gravity near Earth’s surface?',
  options: ['3.0 m/s²', '9.8 m/s²', '15.0 m/s²', '98 m/s²'],
  a: 1,
  explanation: 'The standard approximate value is 9.8 m/s².'
},
{
  id: 81,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which phenomenon occurs when two coherent light waves combine?',
  options: ['Interference', 'Evaporation', 'Conduction', 'Ionization only'],
  a: 0,
  explanation: 'Interference results from the superposition of coherent waves.'
},
{
  id: 82,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which physical quantity is a scalar?',
  options: ['Velocity', 'Force', 'Displacement', 'Temperature'],
  a: 3,
  explanation: 'Temperature has magnitude but no direction, so it is a scalar.'
},
{
  id: 83,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of angular velocity?',
  options: ['Metre', 'Radian per second', 'Newton', 'Joule'],
  a: 1,
  explanation: 'Angular velocity is measured in radians per second (rad/s).'
},
{
  id: 84,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which effect occurs when light releases electrons from a metal surface?',
  options: ['Compton effect', 'Photoelectric effect', 'Doppler effect', 'Seebeck effect'],
  a: 1,
  explanation: 'In the photoelectric effect, incident light can eject electrons from a material.'
},
{
  id: 85,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'In simple harmonic motion, acceleration is directed toward which point?',
  options: ['The equilibrium position', 'The maximum displacement only', 'A random direction', 'The direction of velocity in every case'],
  a: 0,
  explanation: 'In simple harmonic motion, acceleration is directed toward the equilibrium position.'
},
{
  id: 86,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which law states that the angle of incidence equals the angle of reflection?',
  options: ['Snell’s law', 'Law of reflection', 'Faraday’s law', 'Gauss’s law'],
  a: 1,
  explanation: 'The law of reflection states that the angle of incidence equals the angle of reflection.'
},
{
  id: 87,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of momentum?',
  options: ['kg·m/s', 'kg/m³', 'N/m', 'J/s'],
  a: 0,
  explanation: 'Momentum equals mass multiplied by velocity, so its SI unit is kg·m/s.'
},
{
  id: 88,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which instrument measures electric current?',
  options: ['Voltmeter', 'Ammeter', 'Barometer', 'Thermometer'],
  a: 1,
  explanation: 'An ammeter is used to measure electric current.'
},
{
  id: 89,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of inductance?',
  options: ['Farad', 'Henry', 'Tesla', 'Coulomb'],
  a: 1,
  explanation: 'Inductance is measured in henries (H).'
},
{
  id: 90,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which phenomenon causes a change in frequency due to relative motion between a source and an observer?',
  options: ['Doppler effect', 'Photoelectric effect', 'Polarization', 'Diffraction'],
  a: 0,
  explanation: 'The Doppler effect is the apparent change in frequency caused by relative motion.'
},
{
  id: 91,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which material is generally used as a semiconductor?',
  options: ['Copper', 'Silicon', 'Rubber', 'Wood'],
  a: 1,
  explanation: 'Silicon is a widely used semiconductor material.'
},
{
  id: 92,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of density?',
  options: ['kg/m³', 'kg·m/s', 'N·m', 'm/s²'],
  a: 0,
  explanation: 'Density is mass per unit volume, measured in kg/m³.'
},
{
  id: 93,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which type of wave can be polarized?',
  options: ['Longitudinal waves only', 'Transverse waves', 'All waves in every situation', 'No waves'],
  a: 1,
  explanation: 'Polarization is a characteristic of transverse waves.'
},
{
  id: 94,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the resistance of an ideal short circuit?',
  options: ['Infinite', 'Zero', 'One ohm', '100 ohms'],
  a: 1,
  explanation: 'An ideal short circuit has zero resistance.'
},
{
  id: 95,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which quantity describes the rate of transfer of heat?',
  options: ['Thermal conductivity only', 'Heat transfer rate', 'Specific heat capacity', 'Density'],
  a: 1,
  explanation: 'Heat transfer rate describes the amount of heat transferred per unit time.'
},
{
  id: 96,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which equation relates wave speed, frequency, and wavelength?',
  options: ['v = fλ', 'v = f/λ', 'v = λ/f', 'v = f + λ'],
  a: 0,
  explanation: 'Wave speed equals frequency multiplied by wavelength.'
},
{
  id: 97,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of work?',
  options: ['Watt', 'Joule', 'Pascal', 'Tesla'],
  a: 1,
  explanation: 'Work is measured in joules (J).'
},
{
  id: 98,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which law explains the force between two electric charges?',
  options: ['Coulomb’s law', 'Hooke’s law', 'Snell’s law', 'Boyle’s law'],
  a: 0,
  explanation: 'Coulomb’s law describes the electrostatic force between electric charges.'
},
{
  id: 99,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which type of image is formed by a plane mirror?',
  options: ['Real and inverted', 'Virtual and erect', 'Real and enlarged', 'Always diminished'],
  a: 1,
  explanation: 'A plane mirror forms a virtual, erect image of the same size.'
},
{
  id: 100,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of magnetic field strength B?',
  options: ['Tesla', 'Weber', 'Henry', 'Farad'],
  a: 0,
  explanation: 'Magnetic flux density B is measured in teslas (T).'
},
{
  id: 101,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which process transfers heat through electromagnetic waves?',
  options: ['Conduction', 'Convection', 'Radiation', 'Diffusion'],
  a: 2,
  explanation: 'Thermal radiation transfers energy through electromagnetic waves.'
},
{
  id: 102,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'What is the SI unit of electric potential difference?',
  options: ['Ampere', 'Volt', 'Ohm', 'Coulomb'],
  a: 1,
  explanation: 'Electric potential difference is measured in volts (V).'
},
{
  id: 103,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which phenomenon is responsible for the splitting of white light into colours by a prism?',
  options: ['Dispersion', 'Reflection only', 'Magnetic induction', 'Resonance'],
  a: 0,
  explanation: 'Dispersion occurs because different wavelengths refract by different amounts.'
},
{
  id: 104,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'In a series circuit, which quantity is the same through every component?',
  options: ['Voltage', 'Current', 'Resistance', 'Power'],
  a: 1,
  explanation: 'The current is the same through every component connected in series.'
},
{
  id: 105,
  topic: 'Engineering Physics',
  semester: 'Semester 1',
  subject: 'Engineering Physics',
  q: 'Which principle states that the total momentum of an isolated system remains constant?',
  options: ['Conservation of momentum', 'Conservation of charge only', 'Archimedes’ principle', 'Pascal’s law'],
  a: 0,
  explanation: 'Total momentum is conserved in an isolated system when no net external force acts.'
},
{
  id: 106,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function is the entry point of a standard C program?',
  options: ['start()', 'main()', 'run()', 'begin()'],
  a: 1,
  explanation: 'Execution of a standard C program begins in main().'
},
{
  id: 107,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which symbol ends a statement in C?',
  options: [':', ';', ',', '.'],
  a: 1,
  explanation: 'A semicolon terminates most C statements.'
},
{
  id: 108,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which header file is commonly used for printf() and scanf()?',
  options: ['<math.h>', '<string.h>', '<stdio.h>', '<stdlib.h>'],
  a: 2,
  explanation: 'The standard input/output functions are declared in stdio.h.'
},
{
  id: 109,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which format specifier is commonly used to print an int with printf()?',
  options: ['%c', '%f', '%d', '%s'],
  a: 2,
  explanation: '%d is commonly used to print an int in decimal form.'
},
{
  id: 110,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator is used for addition in C?',
  options: ['+', '*', '%', '&'],
  a: 0,
  explanation: 'The + operator performs addition.'
},
{
  id: 111,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword declares an integer variable in C?',
  options: ['integer', 'int', 'number', 'whole'],
  a: 1,
  explanation: 'The int keyword declares an integer type.'
},
{
  id: 112,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which loop checks its condition before executing the body?',
  options: ['while', 'do-while only', 'Neither for nor while', 'All loops check only afterward'],
  a: 0,
  explanation: 'A while loop checks its condition before each iteration.'
},
{
  id: 113,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Array indexing in C starts at which index?',
  options: ['1', '-1', '0', 'Depends on the compiler'],
  a: 2,
  explanation: 'The first element of a C array has index 0.'
},
{
  id: 114,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator tests equality between two values?',
  options: ['=', '==', '!=', '>='],
  a: 1,
  explanation: 'The == operator tests equality; = is assignment.'
},
{
  id: 115,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which statement immediately exits a loop?',
  options: ['continue', 'skip', 'break', 'return only'],
  a: 2,
  explanation: 'The break statement exits the nearest enclosing loop or switch.'
},
{
  id: 116,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which loop is guaranteed to execute its body at least once?',
  options: ['for', 'while', 'do-while', 'None of these'],
  a: 2,
  explanation: 'A do-while loop checks its condition after executing the body.'
},
{
  id: 117,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator gives the remainder after integer division?',
  options: ['/', '%', '*', '//'],
  a: 1,
  explanation: 'The % operator calculates the remainder for integer operands.'
},
{
  id: 118,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which data type stores a single character in C?',
  options: ['string', 'char', 'character', 'text'],
  a: 1,
  explanation: 'The char type stores a character value.'
},
{
  id: 119,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the value of 10 / 3 in C when both operands are int?',
  options: ['3.33', '3', '4', '1'],
  a: 1,
  explanation: 'Integer division discards the fractional part, giving 3.'
},
{
  id: 120,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword selects between alternatives based on a condition?',
  options: ['if', 'define', 'include', 'typedef'],
  a: 0,
  explanation: 'The if statement executes a block when its condition is true.'
},
{
  id: 121,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword sends a value back from a function?',
  options: ['break', 'return', 'continue', 'goto'],
  a: 1,
  explanation: 'The return statement can send a value back to the caller.'
},
{
  id: 122,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the first valid index of an array with 5 elements in C?',
  options: ['1', '5', '0', '-1'],
  a: 2,
  explanation: 'C arrays use zero-based indexing.'
},
{
  id: 123,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function reads a formatted value from standard input?',
  options: ['printf()', 'scanf()', 'puts()', 'putchar()'],
  a: 1,
  explanation: 'scanf() reads formatted input from standard input.'
},
{
  id: 124,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator represents logical AND in C?',
  options: ['&', '&&', '||', '!'],
  a: 1,
  explanation: 'The && operator performs logical AND.'
},
{
  id: 125,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What does the continue statement do inside a loop?',
  options: ['Ends the whole program', 'Exits the loop permanently', 'Skips to the next iteration', 'Restarts the computer'],
  a: 2,
  explanation: 'continue skips the remaining statements in the current iteration.'
},
{
  id: 126,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which symbol begins a single-line comment in C?',
  options: ['<!--', '//', '**', '##'],
  a: 1,
  explanation: 'The // symbol begins a single-line comment in modern C.'
},
{
  id: 127,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function calculates the length of a C string?',
  options: ['strcount()', 'strlen()', 'length()', 'size()'],
  a: 1,
  explanation: 'strlen(), declared in string.h, returns the number of characters before the terminating null character.'
},
{
  id: 128,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which header file declares strlen()?',
  options: ['stdio.h', 'stdlib.h', 'string.h', 'math.h'],
  a: 2,
  explanation: 'strlen() is declared in the string.h header.'
},
{
  id: 129,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the result of 5 % 2 in C?',
  options: ['0', '1', '2', '2.5'],
  a: 1,
  explanation: 'The remainder when 5 is divided by 2 is 1.'
},
{
  id: 130,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which storage class gives a local variable a lifetime lasting throughout program execution?',
  options: ['auto', 'register', 'static', 'None of these'],
  a: 2,
  explanation: 'A local static variable retains its value and exists for the entire program execution.'
},
{
  id: 131,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What does the address-of operator & do in C?',
  options: ['Multiplies values', 'Gives the address of an object', 'Compares strings', 'Ends a loop'],
  a: 1,
  explanation: 'The unary & operator obtains the address of an object.'
},
{
  id: 132,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which declaration creates a pointer to an int?',
  options: ['int p;', 'int *p;', 'pointer int p;', 'int &p;'],
  a: 1,
  explanation: 'int *p declares p as a pointer to int.'
},
{
  id: 133,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function can allocate memory dynamically in C?',
  options: ['malloc()', 'print()', 'scanf()', 'strlen()'],
  a: 0,
  explanation: 'malloc() allocates a block of memory dynamically and returns a pointer to it.'
},
{
  id: 134,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function releases memory allocated dynamically?',
  options: ['delete()', 'remove()', 'free()', 'clear()'],
  a: 2,
  explanation: 'free() releases dynamically allocated memory.'
},
{
  id: 135,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which preprocessor directive includes a header file?',
  options: ['#define', '#include', '#ifdef only', '#return'],
  a: 1,
  explanation: 'The #include directive includes a header file.'
},
{
  id: 136,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is recursion in programming?',
  options: ['A function calling itself', 'A variable changing type', 'A loop that never ends', 'A syntax error'],
  a: 0,
  explanation: 'Recursion occurs when a function calls itself, directly or indirectly.'
},
{
  id: 137,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which statement selects one of several branches based on an expression?',
  options: ['switch', 'typedef', 'sizeof', 'extern'],
  a: 0,
  explanation: 'The switch statement selects a matching case for an integral expression.'
},
{
  id: 138,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword defines a structure in C?',
  options: ['class', 'struct', 'object', 'record'],
  a: 1,
  explanation: 'The struct keyword defines a structure type in C.'
},
{
  id: 139,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator accesses a structure member through a structure variable?',
  options: ['->', '.', '&', '*'],
  a: 1,
  explanation: 'The dot operator accesses a member through a structure variable.'
},
{
  id: 140,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator accesses a structure member through a pointer?',
  options: ['.', '::', '->', '%'],
  a: 2,
  explanation: 'The arrow operator accesses a structure member through a pointer.'
},
{
  id: 141,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What does EOF commonly indicate when reading a file?',
  options: ['End of file or input failure indicator', 'Start of file', 'An empty string', 'A new variable'],
  a: 0,
  explanation: 'EOF is a macro used to indicate end-of-file or certain input failures.'
},
{
  id: 142,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function opens a file in C?',
  options: ['openfile()', 'fopen()', 'fileopen()', 'readfile()'],
  a: 1,
  explanation: 'fopen() opens a file and returns a file pointer on success.'
},
{
  id: 143,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function closes a file opened with fopen()?',
  options: ['endfile()', 'close()', 'fclose()', 'stop()'],
  a: 2,
  explanation: 'fclose() closes a file stream.'
},
{
  id: 144,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What does sizeof return?',
  options: ['The number of array elements in every case', 'The size in bytes of its operand’s type or object', 'The memory address', 'The number of bits in every case'],
  a: 1,
  explanation: 'sizeof yields the size in bytes of a type or object.'
},
{
  id: 145,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword makes an object read-only through that declared identifier?',
  options: ['volatile', 'const', 'static', 'extern'],
  a: 1,
  explanation: 'const prevents modification through an identifier declared with the const-qualified type.'
},
{
  id: 146,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the correct index of the last element in an array of 10 elements?',
  options: ['10', '9', '11', '1'],
  a: 1,
  explanation: 'For an array of 10 elements, the indices range from 0 to 9.'
},
{
  id: 147,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function converts a string to a long integer in C?',
  options: ['strlen()', 'strtol()', 'strcpy()', 'strcmp()'],
  a: 1,
  explanation: 'strtol() converts the initial portion of a string to a long integer.'
},
{
  id: 148,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function compares two C strings?',
  options: ['strcpy()', 'strcat()', 'strcmp()', 'strlen()'],
  a: 2,
  explanation: 'strcmp() compares two null-terminated strings.'
},
{
  id: 149,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the purpose of a function prototype in C?',
  options: ['To declare a function’s interface before use', 'To execute a function automatically', 'To allocate an array', 'To close a file'],
  a: 0,
  explanation: 'A function prototype declares the function name, return type, and parameter types.'
},
{
  id: 150,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which operator is used to access the value stored at a pointer’s address?',
  options: ['&', '*', '%', '&&'],
  a: 1,
  explanation: 'The unary * operator dereferences a pointer.'
},
{
  id: 151,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword is used to create an alias for a type?',
  options: ['typedef', 'sizeof', 'register', 'break'],
  a: 0,
  explanation: 'typedef introduces an alternative name for an existing type.'
},
{
  id: 152,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the value of the expression 3 * 4 + 2 in C?',
  options: ['18', '14', '20', '24'],
  a: 1,
  explanation: 'Multiplication has higher precedence than addition, so 12 + 2 = 14.'
},
{
  id: 153,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which keyword skips the remaining statements in the current loop iteration?',
  options: ['break', 'exit', 'continue', 'switch'],
  a: 2,
  explanation: 'continue skips the remainder of the current iteration and proceeds to the next one.'
},
{
  id: 154,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'Which function is used to print a character to standard output?',
  options: ['getchar()', 'putchar()', 'scanf()', 'fopen()'],
  a: 1,
  explanation: 'putchar() writes a character to standard output.'
},
{
  id: 155,
  topic: 'Programming for Problem Solving',
  semester: 'Semester 1',
  subject: 'Programming for Problem Solving (PPS)',
  q: 'What is the correct format specifier for a double value with printf()?',
  options: ['%d', '%c', '%f', '%s'],
  a: 2,
  explanation: 'In printf(), %f is used to print a double value.'
},
{
  id: 156,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the SI unit of electric current?',
  options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
  a: 1,
  explanation: 'Electric current is measured in amperes (A).'
},
{
  id: 157,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which law states that V = IR?',
  options: ['Faraday’s law', 'Ohm’s law', 'Kirchhoff’s current law', 'Coulomb’s law'],
  a: 1,
  explanation: 'Ohm’s law relates voltage, current, and resistance.'
},
{
  id: 158,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the SI unit of electrical power?',
  options: ['Joule', 'Watt', 'Coulomb', 'Henry'],
  a: 1,
  explanation: 'Electrical power is measured in watts (W).'
},
{
  id: 159,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'In a series circuit, which quantity is the same through every component?',
  options: ['Voltage', 'Current', 'Resistance', 'Power'],
  a: 1,
  explanation: 'The same current flows through all components connected in series.'
},
{
  id: 160,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'In a parallel circuit, which quantity is the same across each branch?',
  options: ['Current', 'Voltage', 'Resistance', 'Power'],
  a: 1,
  explanation: 'Each parallel branch has the same voltage across it.'
},
{
  id: 161,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the equivalent resistance of 2 Ω and 3 Ω connected in series?',
  options: ['1 Ω', '5 Ω', '6 Ω', '0.5 Ω'],
  a: 1,
  explanation: 'Series resistances add: 2 + 3 = 5 Ω.'
},
{
  id: 162,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the equivalent resistance of two 6 Ω resistors connected in parallel?',
  options: ['12 Ω', '6 Ω', '3 Ω', '1 Ω'],
  a: 2,
  explanation: 'For two equal resistors in parallel, the equivalent resistance is half of either resistance.'
},
{
  id: 163,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which instrument measures voltage?',
  options: ['Ammeter', 'Voltmeter', 'Wattmeter only', 'Galvanometer only'],
  a: 1,
  explanation: 'A voltmeter measures potential difference and is connected in parallel.'
},
{
  id: 164,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which instrument measures electrical power?',
  options: ['Wattmeter', 'Voltmeter', 'Ohmmeter', 'Thermometer'],
  a: 0,
  explanation: 'A wattmeter measures electrical power.'
},
{
  id: 165,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the commercial unit of electrical energy?',
  options: ['Watt', 'Kilowatt-hour', 'Ampere', 'Volt'],
  a: 1,
  explanation: 'Electrical energy consumption is commonly billed in kilowatt-hours (kWh).'
},
{
  id: 166,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'According to Kirchhoff’s Current Law (KCL), what is true at a node?',
  options: ['Total voltage is zero', 'Current entering equals current leaving', 'Resistance is always zero', 'Power is always negative'],
  a: 1,
  explanation: 'KCL follows conservation of electric charge.'
},
{
  id: 167,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Kirchhoff’s Voltage Law (KVL) states that the algebraic sum of voltages around a closed loop is:',
  options: ['Always 1 V', 'Equal to current', 'Zero', 'Infinite'],
  a: 2,
  explanation: 'KVL follows conservation of energy around a closed loop.'
},
{
  id: 168,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the SI unit of electrical resistance?',
  options: ['Ohm', 'Farad', 'Henry', 'Tesla'],
  a: 0,
  explanation: 'Resistance is measured in ohms (Ω).'
},
{
  id: 169,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which device converts mechanical energy into electrical energy?',
  options: ['Motor', 'Generator', 'Resistor', 'Capacitor'],
  a: 1,
  explanation: 'A generator converts mechanical energy into electrical energy.'
},
{
  id: 170,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which device stores energy in an electric field?',
  options: ['Resistor', 'Inductor', 'Capacitor', 'Fuse'],
  a: 2,
  explanation: 'A capacitor stores energy in the electric field between its conductors.'
},
{
  id: 171,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which device stores energy in a magnetic field?',
  options: ['Capacitor', 'Inductor', 'Fuse', 'Switch'],
  a: 1,
  explanation: 'An inductor stores energy in its magnetic field.'
},
{
  id: 172,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the frequency of standard AC mains supply in India?',
  options: ['25 Hz', '50 Hz', '60 Hz', '100 Hz'],
  a: 1,
  explanation: 'The standard AC mains frequency in India is 50 Hz.'
},
{
  id: 173,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which type of current changes direction periodically?',
  options: ['Direct current (DC)', 'Alternating current (AC)', 'Static charge', 'Leakage current only'],
  a: 1,
  explanation: 'Alternating current periodically changes direction.'
},
{
  id: 174,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the power when a 10 V supply drives a current of 2 A through a load?',
  options: ['5 W', '12 W', '20 W', '100 W'],
  a: 2,
  explanation: 'For a DC load, P = VI = 10 × 2 = 20 W.'
},
{
  id: 175,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which component opposes changes in current in a circuit?',
  options: ['Inductor', 'Capacitor only', 'Ideal switch', 'Ideal wire'],
  a: 0,
  explanation: 'An inductor opposes changes in current through its induced voltage.'
},
{
  id: 176,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the SI unit of capacitance?',
  options: ['Henry', 'Farad', 'Weber', 'Ohm'],
  a: 1,
  explanation: 'Capacitance is measured in farads (F).'
},
{
  id: 177,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the SI unit of inductance?',
  options: ['Henry', 'Farad', 'Tesla', 'Volt'],
  a: 0,
  explanation: 'Inductance is measured in henries (H).'
},
{
  id: 178,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'A 12 V supply is connected across a 4 Ω resistor. What current flows?',
  options: ['2 A', '3 A', '4 A', '48 A'],
  a: 1,
  explanation: 'Using Ohm’s law, I = V/R = 12/4 = 3 A.'
},
{
  id: 179,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which material is commonly used as an electrical conductor?',
  options: ['Rubber', 'Glass', 'Copper', 'Dry wood'],
  a: 2,
  explanation: 'Copper has high electrical conductivity and is widely used in wiring.'
},
{
  id: 180,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which material is commonly used as an electrical insulator?',
  options: ['Copper', 'Aluminium', 'Rubber', 'Silver'],
  a: 2,
  explanation: 'Rubber has high electrical resistance and is used for insulation.'
},
{
  id: 181,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What happens to the total resistance when resistors are added in series?',
  options: ['It becomes the sum of the resistances', 'It always becomes zero', 'It is always less than the smallest resistor', 'It never changes'],
  a: 0,
  explanation: 'The equivalent resistance of series resistors is their sum.'
},
{
  id: 182,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the phase difference between voltage and current in a pure resistive AC circuit?',
  options: ['90°', '180°', '0°', '45°'],
  a: 2,
  explanation: 'In a pure resistive AC circuit, voltage and current are in phase.'
},
{
  id: 183,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the power factor of a pure resistive AC circuit?',
  options: ['0', '0.5', '1', '-1'],
  a: 2,
  explanation: 'For a pure resistor, the phase angle is zero and the power factor is cos(0°) = 1.'
},
{
  id: 184,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which device protects a circuit by melting when excessive current flows?',
  options: ['Fuse', 'Capacitor', 'Transformer', 'Voltmeter'],
  a: 0,
  explanation: 'A fuse melts and opens the circuit when current exceeds its rated limit.'
},
{
  id: 185,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the main function of a transformer?',
  options: ['Convert AC to DC directly', 'Change AC voltage level', 'Store electrical charge permanently', 'Measure resistance'],
  a: 1,
  explanation: 'A transformer transfers AC energy and can step voltage up or down.'
},
{
  id: 186,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the SI unit of electric charge?',
  options: ['Ampere', 'Coulomb', 'Volt', 'Watt'],
  a: 1,
  explanation: 'Electric charge is measured in coulombs (C).'
},
{
  id: 187,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which law describes electromagnetic induction?',
  options: ['Faraday’s law', 'Ohm’s law', 'Kirchhoff’s current law', 'Hooke’s law'],
  a: 0,
  explanation: 'Faraday’s law relates induced emf to the rate of change of magnetic flux.'
},
{
  id: 188,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which device changes AC voltage from one level to another using electromagnetic induction?',
  options: ['Transformer', 'Fuse', 'Resistor', 'Battery'],
  a: 0,
  explanation: 'A transformer changes AC voltage through electromagnetic induction.'
},
{
  id: 189,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'In an ideal transformer, if the secondary has more turns than the primary, it is a:',
  options: ['Step-down transformer', 'Step-up transformer', 'DC motor', 'Rectifier'],
  a: 1,
  explanation: 'More secondary turns produce a higher secondary voltage in an ideal transformer.'
},
{
  id: 190,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which instrument measures electrical energy consumed in a home?',
  options: ['Energy meter', 'Ammeter', 'Voltmeter', 'Ohmmeter'],
  a: 0,
  explanation: 'An energy meter records electrical energy consumption, commonly in kWh.'
},
{
  id: 191,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the RMS value of a sinusoidal voltage with peak value Vm?',
  options: ['Vm', 'Vm/2', 'Vm/√2', '√2Vm'],
  a: 2,
  explanation: 'For a sinusoidal waveform, the RMS value is the peak value divided by √2.'
},
{
  id: 192,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the frequency of a DC supply under steady conditions?',
  options: ['50 Hz', '60 Hz', '0 Hz', '100 Hz'],
  a: 2,
  explanation: 'Steady DC does not periodically alternate, so its frequency is treated as 0 Hz.'
},
{
  id: 193,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which connection provides two paths for current through separate branches?',
  options: ['Series connection', 'Parallel connection', 'Open circuit', 'Single-wire connection'],
  a: 1,
  explanation: 'A parallel circuit provides separate branches for current.'
},
{
  id: 194,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the electrical power dissipated by a 5 Ω resistor carrying 2 A?',
  options: ['10 W', '20 W', '2.5 W', '50 W'],
  a: 1,
  explanation: 'Using P = I²R, power = 2² × 5 = 20 W.'
},
{
  id: 195,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which quantity is measured in tesla (T)?',
  options: ['Electric charge', 'Magnetic flux density', 'Resistance', 'Capacitance'],
  a: 1,
  explanation: 'Tesla is the SI unit of magnetic flux density.'
},
{
  id: 196,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'According to Kirchhoff’s Current Law, the algebraic sum of currents at a node is:',
  options: ['Equal to resistance', 'Zero', 'Always positive', 'Equal to voltage'],
  a: 1,
  explanation: 'KCL states that the algebraic sum of currents entering and leaving a node is zero.'
},
{
  id: 197,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'According to Kirchhoff’s Voltage Law, the algebraic sum of voltages around a closed loop is:',
  options: ['Zero', 'Infinite', 'Equal to current', 'Always negative'],
  a: 0,
  explanation: 'KVL states that the algebraic sum of voltages around a closed loop is zero.'
},
{
  id: 198,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the equivalent resistance of 2 Ω and 3 Ω resistors connected in series?',
  options: ['1.2 Ω', '5 Ω', '6 Ω', '2.5 Ω'],
  a: 1,
  explanation: 'Series resistances add: 2 + 3 = 5 Ω.'
},
{
  id: 199,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the equivalent resistance of two 6 Ω resistors connected in parallel?',
  options: ['12 Ω', '6 Ω', '3 Ω', '1 Ω'],
  a: 2,
  explanation: 'For two equal resistors in parallel, the equivalent resistance is R/2 = 3 Ω.'
},
{
  id: 200,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which component stores energy in an electric field?',
  options: ['Inductor', 'Capacitor', 'Fuse', 'Switch'],
  a: 1,
  explanation: 'A capacitor stores energy in the electric field between its plates.'
},
{
  id: 201,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which component stores energy in a magnetic field?',
  options: ['Capacitor', 'Resistor', 'Inductor', 'Fuse'],
  a: 2,
  explanation: 'An inductor stores energy in its magnetic field.'
},
{
  id: 202,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'What is the commercial unit of electrical energy?',
  options: ['Watt', 'Volt', 'Kilowatt-hour', 'Ampere'],
  a: 2,
  explanation: 'Electrical energy consumption is commonly billed in kilowatt-hours (kWh).'
},
{
  id: 203,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which machine converts electrical energy into mechanical energy?',
  options: ['Electric motor', 'Generator', 'Transformer', 'Fuse'],
  a: 0,
  explanation: 'An electric motor converts electrical energy into mechanical energy.'
},
{
  id: 204,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'Which machine converts mechanical energy into electrical energy?',
  options: ['Motor', 'Generator', 'Transformer', 'Capacitor'],
  a: 1,
  explanation: 'A generator converts mechanical energy into electrical energy.'
},
{
  id: 205,
  topic: 'Basic Electrical Engineering',
  semester: 'Semester 1',
  subject: 'Basic Electrical Engineering',
  q: 'In a balanced three-phase system, the phase difference between adjacent phases is:',
  options: ['60°', '90°', '120°', '180°'],
  a: 2,
  explanation: 'The three phases of a balanced three-phase system are separated by 120 electrical degrees.'
},
{
  id: 206,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the derivative of sin(x)?',
  options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
  a: 0,
  explanation: 'The derivative of sin(x) with respect to x is cos(x).'
},
{
  id: 207,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the integral of cos(x) with respect to x?',
  options: ['-sin(x) + C', 'sin(x) + C', 'cos(x) + C', '-cos(x) + C'],
  a: 1,
  explanation: 'The integral of cos(x) is sin(x) + C.'
},
{
  id: 208,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the determinant of the matrix [[1, 2], [3, 4]]?',
  options: ['2', '-2', '10', '-10'],
  a: 1,
  explanation: 'The determinant is (1 × 4) − (2 × 3) = −2.'
},
{
  id: 209,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the value of lim(x→0) sin(x)/x, when x is measured in radians?',
  options: ['0', '∞', '1', '-1'],
  a: 2,
  explanation: 'This is a standard limit in calculus and its value is 1.'
},
{
  id: 210,
  topic: 'Engineering Mathematics-I',
  semester: 'Semester 1',
  subject: 'Engineering Mathematics-I',
  q: 'What is the derivative of x²?',
  options: ['x', '2x', 'x³', '2'],
  a: 1,
  explanation: 'Using the power rule, d(x²)/dx = 2x.'
},
{
  id: 211,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the derivative of eˣ?',
  options: ['x eˣ', 'eˣ', 'eˣ⁺¹', '1/eˣ'],
  a: 1,
  explanation: 'The derivative of eˣ with respect to x is eˣ.'
},
{
  id: 212,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the integral of 1/x with respect to x?',
  options: ['x²/2 + C', 'ln|x| + C', '1/x² + C', 'eˣ + C'],
  a: 1,
  explanation: 'The integral of 1/x is ln|x| + C.'
},
{
  id: 213,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the value of sin(π/2)?',
  options: ['0', '1', '-1', '1/2'],
  a: 1,
  explanation: 'sin(π/2) = 1.'
},
{
  id: 214,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the order of the differential equation d²y/dx² + dy/dx + y = 0?',
  options: ['1', '2', '3', '0'],
  a: 1,
  explanation: 'The highest derivative is the second derivative, so the order is 2.'
},
{
  id: 215,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the degree of the differential equation (d²y/dx²)³ + y = 0?',
  options: ['1', '2', '3', '6'],
  a: 2,
  explanation: 'The highest-order derivative is squared neither outside a radical nor in a denominator; its power is 3.'
},
{
  id: 216,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the determinant of an identity matrix?',
  options: ['0', '1', '-1', 'Depends on its size'],
  a: 1,
  explanation: 'The determinant of an identity matrix is 1.'
},
{
  id: 217,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'If A is a square matrix, when is A invertible?',
  options: ['When det(A) = 0', 'When det(A) ≠ 0', 'When every entry is zero', 'Only when A is diagonal'],
  a: 1,
  explanation: 'A square matrix is invertible if and only if its determinant is nonzero.'
},
{
  id: 218,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the value of cos(0)?',
  options: ['0', '1', '-1', 'Undefined'],
  a: 1,
  explanation: 'cos(0) = 1.'
},
{
  id: 219,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the Laplace transform of 1?',
  options: ['1/s', 's', '1/s²', '0'],
  a: 0,
  explanation: 'The Laplace transform of the constant function 1 is 1/s for s > 0.'
},
{
  id: 220,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the Laplace transform of eᵃᵗ?',
  options: ['1/(s + a)', '1/(s − a)', 's/(s² + a²)', 's − a'],
  a: 1,
  explanation: 'The Laplace transform of eᵃᵗ is 1/(s − a), for s > a.'
},
{
  id: 211,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the derivative of eˣ?',
  options: ['x eˣ', 'eˣ', 'eˣ⁺¹', '1/eˣ'],
  a: 1,
  explanation: 'The derivative of eˣ with respect to x is eˣ.'
},
{
  id: 212,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the integral of 1/x with respect to x?',
  options: ['x²/2 + C', 'ln|x| + C', '1/x² + C', 'eˣ + C'],
  a: 1,
  explanation: 'The integral of 1/x is ln|x| + C.'
},
{
  id: 213,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the value of sin(π/2)?',
  options: ['0', '1', '-1', '1/2'],
  a: 1,
  explanation: 'sin(π/2) = 1.'
},
{
  id: 214,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the order of the differential equation d²y/dx² + dy/dx + y = 0?',
  options: ['1', '2', '3', '0'],
  a: 1,
  explanation: 'The highest derivative is the second derivative, so the order is 2.'
},
{
  id: 215,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the degree of the differential equation (d²y/dx²)³ + y = 0?',
  options: ['1', '2', '3', '6'],
  a: 2,
  explanation: 'The highest-order derivative is squared neither outside a radical nor in a denominator; its power is 3.'
},
{
  id: 216,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the determinant of an identity matrix?',
  options: ['0', '1', '-1', 'Depends on its size'],
  a: 1,
  explanation: 'The determinant of an identity matrix is 1.'
},
{
  id: 217,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'If A is a square matrix, when is A invertible?',
  options: ['When det(A) = 0', 'When det(A) ≠ 0', 'When every entry is zero', 'Only when A is diagonal'],
  a: 1,
  explanation: 'A square matrix is invertible if and only if its determinant is nonzero.'
},
{
  id: 218,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the value of cos(0)?',
  options: ['0', '1', '-1', 'Undefined'],
  a: 1,
  explanation: 'cos(0) = 1.'
},
{
  id: 219,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the Laplace transform of 1?',
  options: ['1/s', 's', '1/s²', '0'],
  a: 0,
  explanation: 'The Laplace transform of the constant function 1 is 1/s for s > 0.'
},
{
  id: 220,
  topic: 'Engineering Mathematics-II',
  semester: 'Semester 2',
  subject: 'Engineering Mathematics-II',
  q: 'What is the Laplace transform of eᵃᵗ?',
  options: ['1/(s + a)', '1/(s − a)', 's/(s² + a²)', 's − a'],
  a: 1,
  explanation: 'The Laplace transform of eᵃᵗ is 1/(s − a), for s > a.'
},
{
  id: 261,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'What is the pH of a neutral solution at 25°C?',
  options: ['0', '5', '7', '14'],
  a: 2,
  explanation: 'At 25°C, a neutral aqueous solution has pH 7.'
},
{
  id: 262,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which of the following is a strong acid?',
  options: ['HCl', 'CH3COOH', 'H2CO3', 'H2O'],
  a: 0,
  explanation: 'Hydrochloric acid (HCl) ionizes almost completely in water.'
},
{
  id: 263,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'The atomic number of an element equals its number of:',
  options: ['Neutrons', 'Protons', 'Nucleons', 'Electron shells'],
  a: 1,
  explanation: 'Atomic number is defined as the number of protons in the nucleus.'
},
{
  id: 264,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which particle has a negative charge?',
  options: ['Proton', 'Neutron', 'Electron', 'Alpha particle'],
  a: 2,
  explanation: 'An electron carries a negative elementary charge.'
},
{
  id: 265,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which type of bond involves sharing electron pairs?',
  options: ['Ionic bond', 'Covalent bond', 'Metallic bond only', 'Hydrogen bond only'],
  a: 1,
  explanation: 'Covalent bonds form when atoms share electron pairs.'
},
{
  id: 266,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which bond is formed by electrostatic attraction between oppositely charged ions?',
  options: ['Ionic bond', 'Covalent bond', 'Peptide bond', 'Nonpolar bond'],
  a: 0,
  explanation: 'Ionic bonding involves attraction between positive and negative ions.'
},
{
  id: 267,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'What is the SI unit of amount of substance?',
  options: ['Gram', 'Mole', 'Litre', 'Kilogram per second'],
  a: 1,
  explanation: 'The mole (mol) is the SI unit of amount of substance.'
},
{
  id: 268,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Approximately how many particles are present in one mole?',
  options: ['6.022 × 10²³', '3.0 × 10⁸', '9.8 × 10²', '1.6 × 10⁻¹⁹'],
  a: 0,
  explanation: 'One mole contains Avogadro’s number of specified entities.'
},
{
  id: 269,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which gas is mainly responsible for global warming among these options?',
  options: ['Oxygen', 'Carbon dioxide', 'Helium', 'Neon'],
  a: 1,
  explanation: 'Carbon dioxide is a major anthropogenic greenhouse gas.'
},
{
  id: 270,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which of these is a noble gas?',
  options: ['Chlorine', 'Nitrogen', 'Argon', 'Hydrogen'],
  a: 2,
  explanation: 'Argon belongs to Group 18, the noble gases.'
},
{
  id: 271,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which scale is commonly used to express the hardness of minerals?',
  options: ['Mohs scale', 'pH scale', 'Richter scale', 'Celsius scale'],
  a: 0,
  explanation: 'The Mohs scale compares minerals by scratch resistance.'
},
{
  id: 272,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Temporary hardness of water is mainly caused by:',
  options: ['Calcium and magnesium bicarbonates', 'Sodium chloride only', 'Dissolved oxygen', 'Pure silica'],
  a: 0,
  explanation: 'Bicarbonates of calcium and magnesium cause temporary hardness.'
},
{
  id: 273,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which method can remove temporary hardness from water?',
  options: ['Boiling', 'Adding sand only', 'Freezing only', 'Adding sugar'],
  a: 0,
  explanation: 'Boiling decomposes bicarbonates and helps precipitate hardness-causing compounds.'
},
{
  id: 274,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'What is the chemical formula of ozone?',
  options: ['O', 'O2', 'O3', 'O4'],
  a: 2,
  explanation: 'An ozone molecule contains three oxygen atoms.'
},
{
  id: 275,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which layer of the atmosphere contains most of the ozone layer?',
  options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Exosphere'],
  a: 1,
  explanation: 'Most atmospheric ozone is concentrated in the stratosphere.'
},
{
  id: 276,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Rusting of iron requires oxygen and:',
  options: ['Moisture', 'Helium', 'Pure nitrogen only', 'Vacuum'],
  a: 0,
  explanation: 'Iron rusts in the presence of oxygen and moisture.'
},
{
  id: 277,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Oxidation is commonly defined as:',
  options: ['Gain of electrons', 'Loss of electrons', 'Gain of neutrons', 'Loss of protons only'],
  a: 1,
  explanation: 'Oxidation is defined as loss of electrons.'
},
{
  id: 278,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Reduction is commonly defined as:',
  options: ['Loss of electrons', 'Gain of electrons', 'Gain of oxygen only', 'Loss of mass only'],
  a: 1,
  explanation: 'Reduction is defined as gain of electrons.'
},
{
  id: 279,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'A catalyst increases reaction rate mainly by:',
  options: ['Increasing activation energy', 'Lowering activation energy', 'Being consumed completely', 'Changing the equilibrium constant'],
  a: 1,
  explanation: 'A catalyst provides an alternative pathway with lower activation energy.'
},
{
  id: 280,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'For an exothermic reaction, heat is:',
  options: ['Absorbed from surroundings', 'Released to surroundings', 'Always zero', 'Converted entirely into matter'],
  a: 1,
  explanation: 'Exothermic reactions release heat to the surroundings.'
},
{
  id: 281,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which law states that matter is neither created nor destroyed in a chemical reaction?',
  options: ['Law of conservation of mass', 'Ohm’s law', 'Boyle’s law', 'Faraday’s law of induction'],
  a: 0,
  explanation: 'The law of conservation of mass applies to ordinary chemical reactions.'
},
{
  id: 282,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'What is the molar mass of water (H2O), approximately?',
  options: ['10 g/mol', '18 g/mol', '28 g/mol', '32 g/mol'],
  a: 1,
  explanation: 'Water has molar mass approximately 2(1) + 16 = 18 g/mol.'
},
{
  id: 283,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which gas is released when a typical acid reacts with a carbonate?',
  options: ['Hydrogen', 'Carbon dioxide', 'Nitrogen', 'Chlorine'],
  a: 1,
  explanation: 'Acid-carbonate reactions commonly release carbon dioxide.'
},
{
  id: 284,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which of the following is an example of a polymer?',
  options: ['Polyethylene', 'Sodium chloride', 'Water', 'Carbon dioxide'],
  a: 0,
  explanation: 'Polyethylene consists of long chains of repeating ethylene-derived units.'
},
{
  id: 285,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'The monomer used to make polyethylene is:',
  options: ['Ethene', 'Ethanol', 'Ethanoic acid', 'Methane'],
  a: 0,
  explanation: 'Polyethylene is produced by polymerizing ethene.'
},
{
  id: 286,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which functional group is present in alcohols?',
  options: ['–COOH', '–OH', '–CHO', '–NH2'],
  a: 1,
  explanation: 'Alcohols contain the hydroxyl group, –OH.'
},
{
  id: 287,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which functional group defines carboxylic acids?',
  options: ['–OH only', '–COOH', '–O–', '–NH2'],
  a: 1,
  explanation: 'Carboxylic acids contain the carboxyl group, –COOH.'
},
{
  id: 288,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'What is the chemical formula of methane?',
  options: ['CH4', 'C2H6', 'CO2', 'NH3'],
  a: 0,
  explanation: 'Methane contains one carbon atom bonded to four hydrogen atoms.'
},
{
  id: 289,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which type of hydrocarbon contains at least one carbon-carbon double bond?',
  options: ['Alkane', 'Alkene', 'Alkyne only', 'Cycloalkane only'],
  a: 1,
  explanation: 'Alkenes contain at least one carbon-carbon double bond.'
},
{
  id: 290,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which of these is a saturated hydrocarbon?',
  options: ['Ethene', 'Ethyne', 'Ethane', 'Benzene'],
  a: 2,
  explanation: 'Ethane is an alkane and contains only carbon-carbon single bonds.'
},
{
  id: 291,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which technique is commonly used to separate components of a liquid mixture based on boiling points?',
  options: ['Distillation', 'Filtration only', 'Magnetic separation', 'Sieving'],
  a: 0,
  explanation: 'Distillation separates substances using differences in volatility and boiling points.'
},
{
  id: 292,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which method is commonly used to separate an insoluble solid from a liquid?',
  options: ['Filtration', 'Distillation only', 'Chromatography only', 'Electroplating'],
  a: 0,
  explanation: 'Filtration retains insoluble solid particles while the liquid passes through.'
},
{
  id: 293,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'A solution containing less solute than its saturation limit is called:',
  options: ['Supersaturated', 'Unsaturated', 'Always concentrated', 'Precipitated'],
  a: 1,
  explanation: 'An unsaturated solution can dissolve more solute under the same conditions.'
},
{
  id: 294,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Molarity is defined as:',
  options: ['Moles of solute per litre of solution', 'Grams of solvent per litre', 'Moles per kilogram of solvent', 'Mass per mole only'],
  a: 0,
  explanation: 'Molarity is the number of moles of solute per litre of solution.'
},
{
  id: 295,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which gas law states that pressure is inversely proportional to volume at constant temperature for a fixed amount of gas?',
  options: ['Charles’s law', 'Boyle’s law', 'Avogadro’s law', 'Graham’s law'],
  a: 1,
  explanation: 'Boyle’s law states that PV is constant under the specified conditions.'
},
{
  id: 296,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which gas law relates gas volume to absolute temperature at constant pressure?',
  options: ['Boyle’s law', 'Charles’s law', 'Dalton’s law only', 'Hess’s law'],
  a: 1,
  explanation: 'Charles’s law states that volume is proportional to absolute temperature at constant pressure.'
},
{
  id: 297,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which quantity measures resistance to a change in the flow of electric current?',
  options: ['Resistance', 'Capacitance', 'Frequency', 'Wavelength'],
  a: 0,
  explanation: 'Electrical resistance opposes current flow.'
},
{
  id: 298,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which electrochemical process deposits a metal coating using electric current?',
  options: ['Electroplating', 'Distillation', 'Polymerization', 'Crystallization'],
  a: 0,
  explanation: 'Electroplating uses electrolysis to deposit a thin metal layer.'
},
{
  id: 299,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'In an electrochemical cell, oxidation occurs at the:',
  options: ['Cathode', 'Anode', 'Salt bridge only', 'Electrolyte surface only'],
  a: 1,
  explanation: 'Oxidation takes place at the anode.'
},
{
  id: 300,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'In a galvanic cell, reduction occurs at the:',
  options: ['Anode', 'Cathode', 'Salt bridge', 'External wire only'],
  a: 1,
  explanation: 'Reduction takes place at the cathode.'
},
{
  id: 301,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which is a common corrosion-prevention method for iron?',
  options: ['Galvanization', 'Increasing moisture', 'Removing all protective coatings', 'Adding salt water'],
  a: 0,
  explanation: 'Galvanization coats iron or steel with zinc to help protect it from corrosion.'
},
{
  id: 302,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which gas is commonly used in fire extinguishers for some types of fires?',
  options: ['Carbon dioxide', 'Hydrogen', 'Acetylene', 'Oxygen'],
  a: 0,
  explanation: 'Carbon dioxide extinguishers are used for suitable fires by displacing oxygen and cooling.'
},
{
  id: 303,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which of these is a renewable energy source?',
  options: ['Coal', 'Petroleum', 'Solar energy', 'Natural gas'],
  a: 2,
  explanation: 'Solar energy is replenished naturally and is considered renewable.'
},
{
  id: 304,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Acid rain is mainly associated with emissions of:',
  options: ['SO2 and nitrogen oxides', 'Helium and neon', 'Hydrogen only', 'Water vapour only'],
  a: 0,
  explanation: 'Sulfur dioxide and nitrogen oxides can form acids in the atmosphere.'
},
{
  id: 305,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which process converts a solid directly into a gas?',
  options: ['Condensation', 'Sublimation', 'Freezing', 'Deposition'],
  a: 1,
  explanation: 'Sublimation is the direct transition from solid to gas.'
},
{
  id: 306,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which intermolecular force is particularly important between water molecules?',
  options: ['Hydrogen bonding', 'Metallic bonding', 'Ionic bonding only', 'Nuclear bonding'],
  a: 0,
  explanation: 'Water molecules form hydrogen bonds due to their polar O–H bonds.'
},
{
  id: 307,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which element has the chemical symbol Na?',
  options: ['Nitrogen', 'Sodium', 'Neon', 'Nickel'],
  a: 1,
  explanation: 'Na is the symbol for sodium.'
},
{
  id: 308,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which element has the chemical symbol Fe?',
  options: ['Fluorine', 'Iron', 'Francium', 'Fermium'],
  a: 1,
  explanation: 'Fe is the chemical symbol for iron.'
},
{
  id: 309,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which of the following is an alkaline earth metal?',
  options: ['Sodium', 'Calcium', 'Chlorine', 'Argon'],
  a: 1,
  explanation: 'Calcium belongs to Group 2 of the periodic table.'
},
{
  id: 310,
  topic: 'Chemistry',
  semester: 'Semester 2',
  subject: 'Engineering Chemistry',
  q: 'Which element is the most electronegative?',
  options: ['Oxygen', 'Fluorine', 'Chlorine', 'Nitrogen'],
  a: 1,
  explanation: 'Fluorine has the highest electronegativity on the Pauling scale.'
},
{
  id: 311,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which semiconductor material is commonly used to manufacture electronic devices?',
  options: ['Copper', 'Silicon', 'Rubber', 'Glass'],
  a: 1,
  explanation: 'Silicon is widely used because its electrical properties can be controlled by doping.'
},
{
  id: 312,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which charge carriers are present in an n-type semiconductor as majority carriers?',
  options: ['Holes', 'Electrons', 'Protons', 'Neutrons'],
  a: 1,
  explanation: 'Donor doping makes electrons the majority carriers in an n-type semiconductor.'
},
{
  id: 313,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which are the majority charge carriers in a p-type semiconductor?',
  options: ['Electrons', 'Holes', 'Neutrons', 'Photons'],
  a: 1,
  explanation: 'Acceptor doping creates holes as the majority carriers in a p-type semiconductor.'
},
{
  id: 314,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What are the two terminals of an ordinary PN-junction diode?',
  options: ['Gate and source', 'Emitter and collector', 'Anode and cathode', 'Base and emitter'],
  a: 2,
  explanation: 'A PN-junction diode has an anode and a cathode.'
},
{
  id: 315,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'An ideal diode in forward bias behaves approximately as:',
  options: ['An open circuit', 'A short circuit', 'A capacitor only', 'A voltage source of infinite voltage'],
  a: 1,
  explanation: 'An ideal forward-biased diode has zero voltage drop and conducts current.'
},
{
  id: 316,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'An ideal diode in reverse bias behaves approximately as:',
  options: ['A short circuit', 'An open circuit', 'A perfect conductor', 'A battery'],
  a: 1,
  explanation: 'An ideal reverse-biased diode blocks current.'
},
{
  id: 317,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the approximate forward voltage drop of a silicon diode?',
  options: ['0.1 V', '0.7 V', '2.5 V', '5 V'],
  a: 1,
  explanation: 'A silicon diode commonly has a forward drop around 0.7 V, depending on current and temperature.'
},
{
  id: 318,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the main application of a rectifier?',
  options: ['Convert DC to AC', 'Convert AC to DC', 'Increase resistance only', 'Store magnetic energy'],
  a: 1,
  explanation: 'A rectifier converts alternating current into unidirectional current.'
},
{
  id: 319,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which rectifier uses four diodes in a common bridge arrangement?',
  options: ['Half-wave rectifier', 'Bridge rectifier', 'Single transistor amplifier', 'Voltage regulator only'],
  a: 1,
  explanation: 'A standard single-phase bridge rectifier uses four diodes.'
},
{
  id: 320,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which component is commonly used to smooth rectifier output?',
  options: ['Filter capacitor', 'Fuse only', 'Switch only', 'Antenna'],
  a: 0,
  explanation: 'A filter capacitor reduces ripple in rectified output.'
},
{
  id: 321,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the primary function of a Zener diode in its breakdown region?',
  options: ['Generate mechanical power', 'Regulate voltage', 'Amplify sound mechanically', 'Store program instructions'],
  a: 1,
  explanation: 'A Zener diode can maintain an approximately constant voltage in reverse breakdown.'
},
{
  id: 322,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which device emits light when forward biased?',
  options: ['LED', 'LDR', 'Ordinary fuse', 'Inductor'],
  a: 0,
  explanation: 'An LED emits light when current flows through it in forward bias.'
},
{
  id: 323,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What does LDR stand for?',
  options: ['Light Dependent Resistor', 'Low Drive Relay', 'Linear Digital Register', 'Light Driven Rectifier'],
  a: 0,
  explanation: 'An LDR changes resistance according to the intensity of incident light.'
},
{
  id: 324,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which semiconductor device is commonly used as an electronic switch and amplifier?',
  options: ['Transistor', 'Fuse', 'Mechanical spring', 'Transformer core'],
  a: 0,
  explanation: 'Transistors can operate as switches and amplifiers.'
},
{
  id: 325,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What are the three terminals of a typical bipolar junction transistor (BJT)?',
  options: ['Gate, drain, source', 'Anode, cathode, gate', 'Emitter, base, collector', 'Input, output, ground'],
  a: 2,
  explanation: 'A BJT has emitter, base and collector terminals.'
},
{
  id: 326,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which BJT configuration is commonly used for voltage amplification because of its useful gain characteristics?',
  options: ['Common emitter', 'Common base only for all applications', 'Open collector with no load', 'Disconnected emitter'],
  a: 0,
  explanation: 'The common-emitter configuration provides both current and voltage gain.'
},
{
  id: 327,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the approximate current gain beta of a BJT in common-emitter mode?',
  options: ['IC/IB', 'IB/IC', 'IE/IC only', 'VC/VE'],
  a: 0,
  explanation: 'The common-emitter current gain beta is the ratio of collector current to base current.'
},
{
  id: 328,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which transistor is controlled primarily by an electric field?',
  options: ['BJT', 'FET', 'Relay', 'Fuse'],
  a: 1,
  explanation: 'A field-effect transistor controls channel current using an electric field.'
},
{
  id: 329,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What are the terminals of a MOSFET?',
  options: ['Emitter, base, collector', 'Gate, drain, source', 'Anode, cathode, filament', 'Phase, neutral, earth'],
  a: 1,
  explanation: 'A MOSFET normally has gate, drain and source terminals, with a body terminal in many devices.'
},
{
  id: 330,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'An amplifier is used primarily to:',
  options: ['Increase signal amplitude or power', 'Remove all energy from a signal', 'Convert every signal to heat', 'Measure length'],
  a: 0,
  explanation: 'An amplifier increases a signal’s voltage, current or power.'
},
{
  id: 331,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the ideal input resistance of an operational amplifier?',
  options: ['Zero', 'Very low', 'Infinite', 'Exactly 1 ohm'],
  a: 2,
  explanation: 'An ideal op-amp draws no input current, corresponding to infinite input resistance.'
},
{
  id: 332,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the ideal output resistance of an operational amplifier?',
  options: ['Infinite', 'Zero', 'Very high', 'Equal to input resistance'],
  a: 1,
  explanation: 'An ideal op-amp has zero output resistance.'
},
{
  id: 333,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'In an ideal op-amp with negative feedback operating linearly, the two input terminals have approximately:',
  options: ['Equal voltages', 'Infinite voltage difference', 'Zero current gain', 'Infinite output resistance'],
  a: 0,
  explanation: 'Negative feedback makes the input voltage difference approximately zero in linear operation.'
},
{
  id: 334,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which logic gate produces output 1 only when all its inputs are 1?',
  options: ['OR', 'AND', 'XOR', 'NOR'],
  a: 1,
  explanation: 'An AND gate outputs 1 only when every input is 1.'
},
{
  id: 335,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which logic gate inverts its input?',
  options: ['AND', 'OR', 'NOT', 'XOR'],
  a: 2,
  explanation: 'A NOT gate outputs the complement of its input.'
},
{
  id: 336,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'An OR gate gives output 0 when:',
  options: ['At least one input is 1', 'All inputs are 0', 'All inputs are 1', 'Inputs are different'],
  a: 1,
  explanation: 'The OR gate outputs 0 only when all its inputs are 0.'
},
{
  id: 337,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which gates are called universal gates?',
  options: ['AND and OR', 'XOR and XNOR', 'NAND and NOR', 'NOT and XOR'],
  a: 2,
  explanation: 'NAND or NOR gates alone can implement any Boolean function.'
},
{
  id: 338,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the output of an XOR gate when both inputs are equal?',
  options: ['1', '0', 'Undefined', 'High impedance always'],
  a: 1,
  explanation: 'XOR outputs 1 only when the inputs differ.'
},
{
  id: 339,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'How many bits are in one byte?',
  options: ['4', '8', '16', '32'],
  a: 1,
  explanation: 'One byte consists of eight bits.'
},
{
  id: 340,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the binary representation of decimal 5?',
  options: ['101', '110', '111', '100'],
  a: 0,
  explanation: 'Decimal 5 equals 4 + 1, which is binary 101.'
},
{
  id: 341,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which circuit adds two binary bits and produces sum and carry outputs?',
  options: ['Half adder', 'Multiplexer', 'Decoder', 'Flip-flop'],
  a: 0,
  explanation: 'A half adder produces the sum and carry of two one-bit inputs.'
},
{
  id: 342,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which circuit can add two bits plus an input carry?',
  options: ['Half adder', 'Full adder', 'Encoder only', 'Demultiplexer'],
  a: 1,
  explanation: 'A full adder adds two input bits and a carry-in bit.'
},
{
  id: 343,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which digital circuit stores one bit of information?',
  options: ['Flip-flop', 'Rectifier', 'Transformer', 'Voltage divider'],
  a: 0,
  explanation: 'A flip-flop is a bistable circuit used to store one bit.'
},
{
  id: 344,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which circuit selects one of several input signals and forwards it to one output?',
  options: ['Multiplexer', 'Demultiplexer', 'Counter only', 'Rectifier'],
  a: 0,
  explanation: 'A multiplexer selects one input according to its select lines.'
},
{
  id: 345,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which circuit routes one input signal to one of several outputs?',
  options: ['Multiplexer', 'Demultiplexer', 'Half adder', 'Oscillator'],
  a: 1,
  explanation: 'A demultiplexer directs an input to a selected output.'
},
{
  id: 346,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the primary function of an oscillator?',
  options: ['Generate a periodic signal', 'Store charge permanently', 'Measure resistance only', 'Convert AC directly to mechanical motion'],
  a: 0,
  explanation: 'An oscillator generates a periodic electrical signal without requiring a periodic input.'
},
{
  id: 347,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which instrument displays electrical waveforms against time?',
  options: ['Oscilloscope', 'Thermometer', 'Barometer', 'Hydrometer'],
  a: 0,
  explanation: 'An oscilloscope displays signal voltage versus time.'
},
{
  id: 348,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which instrument is used to measure electric current?',
  options: ['Voltmeter', 'Ammeter', 'Ohmmeter', 'Watt-hour meter only'],
  a: 1,
  explanation: 'An ammeter measures current and is connected in series in a basic measurement setup.'
},
{
  id: 349,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'A voltmeter should ideally have:',
  options: ['Zero resistance', 'Very low resistance', 'Infinite resistance', 'Negative resistance in every case'],
  a: 2,
  explanation: 'High input resistance minimizes current drawn by an ideal voltmeter.'
},
{
  id: 350,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which component opposes sudden changes in current in an ideal inductor?',
  options: ['Inductor', 'Resistor only', 'Switch', 'LED only'],
  a: 0,
  explanation: 'An inductor resists changes in current by inducing a voltage.'
},
{
  id: 351,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which component opposes sudden changes in voltage across it?',
  options: ['Ideal capacitor', 'Ideal resistor', 'Fuse', 'Ammeter'],
  a: 0,
  explanation: 'A capacitor’s voltage cannot change instantaneously under finite current.'
},
{
  id: 352,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the SI unit of frequency?',
  options: ['Henry', 'Hertz', 'Farad', 'Coulomb'],
  a: 1,
  explanation: 'Frequency is measured in hertz (Hz), or cycles per second.'
},
{
  id: 353,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the relation between frequency f and period T?',
  options: ['f = T', 'f = 1/T', 'f = T²', 'f = 2T'],
  a: 1,
  explanation: 'Frequency and period are reciprocals: f = 1/T.'
},
{
  id: 354,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which type of signal has only two discrete logic levels in basic digital electronics?',
  options: ['Binary digital signal', 'Pure analog signal', 'Random thermal noise only', 'Continuous sinusoid only'],
  a: 0,
  explanation: 'Binary digital logic represents information using two logic states, usually 0 and 1.'
},
{
  id: 355,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which semiconductor device is commonly used to convert light into an electrical signal?',
  options: ['Photodiode', 'Zener diode only', 'Ordinary resistor', 'Transformer'],
  a: 0,
  explanation: 'A photodiode converts incident light into electrical current.'
},
{
  id: 356,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which transistor parameter is the ratio of collector current to emitter current in a BJT?',
  options: ['Alpha (α)', 'Beta (β)', 'Resistance (R)', 'Capacitance (C)'],
  a: 0,
  explanation: 'The common-base current gain alpha is IC/IE.'
},
{
  id: 357,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What is the main purpose of biasing a transistor?',
  options: ['Establish a suitable operating point', 'Destroy the PN junction', 'Make all currents zero', 'Convert it into a resistor only'],
  a: 0,
  explanation: 'Biasing sets the transistor operating point for intended operation.'
},
{
  id: 358,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'Which region of a BJT is generally used for linear amplification?',
  options: ['Cutoff', 'Active region', 'Deep saturation only', 'Breakdown'],
  a: 1,
  explanation: 'A BJT is normally biased in the active region for linear amplification.'
},
{
  id: 359,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'In a basic digital circuit, what does logic 0 usually represent?',
  options: ['A low logic level', 'Always exactly −100 V', 'An open circuit in every design', 'A high logic level'],
  a: 0,
  explanation: 'Logic 0 normally represents the low logic level defined by the circuit family.'
},
{
  id: 360,
  topic: 'Basic Electronics',
  semester: 'Semester 2',
  subject: 'Basic Electronics',
  q: 'What does a regulator circuit primarily do in a power supply?',
  options: ['Maintain a stable output voltage', 'Increase ripple intentionally', 'Measure temperature only', 'Store source code'],
  a: 0,
  explanation: 'A voltage regulator keeps output voltage relatively constant as conditions vary.'
},
{
  id: 361,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of the following is a renewable natural resource?',
  options: ['Coal', 'Petroleum', 'Solar energy', 'Natural gas'],
  a: 2,
  explanation: 'Solar energy is naturally replenished.'
},
{
  id: 362,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which gas is a major contributor to human-caused global warming?',
  options: ['Oxygen', 'Carbon dioxide', 'Helium', 'Neon'],
  a: 1,
  explanation: 'Carbon dioxide is a major greenhouse gas emitted by human activities.'
},
{
  id: 363,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which atmospheric layer contains most of the ozone layer?',
  options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Exosphere'],
  a: 1,
  explanation: 'Most atmospheric ozone is concentrated in the stratosphere.'
},
{
  id: 364,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of these is a primary air pollutant emitted directly into the atmosphere?',
  options: ['Sulfur dioxide', 'Ozone formed in the atmosphere', 'Photochemical smog', 'Acid deposition'],
  a: 0,
  explanation: 'Sulfur dioxide can be emitted directly from combustion and industrial processes.'
},
{
  id: 365,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which gas is commonly released by incomplete combustion of fuels?',
  options: ['Carbon monoxide', 'Oxygen', 'Helium', 'Argon'],
  a: 0,
  explanation: 'Incomplete combustion can produce toxic carbon monoxide.'
},
{
  id: 366,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which phenomenon describes the excessive growth of algae due to nutrient enrichment in water?',
  options: ['Desertification', 'Eutrophication', 'Ozone depletion', 'Biomagnification'],
  a: 1,
  explanation: 'Excess nutrients, especially nitrogen and phosphorus, can cause eutrophication.'
},
{
  id: 367,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which process naturally replenishes groundwater when water enters the soil?',
  options: ['Infiltration and recharge', 'Combustion', 'Evaporation only', 'Incineration'],
  a: 0,
  explanation: 'Infiltrating water can percolate down and recharge aquifers.'
},
{
  id: 368,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What does biodiversity refer to?',
  options: ['Variety of life at different levels', 'Only the number of humans', 'Only forest area', 'Amount of rainfall only'],
  a: 0,
  explanation: 'Biodiversity includes variation within species, between species and among ecosystems.'
},
{
  id: 369,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of the following is an example of in-situ conservation?',
  options: ['National park', 'Seed bank only', 'Zoo only', 'Botanical specimen cabinet'],
  a: 0,
  explanation: 'In-situ conservation protects species in their natural habitats.'
},
{
  id: 370,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of these is an example of ex-situ conservation?',
  options: ['Wildlife sanctuary', 'National park', 'Seed bank', 'Biosphere reserve'],
  a: 2,
  explanation: 'Seed banks preserve plant genetic material outside its natural habitat.'
},
{
  id: 371,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is the main purpose of a food chain?',
  options: ['Show energy transfer between organisms', 'Measure air pressure', 'Describe rock formation only', 'Measure soil pH only'],
  a: 0,
  explanation: 'A food chain shows feeding relationships and energy transfer.'
},
{
  id: 372,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which organisms are generally producers in an ecosystem?',
  options: ['Green plants', 'Carnivores only', 'Fungi only', 'Decomposing bacteria only'],
  a: 0,
  explanation: 'Green plants use photosynthesis to produce organic matter.'
},
{
  id: 373,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which organisms play a major role in decomposing dead organic matter?',
  options: ['Fungi and bacteria', 'Only large predators', 'Only herbivores', 'Only flowering plants'],
  a: 0,
  explanation: 'Many fungi and bacteria break down dead matter and recycle nutrients.'
},
{
  id: 374,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is the approximate percentage of energy transferred to the next trophic level under the ten-percent law?',
  options: ['1%', '10%', '50%', '100%'],
  a: 1,
  explanation: 'The ten-percent law is a simplified ecological model of energy transfer.'
},
{
  id: 375,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is deforestation?',
  options: ['Removal of forest cover', 'Planting more trees', 'Protecting wildlife', 'Restoring wetlands'],
  a: 0,
  explanation: 'Deforestation is the large-scale removal or conversion of forest cover.'
},
{
  id: 376,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which practice helps reduce soil erosion?',
  options: ['Contour farming', 'Removing all vegetation', 'Overgrazing', 'Uncontrolled deforestation'],
  a: 0,
  explanation: 'Contour farming slows water runoff on sloped land.'
},
{
  id: 377,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is desertification?',
  options: ['Land degradation in dry regions', 'Formation of new oceans', 'Growth of coral reefs', 'Purification of water'],
  a: 0,
  explanation: 'Desertification is land degradation in arid, semi-arid and dry sub-humid areas.'
},
{
  id: 378,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of the following is biodegradable?',
  options: ['Vegetable peels', 'Glass bottle', 'Aluminium can', 'Most conventional plastic bags'],
  a: 0,
  explanation: 'Organic food scraps can be broken down by microorganisms.'
},
{
  id: 379,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is composting?',
  options: ['Biological decomposition of organic waste', 'Burning all waste in open air', 'Dumping plastic into rivers', 'Extracting crude oil'],
  a: 0,
  explanation: 'Composting turns suitable organic waste into a soil-improving material.'
},
{
  id: 380,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What do the three Rs of waste management stand for?',
  options: ['Reduce, Reuse, Recycle', 'Remove, React, Replace', 'Read, Record, Report', 'Run, Return, Repair'],
  a: 0,
  explanation: 'Reduce, reuse and recycle help limit waste and resource consumption.'
},
{
  id: 381,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which waste generally requires special handling because it may contain infectious material?',
  options: ['Biomedical waste', 'Clean paper', 'Uncontaminated cardboard', 'Garden leaves only'],
  a: 0,
  explanation: 'Biomedical waste may pose biological or chemical hazards and needs appropriate handling.'
},
{
  id: 382,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is the main purpose of wastewater treatment?',
  options: ['Remove contaminants before discharge or reuse', 'Increase toxic substances', 'Add plastic to water', 'Make water more saline'],
  a: 0,
  explanation: 'Treatment reduces pollutants and health risks before discharge or reuse.'
},
{
  id: 383,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What does BOD stand for in water quality assessment?',
  options: ['Biochemical Oxygen Demand', 'Basic Ozone Density', 'Biological Oil Deposit', 'Balanced Oxygen Distribution'],
  a: 0,
  explanation: 'BOD estimates the oxygen used by microorganisms to break down biodegradable matter.'
},
{
  id: 384,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'High BOD in a water sample often indicates:',
  options: ['High biodegradable organic pollution', 'Absolutely pure water', 'No microorganisms present', 'Zero organic matter in every case'],
  a: 0,
  explanation: 'High BOD often reflects greater biodegradable organic matter requiring oxygen for decomposition.'
},
{
  id: 385,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which gas is most associated with depletion of stratospheric ozone from older refrigerants?',
  options: ['Chlorofluorocarbons (CFCs)', 'Oxygen', 'Hydrogen', 'Argon'],
  a: 0,
  explanation: 'CFCs can release chlorine radicals that catalytically destroy ozone.'
},
{
  id: 386,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Acid rain is mainly associated with atmospheric emissions of:',
  options: ['Sulfur dioxide and nitrogen oxides', 'Helium and neon', 'Pure oxygen', 'Water vapour alone'],
  a: 0,
  explanation: 'Sulfur dioxide and nitrogen oxides form acids through atmospheric reactions.'
},
{
  id: 387,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of these is a greenhouse gas?',
  options: ['Methane', 'Argon', 'Neon', 'Helium'],
  a: 0,
  explanation: 'Methane absorbs infrared radiation and contributes to the greenhouse effect.'
},
{
  id: 388,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which international agreement is specifically associated with protecting the ozone layer?',
  options: ['Montreal Protocol', 'Kyoto Protocol only', 'Ramsar Convention only', 'Antarctic Treaty only'],
  a: 0,
  explanation: 'The Montreal Protocol controls ozone-depleting substances.'
},
{
  id: 389,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'The Paris Agreement primarily addresses:',
  options: ['Climate change', 'Marine navigation only', 'Nuclear fission', 'International postal services'],
  a: 0,
  explanation: 'The Paris Agreement aims to strengthen the global response to climate change.'
},
{
  id: 390,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of these is a non-renewable resource?',
  options: ['Wind', 'Solar radiation', 'Coal', 'Tidal energy'],
  a: 2,
  explanation: 'Coal forms over geological timescales and is non-renewable on human timescales.'
},
{
  id: 391,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which energy source generates electricity using moving air?',
  options: ['Wind energy', 'Coal combustion', 'Diesel only', 'Natural gas only'],
  a: 0,
  explanation: 'Wind turbines convert the kinetic energy of wind into electrical energy.'
},
{
  id: 392,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is the main environmental benefit of using public transport?',
  options: ['It can reduce per-person emissions', 'It always eliminates all emissions', 'It increases fuel use per person in every case', 'It prevents all traffic'],
  a: 0,
  explanation: 'Shared transport can reduce energy use and emissions per passenger.'
},
{
  id: 393,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is an ecological footprint?',
  options: ['A measure of human demand on nature', 'The physical size of a shoe', 'A type of fossil', 'A measure of wind speed'],
  a: 0,
  explanation: 'An ecological footprint estimates the biologically productive area needed to support resource use and absorb waste.'
},
{
  id: 394,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What does sustainable development aim to do?',
  options: ['Meet present needs without compromising future generations', 'Use all resources immediately', 'Stop all economic activity', 'Ignore environmental impacts'],
  a: 0,
  explanation: 'Sustainable development balances present needs with future generations’ ability to meet theirs.'
},
{
  id: 395,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which is a likely consequence of excessive groundwater extraction?',
  options: ['Declining water table', 'Unlimited groundwater increase', 'Permanent elimination of drought', 'Automatic glacier growth'],
  a: 0,
  explanation: 'Extraction faster than recharge can lower groundwater levels.'
},
{
  id: 396,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which ecosystem is characterized by salt-tolerant trees and tidal influence?',
  options: ['Mangrove forest', 'Desert dune', 'Alpine meadow only', 'Tundra only'],
  a: 0,
  explanation: 'Mangrove ecosystems occur along tropical and subtropical coasts and tolerate saline conditions.'
},
{
  id: 397,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of the following is an example of a natural disaster?',
  options: ['Earthquake', 'Plastic recycling', 'Afforestation', 'Composting'],
  a: 0,
  explanation: 'An earthquake is a natural hazard that can cause a disaster when it impacts people and infrastructure.'
},
{
  id: 398,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which instrument is commonly used to measure noise level?',
  options: ['Sound level meter', 'Barometer', 'Rain gauge', 'pH meter'],
  a: 0,
  explanation: 'A sound level meter measures sound pressure levels, commonly in decibels.'
},
{
  id: 399,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Noise levels are commonly expressed in:',
  options: ['Decibels', 'Kelvin', 'Moles', 'Joules per mole only'],
  a: 0,
  explanation: 'Sound level is commonly reported in decibels (dB).'
},
{
  id: 400,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which practice can reduce household water consumption?',
  options: ['Repairing leaking taps', 'Leaving taps running', 'Washing pavements with a hose daily', 'Ignoring pipe leaks'],
  a: 0,
  explanation: 'Repairing leaks prevents unnecessary water loss.'
},
{
  id: 401,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Rainwater harvesting involves:',
  options: ['Collecting and storing rainwater', 'Burning fossil fuels', 'Releasing sewage into rivers', 'Removing all groundwater'],
  a: 0,
  explanation: 'Rainwater harvesting collects runoff for later use or groundwater recharge.'
},
{
  id: 402,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is biomagnification?',
  options: ['Increasing concentration of certain pollutants at higher trophic levels', 'Decrease in organism size with age', 'Formation of clouds', 'Growth of forests after rainfall'],
  a: 0,
  explanation: 'Some persistent pollutants become more concentrated in organisms higher in a food chain.'
},
{
  id: 403,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which type of pollutant can accumulate in organisms and biomagnify?',
  options: ['Persistent mercury compounds', 'Short-lived visible light', 'Pure oxygen', 'Water vapour only'],
  a: 0,
  explanation: 'Mercury can accumulate in aquatic food webs and reach high concentrations in predators.'
},
{
  id: 404,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is the main purpose of an Environmental Impact Assessment (EIA)?',
  options: ['Evaluate likely environmental effects before a project proceeds', 'Guarantee that no project has any impact', 'Calculate only employee salaries', 'Replace all engineering design'],
  a: 0,
  explanation: 'An EIA identifies and assesses likely environmental impacts and possible mitigation measures.'
},
{
  id: 405,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of the following is an example of an invasive alien species impact?',
  options: ['Outcompeting native species', 'Always increasing every native population', 'Preventing all ecosystem change', 'Automatically improving all habitats'],
  a: 0,
  explanation: 'Some introduced species spread and outcompete native species, altering ecosystems.'
},
{
  id: 406,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which ecosystem service includes pollination and water purification?',
  options: ['Ecosystem services', 'Industrial exhaust', 'Mineral extraction only', 'Electronic waste'],
  a: 0,
  explanation: 'Ecosystems provide services such as pollination, water purification and nutrient cycling.'
},
{
  id: 407,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of the following helps protect biodiversity?',
  options: ['Habitat conservation', 'Illegal wildlife trade', 'Habitat destruction', 'Uncontrolled poaching'],
  a: 0,
  explanation: 'Protecting habitats supports the survival of species and ecological communities.'
},
{
  id: 408,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What is the main purpose of afforestation?',
  options: ['Establish forest cover on land not recently forested', 'Remove every tree', 'Increase soil erosion', 'Pollute rivers'],
  a: 0,
  explanation: 'Afforestation establishes tree cover on land that has not recently been forested.'
},
{
  id: 409,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'Which of these is an example of point-source water pollution?',
  options: ['Discharge from a single industrial pipe', 'Runoff from many farms over a large area', 'Windblown dust over a region', 'Diffuse urban runoff from many streets'],
  a: 0,
  explanation: 'Point-source pollution comes from an identifiable discharge point.'
},
{
  id: 410,
  topic: 'Environmental Science',
  semester: 'Semester 2',
  subject: 'Environmental Science',
  q: 'What does the term carbon footprint estimate?',
  options: ['Greenhouse gas emissions associated with an activity or entity', 'The weight of soil only', 'The number of trees in a park only', 'The amount of oxygen in one breath'],
  a: 0,
  explanation: 'A carbon footprint estimates direct and indirect greenhouse gas emissions, often expressed as CO₂-equivalent.'
},
{
  id: 411, topic: 'DSA', semester: 'Semester 3', subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure stores elements in contiguous memory locations?',
  options: ['Linked List', 'Array', 'Tree', 'Graph'], a: 1,
  explanation: 'Array elements are stored in contiguous memory locations.'
},
{
  id: 412, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure follows LIFO?',
  options: ['Queue', 'Stack', 'Tree', 'Graph'], a: 1,
  explanation: 'LIFO means Last In, First Out.'
},
{
  id: 413, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure follows FIFO?',
  options: ['Stack', 'Tree', 'Queue', 'Heap'], a: 2,
  explanation: 'FIFO means First In, First Out.'
},
{
  id: 414, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the time complexity of accessing an array element by index?',
  options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'], a: 2,
  explanation: 'Array indexing takes constant time, O(1).'
},
{
  id: 415, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which operation inserts an element at the top of a stack?',
  options: ['Pop', 'Push', 'Dequeue', 'Search'], a: 1,
  explanation: 'Push adds an element to the top of a stack.'
},
{
  id: 416, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which operation removes the top element of a stack?',
  options: ['Push', 'Insert', 'Pop', 'Enqueue'], a: 2,
  explanation: 'Pop removes the top element.'
},
{
  id: 417, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which operation inserts an element into a queue?',
  options: ['Push', 'Enqueue', 'Pop', 'Peek'], a: 1,
  explanation: 'Enqueue inserts an element into a queue.'
},
{
  id: 418, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which operation removes an element from a queue?',
  options: ['Dequeue', 'Push', 'Peek', 'Append'], a: 0,
  explanation: 'Dequeue removes an element from a queue.'
},
{
  id: 419, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the first node of a linked list called?',
  options: ['Tail', 'Root', 'Head', 'Leaf'], a: 2,
  explanation: 'The head points to the first node.'
},
{
  id: 420, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'A singly linked-list node usually stores data and:',
  options: ['A next pointer', 'Two parent pointers', 'An array index', 'A matrix'], a: 0,
  explanation: 'Each node stores data and a pointer to the next node.'
},
{
  id: 421, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure manages recursive function calls?',
  options: ['Queue', 'Stack', 'Graph', 'Heap'], a: 1,
  explanation: 'Function calls are managed through the call stack.'
},
{
  id: 422, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the worst-case time complexity of linear search?',
  options: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], a: 2,
  explanation: 'Linear search may examine every element.'
},
{
  id: 423, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Binary search normally requires data to be:',
  options: ['Sorted', 'Randomly shuffled', 'Duplicated', 'Deleted'], a: 0,
  explanation: 'Binary search relies on sorted data.'
},
{
  id: 424, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the time complexity of binary search?',
  options: ['O(n)', 'O(log n)', 'O(n²)', 'O(n log n)'], a: 1,
  explanation: 'Binary search halves the search interval each step.'
},
{
  id: 425, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which sorting algorithm repeatedly compares adjacent elements?',
  options: ['Merge Sort', 'Bubble Sort', 'Binary Search', 'DFS'], a: 1,
  explanation: 'Bubble Sort compares adjacent elements and swaps them when necessary.'
},
{
  id: 426, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the time complexity of Merge Sort?',
  options: ['O(n²)', 'O(log n)', 'O(n log n)', 'O(1)'], a: 2,
  explanation: 'Merge Sort runs in O(n log n) time.'
},
{
  id: 427, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which sorting algorithm partitions elements around a pivot?',
  options: ['Bubble Sort', 'Insertion Sort', 'Quick Sort', 'Selection Sort'], a: 2,
  explanation: 'Quick Sort partitions elements around a pivot.'
},
{
  id: 428, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure represents hierarchical relationships?',
  options: ['Queue', 'Tree', 'Stack', 'Array only'], a: 1,
  explanation: 'A tree represents parent-child relationships.'
},
{
  id: 429, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'A tree node with no children is called:',
  options: ['Root', 'Parent', 'Leaf', 'Edge'], a: 2,
  explanation: 'A leaf node has no children.'
},
{
  id: 430, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the topmost node of a tree called?',
  options: ['Leaf', 'Root', 'Sibling', 'Edge'], a: 1,
  explanation: 'The root is the topmost node.'
},
{
  id: 431, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'A binary-tree node can have at most how many children?',
  options: ['One', 'Two', 'Three', 'Four'], a: 1,
  explanation: 'A binary tree node has at most two children.'
},
{
  id: 432, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which traversal follows Left, Root, Right?',
  options: ['Preorder', 'Inorder', 'Postorder', 'Level order'], a: 1,
  explanation: 'Inorder visits the left subtree, root, then right subtree.'
},
{
  id: 433, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which traversal follows Root, Left, Right?',
  options: ['Preorder', 'Inorder', 'Postorder', 'Reverse order'], a: 0,
  explanation: 'Preorder visits the root before its subtrees.'
},
{
  id: 434, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which traversal follows Left, Right, Root?',
  options: ['Preorder', 'Inorder', 'Postorder', 'Level order'], a: 2,
  explanation: 'Postorder visits the root after its subtrees.'
},
{
  id: 435, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure is used in Breadth-First Search?',
  options: ['Stack', 'Queue', 'Heap only', 'Array only'], a: 1,
  explanation: 'BFS uses a queue to visit vertices level by level.'
},
{
  id: 436, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure is commonly used for iterative Depth-First Search?',
  options: ['Queue', 'Stack', 'Priority queue only', 'Matrix only'], a: 1,
  explanation: 'DFS can use a stack to explore deeper nodes first.'
},
{
  id: 437, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'A graph consists of:',
  options: ['Rows and columns only', 'Vertices and edges', 'Roots and leaves only', 'Keys and values only'], a: 1,
  explanation: 'Graphs consist of vertices connected by edges.'
},
{
  id: 438, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What does an adjacency matrix represent?',
  options: ['Graph connections in a matrix', 'Tree heights only', 'Stack operations', 'Sorted array values'], a: 0,
  explanation: 'An adjacency matrix records connections between vertices.'
},
{
  id: 439, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure is commonly used to implement a priority queue efficiently?',
  options: ['Binary heap', 'Plain text file', 'Stack only', 'Unsorted array in every case'], a: 0,
  explanation: 'A binary heap supports efficient priority-queue operations.'
},
{
  id: 440, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'A hash table primarily uses:',
  options: ['Hash function and keys', 'Tree traversal only', 'Queue rotation', 'Binary search alone'], a: 0,
  explanation: 'A hash function maps keys to table positions.'
},
{
  id: 441, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is a collision in hashing?',
  options: ['Two keys map to the same slot', 'A stack becomes empty', 'A tree has a root', 'An array becomes sorted'], a: 0,
  explanation: 'A collision occurs when keys map to the same table location.'
},
{
  id: 442, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which method can resolve hash-table collisions?',
  options: ['Chaining', 'Binary search only', 'Inorder traversal', 'Bubble sorting'], a: 0,
  explanation: 'Chaining stores colliding entries together at a table slot.'
},
{
  id: 443, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the time complexity of inserting at the head of a linked list?',
  options: ['O(1)', 'O(n)', 'O(n²)', 'O(log n) always'], a: 0,
  explanation: 'Head insertion needs a constant number of pointer updates.'
},
{
  id: 444, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which linked list has both next and previous pointers?',
  options: ['Singly linked list', 'Doubly linked list', 'Array', 'Stack'], a: 1,
  explanation: 'A doubly linked list links nodes in both directions.'
},
{
  id: 445, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'In a circular linked list, the last node typically points to:',
  options: ['NULL', 'The first node', 'An array index', 'The stack top'], a: 1,
  explanation: 'The last node links back to the first node.'
},
{
  id: 446, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is stack overflow in a fixed-size stack?',
  options: ['Popping an empty stack', 'Pushing onto a full stack', 'Searching an array', 'Traversing a tree'], a: 1,
  explanation: 'Overflow occurs when pushing onto a full stack.'
},
{
  id: 447, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is stack underflow?',
  options: ['Pushing onto a full stack', 'Popping an empty stack', 'Sorting a list', 'Adding a graph edge'], a: 1,
  explanation: 'Underflow occurs when removing from an empty stack.'
},
{
  id: 448, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which data structure helps check balanced parentheses?',
  options: ['Stack', 'Queue', 'Graph', 'Heap'], a: 0,
  explanation: 'A stack tracks opening parentheses and matches closing parentheses.'
},
{
  id: 449, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which notation places an operator between operands?',
  options: ['Prefix', 'Postfix', 'Infix', 'Level order'], a: 2,
  explanation: 'Infix notation writes expressions such as A + B.'
},
{
  id: 450, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which notation places an operator after operands?',
  options: ['Infix', 'Postfix', 'Prefix', 'Binary'], a: 1,
  explanation: 'Postfix notation places the operator after its operands.'
},
{
  id: 451, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which sorting algorithm inserts each new element into a sorted portion?',
  options: ['Insertion Sort', 'BFS', 'Quick Search', 'Heap traversal'], a: 0,
  explanation: 'Insertion Sort grows a sorted portion one element at a time.'
},
{
  id: 452, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which sorting algorithm repeatedly selects the smallest remaining element?',
  options: ['Merge Sort', 'Selection Sort', 'Quick Sort', 'DFS'], a: 1,
  explanation: 'Selection Sort selects the minimum from the unsorted portion.'
},
{
  id: 453, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which algorithm finds shortest paths from a source with non-negative edge weights?',
  options: ['Dijkstra algorithm', 'Bubble Sort', 'Binary Search', 'Inorder traversal'], a: 0,
  explanation: 'Dijkstra solves the single-source shortest-path problem for non-negative weights.'
},
{
  id: 454, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which algorithm finds a minimum spanning tree by considering edges in increasing weight order?',
  options: ['Kruskal algorithm', 'Binary Search', 'Merge Sort', 'Preorder traversal'], a: 0,
  explanation: 'Kruskal adds eligible edges in increasing weight order without creating cycles.'
},
{
  id: 455, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the purpose of a base case in recursion?',
  options: ['To stop recursive calls', 'To create an infinite loop', 'To sort every array', 'To increase memory forever'], a: 0,
  explanation: 'A base case provides the stopping condition for recursion.'
},
{
  id: 456, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is one advantage of a linked list over a fixed-size array?',
  options: ['It can grow by allocating nodes', 'Searching is always O(1)', 'It requires no memory', 'Nodes must be contiguous'], a: 0,
  explanation: 'A linked list can grow as new nodes are allocated.'
},
{
  id: 457, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What does traversal mean in a data structure?',
  options: ['Visiting elements systematically', 'Deleting every element', 'Creating a collision', 'Allocating memory only'], a: 0,
  explanation: 'Traversal systematically visits the elements or nodes.'
},
{
  id: 458, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which structure is suitable for processing items in arrival order?',
  options: ['Stack', 'Queue', 'Tree', 'Graph'], a: 1,
  explanation: 'A queue follows First In, First Out order.'
},
{
  id: 459, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'What is the worst-case search time in an unbalanced binary search tree?',
  options: ['O(1)', 'O(log n) always', 'O(n)', 'O(n log n) always'], a: 2,
  explanation: 'An unbalanced BST may become chain-like, resulting in O(n) search.'
},
{
  id: 460, topic: 'DSA', semester: 'Semester 3',  subject: 'Data Structures and Algorithms (DSA)',
  q: 'Which statement describes the standard Binary Search Tree property?',
  options: ['Every node has exactly two children', 'Left keys are smaller and right keys are larger than the node key', 'Every key is identical', 'The tree must be complete'], a: 1,
  explanation: 'A standard BST places smaller keys left and larger keys right.'
},
{
  id: 461, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the full form of OOP?',
  options: ['Object-Oriented Programming', 'Object Order Process', 'Only Object Program', 'Operational Object Process'],
  a: 0, explanation: 'OOP stands for Object-Oriented Programming.'
},
{
  id: 462, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which of the following is a fundamental concept of OOP?',
  options: ['Compilation', 'Encapsulation', 'Linking', 'Preprocessing'],
  a: 1, explanation: 'Encapsulation is one of the core concepts of OOP.'
},
{
  id: 463, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is a class in OOP?',
  options: ['A blueprint for creating objects', 'A loop', 'A variable only', 'A compiler'],
  a: 0, explanation: 'A class defines the properties and behaviours of objects.'
},
{
  id: 464, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is an object?',
  options: ['A function only', 'An instance of a class', 'A header file', 'A keyword for loops'],
  a: 1, explanation: 'An object is an instance of a class.'
},
{
  id: 465, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which concept combines data and methods into one unit?',
  options: ['Inheritance', 'Abstraction', 'Encapsulation', 'Recursion'],
  a: 2, explanation: 'Encapsulation groups data and the methods operating on it.'
},
{
  id: 466, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which OOP concept allows a class to acquire properties of another class?',
  options: ['Polymorphism', 'Inheritance', 'Abstraction', 'Compilation'],
  a: 1, explanation: 'Inheritance allows a derived class to reuse base-class features.'
},
{
  id: 467, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What does polymorphism mean?',
  options: ['One name, many forms', 'One class, one object only', 'Hiding every variable', 'Deleting objects'],
  a: 0, explanation: 'Polymorphism allows one interface or name to represent different behaviours.'
},
{
  id: 468, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is abstraction in OOP?',
  options: ['Showing all implementation details', 'Hiding unnecessary implementation details', 'Copying every object', 'Removing all methods'],
  a: 1, explanation: 'Abstraction exposes essential features while hiding unnecessary details.'
},
{
  id: 469, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which feature is used to initialize an object?',
  options: ['Destructor', 'Constructor', 'Operator', 'Namespace'],
  a: 1, explanation: 'A constructor initializes an object when it is created.'
},
{
  id: 470, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which special member function is called when an object is destroyed in C++?',
  options: ['Constructor', 'Destructor', 'Main function', 'Friend function'],
  a: 1, explanation: 'A destructor is invoked when an object is destroyed.'
},
{
  id: 471, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the usual name of a constructor in C++?',
  options: ['Any user-chosen name', 'The same name as the class', 'The word create', 'The word object'],
  a: 1, explanation: 'A C++ constructor has the same name as its class.'
},
{
  id: 472, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Can a constructor have a return type in C++?',
  options: ['Yes, always int', 'Yes, always void', 'No', 'Only float'],
  a: 2, explanation: 'C++ constructors do not declare a return type.'
},
{
  id: 473, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is function overloading?',
  options: ['Using the same function name with different parameter lists', 'Defining only one function', 'Deleting a function', 'Calling a function recursively only'],
  a: 0, explanation: 'Overloaded functions share a name but have different parameter lists.'
},
{
  id: 474, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is function overriding?',
  options: ['Changing a variable name', 'Redefining a base-class virtual function in a derived class', 'Creating two constructors only', 'Removing inheritance'],
  a: 1, explanation: 'Overriding provides a derived-class implementation of an inherited virtual function.'
},
{
  id: 475, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which is an example of compile-time polymorphism in C++?',
  options: ['Function overloading', 'Virtual dispatch only', 'Dynamic casting', 'Runtime type identification'],
  a: 0, explanation: 'Function overloading is resolved at compile time.'
},
{
  id: 476, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which feature commonly enables runtime polymorphism in C++?',
  options: ['Macros', 'Virtual functions', 'Preprocessor directives', 'Global constants'],
  a: 1, explanation: 'Virtual functions support runtime dispatch through base-class interfaces.'
},
{
  id: 477, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which access specifier allows access only within the class and its friends in C++?',
  options: ['public', 'protected', 'private', 'global'],
  a: 2, explanation: 'Private members are accessible to the class itself and its friends.'
},
{
  id: 478, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which access specifier allows access from anywhere the object is accessible?',
  options: ['private', 'public', 'protected', 'internal'],
  a: 1, explanation: 'Public members can be accessed through accessible objects and interfaces.'
},
{
  id: 479, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which access specifier allows access in a class and its derived classes?',
  options: ['private', 'protected', 'public only', 'static'],
  a: 1, explanation: 'Protected members are accessible within the class and derived classes, subject to language rules.'
},
{
  id: 480, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the default member access in a C++ class?',
  options: ['public', 'protected', 'private', 'static'],
  a: 2, explanation: 'Members of a C++ class are private by default.'
},
{
  id: 481, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the default member access in a C++ struct?',
  options: ['private', 'protected', 'public', 'friend'],
  a: 2, explanation: 'Members of a C++ struct are public by default.'
},
{
  id: 482, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which keyword declares a class in C++?',
  options: ['object', 'class', 'define', 'recordclass'],
  a: 1, explanation: 'The class keyword declares a class in C++.'
},
{
  id: 483, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which operator is commonly used to access a member through an object?',
  options: ['.', '#', '?', '%'],
  a: 0, explanation: 'The dot operator accesses members through an object.'
},
{
  id: 484, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which operator accesses a member through a pointer to an object in C++?',
  options: ['.', '->', '::', '&'],
  a: 1, explanation: 'The arrow operator accesses members through a pointer.'
},
{
  id: 485, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What does the this pointer refer to in a non-static C++ member function?',
  options: ['The base class only', 'The current object', 'The next object', 'The compiler'],
  a: 1, explanation: 'The this pointer refers to the object on which the member function is invoked.'
},
{
  id: 486, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which keyword declares a class-level member shared by all objects?',
  options: ['static', 'virtual', 'friend', 'mutable only'],
  a: 0, explanation: 'A static data member belongs to the class rather than each individual object.'
},
{
  id: 487, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is a friend function in C++?',
  options: ['A member inherited automatically', 'A non-member function granted access to private and protected members', 'A constructor with no parameters', 'A function that must be virtual'],
  a: 1, explanation: 'A friend function receives special access but is not a member function.'
},
{
  id: 488, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which relationship represents an “is-a” relationship?',
  options: ['Inheritance', 'Composition', 'Association only', 'File handling'],
  a: 0, explanation: 'Inheritance commonly models an is-a relationship.'
},
{
  id: 489, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which relationship is commonly described as “has-a”?',
  options: ['Inheritance', 'Composition', 'Overloading', 'Recursion'],
  a: 1, explanation: 'Composition models an object containing or owning another object.'
},
{
  id: 490, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is multiple inheritance?',
  options: ['One class deriving from more than one base class', 'One object with multiple variables', 'A function called multiple times', 'A class with no methods'],
  a: 0, explanation: 'Multiple inheritance allows a class to inherit from multiple base classes.'
},
{
  id: 491, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is a virtual base class used for in C++?',
  options: ['To prevent all inheritance', 'To help avoid duplicate base-class subobjects in a diamond hierarchy', 'To make every function static', 'To create a constructor automatically'],
  a: 1, explanation: 'Virtual inheritance can ensure a shared base subobject in a diamond hierarchy.'
},
{
  id: 492, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which statement about an abstract class in C++ is correct?',
  options: ['It cannot have any data members', 'It cannot be instantiated directly', 'It cannot have constructors', 'It must contain only static functions'],
  a: 1, explanation: 'A class with at least one pure virtual function is abstract and cannot be instantiated directly.'
},
{
  id: 493, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'How is a pure virtual function declared in C++?',
  options: ['Using = 0 in its declaration', 'Using #pure', 'Using the static keyword only', 'Using return null'],
  a: 0, explanation: 'A pure virtual function declaration uses = 0.'
},
{
  id: 494, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is a copy constructor commonly used for?',
  options: ['Destroying an object', 'Initializing an object from another object of the same class', 'Calling the main function', 'Allocating a namespace'],
  a: 1, explanation: 'A copy constructor initializes an object using another object of the same class.'
},
{
  id: 495, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is a default constructor?',
  options: ['A constructor callable without supplying arguments', 'A destructor with arguments', 'A function returning an object only', 'A private variable'],
  a: 0, explanation: 'A default constructor can be called without arguments.'
},
{
  id: 496, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is operator overloading?',
  options: ['Creating a new operator symbol', 'Defining how an existing operator works for a user-defined type', 'Removing operators from C++', 'Changing operator precedence globally'],
  a: 1, explanation: 'Operator overloading defines operator behaviour for user-defined types.'
},
{
  id: 497, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which operator cannot be overloaded in C++?',
  options: ['+', '==', '::', '*'],
  a: 2, explanation: 'The scope resolution operator :: cannot be overloaded.'
},
{
  id: 498, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which keyword can prevent a virtual function from being overridden further in C++?',
  options: ['final', 'friend', 'extern', 'register'],
  a: 0, explanation: 'The final specifier prevents further overriding of a virtual function.'
},
{
  id: 499, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Why should a polymorphic C++ base class often have a virtual destructor?',
  options: ['To overload constructors', 'To ensure proper derived-object destruction through a base pointer', 'To prevent object creation', 'To make members public'],
  a: 1, explanation: 'A virtual destructor enables correct destruction when deleting a derived object through a base pointer.'
},
{
  id: 500, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is message passing in OOP?',
  options: ['Objects communicating by invoking methods or sending messages', 'Passing compiler errors to the user', 'Copying source files', 'Transferring a class to a header'],
  a: 0, explanation: 'Objects interact by invoking operations on one another.'
},
{
  id: 501, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which principle helps restrict direct access to an object’s internal state?',
  options: ['Encapsulation', 'Multiple inheritance', 'Recursion', 'Tokenization'],
  a: 0, explanation: 'Encapsulation controls access to internal data through a defined interface.'
},
{
  id: 502, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is dynamic binding?',
  options: ['Selecting an overridden method at runtime', 'Binding every variable at preprocessing time', 'Linking only header files', 'Creating objects without classes'],
  a: 0, explanation: 'Dynamic binding selects the appropriate method implementation at runtime.'
},
{
  id: 503, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which statement about a C++ member function declared const is correct?',
  options: ['It cannot be called on any object', 'It promises not to modify ordinary non-mutable member state', 'It must be static', 'It must return an integer'],
  a: 1, explanation: 'A const member function cannot modify ordinary non-mutable data members.'
},
{
  id: 504, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the main purpose of a namespace in C++?',
  options: ['To group names and reduce naming conflicts', 'To allocate every object dynamically', 'To create inheritance automatically', 'To replace all classes'],
  a: 0, explanation: 'Namespaces organize identifiers and help avoid naming conflicts.'
},
{
  id: 505, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which keyword is used to allocate an object dynamically in C++?',
  options: ['create', 'mallocclass', 'new', 'object'],
  a: 2, explanation: 'The new expression dynamically allocates an object in C++.'
},
{
  id: 506, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which operator is commonly paired with new to release dynamically allocated memory in C++?',
  options: ['remove', 'delete', 'freeclass', 'clear'],
  a: 1, explanation: 'The delete expression releases memory allocated with a matching single-object new expression.'
},
{
  id: 507, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the role of an interface in object-oriented design?',
  options: ['To specify operations available to users of a component', 'To store only private data', 'To replace all implementations with loops', 'To prevent communication between objects'],
  a: 0, explanation: 'An interface defines the operations a component exposes.'
},
{
  id: 508, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which is a common benefit of inheritance?',
  options: ['Code reuse and specialization', 'Guaranteed absence of bugs', 'Automatic database creation', 'Elimination of all constructors'],
  a: 0, explanation: 'Inheritance supports reuse and allows derived classes to specialize behaviour.'
},
{
  id: 509, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'What is the difference between a class and an object?',
  options: ['They are always identical', 'A class is a blueprint; an object is an instance', 'An object defines all classes', 'A class can never have methods'],
  a: 1, explanation: 'A class defines a type; an object is a particular instance of that type.'
},
{
  id: 510, topic: 'OOPs', semester: 'Semester 3', subject: 'Object Oriented Programming (OOPs)',
  q: 'Which group contains the four commonly taught pillars of OOP?',
  options: ['Loops, arrays, pointers, files', 'Encapsulation, abstraction, inheritance, polymorphism', 'Classes, compilers, linkers, loaders', 'Variables, constants, operators, comments'],
  a: 1, explanation: 'The four commonly taught OOP pillars are encapsulation, abstraction, inheritance, and polymorphism.'
},

{
  id: 511, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is a proposition in logic?',
  options: ['A declarative statement with a truth value', 'A question', 'A command', 'An expression without meaning'],
  a: 0, explanation: 'A proposition is a declarative statement that is either true or false.'
},
{
  id: 512, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the negation of proposition p?',
  options: ['p AND q', 'NOT p', 'p OR q', 'p implies q'],
  a: 1, explanation: 'Negation reverses the truth value of a proposition.'
},
{
  id: 513, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'When is p AND q true?',
  options: ['When both are true', 'When either is true', 'When both are false', 'When p is false'],
  a: 0, explanation: 'Conjunction is true only when both propositions are true.'
},
{
  id: 514, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'When is p OR q false?',
  options: ['Both true', 'p true and q false', 'Both false', 'q true'],
  a: 2, explanation: 'Inclusive disjunction is false only when both propositions are false.'
},
{
  id: 515, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is p AND NOT p?',
  options: ['Always true', 'Always false', 'Sometimes true', 'Undefined'],
  a: 1, explanation: 'A proposition and its negation cannot both be true.'
},
{
  id: 516, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'Which symbol represents logical implication?',
  options: ['∧', '∨', '→', '¬'],
  a: 2, explanation: 'The symbol → means implies, or if p then q.'
},
{
  id: 517, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A tautology is a proposition that is:',
  options: ['Always true', 'Always false', 'Sometimes undefined', 'Always contradictory'],
  a: 0, explanation: 'A tautology is true for every possible truth-value assignment.'
},
{
  id: 518, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A contradiction is a proposition that is:',
  options: ['Always true', 'Always false', 'True in all cases', 'Neither a statement nor a formula'],
  a: 1, explanation: 'A contradiction is false for every possible truth-value assignment.'
},
{
  id: 519, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A set has 3 elements. How many subsets does it have?',
  options: ['3', '6', '8', '9'],
  a: 2, explanation: 'A set with n elements has 2^n subsets; here 2^3 = 8.'
},
{
  id: 520, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'How many elements are in the power set of a 4-element set?',
  options: ['4', '8', '12', '16'],
  a: 3, explanation: 'The power set has 2^n elements, so 2^4 = 16.'
},
{
  id: 521, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the union of two sets A and B?',
  options: ['Elements only in A', 'Elements in A or B or both', 'Elements common to both only', 'Elements outside both sets'],
  a: 1, explanation: 'The union contains every element belonging to at least one of the sets.'
},
{
  id: 522, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the intersection of A and B?',
  options: ['Elements in either set', 'Elements outside A', 'Elements common to both sets', 'All possible elements'],
  a: 2, explanation: 'The intersection contains elements that belong to both sets.'
},
{
  id: 523, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'If A = {1,2,3} and B = {3,4}, what is A ∪ B?',
  options: ['{3}', '{1,2,3,4}', '{1,2}', '{4}'],
  a: 1, explanation: 'The union combines elements without repeating duplicates.'
},
{
  id: 524, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'If A = {1,2,3} and B = {3,4}, what is A ∩ B?',
  options: ['{1,2}', '{1,2,3,4}', '{3}', '{4}'],
  a: 2, explanation: 'Only 3 belongs to both A and B.'
},
{
  id: 525, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'If A has 5 elements and B has 4 elements, and they are disjoint, how many elements are in A ∪ B?',
  options: ['1', '9', '20', '5'],
  a: 1, explanation: 'Disjoint sets share no elements, so the union has 5 + 4 = 9 elements.'
},
{
  id: 526, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the complement of A relative to universal set U?',
  options: ['Elements in U but not in A', 'Elements only in A', 'Elements in A and U only', 'Always the empty set'],
  a: 0, explanation: 'The complement contains all elements of U that do not belong to A.'
},
{
  id: 527, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A relation from A to B is a subset of which set?',
  options: ['A ∪ B', 'A × B', 'A ∩ B', 'B × B only'],
  a: 1, explanation: 'A relation from A to B consists of ordered pairs in the Cartesian product A × B.'
},
{
  id: 528, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the Cartesian product A × B?',
  options: ['A set of ordered pairs (a,b)', 'Only the common elements', 'The union of A and B', 'The number of subsets of A'],
  a: 0, explanation: 'A × B contains all ordered pairs with first element from A and second from B.'
},
{
  id: 529, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'If |A| = 3 and |B| = 2, what is |A × B|?',
  options: ['5', '6', '9', '2'],
  a: 1, explanation: 'The Cartesian product has |A| × |B| ordered pairs: 3 × 2 = 6.'
},
{
  id: 530, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A relation R on A is reflexive if:',
  options: ['Every pair is reversed', 'Every element relates to itself', 'No element relates to itself', 'It has no ordered pairs'],
  a: 1, explanation: 'Reflexivity requires (a,a) to belong to R for every a in A.'
},
{
  id: 531, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A relation R is symmetric if:',
  options: ['aRb implies bRa', 'aRb implies aRa only', 'No pair can be reversed', 'Every pair has different elements'],
  a: 0, explanation: 'Symmetry means reversing any related pair also gives a pair in the relation.'
},
{
  id: 532, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A relation R is antisymmetric if:',
  options: ['aRb always implies bRa', 'aRb and bRa imply a = b', 'Every element relates to itself', 'It contains every possible pair'],
  a: 1, explanation: 'Antisymmetry requires equality whenever both directions hold.'
},
{
  id: 533, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A relation is transitive if:',
  options: ['aRb and bRc imply aRc', 'aRb implies bRa', 'aRa is always false', 'Every pair is equal'],
  a: 0, explanation: 'Transitivity connects a to c whenever a relates to b and b relates to c.'
},
{
  id: 534, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'An equivalence relation must be:',
  options: ['Reflexive, symmetric, transitive', 'Reflexive only', 'Symmetric and antisymmetric only', 'Transitive only'],
  a: 0, explanation: 'An equivalence relation satisfies reflexivity, symmetry, and transitivity.'
},
{
  id: 535, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A function f: A → B assigns:',
  options: ['Every element of A exactly one image in B', 'Every element of B exactly one preimage', 'Two images to every element of A', 'No image to some elements of A'],
  a: 0, explanation: 'A function assigns each domain element exactly one codomain element.'
},
{
  id: 536, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A function is injective if:',
  options: ['Every codomain element is used', 'Different inputs have different outputs', 'All inputs have the same output', 'It has no domain'],
  a: 1, explanation: 'An injective function maps distinct domain elements to distinct outputs.'
},
{
  id: 537, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A function is surjective if:',
  options: ['Every codomain element is an image of some input', 'All inputs map to different outputs only', 'The domain is empty', 'It maps only one input'],
  a: 0, explanation: 'Surjectivity means every element of the codomain is reached.'
},
{
  id: 538, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A function that is both injective and surjective is called:',
  options: ['Constant', 'Bijective', 'Partial', 'Undefined'],
  a: 1, explanation: 'A bijection is both one-to-one and onto.'
},
{
  id: 539, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'How many functions are there from a 2-element set to a 3-element set?',
  options: ['6', '8', '9', '5'],
  a: 2, explanation: 'There are 3 choices for each of 2 inputs, giving 3^2 = 9 functions.'
},
{
  id: 540, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the factorial of 5?',
  options: ['25', '60', '120', '24'],
  a: 2, explanation: '5! = 5 × 4 × 3 × 2 × 1 = 120.'
},
{
  id: 541, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'How many ways can 3 distinct objects be arranged?',
  options: ['3', '6', '9', '12'],
  a: 1, explanation: 'The number of permutations is 3! = 6.'
},
{
  id: 542, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'Which formula gives the number of permutations of n distinct objects taken r at a time?',
  options: ['n! / (n-r)!', 'n! / r!', 'n + r', 'n × r'],
  a: 0, explanation: 'Permutations count ordered selections: P(n,r) = n!/(n-r)!.'
},
{
  id: 543, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'Which formula gives combinations of n distinct objects taken r at a time?',
  options: ['n! / (n-r)!', 'n! / (r!(n-r)!)', 'n × r!', 'n + r!'],
  a: 1, explanation: 'Combinations count unordered selections using n!/(r!(n-r)!).'
},
{
  id: 544, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'How many ways can 2 students be chosen from 5 students?',
  options: ['5', '10', '20', '25'],
  a: 1, explanation: 'The number is C(5,2) = 5!/(2!3!) = 10.'
},
{
  id: 545, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What does the pigeonhole principle state in its basic form?',
  options: ['If more objects than boxes are distributed, some box contains at least two objects', 'Every box must be empty', 'Each object gets its own box regardless of numbers', 'Objects cannot be counted'],
  a: 0, explanation: 'With more objects than boxes, at least one box must contain two or more objects.'
},
{
  id: 546, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is a graph in discrete mathematics?',
  options: ['A set of vertices and edges', 'A list of equations only', 'A type of matrix only', 'A collection of strings only'],
  a: 0, explanation: 'A graph consists of vertices (nodes) connected by edges.'
},
{
  id: 547, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'In an undirected graph, the degree of a vertex is:',
  options: ['The number of vertices in the graph', 'The number of edges incident to it', 'The number of connected components', 'Always zero'],
  a: 1, explanation: 'The degree counts edges incident to the vertex; a loop contributes two.'
},
{
  id: 548, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What does the handshaking lemma state for a finite undirected graph?',
  options: ['The sum of vertex degrees equals twice the number of edges', 'Every vertex has degree one', 'Every graph has a cycle', 'The sum of degrees equals the number of edges'],
  a: 0, explanation: 'Each edge contributes two to the total degree, so the sum is 2|E|.'
},
{
  id: 549, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A simple graph has 4 vertices. What is the maximum number of edges?',
  options: ['4', '5', '6', '8'],
  a: 2, explanation: 'A simple graph has at most n(n-1)/2 edges: 4×3/2 = 6.'
},
{
  id: 550, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A path in a graph is:',
  options: ['A sequence of vertices connected by edges', 'A set with no vertices', 'Always a complete graph', 'A single matrix entry'],
  a: 0, explanation: 'A path follows a sequence of adjacent vertices using edges.'
},
{
  id: 551, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A connected graph is one in which:',
  options: ['Every pair of vertices has a path between them', 'There are no edges', 'Every vertex has degree zero', 'There is exactly one vertex'],
  a: 0, explanation: 'Connectivity means a path exists between every pair of vertices.'
},
{
  id: 552, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'A tree in graph theory is a graph that is:',
  options: ['Connected and acyclic', 'Disconnected and cyclic', 'Always complete', 'Always directed'],
  a: 0, explanation: 'A tree is a connected graph containing no cycles.'
},
{
  id: 553, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'How many edges does a tree with 7 vertices have?',
  options: ['5', '6', '7', '8'],
  a: 1, explanation: 'Every tree with n vertices has n-1 edges; 7-1 = 6.'
},
{
  id: 554, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is a complete graph?',
  options: ['A graph with an edge between every pair of distinct vertices', 'A graph with no edges', 'A graph with exactly one vertex', 'A graph with no paths'],
  a: 0, explanation: 'In a complete simple graph, every pair of distinct vertices is adjacent.'
},
{
  id: 555, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'Which traversal visits the root, then the left subtree, then the right subtree?',
  options: ['Inorder', 'Preorder', 'Postorder', 'Level order'],
  a: 1, explanation: 'Preorder traversal follows root-left-right order.'
},
{
  id: 556, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'Which traversal visits the left subtree, then the root, then the right subtree?',
  options: ['Preorder', 'Postorder', 'Inorder', 'Level order'],
  a: 2, explanation: 'Inorder traversal follows left-root-right order.'
},
{
  id: 557, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'What is the base case used in mathematical induction?',
  options: ['Prove the statement for the initial value', 'Assume every statement is false', 'Skip the first value', 'Prove only the last value'],
  a: 0, explanation: 'Induction starts by proving the base case, often n = 0 or n = 1.'
},
{
  id: 558, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'In the inductive step, what is usually assumed?',
  options: ['The statement is true for k', 'The statement is false for every n', 'The statement is true only for zero', 'Nothing can be assumed'],
  a: 0, explanation: 'The induction hypothesis assumes the statement for k and proves it for k+1.'
},
{
  id: 559, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'Which logical law states that NOT (p AND q) equals (NOT p) OR (NOT q)?',
  options: ['Identity law', 'De Morgan’s law', 'Commutative law only', 'Double negation law'],
  a: 1, explanation: 'De Morgan’s law converts the negation of a conjunction into a disjunction of negations.'
},
{
  id: 560, topic: 'Discrete Mathematics', semester: 'Semester 3', subject: 'Discrete Mathematics',
  q: 'If a connected graph has n vertices and n-1 edges, and is a finite undirected simple graph, which is true?',
  options: ['It is a tree', 'It must be complete', 'It must contain a cycle', 'It must be disconnected'],
  a: 0, explanation: 'A connected graph with n vertices and n-1 edges is a tree.'
},

{
  id: 561, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the main function of the CPU?',
  options: ['Store files permanently', 'Execute instructions and process data', 'Display images only', 'Connect to the internet only'],
  a: 1, explanation: 'The CPU executes program instructions and performs processing and control operations.'
},
{
  id: 562, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which are the main components of a CPU?',
  options: ['ALU, control unit and registers', 'Keyboard, mouse and monitor', 'RAM, printer and scanner', 'Hard disk and speakers only'],
  a: 0, explanation: 'The ALU, control unit and registers are fundamental CPU components.'
},
{
  id: 563, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the function of the Arithmetic Logic Unit (ALU)?',
  options: ['Manage network connections', 'Store files permanently', 'Perform arithmetic and logical operations', 'Control the monitor brightness'],
  a: 2, explanation: 'The ALU performs arithmetic calculations and logical comparisons.'
},
{
  id: 564, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the role of the Control Unit?',
  options: ['Perform all disk storage operations', 'Direct and coordinate instruction execution', 'Display program output', 'Generate electricity for the computer'],
  a: 1, explanation: 'The control unit coordinates CPU activities and directs the execution of instructions.'
},
{
  id: 565, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which register holds the address of the next instruction to be fetched?',
  options: ['Accumulator', 'Instruction Register', 'Memory Data Register', 'Program Counter'],
  a: 3, explanation: 'The Program Counter (PC) normally holds the address of the next instruction to fetch.'
},
{
  id: 566, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which register holds the instruction currently being decoded or executed?',
  options: ['Instruction Register', 'Program Counter', 'Stack Pointer only', 'Memory Address Register'],
  a: 0, explanation: 'The Instruction Register (IR) holds the current instruction.'
},
{
  id: 567, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does the Memory Address Register (MAR) hold?',
  options: ['The result of every calculation', 'The current instruction itself only', 'The address of a memory location being accessed', 'The operating system name'],
  a: 2, explanation: 'MAR stores the memory address involved in a read or write operation.'
},
{
  id: 568, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does the Memory Data Register (MDR) hold?',
  options: ['Only memory addresses', 'Data being transferred to or from memory', 'The next program name', 'The clock frequency'],
  a: 1, explanation: 'MDR holds data read from memory or data that will be written to memory.'
},
{
  id: 569, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which memory is generally the fastest among these?',
  options: ['Hard disk', 'Optical disc', 'Main memory (RAM)', 'CPU register'],
  a: 3, explanation: 'CPU registers are directly available inside the processor and are generally faster than cache, RAM and secondary storage.'
},
{
  id: 570, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is cache memory primarily used for?',
  options: ['To reduce average memory access time', 'To replace every CPU register', 'To store printed documents', 'To provide a permanent backup of all files'],
  a: 0, explanation: 'Cache stores frequently or recently used data and instructions to reduce average access time.'
},
{
  id: 571, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which of the following is volatile memory?',
  options: ['ROM', 'RAM', 'DVD-ROM', 'Flash drive when unpowered'],
  a: 1, explanation: 'RAM normally loses its stored contents when power is removed.'
},
{
  id: 572, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which type of memory normally retains its contents without power?',
  options: ['CPU registers', 'Cache SRAM', 'ROM', 'DRAM'],
  a: 2, explanation: 'ROM is non-volatile memory and retains its contents without power.'
},
{
  id: 573, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the basic unit of digital information?',
  options: ['Bit', 'Byte', 'Word', 'Kilobyte'],
  a: 0, explanation: 'A bit is a binary digit that can represent 0 or 1.'
},
{
  id: 574, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'How many bits are in one byte?',
  options: ['2', '4', '16', '8'],
  a: 3, explanation: 'One byte consists of 8 bits.'
},
{
  id: 575, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the binary representation of decimal 5?',
  options: ['100', '101', '110', '111'],
  a: 1, explanation: 'Decimal 5 equals 4 + 1, so its binary representation is 101.'
},
{
  id: 576, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the decimal value of binary 1101?',
  options: ['11', '12', '13', '14'],
  a: 2, explanation: '1101₂ = 8 + 4 + 0 + 1 = 13.'
},
{
  id: 577, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the hexadecimal representation of decimal 15?',
  options: ['F', 'E', '10', 'A'],
  a: 0, explanation: 'Hexadecimal uses A through F for decimal values 10 through 15, so 15 is F.'
},
{
  id: 578, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the 1s complement of the 8-bit binary number 00001111?',
  options: ['00001111', '11110000', '11111111', '00000000'],
  a: 1, explanation: 'The 1s complement is obtained by inverting every bit.'
},
{
  id: 579, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'How is the 2s complement of a binary number obtained?',
  options: ['Add 1 to the original number without changing bits', 'Remove all zeroes', 'Shift every bit left twice', 'Invert all bits and add 1'],
  a: 3, explanation: 'The 2s complement is formed by taking the 1s complement and adding 1.'
},
{
  id: 580, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which logic gate produces 1 only when both inputs are 1?',
  options: ['OR', 'XOR', 'AND', 'NOR'],
  a: 2, explanation: 'An AND gate produces 1 only when all its inputs are 1.'
},
{
  id: 581, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which gate produces the complement of an OR operation?',
  options: ['NOR', 'AND', 'XOR', 'NAND'],
  a: 0, explanation: 'A NOR gate outputs NOT (A OR B).'
},
{
  id: 582, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which gates are called universal gates?',
  options: ['AND and OR', 'XOR and XNOR', 'NOT and XOR', 'NAND and NOR'],
  a: 3, explanation: 'NAND and NOR are universal because either gate alone can implement any Boolean function.'
},
{
  id: 583, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the output of an XOR gate when its two inputs are equal?',
  options: ['1', '0', 'Undefined', 'Always high impedance'],
  a: 1, explanation: 'XOR outputs 1 when its inputs differ and 0 when they are equal.'
},
{
  id: 584, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which Boolean identity is correct?',
  options: ['A + 0 = 0', 'A · 1 = 0', 'A + 0 = A', 'A · 0 = A'],
  a: 2, explanation: 'In Boolean algebra, OR with 0 leaves A unchanged.'
},
{
  id: 585, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which circuit adds two binary bits and produces sum and carry?',
  options: ['Half adder', 'Decoder', 'Multiplexer', 'Shift register'],
  a: 0, explanation: 'A half adder adds two single-bit inputs and produces a sum and carry output.'
},
{
  id: 586, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'How many input bits does a full adder process?',
  options: ['One', 'Two', 'Four', 'Three'],
  a: 3, explanation: 'A full adder processes two operand bits and an incoming carry bit.'
},
{
  id: 587, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the main function of a multiplexer?',
  options: ['Store a bit permanently', 'Select one of several inputs for a single output', 'Convert analog signals into sound', 'Increase the number of CPU registers automatically'],
  a: 1, explanation: 'A multiplexer selects one input from several inputs using select lines.'
},
{
  id: 588, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does a decoder do?',
  options: ['Adds two binary numbers', 'Stores the current instruction', 'Activates an output corresponding to an input code', 'Transfers data only in serial form'],
  a: 2, explanation: 'A decoder maps an input code to a corresponding output line or output pattern.'
},
{
  id: 589, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which circuit stores one bit of information?',
  options: ['Flip-flop', 'Multiplexer', 'Adder', 'Decoder'],
  a: 0, explanation: 'A flip-flop is a bistable circuit capable of storing one bit.'
},
{
  id: 590, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which flip-flop is commonly used as a basic data-storage element?',
  options: ['JK only', 'T only', 'SR only', 'D flip-flop'],
  a: 3, explanation: 'A D flip-flop captures the value at its data input according to its triggering clock event.'
},
{
  id: 591, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is a register in digital computer organization?',
  options: ['A type of printer', 'A group of flip-flops used to store binary data', 'A network protocol', 'A secondary-storage disk'],
  a: 1, explanation: 'A register combines storage elements to hold a multi-bit value.'
},
{
  id: 592, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the main function of a shift register?',
  options: ['Perform floating-point division only', 'Decode an instruction opcode', 'Shift stored bits left or right', 'Refresh a hard disk'],
  a: 2, explanation: 'A shift register moves stored bits between positions on appropriate control or clock events.'
},
{
  id: 593, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which bus typically carries memory addresses from the processor?',
  options: ['Address bus', 'Data bus', 'Audio bus', 'Power bus'],
  a: 0, explanation: 'The address bus carries the address identifying the memory or I/O location to access.'
},
{
  id: 594, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which bus carries data between computer components?',
  options: ['Address bus only', 'Control bus only', 'Clock bus only', 'Data bus'],
  a: 3, explanation: 'The data bus transfers data between the CPU, memory and other components.'
},
{
  id: 595, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the purpose of control signals in a computer system?',
  options: ['Store every file permanently', 'Coordinate and direct hardware operations', 'Replace all data buses', 'Convert every number to decimal'],
  a: 1, explanation: 'Control signals coordinate operations such as memory reads, writes and device transfers.'
},
{
  id: 596, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the basic instruction cycle?',
  options: ['Compile, print, delete', 'Store, format, restart', 'Fetch, decode, execute', 'Input, display, shutdown only'],
  a: 2, explanation: 'The basic instruction cycle fetches an instruction, decodes it and executes it.'
},
{
  id: 597, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does an opcode specify in a machine instruction?',
  options: ['The operation to perform', 'The monitor resolution', 'The computer manufacturer only', 'The file extension'],
  a: 0, explanation: 'The opcode identifies the operation, such as addition, loading or branching.'
},
{
  id: 598, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does an operand specify in an instruction?',
  options: ['Only the CPU temperature', 'Only the instruction length', 'The operating system version', 'The data or location on which an operation acts'],
  a: 3, explanation: 'Operands identify data, registers, addresses or other values used by an instruction.'
},
{
  id: 599, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is an addressing mode?',
  options: ['A type of computer case', 'The method used to specify an instruction operand', 'A memory manufacturing process', 'A method of printing documents'],
  a: 1, explanation: 'Addressing modes define how an instruction identifies or obtains its operand.'
},
{
  id: 600, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'In immediate addressing, where is the operand value usually found?',
  options: ['Only on a remote server', 'Always in secondary storage', 'Within the instruction itself', 'Only in the program counter'],
  a: 2, explanation: 'Immediate addressing encodes the operand value directly in the instruction.'
},
{
  id: 601, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the purpose of an interrupt?',
  options: ['To request CPU attention for an event', 'To permanently disable all memory', 'To erase the instruction set', 'To convert RAM into ROM'],
  a: 0, explanation: 'An interrupt signals an event that may require the processor to run an interrupt handler.'
},
{
  id: 602, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does DMA stand for?',
  options: ['Direct Memory Arithmetic', 'Dynamic Machine Allocation', 'Digital Memory Algorithm', 'Direct Memory Access'],
  a: 3, explanation: 'Direct Memory Access allows a device or controller to transfer data to or from memory with limited CPU involvement.'
},
{
  id: 603, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is pipelining in a processor?',
  options: ['Executing only one instruction during the entire program', 'Overlapping stages of multiple instructions', 'Removing all CPU registers', 'Storing every instruction on a hard disk'],
  a: 1, explanation: 'Pipelining overlaps instruction stages to improve instruction throughput.'
},
{
  id: 604, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is a pipeline hazard?',
  options: ['A damaged keyboard', 'A file permission error', 'A condition that prevents the next instruction from executing in its intended cycle', 'A type of optical disc'],
  a: 2, explanation: 'Pipeline hazards, such as data, control and structural hazards, can delay normal pipeline execution.'
},
{
  id: 605, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which architecture commonly uses separate instruction and data memories?',
  options: ['Harvard architecture', 'Von Neumann architecture only', 'A basic single-bus design in all cases', 'A virtual machine monitor'],
  a: 0, explanation: 'Harvard architecture uses separate instruction and data storage paths or memories.'
},
{
  id: 606, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is a key characteristic of Von Neumann architecture?',
  options: ['It has no CPU', 'It cannot execute programs', 'It uses only optical storage', 'Instructions and data share a common memory system'],
  a: 3, explanation: 'In the classic Von Neumann model, instructions and data share the same memory and communication path.'
},
{
  id: 607, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What does clock frequency indicate?',
  options: ['The number of files on a disk', 'The number of clock cycles per second', 'The amount of RAM in bytes', 'The number of CPU cores only'],
  a: 1, explanation: 'Clock frequency is measured in hertz and indicates cycles per second.'
},
{
  id: 608, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'Which unit is commonly used to measure clock frequency?',
  options: ['Byte', 'Volt only', 'Hertz', 'Pixel'],
  a: 2, explanation: 'Hertz (Hz) measures cycles per second; processors are often described in gigahertz.'
},
{

  id: 609,
  topic: 'COA',
  semester: 'Semester 3',
  subject: 'Computer Organization and Architecture',
  q: 'What is the main purpose of an instruction set architecture (ISA)?',
  options: [
    'Define the machine instructions and programmer-visible processor behavior',
    'Specify the color of the computer case',
    'Describe only the keyboard layout',
    "Determine the user's internet password"
  ],
  a: 0,
  explanation: 'An ISA defines the instructions, registers, data types and other programmer-visible features of a processor.'
},
{
  id: 610, topic: 'COA', semester: 'Semester 3', subject: 'Computer Organization and Architecture',
  q: 'What is the main difference between RISC and CISC design philosophies?',
  options: ['RISC processors cannot use registers', 'CISC processors have no instructions', 'RISC means Random Instruction Storage Computer', 'RISC generally favors simpler instructions, while CISC includes more complex instructions'],
  a: 3, explanation: 'RISC generally emphasizes simpler instructions, while CISC traditionally supports a richer set of more complex instructions; modern processors may combine ideas from both.'
},

{
  id: 1001, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is an operating system?',
  options: ['A type of compiler', 'System software that manages hardware and software resources', 'A programming language', 'A web browser'],
  a: 1,
  explanation: 'An operating system manages computer hardware, software resources and provides services to programs.'
},
{
  id: 1002, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which of the following is an example of an operating system?',
  options: ['Microsoft Word', 'Google Chrome', 'Linux', 'MySQL'],
  a: 2,
  explanation: 'Linux is an operating system.'
},
{
  id: 1003, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the primary function of the kernel?',
  options: ['Manage core system resources', 'Create presentations', 'Edit images', 'Browse websites'],
  a: 0,
  explanation: 'The kernel manages core resources such as CPU, memory and devices.'
},
{
  id: 1004, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'A program in execution is called a:',
  options: ['File', 'Process', 'Compiler', 'Folder'],
  a: 1,
  explanation: 'A process is an instance of a program currently being executed.'
},
{
  id: 1005, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which data structure stores information about a process?',
  options: ['Page table only', 'File allocation table', 'Process Control Block (PCB)', 'Syntax tree'],
  a: 2,
  explanation: 'The PCB stores process information such as state, process ID and CPU registers.'
},
{
  id: 1006, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which is a common process state?',
  options: ['Compiling', 'Printing', 'Scanning', 'Ready'],
  a: 3,
  explanation: 'Ready is a process state indicating that the process can execute when the CPU is assigned.'
},
{
  id: 1007, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which scheduler selects a process from the ready queue for CPU execution?',
  options: ['CPU scheduler', 'Job terminator', 'Text editor', 'Linker'],
  a: 0,
  explanation: 'The CPU scheduler selects a ready process to run on the CPU.'
},
{
  id: 1008, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which scheduling algorithm uses a time quantum?',
  options: ['FCFS', 'Round Robin', 'Non-preemptive SJF', 'FIFO page replacement'],
  a: 1,
  explanation: 'Round Robin gives each ready process a fixed time quantum.'
},
{
  id: 1009, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which CPU scheduling algorithm executes processes in arrival order?',
  options: ['Priority scheduling', 'Round Robin', 'First Come, First Served', 'Shortest Remaining Time First'],
  a: 2,
  explanation: 'FCFS schedules processes in the order in which they arrive.'
},
{
  id: 1010, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which scheduling algorithm selects the process with the shortest CPU burst?',
  options: ['FCFS', 'Round Robin', 'FIFO', 'Shortest Job First'],
  a: 3,
  explanation: 'Shortest Job First selects the process with the shortest expected CPU burst.'
},
{
  id: 1011, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is preemptive scheduling?',
  options: ['The OS can interrupt a running process and allocate the CPU to another', 'A process runs without ever stopping', 'All processes execute simultaneously on one CPU', 'The OS never schedules processes'],
  a: 0,
  explanation: 'Preemptive scheduling allows the OS to take the CPU from a running process.'
},
{
  id: 1012, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Turnaround time is generally calculated as:',
  options: ['Arrival time minus burst time', 'Completion time minus arrival time', 'Burst time minus waiting time', 'Response time minus arrival time'],
  a: 1,
  explanation: 'Turnaround time equals completion time minus arrival time.'
},
{
  id: 1013, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Waiting time is the time a process spends:',
  options: ['Executing only', 'Performing input only', 'Waiting in the ready queue', 'Loading the operating system only'],
  a: 2,
  explanation: 'Waiting time is the total time spent waiting in the ready queue.'
},
{
  id: 1014, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which problem can occur when a low-priority process waits indefinitely?',
  options: ['Paging', 'Thrashing', 'Compilation', 'Starvation'],
  a: 3,
  explanation: 'Starvation occurs when a process waits indefinitely because resources or CPU time are repeatedly given to others.'
},
{
  id: 1015, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Aging in CPU scheduling helps to:',
  options: ['Gradually increase the priority of waiting processes', 'Delete all waiting processes', 'Reduce physical memory', 'Stop context switching permanently'],
  a: 0,
  explanation: 'Aging raises the priority of waiting processes to reduce starvation.'
},
{
  id: 1016, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is a context switch?',
  options: ['Changing a file name', 'Saving one process state and restoring another', 'Installing an operating system', 'Formatting a disk'],
  a: 1,
  explanation: 'A context switch changes the CPU from one process or thread to another by saving and restoring execution state.'
},
{
  id: 1017, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is a thread?',
  options: ['A physical hard disk', 'A complete operating system', 'A unit of execution within a process', 'A type of printer'],
  a: 2,
  explanation: 'A thread is a unit of CPU execution within a process.'
},
{
  id: 1018, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Threads belonging to the same process typically share:',
  options: ['Their separate stacks only', 'Their CPU registers at all times', 'Their independent process IDs', 'Code and data address space'],
  a: 3,
  explanation: 'Threads in one process typically share code, data and process resources, while each has its own stack and registers.'
},
{
  id: 1019, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is a race condition?',
  options: ['A result that depends on the timing of concurrent operations', 'A CPU running at a fixed speed', 'A disk with no free space', 'A program that has no loops'],
  a: 0,
  explanation: 'A race condition occurs when concurrent operations access shared state and the outcome depends on their timing.'
},
{
  id: 1020, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the purpose of a critical section?',
  options: ['To store backup files', 'To access shared resources that require synchronization', 'To compile source code', 'To install device drivers'],
  a: 1,
  explanation: 'A critical section is code that accesses shared data and must be protected against unsafe concurrent access.'
},
{
  id: 1021, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which synchronization tool is commonly used to control access to shared resources?',
  options: ['Compiler', 'Loader', 'Semaphore', 'Text editor'],
  a: 2,
  explanation: 'A semaphore uses operations such as wait and signal to coordinate concurrent processes or threads.'
},
{
  id: 1022, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'A mutex is primarily used to:',
  options: ['Increase disk capacity', 'Translate source code', 'Allocate IP addresses', 'Provide mutual exclusion for a shared resource'],
  a: 3,
  explanation: 'A mutex allows controlled exclusive access to a shared resource.'
},
{
  id: 1023, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which is one of the necessary conditions for deadlock?',
  options: ['Circular wait', 'Unlimited resources', 'No resource sharing', 'Guaranteed preemption of every resource'],
  a: 0,
  explanation: 'Circular wait is one of the four necessary Coffman conditions for deadlock.'
},
{
  id: 1024, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'How many necessary Coffman conditions are associated with deadlock?',
  options: ['Two', 'Four', 'Five', 'Seven'],
  a: 1,
  explanation: 'The four conditions are mutual exclusion, hold and wait, no preemption and circular wait.'
},
{
  id: 1025, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which algorithm is used for deadlock avoidance when maximum resource needs are known?',
  options: ['Round Robin', 'FIFO scheduling', 'Banker’s algorithm', 'Binary search'],
  a: 2,
  explanation: 'Banker’s algorithm checks whether granting a request keeps the system in a safe state.'
},
{
  id: 1026, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'A system is in a safe state if:',
  options: ['No process ever waits', 'All resources are permanently free', 'Deadlock is impossible under every future request', 'There is a safe sequence in which all processes can finish'],
  a: 3,
  explanation: 'A safe state has at least one sequence allowing every process to complete with available resources and resources released by earlier processes.'
},
{
  id: 1027, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the main purpose of virtual memory?',
  options: ['Allow programs to use an address space larger than available physical RAM', 'Replace the CPU', 'Increase monitor resolution', 'Remove the need for secondary storage'],
  a: 0,
  explanation: 'Virtual memory provides an abstraction that can allow processes to use more memory than the available physical RAM.'
},
{
  id: 1028, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Paging divides logical memory into fixed-size:',
  options: ['Segments only', 'Pages', 'Files', 'Processes'],
  a: 1,
  explanation: 'Paging divides a process’s logical address space into fixed-size pages.'
},
{
  id: 1029, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Physical memory is divided into fixed-size units called:',
  options: ['Threads', 'Directories', 'Frames', 'Semaphores'],
  a: 2,
  explanation: 'Physical memory is divided into frames, which hold pages.'
},
{
  id: 1030, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What information does a page table generally store?',
  options: ['User passwords in plain text', 'CPU temperature history only', 'File names only', 'Mappings from virtual pages to physical frames'],
  a: 3,
  explanation: 'A page table maps virtual page numbers to physical frame numbers and may store protection and status bits.'
},
{
  id: 1031, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is a page fault?',
  options: ['A memory access to a page that is not currently mapped as required in RAM', 'A printer running out of paper', 'A syntax error in JavaScript', 'A CPU fan stopping'],
  a: 0,
  explanation: 'A page fault occurs when a memory reference requires OS handling because the page is not currently available in the required memory mapping.'
},
{
  id: 1032, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which page replacement algorithm replaces the page that has been in memory the longest?',
  options: ['LRU', 'FIFO', 'Optimal only', 'Round Robin'],
  a: 1,
  explanation: 'FIFO replaces the page that entered memory earliest.'
},
{
  id: 1033, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'The LRU page replacement algorithm replaces the page that:',
  options: ['Has the largest file name', 'Was loaded first in every case', 'Has not been used for the longest time', 'Uses the most CPU registers'],
  a: 2,
  explanation: 'LRU replaces the page whose most recent use was farthest in the past.'
},
{
  id: 1034, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is thrashing?',
  options: ['Rapid CPU instruction execution', 'Efficient file compression', 'A type of process termination', 'Excessive paging that leaves little time for useful execution'],
  a: 3,
  explanation: 'Thrashing occurs when excessive page faults cause the system to spend much of its time moving pages rather than executing useful work.'
},
{
  id: 1035, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is internal fragmentation?',
  options: ['Wasted space inside an allocated memory block', 'Unused space between files only', 'A missing CPU instruction', 'A network routing failure'],
  a: 0,
  explanation: 'Internal fragmentation is unused space within an allocated block or partition.'
},
{
  id: 1036, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is external fragmentation?',
  options: ['Wasted space inside every fixed-size page', 'Free memory split into small non-contiguous holes', 'A corrupted keyboard', 'A CPU scheduling method'],
  a: 1,
  explanation: 'External fragmentation occurs when free memory exists in separate holes and cannot satisfy a large contiguous allocation.'
},
{
  id: 1037, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is segmentation in memory management?',
  options: ['Dividing memory into equal CPU time slices', 'Splitting every file into characters', 'Dividing a program into logical variable-sized segments', 'Converting a process into a thread'],
  a: 2,
  explanation: 'Segmentation divides a program into logical units such as code, data and stack, which may have different sizes.'
},
{
  id: 1038, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which technique can help reduce external fragmentation by moving processes in memory?',
  options: ['Spooling', 'Caching', 'Multithreading', 'Compaction'],
  a: 3,
  explanation: 'Compaction moves allocated regions to combine scattered free holes into a larger contiguous region.'
},
{
  id: 1039, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which type of memory is volatile?',
  options: ['RAM', 'ROM', 'DVD-ROM', 'Flash storage'],
  a: 0,
  explanation: 'RAM is volatile because it normally loses its contents when power is removed.'
},
{
  id: 1040, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the purpose of a file system?',
  options: ['Schedule CPU instructions', 'Organize, store and retrieve files on storage devices', 'Manage only user authentication', 'Convert source code into machine code'],
  a: 1,
  explanation: 'A file system organizes files and directories and manages their storage and retrieval.'
},
{
  id: 1041, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which operation is commonly used to open a file through an operating system interface?',
  options: ['compile()', 'schedule()', 'open()', 'rotate()'],
  a: 2,
  explanation: 'The open operation requests access to a file and commonly returns a file descriptor or handle.'
},
{
  id: 1042, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What does a directory primarily provide?',
  options: ['CPU scheduling priorities', 'Physical RAM frames', 'A list of CPU registers', 'A way to organize and locate files'],
  a: 3,
  explanation: 'Directories organize file names and help users and programs locate files.'
},
{
  id: 1043, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is a system call?',
  options: ['A controlled interface through which a program requests an OS service', 'A call made only to a friend', 'A type of database table', 'A hardware cooling method'],
  a: 0,
  explanation: 'System calls let programs request services such as file access, process creation and communication from the operating system.'
},
{
  id: 1044, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which is an example of inter-process communication (IPC)?',
  options: ['Changing screen brightness', 'Pipes', 'Replacing a keyboard key', 'Formatting a document'],
  a: 1,
  explanation: 'Pipes allow processes to communicate by passing a stream of data.'
},
{
  id: 1045, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is spooling commonly used for?',
  options: ['Translating programming languages', 'Allocating CPU registers', 'Queuing jobs for a device such as a printer', 'Preventing every page fault'],
  a: 2,
  explanation: 'Spooling queues work, often on disk, for devices that process jobs at their own pace.'
},
{
  id: 1046, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'An interrupt is a mechanism that:',
  options: ['Permanently stops the computer', 'Deletes all processes', 'Formats main memory', 'Signals the CPU that an event needs attention'],
  a: 3,
  explanation: 'An interrupt signals the CPU to handle an event, typically by executing an appropriate handler.'
},
{
  id: 1047, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the main benefit of multiprogramming?',
  options: ['Keeping the CPU busy by switching to another job when one waits', 'Ensuring only one program can ever be stored', 'Eliminating the need for memory', 'Preventing all input/output operations'],
  a: 0,
  explanation: 'Multiprogramming improves CPU utilization by allowing another job to run while one job waits for I/O.'
},
{
  id: 1048, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the primary goal of a real-time operating system?',
  options: ['Always maximize screen resolution', 'Provide responses within required timing constraints', 'Store unlimited files in RAM', 'Remove all interrupts'],
  a: 1,
  explanation: 'A real-time OS is designed to meet timing constraints and deadlines for tasks.'
},
{
  id: 1049, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'What is the difference between user mode and kernel mode?',
  options: ['User mode always has more privileges', 'They are two different programming languages', 'Kernel mode has privileged access to system resources', 'User mode can directly execute every privileged instruction'],
  a: 2,
  explanation: 'Kernel mode allows privileged operations; user mode restricts direct access to protected system resources.'
},
{
  id: 1050, branch: 'CSE', topic: 'OS', semester: 'Semester 4', subject: 'Operating Systems',
  q: 'Which statement best describes multiprocessing?',
  options: ['Running without an operating system', 'Using one process with no threads', 'Storing multiple files in one folder', 'Using two or more CPUs or processing cores to execute tasks'],
  a: 3,
  explanation: 'Multiprocessing uses multiple processing units or cores to execute work in parallel.'
},

{
  id: 1051, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a DBMS?',
  options: ['A programming language', 'Software used to create, manage and access databases', 'An operating system', 'A web browser'],
  a: 1,
  explanation: 'A DBMS provides tools to define, store, retrieve and manage data in a database.'
},
{
  id: 1052, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which of the following is a relational DBMS?',
  options: ['Linux', 'Git', 'MySQL', 'HTML'],
  a: 2,
  explanation: 'MySQL stores data in related tables and is a relational database management system.'
},
{
  id: 1053, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a database?',
  options: ['A collection of unrelated programs', 'A type of CPU', 'A network cable', 'An organized collection of related data'],
  a: 3,
  explanation: 'A database is an organized collection of data that can be stored, accessed and managed.'
},
{
  id: 1054, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'In a relational database, a table is also called a:',
  options: ['Relation', 'Process', 'Thread', 'Compiler'],
  a: 0,
  explanation: 'In the relational model, a table is represented as a relation.'
},
{
  id: 1055, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'A row in a relational table is called a:',
  options: ['Domain', 'Tuple', 'Schema', 'Constraint'],
  a: 1,
  explanation: 'A tuple represents a single row or record in a relational table.'
},
{
  id: 1056, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'A column in a relational table is commonly called an:',
  options: ['Instance', 'Tuple', 'Attribute', 'Transaction'],
  a: 2,
  explanation: 'An attribute represents a column or property in a relation.'
},
{
  id: 1057, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which key uniquely identifies each row in a table?',
  options: ['Foreign key only', 'Duplicate key', 'Optional key', 'Primary key'],
  a: 3,
  explanation: 'A primary key uniquely identifies each row and cannot contain NULL values.'
},
{
  id: 1058, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'A foreign key is mainly used to:',
  options: ['Establish a relationship between tables', 'Sort every table automatically', 'Encrypt all columns', 'Replace every primary key'],
  a: 0,
  explanation: 'A foreign key references a candidate or primary key in another or the same table to maintain referential integrity.'
},
{
  id: 1059, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which key can uniquely identify a row and may contain more attributes than necessary?',
  options: ['Foreign key', 'Super key', 'Partial key only', 'Null key'],
  a: 1,
  explanation: 'A super key is any set of attributes that uniquely identifies a row, possibly with redundant attributes.'
},
{
  id: 1060, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'A candidate key is:',
  options: ['Always a foreign key', 'A key that allows duplicate rows', 'A minimal super key', 'A column that must contain text'],
  a: 2,
  explanation: 'A candidate key uniquely identifies rows and has no unnecessary attributes.'
},
{
  id: 1061, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL command retrieves data from a table?',
  options: ['DELETE', 'UPDATE', 'INSERT', 'SELECT'],
  a: 3,
  explanation: 'SELECT retrieves rows and columns from one or more tables.'
},
{
  id: 1062, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL command adds new rows to a table?',
  options: ['INSERT', 'ALTER', 'DROP', 'GRANT'],
  a: 0,
  explanation: 'INSERT adds new records to a table.'
},
{
  id: 1063, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL command modifies existing rows?',
  options: ['CREATE', 'UPDATE', 'COMMIT', 'REVOKE'],
  a: 1,
  explanation: 'UPDATE changes values in existing rows, typically selected using a WHERE condition.'
},
{
  id: 1064, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL command removes selected rows from a table?',
  options: ['ALTER', 'CREATE', 'DELETE', 'GRANT'],
  a: 2,
  explanation: 'DELETE removes rows from a table. A WHERE clause can limit which rows are deleted.'
},
{
  id: 1065, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which command removes a table definition and its data?',
  options: ['SELECT', 'UPDATE', 'INSERT', 'DROP TABLE'],
  a: 3,
  explanation: 'DROP TABLE removes the table object; its data and definition are removed as well.'
},
{
  id: 1066, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL clause filters rows based on a condition?',
  options: ['WHERE', 'ORDER BY', 'GROUP BY', 'FROM'],
  a: 0,
  explanation: 'WHERE selects rows that satisfy a specified condition.'
},
{
  id: 1067, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL clause sorts query results?',
  options: ['HAVING', 'ORDER BY', 'WHERE', 'VALUES'],
  a: 1,
  explanation: 'ORDER BY sorts result rows in ascending or descending order.'
},
{
  id: 1068, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL function counts rows?',
  options: ['SUM()', 'AVG()', 'COUNT()', 'ROUND()'],
  a: 2,
  explanation: 'COUNT() returns the number of rows or non-NULL values, depending on its argument.'
},
{
  id: 1069, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which clause groups rows that share the same values?',
  options: ['ORDER BY', 'DISTINCT', 'WHERE', 'GROUP BY'],
  a: 3,
  explanation: 'GROUP BY groups rows by one or more columns, often for aggregate calculations.'
},
{
  id: 1070, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which clause filters groups after aggregation?',
  options: ['HAVING', 'VALUES', 'INTO', 'LIMIT only'],
  a: 0,
  explanation: 'HAVING filters grouped results, often using aggregate functions such as COUNT() or SUM().'
},
{
  id: 1071, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL operator checks whether a value matches any value in a specified list?',
  options: ['BETWEEN only', 'IN', 'IS NULL only', 'AS'],
  a: 1,
  explanation: 'IN tests whether an expression matches any value in a given list or subquery.'
},
{
  id: 1072, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What does NULL generally represent in a database?',
  options: ['The number zero in every context', 'An empty string in every context', 'A missing, unknown or inapplicable value', 'A guaranteed duplicate value'],
  a: 2,
  explanation: 'NULL represents missing, unknown or inapplicable information and is not the same as zero or an empty string.'
},
{
  id: 1073, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which condition correctly tests whether a column has a NULL value?',
  options: ['column = NULL', 'column == NULL', 'column EQUALS NULL', 'column IS NULL'],
  a: 3,
  explanation: 'SQL uses IS NULL to test for NULL values.'
},
{
  id: 1074, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a JOIN used for?',
  options: ['Combining related rows from two or more tables', 'Deleting the entire database', 'Creating an operating system', 'Encrypting a hard disk'],
  a: 0,
  explanation: 'JOIN combines rows from tables using a specified relationship or join condition.'
},
{
  id: 1075, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which JOIN returns matching rows from both tables?',
  options: ['CROSS JOIN only', 'INNER JOIN', 'FULL OUTER JOIN in all cases', 'No JOIN'],
  a: 1,
  explanation: 'INNER JOIN returns rows for which the join condition matches in both tables.'
},
{
  id: 1076, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which JOIN returns all rows from the left table and matching rows from the right table?',
  options: ['INNER JOIN', 'CROSS JOIN', 'LEFT OUTER JOIN', 'SELF JOIN only'],
  a: 2,
  explanation: 'LEFT OUTER JOIN preserves every left-table row and fills unmatched right-side columns with NULL.'
},
{
  id: 1077, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a subquery?',
  options: ['A table with no columns', 'A database backup only', 'A network protocol', 'A query nested inside another SQL statement'],
  a: 3,
  explanation: 'A subquery is a query embedded within another query or SQL statement.'
},
{
  id: 1078, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is normalization in DBMS?',
  options: ['Organizing tables to reduce redundancy and undesirable dependencies', 'Increasing duplicate data intentionally', 'Converting every value into a string', 'Removing all primary keys'],
  a: 0,
  explanation: 'Normalization structures relations to reduce redundancy and prevent insertion, update and deletion anomalies.'
},
{
  id: 1079, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'A table is in First Normal Form (1NF) when:',
  options: ['It has no primary key', 'Each attribute contains atomic values and there are no repeating groups', 'Every attribute must be a foreign key', 'All rows must be identical'],
  a: 1,
  explanation: '1NF requires atomic attribute values and excludes repeating groups in the relational model.'
},
{
  id: 1080, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Second Normal Form (2NF) primarily eliminates:',
  options: ['All foreign keys', 'All candidate keys', 'Partial dependency of non-prime attributes on a candidate key', 'All relationships between tables'],
  a: 2,
  explanation: '2NF requires 1NF and removes partial dependencies of non-prime attributes on a candidate key.'
},
{
  id: 1081, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Third Normal Form (3NF) primarily addresses:',
  options: ['The existence of all indexes', 'The number of users', 'The physical size of a monitor', 'Transitive dependencies of non-prime attributes on candidate keys'],
  a: 3,
  explanation: '3NF removes certain transitive dependencies of non-prime attributes on candidate keys.'
},
{
  id: 1082, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which normal form is generally considered stricter than 3NF?',
  options: ['BCNF', '1NF', '0NF', 'None of these'],
  a: 0,
  explanation: 'Boyce-Codd Normal Form (BCNF) is stricter than 3NF.'
},
{
  id: 1083, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a functional dependency X → Y?',
  options: ['X and Y must always be identical', 'Each value of X determines a single value of Y', 'Y determines every table in the database', 'X must be a foreign key'],
  a: 1,
  explanation: 'X → Y means that any two rows agreeing on X must also agree on Y.'
},
{
  id: 1084, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which ACID property ensures a transaction is all-or-nothing?',
  options: ['Consistency', 'Isolation', 'Atomicity', 'Durability'],
  a: 2,
  explanation: 'Atomicity ensures that all operations of a transaction succeed together or the transaction has no effect.'
},
{
  id: 1085, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which ACID property ensures valid database rules remain satisfied?',
  options: ['Atomicity', 'Isolation', 'Durability', 'Consistency'],
  a: 3,
  explanation: 'Consistency requires a transaction to preserve database constraints and move the database between valid states.'
},
{
  id: 1086, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which ACID property isolates concurrent transactions from interfering improperly?',
  options: ['Isolation', 'Durability', 'Atomicity', 'Redundancy'],
  a: 0,
  explanation: 'Isolation controls how concurrent transactions interact and what intermediate results they can observe.'
},
{
  id: 1087, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which ACID property ensures committed changes survive failures?',
  options: ['Consistency', 'Durability', 'Isolation', 'Atomicity'],
  a: 1,
  explanation: 'Durability means committed transaction results persist even after a system failure.'
},
{
  id: 1088, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL statement permanently commits a transaction?',
  options: ['ROLLBACK', 'SAVEPOINT', 'COMMIT', 'SELECT'],
  a: 2,
  explanation: 'COMMIT makes the transaction’s changes permanent according to the DBMS transaction rules.'
},
{
  id: 1089, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL statement undoes uncommitted transaction changes?',
  options: ['GRANT', 'CREATE', 'ALTER', 'ROLLBACK'],
  a: 3,
  explanation: 'ROLLBACK undoes changes in the current transaction that have not been committed.'
},
{
  id: 1090, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a database index primarily used for?',
  options: ['Speeding up data retrieval', 'Replacing all table data', 'Guaranteeing every query is free', 'Removing the need for backups'],
  a: 0,
  explanation: 'Indexes can speed up data retrieval but require storage and may add overhead to data modifications.'
},
{
  id: 1091, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which data structure is commonly used to implement database indexes?',
  options: ['Stack only', 'B-tree or B+ tree', 'Queue only', 'Call stack only'],
  a: 1,
  explanation: 'B-tree and B+ tree structures support efficient searching and range queries in many database systems.'
},
{
  id: 1092, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is a database view?',
  options: ['A physical monitor', 'A backup cable', 'A virtual table defined by a query', 'A type of CPU cache'],
  a: 2,
  explanation: 'A view is defined by a query and presents data from underlying tables or other views.'
},
{
  id: 1093, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL command is commonly used to create a table?',
  options: ['FETCH', 'ROLLBACK', 'REVOKE', 'CREATE TABLE'],
  a: 3,
  explanation: 'CREATE TABLE defines a new table and its columns, data types and constraints.'
},
{
  id: 1094, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which constraint prevents duplicate values in a column or a set of columns?',
  options: ['UNIQUE', 'DEFAULT only', 'CHECK only', 'NULL'],
  a: 0,
  explanation: 'UNIQUE enforces uniqueness across the constrained column or column combination, subject to DBMS NULL rules.'
},
{
  id: 1095, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which constraint requires a column to have a value rather than NULL?',
  options: ['FOREIGN KEY', 'NOT NULL', 'ORDER BY', 'GROUP BY'],
  a: 1,
  explanation: 'NOT NULL prevents a column from storing NULL values.'
},
{
  id: 1096, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which SQL command changes a table structure?',
  options: ['SELECT', 'COMMIT', 'ALTER TABLE', 'ROLLBACK'],
  a: 2,
  explanation: 'ALTER TABLE changes a table definition, for example by adding or modifying columns.'
},
{
  id: 1097, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is an ER diagram used for?',
  options: ['Scheduling CPU processes', 'Measuring internet speed', 'Compiling SQL queries', 'Modeling entities, attributes and relationships'],
  a: 3,
  explanation: 'An Entity-Relationship diagram models data entities, their attributes and the relationships among them.'
},
{
  id: 1098, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'In an ER model, an entity represents:',
  options: ['A distinguishable real-world object or concept', 'Only a SQL command', 'A CPU scheduling policy', 'A database password in every case'],
  a: 0,
  explanation: 'An entity is a distinguishable object or concept about which data is stored.'
},
{
  id: 1099, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'What is referential integrity?',
  options: ['Ensuring all columns contain numbers', 'Ensuring foreign-key references remain valid', 'Sorting all tables alphabetically', 'Preventing every transaction'],
  a: 1,
  explanation: 'Referential integrity ensures that foreign-key values refer to valid referenced rows, or are NULL when permitted.'
},
{
  id: 1100, branch: 'CSE', topic: 'DBMS', semester: 'Semester 4', subject: 'Database Management Systems (DBMS)',
  q: 'Which technique is commonly used to recover a database after a crash?',
  options: ['Renaming every table', 'Deleting all indexes', 'Logging and recovery procedures', 'Disabling all constraints permanently'],
  a: 2,
  explanation: 'Database recovery uses logs and recovery procedures to restore a consistent state after a failure.'
},

{
  id: 1101, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is a computer network?',
  options: ['A single computer without connections', 'A collection of interconnected devices that communicate and share resources', 'A programming language', 'A type of database table'],
  a: 1,
  explanation: 'A computer network connects devices so they can exchange information and share resources.'
},
{
  id: 1102, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which model has seven layers?',
  options: ['TCP model', 'Client-server model', 'OSI model', 'Peer-to-peer model'],
  a: 2,
  explanation: 'The OSI reference model consists of seven layers.'
},
{
  id: 1103, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'How many layers are there in the OSI model?',
  options: ['Four', 'Five', 'Six', 'Seven'],
  a: 3,
  explanation: 'The OSI model contains Physical, Data Link, Network, Transport, Session, Presentation and Application layers.'
},
{
  id: 1104, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which OSI layer transmits raw bits over the communication medium?',
  options: ['Physical layer', 'Network layer', 'Session layer', 'Application layer'],
  a: 0,
  explanation: 'The Physical layer transmits bits through the physical communication medium.'
},
{
  id: 1105, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which OSI layer is responsible for framing and MAC addressing?',
  options: ['Transport layer', 'Data Link layer', 'Presentation layer', 'Session layer'],
  a: 1,
  explanation: 'The Data Link layer organizes bits into frames and commonly uses MAC addresses for local delivery.'
},
{
  id: 1106, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which OSI layer is primarily responsible for logical addressing and routing?',
  options: ['Physical layer', 'Session layer', 'Network layer', 'Presentation layer'],
  a: 2,
  explanation: 'The Network layer handles logical addressing and routing packets between networks.'
},
{
  id: 1107, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which OSI layer provides end-to-end transport services?',
  options: ['Physical layer', 'Data Link layer', 'Presentation layer', 'Transport layer'],
  a: 3,
  explanation: 'The Transport layer supports end-to-end delivery and may provide reliability, flow control and segmentation.'
},
{
  id: 1108, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which OSI layer provides services such as data encryption and format translation in the classic model?',
  options: ['Presentation layer', 'Network layer', 'Physical layer', 'Data Link layer'],
  a: 0,
  explanation: 'The Presentation layer is associated with data representation, translation, compression and encryption in the OSI model.'
},
{
  id: 1109, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which device forwards packets between different IP networks?',
  options: ['Repeater', 'Router', 'Hub', 'Passive connector'],
  a: 1,
  explanation: 'A router forwards packets between networks using routing information.'
},
{
  id: 1110, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which device typically forwards Ethernet frames using a MAC address table?',
  options: ['Modem only', 'Router only', 'Switch', 'Firewall cable'],
  a: 2,
  explanation: 'A Layer 2 switch learns MAC addresses and forwards frames to the appropriate ports.'
},
{
  id: 1111, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which device traditionally broadcasts incoming data to all ports?',
  options: ['Router', 'Layer 3 switch in every case', 'Gateway server only', 'Hub'],
  a: 3,
  explanation: 'A traditional hub repeats incoming signals to all its other ports.'
},
{
  id: 1112, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What does LAN stand for?',
  options: ['Local Area Network', 'Large Access Node', 'Long Application Network', 'Linked Analog Number'],
  a: 0,
  explanation: 'A LAN connects devices within a limited geographical area such as a home, office or campus.'
},
{
  id: 1113, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which network typically covers the largest geographical area?',
  options: ['PAN', 'WAN', 'LAN', 'Single-room network'],
  a: 1,
  explanation: 'A Wide Area Network can connect devices and networks across cities, countries or continents.'
},
{
  id: 1114, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the main purpose of an IP address?',
  options: ['Identify a keyboard layout', 'Store a web page permanently', 'Provide logical addressing for network communication', 'Replace all network protocols'],
  a: 2,
  explanation: 'An IP address identifies a network interface logically for communication across IP networks.'
},
{
  id: 1115, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'How many bits are in an IPv4 address?',
  options: ['16 bits', '32 bits', '64 bits', '128 bits'],
  a: 1,
  explanation: 'An IPv4 address is 32 bits long and is commonly written as four decimal octets.'
},
{
  id: 1116, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'How many bits are in an IPv6 address?',
  options: ['32 bits', '48 bits', '128 bits', '256 bits'],
  a: 2,
  explanation: 'An IPv6 address is 128 bits long.'
},
{
  id: 1117, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol translates a domain name such as example.com into an IP address?',
  options: ['FTP', 'SMTP', 'ARP in every case', 'DNS'],
  a: 3,
  explanation: 'DNS resolves domain names to associated records, including IP addresses.'
},
{
  id: 1118, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol automatically provides IP configuration to network clients?',
  options: ['DHCP', 'HTTP', 'SMTP', 'SSH'],
  a: 0,
  explanation: 'DHCP can automatically assign IP addresses and provide other network configuration information.'
},
{
  id: 1119, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol is commonly used to map an IPv4 address to a MAC address on a local network?',
  options: ['DNS', 'ARP', 'FTP', 'SMTP'],
  a: 1,
  explanation: 'ARP discovers the link-layer address associated with an IPv4 address on a local network.'
},
{
  id: 1120, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol provides reliable, connection-oriented transport?',
  options: ['IP', 'UDP', 'TCP', 'ICMP'],
  a: 2,
  explanation: 'TCP provides a reliable, ordered byte stream with connection management and retransmission.'
},
{
  id: 1121, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which transport protocol is connectionless and does not guarantee delivery?',
  options: ['TCP', 'HTTP', 'FTP', 'UDP'],
  a: 3,
  explanation: 'UDP sends datagrams without TCP-style connection establishment or delivery guarantees.'
},
{
  id: 1122, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the usual role of TCP port 80?',
  options: ['HTTP traffic', 'HTTPS traffic by default', 'DNS queries only', 'SSH traffic'],
  a: 0,
  explanation: 'TCP port 80 is conventionally used for HTTP traffic.'
},
{
  id: 1123, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which port is conventionally used by HTTPS?',
  options: ['21', '443', '25', '110'],
  a: 1,
  explanation: 'TCP port 443 is the conventional port for HTTPS.'
},
{
  id: 1124, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol is commonly used to send email between mail servers?',
  options: ['POP3', 'IMAP', 'SMTP', 'DHCP'],
  a: 2,
  explanation: 'SMTP is commonly used to send and relay email between mail systems.'
},
{
  id: 1125, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol is commonly used to retrieve and synchronize email while keeping messages on the server?',
  options: ['ARP', 'FTP', 'ICMP', 'IMAP'],
  a: 3,
  explanation: 'IMAP supports accessing and synchronizing mailbox messages stored on a mail server.'
},
{
  id: 1126, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol is used to transfer files between a client and server?',
  options: ['FTP', 'ARP', 'ICMP', 'DHCP'],
  a: 0,
  explanation: 'FTP is a protocol designed for file transfer, though secure alternatives are often preferred.'
},
{
  id: 1127, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What does HTTP stand for?',
  options: ['High Transfer Text Program', 'Hypertext Transfer Protocol', 'Host Transmission Terminal Process', 'Hyperlink Tracking Transfer Port'],
  a: 1,
  explanation: 'HTTP stands for Hypertext Transfer Protocol and is used for web communication.'
},
{
  id: 1128, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol is commonly used to securely log in to a remote system through a command-line terminal?',
  options: ['Telnet only', 'HTTP', 'SSH', 'POP3'],
  a: 2,
  explanation: 'SSH provides encrypted remote login and command execution.'
},
{
  id: 1129, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the main purpose of a subnet mask in IPv4?',
  options: ['Encrypt the packet payload', 'Identify a web browser', 'Assign MAC addresses', 'Distinguish the network portion from the host portion of an address'],
  a: 3,
  explanation: 'A subnet mask indicates which IPv4 address bits identify the network and which identify the host.'
},
{
  id: 1130, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the purpose of a default gateway?',
  options: ['Forward traffic to destinations outside the local network', 'Convert HTML into CSS', 'Store every password', 'Replace DNS in all cases'],
  a: 0,
  explanation: 'A default gateway is the next-hop router used when no more specific route matches a destination.'
},
{
  id: 1131, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol is commonly used to report network errors and perform diagnostic functions such as ping?',
  options: ['FTP', 'ICMP', 'SMTP', 'DHCP'],
  a: 1,
  explanation: 'ICMP carries control and error messages; ping commonly uses ICMP Echo messages.'
},
{
  id: 1132, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which command-line utility is commonly used to test reachability using echo requests?',
  options: ['mkdir', 'copy', 'ping', 'format'],
  a: 2,
  explanation: 'Ping sends echo requests using the relevant network protocol and reports responses when received.'
},
{
  id: 1133, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What does bandwidth describe in networking?',
  options: ['The physical weight of a router', 'The number of user accounts', 'The age of a network cable', 'The maximum data-carrying capacity of a link over time'],
  a: 3,
  explanation: 'Bandwidth describes a link’s capacity, commonly measured in bits per second.'
},
{
  id: 1134, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is network latency?',
  options: ['The time delay experienced by data travelling through a network', 'The total number of files', 'The size of a monitor', 'The number of database columns'],
  a: 0,
  explanation: 'Latency measures the delay between a transmission or request and its arrival or response.'
},
{
  id: 1135, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which switching technique establishes a dedicated communication path for the duration of a connection?',
  options: ['Packet switching', 'Circuit switching', 'Message broadcasting only', 'DNS switching'],
  a: 1,
  explanation: 'Circuit switching establishes a dedicated path or circuit for a communication session.'
},
{
  id: 1136, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'The Internet primarily uses which switching technique for data communication?',
  options: ['Circuit switching exclusively', 'Manual switching', 'Packet switching', 'Mechanical switching'],
  a: 2,
  explanation: 'IP networks send data in packets that may travel along different routes.'
},
{
  id: 1137, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which topology connects all devices to a central switch or hub?',
  options: ['Bus', 'Ring', 'Mesh only', 'Star'],
  a: 3,
  explanation: 'In a star topology, each device connects to a central device such as a switch.'
},
{
  id: 1138, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which topology uses a shared main communication cable?',
  options: ['Bus', 'Star', 'Full mesh', 'Tree only'],
  a: 0,
  explanation: 'A bus topology connects devices through a shared backbone cable.'
},
{
  id: 1139, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which transmission medium carries data using light through glass or plastic strands?',
  options: ['Coaxial copper cable', 'Optical fiber', 'Twisted-pair copper only', 'Radio antenna only'],
  a: 1,
  explanation: 'Optical fiber carries information as light signals and supports high bandwidth over long distances.'
},
{
  id: 1140, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which medium transmits data using electromagnetic waves without a physical cable?',
  options: ['Optical fiber', 'Twisted pair', 'Wireless radio', 'Coaxial cable'],
  a: 2,
  explanation: 'Wireless communication uses electromagnetic waves such as radio waves to transmit data.'
},
{
  id: 1141, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the purpose of error detection in data communication?',
  options: ['Guarantee zero delay', 'Increase screen brightness', 'Assign domain names', 'Identify whether transmitted data may have been corrupted'],
  a: 3,
  explanation: 'Error-detection methods such as checksums and CRC help identify corrupted data.'
},
{
  id: 1142, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which technique is commonly used for error detection in data-link frames?',
  options: ['Cyclic Redundancy Check (CRC)', 'Binary search', 'Round Robin scheduling', 'Normalization'],
  a: 0,
  explanation: 'CRC calculates a check value that can detect many common transmission errors.'
},
{
  id: 1143, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is flow control intended to prevent?',
  options: ['All routing decisions', 'A fast sender overwhelming a slower receiver', 'Every IP address assignment', 'All network connections'],
  a: 1,
  explanation: 'Flow control helps match the sender’s transmission rate to the receiver’s ability to accept data.'
},
{
  id: 1144, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is congestion control designed to address?',
  options: ['Missing keyboard keys', 'Database normalization', 'Excessive traffic that overloads network resources', 'The number of rows in a table'],
  a: 2,
  explanation: 'Congestion control helps prevent or reduce overload in network paths and routers.'
},
{
  id: 1145, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the main purpose of a firewall?',
  options: ['Increase RAM capacity', 'Replace all routing protocols', 'Create database tables', 'Filter network traffic according to security rules'],
  a: 3,
  explanation: 'A firewall permits or blocks traffic according to configured security policies.'
},
{
  id: 1146, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What does VPN stand for?',
  options: ['Virtual Private Network', 'Verified Public Node', 'Variable Packet Number', 'Visual Program Network'],
  a: 0,
  explanation: 'A Virtual Private Network creates a logical private connection over an underlying network, often using encryption.'
},
{
  id: 1147, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the purpose of NAT in many IPv4 networks?',
  options: ['Translate HTML to text', 'Translate between private and public IP address or port mappings', 'Detect every software bug', 'Replace Ethernet frames with files'],
  a: 1,
  explanation: 'Network Address Translation modifies IP address information and may also translate ports as packets pass through a device.'
},
{
  id: 1148, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'Which protocol suite forms the core of Internet communication?',
  options: ['HTML/CSS', 'SQL/PLSQL', 'TCP/IP', 'USB/HDMI'],
  a: 2,
  explanation: 'The Internet protocol suite includes IP and transport protocols such as TCP and UDP.'
},
{
  id: 1149, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is encapsulation in networking?',
  options: ['Deleting all packet headers', 'Compressing every file into ZIP', 'Removing the destination address', 'Wrapping data with protocol-specific headers and sometimes trailers'],
  a: 3,
  explanation: 'As data moves through protocol layers, each layer may add its own header or trailer.'
},
{
  id: 1150, branch: 'CSE', topic: 'CN', semester: 'Semester 4', subject: 'Computer Networks',
  q: 'What is the primary role of a MAC address in Ethernet?',
  options: ['Identify a network interface at the data-link layer', 'Resolve every domain name', 'Encrypt all application data', 'Replace the IP routing table'],
  a: 0,
  explanation: 'An Ethernet MAC address identifies a network interface for communication on the local link.'
},

{
  id: 1151,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software engineering?',
  options: [
    'The systematic approach to software development and maintenance',
    'Only writing computer programs',
    'Only testing hardware',
    'Only designing databases'
  ],
  a: 0,
  explanation: 'Software engineering applies systematic engineering principles to software development, operation, and maintenance.'
},
{
  id: 1152,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which of the following is a major goal of software engineering?',
  options: [
    'Increase software complexity',
    'Develop reliable and maintainable software',
    'Eliminate all documentation',
    'Avoid software testing'
  ],
  a: 1,
  explanation: 'Software engineering aims to produce reliable, maintainable, and cost-effective software.'
},
{
  id: 1153,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What does SDLC stand for?',
  options: [
    'Software Design Level Control',
    'System Data Link Connection',
    'Software Development Life Cycle',
    'Source Development Logic Code'
  ],
  a: 2,
  explanation: 'SDLC stands for Software Development Life Cycle.'
},
{
  id: 1154,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which is a typical phase of the SDLC?',
  options: [
    'Requirement analysis',
    'Keyboard manufacturing',
    'Cable installation only',
    'Screen printing'
  ],
  a: 0,
  explanation: 'Requirement analysis identifies what the software must do.'
},
{
  id: 1155,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which SDLC model follows a sequential, phase-by-phase approach?',
  options: [
    'Spiral model',
    'Waterfall model',
    'Agile model',
    'Prototype model'
  ],
  a: 1,
  explanation: 'The Waterfall model proceeds through phases in a largely sequential order.'
},
{
  id: 1156,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which model emphasizes repeated development in small increments?',
  options: [
    'Waterfall model',
    'Big Bang model',
    'Incremental model',
    'Pure sequential model'
  ],
  a: 2,
  explanation: 'The Incremental model delivers software through a series of smaller releases.'
},
{
  id: 1157,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which model explicitly emphasizes risk analysis in repeated cycles?',
  options: [
    'Waterfall model',
    'V-Model',
    'Big Bang model',
    'Spiral model'
  ],
  a: 3,
  explanation: 'The Spiral model combines iterative development with risk assessment.'
},
{
  id: 1158,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is the main purpose of a feasibility study?',
  options: [
    'To determine whether a proposed project is practical',
    'To write every line of code',
    'To remove all requirements',
    'To replace software testing'
  ],
  a: 0,
  explanation: 'A feasibility study evaluates whether a project is technically, economically, and operationally practical.'
},
{
  id: 1159,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which document describes the functional and non-functional requirements of software?',
  options: [
    'User attendance sheet',
    'Software Requirements Specification (SRS)',
    'Source code comments only',
    'Hardware invoice'
  ],
  a: 1,
  explanation: 'An SRS documents the software requirements agreed upon for the system.'
},
{
  id: 1160,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which requirement describes a service the software must provide?',
  options: [
    'A non-functional requirement',
    'A hardware constraint only',
    'A functional requirement',
    'A maintenance schedule'
  ],
  a: 2,
  explanation: 'Functional requirements specify system services, behaviors, or operations.'
},
{
  id: 1161,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which is an example of a non-functional requirement?',
  options: [
    'The user can reset a password',
    'The system can generate invoices',
    'The user can search for a record',
    'The page should load within two seconds'
  ],
  a: 3,
  explanation: 'Performance is a non-functional quality requirement.'
},
{
  id: 1162,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is requirements elicitation?',
  options: [
    'Collecting requirements from stakeholders',
    'Compiling source code',
    'Installing an operating system',
    'Deleting user feedback'
  ],
  a: 0,
  explanation: 'Elicitation gathers stakeholder needs through interviews, observation, workshops, and other techniques.'
},
{
  id: 1163,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Who is a stakeholder in a software project?',
  options: [
    'Only the computer manufacturer',
    'Anyone affected by or interested in the system',
    'Only the project programmer',
    'Only the testing tool'
  ],
  a: 1,
  explanation: 'Stakeholders include users, customers, developers, administrators, and other affected parties.'
},
{
  id: 1164,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software prototyping?',
  options: [
    'The final deployment of every feature',
    'A method of avoiding users',
    'Creating an early model to explore requirements or design',
    'Removing the need for feedback'
  ],
  a: 2,
  explanation: 'A prototype helps clarify requirements and obtain early user feedback.'
},
{
  id: 1165,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is the primary purpose of software design?',
  options: [
    'To ignore system requirements',
    'To delay implementation',
    'To eliminate architecture',
    'To define the structure and solution for the requirements'
  ],
  a: 3,
  explanation: 'Software design translates requirements into architecture, components, interfaces, and data structures.'
},
{
  id: 1166,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What does modularity mean in software design?',
  options: [
    'Dividing a system into manageable components',
    'Writing all code in one huge function',
    'Removing all interfaces',
    'Combining unrelated tasks without structure'
  ],
  a: 0,
  explanation: 'Modularity divides software into components that can be understood and maintained more easily.'
},
{
  id: 1167,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'A module that performs one clearly defined task has high:',
  options: [
    'Coupling',
    'Cohesion',
    'Redundancy',
    'Complexity'
  ],
  a: 1,
  explanation: 'High cohesion means the elements within a module are closely related to its purpose.'
},
{
  id: 1168,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Good software design generally aims for:',
  options: [
    'High coupling and low cohesion',
    'High coupling and high dependency',
    'Low coupling and high cohesion',
    'No modules and no interfaces'
  ],
  a: 2,
  explanation: 'Low coupling reduces dependencies between modules, while high cohesion keeps each module focused.'
},
{
  id: 1169,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is abstraction in software design?',
  options: [
    'Showing every implementation detail at once',
    'Duplicating source code',
    'Removing all system behavior',
    'Focusing on essential features while hiding unnecessary details'
  ],
  a: 3,
  explanation: 'Abstraction manages complexity by emphasizing essential characteristics.'
},
{
  id: 1170,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which UML diagram primarily shows interactions between actors and a system?',
  options: [
    'Use case diagram',
    'Deployment diagram',
    'Class diagram',
    'Component diagram'
  ],
  a: 0,
  explanation: 'A use case diagram represents actors and the functions they use in a system.'
},
{
  id: 1171,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which UML diagram represents classes and their relationships?',
  options: [
    'Activity diagram',
    'Class diagram',
    'Sequence diagram',
    'State machine diagram'
  ],
  a: 1,
  explanation: 'A class diagram shows classes, attributes, operations, and relationships.'
},
{
  id: 1172,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which UML diagram shows messages exchanged between objects over time?',
  options: [
    'Use case diagram',
    'Package diagram',
    'Sequence diagram',
    'Deployment diagram'
  ],
  a: 2,
  explanation: 'A sequence diagram illustrates interactions and message order over time.'
},
{
  id: 1173,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software testing?',
  options: [
    'A guarantee that no defect can ever exist',
    'Only writing requirements',
    'Only creating user interfaces',
    'Evaluating software to find defects and assess quality'
  ],
  a: 3,
  explanation: 'Testing evaluates software behavior and helps reveal defects; it cannot prove the complete absence of defects.'
},
{
  id: 1174,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which testing technique examines internal code structure?',
  options: [
    'White-box testing',
    'Black-box testing',
    'Acceptance testing only',
    'Usability testing only'
  ],
  a: 0,
  explanation: 'White-box testing uses knowledge of the internal code and control structure.'
},
{
  id: 1175,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which testing technique focuses on inputs and outputs without relying on internal code details?',
  options: [
    'White-box testing',
    'Black-box testing',
    'Code inspection only',
    'Static code analysis only'
  ],
  a: 1,
  explanation: 'Black-box testing checks externally observable behavior against expected results.'
},
{
  id: 1176,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Testing an individual function or module is called:',
  options: [
    'System testing',
    'Acceptance testing',
    'Unit testing',
    'Deployment testing'
  ],
  a: 2,
  explanation: 'Unit testing verifies small, isolated software components.'
},
{
  id: 1177,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is integration testing?',
  options: [
    'Testing only the user manual',
    'Testing only individual variables',
    'Testing the computer monitor',
    'Testing interactions between combined modules'
  ],
  a: 3,
  explanation: 'Integration testing checks whether components work correctly together.'
},
{
  id: 1178,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which testing level evaluates the complete integrated system?',
  options: [
    'System testing',
    'Unit testing',
    'Statement testing only',
    'Code formatting'
  ],
  a: 0,
  explanation: 'System testing evaluates the complete system against its specified requirements.'
},
{
  id: 1179,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Acceptance testing primarily determines whether:',
  options: [
    'Every variable has a short name',
    'The system meets user or customer acceptance criteria',
    'The source code contains no comments',
    'The developer used a particular keyboard'
  ],
  a: 1,
  explanation: 'Acceptance testing checks whether the system satisfies agreed acceptance needs.'
},
{
  id: 1180,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is regression testing?',
  options: [
    'Testing performed only before coding',
    'Deleting previously passed tests',
    'Retesting to detect problems introduced by changes',
    'Testing only network cables'
  ],
  a: 2,
  explanation: 'Regression testing checks that modifications have not broken previously working functionality.'
},
{
  id: 1181,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is debugging?',
  options: [
    'Writing the project proposal',
    'Estimating the project budget',
    'Collecting user requirements',
    'Locating, analyzing, and correcting defects'
  ],
  a: 3,
  explanation: 'Debugging investigates the cause of a defect and works toward correcting it.'
},
{
  id: 1182,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software maintenance?',
  options: [
    'Modifying software after delivery to fix, adapt, or improve it',
    'Only designing a logo',
    'Only purchasing hardware',
    'Deleting all project documentation'
  ],
  a: 0,
  explanation: 'Maintenance includes correcting faults, adapting software, and improving its performance or structure.'
},
{
  id: 1183,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Maintenance performed to correct discovered defects is called:',
  options: [
    'Perfective maintenance',
    'Corrective maintenance',
    'Preventive maintenance',
    'Adaptive maintenance'
  ],
  a: 1,
  explanation: 'Corrective maintenance fixes faults discovered after delivery.'
},
{
  id: 1184,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Maintenance performed to accommodate a changed operating environment is called:',
  options: [
    'Corrective maintenance',
    'Perfective maintenance',
    'Adaptive maintenance',
    'Emergency testing'
  ],
  a: 2,
  explanation: 'Adaptive maintenance modifies software to work in a changed environment.'
},
{
  id: 1185,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Improving software performance or usability is commonly an example of:',
  options: [
    'Corrective maintenance only',
    'Hardware maintenance',
    'Requirement deletion',
    'Perfective maintenance'
  ],
  a: 3,
  explanation: 'Perfective maintenance enhances features, performance, or maintainability.'
},
{
  id: 1186,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software configuration management?',
  options: [
    'Managing and tracking changes to software artifacts',
    'Changing code without recording it',
    'Removing version history',
    'Testing only physical devices'
  ],
  a: 0,
  explanation: 'Configuration management controls versions and changes to source code and related artifacts.'
},
{
  id: 1187,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which tool is commonly used for distributed version control?',
  options: [
    'Microsoft Paint',
    'Git',
    'Calculator',
    'Notepad as a calculator'
  ],
  a: 1,
  explanation: 'Git tracks changes to files and supports collaborative software development.'
},
{
  id: 1188,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software project management concerned with?',
  options: [
    'Only selecting a programming font',
    'Avoiding deadlines',
    'Planning, organizing, monitoring, and controlling project work',
    'Removing all project objectives'
  ],
  a: 2,
  explanation: 'Project management coordinates scope, time, cost, resources, risks, and progress.'
},
{
  id: 1189,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which three constraints are commonly represented by the project management triangle?',
  options: [
    'Keyboard, mouse, and monitor',
    'Input, output, and storage',
    'Classes, objects, and methods',
    'Scope, time, and cost'
  ],
  a: 3,
  explanation: 'The traditional project triangle relates scope, schedule, and cost.'
},
{
  id: 1190,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is risk management in a software project?',
  options: [
    'Identifying, analyzing, and responding to project risks',
    'Ignoring possible problems',
    'Removing all project planning',
    'Guaranteeing that changes never occur'
  ],
  a: 0,
  explanation: 'Risk management identifies uncertainties and plans responses to reduce their impact.'
},
{
  id: 1191,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What does software quality assurance (SQA) aim to do?',
  options: [
    'Guarantee zero cost for every project',
    'Provide confidence that processes and products meet quality requirements',
    'Replace every developer',
    'Eliminate the need for requirements'
  ],
  a: 1,
  explanation: 'SQA promotes appropriate processes and standards to help achieve required software quality.'
},
{
  id: 1192,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'A software review that does not require program execution is an example of:',
  options: [
    'Dynamic testing',
    'Load testing',
    'Static verification',
    'Acceptance deployment'
  ],
  a: 2,
  explanation: 'Static verification examines artifacts such as code or requirements without executing the program.'
},
{
  id: 1193,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is Agile software development?',
  options: [
    'A process that forbids customer feedback',
    'A process that requires all changes to be rejected',
    'A single final delivery with no iteration',
    'An iterative approach emphasizing collaboration and adaptation'
  ],
  a: 3,
  explanation: 'Agile methods encourage iterative delivery, collaboration, feedback, and responding to change.'
},
{
  id: 1194,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'In Scrum, what is a Sprint?',
  options: [
    'A fixed-length period for completing a selected amount of work',
    'A database table',
    'A programming language',
    'A type of computer memory'
  ],
  a: 0,
  explanation: 'A Sprint is a fixed-length Scrum event in which a team works toward a Sprint Goal.'
},
{
  id: 1195,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Who is responsible for maximizing product value in Scrum?',
  options: [
    'Every end user individually',
    'The Product Owner',
    'The compiler',
    'The database server'
  ],
  a: 1,
  explanation: 'The Product Owner is accountable for maximizing the value of the product.'
},
{
  id: 1196,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is a software metric?',
  options: [
    'A user password',
    'A type of operating system',
    'A quantitative measure of a software attribute',
    'A programming error by definition'
  ],
  a: 2,
  explanation: 'Metrics quantify attributes such as size, complexity, defects, or development effort.'
},
{
  id: 1197,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What does software portability mean?',
  options: [
    'The software must be very large',
    'The software cannot be modified',
    'The software only works on one machine',
    'The software can be transferred to other environments with limited effort'
  ],
  a: 3,
  explanation: 'Portability describes how easily software can be adapted to different environments.'
},
{
  id: 1198,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which characteristic describes software that is easy to modify and maintain?',
  options: [
    'Maintainability',
    'Portability only',
    'Hardware compatibility only',
    'Network bandwidth'
  ],
  a: 0,
  explanation: 'Maintainability measures how easily software can be corrected, adapted, or improved.'
},
{
  id: 1199,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'What is software reusability?',
  options: [
    'Deleting old modules',
    'Using existing software components in other applications',
    'Rewriting every component from scratch',
    'Avoiding modular design'
  ],
  a: 1,
  explanation: 'Reusability allows existing components or designs to be used in multiple systems.'
},
{
  id: 1200,
  branch: 'CSE',
  topic: 'Software Engineering',
  semester: 'Semester 4',
  subject: 'Software Engineering',
  q: 'Which activity helps ensure software meets specified requirements before release?',
  options: [
    'Removing the test plan',
    'Skipping reviews',
    'Verification and validation',
    'Ignoring reported defects'
  ],
  a: 2,
  explanation: 'Verification checks whether the product is built correctly, while validation checks whether it meets user needs.'
},

{
  id: 1201, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What does HTML stand for?',
  options: ['HyperText Markup Language', 'HighText Machine Language', 'Hyper Transfer Main Language', 'Home Tool Markup Language'],
  a: 0, explanation: 'HTML defines the structure of web pages.'
},
{
  id: 1202, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element creates a hyperlink?',
  options: ['<link>', '<a>', '<href>', '<url>'],
  a: 1, explanation: 'The anchor element uses the href attribute to link to a destination.'
},
{
  id: 1203, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element inserts an image?',
  options: ['<picturefile>', '<image>', '<img>', '<src>'],
  a: 2, explanation: 'The img element displays an image using its src attribute.'
},
{
  id: 1204, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS property changes text color?',
  options: ['font-style', 'background-color', 'text-size', 'color'],
  a: 3, explanation: 'The color property sets the foreground color of text.'
},
{
  id: 1205, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS selector targets an element with id="header"?',
  options: ['#header', '.header', '*header', 'header#'],
  a: 0, explanation: 'The # selector targets an element by its ID.'
},
{
  id: 1206, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS selector targets elements with class="card"?',
  options: ['#card', '.card', 'card()', '@card'],
  a: 1, explanation: 'A dot followed by the class name selects elements with that class.'
},
{
  id: 1207, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS property controls space inside an element border?',
  options: ['margin', 'border-spacing', 'padding', 'outline'],
  a: 2, explanation: 'Padding is the space between content and its border.'
},
{
  id: 1208, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS property controls space outside an element border?',
  options: ['padding', 'content', 'gap-only', 'margin'],
  a: 3, explanation: 'Margin creates space outside an element border.'
},
{
  id: 1209, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element creates an unordered list?',
  options: ['<ul>', '<ol>', '<li>', '<dl>'],
  a: 0, explanation: 'The ul element creates a bulleted list.'
},
{
  id: 1210, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element creates a table row?',
  options: ['<td>', '<tr>', '<th>', '<table-row>'],
  a: 1, explanation: 'The tr element defines a table row.'
},
{
  id: 1211, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which attribute provides alternative text for an image?',
  options: ['title-only', 'href', 'alt', 'target'],
  a: 2, explanation: 'The alt attribute provides a text alternative for an image.'
},
{
  id: 1212, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element is used for JavaScript code?',
  options: ['<javascript>', '<codejs>', '<js>', '<script>'],
  a: 3, explanation: 'The script element embeds or references JavaScript.'
},
{
  id: 1213, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which JavaScript keyword declares a block-scoped variable that can be reassigned?',
  options: ['let', 'const', 'fixed', 'define'],
  a: 0, explanation: 'let declares a block-scoped variable that can be reassigned.'
},
{
  id: 1214, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which JavaScript operator checks strict equality?',
  options: ['=', '===', '!=', '=>'],
  a: 1, explanation: '=== compares values without performing type coercion.'
},
{
  id: 1215, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which method selects an element by its ID?',
  options: ['getElementsByClass()', 'queryById()', 'getElementById()', 'selectId()'],
  a: 2, explanation: 'document.getElementById() selects an element using its ID.'
},
{
  id: 1216, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which event occurs when a user clicks an element?',
  options: ['onload', 'onchange-only', 'onhover', 'click'],
  a: 3, explanation: 'The click event is triggered when the user clicks an element.'
},
{
  id: 1217, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which method converts a JSON string into a JavaScript value?',
  options: ['JSON.parse()', 'JSON.stringify()', 'JSON.convert()', 'JSON.read()'],
  a: 0, explanation: 'JSON.parse() parses a valid JSON string.'
},
{
  id: 1218, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which method converts a JavaScript value into a JSON string?',
  options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.decode()'],
  a: 1, explanation: 'JSON.stringify() serializes a JavaScript value as JSON text.'
},
{
  id: 1219, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTTP method is commonly used to retrieve a resource?',
  options: ['POST', 'DELETE', 'GET', 'PATCH'],
  a: 2, explanation: 'GET requests a representation of a resource.'
},
{
  id: 1220, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTTP status code means the request succeeded?',
  options: ['404', '500', '301', '200'],
  a: 3, explanation: '200 OK indicates that an HTTP request succeeded.'
},
{
  id: 1221, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What does CSS stand for?',
  options: ['Cascading Style Sheets', 'Computer Styled Syntax', 'Creative System Software', 'Colorful Style System'],
  a: 0, explanation: 'CSS means Cascading Style Sheets.'
},
{
  id: 1222, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS layout system is designed for one-dimensional layouts?',
  options: ['SQL', 'Flexbox', 'XML', 'FTP'],
  a: 1, explanation: 'Flexbox is designed primarily for arranging items along one axis.'
},
{
  id: 1223, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS layout system is well suited to two-dimensional rows and columns?',
  options: ['Float only', 'Inline only', 'CSS Grid', 'Text decoration'],
  a: 2, explanation: 'CSS Grid manages layouts across rows and columns.'
},
{
  id: 1224, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML attribute makes a form field mandatory?',
  options: ['validate', 'must', 'needed', 'required'],
  a: 3, explanation: 'The required attribute enables built-in form validation for a required field.'
},
{
  id: 1225, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which input type is intended for email addresses?',
  options: ['email', 'mailbox', 'textmail', 'address'],
  a: 0, explanation: 'input type="email" provides browser-level email-format validation.'
},
{
  id: 1226, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What does DOM stand for?',
  options: ['Data Object Mode', 'Document Object Model', 'Digital Ordinance Method', 'Document Output Machine'],
  a: 1, explanation: 'The DOM represents an HTML document as a tree of objects.'
},
{
  id: 1227, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which keyword declares a variable that cannot be reassigned?',
  options: ['var', 'let', 'const', 'mutable'],
  a: 2, explanation: 'const prevents reassignment of the binding, although object contents may still change.'
},
{
  id: 1228, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which JavaScript structure repeats code while a condition is true?',
  options: ['switch only', 'if only', 'try-catch', 'while loop'],
  a: 3, explanation: 'A while loop repeats its body while its condition remains true.'
},
{
  id: 1229, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What is the purpose of a JavaScript function?',
  options: ['To define reusable behavior', 'To create only HTML tags', 'To style only CSS files', 'To replace the web server'],
  a: 0, explanation: 'Functions package reusable instructions that can be called when needed.'
},
{
  id: 1230, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which method adds an item to the end of a JavaScript array?',
  options: ['shift()', 'push()', 'pop()', 'unshift()'],
  a: 1, explanation: 'push() appends one or more elements to an array.'
},
{
  id: 1231, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS unit is relative to the root element font size?',
  options: ['px', 'cm', 'rem', 'pt'],
  a: 2, explanation: 'rem is relative to the computed font size of the root element.'
},
{
  id: 1232, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What is responsive web design?',
  options: ['Design for one fixed screen only', 'Design without CSS', 'Design only for printers', 'Design that adapts to different screen sizes'],
  a: 3, explanation: 'Responsive design adapts layouts to different devices and viewport sizes.'
},
{
  id: 1233, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS feature applies styles based on viewport conditions?',
  options: ['Media queries', 'Database queries', 'SQL joins', 'HTML comments'],
  a: 0, explanation: 'CSS media queries apply rules based on conditions such as viewport width.'
},
{
  id: 1234, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What does API stand for?',
  options: ['Application Program Internet', 'Application Programming Interface', 'Advanced Page Input', 'Automated Program Installation'],
  a: 1, explanation: 'An API defines how software components communicate.'
},
{
  id: 1235, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which protocol provides encrypted communication for websites?',
  options: ['HTTP without encryption', 'FTP', 'HTTPS', 'Telnet'],
  a: 2, explanation: 'HTTPS uses TLS to protect HTTP communication.'
},
{
  id: 1236, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What is the primary role of a web browser?',
  options: ['Compile every server program', 'Replace all databases', 'Manufacture network hardware', 'Request and render web content'],
  a: 3, explanation: 'Browsers request web resources and render documents and interfaces.'
},
{
  id: 1237, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element represents the main navigation section?',
  options: ['<nav>', '<navigate>', '<links>', '<menuurl>'],
  a: 0, explanation: 'The nav element represents a section of navigation links.'
},
{
  id: 1238, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which attribute specifies a destination URL for a hyperlink?',
  options: ['src', 'href', 'alt', 'rel-only'],
  a: 1, explanation: 'The href attribute specifies the hyperlink destination.'
},
{
  id: 1239, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which JavaScript method registers an event listener?',
  options: ['addStyle()', 'createEventOnly()', 'addEventListener()', 'listenHTML()'],
  a: 2, explanation: 'addEventListener() attaches a handler for a specified event.'
},
{
  id: 1240, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What is the purpose of localStorage in a browser?',
  options: ['Store data only on a remote server', 'Execute SQL on every website', 'Replace HTML', 'Persist key-value data across browser sessions'],
  a: 3, explanation: 'localStorage stores string key-value pairs for an origin across sessions.'
},
{
  id: 1241, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element provides a caption or heading for a table?',
  options: ['<caption>', '<summary-row>', '<thead-title>', '<tablehead>'],
  a: 0, explanation: 'The caption element provides a title or caption for a table.'
},
{
  id: 1242, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which CSS property rounds the corners of an element?',
  options: ['corner-style', 'border-radius', 'round-edge', 'border-shape'],
  a: 1, explanation: 'border-radius controls the rounding of element corners.'
},
{
  id: 1243, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTTP method is commonly used to submit data to create a resource?',
  options: ['GET', 'HEAD', 'POST', 'OPTIONS'],
  a: 2, explanation: 'POST commonly submits data that may result in creating or processing a resource.'
},
{
  id: 1244, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which status code indicates that a requested resource was not found?',
  options: ['200', '201', '302', '404'],
  a: 3, explanation: 'HTTP 404 indicates that the requested resource could not be found.'
},
{
  id: 1245, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which HTML element is used for a paragraph?',
  options: ['<p>', '<para>', '<textblock>', '<paragraph>'],
  a: 0, explanation: 'The p element represents a paragraph.'
},
{
  id: 1246, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which JavaScript array method creates a new array by transforming each item?',
  options: ['pop()', 'map()', 'push()', 'reverse()'],
  a: 1, explanation: 'map() applies a callback to each array element and returns a new array.'
},
{
  id: 1247, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What does CSS z-index help control?',
  options: ['Text spelling', 'Database size', 'Stacking order of positioned elements', 'HTTP encryption'],
  a: 2, explanation: 'z-index controls stacking order within the relevant stacking context.'
},
{
  id: 1248, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which practice improves accessibility for form controls?',
  options: ['Removing all labels', 'Using color as the only instruction', 'Making every input invisible', 'Providing associated labels'],
  a: 3, explanation: 'Labels help users and assistive technologies understand form controls.'
},
{
  id: 1249, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'What is the purpose of browser developer tools?',
  options: ['Inspect, debug, and analyze web pages', 'Replace the operating system', 'Create physical network cables', 'Automatically write all requirements'],
  a: 0, explanation: 'Developer tools help inspect HTML, CSS, JavaScript, network requests, and performance.'
},
{
  id: 1250, branch: 'CSE', topic: 'Web Technology', semester: 'Semester 5', subject: 'Web Technology (HTML, CSS, JavaScript)',
  q: 'Which attribute helps make an image load only when it is near the viewport?',
  options: ['loading="never"', 'loading="lazy"', 'src="defer"', 'image="async-only"'],
  a: 1, explanation: 'loading="lazy" allows the browser to defer loading off-screen images.'
},

{
  id: 1251, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is an algorithm?',
  options: ['A computer component', 'A programming language only', 'A finite sequence of steps to solve a problem', 'A storage device'],
  a: 2, explanation: 'An algorithm is a well-defined finite procedure for solving a problem.'
},
{
  id: 1252, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What does time complexity describe?',
  options: ['The physical age of a computer', 'The number of developers', 'The screen resolution', 'How running time grows with input size'],
  a: 3, explanation: 'Time complexity describes how an algorithm’s running time scales with input size.'
},
{
  id: 1253, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What does O(n) commonly represent?',
  options: ['Linear growth', 'Constant growth', 'Quadratic growth', 'Exponential growth'],
  a: 0, explanation: 'Linear time grows proportionally to the input size.'
},
{
  id: 1254, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the time complexity of binary search on a sorted array?',
  options: ['O(n)', 'O(log n)', 'O(n²)', 'O(2ⁿ)'],
  a: 1, explanation: 'Binary search halves the remaining search interval at each step.'
},
{
  id: 1255, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithmic technique solves a problem by dividing it into smaller subproblems?',
  options: ['Random storage', 'Linear scanning only', 'Divide and conquer', 'Manual compilation'],
  a: 2, explanation: 'Divide and conquer divides a problem, solves subproblems, and combines their results.'
},
{
  id: 1256, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which sorting algorithm repeatedly selects the smallest remaining element?',
  options: ['Merge sort', 'Quick sort', 'Heap sort', 'Selection sort'],
  a: 3, explanation: 'Selection sort repeatedly selects the minimum element from the unsorted part.'
},
{
  id: 1257, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the average time complexity of merge sort?',
  options: ['O(n log n)', 'O(n²)', 'O(log n)', 'O(1)'],
  a: 0, explanation: 'Merge sort has O(n log n) time complexity in its standard analysis.'
},
{
  id: 1258, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the worst-case time complexity of standard quicksort?',
  options: ['O(1)', 'O(n²)', 'O(log n)', 'O(n) always'],
  a: 1, explanation: 'Highly unbalanced partitions can make quicksort take quadratic time.'
},
{
  id: 1259, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which sorting algorithm is generally efficient for nearly sorted small arrays?',
  options: ['Radix sort in every case', 'Selection sort in every case', 'Insertion sort', 'Bogosort'],
  a: 2, explanation: 'Insertion sort performs well on small or nearly sorted inputs.'
},
{
  id: 1260, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which data structure is commonly used to implement a priority queue for heapsort?',
  options: ['Stack only', 'Queue only', 'Linked list only', 'Binary heap'],
  a: 3, explanation: 'A binary heap supports efficient extraction of the maximum or minimum element.'
},
{
  id: 1261, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which notation describes an asymptotic upper bound?',
  options: ['Big O', 'Big Omega only', 'Big Theta only', 'Little omega only'],
  a: 0, explanation: 'Big O gives an asymptotic upper bound on growth.'
},
{
  id: 1262, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which notation describes an asymptotic lower bound?',
  options: ['Big O', 'Big Omega', 'Big Theta only', 'Big Delta'],
  a: 1, explanation: 'Big Omega describes an asymptotic lower bound.'
},
{
  id: 1263, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What does Big Theta notation describe?',
  options: ['Only a lower bound', 'Only an upper bound', 'A tight asymptotic bound', 'A programming error'],
  a: 2, explanation: 'Big Theta bounds growth both above and below asymptotically.'
},
{
  id: 1264, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which technique stores results of overlapping subproblems?',
  options: ['Brute force only', 'Linear search only', 'Random guessing', 'Dynamic programming'],
  a: 3, explanation: 'Dynamic programming saves subproblem results to avoid repeated computation.'
},
{
  id: 1265, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which method chooses the best local option at each step?',
  options: ['Greedy algorithm', 'Exhaustive enumeration always', 'Backtracking only', 'Hashing'],
  a: 0, explanation: 'Greedy algorithms make locally optimal choices according to a strategy.'
},
{
  id: 1266, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which problem is commonly solved using dynamic programming?',
  options: ['Printing a single character', '0/1 Knapsack problem', 'Reading one constant', 'Renaming a file'],
  a: 1, explanation: 'The 0/1 Knapsack problem can be solved using dynamic programming.'
},
{
  id: 1267, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm finds shortest paths from one source in a graph with non-negative edge weights?',
  options: ['Prim’s algorithm', 'Kruskal’s algorithm', 'Dijkstra’s algorithm', 'Binary search'],
  a: 2, explanation: 'Dijkstra’s algorithm solves the single-source shortest-path problem for non-negative edge weights.'
},
{
  id: 1268, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm computes shortest paths even when some edges have negative weights, provided there is no reachable negative cycle?',
  options: ['Prim’s algorithm', 'Heap sort', 'Binary search', 'Bellman-Ford algorithm'],
  a: 3, explanation: 'Bellman-Ford handles negative edge weights and can detect reachable negative cycles.'
},
{
  id: 1269, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm finds a minimum spanning tree using sorted edges?',
  options: 'Kruskal algorithm;Prim algorithm;Dijkstra algorithm;Floyd algorithm'.split(';'),
  a: 0, explanation: 'Kruskal’s algorithm considers edges in increasing weight order while avoiding cycles.'
},
{
  id: 1270, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm grows a minimum spanning tree from a starting vertex?',
  options: ['KMP', 'Prim’s algorithm', 'Binary search', 'Merge sort'],
  a: 1, explanation: 'Prim’s algorithm repeatedly adds a minimum-weight edge connecting the tree to a new vertex.'
},
{
  id: 1271, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the worst-case time complexity of linear search?',
  options: ['O(log n)', 'O(1) always', 'O(n)', 'O(n log n)'],
  a: 2, explanation: 'Linear search may inspect every element before finding a target or concluding it is absent.'
},
{
  id: 1272, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which technique explores choices and abandons a path when it cannot lead to a solution?',
  options: ['Merge sort', 'Hashing', 'Greedy selection only', 'Backtracking'],
  a: 3, explanation: 'Backtracking explores possible choices and returns when a partial solution is invalid.'
},
{
  id: 1273, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'The N-Queens problem is commonly approached using:',
  options: ['Backtracking', 'Binary search only', 'Counting sort only', 'Hashing only'],
  a: 0, explanation: 'Backtracking places queens while rejecting arrangements that violate constraints.'
},
{
  id: 1274, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the worst-case time complexity of bubble sort?',
  options: ['O(log n)', 'O(n²)', 'O(n log n)', 'O(1)'],
  a: 1, explanation: 'Bubble sort performs a quadratic number of comparisons in its worst case.'
},
{
  id: 1275, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithmic paradigm is used by merge sort?',
  options: ['Greedy only', 'Backtracking only', 'Divide and conquer', 'Randomized search only'],
  a: 2, explanation: 'Merge sort divides the array, recursively sorts parts, and merges them.'
},
{
  id: 1276, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the purpose of a recurrence relation in algorithm analysis?',
  options: ['To define a user interface', 'To store passwords', 'To specify network addresses', 'To express running time in terms of smaller inputs'],
  a: 3, explanation: 'Recurrences describe the cost of recursive algorithms using smaller problem sizes.'
},
{
  id: 1277, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which theorem is often used to solve divide-and-conquer recurrences?',
  options: ['Master Theorem', 'Bayes theorem only', 'Pythagorean theorem', 'De Morgan law only'],
  a: 0, explanation: 'The Master Theorem solves many recurrences of divide-and-conquer algorithms.'
},
{
  id: 1278, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which problem asks whether a subset sums to a specified target?',
  options: ['Travelling Salesperson only', 'Subset Sum', 'Topological sorting', 'String matching only'],
  a: 1, explanation: 'Subset Sum asks whether some subset of given numbers totals a target value.'
},
{
  id: 1279, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which graph traversal typically uses a queue?',
  options: ['Depth-first search', 'Recursive binary search', 'Breadth-first search', 'Heap construction'],
  a: 2, explanation: 'Breadth-first search uses a queue to visit vertices level by level.'
},
{
  id: 1280, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which graph traversal commonly uses a stack or recursion?',
  options: ['Breadth-first search', 'Counting sort', 'Radix sort', 'Depth-first search'],
  a: 3, explanation: 'Depth-first search explores a path deeply before backtracking.'
},
{
  id: 1281, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'A topological ordering exists for which type of graph?',
  options: ['Directed acyclic graph', 'Every undirected graph', 'Every cyclic directed graph', 'A graph with no vertices only'],
  a: 0, explanation: 'A directed acyclic graph (DAG) admits a topological ordering.'
},
{
  id: 1282, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which technique is useful for finding all permutations of a set?',
  options: ['Binary search only', 'Backtracking', 'Dijkstra only', 'Merge only'],
  a: 1, explanation: 'Backtracking can generate permutations by building arrangements incrementally.'
},
{
  id: 1283, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the main goal of hashing?',
  options: ['Sort every input', 'Traverse a graph', 'Map keys to locations for efficient lookup', 'Compress all source code'],
  a: 2, explanation: 'Hashing maps keys to table positions to support efficient lookup on average.'
},
{
  id: 1284, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is a collision in a hash table?',
  options: ['An array becomes sorted', 'A key is deleted', 'A program compiles', 'Two keys map to the same table location'],
  a: 3, explanation: 'A collision occurs when multiple keys map to the same hash-table slot.'
},
{
  id: 1285, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which method resolves hash collisions by storing multiple entries in a bucket structure?',
  options: ['Separate chaining', 'Binary search', 'Merge sort', 'Topological sorting'],
  a: 0, explanation: 'Separate chaining stores colliding entries in a list or another bucket structure.'
},
{
  id: 1286, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the space complexity of an algorithm?',
  options: ['Only the number of CPU cores', 'How memory usage grows with input size', 'Only execution time', 'The number of users'],
  a: 1, explanation: 'Space complexity describes memory requirements as input size changes.'
},
{
  id: 1287, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm finds all-pairs shortest paths using dynamic programming?',
  options: ['Prim', 'Kruskal', 'Floyd-Warshall', 'Selection sort'],
  a: 2, explanation: 'Floyd-Warshall computes shortest paths between every pair of vertices.'
},
{
  id: 1288, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which problem is a classic example of an NP-complete decision problem?',
  options: ['Finding the maximum of an unsorted array', 'Adding two integers', 'Checking a single array index', 'Boolean satisfiability (SAT)'],
  a: 3, explanation: 'SAT was the first problem proved NP-complete.'
},
{
  id: 1289, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'A problem belongs to NP if a proposed solution can be:',
  options: ['Verified in polynomial time', 'Always solved in constant time', 'Solved only by sorting', 'Stored without memory'],
  a: 0, explanation: 'NP contains decision problems whose proposed solutions can be verified in polynomial time.'
},
{
  id: 1290, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is an approximation algorithm designed to do?',
  options: ['Always return an arbitrary answer', 'Find a near-optimal solution for difficult optimization problems', 'Replace all data structures', 'Guarantee exact optimality for every problem'],
  a: 1, explanation: 'Approximation algorithms provide solutions with a bounded or analyzed quality guarantee.'
},
{
  id: 1291, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which data structure supports efficient retrieval of the highest-priority element?',
  options: ['Plain unsorted text', 'Stack in every case', 'Priority queue', 'Graph adjacency matrix only'],
  a: 2, explanation: 'A priority queue returns an element according to its priority.'
},
{
  id: 1292, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which sorting algorithm is stable in its standard implementation?',
  options: ['Heap sort', 'Selection sort in its usual form', 'Quicksort in its usual form', 'Merge sort'],
  a: 3, explanation: 'Standard merge sort can preserve the relative order of equal elements.'
},
{
  id: 1293, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm is commonly used to match a pattern in a text efficiently?',
  options: ['Knuth-Morris-Pratt (KMP)', 'Prim', 'Kruskal', 'Heap construction'],
  a: 0, explanation: 'KMP uses a prefix table to avoid unnecessary repeated comparisons.'
},
{
  id: 1294, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the worst-case time complexity of KMP pattern matching?',
  options: ['O(nm)', 'O(n + m)', 'O(2ⁿ)', 'O(n²m)'],
  a: 1, explanation: 'KMP processes the text and pattern in linear time, O(n + m).'
},
{
  id: 1295, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithm finds a minimum spanning tree by repeatedly selecting a safe minimum-weight edge?',
  options: ['Binary search', 'Floyd-Warshall', 'Prim or Kruskal', 'KMP only'],
  a: 2, explanation: 'Both Prim’s and Kruskal’s algorithms construct minimum spanning trees using safe edges.'
},
{
  id: 1296, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the average time complexity of quicksort with reasonably balanced partitions?',
  options: ['O(n²)', 'O(2ⁿ)', 'O(1)', 'O(n log n)'],
  a: 3, explanation: 'Balanced partitions lead to O(n log n) average running time.'
},
{
  id: 1297, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which approach explores a solution space by making a sequence of choices and undoing choices when necessary?',
  options: ['Backtracking', 'Simple printing', 'Linear output', 'Compilation'],
  a: 0, explanation: 'Backtracking explores partial solutions and reverses choices when a path fails.'
},
{
  id: 1298, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which of these has the slowest asymptotic growth as n becomes large?',
  options: ['O(n²)', 'O(log n)', 'O(n log n)', 'O(n)'],
  a: 1, explanation: 'Logarithmic growth is slower than linear and polynomial growth.'
},
{
  id: 1299, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'What is the primary purpose of algorithm analysis?',
  options: ['Choose variable names only', 'Determine screen colors', 'Estimate resource requirements as input grows', 'Remove all input data'],
  a: 2, explanation: 'Algorithm analysis evaluates resource use, commonly time and space.'
},
{
  id: 1300, branch: 'CSE', topic: 'DAA', semester: 'Semester 5', subject: 'Design and Analysis of Algorithms',
  q: 'Which algorithmic approach is most appropriate when subproblems overlap and their results can be reused?',
  options: ['Random guessing', 'Selection sort only', 'Repeated full recomputation', 'Dynamic programming'],
  a: 3, explanation: 'Dynamic programming reuses stored results for overlapping subproblems.'
},

{
  id: 1301, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is Artificial Intelligence?',
  options: ['The study of systems that perform tasks requiring intelligent behavior', 'Only computer hardware repair', 'Only data entry', 'A type of monitor'],
  a: 0, explanation: 'AI develops systems capable of tasks such as reasoning, learning, and perception.'
},
{
  id: 1302, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which of the following is a common AI application?',
  options: ['A passive cable', 'Speech recognition', 'A plain power switch', 'A basic resistor'],
  a: 1, explanation: 'Speech recognition uses AI techniques to interpret spoken language.'
},
{
  id: 1303, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is an intelligent agent?',
  options: ['A storage drive only', 'A program that cannot receive inputs', 'An entity that perceives its environment and acts on it', 'A printer cable'],
  a: 2, explanation: 'An agent perceives through sensors and acts through actuators or equivalent mechanisms.'
},
{
  id: 1304, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What does PEAS stand for in agent task specification?',
  options: ['Program, Engine, Algorithm, System', 'Plan, Execute, Act, Solve', 'Performance, Environment, Action, Search', 'Performance measure, Environment, Actuators, Sensors'],
  a: 3, explanation: 'PEAS specifies the performance measure, environment, actuators, and sensors.'
},
{
  id: 1305, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which search algorithm explores the shallowest nodes first?',
  options: ['Breadth-first search', 'Depth-first search', 'Hill climbing only', 'Random walk only'],
  a: 0, explanation: 'Breadth-first search explores nodes level by level.'
},
{
  id: 1306, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which search strategy explores a branch deeply before backtracking?',
  options: ['Breadth-first search', 'Depth-first search', 'Uniform-cost search only', 'Binary classification'],
  a: 1, explanation: 'Depth-first search follows one path deeply before exploring alternatives.'
},
{
  id: 1307, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is a heuristic in AI search?',
  options: ['A guaranteed exact solution for every problem', 'A hardware component', 'A rule or estimate that guides search', 'A database backup'],
  a: 2, explanation: 'A heuristic estimates which states may lead more directly to a goal.'
},
{
  id: 1308, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which search algorithm uses both path cost and a heuristic estimate?',
  options: ['Depth-first search', 'Breadth-first search', 'Simple linear scan', 'A* search'],
  a: 3, explanation: 'A* evaluates nodes using f(n) = g(n) + h(n).'
},
{
  id: 1309, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'In A* search, what does g(n) represent?',
  options: ['The cost from the start to node n', 'The estimated cost to the goal only', 'The number of AI models', 'The branching factor only'],
  a: 0, explanation: 'g(n) is the path cost accumulated from the start node to n.'
},
{
  id: 1310, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'In A* search, what does h(n) represent?',
  options: ['The exact cost already paid', 'An estimated remaining cost to the goal', 'The total number of states', 'The memory address'],
  a: 1, explanation: 'h(n) estimates the remaining cost from node n to a goal.'
},
{
  id: 1311, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which algorithm is commonly used for two-player adversarial games?',
  options: ['Merge sort', 'Dijkstra only', 'Minimax', 'Linear regression only'],
  a: 2, explanation: 'Minimax selects moves by considering optimal play by both players.'
},
{
  id: 1312, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is the purpose of alpha-beta pruning?',
  options: ['Increase the number of evaluated game states', 'Train every neural network', 'Sort training data', 'Reduce minimax search without changing its result'],
  a: 3, explanation: 'Alpha-beta pruning skips branches that cannot affect the minimax decision.'
},
{
  id: 1313, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is machine learning?',
  options: ['A field where systems learn patterns from data', 'Manual typing only', 'A type of computer screen', 'A networking cable'],
  a: 0, explanation: 'Machine learning enables systems to learn patterns from data or experience.'
},
{
  id: 1314, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which type of learning uses labeled examples?',
  options: ['Unsupervised learning', 'Supervised learning', 'Random storage', 'Manual sorting only'],
  a: 1, explanation: 'Supervised learning trains on examples with known target labels or values.'
},
{
  id: 1315, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which type of learning seeks patterns in data without target labels?',
  options: ['Supervised learning', 'Reinforcement learning only', 'Unsupervised learning', 'Compilation'],
  a: 2, explanation: 'Unsupervised learning discovers structure in unlabeled data.'
},
{
  id: 1316, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which learning paradigm uses rewards or penalties from interaction?',
  options: ['Supervised learning only', 'Static analysis', 'Database normalization', 'Reinforcement learning'],
  a: 3, explanation: 'Reinforcement learning improves behavior through rewards and interaction with an environment.'
},
{
  id: 1317, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which task predicts a discrete category?',
  options: ['Classification', 'Regression', 'Sorting files', 'Compression only'],
  a: 0, explanation: 'Classification predicts labels such as spam or not spam.'
},
{
  id: 1318, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which task predicts a continuous numeric value?',
  options: ['Classification', 'Regression', 'Clustering only', 'Tokenization'],
  a: 1, explanation: 'Regression predicts numeric quantities such as price or temperature.'
},
{
  id: 1319, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is overfitting?',
  options: ['A model performs equally well on every possible dataset', 'A model has no parameters', 'A model fits training data too closely and generalizes poorly', 'A dataset contains no examples'],
  a: 2, explanation: 'Overfitting occurs when a model captures training-specific details that do not generalize.'
},
{
  id: 1320, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Why is a test dataset used in machine learning?',
  options: ['To train on every answer repeatedly', 'To replace the training data', 'To store source code', 'To evaluate performance on unseen examples'],
  a: 3, explanation: 'Test data estimates how well a trained model generalizes to unseen examples.'
},
{
  id: 1321, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is a neural network loosely inspired by?',
  options: ['Networks of biological neurons', 'Printer mechanics', 'File directories', 'Keyboard layouts'],
  a: 0, explanation: 'Artificial neural networks are computational models loosely inspired by biological neural systems.'
},
{
  id: 1322, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is the purpose of an activation function in a neural network?',
  options: ['Store image files', 'Introduce non-linearity into the model', 'Connect to Wi-Fi', 'Replace training data'],
  a: 1, explanation: 'Activation functions allow neural networks to model nonlinear relationships.'
},
{
  id: 1323, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which algorithm commonly updates neural network weights using gradients?',
  options: ['Binary search', 'Kruskal algorithm', 'Gradient descent', 'Breadth-first search'],
  a: 2, explanation: 'Gradient descent adjusts parameters in the direction that reduces the loss.'
},
{
  id: 1324, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is the role of a loss function?',
  options: ['Format a user interface', 'Create network cables', 'Choose a file name', 'Measure prediction error according to a defined objective'],
  a: 3, explanation: 'A loss function quantifies prediction error for model optimization.'
},
{
  id: 1325, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is natural language processing (NLP)?',
  options: ['AI methods for working with human language', 'A hardware repair technique', 'A database engine only', 'A type of monitor'],
  a: 0, explanation: 'NLP enables computers to process and generate human language.'
},
{
  id: 1326, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which is an NLP task?',
  options: ['Changing a CPU fan', 'Sentiment analysis', 'Formatting a hard drive', 'Connecting a mouse'],
  a: 1, explanation: 'Sentiment analysis identifies opinions or emotional polarity in text.'
},
{
  id: 1327, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is computer vision?',
  options: ['A technique for sorting integers only', 'A database query language', 'AI methods for interpreting images and video', 'A file compression format'],
  a: 2, explanation: 'Computer vision extracts useful information from images and video.'
},
{
  id: 1328, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which representation expresses facts and relationships using entities and links?',
  options: ['Plain arithmetic only', 'A screen layout', 'A sorting array only', 'Knowledge graph'],
  a: 3, explanation: 'Knowledge graphs represent entities and relationships in a graph structure.'
},
{
  id: 1329, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is an expert system?',
  options: ['A system that applies encoded domain knowledge to make recommendations or decisions', 'A basic text editor', 'A monitor calibration tool', 'A network cable tester only'],
  a: 0, explanation: 'Expert systems use a knowledge base and reasoning procedures to solve domain-specific problems.'
},
{
  id: 1330, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'In a rule-based expert system, what is the role of the inference engine?',
  options: ['Print documents only', 'Apply rules to known facts to derive conclusions', 'Store pixels only', 'Replace the user interface'],
  a: 1, explanation: 'The inference engine applies rules to facts to produce conclusions or recommendations.'
},
{
  id: 1331, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is knowledge representation in AI?',
  options: ['Saving only audio files', 'Building computer hardware', 'Representing facts and relationships in a form a system can use', 'Creating random passwords'],
  a: 2, explanation: 'Knowledge representation structures information for reasoning and problem solving.'
},
{
  id: 1332, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which logic uses propositions that are either true or false?',
  options: ['Fuzzy logic only', 'Temporal scheduling', 'Probability sampling', 'Propositional logic'],
  a: 3, explanation: 'Propositional logic represents statements with truth values and logical connectives.'
},
{
  id: 1333, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What does fuzzy logic allow?',
  options: ['Degrees of truth between fully false and fully true', 'Only integer arithmetic', 'Only exact binary sensors', 'Removal of all uncertainty'],
  a: 0, explanation: 'Fuzzy logic represents degrees of truth using values between 0 and 1.'
},
{
  id: 1334, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is an AI search state space?',
  options: ['Only the computer memory size', 'The set of possible states considered in solving a problem', 'The number of programming languages', 'The physical size of a robot'],
  a: 1, explanation: 'A state space contains the possible configurations and transitions relevant to a problem.'
},
{
  id: 1335, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which search algorithm expands the lowest path-cost node first?',
  options: ['Depth-first search', 'Random search', 'Uniform-cost search', 'Hill climbing only'],
  a: 2, explanation: 'Uniform-cost search expands the frontier node with the smallest accumulated path cost.'
},
{
  id: 1336, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which method repeatedly moves toward a better neighboring state using an evaluation function?',
  options: ['Breadth-first search only', 'Exhaustive enumeration only', 'Linear regression', 'Hill climbing'],
  a: 3, explanation: 'Hill climbing selects a better neighboring state and can become trapped at local optima.'
},
{
  id: 1337, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is the purpose of pruning in search?',
  options: ['Avoid exploring branches that cannot improve or affect the result', 'Increase all search paths', 'Delete the goal state', 'Convert every problem to regression'],
  a: 0, explanation: 'Pruning reduces unnecessary exploration and can save computation.'
},
{
  id: 1338, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which is a common application of recommendation systems?',
  options: ['Measuring CPU temperature only', 'Suggesting products or movies based on user preferences', 'Manufacturing a keyboard', 'Replacing a router'],
  a: 1, explanation: 'Recommendation systems suggest relevant items using user behavior, content, or both.'
},
{
  id: 1339, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What does training data provide to a machine-learning model?',
  options: ['Only operating system updates', 'Only source code comments', 'Examples used to learn model parameters or patterns', 'A guarantee of perfect accuracy'],
  a: 2, explanation: 'Training examples help a model learn patterns relevant to its task.'
},
{
  id: 1340, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Why is data preprocessing important?',
  options: ['It always increases data errors', 'It removes the need for evaluation', 'It replaces the learning algorithm', 'It prepares data by handling issues such as missing values and inconsistent formats'],
  a: 3, explanation: 'Preprocessing can improve data quality and make training more reliable.'
},
{
  id: 1341, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is clustering?',
  options: ['Grouping similar data points without predefined labels', 'Predicting only a known numeric target', 'Encrypting network traffic', 'Compiling source code'],
  a: 0, explanation: 'Clustering groups data points according to similarities or a distance measure.'
},
{
  id: 1342, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Which algorithm is commonly used for clustering?',
  options: ['Dijkstra', 'K-means', 'Merge sort', 'RSA'],
  a: 1, explanation: 'K-means partitions data into k clusters around learned centroids.'
},
{
  id: 1343, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is a confusion matrix used for?',
  options: ['Designing a database schema', 'Measuring network cable length', 'Summarizing classification predictions against actual labels', 'Creating HTML tables only'],
  a: 2, explanation: 'A confusion matrix counts correct and incorrect predictions for each class.'
},
{
  id: 1344, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Precision in classification is defined as:',
  options: ['TP divided by all actual positives', 'TN divided by all predictions', 'FP divided by all actual negatives', 'TP divided by TP plus FP'],
  a: 3, explanation: 'Precision = TP / (TP + FP), when the denominator is nonzero.'
},
{
  id: 1345, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Recall in classification is defined as:',
  options: ['TP divided by TP plus FN', 'TP divided by TP plus FP', 'TN divided by TN plus FP', 'FP divided by TP plus FN'],
  a: 0, explanation: 'Recall = TP / (TP + FN), when the denominator is nonzero.'
},
{
  id: 1346, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is an ethical concern when using AI systems?',
  options: ['Whether a variable is named x', 'Bias and unfair outcomes', 'Whether a file has a .txt extension', 'Whether a keyboard has a number pad'],
  a: 1, explanation: 'Biased data or design can lead to unfair or discriminatory AI outcomes.'
},
{
  id: 1347, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Why is explainability useful in AI?',
  options: ['It guarantees perfect accuracy', 'It eliminates all data requirements', 'It helps people understand why a system produced a result', 'It removes the need for monitoring'],
  a: 2, explanation: 'Explainability helps users and developers interpret model decisions and limitations.'
},
{
  id: 1348, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is transfer learning?',
  options: ['Moving files between folders only', 'Transferring power between devices', 'Changing a variable name', 'Reusing knowledge from a model trained on one task for another task'],
  a: 3, explanation: 'Transfer learning adapts representations or parameters learned from an earlier task.'
},
{
  id: 1349, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'What is a large language model primarily trained to learn?',
  options: ['Patterns in language data that support language-related tasks', 'Only electrical circuit diagrams', 'Only CPU scheduling', 'Only image file compression'],
  a: 0, explanation: 'Large language models learn statistical patterns in text or other language data.'
},
{
  id: 1350, branch: 'CSE', topic: 'AI', semester: 'Semester 5', subject: 'Artificial Intelligence',
  q: 'Why should AI model performance be evaluated on data not used for training?',
  options: ['To make training impossible', 'To estimate generalization to unseen data', 'To guarantee there are no errors', 'To avoid measuring performance'],
  a: 1, explanation: 'Evaluation on unseen data helps reveal whether a model generalizes beyond its training examples.'
},

{
  id: 1351, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the main purpose of a compiler?',
  options: ['Edit images', 'Manage computer hardware temperature', 'Translate a source program into another form, often machine code', 'Create network cables'],
  a: 2, explanation: 'A compiler translates source code into a target representation.'
},
{
  id: 1352, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which compiler phase converts a character stream into tokens?',
  options: ['Code generation', 'Optimization', 'Linking', 'Lexical analysis'],
  a: 3, explanation: 'Lexical analysis groups input characters into tokens.'
},
{
  id: 1353, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which compiler phase checks grammatical structure?',
  options: ['Syntax analysis', 'Code optimization only', 'Loading', 'Linking'],
  a: 0, explanation: 'Syntax analysis checks whether the token sequence follows the language grammar.'
},
{
  id: 1354, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the output of lexical analysis?',
  options: ['Machine registers only', 'A sequence of tokens', 'A finished executable in every compiler', 'A network packet'],
  a: 1, explanation: 'The lexer produces tokens such as identifiers, keywords, operators, and literals.'
},
{
  id: 1355, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which structure represents the grammatical structure of a program?',
  options: ['Hash table only', 'Stack trace only', 'Parse tree', 'Network graph only'],
  a: 2, explanation: 'A parse tree represents how grammar rules derive the input.'
},
{
  id: 1356, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is a grammar in compiler design?',
  options: ['A CPU component', 'A memory chip', 'A text editor', 'A set of rules describing valid language structures'],
  a: 3, explanation: 'A formal grammar defines the syntax of a language.'
},
{
  id: 1357, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'In a context-free grammar, what is a terminal symbol?',
  options: ['A symbol that appears in the derived input string', 'A variable that must always be expanded', 'A compiler error only', 'A hardware register'],
  a: 0, explanation: 'Terminals are the basic symbols of the language and are not expanded by grammar productions.'
},
{
  id: 1358, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What does a non-terminal represent in a grammar?',
  options: ['Only a punctuation mark', 'A syntactic category that can be expanded using productions', 'A finished machine instruction only', 'A disk partition'],
  a: 1, explanation: 'Non-terminals represent syntactic categories such as expressions or statements.'
},
{
  id: 1359, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which notation is commonly used to describe context-free grammar productions?',
  options: ['HTML', 'SQL', 'BNF', 'JPEG'],
  a: 2, explanation: 'Backus-Naur Form (BNF) is a notation for specifying grammar productions.'
},
{
  id: 1360, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which parsing approach starts from the start symbol and builds toward the input?',
  options: ['Bottom-up parsing', 'Lexical scanning only', 'Code linking', 'Top-down parsing'],
  a: 3, explanation: 'Top-down parsing begins with the start symbol and attempts to derive the input.'
},
{
  id: 1361, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which parsing approach builds larger structures from input symbols toward the start symbol?',
  options: ['Bottom-up parsing', 'Top-down parsing only', 'Lexical analysis only', 'Register allocation'],
  a: 0, explanation: 'Bottom-up parsing reduces input symbols and structures toward the start symbol.'
},
{
  id: 1362, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which parser is a common predictive top-down parser?',
  options: ['LR parser', 'LL(1) parser', 'Operator machine', 'Linker'],
  a: 1, explanation: 'LL(1) parsing reads left to right, builds a leftmost derivation, and uses one lookahead token.'
},
{
  id: 1363, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which parser family is commonly used for bottom-up parsing?',
  options: ['LL only', 'Recursive listing only', 'LR parsers', 'Lexical scanners only'],
  a: 2, explanation: 'LR parsers perform bottom-up parsing using shifts and reductions.'
},
{
  id: 1364, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is left recursion in a grammar?',
  options: ['A grammar with no productions', 'A rule that contains no terminals', 'A program loop only', 'A non-terminal can derive a string beginning with itself'],
  a: 3, explanation: 'A production such as A → Aα is directly left-recursive.'
},
{
  id: 1365, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Why is left recursion often removed for predictive parsing?',
  options: ['It can cause a top-down parser to recurse indefinitely', 'It makes every grammar regular', 'It removes all terminals', 'It guarantees shorter programs'],
  a: 0, explanation: 'A naive recursive-descent parser can repeatedly expand a left-recursive rule without consuming input.'
},
{
  id: 1366, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is left factoring used for?',
  options: ['Removing all grammar rules', 'Factoring common prefixes to help predictive parsing', 'Generating machine code directly', 'Allocating registers'],
  a: 1, explanation: 'Left factoring delays a choice when alternatives share a common prefix.'
},
{
  id: 1367, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which compiler phase checks types and many context-sensitive rules?',
  options: ['Lexical analysis only', 'Linking only', 'Semantic analysis', 'Loading only'],
  a: 2, explanation: 'Semantic analysis checks meaning-related constraints such as types and declarations.'
},
{
  id: 1368, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the purpose of a symbol table?',
  options: ['Store only machine instructions', 'Draw syntax trees on screen', 'Manage network connections', 'Record information about identifiers and their attributes'],
  a: 3, explanation: 'A symbol table records names and attributes such as type, scope, and location.'
},
{
  id: 1369, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which is an example of a lexical error?',
  options: ['An invalid character sequence that cannot form a token', 'A variable used before declaration only', 'A wrong network password', 'A disk failure'],
  a: 0, explanation: 'Lexical errors occur when characters cannot be grouped into valid tokens.'
},
{
  id: 1370, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which is an example of a syntax error?',
  options: ['A valid program runs slowly', 'A missing closing parenthesis where the grammar requires one', 'A computer has low battery', 'A network cable is disconnected'],
  a: 1, explanation: 'Syntax errors violate the grammatical rules of the programming language.'
},
{
  id: 1371, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which is an example of a semantic error?',
  options: ['A missing quote only', 'An illegal character in a token', 'Using an incompatible type in an operation', 'A slow hard drive'],
  a: 2, explanation: 'Semantic errors violate meaning-related rules, such as type compatibility.'
},
{
  id: 1372, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is intermediate code in a compiler?',
  options: ['The final printed report', 'A hardware schematic', 'A source-code license', 'An internal representation between source and target code'],
  a: 3, explanation: 'Intermediate representation supports analysis, optimization, and target-code generation.'
},
{
  id: 1373, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which is a common form of intermediate representation?',
  options: ['Three-address code', 'HTML heading', 'JPEG image', 'DNS record'],
  a: 0, explanation: 'Three-address code represents computations using simple instructions with a small number of operands.'
},
{
  id: 1374, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the main goal of code optimization?',
  options: ['Change program meaning', 'Improve efficiency while preserving program behavior', 'Delete all useful instructions', 'Remove all variables regardless of use'],
  a: 1, explanation: 'Optimization improves properties such as execution time or code size without changing required behavior.'
},
{
  id: 1375, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Replacing a constant expression with its computed value is called:',
  options: ['Loop unrolling only', 'Register spilling', 'Constant folding', 'Linking'],
  a: 2, explanation: 'Constant folding evaluates expressions whose values are known at compile time.'
},
{
  id: 1376, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Removing computations whose results are never used is an example of:',
  options: ['Lexical analysis', 'Parsing', 'Tokenization', 'Dead code elimination'],
  a: 3, explanation: 'Dead code elimination removes code that cannot affect the required program result.'
},
{
  id: 1377, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which compiler phase translates intermediate code into target instructions?',
  options: ['Code generation', 'Requirements analysis', 'Lexical analysis only', 'Source editing'],
  a: 0, explanation: 'Code generation produces target code from an intermediate representation.'
},
{
  id: 1378, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is register allocation?',
  options: ['Assigning source files to folders', 'Assigning variables or temporary values to machine registers', 'Creating grammar rules', 'Assigning users to roles'],
  a: 1, explanation: 'Register allocation maps program values to a limited set of machine registers.'
},
{
  id: 1379, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the role of a linker?',
  options: ['Tokenize source code', 'Perform lexical analysis', 'Combine object files and resolve external references', 'Create grammar productions'],
  a: 2, explanation: 'A linker combines compiled object files and libraries into a linked program.'
},
{
  id: 1380, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the role of a loader?',
  options: ['Check grammar', 'Remove left recursion', 'Parse expressions', 'Load an executable into memory for execution'],
  a: 3, explanation: 'A loader prepares a program for execution by loading it into memory.'
},
{
  id: 1381, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the difference between a compiler and an interpreter in a common implementation model?',
  options: ['A compiler translates a program before execution; an interpreter executes program instructions through an interpreter', 'They are always identical', 'An interpreter only designs hardware', 'A compiler only stores documents'],
  a: 0, explanation: 'Compilers commonly translate code ahead of execution, while interpreters execute through an interpreting system; real implementations can combine both approaches.'
},
{
  id: 1382, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is a token in compiler design?',
  options: ['A complete operating system', 'A category of lexical unit, such as identifier or keyword', 'A hardware port', 'A user password only'],
  a: 1, explanation: 'A token represents a lexical category and may carry a value or associated information.'
},
{
  id: 1383, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which notation is commonly used to describe token patterns?',
  options: ['Flowcharts only', 'SQL tables only', 'Regular expressions', 'Binary heaps only'],
  a: 2, explanation: 'Regular expressions describe patterns recognized by lexical analyzers.'
},
{
  id: 1384, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which machine model is commonly used to implement a lexical analyzer?',
  options: ['Turing machine only in every implementation', 'Database server', 'CPU scheduler', 'Finite automaton'],
  a: 3, explanation: 'Finite automata efficiently recognize token patterns defined by regular languages.'
},
{
  id: 1385, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which language class is described by regular expressions?',
  options: ['Regular languages', 'All context-sensitive languages', 'All recursively enumerable languages', 'Only natural languages'],
  a: 0, explanation: 'Regular expressions describe regular languages.'
},
{
  id: 1386, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which formal model recognizes context-free languages?',
  options: ['A basic calculator', 'Pushdown automaton', 'A spreadsheet', 'A simple counter with no stack'],
  a: 1, explanation: 'Pushdown automata use a stack and recognize context-free languages.'
},
{
  id: 1387, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What does FIRST(A) represent in grammar analysis?',
  options: ['The last token of every program', 'The first machine instruction', 'Terminals that can begin strings derived from A', 'The number of grammar rules only'],
  a: 2, explanation: 'FIRST sets contain terminals that may appear first in strings derived from a grammar symbol.'
},
{
  id: 1388, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What does FOLLOW(A) represent?',
  options: ['All tokens in a file', 'All keywords in a language', 'The first terminal of the grammar only', 'Terminals that can appear immediately after non-terminal A'],
  a: 3, explanation: 'FOLLOW sets contain terminals that may occur immediately after a non-terminal in a sentential form.'
},
{
  id: 1389, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is an ambiguous grammar?',
  options: ['A grammar that permits more than one parse tree for some string', 'A grammar with no terminals', 'A grammar that generates no strings in every case', 'A grammar written in English only'],
  a: 0, explanation: 'A grammar is ambiguous if some generated string has multiple distinct parse trees or derivations.'
},
{
  id: 1390, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is the purpose of operator precedence in parsing expressions?',
  options: ['To select variable names', 'To determine which operators bind more tightly', 'To assign network addresses', 'To choose the source file extension'],
  a: 1, explanation: 'Operator precedence defines the relative binding strength of operators in expressions.'
},
{
  id: 1391, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What does associativity determine for operators of equal precedence?',
  options: ['The color of the output', 'The number of source files', 'How a sequence of operators is grouped', 'The target computer brand'],
  a: 2, explanation: 'Associativity determines grouping, such as left-to-right grouping for subtraction in common languages.'
},
{
  id: 1392, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is type checking?',
  options: ['Checking whether a monitor is connected', 'Checking source file size only', 'Measuring CPU temperature', 'Checking whether operations use compatible types'],
  a: 3, explanation: 'Type checking detects invalid or incompatible uses of data types.'
},
{
  id: 1393, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is scope in a programming language?',
  options: ['The region where a name is visible and can be referenced', 'The speed of a CPU', 'The number of files in a folder', 'The length of a network cable'],
  a: 0, explanation: 'Scope determines where an identifier can be accessed in a program.'
},
{
  id: 1394, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is a common purpose of intermediate representation?',
  options: ['Replace the source language permanently', 'Separate front-end analysis from target-specific code generation', 'Remove the need for all optimization', 'Store only user passwords'],
  a: 1, explanation: 'Intermediate representations help compiler front ends and back ends work with less dependence on each other.'
},
{
  id: 1395, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which optimization removes repeated computation of the same expression when its operands have not changed?',
  options: ['Lexical analysis', 'Parsing', 'Common subexpression elimination', 'Linking'],
  a: 2, explanation: 'Common subexpression elimination reuses a previously computed expression when safe.'
},
{
  id: 1396, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is loop-invariant code motion?',
  options: ['Moving every instruction into a different program', 'Removing the loop condition without checking', 'Changing the loop into a grammar', 'Moving computations unchanged by loop iterations outside the loop when safe'],
  a: 3, explanation: 'Loop-invariant code motion moves computations outside a loop when their values do not change across iterations.'
},
{
  id: 1397, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is peephole optimization?',
  options: ['Improving small sequences of target instructions using local rules', 'Optimizing only screen brightness', 'Parsing only the first token', 'Changing a program into a database'],
  a: 0, explanation: 'Peephole optimization examines short instruction sequences for simpler or more efficient alternatives.'
},
{
  id: 1398, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'What is error recovery in a parser?',
  options: ['Deleting the whole compiler', 'Attempting to continue parsing after detecting a syntax error', 'Preventing all errors from occurring', 'Replacing the operating system'],
  a: 1, explanation: 'Error recovery lets a parser report errors and continue analysis where possible.'
},
{
  id: 1399, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which phase usually detects undeclared identifiers and many type mismatches?',
  options: ['Lexical analysis only', 'Code linking only', 'Semantic analysis', 'Program loading only'],
  a: 2, explanation: 'Semantic analysis checks declarations, types, and other language meaning rules.'
},
{
  id: 1400, branch: 'CSE', topic: 'Compiler Design', semester: 'Semester 5', subject: 'Compiler Design',
  q: 'Which sequence best represents a simplified compiler pipeline?',
  options: ['Linking, editing, typing, printing', 'Loading, testing, browsing, drawing', 'Networking, storage, printing, scanning', 'Lexical analysis, syntax analysis, semantic analysis, code generation'],
  a: 3, explanation: 'A simplified compiler pipeline includes lexical, syntax, and semantic analysis followed by code generation, with other phases commonly included.'
},

  // ===== SEMESTER 6 CSE: CLOUD COMPUTING (1251-1300) =====
  {
    id: 1251, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is cloud computing?',
    options: ['Delivering computing services over the internet', 'Only storing files locally', 'A programming language', 'A computer operating system'],
    a: 0, explanation: 'Cloud computing provides computing resources and services over the internet.'
  },
  {
    id: 1252, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which is a common cloud service model?',
    options: ['IaaS', 'HTML', 'USB', 'BIOS'],
    a: 0, explanation: 'IaaS stands for Infrastructure as a Service.'
  },
  {
    id: 1253, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does SaaS stand for?',
    options: ['Storage as a System', 'Software as a Service', 'Security as a Server', 'System and Software'],
    a: 1, explanation: 'SaaS delivers software applications over the internet.'
  },
  {
    id: 1254, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does PaaS provide?',
    options: ['Only physical keyboards', 'A platform to develop and deploy applications', 'Only email accounts', 'A computer motherboard'],
    a: 1, explanation: 'PaaS supplies a managed platform for building and deploying applications.'
  },
  {
    id: 1255, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which is an example of an IaaS provider?',
    options: ['Amazon EC2', 'Microsoft Word', 'Notepad', 'HTML'],
    a: 0, explanation: 'Amazon EC2 offers virtual computing infrastructure.'
  },
  {
    id: 1256, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which cloud deployment model is dedicated to one organization?',
    options: ['Public cloud', 'Private cloud', 'Community website', 'Open internet'],
    a: 1, explanation: 'A private cloud is dedicated to a single organization.'
  },
  {
    id: 1257, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'A public cloud is generally operated by whom?',
    options: ['A third-party cloud provider', 'Only one home user', 'A keyboard manufacturer', 'A local printer'],
    a: 0, explanation: 'Public cloud services are generally managed by a cloud provider.'
  },
  {
    id: 1258, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a hybrid cloud?',
    options: ['A laptop with two screens', 'A combination of private and public cloud environments', 'A type of database query', 'A programming framework'],
    a: 1, explanation: 'Hybrid cloud combines private and public cloud environments.'
  },
  {
    id: 1259, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is cloud scalability?',
    options: ['Changing a monitor', 'Adjusting resources to meet workload demands', 'Deleting every backup', 'Disabling the network'],
    a: 1, explanation: 'Scalability allows resources to increase or decrease as needs change.'
  },
  {
    id: 1260, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is elasticity in cloud computing?',
    options: ['Automatically adjusting resources with demand', 'Making hardware physically flexible', 'Compressing every image', 'Changing source-code colors'],
    a: 0, explanation: 'Elasticity adjusts resource capacity as workload changes.'
  },
  {
    id: 1261, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is virtualization?',
    options: ['Creating virtual versions of computing resources', 'Printing documents', 'Writing only HTML', 'Replacing all networks with cables'],
    a: 0, explanation: 'Virtualization enables multiple virtual resources on physical hardware.'
  },
  {
    id: 1262, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What software commonly manages virtual machines?',
    options: ['Hypervisor', 'Text editor', 'Web browser only', 'Spreadsheet'],
    a: 0, explanation: 'A hypervisor creates and manages virtual machines.'
  },
  {
    id: 1263, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which is a major benefit of cloud computing?',
    options: ['No need for any security', 'On-demand resource access', 'Guaranteed zero downtime', 'No internet requirements for all services'],
    a: 1, explanation: 'Cloud services provide resources when users need them.'
  },
  {
    id: 1264, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does pay-as-you-go pricing mean?',
    options: ['Paying according to resource usage', 'Paying only once for all future services', 'Never paying for storage', 'Paying only with cash'],
    a: 0, explanation: 'Usage-based pricing charges customers for consumed resources.'
  },
  {
    id: 1265, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which service is primarily used for object storage?',
    options: ['Amazon S3', 'Amazon EC2', 'A CPU register', 'A text editor'],
    a: 0, explanation: 'Amazon S3 is an object storage service.'
  },
  {
    id: 1266, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a cloud region?',
    options: ['A geographical area containing cloud infrastructure', 'A programming variable', 'A file extension', 'A type of keyboard'],
    a: 0, explanation: 'A region is a geographical area where a provider operates cloud infrastructure.'
  },
  {
    id: 1267, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is an availability zone?',
    options: ['An isolated location within a cloud region', 'A type of password', 'A user-interface button', 'A database column'],
    a: 0, explanation: 'Availability zones provide separate infrastructure locations within a region.'
  },
  {
    id: 1268, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Why is load balancing used?',
    options: ['To distribute traffic across resources', 'To delete user accounts', 'To format source code', 'To encrypt a keyboard'],
    a: 0, explanation: 'Load balancing distributes requests among available servers.'
  },
  {
    id: 1269, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is fault tolerance?',
    options: ['Continuing operation despite certain failures', 'Preventing every possible bug', 'Increasing screen brightness', 'Removing all backups'],
    a: 0, explanation: 'Fault-tolerant systems can continue operating when components fail.'
  },
  {
    id: 1270, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Why are cloud backups important?',
    options: ['They help recover lost or damaged data', 'They always prevent hacking', 'They replace all authentication', 'They make passwords unnecessary'],
    a: 0, explanation: 'Backups support recovery after accidental deletion or system failure.'
  },
  {
    id: 1271, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a container in cloud computing?',
    options: ['A package containing an application and its dependencies', 'A physical storage box only', 'A type of monitor', 'A network cable'],
    a: 0, explanation: 'Containers package applications with the dependencies they need.'
  },
  {
    id: 1272, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which tool is widely used to build and run containers?',
    options: ['Docker', 'PowerPoint', 'MS Paint', 'Calculator'],
    a: 0, explanation: 'Docker is a widely used containerization platform.'
  },
  {
    id: 1273, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is Kubernetes primarily used for?',
    options: ['Container orchestration', 'Writing spreadsheets', 'Editing photos', 'Creating passwords only'],
    a: 0, explanation: 'Kubernetes manages deployment and scaling of containerized applications.'
  },
  {
    id: 1274, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is serverless computing?',
    options: ['Running code without managing servers directly', 'Computing without any physical servers existing', 'Using only offline computers', 'Removing application logic'],
    a: 0, explanation: 'The provider manages underlying servers while users deploy code or functions.'
  },
  {
    id: 1275, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is Function as a Service (FaaS)?',
    options: ['Executing individual functions on demand', 'Manufacturing computer fans', 'Providing only physical storage', 'Designing user manuals'],
    a: 0, explanation: 'FaaS runs small units of code in response to events.'
  },
  
{
  id: 1276,
  branch: 'CSE',
  topic: 'Cloud Computing',
  semester: 'Semester 6',
  subject: 'Cloud Computing',
  q: 'What does an SLA usually define?',
  options: [
    'Agreed service levels and responsibilities',
    'Programming syntax',
    'The color of a server',
    "A user's keyboard layout"
  ],
  a: 0,
  explanation: 'A service-level agreement documents expected service performance and responsibilities.'
},

  {
    id: 1277, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does cloud availability measure?',
    options: ['How often a service is accessible and operational', 'The number of colors on a screen', 'The length of source code', 'The size of a keyboard'],
    a: 0, explanation: 'Availability measures whether a service is accessible when needed.'
  },
  {
    id: 1278, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a common cloud security responsibility of the customer?',
    options: ['Managing access permissions appropriately', 'Maintaining every provider-owned building', 'Manufacturing processors', 'Controlling the public internet'],
    a: 0, explanation: 'Customers must configure appropriate access and protect their accounts and data.'
  },
  {
    id: 1279, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does IAM stand for?',
    options: ['Identity and Access Management', 'Internet Application Memory', 'Internal Audio Module', 'Integrated Algorithm Machine'],
    a: 0, explanation: 'IAM manages identities, roles and access permissions.'
  },
  {
    id: 1280, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is multi-tenancy?',
    options: ['Multiple customers sharing underlying infrastructure with logical isolation', 'One computer with multiple keyboards only', 'Using several programming languages', 'Storing only one file'],
    a: 0, explanation: 'Multi-tenancy lets multiple customers use shared infrastructure with separation between their resources.'
  },
  {
    id: 1281, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which protocol commonly secures web traffic?',
    options: ['HTTPS', 'FTP without encryption', 'Telnet', 'Plain HTTP'],
    a: 0, explanation: 'HTTPS uses TLS to protect data exchanged with websites.'
  },
  {
    id: 1282, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is data encryption?',
    options: ['Transforming data into a protected encoded form', 'Deleting files permanently', 'Increasing screen resolution', 'Compressing code without protection'],
    a: 0, explanation: 'Encryption protects confidentiality by making data unreadable without the required key.'
  },
  {
    id: 1283, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which technology helps connect a private network securely over the internet?',
    options: ['VPN', 'CSS', 'JPEG', 'BIOS'],
    a: 0, explanation: 'A VPN can create an encrypted connection across a public network.'
  },
  {
    id: 1284, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is edge computing?',
    options: ['Processing data closer to where it is generated', 'Processing everything only in a distant data center', 'Deleting network devices', 'A type of programming loop'],
    a: 0, explanation: 'Edge computing reduces the need to send all data to a distant central cloud.'
  },
  {
    id: 1285, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is fog computing?',
    options: ['Distributed processing between edge devices and the cloud', 'Weather forecasting only', 'A cloud password manager', 'A graphics format'],
    a: 0, explanation: 'Fog computing extends processing and services closer to edge devices.'
  },
  {
    id: 1286, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which is a common use of cloud computing in education?',
    options: ['Hosting online learning platforms', 'Eliminating all teachers', 'Preventing every exam error', 'Replacing every textbook automatically'],
    a: 0, explanation: 'Cloud platforms can host learning systems, content and collaboration tools.'
  },
  {
    id: 1287, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is cloud migration?',
    options: ['Moving applications or data to cloud environments', 'Changing a laptop wallpaper', 'Writing a new keyboard driver only', 'Deleting all application data'],
    a: 0, explanation: 'Migration transfers workloads or data from existing environments to the cloud.'
  },
  {
    id: 1288, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a cloud API used for?',
    options: ['Allowing software systems to communicate with cloud services', 'Cleaning server hardware', 'Replacing all user passwords', 'Changing monitor size'],
    a: 0, explanation: 'APIs let applications interact programmatically with cloud services.'
  },
  {
    id: 1289, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is Infrastructure as Code (IaC)?',
    options: ['Defining infrastructure using machine-readable configuration', 'Building servers from paper', 'Writing only application comments', 'Creating images manually'],
    a: 0, explanation: 'IaC automates infrastructure provisioning through configuration or code.'
  },
  {
    id: 1290, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which practice helps control cloud spending?',
    options: ['Monitoring usage and removing unused resources', 'Leaving every instance running forever', 'Ignoring billing reports', 'Duplicating all resources without review'],
    a: 0, explanation: 'Monitoring and optimizing resource use helps reduce unnecessary costs.'
  },
  {
    id: 1291, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a content delivery network (CDN)?',
    options: ['A distributed network that delivers content from nearby locations', 'A local text editor', 'A computer virus', 'A programming language'],
    a: 0, explanation: 'CDNs cache and deliver content from geographically distributed servers.'
  },
  {
    id: 1292, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does auto-scaling do?',
    options: ['Automatically adjusts resource capacity', 'Automatically writes exam answers', 'Disables monitoring', 'Changes source code colors'],
    a: 0, explanation: 'Auto-scaling adds or removes resources based on configured conditions.'
  },
  {
    id: 1293, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which is a relational cloud database service example?',
    options: ['Amazon RDS', 'Amazon Route 53', 'Docker Engine', 'A web browser'],
    a: 0, explanation: 'Amazon RDS is a managed relational database service.'
  },
  {
    id: 1294, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a NoSQL database commonly designed to support?',
    options: ['Non-relational data models', 'Only spreadsheet formulas', 'Only HTML pages', 'Only printed documents'],
    a: 0, explanation: 'NoSQL databases support models such as document, key-value, graph and wide-column.'
  },
  {
    id: 1295, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is disaster recovery?',
    options: ['Restoring systems and data after a disruptive event', 'Designing a website logo', 'Increasing font size', 'Removing all security controls'],
    a: 0, explanation: 'Disaster recovery plans restore critical systems and data after disruptions.'
  },
  {
    id: 1296, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does RPO mean in disaster recovery?',
    options: ['Recovery Point Objective', 'Remote Processing Output', 'Regional Program Operation', 'Resource Planning Option'],
    a: 0, explanation: 'RPO defines the maximum targeted amount of data loss measured in time.'
  },
  {
    id: 1297, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What does RTO mean?',
    options: ['Recovery Time Objective', 'Remote Transfer Operation', 'Regional Testing Output', 'Runtime Table Object'],
    a: 0, explanation: 'RTO is the target time within which a service should be restored.'
  },
  {
    id: 1298, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is a cloud workload?',
    options: ['An application or task using computing resources', 'A physical power socket', 'A type of computer mouse', 'A source-code comment'],
    a: 0, explanation: 'A workload is an application, service or task that consumes computing resources.'
  },
  {
    id: 1299, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'What is the main purpose of cloud monitoring?',
    options: ['Track performance, availability and resource use', 'Disable all system logs', 'Delete every virtual machine', 'Prevent users from logging in'],
    a: 0, explanation: 'Monitoring helps detect problems and understand system performance.'
  },
  {
    id: 1300, branch: 'CSE', topic: 'Cloud Computing', semester: 'Semester 6', subject: 'Cloud Computing',
    q: 'Which is a possible limitation of cloud computing?',
    options: ['Dependence on network connectivity for many services', 'Resources can never scale', 'Data cannot be stored remotely', 'Cloud services never have costs'],
    a: 0, explanation: 'Many cloud services require reliable network connectivity.'
  },

  // ===== SEMESTER 6 CSE: MACHINE LEARNING (1301-1350) =====
  {
    id: 1301, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is machine learning?',
    options: ['A method that learns patterns from data', 'A type of keyboard', 'A file compression format', 'A computer cable'],
    a: 0, explanation: 'Machine learning builds models that learn patterns from data.'
  },
  {
    id: 1302, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which is a supervised learning task?',
    options: ['Classification using labeled examples', 'Grouping data without labels', 'Randomly deleting records', 'Formatting a disk'],
    a: 0, explanation: 'Supervised learning uses labeled examples to learn a mapping from inputs to targets.'
  },
  {
    id: 1303, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which is an unsupervised learning task?',
    options: ['Clustering unlabeled data', 'Predicting from labeled targets only', 'Manually sorting files', 'Compiling code'],
    a: 0, explanation: 'Clustering discovers groups in data without target labels.'
  },
  {
    id: 1304, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a feature in machine learning?',
    options: ['An input variable used by a model', 'Always the final prediction', 'A programming error', 'A storage device'],
    a: 0, explanation: 'Features represent input information used to make predictions.'
  },
  {
    id: 1305, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a label in supervised learning?',
    options: ['The target value to predict', 'A random file name', 'The CPU temperature', 'A network cable'],
    a: 0, explanation: 'Labels provide the known target outcomes during supervised training.'
  },
  {
    id: 1306, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which algorithm is commonly used for classification?',
    options: ['Logistic regression', 'K-means only', 'File allocation table', 'Binary search only'],
    a: 0, explanation: 'Logistic regression estimates class probabilities and is commonly used for classification.'
  },
  {
    id: 1307, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which algorithm is commonly used for clustering?',
    options: ['K-means', 'Linear regression', 'Merge sort', 'Dijkstra algorithm'],
    a: 0, explanation: 'K-means groups data points around cluster centroids.'
  },
  {
    id: 1308, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is regression used to predict?',
    options: ['A continuous numerical value', 'Only file permissions', 'Only image formats', 'A keyboard shortcut'],
    a: 0, explanation: 'Regression models predict numerical quantities such as price or temperature.'
  },
  {
    id: 1309, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is classification used to predict?',
    options: ['A category or class', 'Only a continuous distance', 'A file size only', 'A network address only'],
    a: 0, explanation: 'Classification predicts a discrete category or class label.'
  },
  {
    id: 1310, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Why is data split into training and test sets?',
    options: ['To evaluate performance on unseen examples', 'To duplicate all records', 'To remove every feature', 'To avoid training a model'],
    a: 0, explanation: 'A held-out test set estimates how well the model generalizes.'
  },
  {
    id: 1311, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is overfitting?',
    options: ['Learning training data too closely and generalizing poorly', 'Failing to read any data', 'Using a smaller screen', 'Compressing a model file'],
    a: 0, explanation: 'Overfitting occurs when a model captures noise or training-specific details.'
  },
  {
    id: 1312, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is underfitting?',
    options: ['A model failing to capture important patterns', 'A model memorizing every training example', 'A model with perfect performance always', 'A database backup'],
    a: 0, explanation: 'Underfitting often occurs when a model is too simple to learn the data patterns.'
  },
  {
    id: 1313, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is cross-validation used for?',
    options: ['Estimating generalization and comparing models', 'Encrypting a dataset', 'Replacing all labels', 'Increasing monitor resolution'],
    a: 0, explanation: 'Cross-validation evaluates models across multiple data splits.'
  },
  {
    id: 1314, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What does accuracy measure in classification?',
    options: ['Fraction of predictions that are correct', 'Number of model parameters only', 'Training time only', 'Number of data columns'],
    a: 0, explanation: 'Accuracy is correct predictions divided by total predictions.'
  },
  {
    id: 1315, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is precision?',
    options: ['True positives divided by predicted positives', 'True positives divided by all actual positives', 'All correct values divided by all features', 'The model training duration'],
    a: 0, explanation: 'Precision measures how many positive predictions are actually positive.'
  },
  {
    id: 1316, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is recall?',
    options: ['True positives divided by actual positives', 'True negatives divided by predicted negatives only', 'Total features divided by samples', 'Correct predictions divided by training minutes'],
    a: 0, explanation: 'Recall measures the proportion of actual positive cases identified.'
  },
  {
    id: 1317, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is the F1-score?',
    options: ['Harmonic mean of precision and recall', 'Arithmetic mean of every feature', 'Number of training samples', 'A clustering distance only'],
    a: 0, explanation: 'F1-score balances precision and recall using their harmonic mean.'
  },
  {
    id: 1318, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a confusion matrix?',
    options: ['A table comparing predicted and actual classes', 'A table of cloud prices', 'A list of programming languages', 'A type of neural network layer'],
    a: 0, explanation: 'A confusion matrix summarizes classification outcomes by actual and predicted class.'
  },
  {
    id: 1319, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is gradient descent?',
    options: ['An optimization method that updates parameters to reduce loss', 'A data storage format', 'A sorting algorithm', 'A network protocol'],
    a: 0, explanation: 'Gradient descent updates parameters in a direction that reduces the objective locally.'
  },
  {
    id: 1320, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What does a loss function measure?',
    options: ['How poorly model predictions match targets', 'The physical weight of a computer', 'Internet speed only', 'The number of users online'],
    a: 0, explanation: 'A loss function quantifies prediction error for model optimization.'
  },
  {
    id: 1321, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a learning rate?',
    options: ['A parameter controlling the size of model updates', 'The number of labels in a dataset', 'The model file size', 'The number of computer cores only'],
    a: 0, explanation: 'The learning rate controls how large each optimization update is.'
  },
  {
    id: 1322, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is an epoch in model training?',
    options: ['One complete pass through the training dataset', 'One feature in a dataset', 'A type of database key', 'A network packet'],
    a: 0, explanation: 'An epoch processes the entire training dataset once.'
  },
  {
    id: 1323, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a batch in machine learning?',
    options: ['A group of samples processed together', 'A single model parameter only', 'A computer monitor', 'A label encoding method only'],
    a: 0, explanation: 'A batch is a subset of samples processed in one training step.'
  },
  {
    id: 1324, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which library is widely used for machine learning in Python?',
    options: ['scikit-learn', 'Pillow only', 'Beautiful Soup only', 'Tkinter only'],
    a: 0, explanation: 'Scikit-learn provides many classical machine-learning algorithms and tools.'
  },
  {
    id: 1325, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which Python library is commonly used for numerical arrays?',
    options: ['NumPy', 'Flask', 'Django', 'Beautiful Soup'],
    a: 0, explanation: 'NumPy supports efficient numerical arrays and mathematical operations.'
  },
  {
    id: 1326, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which library is commonly used for tabular data analysis in Python?',
    options: ['Pandas', 'Turtle', 'Pygame only', 'Socket only'],
    a: 0, explanation: 'Pandas provides DataFrame and Series structures for data manipulation.'
  },
  {
    id: 1327, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is feature scaling?',
    options: ['Transforming feature values to comparable scales', 'Removing the target from every dataset', 'Changing the computer screen size', 'Encrypting every label'],
    a: 0, explanation: 'Scaling helps algorithms that are sensitive to feature magnitudes.'
  },
  {
    id: 1328, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is standardization commonly intended to do?',
    options: ['Center values and scale by standard deviation', 'Convert every value to a class label', 'Delete all missing values automatically', 'Sort values alphabetically'],
    a: 0, explanation: 'Standardization commonly produces features with mean zero and unit variance.'
  },
  {
    id: 1329, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is one-hot encoding used for?',
    options: ['Representing categories as binary indicator columns', 'Compressing images', 'Removing numerical features', 'Calculating gradients'],
    a: 0, explanation: 'One-hot encoding represents each category using a separate indicator.'
  },
  {
    id: 1330, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is data leakage?',
    options: ['Using information during training that would not legitimately be available', 'Losing electricity in a server', 'Encrypting a dataset twice', 'Removing duplicate rows'],
    a: 0, explanation: 'Data leakage can make evaluation look better than real-world performance.'
  },
  {
    id: 1331, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is regularization used for?',
    options: ['Reducing overfitting by penalizing model complexity', 'Increasing every weight without limit', 'Deleting the training set', 'Replacing all model inputs'],
    a: 0, explanation: 'Regularization discourages overly complex models and can improve generalization.'
  },
  {
    id: 1332, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which technique can help prevent overfitting in a decision tree?',
    options: ['Pruning the tree', 'Adding unlimited depth', 'Removing the test set', 'Duplicating every label'],
    a: 0, explanation: 'Pruning reduces unnecessary tree complexity.'
  },
  {
    id: 1333, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a random forest?',
    options: ['An ensemble of decision trees', 'A single linear equation only', 'A database management system', 'A computer network topology'],
    a: 0, explanation: 'Random forests combine predictions from multiple decision trees.'
  },
  {
    id: 1334, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is an ensemble method?',
    options: ['Combining multiple models to produce a prediction', 'Using only one input feature always', 'Removing model evaluation', 'Sorting rows by date'],
    a: 0, explanation: 'Ensemble methods combine multiple learners to improve predictive performance.'
  },
  {
    id: 1335, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a support vector machine designed to find?',
    options: ['A decision boundary with a large margin', 'The shortest network cable', 'A database backup', 'A compression dictionary only'],
    a: 0, explanation: 'SVMs seek a boundary that separates classes with a large margin.'
  },
  {
    id: 1336, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is the purpose of a kernel in an SVM?',
    options: ['Enable nonlinear decision boundaries through similarity functions', 'Store all labels in a text file', 'Replace the training process', 'Sort data alphabetically'],
    a: 0, explanation: 'Kernel functions allow SVMs to model nonlinear relationships efficiently.'
  },
  {
    id: 1337, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is the k-nearest neighbors algorithm based on?',
    options: ['Nearby training examples', 'Randomly selected passwords', 'Compiler syntax trees', 'Cloud billing records only'],
    a: 0, explanation: 'KNN predicts using the labels or values of nearby examples.'
  },
  {
    id: 1338, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is dimensionality reduction?',
    options: ['Reducing the number of input dimensions', 'Increasing the number of labels indefinitely', 'Increasing monitor dimensions', 'Removing all training samples'],
    a: 0, explanation: 'Dimensionality reduction represents data with fewer features or components.'
  },
  {
    id: 1339, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What does PCA stand for?',
    options: ['Principal Component Analysis', 'Primary Computing Algorithm', 'Predictive Class Assignment', 'Program Control Array'],
    a: 0, explanation: 'PCA transforms data into components that capture directions of high variance.'
  },
  {
    id: 1340, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is reinforcement learning based on?',
    options: ['Learning through interaction and rewards', 'Only fixed labeled examples', 'Manual spreadsheet formatting', 'Encrypting database columns'],
    a: 0, explanation: 'An agent learns behavior by interacting with an environment and receiving rewards.'
  },
  {
    id: 1341, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'In reinforcement learning, what is an agent?',
    options: ['The learner or decision-maker', 'The training dataset only', 'A storage device', 'A programming comment'],
    a: 0, explanation: 'The agent chooses actions and learns from the resulting feedback.'
  },
  {
    id: 1342, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a reward in reinforcement learning?',
    options: ['Feedback describing the outcome of an action', 'A model file extension', 'A database index', 'A type of network cable'],
    a: 0, explanation: 'Rewards provide feedback used to learn desirable behavior.'
  },
  {
    id: 1343, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is a neural network inspired by?',
    options: ['Simplified connections between biological neurons', 'A filing cabinet', 'A computer keyboard', 'A database table'],
    a: 0, explanation: 'Artificial neural networks use connected computational units loosely inspired by neurons.'
  },
  {
    id: 1344, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is an activation function used for in a neural network?',
    options: ['Introducing nonlinear behavior', 'Storing a dataset permanently', 'Sorting input rows', 'Encrypting network cables'],
    a: 0, explanation: 'Activation functions allow neural networks to learn nonlinear relationships.'
  },
  {
    id: 1345, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which activation function is commonly used in hidden layers?',
    options: ['ReLU', 'SQL', 'HTML', 'JPEG'],
    a: 0, explanation: 'ReLU outputs zero for negative inputs and the input itself for positive inputs.'
  },
  {
    id: 1346, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is backpropagation?',
    options: ['Computing gradients through a neural network', 'Backing up a cloud server', 'Sorting training labels', 'Compressing a database'],
    a: 0, explanation: 'Backpropagation calculates gradients used to update neural-network parameters.'
  },
  {
    id: 1347, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is natural language processing (NLP)?',
    options: ['Techniques for working with human language', 'A cloud storage protocol', 'A computer hardware bus', 'A sorting algorithm'],
    a: 0, explanation: 'NLP enables computers to process and analyze human language.'
  },
  {
    id: 1348, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Which is an example of a computer vision task?',
    options: ['Image classification', 'Sorting integers only', 'Managing file permissions only', 'Calculating network ports'],
    a: 0, explanation: 'Image classification assigns categories to images.'
  },
  {
    id: 1349, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'Why should missing values be handled before model training?',
    options: ['Some algorithms cannot directly process missing values', 'Missing values always improve accuracy', 'They automatically become correct labels', 'They remove the need for testing'],
    a: 0, explanation: 'Missing-data handling prevents errors and can reduce bias in model results.'
  },
  {
    id: 1350, branch: 'CSE', topic: 'Machine Learning', semester: 'Semester 6', subject: 'Machine Learning',
    q: 'What is model generalization?',
    options: ['Performing well on new, unseen data', 'Memorizing only the training examples', 'Using every possible feature', 'Running without any input'],
    a: 0, explanation: 'Generalization is the ability to make useful predictions on unseen examples.'
  },

  // ===== SEMESTER 6 CSE: INFORMATION SECURITY (1351-1400) =====
  {
    id: 1351, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What are the three components of the CIA triad?',
    options: ['Confidentiality, Integrity, Availability', 'Control, Internet, Access', 'Computing, Information, Applications', 'Cybersecurity, Identity, Authentication'],
    a: 0, explanation: 'The CIA triad is a foundational model for information security.'
  },
  {
    id: 1352, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What does confidentiality mean?',
    options: ['Preventing unauthorized disclosure of information', 'Making every file public', 'Ensuring every server is fast', 'Deleting every log'],
    a: 0, explanation: 'Confidentiality restricts information access to authorized parties.'
  },
  {
    id: 1353, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What does integrity protect?',
    options: ['Accuracy and completeness of information', 'Only internet speed', 'Only display brightness', 'Only storage capacity'],
    a: 0, explanation: 'Integrity protects information against unauthorized or improper modification.'
  },
  {
    id: 1354, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What does availability mean in security?',
    options: ['Authorized users can access systems when needed', 'Every user has administrator rights', 'Every file is public', 'Passwords are optional'],
    a: 0, explanation: 'Availability ensures systems and information remain accessible to authorized users.'
  },
  {
    id: 1355, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is authentication?',
    options: ['Verifying a claimed identity', 'Granting every permission automatically', 'Encrypting a hard drive only', 'Deleting old files'],
    a: 0, explanation: 'Authentication verifies who or what is requesting access.'
  },
  {
    id: 1356, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is authorization?',
    options: ['Determining permitted actions or resources', 'Verifying a password format only', 'Creating a backup', 'Installing a browser'],
    a: 0, explanation: 'Authorization determines what an authenticated identity is allowed to do.'
  },
  {
    id: 1357, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Which is an example of multi-factor authentication?',
    options: ['Password plus a fingerprint', 'Two copies of the same password', 'Username alone', 'A password written on paper'],
    a: 0, explanation: 'MFA combines different factor types, such as knowledge and biometrics.'
  },
  {
    id: 1358, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is phishing?',
    options: ['Deceptive attempts to steal information', 'A legitimate file backup', 'A method for cooling CPUs', 'A database indexing method'],
    a: 0, explanation: 'Phishing tricks users into revealing information or performing unsafe actions.'
  },
  {
    id: 1359, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is malware?',
    options: ['Software designed to perform harmful or unauthorized actions', 'Any trusted update', 'A type of monitor', 'A database schema'],
    a: 0, explanation: 'Malware includes malicious programs such as viruses, worms and ransomware.'
  },
  {
    id: 1360, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is ransomware?',
    options: ['Malware that often encrypts data and demands payment', 'A secure backup standard', 'A password manager', 'A network monitoring dashboard'],
    a: 0, explanation: 'Ransomware commonly blocks access to data and demands a ransom.'
  },
  {
    id: 1361, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a computer virus?',
    options: ['Malicious code that can attach to files or programs', 'A hardware component', 'A network security policy', 'An encryption key'],
    a: 0, explanation: 'A virus typically attaches to a host and spreads when that host executes.'
  },
  {
    id: 1362, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'How does a worm commonly spread?',
    options: ['By self-replicating across systems or networks', 'Only by attaching to printed paper', 'By changing monitor brightness', 'By compressing files'],
    a: 0, explanation: 'Worms can self-propagate, often by exploiting network or software weaknesses.'
  },
  {
    id: 1363, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a Trojan horse in cybersecurity?',
    options: ['Malicious software disguised as legitimate software', 'A secure encryption algorithm', 'A backup server', 'A firewall rule'],
    a: 0, explanation: 'A Trojan misleads users about its purpose or behavior.'
  },
  {
    id: 1364, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a firewall used for?',
    options: ['Filtering network traffic according to rules', 'Creating all user passwords', 'Repairing physical keyboards', 'Training neural networks'],
    a: 0, explanation: 'Firewalls allow or block traffic based on configured security rules.'
  },
  {
    id: 1365, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What does an IDS do?',
    options: ['Detects suspicious activity or policy violations', 'Always blocks all traffic', 'Creates websites', 'Compresses databases'],
    a: 0, explanation: 'An intrusion detection system monitors for suspicious events.'
  },
  {
    id: 1366, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is the role of an IPS?',
    options: ['Detecting and attempting to prevent malicious activity', 'Printing documents', 'Creating spreadsheets', 'Replacing encryption keys with passwords'],
    a: 0, explanation: 'An intrusion prevention system can actively block detected malicious traffic.'
  },
  {
    id: 1367, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is encryption?',
    options: ['Converting readable data into ciphertext using a method and key', 'Deleting all copies of data', 'Sorting a file alphabetically', 'Creating a user account'],
    a: 0, explanation: 'Encryption protects data by transforming plaintext into ciphertext.'
  },
  {
    id: 1368, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is symmetric encryption?',
    options: ['Using the same secret key for encryption and decryption', 'Using no keys', 'Using only a username', 'Using a different public key for each character'],
    a: 0, explanation: 'Symmetric cryptography uses a shared secret key for both operations.'
  },
  {
    id: 1369, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is public-key cryptography?',
    options: ['Cryptography using a related public and private key pair', 'Cryptography without algorithms', 'A method that publishes every password', 'A file compression technique'],
    a: 0, explanation: 'Public-key cryptography uses a key pair with distinct roles.'
  },
  {
    id: 1370, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Which algorithm is a widely used symmetric cipher?',
    options: ['AES', 'HTML', 'DNS', 'FTP'],
    a: 0, explanation: 'AES is a standardized symmetric encryption algorithm.'
  },
  {
    id: 1371, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a cryptographic hash function used for?',
    options: ['Mapping data to a fixed-length digest', 'Reversibly compressing every file', 'Assigning IP addresses', 'Creating display layouts'],
    a: 0, explanation: 'Hash functions produce fixed-length digests and are used for integrity checks and other security tasks.'
  },
  {
    id: 1372, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Which is a secure modern cryptographic hash family member?',
    options: ['SHA-256', 'Plain MD5 for new security designs', 'HTML5', 'JPEG'],
    a: 0, explanation: 'SHA-256 is part of the SHA-2 family and is widely used in security applications.'
  },
  {
    id: 1373, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a digital signature used to help provide?',
    options: ['Authenticity and integrity of signed data', 'Guaranteed secrecy without encryption', 'Unlimited storage', 'Faster internet access'],
    a: 0, explanation: 'Digital signatures can help verify origin and detect changes to signed data.'
  },
  {
    id: 1374, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a digital certificate used for?',
    options: ['Binding an identity to a public key', 'Storing all passwords in plaintext', 'Increasing processor speed', 'Removing all network risks'],
    a: 0, explanation: 'Certificates help establish trust in the relationship between an identity and a public key.'
  },
  {
    id: 1375, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a man-in-the-middle attack?',
    options: ['An attacker intercepts or alters communication between parties', 'A user updates an application', 'A system creates a backup', 'A firewall records traffic'],
    a: 0, explanation: 'The attacker positions themselves between communicating parties to observe or modify traffic.'
  },
  {
    id: 1376, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a denial-of-service (DoS) attack?',
    options: ['Overwhelming a service to make it unavailable', 'Encrypting a backup correctly', 'Updating a security patch', 'Creating a strong password'],
    a: 0, explanation: 'A DoS attack aims to disrupt access to a system or service.'
  },
  {
    id: 1377, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What distinguishes a DDoS attack?',
    options: ['It uses multiple distributed sources', 'It always uses a single local file', 'It requires no network traffic', 'It is a type of encryption'],
    a: 0, explanation: 'Distributed denial of service uses many sources to overwhelm a target.'
  },
  {
    id: 1378, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is SQL injection?',
    options: ['Manipulating database queries through unsafe input handling', 'Encrypting a network packet', 'Compressing a table', 'Creating a strong password'],
    a: 0, explanation: 'SQL injection can occur when untrusted input is incorporated unsafely into SQL statements.'
  },
  {
    id: 1379, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Which practice helps prevent SQL injection?',
    options: ['Parameterized queries', 'Building SQL from untrusted strings', 'Disabling database permissions checks', 'Sharing administrator passwords'],
    a: 0, explanation: 'Parameterized queries separate data from SQL command structure.'
  },
  {
    id: 1380, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is cross-site scripting (XSS)?',
    options: ['Injecting malicious script into content viewed by users', 'A hardware failure', 'A cloud storage method', 'A password hashing algorithm'],
    a: 0, explanation: 'XSS can cause a browser to execute attacker-controlled script in a trusted site context.'
  },
  {
    id: 1381, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is social engineering?',
    options: ['Manipulating people to disclose information or take unsafe actions', 'Designing social media buttons', 'Optimizing database indexes', 'Building a computer network'],
    a: 0, explanation: 'Social engineering exploits human trust or behavior rather than only technical flaws.'
  },
  {
    id: 1382, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Which password practice is recommended?',
    options: ['Use long, unique passwords and a password manager', 'Reuse one password everywhere', 'Share passwords publicly', 'Use your name for every account'],
    a: 0, explanation: 'Unique, strong passwords reduce the risk of one breach affecting multiple accounts.'
  },
  {
    id: 1383, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Why are software security updates important?',
    options: ['They can fix known vulnerabilities', 'They guarantee no future attacks', 'They eliminate the need for backups', 'They make every file public'],
    a: 0, explanation: 'Updates often patch vulnerabilities that attackers could otherwise exploit.'
  },
  {
    id: 1384, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is the principle of least privilege?',
    options: ['Give users only the access they need', 'Give everyone administrator access', 'Disable authentication', 'Publish confidential files'],
    a: 0, explanation: 'Least privilege limits access rights to what is necessary for assigned tasks.'
  },
  {
    id: 1385, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a security vulnerability?',
    options: ['A weakness that could be exploited', 'A verified backup', 'A strong encryption key', 'A harmless file extension'],
    a: 0, explanation: 'A vulnerability is a weakness in software, hardware, configuration or process.'
  },
  {
    id: 1386, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is penetration testing?',
    options: ['Authorized testing to identify security weaknesses', 'Unauthorized deletion of data', 'Routine typing practice', 'A method of compressing images'],
    a: 0, explanation: 'Penetration testing simulates attacks within an agreed and authorized scope.'
  },
  {
    id: 1387, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a security audit?',
    options: ['A systematic review of security controls and practices', 'A type of malware', 'A database backup process only', 'A web page animation'],
    a: 0, explanation: 'Security audits assess whether controls and policies are appropriate and followed.'
  },
  {
    id: 1388, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is an access control list (ACL)?',
    options: ['A list of permissions associated with an object or resource', 'A list of programming languages', 'A network speed test', 'A type of encryption key'],
    a: 0, explanation: 'An ACL specifies which identities or groups may perform certain actions.'
  },
  {
    id: 1389, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a backup primarily intended to protect against?',
    options: ['Data loss and corruption', 'Every form of phishing automatically', 'All possible hardware failures forever', 'Weak passwords alone'],
    a: 0, explanation: 'Backups support restoration after loss, corruption or accidental deletion.'
  },
  {
    id: 1390, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Why should backup recovery be tested?',
    options: ['To verify that data can actually be restored', 'To make every password public', 'To disable recovery procedures', 'To remove all security logs'],
    a: 0, explanation: 'Testing verifies that backup data and restoration procedures work as expected.'
  },
  {
    id: 1391, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is data classification?',
    options: ['Grouping data according to sensitivity or handling needs', 'Sorting every file only by size', 'Deleting data labels', 'Encrypting the monitor'],
    a: 0, explanation: 'Classification helps determine appropriate access and protection requirements.'
  },
  {
    id: 1392, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What does non-repudiation aim to provide?',
    options: ['Evidence supporting an action or message origin that is difficult to deny', 'Guaranteed secrecy of all data', 'Unlimited server capacity', 'Anonymous access to every system'],
    a: 0, explanation: 'Non-repudiation mechanisms provide evidence of origin or action, subject to their trust and implementation.'
  },
  {
    id: 1393, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a zero-day vulnerability?',
    options: ['A vulnerability unknown to or not yet patched by the responsible vendor', 'A flaw that cannot be exploited', 'A fully patched weakness', 'A password with zero characters'],
    a: 0, explanation: 'Zero-day vulnerabilities may be exploited before a fix is available.'
  },
  {
    id: 1394, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a security incident response plan?',
    options: ['A documented process for handling security incidents', 'A list of website colors', 'A source-code formatting guide', 'A database schema'],
    a: 0, explanation: 'Incident response plans coordinate detection, containment, recovery and related activities.'
  },
  {
    id: 1395, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is the purpose of security logging?',
    options: ['Record events for monitoring and investigation', 'Store every password in plaintext', 'Disable audit trails', 'Increase file sizes deliberately'],
    a: 0, explanation: 'Logs help detect suspicious activity and investigate incidents.'
  },
  {
    id: 1396, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a honeypot in cybersecurity?',
    options: ['A decoy system designed to attract or study attackers', 'A password encryption algorithm', 'A normal office printer', 'A backup battery'],
    a: 0, explanation: 'Honeypots can help observe attack behavior and detect suspicious activity.'
  },
  {
    id: 1397, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is a botnet?',
    options: ['A group of compromised devices controlled together', 'A set of secure backups', 'A programming language', 'A database index'],
    a: 0, explanation: 'Botnets can be used for activities such as distributed attacks or spam.'
  },
  {
    id: 1398, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is the purpose of data masking?',
    options: ['Hiding sensitive values while preserving useful data characteristics', 'Publishing confidential data', 'Disabling database access controls', 'Deleting every database table'],
    a: 0, explanation: 'Masking obscures sensitive fields for safer display, testing or analysis.'
  },
  {
    id: 1399, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'What is the purpose of a VPN on public Wi-Fi?',
    options: ['Help protect traffic through an encrypted tunnel to the VPN endpoint', 'Guarantee every website is safe', 'Remove malware from every device', 'Make passwords unnecessary'],
    a: 0, explanation: 'A VPN can protect traffic in transit to its endpoint but does not eliminate every online risk.'
  },
  {
    id: 1400, branch: 'CSE', topic: 'Information Security', semester: 'Semester 6', subject: 'Information Security',
    q: 'Which action is safest when receiving an unexpected attachment?',
    options: ['Verify the sender and context before opening it', 'Open it immediately', 'Disable antivirus first', 'Forward it to everyone'],
    a: 0, explanation: 'Verification helps reduce risks from malicious attachments and phishing.'
  },

  // ===== SEMESTER 6 CSE: MOBILE APP DEVELOPMENT (1401-1450) =====
  {
    id: 1401, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is mobile app development?',
    options: ['Building software for mobile devices', 'Manufacturing mobile batteries only', 'Creating network cables', 'Designing only desktop hardware'],
    a: 0, explanation: 'Mobile app development creates applications for phones, tablets and similar devices.'
  },
  {
    id: 1402, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which operating system is commonly used on smartphones?',
    options: ['Android', 'MS-DOS only', 'BIOS', 'CUDA'],
    a: 0, explanation: 'Android is a widely used mobile operating system.'
  },
  {
    id: 1403, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which company leads development of the Android platform?',
    options: ['Google', 'Adobe', 'Oracle alone', 'Mozilla alone'],
    a: 0, explanation: 'Google leads Android development and provides Android development tools.'
  },
  {
    id: 1404, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which language is officially supported for Android app development?',
    options: ['Kotlin', 'COBOL only', 'Assembly only', 'Fortran only'],
    a: 0, explanation: 'Kotlin is a recommended language for modern Android development.'
  },
  {
    id: 1405, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which other language is widely used for Android development?',
    options: ['Java', 'SQL alone', 'CSS alone', 'XML alone'],
    a: 0, explanation: 'Java has long been used to develop Android applications.'
  },
  {
    id: 1406, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which IDE is commonly used for Android development?',
    options: ['Android Studio', 'Microsoft Paint', 'Notepad only', 'Calculator'],
    a: 0, explanation: 'Android Studio is the official IDE for Android development.'
  },
  {
    id: 1407, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an Android Activity?',
    options: ['A component that represents a user-interaction entry point, often a screen', 'A database server', 'A network cable', 'A programming language'],
    a: 0, explanation: 'An Activity commonly represents a screen or entry point for user interaction.'
  },
  {
    id: 1408, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an Android Intent used for?',
    options: ['Requesting an action from another component', 'Styling text only', 'Encrypting every file', 'Creating a database table only'],
    a: 0, explanation: 'Intents can start components or request actions such as opening content.'
  },
  {
    id: 1409, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an Android Service commonly used for?',
    options: ['Operations that can run without a dedicated user interface', 'Displaying only static images', 'Replacing the operating system', 'Writing HTML stylesheets'],
    a: 0, explanation: 'Services support work that does not require a dedicated screen, subject to Android execution limits.'
  },
  {
    id: 1410, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an Android BroadcastReceiver used for?',
    options: ['Responding to broadcast events', 'Creating CSS animations', 'Editing photos only', 'Replacing app permissions'],
    a: 0, explanation: 'Broadcast receivers respond to supported broadcast messages or system events.'
  },
  {
    id: 1411, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is the AndroidManifest.xml file used for?',
    options: ['Declaring app components and important app configuration', 'Storing every user password', 'Defining all database rows', 'Writing all app images as text'],
    a: 0, explanation: 'The manifest declares components, permissions and other application information.'
  },
  {
    id: 1412, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an APK?',
    options: ['An Android application package', 'An Apple keyboard protocol', 'An application password key', 'A programming language'],
    a: 0, explanation: 'APK is an Android package format used to distribute and install apps.'
  },
  {
    id: 1413, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an Android emulator?',
    options: ['A tool that simulates an Android device', 'A physical SIM card', 'A database backup', 'A network firewall'],
    a: 0, explanation: 'An emulator lets developers test apps in a simulated device environment.'
  },
  {
    id: 1414, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is Android Jetpack Compose?',
    options: ['A declarative toolkit for building Android user interfaces', 'A database engine only', 'A network protocol', 'An image compression format'],
    a: 0, explanation: 'Jetpack Compose uses Kotlin and declarative UI patterns to build interfaces.'
  },
  {
    id: 1415, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is XML traditionally used for in Android development?',
    options: ['Defining layouts and other structured resources', 'Encrypting network traffic', 'Replacing Kotlin completely', 'Managing phone batteries'],
    a: 0, explanation: 'XML has commonly been used to define Android layouts and resources.'
  },
  {
    id: 1416, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is a View in traditional Android UI development?',
    options: ['A basic UI element that can draw and respond to interaction', 'A cloud database', 'A network protocol', 'A type of APK signature'],
    a: 0, explanation: 'Views are the basic building blocks of traditional Android interfaces.'
  },
  {
    id: 1417, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is a layout in Android UI development?',
    options: ['A structure that arranges interface elements', 'A password algorithm', 'A server certificate', 'A programming compiler'],
    a: 0, explanation: 'Layouts organize the position and arrangement of UI elements.'
  },
  {
    id: 1418, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is a Fragment in Android?',
    options: ['A reusable portion of a UI hosted by an Activity', 'A separate operating system', 'A network router', 'A database password'],
    a: 0, explanation: 'Fragments represent reusable portions of UI and related behavior.'
  },
  {
    id: 1419, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is the purpose of app permissions?',
    options: ['Control access to protected device features or data', 'Make every resource public', 'Increase screen resolution', 'Disable app updates'],
    a: 0, explanation: 'Permissions govern access to protected capabilities and data.'
  },
  {
    id: 1420, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Why should mobile apps request only necessary permissions?',
    options: ['To reduce privacy and security risks', 'To prevent all app testing', 'To increase app size', 'To bypass user consent'],
    a: 0, explanation: 'Minimal permissions reduce unnecessary access to sensitive device resources.'
  },
  {
    id: 1421, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which database is commonly used for local Android storage?',
    options: ['SQLite', 'DNS', 'SMTP', 'FTP'],
    a: 0, explanation: 'SQLite is an embedded relational database used for local storage.'
  },
  {
    id: 1422, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is SharedPreferences commonly used for in Android?',
    options: ['Storing small key-value settings', 'Storing huge video files efficiently', 'Running network routers', 'Designing app icons'],
    a: 0, explanation: 'SharedPreferences is used for small key-value settings; modern apps may also use DataStore.'
  },
  {
    id: 1423, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is Room in Android development?',
    options: ['A persistence library built on SQLite', 'A network cable standard', 'A UI color format', 'An app store'],
    a: 0, explanation: 'Room provides an abstraction layer over SQLite for structured local data.'
  },
  {
    id: 1424, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which protocol is commonly used for web API requests from mobile apps?',
    options: ['HTTPS', 'HDMI', 'VGA', 'USB only'],
    a: 0, explanation: 'Mobile apps commonly use HTTPS to communicate securely with web APIs.'
  },
  {
    id: 1425, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is JSON commonly used for in mobile apps?',
    options: ['Exchanging structured data with services', 'Displaying battery voltage only', 'Replacing the operating system', 'Compiling Kotlin code'],
    a: 0, explanation: 'JSON is a common format for exchanging structured data with APIs.'
  },
  {
    id: 1426, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an API in mobile development?',
    options: ['An interface for software components to communicate', 'A phone battery', 'A display connector', 'A type of malware'],
    a: 0, explanation: 'APIs define ways for software components or services to interact.'
  },
  {
    id: 1427, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is responsive mobile UI design?',
    options: ['Adapting layouts to different screen sizes and conditions', 'Using the same tiny text everywhere', 'Disabling touch input', 'Supporting only one screen size'],
    a: 0, explanation: 'Responsive interfaces adapt to varying screens and device configurations.'
  },
  {
    id: 1428, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an important mobile accessibility practice?',
    options: ['Provide meaningful labels and sufficient contrast', 'Use color as the only signal for every action', 'Disable screen readers', 'Make all text unreadably small'],
    a: 0, explanation: 'Labels and sufficient contrast help users with different accessibility needs.'
  },
  {
    id: 1429, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is a mobile app lifecycle?',
    options: ['The sequence of states and callbacks as an app runs', 'The phone manufacturing process only', 'A database encryption method', 'A screen resolution standard'],
    a: 0, explanation: 'The lifecycle describes states and events an app component experiences.'
  },
  {
    id: 1430, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Why should apps handle configuration changes carefully?',
    options: ['To preserve UI state and avoid unexpected behavior', 'To delete all stored data', 'To disable screen rotation permanently', 'To prevent users from opening the app'],
    a: 0, explanation: 'Careful state handling helps an app behave correctly when device configuration changes.'
  },
  {
    id: 1431, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is Flutter?',
    options: ['A framework for building cross-platform applications', 'A database query language', 'A mobile network standard', 'A hardware processor'],
    a: 0, explanation: 'Flutter supports building applications for multiple platforms from a shared codebase.'
  },
  {
    id: 1432, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which programming language is used by Flutter?',
    options: ['Dart', 'PHP only', 'SQL only', 'Assembly only'],
    a: 0, explanation: 'Flutter applications are primarily written in Dart.'
  },
  {
    id: 1433, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is React Native?',
    options: ['A framework for building native mobile interfaces with React', 'A relational database', 'An Android-only hardware chip', 'A network encryption algorithm'],
    a: 0, explanation: 'React Native lets developers build mobile applications using React and JavaScript or TypeScript.'
  },
  {
    id: 1434, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which language is commonly used with React Native?',
    options: ['JavaScript', 'SQL alone', 'Bash only', 'Assembly only'],
    a: 0, explanation: 'React Native commonly uses JavaScript or TypeScript.'
  },
  {
    id: 1435, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is a cross-platform mobile framework?',
    options: ['A framework that supports building for multiple platforms', 'A tool that works only on one phone model', 'A battery charging protocol', 'A computer motherboard'],
    a: 0, explanation: 'Cross-platform frameworks enable shared development across multiple operating systems.'
  },
  {
    id: 1436, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is Firebase commonly used for in mobile apps?',
    options: ['Backend services such as authentication and databases', 'Replacing all mobile hardware', 'Manufacturing phone screens', 'Writing CSS only'],
    a: 0, explanation: 'Firebase offers services including authentication, data storage, analytics and messaging.'
  },
  {
    id: 1437, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is push notification functionality used for?',
    options: ['Sending timely messages to users', 'Increasing battery capacity', 'Replacing all app screens', 'Encrypting every photo automatically'],
    a: 0, explanation: 'Push notifications deliver messages or alerts to supported devices.'
  },
  {
    id: 1438, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is mobile app testing?',
    options: ['Checking functionality, usability, performance and reliability', 'Only choosing the app icon', 'Deleting all test data without checking', 'Publishing an app without running it'],
    a: 0, explanation: 'Testing helps identify defects and verify that an app behaves as expected.'
  },
  {
    id: 1439, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is unit testing?',
    options: ['Testing a small unit of code in isolation', 'Testing only the entire network', 'Publishing an application', 'Designing app-store screenshots'],
    a: 0, explanation: 'Unit tests verify individual functions, classes or other small components.'
  },
  {
    id: 1440, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is UI testing?',
    options: ['Checking user-interface behavior and interactions', 'Testing only database backups', 'Measuring phone weight', 'Compiling an operating system'],
    a: 0, explanation: 'UI tests check whether screens and user interactions behave correctly.'
  },
  {
    id: 1441, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Why is performance optimization important for mobile apps?',
    options: ['It can improve responsiveness and resource efficiency', 'It guarantees every device has unlimited memory', 'It removes the need for security', 'It makes testing unnecessary'],
    a: 0, explanation: 'Optimization can reduce latency, CPU use, memory use and battery consumption.'
  },
  {
    id: 1442, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Which practice can improve mobile battery efficiency?',
    options: ['Avoid unnecessary background work and network requests', 'Poll the network continuously without need', 'Keep the screen at maximum brightness always', 'Disable every power-saving feature'],
    a: 0, explanation: 'Reducing unnecessary processing and networking can save battery power.'
  },
  {
    id: 1443, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'How should sensitive authentication tokens be stored?',
    options: ['Use platform-appropriate secure storage', 'Store them in public source code', 'Display them on every screen', 'Share them in application logs'],
    a: 0, explanation: 'Secure storage helps reduce exposure of sensitive tokens and credentials.'
  },
  {
    id: 1444, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Why should an app validate user input?',
    options: ['To improve correctness and reduce security risks', 'To make every input valid automatically', 'To remove the need for server-side checks', 'To disable error handling'],
    a: 0, explanation: 'Validation helps catch invalid input; server-side validation is also important for security.'
  },
  {
    id: 1445, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is offline-first app design?',
    options: ['Designing an app to remain useful when connectivity is unavailable', 'Requiring constant internet for every screen', 'Removing local storage', 'Disabling synchronization permanently'],
    a: 0, explanation: 'Offline-first apps use local data and synchronize when connectivity becomes available.'
  },
  {
    id: 1446, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is app signing used for?',
    options: ['Establishing package authenticity and supporting update verification', 'Choosing screen colors', 'Compressing images only', 'Increasing network signal strength'],
    a: 0, explanation: 'App signing helps establish package identity and supports trusted update mechanisms.'
  },
  {
    id: 1447, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is an app store used for?',
    options: ['Distributing applications to users', 'Compiling every app automatically on the phone', 'Replacing app testing', 'Managing network cables'],
    a: 0, explanation: 'App stores provide channels for distributing and updating applications.'
  },
  {
    id: 1448, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'Why should mobile apps handle network errors?',
    options: ['Connectivity can be slow, interrupted or unavailable', 'Mobile networks never fail', 'Every request always succeeds', 'Errors cannot occur in applications'],
    a: 0, explanation: 'Robust apps handle timeouts, failed requests and changing connectivity gracefully.'
  },
  {
    id: 1449, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is localization in mobile app development?',
    options: ['Adapting content and formats to different languages and regions', 'Limiting an app to one screen size', 'Removing all translations', 'Changing only the app package name'],
    a: 0, explanation: 'Localization adapts language, dates, numbers and other content to user regions.'
  },
  {
    id: 1450, branch: 'CSE', topic: 'Mobile App Development', semester: 'Semester 6', subject: 'Mobile App Development',
    q: 'What is the purpose of a mobile app crash report?',
    options: ['Help developers diagnose failures', 'Store user passwords in plaintext', 'Replace all app tests', 'Guarantee an app never crashes again'],
    a: 0, explanation: 'Crash reports provide diagnostic information that helps identify and fix app failures.'
  },

{
  id: 1451, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is Big Data?',
  options: ['Very large and complex datasets', 'A small text file', 'A programming language', 'An operating system'],
  a: 0, explanation: 'Big Data refers to datasets that are difficult to process using traditional data tools.'
},
{
  id: 1452, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which are the traditional 3 Vs of Big Data?',
  options: ['Volume, Velocity, Variety', 'Value, Vision, Version', 'Virtual, Visual, Verified', 'Volume, Variable, Version'],
  a: 0, explanation: 'The original 3 Vs describe data volume, speed and variety.'
},
{
  id: 1453, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does Volume represent in Big Data?',
  options: ['Amount of data', 'Speed of processing', 'Types of data', 'Data accuracy only'],
  a: 0, explanation: 'Volume refers to the quantity of data generated and stored.'
},
{
  id: 1454, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does Velocity mean in Big Data?',
  options: ['Speed of data generation and processing', 'Data size only', 'Number of databases', 'Data color'],
  a: 0, explanation: 'Velocity describes how quickly data is produced, transferred and processed.'
},
{
  id: 1455, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does Variety refer to?',
  options: ['Different data formats and types', 'Only numeric data', 'Data processing speed', 'Network bandwidth only'],
  a: 0, explanation: 'Variety includes structured, semi-structured and unstructured data.'
},
{
  id: 1456, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which framework is commonly used for distributed Big Data processing?',
  options: ['Apache Hadoop', 'Microsoft Paint', 'HTML', 'Notepad'],
  a: 0, explanation: 'Hadoop provides tools for distributed storage and processing of large datasets.'
},
{
  id: 1457, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does HDFS stand for?',
  options: ['Hadoop Distributed File System', 'High Data Format Service', 'Hybrid Database File Software', 'Hadoop Data Function System'],
  a: 0, explanation: 'HDFS is Hadoop’s distributed file system.'
},
{
  id: 1458, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is the primary role of HDFS?',
  options: ['Distributed storage of files', 'Designing web pages', 'Compiling JavaScript', 'Creating animations'],
  a: 0, explanation: 'HDFS stores large files across multiple machines.'
},
{
  id: 1459, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which Hadoop component manages cluster resources?',
  options: ['YARN', 'HTML', 'CSS', 'SMTP'],
  a: 0, explanation: 'YARN manages resources and schedules applications in Hadoop clusters.'
},
{
  id: 1460, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is MapReduce?',
  options: ['A distributed data-processing model', 'A web browser', 'A database language only', 'A network cable'],
  a: 0, explanation: 'MapReduce processes data through map and reduce stages.'
},
{
  id: 1461, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does the Map phase typically do?',
  options: ['Processes input records into intermediate key-value pairs', 'Deletes the entire cluster', 'Displays web pages', 'Encrypts every network packet'],
  a: 0, explanation: 'The Map phase transforms input data into intermediate key-value pairs.'
},
{
  id: 1462, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is the purpose of the Reduce phase?',
  options: ['Aggregates intermediate values', 'Creates HTML styles', 'Assigns IP addresses', 'Builds physical servers'],
  a: 0, explanation: 'Reduce combines or aggregates values associated with keys.'
},
{
  id: 1463, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which is an example of structured data?',
  options: ['Rows in a relational database table', 'An untagged audio recording', 'A photograph without metadata', 'A raw video stream'],
  a: 0, explanation: 'Structured data follows a defined schema, such as rows and columns.'
},
{
  id: 1464, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which is an example of unstructured data?',
  options: ['Images and videos', 'A fixed-column table only', 'A relational schema', 'A numeric field definition'],
  a: 0, explanation: 'Images, videos and free-form text are common examples of unstructured data.'
},
{
  id: 1465, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is Apache Spark known for?',
  options: ['Fast distributed data processing', 'Creating presentation slides only', 'Managing keyboard input', 'Replacing all network protocols'],
  a: 0, explanation: 'Spark supports distributed processing and can use in-memory computation.'
},
{
  id: 1466, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a data lake?',
  options: ['A repository for large amounts of data in varied formats', 'A physical cooling lake', 'A programming loop', 'A network router'],
  a: 0, explanation: 'A data lake can store raw data in multiple formats.'
},
{
  id: 1467, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a data warehouse mainly designed for?',
  options: ['Analytics and reporting', 'Running an operating system kernel', 'Rendering animations', 'Charging devices'],
  a: 0, explanation: 'Data warehouses organize data for querying, reporting and analysis.'
},
{
  id: 1468, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is ETL?',
  options: ['Extract, Transform, Load', 'Evaluate, Test, Launch', 'Encode, Transfer, Link', 'Enter, Track, Log'],
  a: 0, explanation: 'ETL extracts data, transforms it and loads it into a target system.'
},
{
  id: 1469, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a NoSQL database?',
  options: ['A database designed for non-relational data models', 'A spreadsheet application', 'A type of monitor', 'A programming operator'],
  a: 0, explanation: 'NoSQL databases support models such as document, key-value and wide-column.'
},
{
  id: 1470, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which is a document-oriented NoSQL database?',
  options: ['MongoDB', 'Microsoft Word', 'Apache HTTP Server', 'GCC'],
  a: 0, explanation: 'MongoDB stores records as flexible, document-like BSON objects.'
},
{
  id: 1471, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is data cleaning?',
  options: ['Finding and correcting errors or inconsistencies in data', 'Deleting every useful record', 'Installing a database', 'Compressing a video only'],
  a: 0, explanation: 'Data cleaning improves data quality by handling errors, duplicates and missing values.'
},
{
  id: 1472, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Why is data normalization sometimes used in analytics?',
  options: ['To place values on comparable scales', 'To increase duplicate records', 'To remove all labels', 'To disable computation'],
  a: 0, explanation: 'Normalization can scale numerical features to comparable ranges.'
},
{
  id: 1473, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is batch processing?',
  options: ['Processing collected data in groups', 'Processing only one pixel', 'A type of keyboard', 'A network address'],
  a: 0, explanation: 'Batch processing operates on accumulated data at scheduled or triggered intervals.'
},
{
  id: 1474, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is stream processing?',
  options: ['Processing data continuously as it arrives', 'Processing only printed pages', 'Storing data without reading it', 'Creating static images'],
  a: 0, explanation: 'Stream processing analyzes ongoing data flows with low latency.'
},
{
  id: 1475, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which tool is commonly associated with distributed event streaming?',
  options: ['Apache Kafka', 'Microsoft Paint', 'PowerPoint', 'FTP cable'],
  a: 0, explanation: 'Kafka is a distributed event-streaming platform.'
},
{
  id: 1476, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a Kafka topic?',
  options: ['A named stream of records', 'A physical hard drive', 'A type of CPU socket', 'A CSS selector'],
  a: 0, explanation: 'Topics organize records in Kafka and can be divided into partitions.'
},
{
  id: 1477, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does partitioning help achieve in distributed data systems?',
  options: ['Distributing data across multiple nodes', 'Removing all backups', 'Eliminating every query', 'Converting data into images'],
  a: 0, explanation: 'Partitioning splits data into manageable parts that can be distributed.'
},
{
  id: 1478, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is data replication?',
  options: ['Keeping copies of data on multiple nodes or systems', 'Renaming a variable', 'Sorting one array only', 'Deleting a database schema'],
  a: 0, explanation: 'Replication can improve availability and fault tolerance.'
},
{
  id: 1479, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does fault tolerance mean?',
  options: ['Continuing operation despite certain failures', 'Preventing users from reading data', 'Increasing screen brightness', 'Removing all network connections'],
  a: 0, explanation: 'Fault-tolerant systems can continue functioning when components fail.'
},
{
  id: 1480, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a cluster in distributed computing?',
  options: ['A group of connected computers working together', 'A single spreadsheet cell', 'A programming keyword', 'A monitor setting'],
  a: 0, explanation: 'A cluster combines multiple computers to perform coordinated tasks.'
},
{
  id: 1481, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is scalability?',
  options: ['The ability to handle increased workload by adding resources', 'The inability to store data', 'A method of deleting files', 'A graphical font'],
  a: 0, explanation: 'Scalability describes how a system accommodates growing demand.'
},
{
  id: 1482, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is horizontal scaling?',
  options: ['Adding more machines to a system', 'Increasing only one machine’s RAM', 'Reducing the number of nodes', 'Changing the screen resolution'],
  a: 0, explanation: 'Horizontal scaling adds more machines or nodes.'
},
{
  id: 1483, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is vertical scaling?',
  options: ['Increasing resources of an existing machine', 'Adding unrelated web pages', 'Splitting a file name', 'Changing a database password only'],
  a: 0, explanation: 'Vertical scaling increases CPU, memory or other resources on one machine.'
},
{
  id: 1484, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is metadata?',
  options: ['Data that describes other data', 'A type of computer cable', 'An empty database', 'A CPU instruction only'],
  a: 0, explanation: 'Metadata describes attributes such as data source, format and creation time.'
},
{
  id: 1485, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is exploratory data analysis (EDA)?',
  options: ['Examining data to understand patterns and distributions', 'Deploying a physical network', 'Writing only device drivers', 'Deleting all outliers without inspection'],
  a: 0, explanation: 'EDA uses summaries and visualizations to understand a dataset.'
},
{
  id: 1486, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which measure represents the arithmetic average?',
  options: ['Mean', 'Median', 'Mode', 'Range'],
  a: 0, explanation: 'The mean is the sum of values divided by the number of values.'
},
{
  id: 1487, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does the median represent?',
  options: ['The middle value after ordering the data', 'The largest value always', 'The sum of all values', 'The number of columns'],
  a: 0, explanation: 'The median is the central value in ordered data, with averaging used for an even count.'
},
{
  id: 1488, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is an outlier?',
  options: ['A value unusually far from most observations', 'The average of a dataset', 'A database table name', 'A file extension'],
  a: 0, explanation: 'An outlier is an observation that differs substantially from the rest.'
},
{
  id: 1489, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does correlation measure?',
  options: ['The strength and direction of association between variables', 'The size of a hard drive only', 'The number of database tables', 'The speed of a printer'],
  a: 0, explanation: 'Correlation measures association, but does not by itself establish causation.'
},
{
  id: 1490, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a dashboard in data analytics?',
  options: ['A visual display of important metrics', 'A physical server rack only', 'A compiler error', 'A type of database key'],
  a: 0, explanation: 'Dashboards present metrics and trends in a visual, accessible form.'
},
{
  id: 1491, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a data pipeline?',
  options: ['A sequence of steps that moves and transforms data', 'A computer cooling fan', 'A programming comment', 'A screen layout'],
  a: 0, explanation: 'Data pipelines automate data collection, transformation and delivery.'
},
{
  id: 1492, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Why is data governance important?',
  options: ['It defines policies for data quality, access and management', 'It makes every dataset public', 'It removes all metadata', 'It disables security controls'],
  a: 0, explanation: 'Data governance establishes responsibilities and policies for trustworthy data use.'
},
{
  id: 1493, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a schema?',
  options: ['A definition of data structure and organization', 'A backup power supply', 'A network cable type', 'A web animation'],
  a: 0, explanation: 'A schema describes fields, types and relationships in a data structure.'
},
{
  id: 1494, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is data ingestion?',
  options: ['Collecting and importing data into a system', 'Deleting all records', 'Displaying a keyboard', 'Compiling CSS'],
  a: 0, explanation: 'Data ingestion brings data from source systems into a target platform.'
},
{
  id: 1495, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Which file format is commonly used for semi-structured data?',
  options: ['JSON', 'MP3', 'BMP', 'EXE'],
  a: 0, explanation: 'JSON represents structured key-value data and is commonly used for semi-structured records.'
},
{
  id: 1496, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is the purpose of sampling in analytics?',
  options: ['Analyzing a subset to learn about a larger population', 'Copying every file repeatedly', 'Removing all numerical values', 'Disabling statistical analysis'],
  a: 0, explanation: 'Sampling can reduce processing cost when the subset represents the population appropriately.'
},
{
  id: 1497, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is a key-value data model?',
  options: ['Data is stored as keys associated with values', 'Data is stored only as pictures', 'Data is stored without any identifier', 'Data is stored only in HTML'],
  a: 0, explanation: 'Key-value stores retrieve values using unique or designated keys.'
},
{
  id: 1498, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What does data compression aim to do?',
  options: ['Reduce the storage size of data', 'Increase every file size', 'Change all numbers to text', 'Delete database indexes'],
  a: 0, explanation: 'Compression reduces the space needed to store or transmit data.'
},
{
  id: 1499, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'Why are indexes used in databases?',
  options: ['To speed up data retrieval for supported queries', 'To guarantee every query is free', 'To replace all stored data', 'To prevent data insertion entirely'],
  a: 0, explanation: 'Indexes can improve query performance, although they also use storage and affect writes.'
},
{
  id: 1500, branch: 'CSE', topic: 'Big Data Analytics', semester: 'Semester 7', subject: 'Big Data Analytics',
  q: 'What is the goal of predictive analytics?',
  options: ['Use data and models to estimate future or unknown outcomes', 'Only format text documents', 'Replace all data collection', 'Create physical network ports'],
  a: 0, explanation: 'Predictive analytics uses historical data and statistical or machine-learning models to estimate outcomes.'
},

{
  id: 1501, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is cybersecurity?',
  options: ['Protecting systems, networks and data from digital attacks', 'Designing only web page colors', 'Increasing monitor size', 'Writing documents only'],
  a: 0, explanation: 'Cybersecurity protects digital systems and information from unauthorized access and harm.'
},
{
  id: 1502, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What are the three elements of the CIA triad?',
  options: ['Confidentiality, Integrity, Availability', 'Control, Internet, Access', 'Cyber, Identity, Authentication', 'Confidentiality, Inspection, Authorization'],
  a: 0, explanation: 'The CIA triad is a foundational model for information security.'
},
{
  id: 1503, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What does confidentiality ensure?',
  options: ['Information is accessible only to authorized parties', 'Data is always publicly visible', 'Systems never need passwords', 'Every file is duplicated'],
  a: 0, explanation: 'Confidentiality prevents unauthorized disclosure of information.'
},
{
  id: 1504, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What does integrity mean in information security?',
  options: ['Maintaining the accuracy and completeness of data', 'Making every file public', 'Increasing CPU speed', 'Disabling backups'],
  a: 0, explanation: 'Integrity protects data from unauthorized or improper modification.'
},
{
  id: 1505, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What does availability mean?',
  options: ['Authorized users can access systems when needed', 'All users have administrator access', 'Data can never change', 'Passwords are unnecessary'],
  a: 0, explanation: 'Availability keeps services and information accessible to authorized users.'
},
{
  id: 1506, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is phishing?',
  options: ['Fraudulent communication designed to steal information', 'A data compression algorithm', 'A backup strategy', 'A hardware testing method'],
  a: 0, explanation: 'Phishing uses deceptive messages or sites to trick people into revealing sensitive information.'
},
{
  id: 1507, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is malware?',
  options: ['Software designed to cause harm or unauthorized activity', 'A legitimate database index', 'A programming textbook', 'A network cable'],
  a: 0, explanation: 'Malware includes malicious software such as viruses, ransomware and spyware.'
},
{
  id: 1508, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is ransomware?',
  options: ['Malware that extorts victims, often by encrypting data', 'A tool for sorting arrays', 'A secure backup itself', 'A web design framework'],
  a: 0, explanation: 'Ransomware commonly encrypts files and demands payment for recovery.'
},
{
  id: 1509, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a computer virus?',
  options: ['Malicious code that attaches to a host and replicates when executed', 'A network security policy', 'A backup server', 'A database query'],
  a: 0, explanation: 'Traditional computer viruses attach to files or programs and spread when those hosts run.'
},
{
  id: 1510, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a computer worm?',
  options: ['Malware that can self-replicate across systems or networks', 'A password manager', 'A secure hash', 'A firewall rule'],
  a: 0, explanation: 'Worms can spread between systems without needing to attach to a host file.'
},
{
  id: 1511, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a Trojan horse in cybersecurity?',
  options: ['Malicious software disguised as legitimate software', 'A trusted encryption standard', 'A network cable', 'A database backup'],
  a: 0, explanation: 'A Trojan tricks users into installing or running malicious software.'
},
{
  id: 1512, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is social engineering?',
  options: ['Manipulating people into revealing information or taking unsafe actions', 'Building social media layouts', 'Optimizing database queries', 'Compressing log files'],
  a: 0, explanation: 'Social engineering exploits human trust and behavior rather than only technical weaknesses.'
},
{
  id: 1513, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is multi-factor authentication (MFA)?',
  options: ['Using two or more distinct authentication factors', 'Using the same password twice', 'Sharing one account with everyone', 'Disabling account verification'],
  a: 0, explanation: 'MFA requires more than one distinct factor, such as a password and a security key.'
},
{
  id: 1514, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'Which is an example of something you know for authentication?',
  options: ['A password', 'A fingerprint', 'A physical security token', 'A face scan'],
  a: 0, explanation: 'A password is a knowledge-based authentication factor.'
},
{
  id: 1515, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is encryption?',
  options: ['Transforming readable data into protected ciphertext using a key', 'Deleting every file permanently', 'Compressing images only', 'Sorting a database'],
  a: 0, explanation: 'Encryption protects information by converting plaintext into ciphertext.'
},
{
  id: 1516, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is symmetric encryption?',
  options: ['Using the same secret key for encryption and decryption', 'Using no key at all', 'Using only public keys', 'Storing data in plain text'],
  a: 0, explanation: 'Symmetric cryptography uses a shared secret key for both operations.'
},
{
  id: 1517, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is asymmetric cryptography based on?',
  options: ['A public key and a corresponding private key', 'One shared password only', 'No mathematical keys', 'A file extension'],
  a: 0, explanation: 'Asymmetric cryptography uses a mathematically related public-private key pair.'
},
{
  id: 1518, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a cryptographic hash function used for?',
  options: ['Mapping input data to a fixed-length digest', 'Recovering any plaintext from its digest', 'Increasing monitor brightness', 'Assigning IP addresses'],
  a: 0, explanation: 'A cryptographic hash produces a fixed-length digest and is designed to resist certain attacks.'
},
{
  id: 1519, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a digital signature primarily used to support?',
  options: ['Authenticity, integrity and evidence of signing', 'Data compression only', 'Physical access to a building', 'Screen sharing'],
  a: 0, explanation: 'Digital signatures help verify the signer and detect changes to signed data.'
},
{
  id: 1520, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a firewall?',
  options: ['A system that filters network traffic according to rules', 'A tool for editing photographs', 'A programming language', 'A data visualization chart'],
  a: 0, explanation: 'Firewalls control permitted and blocked network traffic.'
},
{
  id: 1521, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is an intrusion detection system (IDS)?',
  options: ['A system that monitors activity for suspicious behavior', 'A tool for designing logos', 'A database backup format', 'A programming loop'],
  a: 0, explanation: 'An IDS monitors events and raises alerts about potential intrusions.'
},
{
  id: 1522, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'How does an intrusion prevention system (IPS) differ from a basic IDS?',
  options: ['An IPS can actively block detected malicious activity', 'An IPS only prints documents', 'An IPS is a type of keyboard', 'An IPS cannot inspect traffic'],
  a: 0, explanation: 'An IPS can be configured to take preventive action against detected threats.'
},
{
  id: 1523, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a denial-of-service (DoS) attack?',
  options: ['Overwhelming a service to make it unavailable', 'Improving service availability', 'Creating a secure backup', 'Updating a user profile'],
  a: 0, explanation: 'A DoS attack attempts to disrupt access to a system or service.'
},
{
  id: 1524, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a distributed denial-of-service (DDoS) attack?',
  options: ['An availability attack launched from many systems', 'A single-user password reset', 'A database indexing method', 'A local file compression method'],
  a: 0, explanation: 'A DDoS attack uses multiple sources to overwhelm a target.'
},
{
  id: 1525, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is SQL injection?',
  options: ['Manipulating database queries through unsafe input handling', 'A secure backup method', 'A way to encrypt Wi-Fi', 'A CPU scheduling algorithm'],
  a: 0, explanation: 'SQL injection can occur when untrusted input is improperly incorporated into SQL queries.'
},
{
  id: 1526, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'Which practice helps prevent SQL injection?',
  options: ['Parameterized queries', 'Concatenating all user input into SQL', 'Disabling database permissions', 'Using shorter table names'],
  a: 0, explanation: 'Parameterized queries separate SQL instructions from user-supplied values.'
},
{
  id: 1527, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is cross-site scripting (XSS)?',
  options: ['Injecting malicious scripts into web content viewed by users', 'Encrypting a hard drive', 'Updating a router firmware', 'Backing up a database'],
  a: 0, explanation: 'XSS occurs when a web application allows untrusted script content to execute in a user’s browser.'
},
{
  id: 1528, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What does HTTPS provide when correctly configured?',
  options: ['Encrypted communication and server authentication using TLS', 'Guaranteed malware-free downloads', 'Unlimited storage', 'Complete protection from phishing'],
  a: 0, explanation: 'HTTPS uses TLS to protect data in transit and authenticate the server.'
},
{
  id: 1529, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a VPN commonly used for?',
  options: ['Creating an encrypted connection over an untrusted network', 'Making every website safe', 'Removing all malware automatically', 'Replacing all passwords'],
  a: 0, explanation: 'A VPN can protect traffic between a device and a VPN endpoint over an untrusted network.'
},
{
  id: 1530, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'Why should software be updated regularly?',
  options: ['To apply fixes, including security patches', 'To guarantee that attacks are impossible', 'To delete all user files', 'To remove all authentication'],
  a: 0, explanation: 'Updates often fix known vulnerabilities and improve reliability.'
},
{
  id: 1531, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is the principle of least privilege?',
  options: ['Grant only the permissions needed for a task', 'Give every user administrator rights', 'Share passwords among employees', 'Disable audit logs'],
  a: 0, explanation: 'Least privilege limits the impact of mistakes and compromised accounts.'
},
{
  id: 1532, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is access control?',
  options: ['Managing who can access which resources', 'Increasing internet speed', 'Compressing network packets', 'Formatting a hard drive'],
  a: 0, explanation: 'Access control enforces permissions for users and systems.'
},
{
  id: 1533, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is the difference between authentication and authorization?',
  options: ['Authentication verifies identity; authorization determines permitted actions', 'They always mean exactly the same thing', 'Authorization verifies identity only', 'Authentication assigns file sizes'],
  a: 0, explanation: 'Authentication asks who you are; authorization asks what you may do.'
},
{
  id: 1534, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a brute-force password attack?',
  options: ['Trying many possible passwords systematically', 'Creating a secure password manager', 'Encrypting a network connection', 'Installing a security update'],
  a: 0, explanation: 'Brute-force attacks test password candidates until one succeeds or attempts are stopped.'
},
{
  id: 1535, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'Why is a password salt used when hashing passwords?',
  options: ['To make identical passwords produce different stored hashes', 'To make passwords readable by everyone', 'To eliminate the need for hashing', 'To store passwords in plain text'],
  a: 0, explanation: 'A unique salt helps defend against precomputed hash attacks and reveals fewer password matches.'
},
{
  id: 1536, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'Which is a safer way to store user passwords?',
  options: ['A dedicated password-hashing algorithm with unique salts', 'Plain text in a public file', 'Reversible encryption with a shared public key', 'A screenshot of every password'],
  a: 0, explanation: 'Password-specific hashing algorithms such as Argon2id, scrypt or bcrypt are designed for password storage.'
},
{
  id: 1537, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a security vulnerability?',
  options: ['A weakness that could be exploited', 'A guaranteed security feature', 'A backup copy', 'A network performance chart'],
  a: 0, explanation: 'Vulnerabilities are weaknesses in software, hardware, configuration or processes.'
},
{
  id: 1538, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a security patch?',
  options: ['An update that fixes a software weakness or defect', 'A new monitor sticker', 'A database table', 'A type of phishing email'],
  a: 0, explanation: 'Security patches remediate known vulnerabilities.'
},
{
  id: 1539, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is penetration testing?',
  options: ['Authorized testing to identify exploitable security weaknesses', 'Unauthorized theft of data', 'Formatting storage devices', 'Measuring screen resolution'],
  a: 0, explanation: 'Penetration testing assesses security with permission and a defined scope.'
},
{
  id: 1540, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is vulnerability scanning?',
  options: ['Using tools to identify known weaknesses or misconfigurations', 'Guaranteeing every vulnerability is found', 'Creating user accounts only', 'Compressing files'],
  a: 0, explanation: 'Scanners look for known issues, but results require validation and do not guarantee complete coverage.'
},
{
  id: 1541, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is an incident response plan?',
  options: ['A documented approach for handling security incidents', 'A plan for choosing monitor colors', 'A database schema only', 'A software license key'],
  a: 0, explanation: 'Incident response plans define preparation, detection, containment, recovery and related activities.'
},
{
  id: 1542, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'Why are backups important for security?',
  options: ['They help recover data after loss or certain attacks', 'They prevent every attack from occurring', 'They remove the need for access controls', 'They make all data public'],
  a: 0, explanation: 'Reliable, tested backups support recovery from deletion, failures and ransomware incidents.'
},
{
  id: 1543, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is the purpose of a security audit?',
  options: ['Assessing controls, policies and compliance with requirements', 'Increasing CPU clock speed', 'Creating web animations', 'Removing all system logs'],
  a: 0, explanation: 'Security audits evaluate whether security controls and processes meet requirements.'
},
{
  id: 1544, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is log monitoring used for?',
  options: ['Detecting suspicious events and investigating activity', 'Changing screen brightness', 'Creating passwords automatically in every case', 'Compressing photographs'],
  a: 0, explanation: 'Logs provide records that can help detect, investigate and respond to incidents.'
},
{
  id: 1545, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What does data classification help determine?',
  options: ['How data should be handled and protected', 'The color of a computer case', 'The size of a keyboard', 'The order of program statements'],
  a: 0, explanation: 'Classification labels data by sensitivity or importance to guide its protection.'
},
{
  id: 1546, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is data minimization?',
  options: ['Collecting only data necessary for a defined purpose', 'Collecting every possible personal detail', 'Making all data public', 'Disabling data retention rules'],
  a: 0, explanation: 'Data minimization reduces unnecessary collection and associated privacy risks.'
},
{
  id: 1547, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a zero-day vulnerability?',
  options: ['A vulnerability exploited before a fix is available or widely deployed', 'A vulnerability that is always harmless', 'A password with zero characters', 'A scheduled backup'],
  a: 0, explanation: 'Zero-day refers to a vulnerability for which defenders may lack an available fix at the time of exploitation.'
},
{
  id: 1548, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is endpoint security?',
  options: ['Protecting devices such as laptops, desktops and phones', 'Securing only printed documents', 'Managing office furniture', 'Optimizing database joins'],
  a: 0, explanation: 'Endpoint security protects devices that connect to an organization’s systems.'
},
{
  id: 1549, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is security awareness training intended to improve?',
  options: ['People’s ability to recognize and avoid security risks', 'The size of the hard drive', 'The number of web animations', 'The speed of a printer'],
  a: 0, explanation: 'Training helps people identify phishing, handle information safely and report incidents.'
},
{
  id: 1550, branch: 'CSE', topic: 'Cyber Security', semester: 'Semester 7', subject: 'Cyber Security',
  q: 'What is a responsible first step when discovering a security flaw in a system you do not own?',
  options: ['Follow the owner’s authorized disclosure or reporting process', 'Exploit it to access private data', 'Publish sensitive credentials', 'Delete the owner’s backups'],
  a: 0, explanation: 'Responsible disclosure uses authorized reporting channels and avoids unnecessary harm.'
},

{
  id: 1551, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is the Internet of Things (IoT)?',
  options: ['A network of physical objects with sensing or communication capabilities', 'A text editor', 'A programming language only', 'A type of spreadsheet'],
  a: 0, explanation: 'IoT connects physical devices that collect, exchange or act on data.'
},
{
  id: 1552, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which component measures a physical quantity in an IoT system?',
  options: ['Sensor', 'Actuator only', 'Web browser', 'Text editor'],
  a: 0, explanation: 'Sensors measure properties such as temperature, light, pressure or motion.'
},
{
  id: 1553, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is the role of an actuator?',
  options: ['Performing a physical action in response to a control signal', 'Only displaying text', 'Storing passwords in a browser', 'Converting every file to PDF'],
  a: 0, explanation: 'Actuators can move mechanisms, switch relays or control valves.'
},
{
  id: 1554, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which board is commonly used in beginner IoT projects?',
  options: ['Arduino', 'A printer cartridge', 'A monitor stand', 'A paper notebook'],
  a: 0, explanation: 'Arduino boards are commonly used to prototype sensor and actuator projects.'
},
{
  id: 1555, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is Raspberry Pi?',
  options: ['A small single-board computer', 'A temperature sensor by definition', 'A network protocol', 'A database query'],
  a: 0, explanation: 'Raspberry Pi is a family of small computers used for programming and embedded projects.'
},
{
  id: 1556, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is an embedded system?',
  options: ['A computer system designed for a dedicated function', 'A general-purpose essay', 'A cloud storage subscription', 'A web page color'],
  a: 0, explanation: 'Embedded systems integrate computing into devices for specific tasks.'
},
{
  id: 1557, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which protocol is commonly used for lightweight IoT messaging?',
  options: ['MQTT', 'HDMI', 'JPEG', 'DOCX'],
  a: 0, explanation: 'MQTT is a lightweight publish-subscribe messaging protocol often used in IoT.'
},
{
  id: 1558, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What communication pattern does MQTT use?',
  options: ['Publish-subscribe', 'Only peer-to-peer file editing', 'Batch printing', 'Keyboard polling only'],
  a: 0, explanation: 'MQTT clients publish messages to topics and subscribers receive matching messages through a broker.'
},
{
  id: 1559, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is the role of an MQTT broker?',
  options: ['Receiving published messages and forwarding them to subscribers', 'Measuring room temperature directly', 'Acting as a physical actuator', 'Writing firmware automatically in every case'],
  a: 0, explanation: 'The broker manages message routing between MQTT publishers and subscribers.'
},
{
  id: 1560, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is a microcontroller?',
  options: ['An integrated circuit designed to control embedded tasks', 'A cloud region', 'A database table', 'A web stylesheet'],
  a: 0, explanation: 'Microcontrollers commonly integrate a CPU, memory and peripherals on one chip.'
},
{
  id: 1561, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What does GPIO stand for?',
  options: ['General-Purpose Input/Output', 'Global Program Internet Operation', 'General Processing Internal Order', 'Graphical Port Input Option'],
  a: 0, explanation: 'GPIO pins can be configured as digital inputs or outputs.'
},
{
  id: 1562, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is an analog sensor output?',
  options: ['A signal that varies continuously over a range', 'Only a fixed text string', 'A database key', 'A Wi-Fi password'],
  a: 0, explanation: 'Analog signals represent continuously varying measured quantities.'
},
{
  id: 1563, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is an ADC used for?',
  options: ['Converting an analog signal into a digital representation', 'Converting a web page into a sensor', 'Encrypting every network packet', 'Controlling cloud billing'],
  a: 0, explanation: 'An analog-to-digital converter samples and quantizes an analog signal.'
},
{
  id: 1564, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What does PWM stand for?',
  options: ['Pulse-Width Modulation', 'Program-Wide Memory', 'Packet-Wire Mapping', 'Power-Web Management'],
  a: 0, explanation: 'PWM controls the proportion of time a digital signal stays high during a period.'
},
{
  id: 1565, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which wireless technology is commonly used by many smart-home devices?',
  options: ['Wi-Fi', 'VGA', 'SATA', 'VGA cable'],
  a: 0, explanation: 'Wi-Fi is widely used to connect smart-home devices to local networks and the internet.'
},
{
  id: 1566, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which technology is designed for low-power, short-range personal-area networking?',
  options: ['Bluetooth Low Energy (BLE)', 'HDMI', 'SAS storage', 'DisplayPort'],
  a: 0, explanation: 'BLE supports low-power wireless communication for suitable nearby devices.'
},
{
  id: 1567, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is Zigbee commonly used for?',
  options: ['Low-power wireless mesh networks', 'High-resolution video editing', 'Desktop publishing', 'Compiling Java code'],
  a: 0, explanation: 'Zigbee is used in low-power control and sensor networks.'
},
{
  id: 1568, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is LoRaWAN designed to support?',
  options: ['Long-range, low-power wide-area IoT communication', 'High-speed local video rendering', 'Keyboard communication only', 'Desktop printing'],
  a: 0, explanation: 'LoRaWAN connects low-power devices over wide areas with modest data rates.'
},
{
  id: 1569, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is edge computing in IoT?',
  options: ['Processing data near the devices that generate it', 'Processing everything only on a distant mainframe', 'Deleting sensor readings immediately', 'Removing every sensor'],
  a: 0, explanation: 'Edge computing can reduce latency and bandwidth use by processing data near its source.'
},
{
  id: 1570, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is cloud computing used for in many IoT systems?',
  options: ['Remote storage, processing and device management', 'Measuring voltage without hardware', 'Replacing all sensors', 'Guaranteeing zero network delay'],
  a: 0, explanation: 'Cloud platforms can ingest, store, analyze and manage IoT data at scale.'
},
{
  id: 1571, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is a smart sensor?',
  options: ['A sensor with integrated processing or communication features', 'A sensor made only of paper', 'A web browser extension', 'A file compression utility'],
  a: 0, explanation: 'Smart sensors may perform signal processing, calibration or communication locally.'
},
{
  id: 1572, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which sensor is suitable for measuring temperature?',
  options: ['Thermistor', 'Photodiode only', 'Microphone only', 'Gyroscope only'],
  a: 0, explanation: 'A thermistor changes resistance with temperature and can be used to measure it.'
},
{
  id: 1573, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which sensor can detect light intensity?',
  options: ['Light-dependent resistor (LDR)', 'Accelerometer only', 'Relay', 'Speaker'],
  a: 0, explanation: 'An LDR changes resistance in response to incident light.'
},
{
  id: 1574, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What does an accelerometer measure?',
  options: ['Acceleration', 'Humidity only', 'Sound frequency only', 'Water acidity only'],
  a: 0, explanation: 'Accelerometers measure acceleration and can help detect motion or orientation changes.'
},
{
  id: 1575, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is an IoT gateway?',
  options: ['A device that connects IoT devices to other networks or services', 'A temperature measurement unit only', 'A battery chemistry', 'A programming variable'],
  a: 0, explanation: 'Gateways can aggregate data, translate protocols and connect local devices to upstream systems.'
},
{
  id: 1576, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Why is device interoperability important in IoT?',
  options: ['It allows different devices and systems to work together', 'It forces every device to use identical hardware', 'It prevents all data exchange', 'It removes the need for protocols'],
  a: 0, explanation: 'Interoperability helps devices using compatible standards or interfaces exchange information.'
},
{
  id: 1577, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is a common security risk in IoT devices?',
  options: ['Default or weak passwords', 'Using any sensor at all', 'Having a device label', 'Using a power cable'],
  a: 0, explanation: 'Default credentials can allow unauthorized access if they are not changed or otherwise secured.'
},
{
  id: 1578, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Why should IoT firmware be updated?',
  options: ['To fix vulnerabilities and improve device reliability', 'To make devices impossible to attack', 'To disable every sensor', 'To increase data collection without limits'],
  a: 0, explanation: 'Firmware updates can address security flaws and functional defects.'
},
{
  id: 1579, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is secure boot?',
  options: ['Verifying software components during startup before running them', 'Starting a device without any firmware', 'Sending every password to a server', 'Disabling authentication permanently'],
  a: 0, explanation: 'Secure boot helps ensure that trusted, authorized software runs during device startup.'
},
{
  id: 1580, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Why is encryption useful for IoT communication?',
  options: ['It helps protect transmitted data from unauthorized reading', 'It guarantees all sensors are accurate', 'It increases battery capacity', 'It eliminates the need for updates'],
  a: 0, explanation: 'Encryption helps keep intercepted communication confidential when correctly implemented.'
},
{
  id: 1581, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is device provisioning?',
  options: ['Preparing and configuring a device for authorized use', 'Removing all device identity', 'Measuring rainfall only', 'Compressing a video file'],
  a: 0, explanation: 'Provisioning may establish device identity, credentials, configuration and service access.'
},
{
  id: 1582, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is telemetry in an IoT environment?',
  options: ['Remote collection and transmission of measurements or status data', 'A type of physical actuator', 'A desktop wallpaper', 'A database password'],
  a: 0, explanation: 'Telemetry sends measured or operational information from devices to monitoring systems.'
},
{
  id: 1583, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is a digital twin?',
  options: ['A digital representation of a physical object or process', 'Two identical physical batteries', 'A type of network cable', 'A password reset process'],
  a: 0, explanation: 'A digital twin represents a physical system and may be updated using operational data.'
},
{
  id: 1584, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which is an example of an IoT smart-city application?',
  options: ['Adaptive street lighting based on sensed conditions', 'A printed textbook', 'A manual pencil sharpener', 'A static poster'],
  a: 0, explanation: 'Connected sensors and controllers can help manage street lighting and city infrastructure.'
},
{
  id: 1585, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'How can IoT support precision agriculture?',
  options: ['Monitoring soil moisture and automating irrigation', 'Replacing every crop with a sensor', 'Preventing all weather changes', 'Eliminating the need for water'],
  a: 0, explanation: 'Sensor data can help farmers apply water and other resources more efficiently.'
},
{
  id: 1586, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is a wearable IoT device?',
  options: ['A connected device worn on the body', 'A fixed database server only', 'A network switch only', 'A paper document'],
  a: 0, explanation: 'Wearables can collect or exchange data about activity, environment or other measurements.'
},
{
  id: 1587, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Why is power management important in battery-powered IoT devices?',
  options: ['It helps extend operating life between charges', 'It guarantees unlimited battery life', 'It increases screen size', 'It eliminates wireless protocols'],
  a: 0, explanation: 'Low-power modes and efficient communication reduce energy consumption.'
},
{
  id: 1588, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is duty cycling?',
  options: ['Alternating between active and low-power or sleep states', 'Running every component at full power continuously', 'Changing device ownership', 'Rotating a database table'],
  a: 0, explanation: 'Duty cycling limits active time to conserve energy.'
},
{
  id: 1589, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is latency in an IoT system?',
  options: ['The delay between an event and the corresponding response or delivery', 'The total number of sensors', 'The physical size of a device', 'The amount of stored text'],
  a: 0, explanation: 'Latency measures delay and matters in time-sensitive applications.'
},
{
  id: 1590, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is an IoT dashboard used for?',
  options: ['Viewing device status, measurements and alerts', 'Replacing every physical sensor', 'Manufacturing microcontrollers', 'Writing firmware automatically in all cases'],
  a: 0, explanation: 'Dashboards help users monitor device data and system health.'
},
{
  id: 1591, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which protocol is commonly used for web APIs in IoT services?',
  options: ['HTTP', 'VGA', 'SATA', 'USB-A'],
  a: 0, explanation: 'HTTP is widely used by web APIs and many IoT cloud services.'
},
{
  id: 1592, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is CoAP designed for?',
  options: ['Constrained devices and networks using a lightweight web transfer protocol', 'Editing high-resolution video', 'Managing desktop fonts', 'Printing large documents'],
  a: 0, explanation: 'CoAP is designed for constrained environments and commonly uses UDP.'
},
{
  id: 1593, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is IPv6 useful for in IoT?',
  options: ['Providing a very large address space', 'Increasing battery capacity directly', 'Measuring temperature', 'Replacing application logic'],
  a: 0, explanation: 'IPv6 offers a much larger address space than IPv4, supporting many connected devices.'
},
{
  id: 1594, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is the purpose of an IoT device identity?',
  options: ['Distinguishing and managing a device within a system', 'Changing the physical temperature', 'Compressing sensor readings', 'Replacing network connectivity'],
  a: 0, explanation: 'Device identity supports registration, access control and lifecycle management.'
},
{
  id: 1595, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is sensor calibration?',
  options: ['Comparing and adjusting sensor measurements against a reference', 'Installing a new web browser', 'Encrypting a database', 'Changing a Wi-Fi name only'],
  a: 0, explanation: 'Calibration helps improve measurement accuracy by comparing readings to known references.'
},
{
  id: 1596, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What does sensor fusion mean?',
  options: ['Combining information from multiple sensors', 'Removing every sensor from a system', 'Using only one measurement forever', 'Converting all data to passwords'],
  a: 0, explanation: 'Sensor fusion combines readings to improve estimates or understanding of a situation.'
},
{
  id: 1597, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is geofencing in connected devices?',
  options: ['Triggering actions based on a defined geographic boundary', 'Encrypting a file with a map', 'Measuring CPU temperature only', 'Compressing satellite images'],
  a: 0, explanation: 'Geofencing uses a virtual geographic boundary to trigger events when devices enter or leave an area.'
},
{
  id: 1598, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'What is remote device management?',
  options: ['Monitoring and configuring devices over a network', 'Physically replacing every device battery', 'Disabling device identification', 'Writing printed manuals only'],
  a: 0, explanation: 'Remote management supports configuration, monitoring and maintenance of distributed devices.'
},
{
  id: 1599, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Why should an IoT system validate incoming data?',
  options: ['To reject malformed or unexpected inputs and improve reliability', 'To make all data trustworthy automatically', 'To remove all sensor readings', 'To disable network security'],
  a: 0, explanation: 'Validation helps prevent processing errors and reduces risks from malformed or untrusted data.'
},
{
  id: 1600, branch: 'CSE', topic: 'Internet of Things (IoT)', semester: 'Semester 7', subject: 'Internet of Things (IoT)',
  q: 'Which is a good practice when designing an IoT system?',
  options: ['Plan for security, privacy, updates and failure recovery', 'Use default passwords forever', 'Collect unlimited personal data', 'Ignore power constraints'],
  a: 0, explanation: 'Secure and reliable IoT design considers the device lifecycle, data protection and recovery.'
},

{
  id: 1601, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What does DevOps combine?',
  options: ['Software development and IT operations practices', 'Only graphic design and printing', 'Only hardware manufacturing', 'Only spreadsheet formatting'],
  a: 0, explanation: 'DevOps encourages collaboration and automation across development and operations.'
},
{
  id: 1602, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is the main goal of DevOps?',
  options: ['Deliver reliable software faster through collaboration and automation', 'Eliminate all software testing', 'Prevent all code changes', 'Replace programming with manual paperwork'],
  a: 0, explanation: 'DevOps aims to improve delivery speed, reliability and feedback.'
},
{
  id: 1603, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Continuous Integration (CI)?',
  options: ['Frequently merging code changes and validating them automatically', 'Deploying code without testing under any circumstances', 'Writing code only once a year', 'Manually copying every file to production'],
  a: 0, explanation: 'CI integrates changes frequently and runs automated checks to catch problems early.'
},
{
  id: 1604, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Continuous Delivery?',
  options: ['Keeping software in a releasable state through automated delivery practices', 'Automatically deleting production data', 'Stopping all testing', 'Using only manual deployments'],
  a: 0, explanation: 'Continuous Delivery prepares validated changes for release, often with a manual release decision.'
},
{
  id: 1605, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Continuous Deployment?',
  options: ['Automatically releasing qualifying changes to production', 'Merging code without validation', 'Creating only local backups', 'Manually editing every server'],
  a: 0, explanation: 'Continuous Deployment automatically deploys changes that pass the required pipeline checks.'
},
{
  id: 1606, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a CI/CD pipeline?',
  options: ['An automated sequence for building, testing and delivering software', 'A physical water pipe', 'A database table only', 'A computer monitor setting'],
  a: 0, explanation: 'CI/CD pipelines automate repeatable steps from code changes to delivery or deployment.'
},
{
  id: 1607, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'Which tool is commonly used for source control?',
  options: ['Git', 'Microsoft Paint', 'VLC only', 'Calculator'],
  a: 0, explanation: 'Git tracks changes to source files and supports collaborative development.'
},
{
  id: 1608, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a Git repository?',
  options: ['A location where project files and version history are maintained', 'A physical router', 'A testing keyboard', 'A web browser tab'],
  a: 0, explanation: 'A Git repository stores project content and its version history.'
},
{
  id: 1609, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What does a Git commit represent?',
  options: ['A recorded snapshot of changes in the repository history', 'A cloud bill', 'A running container by definition', 'A physical server reboot'],
  a: 0, explanation: 'A commit records a set of changes and metadata in version history.'
},
{
  id: 1610, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a Git branch used for?',
  options: ['Developing changes separately from another line of work', 'Increasing RAM physically', 'Encrypting all network traffic', 'Replacing the operating system'],
  a: 0, explanation: 'Branches allow parallel work without immediately changing another branch.'
},
{
  id: 1611, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a merge conflict?',
  options: ['A situation where Git cannot automatically reconcile overlapping changes', 'A successful automated test', 'A cloud storage tier', 'A type of network cable'],
  a: 0, explanation: 'Conflicting edits may require a developer to choose or combine the intended changes.'
},
{
  id: 1612, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Jenkins commonly used for?',
  options: ['Automating build, test and delivery pipelines', 'Editing photos only', 'Measuring room humidity', 'Managing keyboard layouts'],
  a: 0, explanation: 'Jenkins is an automation server commonly used for CI/CD workflows.'
},
{
  id: 1613, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Docker?',
  options: ['A platform for building and running containers', 'A database query language', 'A hardware sensor', 'A programming operator'],
  a: 0, explanation: 'Docker provides tools for packaging and running applications in containers.'
},
{
  id: 1614, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a container?',
  options: ['An isolated environment for running an application and its dependencies', 'A physical shipping box only', 'A source-code comment', 'A network protocol by definition'],
  a: 0, explanation: 'Containers package applications and dependencies while sharing the host operating-system kernel.'
},
{
  id: 1615, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a Docker image?',
  options: ['A template used to create containers', 'A running process only', 'A physical hard drive', 'A network firewall rule'],
  a: 0, explanation: 'An image contains the filesystem and configuration used to create containers.'
},
{
  id: 1616, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is the purpose of a Dockerfile?',
  options: ['Defining instructions for building a Docker image', 'Storing a live database backup only', 'Creating Git branches automatically in every case', 'Configuring a physical router'],
  a: 0, explanation: 'A Dockerfile describes the steps used to build an image.'
},
{
  id: 1617, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Kubernetes primarily used for?',
  options: ['Orchestrating containerized applications', 'Writing presentation slides', 'Replacing all source control', 'Editing image pixels'],
  a: 0, explanation: 'Kubernetes automates deployment, scaling and management of containerized workloads.'
},
{
  id: 1618, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a Kubernetes Pod?',
  options: ['The smallest deployable unit in Kubernetes', 'A Git commit message', 'A cloud billing account', 'A Dockerfile instruction'],
  a: 0, explanation: 'A Pod contains one or more closely related containers and shared resources.'
},
{
  id: 1619, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Infrastructure as Code (IaC)?',
  options: ['Managing infrastructure using machine-readable configuration or code', 'Building servers only by hand', 'Writing user manuals only', 'Manually changing each server without records'],
  a: 0, explanation: 'IaC makes infrastructure provisioning and configuration repeatable and reviewable.'
},
{
  id: 1620, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'Which tool is commonly used for infrastructure provisioning?',
  options: ['Terraform', 'Microsoft Paint', 'A media player', 'A calculator'],
  a: 0, explanation: 'Terraform uses configuration to provision and manage infrastructure resources.'
},
{
  id: 1621, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Ansible commonly used for?',
  options: ['Configuration management and automation', 'Editing video frames', 'Drawing hardware circuits only', 'Managing social media posts'],
  a: 0, explanation: 'Ansible automates configuration, application deployment and related IT tasks.'
},
{
  id: 1622, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What does configuration management help ensure?',
  options: ['Systems are configured consistently and repeatably', 'Every server has unrelated settings', 'Testing is never required', 'Source code cannot be changed'],
  a: 0, explanation: 'Configuration management tracks and applies intended system settings.'
},
{
  id: 1623, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is monitoring in DevOps?',
  options: ['Collecting and evaluating system and application health data', 'Writing only marketing text', 'Disabling system logs', 'Removing all alerts'],
  a: 0, explanation: 'Monitoring helps teams detect failures, performance issues and abnormal behavior.'
},
{
  id: 1624, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is observability?',
  options: ['Understanding internal system behavior through outputs such as logs, metrics and traces', 'Making every system public', 'Turning off all telemetry', 'Installing a larger monitor'],
  a: 0, explanation: 'Observability helps teams infer system state from emitted telemetry.'
},
{
  id: 1625, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a log in software operations?',
  options: ['A time-ordered record of events or messages', 'A physical power cable', 'A source-code branch', 'A container image'],
  a: 0, explanation: 'Logs record application or system events useful for troubleshooting and auditing.'
},
{
  id: 1626, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a metric in monitoring?',
  options: ['A numerical measurement of system behavior', 'A source-code comment only', 'A physical server label', 'A Git branch name'],
  a: 0, explanation: 'Metrics quantify values such as request rate, latency, memory usage and error rate.'
},
{
  id: 1627, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is distributed tracing used for?',
  options: ['Following a request across multiple services', 'Encrypting files on a single laptop only', 'Building container images', 'Creating a source-code license'],
  a: 0, explanation: 'Distributed tracing shows how requests travel through services and where delays occur.'
},
{
  id: 1628, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is an alert in monitoring?',
  options: ['A notification triggered by a defined condition', 'A database table by definition', 'A container runtime', 'A code formatting style'],
  a: 0, explanation: 'Alerts notify responsible people or systems when monitored conditions need attention.'
},
{
  id: 1629, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is rollback in software deployment?',
  options: ['Returning to a previous known-good version or state', 'Deleting the source repository permanently', 'Increasing the number of features', 'Disabling all backups'],
  a: 0, explanation: 'Rollback helps restore service when a new release causes problems.'
},
{
  id: 1630, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a blue-green deployment?',
  options: ['Maintaining two environments and switching traffic to the new one', 'Using only two programming languages', 'Deploying without any environment', 'Deleting the old version before testing the new one'],
  a: 0, explanation: 'Blue-green deployment enables switching between a current environment and a prepared replacement.'
},
{
  id: 1631, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a canary deployment?',
  options: ['Releasing a change to a small portion of users or instances first', 'Releasing to every user with no monitoring', 'Deploying only on a developer laptop', 'Removing the production environment'],
  a: 0, explanation: 'Canary releases limit initial exposure and help teams assess the change before wider rollout.'
},
{
  id: 1632, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a rolling deployment?',
  options: ['Updating instances gradually while the service remains available when possible', 'Rebooting every instance simultaneously in all cases', 'Never replacing old versions', 'Removing all load balancers'],
  a: 0, explanation: 'Rolling deployments replace instances in stages to reduce disruption.'
},
{
  id: 1633, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a unit test?',
  options: ['A test of a small, isolated piece of code', 'A full production migration by definition', 'A physical hardware shipment', 'A network routing protocol'],
  a: 0, explanation: 'Unit tests validate individual functions, methods or components in isolation.'
},
{
  id: 1634, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is an integration test?',
  options: ['A test of interactions between components or systems', 'A test of font color only', 'A Git commit', 'A container registry'],
  a: 0, explanation: 'Integration tests check whether connected components work together correctly.'
},
{
  id: 1635, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is an end-to-end test?',
  options: ['Testing a complete workflow through the system', 'Testing only a single arithmetic operator', 'Creating a source-code branch', 'Compressing application logs'],
  a: 0, explanation: 'End-to-end tests validate user-facing workflows across integrated components.'
},
{
  id: 1636, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'Why is automated testing useful in CI/CD?',
  options: ['It provides repeatable feedback on changes', 'It guarantees that software has no bugs', 'It replaces every form of review', 'It prevents all code commits'],
  a: 0, explanation: 'Automated tests catch many regressions quickly, though they cannot prove software is bug-free.'
},
{
  id: 1637, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a build artifact?',
  options: ['An output produced by a build, such as a package or binary', 'A meeting invitation', 'A network cable', 'A password policy'],
  a: 0, explanation: 'Build artifacts are generated outputs that can be tested, stored or deployed.'
},
{
  id: 1638, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a container registry?',
  options: ['A service for storing and distributing container images', 'A device for measuring temperature', 'A source-code editor only', 'A database normalization rule'],
  a: 0, explanation: 'Registries store image versions and make them available to authorized systems.'
},
{
  id: 1639, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'Why should secrets not be hard-coded into source code?',
  options: ['They can be exposed through repositories, logs or builds', 'They make programs run too quickly', 'They prevent version control from working', 'They are required to be public'],
  a: 0, explanation: 'Secrets should be managed through appropriate secret stores or protected configuration.'
},
{
  id: 1640, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is environment configuration?',
  options: ['Settings that control application behavior in a given environment', 'A physical room temperature only', 'A source-code comment', 'A Git merge conflict'],
  a: 0, explanation: 'Configuration may specify service URLs, feature flags and other environment-specific settings.'
},
{
  id: 1641, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a staging environment?',
  options: ['A pre-production environment used for final validation', 'The only environment where source code can exist', 'A backup cable', 'A public password list'],
  a: 0, explanation: 'Staging resembles production and helps validate a release before it goes live.'
},
{
  id: 1642, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is the purpose of a production environment?',
  options: ['Running the software used by real users', 'Holding only unfinished local experiments', 'Replacing all testing', 'Storing only source-code comments'],
  a: 0, explanation: 'Production is the live environment that serves actual users or business workloads.'
},
{
  id: 1643, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What does scalability mean for a deployed application?',
  options: ['Handling changes in workload by adjusting resources or capacity', 'Ensuring the application never needs maintenance', 'Preventing all users from connecting', 'Reducing every dataset to zero'],
  a: 0, explanation: 'Scalable systems can adapt to changes in demand using suitable resource strategies.'
},
{
  id: 1644, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is load balancing?',
  options: ['Distributing requests across multiple servers or instances', 'Sending every request to a failed server', 'Deleting incoming requests permanently', 'Encrypting source-code comments'],
  a: 0, explanation: 'Load balancing distributes traffic to improve capacity, reliability or responsiveness.'
},
{
  id: 1645, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is high availability?',
  options: ['Designing a service to remain accessible despite certain failures', 'Running a service only once per year', 'Disabling redundancy', 'Removing monitoring'],
  a: 0, explanation: 'High availability uses suitable design and redundancy to reduce service downtime.'
},
{
  id: 1646, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a post-incident review?',
  options: ['An analysis of an incident to learn and prevent recurrence', 'A way to blame one person automatically', 'A method for deleting all logs', 'A container image format'],
  a: 0, explanation: 'A constructive review examines causes, impact and improvements after an incident.'
},
{
  id: 1647, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is Mean Time to Recovery (MTTR) commonly used to measure?',
  options: ['Average time to restore service after a failure', 'Number of code branches', 'Size of a container image', 'Number of developers in a team'],
  a: 0, explanation: 'MTTR is an operational metric for recovery duration; exact definitions can vary by organization.'
},
{
  id: 1648, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is the purpose of a service-level objective (SLO)?',
  options: ['Defining a measurable reliability target for a service', 'Defining a programming language syntax', 'Setting a user’s wallpaper', 'Listing only software licenses'],
  a: 0, explanation: 'An SLO sets a target for a service indicator, such as availability or latency.'
},
{
  id: 1649, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'What is a service-level agreement (SLA)?',
  options: ['An agreement defining service expectations and responsibilities', 'A source-code loop', 'A container image layer', 'A hardware sensor type'],
  a: 0, explanation: 'An SLA is an agreement that defines service commitments and related responsibilities.'
},
{
  id: 1650, branch: 'CSE', topic: 'DevOps', semester: 'Semester 7', subject: 'DevOps',
  q: 'Which practice best supports continuous improvement in DevOps?',
  options: ['Measure outcomes, gather feedback and improve the process iteratively', 'Ignore deployment failures', 'Avoid reviewing incidents', 'Disable automated tests permanently'],
  a: 0, explanation: 'DevOps relies on feedback, measurement and iterative improvements to delivery and operations.'
},

{
  id: 1651, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a blockchain?',
  options: ['A distributed ledger of linked records', 'A word processor', 'A graphics editor', 'A computer monitor'],
  a: 0, explanation: 'A blockchain stores records in linked blocks maintained by a network.'
},
{
  id: 1652, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What does a cryptographic hash provide?',
  options: ['A fixed-length digest of input data', 'A physical network connection', 'A larger screen', 'A database table'],
  a: 0, explanation: 'A hash function maps input data to a digest.'
},
{
  id: 1653, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What typically connects blocks in a blockchain?',
  options: ['Cryptographic hashes', 'USB cables', 'Image files', 'Keyboard shortcuts'],
  a: 0, explanation: 'Blocks commonly include a hash linking them to the preceding block.'
},
{
  id: 1654, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a distributed ledger?',
  options: ['A ledger replicated across multiple participating nodes', 'A single printed document', 'A graphics card', 'A text editor'],
  a: 0, explanation: 'A distributed ledger maintains records across multiple participants.'
},
{
  id: 1655, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a blockchain node?',
  options: ['A computer or process participating in the network', 'A password character', 'A document heading', 'A display setting'],
  a: 0, explanation: 'Nodes communicate and may store, validate or relay blockchain data.'
},
{
  id: 1656, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a consensus mechanism?',
  options: ['A method for participants to agree on ledger state', 'A method of editing images', 'A type of printer', 'A programming variable'],
  a: 0, explanation: 'Consensus helps distributed participants agree on valid records.'
},
{
  id: 1657, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What does Proof of Work generally require?',
  options: ['Computational work to propose or validate blocks', 'A printed signature for every transaction', 'A touchscreen', 'A spreadsheet formula'],
  a: 0, explanation: 'Proof of Work uses computational effort as part of its consensus process.'
},
{
  id: 1658, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What does Proof of Stake use in consensus?',
  options: ['Staked assets and protocol-defined validator selection', 'Only printer speed', 'Screen resolution', 'File extensions'],
  a: 0, explanation: 'Proof of Stake uses staked value and protocol rules to select validators.'
},
{
  id: 1659, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a smart contract?',
  options: ['Code that executes according to blockchain rules', 'A paper-only agreement', 'A graphics driver', 'A keyboard layout'],
  a: 0, explanation: 'Smart contracts implement programmable rules on supported blockchain platforms.'
},
{
  id: 1660, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Which platform is well known for supporting smart contracts?',
  options: ['Ethereum', 'Microsoft Paint', 'Notepad', 'VLC Media Player'],
  a: 0, explanation: 'Ethereum supports programmable smart contracts.'
},
{
  id: 1661, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Which language is commonly used to write Ethereum smart contracts?',
  options: ['Solidity', 'HTML only', 'CSS only', 'SQL only'],
  a: 0, explanation: 'Solidity is a widely used language for Ethereum smart contracts.'
},
{
  id: 1662, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a cryptocurrency wallet primarily used for?',
  options: ['Managing keys used to access digital assets', 'Printing banknotes', 'Editing videos', 'Cooling a processor'],
  a: 0, explanation: 'A wallet manages cryptographic keys and interactions with digital assets.'
},
{
  id: 1663, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a private key?',
  options: ['A secret cryptographic value controlled by its owner', 'A public website address', 'A block number', 'A transaction receipt'],
  a: 0, explanation: 'A private key must be protected because it can authorize cryptographic operations.'
},
{
  id: 1664, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a public key used for?',
  options: ['Public-key verification and related cryptographic operations', 'Revealing the private key', 'Deleting every block', 'Increasing network bandwidth'],
  a: 0, explanation: 'Public keys support operations such as signature verification.'
},
{
  id: 1665, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a digital signature used to verify?',
  options: ['Authenticity and integrity of signed data', 'Physical screen size', 'Internet speed', 'File compression ratio'],
  a: 0, explanation: 'Digital signatures help verify the signer and detect data changes.'
},
{
  id: 1666, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a transaction in a blockchain?',
  options: ['A proposed state change recorded under protocol rules', 'A monitor adjustment', 'A source-code comment', 'A keyboard key'],
  a: 0, explanation: 'Transactions request changes such as transferring assets or invoking contracts.'
},
{
  id: 1667, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a genesis block?',
  options: ['The first block of a blockchain', 'The newest wallet', 'A private key', 'A network cable'],
  a: 0, explanation: 'The genesis block is the starting block of a blockchain.'
},
{
  id: 1668, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a Merkle tree?',
  options: ['A hash-based structure for summarizing and verifying data', 'A physical tree sensor', 'A network router', 'A programming editor'],
  a: 0, explanation: 'Merkle trees combine hashes to support efficient data verification.'
},
{
  id: 1669, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a Merkle root?',
  options: ['The top hash summarizing a Merkle tree', 'A wallet password', 'The first transaction fee', 'A network address'],
  a: 0, explanation: 'The Merkle root summarizes the leaves of a Merkle tree.'
},
{
  id: 1670, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What does immutability mean in blockchain discussions?',
  options: ['Recorded data is difficult to alter without detection or protocol agreement', 'Data can never be copied', 'All data is secret by default', 'Users never make mistakes'],
  a: 0, explanation: 'Blockchain designs make unauthorized changes difficult, but do not guarantee absolute immutability.'
},
{
  id: 1671, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a permissionless blockchain?',
  options: ['A network generally open to participation under its protocol rules', 'A database accessible only to one employee', 'A computer without software', 'A network with no validation rules'],
  a: 0, explanation: 'Permissionless networks generally allow open participation.'
},
{
  id: 1672, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a permissioned blockchain?',
  options: ['A ledger with controlled participation or access', 'A ledger with no participants', 'A text document', 'A graphics file'],
  a: 0, explanation: 'Permissioned networks restrict participation according to defined policies.'
},
{
  id: 1673, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a fork in a blockchain?',
  options: ['A divergence in chain history or a change in protocol rules', 'A hardware cooling fan', 'A database password', 'A type of monitor'],
  a: 0, explanation: 'Forks may occur through competing histories or protocol upgrades.'
},
{
  id: 1674, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a hard fork?',
  options: ['A protocol change that is not backward-compatible with older rules', 'A routine screen update', 'A file backup', 'A keyboard shortcut'],
  a: 0, explanation: 'A hard fork can cause nodes following different rules to diverge.'
},
{
  id: 1675, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a soft fork?',
  options: ['A protocol change designed to remain compatible with older rules in a defined way', 'A physical computer repair', 'A password reset', 'A database table'],
  a: 0, explanation: 'A soft fork tightens or changes rules while retaining a degree of backward compatibility.'
},
{
  id: 1676, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a gas fee on some blockchain platforms?',
  options: ['A fee for computational or network resources', 'A fee for electricity in every household', 'A storage device', 'A cryptographic key'],
  a: 0, explanation: 'Gas fees compensate for computational resources used by transactions or contract execution.'
},
{
  id: 1677, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a token in blockchain systems?',
  options: ['A digital unit representing an asset, right or utility', 'A physical keyboard', 'A source-code error', 'A network cable'],
  a: 0, explanation: 'Tokens can represent digital assets, access rights or other programmable units.'
},
{
  id: 1678, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is an NFT?',
  options: ['A token designed to be individually distinguishable', 'A standard text file', 'A type of firewall', 'A CPU instruction'],
  a: 0, explanation: 'Non-fungible tokens represent distinct token instances under their particular contract.'
},
{
  id: 1679, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What does fungibility mean?',
  options: ['Units are interchangeable with equivalent units', 'Every unit must be unique', 'Data cannot be stored', 'Transactions cannot be verified'],
  a: 0, explanation: 'Fungible units are interchangeable in value and function under the relevant system.'
},
{
  id: 1680, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a decentralized application (dApp)?',
  options: ['An application using decentralized infrastructure or smart contracts', 'A desktop calculator only', 'A computer with no network', 'A paper form'],
  a: 0, explanation: 'A dApp may use smart contracts and decentralized networks for part of its functionality.'
},
{
  id: 1681, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a blockchain explorer?',
  options: ['A tool for viewing transactions, blocks and addresses', 'A programming language', 'A hardware sensor', 'A database password manager'],
  a: 0, explanation: 'Explorers provide searchable views of public blockchain data.'
},
{
  id: 1682, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a block confirmation?',
  options: ['Evidence that a transaction is included in a block and may gain further chain support', 'A guarantee that no protocol reorganization can ever occur', 'A wallet password', 'A server reboot'],
  a: 0, explanation: 'Additional confirmations generally increase confidence, depending on the blockchain protocol.'
},
{
  id: 1683, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a 51% attack commonly associated with?',
  options: ['A majority of a relevant consensus resource being controlled by one actor or coalition', 'Changing a monitor setting', 'Deleting a browser history', 'Compressing a file'],
  a: 0, explanation: 'Majority control can threaten certain consensus guarantees, depending on the protocol.'
},
{
  id: 1684, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a reentrancy vulnerability in a smart contract?',
  options: ['An external call allows unexpected repeated entry before state is safely updated', 'A missing computer monitor', 'A Wi-Fi signal issue', 'A database backup method'],
  a: 0, explanation: 'Reentrancy can occur when contract control flow permits unsafe repeated calls.'
},
{
  id: 1685, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Why are smart contracts tested before deployment?',
  options: ['To identify logic errors and security vulnerabilities', 'To guarantee that no bug is possible', 'To remove the need for code review', 'To increase display resolution'],
  a: 0, explanation: 'Testing and review help reduce costly contract failures, though they cannot prove perfection.'
},
{
  id: 1686, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a blockchain oracle?',
  options: ['A service that supplies external data to a smart contract', 'A private key itself', 'A block printer', 'A file compression tool'],
  a: 0, explanation: 'Oracles bridge external information and blockchain applications.'
},
{
  id: 1687, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Why can blockchain applications need oracles?',
  options: ['Smart contracts cannot directly trust arbitrary off-chain data on their own', 'Blockchains cannot store any values', 'Every blockchain is offline', 'Oracles replace all consensus'],
  a: 0, explanation: 'Oracles provide external information, which introduces additional trust and security considerations.'
},
{
  id: 1688, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a sidechain?',
  options: ['A separate blockchain connected to another blockchain by a mechanism', 'A spreadsheet column', 'A private key', 'A physical network switch'],
  a: 0, explanation: 'Sidechains operate separately and may use bridges or other connection mechanisms.'
},
{
  id: 1689, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a blockchain bridge?',
  options: ['A mechanism for transferring messages or assets between networks', 'A physical bridge sensor', 'A programming loop', 'A block hash by itself'],
  a: 0, explanation: 'Bridges connect separate blockchain ecosystems and require careful security design.'
},
{
  id: 1690, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a common risk of cross-chain bridges?',
  options: ['Vulnerabilities in bridge contracts or validation mechanisms', 'Screen brightness', 'Keyboard layout changes', 'Printer paper jams'],
  a: 0, explanation: 'Bridge failures can expose assets when contract or validation logic is compromised.'
},
{
  id: 1691, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a consortium blockchain?',
  options: ['A blockchain governed by a group of selected organizations', 'A blockchain with no governance', 'A local text file', 'A personal photo album'],
  a: 0, explanation: 'Consortium networks are commonly governed by multiple known organizations.'
},
{
  id: 1692, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Which use case can benefit from shared tamper-evident records?',
  options: ['Supply-chain tracking', 'Changing wallpaper colors', 'Adjusting keyboard volume', 'Formatting a text file'],
  a: 0, explanation: 'Shared records can help participants trace products and audit events.'
},
{
  id: 1693, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is the main purpose of a blockchain transaction fee?',
  options: ['Compensating for network resources and helping manage demand', 'Purchasing a physical keyboard', 'Changing a public key into a private key', 'Increasing monitor resolution'],
  a: 0, explanation: 'Fees can compensate validators or miners and help allocate scarce block space.'
},
{
  id: 1694, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a block header?',
  options: ['Metadata describing a block, often including hashes and other fields', 'A user password', 'A screen title', 'A network cable'],
  a: 0, explanation: 'Block headers contain fields used to identify and validate blocks.'
},
{
  id: 1695, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Why is a nonce used in some Proof of Work systems?',
  options: ['To vary a block-header input while searching for a valid hash', 'To reveal a private key', 'To store photographs', 'To create a smart contract language'],
  a: 0, explanation: 'Miners vary nonce and other permitted fields while searching for a hash meeting the target.'
},
{
  id: 1696, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What does decentralization aim to reduce?',
  options: ['Dependence on a single controlling authority', 'The need for all computers', 'The existence of transactions', 'The size of every block to zero'],
  a: 0, explanation: 'Decentralization distributes control among participants rather than one central operator.'
},
{
  id: 1697, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a major privacy consideration on public blockchains?',
  options: ['Public transaction data may be traceable even when names are absent', 'Every transaction is automatically confidential', 'Public addresses always reveal legal names', 'No data can be copied'],
  a: 0, explanation: 'Pseudonymous public records can sometimes be linked to real-world identities.'
},
{
  id: 1698, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is the purpose of a multisignature wallet?',
  options: ['Requiring multiple authorized signatures for certain actions', 'Using no cryptographic keys', 'Storing only one image', 'Replacing every consensus mechanism'],
  a: 0, explanation: 'Multisignature arrangements can require several approvals before a transaction is authorized.'
},
{
  id: 1699, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'Why should a private key backup be protected?',
  options: ['Anyone obtaining it may gain control over associated assets', 'It is only a public website address', 'It cannot authorize any action', 'It is always recoverable from a public blockchain'],
  a: 0, explanation: 'Secure key backups are essential because exposed keys may permit unauthorized transactions.'
},
{
  id: 1700, branch: 'CSE', topic: 'Blockchain', semester: 'Semester 8', subject: 'BlockChain Technology',
  q: 'What is a sensible approach before using a new blockchain application?',
  options: ['Review its risks, permissions and contract or project credibility', 'Share private keys with strangers', 'Ignore transaction details', 'Assume every smart contract is safe'],
  a: 0, explanation: 'Careful review reduces exposure to scams, unsafe permissions and contract vulnerabilities.'
},

{
  id: 1701, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a qubit?',
  options: ['The basic unit of quantum information', 'A database row', 'A network cable', 'A programming loop'],
  a: 0, explanation: 'A qubit is the quantum counterpart of a classical bit.'
},
{
  id: 1702, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What values can a classical bit take?',
  options: ['0 or 1', 'Only 2', 'Any physical temperature', 'Only negative numbers'],
  a: 0, explanation: 'A classical bit has one of two values: 0 or 1.'
},
{
  id: 1703, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is superposition in quantum computing?',
  options: ['A quantum state formed from a combination of basis states', 'A larger computer monitor', 'A database backup', 'A classical network protocol'],
  a: 0, explanation: 'Superposition allows a quantum state to combine basis states with amplitudes.'
},
{
  id: 1704, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum entanglement?',
  options: ['A joint quantum state with correlations not explained by independent states', 'A computer cable arrangement', 'A file compression technique', 'A programming language'],
  a: 0, explanation: 'Entangled systems exhibit quantum correlations that cannot be described as independent states.'
},
{
  id: 1705, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum gate?',
  options: ['An operation that transforms quantum states', 'A physical door lock', 'A database table', 'A network firewall only'],
  a: 0, explanation: 'Quantum gates perform operations on one or more qubits.'
},
{
  id: 1706, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is the Hadamard gate commonly used for?',
  options: ['Creating equal-amplitude superpositions from computational basis states', 'Deleting all qubits', 'Cooling every processor', 'Storing classical files'],
  a: 0, explanation: 'The Hadamard gate maps basis states to superpositions with equal amplitude magnitudes.'
},
{
  id: 1707, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does the Pauli-X gate do to computational basis states?',
  options: ['Flips 0 to 1 and 1 to 0', 'Always measures temperature', 'Duplicates a qubit', 'Deletes a quantum circuit'],
  a: 0, explanation: 'Pauli-X acts like a bit flip on computational basis states.'
},
{
  id: 1708, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does a quantum measurement do?',
  options: ['Produces a classical outcome according to the measurement probabilities', 'Reveals every possible outcome simultaneously', 'Creates unlimited qubits', 'Guarantees a chosen answer'],
  a: 0, explanation: 'Measurement yields an outcome sampled according to the quantum state and measurement basis.'
},
{
  id: 1709, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum circuit?',
  options: ['A sequence of quantum gates and measurements', 'A printed circuit board only', 'A relational database', 'A web browser'],
  a: 0, explanation: 'Quantum circuits describe how quantum operations are arranged over qubits.'
},
{
  id: 1710, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is the purpose of the CNOT gate?',
  options: ['Flipping a target qubit when the control qubit is 1', 'Measuring room temperature', 'Compressing images', 'Creating a classical database'],
  a: 0, explanation: 'CNOT is a controlled-NOT gate with control and target qubits.'
},
{
  id: 1711, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a computational basis state for one qubit?',
  options: ['One of the states |0> or |1>', 'A spreadsheet cell', 'A network address', 'A physical keyboard'],
  a: 0, explanation: 'The computational basis for a qubit consists of |0> and |1>.'
},
{
  id: 1712, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does the no-cloning theorem state?',
  options: ['An arbitrary unknown quantum state cannot be perfectly copied', 'Quantum states can never be measured', 'Classical files cannot be copied', 'All qubits must be identical'],
  a: 0, explanation: 'Quantum mechanics forbids a universal operation that perfectly clones any unknown quantum state.'
},
{
  id: 1713, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum decoherence?',
  options: ['Loss of quantum coherence due to interaction with the environment', 'A faster internet connection', 'A database query', 'A type of software license'],
  a: 0, explanation: 'Environmental interactions can disrupt the phase relationships needed for quantum behavior.'
},
{
  id: 1714, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Why is quantum error correction important?',
  options: ['It helps protect quantum information against noise and errors', 'It removes all need for hardware', 'It guarantees zero computational cost', 'It turns qubits into monitors'],
  a: 0, explanation: 'Quantum error correction encodes information across physical qubits to detect and correct certain errors.'
},
{
  id: 1715, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum algorithm?',
  options: ['A procedure designed to use quantum operations for computation', 'A type of printer', 'A physical cable', 'A spreadsheet template'],
  a: 0, explanation: 'Quantum algorithms specify computational procedures using quantum resources.'
},
{
  id: 1716, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Which problem is Shor’s algorithm known for addressing efficiently on a suitable fault-tolerant quantum computer?',
  options: ['Integer factorization', 'Sorting every image by color only', 'Screen rendering', 'Word processing'],
  a: 0, explanation: 'Shor’s algorithm gives a polynomial-time quantum method for integer factorization.'
},
{
  id: 1717, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is Grover’s algorithm known for?',
  options: ['Quadratic speedup for unstructured search', 'Creating infinite memory', 'Eliminating every database', 'Converting all code to machine language'],
  a: 0, explanation: 'Grover’s algorithm can search an unstructured space using roughly square-root-many oracle queries.'
},
{
  id: 1718, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum parallelism?',
  options: ['Applying a quantum operation to a superposition of inputs', 'Running two classical keyboards', 'Copying arbitrary unknown qubits', 'Guaranteeing all answers can be read out'],
  a: 0, explanation: 'Quantum operations can act on superpositions, but measurement does not reveal all branches at once.'
},
{
  id: 1719, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is interference in quantum computing?',
  options: ['Combining probability amplitudes constructively or destructively', 'A physical network outage only', 'A database collision', 'A screen display issue'],
  a: 0, explanation: 'Quantum algorithms use interference to increase or decrease the amplitudes of outcomes.'
},
{
  id: 1720, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum state vector?',
  options: ['A mathematical representation of a quantum state', 'A computer power cable', 'A file directory', 'A database index'],
  a: 0, explanation: 'A state vector represents a pure quantum state in a chosen basis.'
},
{
  id: 1721, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does a Bloch sphere represent?',
  options: ['The state of a single qubit geometrically', 'A three-dimensional printer', 'A network topology only', 'A database schema'],
  a: 0, explanation: 'The Bloch sphere visualizes pure single-qubit states, up to global phase.'
},
{
  id: 1722, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum simulator?',
  options: ['Software or hardware that models quantum circuits or systems', 'A password manager', 'A network switch only', 'A physical measuring tape'],
  a: 0, explanation: 'Quantum simulators help researchers test quantum algorithms without necessarily using quantum hardware.'
},
{
  id: 1723, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Which is a commonly used quantum programming framework?',
  options: ['Qiskit', 'Microsoft Paint', 'Notepad', 'PowerPoint'],
  a: 0, explanation: 'Qiskit is a software framework for working with quantum circuits and related tools.'
},
{
  id: 1724, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is the role of a quantum compiler?',
  options: ['Translating and optimizing circuits for a target quantum device', 'Printing quantum hardware labels', 'Replacing all physics', 'Managing office documents'],
  a: 0, explanation: 'Quantum compilers map abstract circuits to operations supported by target hardware.'
},
{
  id: 1725, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a physical qubit?',
  options: ['A real quantum system used to encode quantum information', 'A purely classical spreadsheet cell', 'A file name', 'A network cable'],
  a: 0, explanation: 'Physical qubits are implemented in systems such as superconducting circuits or trapped ions.'
},
{
  id: 1726, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a logical qubit?',
  options: ['An encoded qubit protected using quantum error-correction techniques', 'A printed diagram only', 'A conventional hard drive', 'A keyboard shortcut'],
  a: 0, explanation: 'Logical qubits encode information across physical qubits to improve reliability.'
},
{
  id: 1727, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Why do some quantum computers operate at extremely low temperatures?',
  options: ['To maintain the required physical conditions and reduce certain sources of noise', 'To increase monitor brightness', 'To store paper documents', 'To eliminate every type of error automatically'],
  a: 0, explanation: 'Some platforms, such as superconducting qubits, require cryogenic conditions.'
},
{
  id: 1728, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum measurement basis?',
  options: ['The set of states used to define possible measurement outcomes', 'A physical desk', 'A cloud storage bucket', 'A programming language'],
  a: 0, explanation: 'Measurement outcomes depend on the chosen basis.'
},
{
  id: 1729, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a unitary operation?',
  options: ['A reversible transformation that preserves quantum-state inner products', 'An irreversible file deletion', 'A network outage', 'A printer command'],
  a: 0, explanation: 'Closed-system quantum evolution is represented by unitary transformations.'
},
{
  id: 1730, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does a quantum circuit depth measure?',
  options: ['The number of sequential gate layers', 'The size of a monitor', 'The number of user accounts', 'The length of a file name'],
  a: 0, explanation: 'Circuit depth reflects sequential layers of operations and relates to execution time.'
},
{
  id: 1731, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum volume intended to summarize?',
  options: ['Several aspects of a quantum computer’s ability to run circuits', 'Only the physical size of a refrigerator', 'The number of files on a laptop', 'The speed of a printer'],
  a: 0, explanation: 'Quantum volume is one benchmark combining circuit width and depth with hardware performance.'
},
{
  id: 1732, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a variational quantum algorithm?',
  options: ['An algorithm using a parameterized quantum circuit and classical optimization', 'A method that never uses quantum gates', 'A file compression standard', 'A network security certificate'],
  a: 0, explanation: 'Variational algorithms alternate quantum circuit evaluation with classical parameter updates.'
},
{
  id: 1733, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is the objective of the Variational Quantum Eigensolver (VQE)?',
  options: ['Estimate a low-energy eigenvalue, often the ground-state energy', 'Increase internet bandwidth', 'Render three-dimensional games only', 'Store a blockchain ledger'],
  a: 0, explanation: 'VQE combines a parameterized quantum circuit with classical optimization to estimate energies.'
},
{
  id: 1734, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is the Quantum Approximate Optimization Algorithm (QAOA) designed for?',
  options: ['Finding approximate solutions to certain optimization problems', 'Editing photographs', 'Replacing every database', 'Measuring keyboard latency'],
  a: 0, explanation: 'QAOA uses parameterized quantum circuits to seek good solutions to optimization problems.'
},
{
  id: 1735, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Why is the phrase “quantum advantage” used?',
  options: ['To describe a demonstrated benefit over relevant classical methods for a task', 'To mean every task is faster on a quantum computer', 'To describe a larger screen', 'To guarantee unlimited computation'],
  a: 0, explanation: 'Quantum advantage is task-specific and depends on a meaningful classical comparison.'
},
{
  id: 1736, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Can quantum computers automatically solve every problem faster than classical computers?',
  options: ['No, advantages depend on the problem and algorithm', 'Yes, for every task', 'Only for word processing', 'Yes, without any errors'],
  a: 0, explanation: 'Quantum computers are not universally faster and can be worse for many workloads.'
},
{
  id: 1737, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum cryptography often associated with?',
  options: ['Using quantum properties for cryptographic tasks such as key distribution', 'Making every password public', 'Compressing images only', 'Creating faster monitors'],
  a: 0, explanation: 'Quantum key distribution can use quantum measurements to help detect eavesdropping under stated assumptions.'
},
{
  id: 1738, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum key distribution (QKD)?',
  options: ['A method for establishing shared cryptographic keys using quantum communication', 'A way to publish private keys publicly', 'A database indexing method', 'A type of computer fan'],
  a: 0, explanation: 'QKD uses quantum communication and classical post-processing to establish keys.'
},
{
  id: 1739, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Why is post-quantum cryptography being developed?',
  options: ['To create cryptographic methods intended to resist quantum attacks', 'To require all systems to use qubits', 'To eliminate all passwords immediately', 'To make public data secret automatically'],
  a: 0, explanation: 'Post-quantum cryptography develops algorithms designed to resist attacks from quantum computers.'
},
{
  id: 1740, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Which classical cryptographic problem is threatened by Shor’s algorithm at sufficient scale?',
  options: ['Integer factorization used by RSA', 'Sorting a list of names', 'Compressing a JPEG', 'Rendering a web page'],
  a: 0, explanation: 'A sufficiently capable fault-tolerant quantum computer could undermine RSA by factoring its modulus.'
},
{
  id: 1741, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum noise?',
  options: ['Unwanted disturbances affecting quantum operations or measurements', 'A loud keyboard sound only', 'A printed circuit diagram', 'A database table'],
  a: 0, explanation: 'Noise can arise from environmental interactions and imperfect control or measurement.'
},
{
  id: 1742, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does gate fidelity describe?',
  options: ['How closely an implemented gate matches its intended operation', 'The size of a physical gate', 'The number of files on a server', 'The speed of a printer'],
  a: 0, explanation: 'Gate fidelity measures agreement between actual and ideal quantum operations under a defined metric.'
},
{
  id: 1743, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is quantum tomography used for?',
  options: ['Estimating a quantum state or process from measurements', 'Repairing physical keyboards', 'Compiling HTML', 'Creating cloud accounts'],
  a: 0, explanation: 'Quantum tomography reconstructs state or process information from measurement data.'
},
{
  id: 1744, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum annealer designed to do?',
  options: ['Explore low-energy solutions to certain optimization formulations', 'Replace every general-purpose computer', 'Print transaction receipts', 'Create web stylesheets'],
  a: 0, explanation: 'Quantum annealing hardware targets optimization problems through energy-based formulations.'
},
{
  id: 1745, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a Hamiltonian in quantum mechanics?',
  options: ['An operator representing a system’s total energy', 'A network protocol', 'A file extension', 'A database index'],
  a: 0, explanation: 'The Hamiltonian represents the energy operator of a quantum system.'
},
{
  id: 1746, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does the Born rule describe?',
  options: ['How quantum-state amplitudes determine measurement probabilities', 'How a computer boots', 'How a network assigns IP addresses', 'How files are compressed'],
  a: 0, explanation: 'The Born rule gives probabilities from squared magnitudes of amplitudes in the chosen basis.'
},
{
  id: 1747, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What is a quantum register?',
  options: ['A collection of qubits treated as a computational unit', 'A paper attendance sheet', 'A network cable', 'A graphics editor'],
  a: 0, explanation: 'A quantum register groups qubits used by a quantum program.'
},
{
  id: 1748, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'What does circuit transpilation generally do?',
  options: ['Rewrites a circuit to match a target device’s supported operations and constraints', 'Turns qubits into classical bits without measurement', 'Builds a physical monitor', 'Deletes all circuit gates'],
  a: 0, explanation: 'Transpilation maps and optimizes circuits for a target hardware architecture.'
},
{
  id: 1749, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Why are repeated circuit shots often used in quantum experiments?',
  options: ['To estimate outcome probabilities from repeated measurements', 'To guarantee the same outcome every time', 'To increase the number of physical wires', 'To avoid all statistics'],
  a: 0, explanation: 'Repeated shots provide samples for estimating measurement distributions.'
},
{
  id: 1750, branch: 'CSE', topic: 'Quantum', semester: 'Semester 8', subject: 'Quantum Computing',
  q: 'Which is a responsible way to evaluate a quantum algorithm?',
  options: ['Compare accuracy, resources and runtime with suitable classical baselines', 'Assume it is always superior', 'Ignore hardware noise', 'Report only favorable results'],
  a: 0, explanation: 'Fair evaluation includes resource costs, limitations and meaningful classical comparisons.'
},

{
  id: 1751, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is the main purpose of a final-year major project?',
  options: ['Apply technical knowledge to solve a defined problem', 'Copy an existing project without understanding it', 'Avoid testing software', 'Prepare only a title page'],
  a: 0, explanation: 'A major project demonstrates problem-solving, implementation and evaluation skills.'
},
{
  id: 1752, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is problem definition in a project?',
  options: ['Clearly stating the problem, users and desired outcome', 'Choosing colors before understanding the problem', 'Writing code without requirements', 'Preparing the bibliography only'],
  a: 0, explanation: 'A clear problem statement guides requirements, design and evaluation.'
},
{
  id: 1753, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project objective?',
  options: ['A specific result the project aims to achieve', 'An unrelated personal opinion', 'A list of random errors', 'A hardware brand'],
  a: 0, explanation: 'Objectives describe the intended outcomes of the project.'
},
{
  id: 1754, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a literature review?',
  options: ['A critical summary of existing work relevant to the problem', 'A list of project expenses only', 'A code compiler', 'A user password list'],
  a: 0, explanation: 'A literature review identifies prior work, approaches and research gaps.'
},
{
  id: 1755, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why is a feasibility study conducted?',
  options: ['To assess whether a proposed project is practical and viable', 'To guarantee that no risks exist', 'To remove all requirements', 'To avoid estimating resources'],
  a: 0, explanation: 'Feasibility considers technical, financial, operational and time constraints.'
},
{
  id: 1756, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a functional requirement?',
  options: ['A capability or behavior the system must provide', 'A description of the font only', 'A project budget alone', 'A meeting schedule'],
  a: 0, explanation: 'Functional requirements specify system features and behaviors.'
},
{
  id: 1757, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a non-functional requirement?',
  options: ['A quality or constraint such as performance or security', 'A required user action only', 'A project name', 'A source-code comment'],
  a: 0, explanation: 'Non-functional requirements describe qualities such as usability, reliability and performance.'
},
{
  id: 1758, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a Software Requirements Specification (SRS)?',
  options: ['A document describing software requirements', 'A compiled executable only', 'A network cable', 'A database password'],
  a: 0, explanation: 'An SRS documents the expected functionality and constraints of a software system.'
},
{
  id: 1759, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project scope?',
  options: ['The boundaries of included work and deliverables', 'A list of unrelated future ideas', 'The size of the monitor', 'The number of programming languages known'],
  a: 0, explanation: 'Scope defines what is and is not included in the project.'
},
{
  id: 1760, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project milestone?',
  options: ['A significant checkpoint or event in the project timeline', 'A programming error', 'A type of database', 'A hardware cable'],
  a: 0, explanation: 'Milestones mark important points such as design approval or prototype completion.'
},
{
  id: 1761, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a Gantt chart used for?',
  options: ['Visualizing tasks and their schedules over time', 'Encrypting a database', 'Testing a keyboard', 'Compiling source code'],
  a: 0, explanation: 'Gantt charts show task timing and can illustrate dependencies and progress.'
},
{
  id: 1762, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is risk management in a project?',
  options: ['Identifying, assessing and responding to potential risks', 'Pretending that problems cannot occur', 'Deleting all project documentation', 'Avoiding all communication'],
  a: 0, explanation: 'Risk management helps teams anticipate and reduce threats to project success.'
},
{
  id: 1763, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project prototype?',
  options: ['An early model used to explore or validate an idea', 'The final report only', 'A list of citations', 'A user account password'],
  a: 0, explanation: 'Prototypes help test concepts and gather feedback before full implementation.'
},
{
  id: 1764, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is system architecture?',
  options: ['The high-level organization of components and their interactions', 'The color of an application icon', 'A list of exam marks', 'A source-code variable'],
  a: 0, explanation: 'Architecture describes major components, interfaces and design decisions.'
},
{
  id: 1765, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a UML use-case diagram used to show?',
  options: ['Interactions between actors and system functions', 'CPU temperature only', 'Every line of source code', 'A project’s electricity bill'],
  a: 0, explanation: 'Use-case diagrams summarize actors and the functions they interact with.'
},
{
  id: 1766, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a data-flow diagram (DFD)?',
  options: ['A diagram showing how data moves through a system', 'A physical network cable', 'A code license', 'A monitor specification'],
  a: 0, explanation: 'DFDs represent processes, data stores, external entities and data flows.'
},
{
  id: 1767, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a database schema?',
  options: ['The defined structure of database objects and relationships', 'A project presentation theme', 'A computer fan', 'A test user’s password'],
  a: 0, explanation: 'A schema defines tables or other structures, fields and relationships.'
},
{
  id: 1768, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why is version control useful in a team project?',
  options: ['It tracks changes and supports collaboration', 'It guarantees code has no bugs', 'It removes the need for backups', 'It prevents all merge conflicts'],
  a: 0, explanation: 'Version control records changes and helps teams coordinate their work.'
},
{
  id: 1769, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a unit test in a software project?',
  options: ['A test of an individual function or component', 'A test of the entire organization budget', 'A user manual', 'A project title'],
  a: 0, explanation: 'Unit tests check small code units in isolation.'
},
{
  id: 1770, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is integration testing?',
  options: ['Testing whether components work correctly together', 'Testing only the project title', 'Preparing slides only', 'Installing a keyboard'],
  a: 0, explanation: 'Integration testing focuses on interactions between connected components.'
},
{
  id: 1771, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is system testing?',
  options: ['Testing the complete integrated system against requirements', 'Testing one variable only', 'Writing a bibliography', 'Choosing a project logo'],
  a: 0, explanation: 'System testing evaluates the behavior of the complete system.'
},
{
  id: 1772, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is user acceptance testing?',
  options: ['Checking whether the system meets user or business needs', 'Checking only code indentation', 'Measuring screen size', 'Deleting old test results'],
  a: 0, explanation: 'Acceptance testing validates the system against agreed user requirements.'
},
{
  id: 1773, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a test case?',
  options: ['A defined input, conditions and expected result for a test', 'A project funding document only', 'A network adapter', 'A slide transition'],
  a: 0, explanation: 'Test cases specify steps or inputs and the results expected from them.'
},
{
  id: 1774, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is debugging?',
  options: ['Finding and correcting defects in software', 'Designing a project poster', 'Writing only references', 'Creating a database user'],
  a: 0, explanation: 'Debugging investigates failures and fixes their underlying causes.'
},
{
  id: 1775, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is code review?',
  options: ['Examining code to improve correctness, readability and maintainability', 'Running a marketing campaign', 'Changing the laptop wallpaper', 'Removing all tests'],
  a: 0, explanation: 'Code review helps detect defects and maintain consistent engineering practices.'
},
{
  id: 1776, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is technical documentation?',
  options: ['Written information explaining a system, design or its use', 'A compiled application only', 'A physical computer cable', 'A database backup alone'],
  a: 0, explanation: 'Documentation helps developers, maintainers and users understand the system.'
},
{
  id: 1777, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is an abstract in a project report?',
  options: ['A concise summary of the problem, method and results', 'A complete source-code listing', 'A list of every meeting', 'A user password list'],
  a: 0, explanation: 'The abstract gives readers a brief overview of the work and its outcomes.'
},
{
  id: 1778, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What should a project conclusion contain?',
  options: ['A summary of outcomes, limitations and possible future work', 'Only unrelated quotations', 'Only the cover page', 'Unverified claims'],
  a: 0, explanation: 'A conclusion connects the outcomes to objectives and acknowledges limitations.'
},
{
  id: 1779, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a citation in a project report?',
  options: ['A reference acknowledging the source of information or ideas', 'A type of programming loop', 'A network device', 'A testing framework'],
  a: 0, explanation: 'Citations give credit and help readers locate the original sources.'
},
{
  id: 1780, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is plagiarism?',
  options: ['Presenting another person’s work or ideas as one’s own without proper acknowledgment', 'Writing original code', 'Testing a prototype', 'Correctly citing a paper'],
  a: 0, explanation: 'Plagiarism violates academic integrity by failing to acknowledge others’ work.'
},
{
  id: 1781, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why should project results be reproducible where practical?',
  options: ['So others can check the methods and verify the findings', 'So no one can review the work', 'To hide implementation details', 'To avoid recording configurations'],
  a: 0, explanation: 'Reproducibility supports transparency and confidence in results.'
},
{
  id: 1782, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is performance testing?',
  options: ['Evaluating system behavior under specified workload conditions', 'Checking the spelling of the title only', 'Writing a user biography', 'Choosing a programming logo'],
  a: 0, explanation: 'Performance testing measures behavior such as latency, throughput and resource use.'
},
{
  id: 1783, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is usability testing?',
  options: ['Observing whether intended users can use a system effectively', 'Measuring only CPU temperature', 'Checking a source-code license only', 'Counting project folders'],
  a: 0, explanation: 'Usability testing examines how well users can complete tasks.'
},
{
  id: 1784, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a baseline in project management?',
  options: ['An approved reference plan used to compare progress', 'A random guess after completion', 'A database password', 'A network protocol'],
  a: 0, explanation: 'Baselines provide a reference for comparing actual performance with the plan.'
},
{
  id: 1785, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is project scope creep?',
  options: ['Uncontrolled growth in project requirements or work', 'A successful code review', 'A planned milestone', 'A type of database index'],
  a: 0, explanation: 'Scope creep occurs when work expands without appropriate review or control.'
},
{
  id: 1786, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why is stakeholder feedback important?',
  options: ['It helps check whether the solution addresses real needs', 'It makes testing unnecessary', 'It guarantees full marks', 'It removes the need for requirements'],
  a: 0, explanation: 'Feedback can reveal unmet needs and guide project improvements.'
},
{
  id: 1787, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a deployment plan?',
  options: ['A plan for releasing and configuring the system in its target environment', 'A list of unrelated papers', 'A programming syntax rule', 'A project logo'],
  a: 0, explanation: 'Deployment planning covers release steps, configuration, dependencies and recovery.'
},
{
  id: 1788, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is maintenance in the software lifecycle?',
  options: ['Updating, correcting or improving software after delivery', 'Printing the project cover only', 'Deleting every user account', 'Avoiding all bug fixes'],
  a: 0, explanation: 'Maintenance addresses defects, changing requirements and operational needs.'
},
{
  id: 1789, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is an API in a software project?',
  options: ['An interface through which software components communicate', 'A physical cooling fan', 'A report chapter', 'A type of monitor'],
  a: 0, explanation: 'APIs define operations or data interfaces that other software can use.'
},
{
  id: 1790, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why is authentication needed in many applications?',
  options: ['To verify the identity of a user or service', 'To increase font size', 'To format the bibliography', 'To create project milestones'],
  a: 0, explanation: 'Authentication helps establish which user or service is making a request.'
},
{
  id: 1791, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is authorization in an application?',
  options: ['Determining which actions a verified identity may perform', 'Checking the monitor resolution', 'Writing the abstract', 'Compiling a report'],
  a: 0, explanation: 'Authorization evaluates permissions for specific resources or operations.'
},
{
  id: 1792, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is data validation?',
  options: ['Checking that input conforms to expected rules and constraints', 'Accepting every input without inspection', 'Deleting all database fields', 'Disabling all user accounts'],
  a: 0, explanation: 'Validation rejects or handles input that does not meet defined requirements.'
},
{
  id: 1793, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why should a project include limitations?',
  options: ['To explain constraints and what the results do not establish', 'To hide every defect', 'To replace the results section', 'To avoid honest evaluation'],
  a: 0, explanation: 'Acknowledging limitations makes project claims more accurate and useful.'
},
{
  id: 1794, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project deliverable?',
  options: ['A defined output produced by the project', 'A meeting that never happens', 'A coding error only', 'A personal password'],
  a: 0, explanation: 'Deliverables may include software, reports, designs, datasets or demonstrations.'
},
{
  id: 1795, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What should a good project demonstration show?',
  options: ['The working system and how it meets key requirements', 'Only the opening slide', 'Only copied code', 'Unrelated websites'],
  a: 0, explanation: 'A demonstration should connect the implemented features to the problem and requirements.'
},
{
  id: 1796, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project evaluation metric?',
  options: ['A measurable criterion used to assess performance or success', 'A project color theme', 'A user’s nickname', 'A random file name'],
  a: 0, explanation: 'Metrics make it possible to assess outcomes against defined criteria.'
},
{
  id: 1797, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'Why should a team assign project responsibilities?',
  options: ['To clarify ownership and coordinate work', 'To make everyone unaware of tasks', 'To prevent communication', 'To eliminate all milestones'],
  a: 0, explanation: 'Clear responsibilities reduce confusion and help track progress.'
},
{
  id: 1798, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a project repository README commonly used for?',
  options: ['Explaining the project, setup and usage', 'Storing private passwords publicly', 'Replacing all source code', 'Recording only attendance'],
  a: 0, explanation: 'A README helps users and contributors understand and run the project.'
},
{
  id: 1799, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is technical debt?',
  options: ['Future maintenance cost caused by shortcuts or suboptimal design choices', 'A financial loan required by every developer', 'A project presentation', 'A type of computer hardware'],
  a: 0, explanation: 'Technical debt can make future changes more costly when short-term compromises accumulate.'
},
{
  id: 1800, branch: 'CSE', topic: 'Major Project', semester: 'Semester 8', subject: 'Major Project',
  q: 'What is a strong final-year project outcome?',
  options: ['A tested solution with clear documentation and evidence of evaluation', 'An undocumented code folder that was never run', 'A copied report with no citations', 'A list of features that do not exist'],
  a: 0, explanation: 'A strong project demonstrates implementation, testing, documentation and honest evaluation.'
},

{
  id: 1801, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is professional ethics?',
  options: ['Principles guiding responsible conduct in a profession', 'A programming language', 'A computer cable', 'A database format'],
  a: 0, explanation: 'Professional ethics guides decisions and behavior at work.'
},
{
  id: 1802, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is integrity in professional conduct?',
  options: ['Being honest and consistent with ethical principles', 'Hiding every mistake', 'Sharing confidential information freely', 'Taking credit for others’ work'],
  a: 0, explanation: 'Integrity involves honesty, accountability and principled behavior.'
},
{
  id: 1803, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is confidentiality?',
  options: ['Protecting information from unauthorized disclosure', 'Publishing all private records', 'Deleting every project file', 'Ignoring access permissions'],
  a: 0, explanation: 'Confidentiality requires appropriate protection of sensitive information.'
},
{
  id: 1804, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is accountability?',
  options: ['Accepting responsibility for decisions and their consequences', 'Blaming others for every problem', 'Avoiding all explanations', 'Hiding project results'],
  a: 0, explanation: 'Accountability means being answerable for actions and outcomes.'
},
{
  id: 1805, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is a conflict of interest?',
  options: ['When personal interests may improperly influence professional judgment', 'A routine code compilation', 'A project deadline', 'A computer backup'],
  a: 0, explanation: 'Conflicts should be disclosed and managed to protect impartial decision-making.'
},
{
  id: 1806, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is plagiarism?',
  options: ['Using another person’s work without appropriate acknowledgment', 'Writing original ideas', 'Citing a source correctly', 'Testing a program'],
  a: 0, explanation: 'Plagiarism misrepresents another person’s work as one’s own.'
},
{
  id: 1807, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is intellectual property?',
  options: ['Legal rights relating to creations of the mind', 'A computer monitor', 'A network cable', 'A software bug'],
  a: 0, explanation: 'Intellectual property may include inventions, creative works, designs and trademarks.'
},
{
  id: 1808, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is copyright primarily concerned with?',
  options: ['Legal protection of eligible original creative expression', 'Ownership of every idea in the world', 'Computer processing speed', 'Network routing'],
  a: 0, explanation: 'Copyright protects qualifying expression, subject to applicable law and limitations.'
},
{
  id: 1809, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is a software license?',
  options: ['Terms governing use, modification or distribution of software', 'A computer power supply', 'A project meeting', 'A password hint'],
  a: 0, explanation: 'Licenses specify permissions and conditions for using software.'
},
{
  id: 1810, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is open-source software?',
  options: ['Software made available under a license granting specified source-code rights', 'Software that can never be modified', 'Software with no license terms', 'Software that must always be paid for'],
  a: 0, explanation: 'Open-source licenses grant rights to use, inspect, modify or distribute under their conditions.'
},
{
  id: 1811, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is informed consent?',
  options: ['Agreement given after adequate relevant information is provided', 'Agreement obtained by hiding important facts', 'A password reset', 'A project schedule'],
  a: 0, explanation: 'Informed consent requires understanding relevant information before agreeing.'
},
{
  id: 1812, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is data privacy?',
  options: ['Appropriate handling and control of personal information', 'Publishing every personal record', 'Removing all security controls', 'Increasing screen brightness'],
  a: 0, explanation: 'Privacy concerns how personal information is collected, used, shared and retained.'
},
{
  id: 1813, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is data minimization?',
  options: ['Collecting only the personal data necessary for a stated purpose', 'Collecting all possible data', 'Sharing every record publicly', 'Keeping data forever by default'],
  a: 0, explanation: 'Data minimization reduces unnecessary collection and exposure.'
},
{
  id: 1814, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is responsible disclosure of a security vulnerability?',
  options: ['Reporting it through an authorized process while minimizing harm', 'Publishing private user data to prove a point', 'Exploiting it for personal gain', 'Destroying evidence'],
  a: 0, explanation: 'Responsible disclosure gives maintainers a suitable opportunity to address the issue.'
},
{
  id: 1815, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What should a software professional do when discovering a serious safety defect?',
  options: ['Report it through appropriate channels and help reduce the risk', 'Hide it to protect a deadline', 'Delete the test results', 'Blame users without evidence'],
  a: 0, explanation: 'Professionals should address serious risks honestly and through suitable procedures.'
},
{
  id: 1816, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is whistleblowing?',
  options: ['Reporting suspected serious wrongdoing through appropriate channels', 'Creating a software feature', 'Writing a project abstract', 'Installing a printer'],
  a: 0, explanation: 'Whistleblowing involves raising concerns about wrongdoing or serious risks.'
},
{
  id: 1817, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is discrimination?',
  options: ['Unfair treatment based on protected or irrelevant personal characteristics', 'A normal code review', 'A project milestone', 'A security patch'],
  a: 0, explanation: 'Discrimination can undermine fairness, dignity and equal opportunity.'
},
{
  id: 1818, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is workplace harassment?',
  options: ['Unwelcome conduct that creates harm or an intimidating environment', 'Constructive feedback delivered respectfully', 'A routine team meeting', 'A technical presentation'],
  a: 0, explanation: 'Harassment should be addressed using appropriate workplace policies and reporting channels.'
},
{
  id: 1819, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is diversity and inclusion intended to support?',
  options: ['Fair participation and respect for people with different backgrounds', 'Excluding all different viewpoints', 'Giving every task to one person', 'Preventing collaboration'],
  a: 0, explanation: 'Inclusive environments help people participate and contribute equitably.'
},
{
  id: 1820, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is professional competence?',
  options: ['Having and maintaining the knowledge and skills needed for work', 'Claiming expertise without evidence', 'Avoiding training forever', 'Ignoring changing technology'],
  a: 0, explanation: 'Competence requires suitable skills and ongoing learning.'
},
{
  id: 1821, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'Why is continuing professional development important?',
  options: ['It helps professionals keep skills and knowledge current', 'It guarantees every project succeeds', 'It removes the need for teamwork', 'It prevents all technological change'],
  a: 0, explanation: 'Continuous learning helps professionals adapt to new tools, practices and risks.'
},
{
  id: 1822, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is ethical decision-making?',
  options: ['Evaluating choices using principles, consequences and responsibilities', 'Choosing only the easiest option', 'Ignoring affected stakeholders', 'Hiding all relevant evidence'],
  a: 0, explanation: 'Ethical decisions consider duties, fairness, harm and the people affected.'
},
{
  id: 1823, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is a code of conduct?',
  options: ['A set of expected behavior standards', 'A programming compiler', 'A network address', 'A project database'],
  a: 0, explanation: 'A code of conduct explains expected professional behavior and responsibilities.'
},
{
  id: 1824, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is corporate social responsibility (CSR)?',
  options: ['Considering an organization’s social and environmental impacts', 'Maximizing output regardless of harm', 'Removing all public accountability', 'Writing software comments'],
  a: 0, explanation: 'CSR concerns an organization’s responsibilities toward society and the environment.'
},
{
  id: 1825, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is sustainability in technology?',
  options: ['Designing and operating technology with long-term environmental and social impacts in mind', 'Replacing every device daily', 'Ignoring energy use', 'Collecting unlimited data'],
  a: 0, explanation: 'Sustainable technology considers resource use, longevity and broader impacts.'
},
{
  id: 1826, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is accessibility in software design?',
  options: ['Making software usable by people with a range of abilities', 'Restricting software to one input method', 'Removing text alternatives', 'Disabling keyboard navigation'],
  a: 0, explanation: 'Accessibility helps people with different abilities use digital products.'
},
{
  id: 1827, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is algorithmic bias?',
  options: ['Systematic unfair outcomes produced or amplified by an algorithm', 'A faster computer processor', 'A database backup', 'A coding font'],
  a: 0, explanation: 'Bias can arise from data, design choices, deployment context or feedback loops.'
},
{
  id: 1828, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'How can a team help identify bias in an AI system?',
  options: ['Evaluate outcomes across relevant groups and contexts', 'Test only one favorable example', 'Ignore the training data', 'Hide the evaluation metrics'],
  a: 0, explanation: 'Careful evaluation across groups can reveal disparities that require investigation.'
},
{
  id: 1829, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is transparency in professional communication?',
  options: ['Clearly communicating relevant facts, assumptions and limitations', 'Hiding all project risks', 'Making unsupported claims', 'Withholding every result'],
  a: 0, explanation: 'Transparency helps stakeholders understand decisions and their limitations.'
},
{
  id: 1830, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is a professional conflict of interest best handled by?',
  options: ['Disclosing it and following the applicable policy', 'Concealing it from everyone', 'Destroying related records', 'Ignoring its possible effect'],
  a: 0, explanation: 'Disclosure allows an organization to assess and manage the conflict.'
},
{
  id: 1831, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is a bribe?',
  options: ['An improper benefit offered or accepted to influence a decision', 'A normal salary paid under contract', 'A documented project milestone', 'A security update'],
  a: 0, explanation: 'Bribery undermines fair and lawful decision-making.'
},
{
  id: 1832, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is fair competition?',
  options: ['Competing honestly without deception or prohibited conduct', 'Stealing a competitor’s confidential data', 'Falsifying test results', 'Impersonating another company'],
  a: 0, explanation: 'Fair competition respects laws, agreements and honest business practices.'
},
{
  id: 1833, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'Why should a professional avoid falsifying test results?',
  options: ['It misleads stakeholders and can cause harmful decisions', 'It improves evidence quality', 'It guarantees software safety', 'It is necessary for documentation'],
  a: 0, explanation: 'Accurate results are essential for trust, safety and sound decisions.'
},
{
  id: 1834, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is a non-disclosure agreement (NDA)?',
  options: ['An agreement restricting disclosure of specified confidential information', 'A programming language', 'A public source-code repository', 'A network protocol'],
  a: 0, explanation: 'An NDA establishes confidentiality obligations for covered information.'
},
{
  id: 1835, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'How should confidential company data be handled?',
  options: ['Access and share it only as authorized and necessary', 'Upload it to a public site', 'Send it to personal contacts without permission', 'Ignore the data policy'],
  a: 0, explanation: 'Confidential information should be protected according to policy, law and role-based access.'
},
{
  id: 1836, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is responsible use of artificial intelligence at work?',
  options: ['Checking outputs, protecting data and acknowledging limitations', 'Trusting every generated answer blindly', 'Sharing confidential data with any tool', 'Removing all human oversight regardless of risk'],
  a: 0, explanation: 'Responsible AI use includes verification, privacy protection and appropriate oversight.'
},
{
  id: 1837, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is the ethical principle of beneficence?',
  options: ['Acting to promote well-being or benefit', 'Intentionally causing avoidable harm', 'Hiding all information', 'Ignoring users’ needs'],
  a: 0, explanation: 'Beneficence emphasizes contributing to the welfare of affected people.'
},
{
  id: 1838, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What does non-maleficence mean?',
  options: ['Avoiding or minimizing harm', 'Maximizing profit at any cost', 'Collecting every personal detail', 'Ignoring safety testing'],
  a: 0, explanation: 'Non-maleficence is the principle of avoiding or reducing harm.'
},
{
  id: 1839, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What does fairness require in professional decisions?',
  options: ['Using relevant and consistent criteria while considering justified differences', 'Favoring friends in every decision', 'Ignoring evidence', 'Changing rules secretly'],
  a: 0, explanation: 'Fairness involves consistent, defensible treatment and attention to unjustified disparities.'
},
{
  id: 1840, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is respect for autonomy?',
  options: ['Respecting people’s ability to make informed choices', 'Making every choice for users without explanation', 'Hiding all options', 'Disabling user consent'],
  a: 0, explanation: 'Autonomy supports informed and voluntary decision-making.'
},
{
  id: 1841, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'Why is accurate attribution important in collaborative work?',
  options: ['It recognizes contributions and helps establish responsibility', 'It makes collaboration impossible', 'It replaces testing', 'It hides who created the work'],
  a: 0, explanation: 'Attribution gives appropriate credit and clarifies contributions.'
},
{
  id: 1842, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What should an employee do when asked to falsify a report?',
  options: ['Refuse and raise the concern through appropriate channels', 'Alter the report without question', 'Delete the original evidence', 'Blame an unrelated colleague'],
  a: 0, explanation: 'Professionals should preserve integrity and report improper requests appropriately.'
},
{
  id: 1843, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is ethical leadership?',
  options: ['Leading through integrity, fairness and accountability', 'Rewarding dishonesty', 'Hiding all risks from a team', 'Ignoring employee concerns'],
  a: 0, explanation: 'Ethical leaders model responsible behavior and encourage fair decision-making.'
},
{
  id: 1844, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is constructive feedback?',
  options: ['Specific, respectful guidance intended to improve work', 'A personal insult', 'An unsupported accusation', 'A method of hiding mistakes'],
  a: 0, explanation: 'Constructive feedback focuses on observable work and practical improvements.'
},
{
  id: 1845, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'How should a professional respond to a mistake?',
  options: ['Acknowledge it, communicate appropriately and help correct it', 'Hide it permanently', 'Falsify the records', 'Blame the customer automatically'],
  a: 0, explanation: 'Honest reporting and corrective action help limit impact and prevent recurrence.'
},
{
  id: 1846, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is an ethical dilemma?',
  options: ['A situation involving competing ethical values or obligations', 'A simple syntax error only', 'A computer power failure', 'A routine file save'],
  a: 0, explanation: 'Ethical dilemmas require reasoning about competing duties, consequences or values.'
},
{
  id: 1847, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is stakeholder analysis?',
  options: ['Identifying affected parties and considering their interests and influence', 'Counting only source-code files', 'Choosing a logo color', 'Removing all user feedback'],
  a: 0, explanation: 'Stakeholder analysis helps teams understand who may be affected by decisions.'
},
{
  id: 1848, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'Why should software professionals consider environmental impacts?',
  options: ['Technology can affect energy use, resource consumption and electronic waste', 'Software has no environmental footprint under any circumstances', 'It makes testing unnecessary', 'It guarantees every product lasts forever'],
  a: 0, explanation: 'Computing has environmental impacts throughout hardware production, use and disposal.'
},
{
  id: 1849, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is ethical use of user data in an application?',
  options: ['Use data for legitimate disclosed purposes with appropriate protection', 'Collect data secretly without limits', 'Sell sensitive records without authorization', 'Ignore applicable privacy requirements'],
  a: 0, explanation: 'Ethical data practices include transparency, purpose limitation and suitable safeguards.'
},
{
  id: 1850, branch: 'CSE', topic: 'Professional Ethics', semester: 'Semester 8', subject: 'Professional Ethics',
  q: 'What is the best overall approach to professional ethics?',
  options: ['Consider honesty, fairness, privacy, safety and accountability in decisions', 'Focus only on finishing quickly', 'Ignore stakeholder impact', 'Hide all limitations'],
  a: 0, explanation: 'Ethical professional practice balances responsibilities and considers the consequences of decisions.'
},





];