
const quizData = {
    general_knowledge: [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Rome"],
            answer: "Paris"
        },
        
        {
            question:"What is the capital of India?	",
            options:["Washington","Ottawa","London","New Delhi"],
            answer:"New Delhi"
        },

        {
            question:"How many oceans are there in the world?	",
            options:["4","6","2","5"],
            answer:"5"
        },
    
        {
            question:"Which planet is known as the red planet?	",
            options:["Mercury","Mars","Saturn","Jupiter"],
            answer:"Mars"
        },
        
        {
            question:"What is the largest ocean in the world?",
            options:["The Pacific Ocean","The Atlantic Ocean","The Indian Ocean","The Southern Ocean"],
            answer:"The Pacific Ocean"
        },
        
        {
            question:"Who wrote the Indian national anthem?	",
            options:["B.G.Verghese","B.C.Chatterjee","Rabindranath Tagore","Arvind Adiga"],
            answer:"Rabindranath Tagore"
        },
        
        {
            question:"Who invented the telephone?",
            options:["Thomas Alva Edison","Alexander Graham Bell","Ackerman","Alexander William"],
            answer:"Alexander Graham Bell"
        },
        
        {
            question:"Which festival is known as the Festival of Lights?",
            options:["Diwali","Holi","Makarsankranti","Dussera"],
            answer:"Diwali"
        },
        
        {
            question:"Who is known as the missile man of India?	",
            options:["Dr.Sarabhai","Jagdish Chandra Bose","Homi Jahangir Bhaba","Dr. APJ Abdul Kalam"],
            answer:"Dr. APJ Abdul Kalam"
        },
        
        {
            question:"What is the largest hot desert in the world?",
            options:["Antartica Dessert","The Sahara desert","Thar Dessert","Gobi Dessert"],
            answer:"The Sahara desert"
        },
        
        
    ],
    science: [
        {
            question: "What is the chemical symbol for water?",
            options: ["H2O", "O2", "CO2", "N2"],
            answer: "H2O"
        },
        
        {
            question:"Which gas do plants take in for photosynthesis?	",
            options:["Carbon dioxide","Oxygen","Nitrogen","Helium"],
            answer:"Carbon dioxide"
        },
    
        {
            question:"Who invented light?",
            options:["Thomas Edison","Nikola Tesla","Albert Einstine","Isaac Newton"],
            answer:"Thomas Edison"
        },
        
        {
            question:"What is the hardest natural substance on Earth?	",
            options:["Quartz","Coal","The Diamond","Granite"],
            answer:"The Diamond"
        },
        
        {
            question:"Which part of the human body produces insulin?	",
            options:["Liver","Pancreas","Heart","Stomach"],
            answer:"Pancreas"
        },
        
        {
            question:"Which element is used in making batteries?",
            options:["Zinc","Carbon","Magnesium","Lithium"],
            answer:"Lithium"
        },
        
        {
            question:"What is the PowerHouse of a cell?",
            options:["Ribosomes","Mitochondria","Golgi Complex","None of these"],
            answer:"Mitochondria"
        },
        
        {
            question:"Which metal is liquid at room temperature?",
            options:["Mercury","Potassium","Calcium","Sodium"],
            answer:"Mercury"
        },
        
        {
            question:"Who discovered penicillin?",
            options:["Charles Darwin","Gregor Mendel","Louis Pasteur","Alexandra Fleming"],
            answer:"Alexandra Fleming"
        },
        
        {
            question:"What is the speed of light?",
            options:["Approximately 299, 792 km/s","Approximately 267, 733 km/s","Approximately 329, 792 km/s","Approximately 249, 552 km/s"],
            answer:"Approximately 299, 792 km/s"
        },
        
        
    ],
    quantitative_aptitude: [
        
        {
            question:"Find the next number in the series: 2, 4, 8, 16,…? ",
            options:["32","34","22","78"],
            answer:"32"
        },
        
        {
            question:"Find the simple interest on ₹1000 at 5% per annum for 2 years.",
            options:["₹200","₹100","₹50","₹60"],
            answer:"₹100"
        },
        
        {
            question:"Find the compound interest on ₹1500 at 4% per annum for 3 years.",
            options:["₹190","₹187.14","₹182","₹77.44"],
            answer:"₹187.14"
        },
        
        {
            question:"A man buys an article for ₹200 and sells it for ₹250. Find his profit percentage.",
            options:["25%","28","10%","50%"],
            answer:"25%"
        },
        
        {
            question:"If a product costs ₹500 and is sold at a loss of 10%, find the selling price.",
            options:["₹450","₹300","₹480","₹350"],
            answer:"₹450"
        },
        
        {
            question:"A shopkeeper sells a pen for ₹20 with a profit of 25%. Find the cost price.",
            options:["₹10","₹20","₹16","₹5"],
            answer:"₹16"
        },
        
        {
            question:"If a car travels at 60 km/hr for 3 hours, how far does it go?",
            options:["100 km","50 km","150 km","180 km"],
            answer:"180 km"
        },
        
        {
            question:"If a person walks at 4 km/hr, how long will it take to walk 12 km? ",
            options:["1hr","4hrs","2hrs","3hrs"],
            answer:"3hrs"
        },
        
        {
            question:"A car travels 90 km at 30 km/hr and another 60 km at 20 km/hr. Find the average speed.",
            options:["82 km/hr","29 km/hr","24 km/hr","42 km/hr"],
            answer:"24 km/hr"
        },
        
        {
            question:"A can finish a task in 8 days, and B can finish it in 12 days. If they work together, how long will it take?",
            options:["8 days","4.8 days","6.4 days","9 days"],
            answer:"4.8 days"
        },
    
    ],
    technology: [
        {
            question: "What does HTML stand for?",
            options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
            answer: "Hyper Text Markup Language"
        },
        
        {
            question:"Who is known as the father of computers?",
            options:["Charles Babbage","Pascle","Hollerith","Newman"],
            answer:"Charles Babbage"
        },
        
        {
            question:"What is part of a database that holds only one type of information?",
            options:["Field","Report","Record","File"],
            answer:"Field"
        },
        
        {
            question:"'OS' computer abbreviation usually means ?",
            options:["Order of Significance","Open Software","Operating System","Optical Sensor"],
            answer:"Operating System"
        },
        
        {
            question:"'.MOV' extension refers usually to what kind of file?",
            options:["Image file","Animation/movie file","MS Office document","Audio File"],
            answer:"Animation/movie file"
        },
        
        {
            question:"Most modern TV's draw power even if turned off. The circuit the power is used in does what function?",
            options:["Sound","Remote control","Color balance","High voltage"],
            answer:"Remote control"
        },
        
        {
            question:"Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
            options:["Flash","Flange","Fury","FRAM"],
            answer:"Flash"
        },
        
        {
            question:"Who developed Yahoo?",
            options:["David Filo & Jerry Yang","Dennis Ritchie & Ken Thompson","Vint Cerf & Robert Kahn","Steve Case & Jeff Bezos"],
            answer:"David Filo & Jerry Yang"
        },
        
        {
            question:"Made from a variety of materials, such as carbon, which inhibits the flow of current...?",
            options:["Inductor","Choke","Resistor","Capacitor"],
            answer:"Resistor"
        },
        
        {
            question:"The most common format for a home video recorder is VHS. VHS stands for...?",
            options:["Video Home System","Very high speed","Video horizontal standard","Voltage house standard"],
            answer:"Video Home System"
        },
    
    ],
    current_affairs: [

        {
            question:"What is the name of the operation launched by India to bring back its citizens from Sudan during the conflict?",
            options:["Operation Kaveri","Operation Vijay","Operation Polo","Operation Peace"],
            answer:"Operation Kaveri"
        },
        
        {
            question:"What is the name of India’s latest lunar exploration mission?	",
            options:["Chandrayan - 2","Chandrayan – 3","ISRO Lunar 1","Mars Orbiter"],
            answer:"Chandrayan – 3"
        },
        
        {
            question:"What is the name of the new parliament building inaugurated in India?	",
            options:["Sansad Bhavan","Parliament Mahal","Central Vista","Lok Sabha Sadan"],
            answer:"Central Vista"
        },
        
        {
            question:"Which country recently joined the BRICS alliance in its expansion?",
            options:["India","Iraq","USA","Egypt, Ethiopia, Iran, UAE, and Saudi Arabia"],
            answer:"Egypt, Ethiopia, Iran, UAE, and Saudi Arabia"
        },
        
        {
            question:"Who won the 2025 ICC Champions trophy?",
            options:["India","Australia","Africa","England"],
            answer:"India"
        },
        
        {
            question:"Who won the Prague Chess Masters 2025?",
            options:["Grandmaster Aravind Chithambaram","Gukesh Dommaraju","Arjun Erigaisi","Magnus Carlsen"],
            answer:"Grandmaster Aravind Chithambaram"
        },
        
        {
            question:"Which state is hosting the Women’s Kabaddi World Cup in 2025?	",
            options:["Goa","Bihar","Assam","Andhrapradesh"],
            answer:"Bihar"
        },
        
        {
            question:"Which country will host the International Shooting Sport Federation, Junior World Cup 2025?",
            options:["USA","England","Australia","India"],
            answer:"India"
        },
        
        {
            question:"Who won the Asian Snooker Championship 2025?",
            options:["Pankaj Advani","Amir Sarkhosh","Aditya Mehta","Chang Yu Kiu"],
            answer:"Pankaj Advani"
        },
        
        {
            question:"Which country is to host the World Boxing Cup Final 2025?",
            options:["India","England","Iran","Australia"],
            answer:"India"
        },
        
    ],
    english_language: [
        {
            question:"The small child does whatever his father -----.",
            options:["has done","did","does","had done"],
            answer:"does"
        },

        {
            question:"You need not come unless you want to.",
            options:["You don't need to come unless you want to","You come only when you want to","You come unless you don't want to","No correction required"],
            answer:"You don't need to come unless you want to"
        },
        
        {
            question:"The man to who I sold my house was a cheat.",
            options:["to whom I sold","to whom I sell","to who I sell","No correction required"],
            answer:"to whom I sold"
        },
        
        {
            question:"They were all shocked at his failure in the competition.",
            options:["No correction required","had all shocked at","had all shocked by","were shocked at all"],
            answer:"No correction required"
        },
        
        {
            question:"I’d love to ________ in the 19th century.",
            options:[" lived"," live"," have lived"," have been lived"],
            answer:" live"
        },
        
        {
            question:"The film ________ by Quentin Tarantino.",
            options:["was directed"," was direct"," did directed","directed"],
            answer:"was directed"
        },
        
        {
            question:"He drives quite ________, but his brother drives really ________.",
            options:[" slowly … fastly"," slowly … fast"," slow … fast"," slow … fastly"],
            answer:" slowly … fast"
        },
        
        {
            question:"By next month I ________ all my exams, and I can relax!",
            options:[" will finish"," will have finished"," will be finishing"," will have been finishing"],
            answer:" will have finished"
        },
        
        {
            question:"Winters here ________ be really cold sometimes, so make sure you bring warm clothes!",
            options:["can","may","could","might"],
            answer:"can"
        },
        
        {
            question:"Do you think it’s ________ rain tomorrow?",
            options:[" going to","will","to","going"],
            answer:" going to"
        },
       
    ],
    sports: [
        {
            question: "How many players are on a soccer team?",
            options: ["10", "11", "12", "9"],
            answer: "11"
        },
        
        {
            question:"Who captained India to its first-ever Cricket World Cup victory in 1983?",
            options:["Kapil Dev","Sunil Gavaskar","Sachin Tendulkar","Saurav Ganguly"],
            answer:"Kapil Dev"
        },
        
        {
            question:"Which Indian badminton player became the first Indian to win an Olympic medal in the sport?",
            options:["Kidambi Srikanth","PV Sindhu","Saina Nehwal","Prakash Padukone"],
            answer:"Saina Nehwal"
        },
        
        {
            question:"Which city hosted the iconic 2011 Cricket World Cup final between India and Sri Lanka?",
            options:["Mumbai","Kolkatta","Chennai","Delhi"],
            answer:"Mumbai"
        },
        
        {
            question:"Who was the first Indian cricketer to score a double century in ODI?",
            options:["Sunil Gavaskar","Sachin Tendulkar","Virender Sehwag","Kapil Dev"],
            answer:"Sachin Tendulkar"
        },
        
        {
            question:"Who is the only Indian male boxer to win a medal at the Olympics?",
            options:["Manoj Kumar","Mary Kom","Vikas Krishan Yadav","Vijender Singh"],
            answer:"Vijender Singh"
        },
        
        {
            question:"Which Indian chess player holds the prestigious title of Grandmaster?",
            options:["Viswanathan Anand","Harikrishna Koneru","Pentala Harikrishna","Adhiban Baskaran"],
            answer:"Viswanathan Anand"
        },
        {
            question:"Which Indian paralympic athlete won the gold medal in men's discus throw F64 at the Tokyo Paralympics 2020?",
            options:["Mariyappan Thangavelu","Singhraj Adhana","Sumit Antil","Devendra Jhajharia"],
            answer:"Sumit Antil"
        },
        
        {
            question:"Who is the current president of the Board of Control for Cricket in India (BCCI)?",
            options:["Sourav Ganguly","Roger Binny","Rahul Dravid","Jay Shah"],
            answer:"Roger Binny"
        },
        
        {
            question:"Which Indian athlete is known as the 'Flying Sikh' for his exceptional speed in athletics?",
            options:["PT Usha","Manoj Tiwari","Neeraj Chopra","Milkha Singh"],
            answer:"Milkha Singh"
        },
    
    ],
    maths: [
        {
            question: "What is 7 multiplied by 8?",
            options: ["49", "56", "64", "72"],
            answer: "56"
        },
    
        {
            question:"What is 24 divided by 6?",
            options:["5","6","2","4"],
            answer:"4"
        },
        
        {
            question:"If 1=3,2=3,3=5,4=4,5=4 Then, 6=?",
            options:["3","1","2","7"],
            answer:"3"
        },

        {
            question:"What is 9-4 ?",
            options:["5","6","1","3"],
            answer:"5"
        },

        {
            question:"What is the sum of 130+125+191?",
            options:["335","456","446","426"],
            answer:"446"
        },

        {
            question:"If we minus 712 from 1500, how much do we get?",
            options:["788","778","735","722"],
            answer:"788"
        },

        {
            question:" 50 times of 8 is equal to:",
            options:["500","400","1000","800"],
            answer:"400"
        },

        {
            question:"110 divided by 10 is:",
            options:["11","3","10","6"],
            answer:"11"
        },

        {
            question:"20+(90÷2) is equal to:",
            options:["77","65","43","87"],
            answer:"65"
        },

        {
            question:"The product of 82 and 5 is:",
            options:["410","500","490","333"],
            answer:"410"
        },
    
    ],
    reasoning_ability:[
            {
                question:"1. Find the odd one out from the given set of numbers. 14, 28, 35, 46, 56, 84",
                options:["14","46","28","56"],
                answer:"46"
            },
        
            {
                question:"2. Find odd one out from the given jumbled words. [LNUAIMMIU, ELEST, OPERPC, NMKOYE, INCKLE]",
                options:["NMKOYE","OPERPC","INCKLE","ELEST"],
                answer:"NMKOYE"
            },
            {
                question:"3. Find the odd one out.",
                options:["BEK","CFL","MPS","GJP"],
                answer:"MPS"
            },
        
            {
                question:"4. Find the odd one out.",
                options:["M","S","T","O"],
                answer:"S"
            },
        
            {
                question:"5. In a certain code “CODE” is written as “DPEF”. How is “DEFENCE” is written in that code?",
                options:["KWMCJFL","ELDFSAP","EFGFODF","HRAOSCV"],
                answer:"EFGFODF"
            },
        
            {
                question:"6. In a certain code “564” means “study very hard”, “736” means “hard work pays” and “423” means “study and work”. Which of the following is the code for “work”?",
                options:["5","3","6","4"],
                answer:"6"
            },
        
            {
                question:"7. If ‘white’ is called ‘yellow’, ‘yellow’ is called ‘blue’, ‘blue’ is called ‘red’, ‘red’ is called ‘black’, ‘black’ is called ‘violet’ and ‘violet’ is called ‘green’, then what would be the colour of light emitting from bulb?",
                options:["Blue","Red","Black","Yellow"],
                answer:"Blue"
            },
        
            {
                question:"8. If the letters of the word “PRODUCT” are arranged alphabetically, then which letter would be farthest from the second letter of word?",
                options:["T","R","U","P"],
                answer:"U"
            },
        
            {
                question:"9. Milly introduced a boy as the son of the only daughter of the mother of her maternal uncle. How is Milly related to that boy?",
                options:["Nephew","Son","Brother","Sister"],
                answer:"Sister"
            },
        
            {
                question:"10. If ‘A&B’ means A is father of B, ‘A*B’ means A is brother of B, ‘A$B’ means A is mother of B then which of the following is correct about K$T&M?",
                options:["M is brother of T","T is son of K","M is father of T","K is mother of Ms"],
                answer:"T is son of K"
            }
        
        
    ]
};

// Select DOM elements
const subjectSelectionEl = document.getElementById('subject-selection');
const quizEl = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const timerEl = document.getElementById('time');
const resultContainerEl = document.getElementById('result-container');
const scoreTextEl = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');
const subjectTitleEl = document.querySelector('.subject-title');
const subjectButtons = document.querySelectorAll('.subject-btn');

let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 60; // 60 seconds per quiz

// Event listener for subject selection
subjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        const subject = button.dataset.subject;
        currentQuestions = quizData[subject].slice(0, 20); // Get 20 questions for the selected subject
        subjectTitleEl.textContent = button.textContent;
        startQuiz();
    });
});

// Start the quiz
function startQuiz() {
    subjectSelectionEl.classList.add('hidden');
    quizEl.classList.remove('hidden');
    resultContainerEl.classList.add('hidden');
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
    startTimer();
}

// Load a question
function loadQuestion() {
    resetState();
    if (currentQuestionIndex < currentQuestions.length) {
        const currentQuestion = currentQuestions[currentQuestionIndex];
        questionEl.textContent = currentQuestion.question;
        
        // Clear previous options
        optionsEl.innerHTML = '';
        
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('option-btn');
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(option, currentQuestion.answer));
            optionsEl.appendChild(button);
        });

        nextBtn.classList.add('disabled');
        nextBtn.disabled = true;
    } else {
        endQuiz();
    }
}

// Reset the state for the next question
function resetState() {
    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;
    optionsEl.classList.remove('answered');
}

// Handle answer selection
function selectAnswer(selectedOption, correctAnswer) {
    const optionButtons = optionsEl.querySelectorAll('.option-btn');
    let isCorrect = selectedOption === correctAnswer;

    optionButtons.forEach(button => {
        if (button.textContent === correctAnswer) {
            button.classList.add('correct');
        } else if (button.textContent === selectedOption) {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    });

    if (isCorrect) {
        score++;
        showConfetti();
        
    }

    nextBtn.classList.remove('disabled');
    nextBtn.disabled = false;
}

// Timer functionality
function startTimer() {
    let timeLeft = timeLimit;
    timerEl.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endQuiz();
        }
    }, 1000);
}

// Event listener for the "Next" button
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    loadQuestion();
});

// End the quiz
function endQuiz() {
    clearInterval(timer);
    quizEl.classList.add('hidden');
    resultContainerEl.classList.remove('hidden');
    scoreTextEl.textContent = `You scored ${score} out of ${currentQuestions.length}!`;
        // Check if the score is greater than 8
    if (score > 7) {
        // If the condition is met, call the confetti function
        showConfetti();
    }

}

// Event listener for the "Restart" button
restartBtn.addEventListener('click', () => {
    subjectSelectionEl.classList.remove('hidden');
    resultContainerEl.classList.add('hidden');
    quizEl.classList.add('hidden');
    timerEl.textContent = timeLimit;
});

// Initial state
quizEl.classList.add('hidden');
resultContainerEl.classList.add('hidden');


// Confetti
function showConfetti(){
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}

