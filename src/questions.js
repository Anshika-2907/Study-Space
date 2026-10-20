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
 {
  id: 1,
  topic: 'HTML',
  semester: 'Semester 5',
  subject: 'Web Technologies (HTML, CSS, JS)',
  q: 'What does HTML stand for?',
  options: [
    'HyperText Markup Language',
    'HighText Machine Language',
    'Hyper Transfer Main Link',
    'Home Tool Markup Language'
  ],
  a: 0,
  explanation: 'HTML stands for HyperText Markup Language.'
},
  {id:2, topic:'HTML', q:'Which tag creates a hyperlink?', options:['<link>','<a>','<href>','<url>'], a:1, explanation:'The anchor tag <a> creates a hyperlink.'},
  {id:3, topic:'CSS', q:'What does CSS stand for?', options:['Computer Style Syntax','Cascading Style Sheets','Creative Styling System','Colorful Sheet Syntax'], a:1, explanation:'CSS stands for Cascading Style Sheets.'},
  {id:4, topic:'JavaScript', q:'Which keyword declares a block-scoped variable?', options:['const','let','fixed','static'], a:1, explanation:'let declares a block-scoped variable.'},
  {id:5, topic:'DSA', q:'Which data structure follows LIFO?', options:['Queue','Stack','Graph','Heap'], a:1, explanation:'A stack uses last-in, first-out order.'}
,
{id:6, topic:'Engineering Mathematics-I', semester:'Semester 1', subject:'Engineering Mathematics-I', q:'What is the derivative of x² with respect to x?', options:['x','2x','x²','2'], a:1, explanation:'Using the power rule, d(x²)/dx = 2x.'},
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


];