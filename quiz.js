let preQuestions =
    [
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The song &quot;Twin Size Mattress&quot; was written by which band?",
            "correct_answer": "The Front Bottoms",
            "answers": ["The Front Bottoms", "Twenty One Pilots", "The Wonder Years", "The Smith Street Band"]
        },
        {
            "category": "Vehicles",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which Japanese company is the world&#039;s largest manufacturer of motorcycles?",
            "correct_answer": "Honda",
            "answers": ["Yamaha", "Suzuki", "Kawasaki", "Honda"]
        },
        {
            "category": "General Knowledge",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of the following buildings is example of a structure primarily built in the Art Deco architectural style?",
            "correct_answer": "Niagara Mohawk Building",
            "answers": ["Niagara Mohawk Building", "Taipei 101", "One Detroit Center", "Westendstrasse 1"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In most FPS video games such as Counter-Strike, shooting which part of the body does the highest damage?",
            "correct_answer": "Head",
            "answers": ["Arm", "Leg", "Chest", "Head"]
        },
        {
            "category": "General Knowledge",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The term &quot;Spam&quot; came before the food product &quot;Spam&quot;.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Television",
            "type": "multiple",
            "difficulty": "easy",
            "question": "In the show Stranger Things, what is Eleven&#039;s favorite breakfast food?",
            "correct_answer": "Eggo Waffles",
            "answers": ["Toast", "Captain Crunch", "Bacon and Eggs", "Eggo Waffles"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "In the game Paper Mario for the Nintendo 64 the first partner you meet is a Goomba, what is its name?",
            "correct_answer": "Goombario",
            "answers": ["Goombella", "Goombarry", "Goomby", "Goombario"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "When was Google founded?",
            "correct_answer": "September 4, 1998",
            "answers": ["October 9, 1997", "December 12, 1989", "Feburary 7th, 2000", "September 4, 1998"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which is not a playable character in the 2005 video game Killer7?",
            "correct_answer": "Frank Smith",
            "answers": ["Frank Smith", "Mask de Smith", "Dan Smith", "Coyote Smith"]
        },
        {
            "category": "Geography",
            "type": "boolean",
            "difficulty": "medium",
            "question": "The capital of the US State Ohio is the city of Chillicothe.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Video Games",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which company did Bethesda purchase the Fallout Series from?",
            "correct_answer": "Interplay Entertainment",
            "answers": ["Capcom", "Interplay Entertainment", "Blizzard Entertainment", "Nintendo"]
        },
        {
            "category": "Entertainment: Music",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which iconic album cover features the pulsar waves of CP 1919 placed in the center of the cover?",
            "correct_answer": "Unknown Pleasures",
            "answers": ["The Dark Side of the Moon", "Unknown Pleasures", "London Calling", "The Velvet Underground &amp; Nico"]
        },
        {
            "category": "Politics",
            "type": "boolean",
            "difficulty": "medium",
            "question": "During the 2016 United States presidential election, the State of California possessed the most electoral votes, having 55.",
            "correct_answer": "True",
            "answers": ["False", "True"]
        },
        {
            "category": "History",
            "type": "multiple",
            "difficulty": "easy",
            "question": "Who was the first prime minister of Canada?",
            "correct_answer": "John Macdonald",
            "answers": ["John Macdonald", "John Abbott", "Alexander Mackenzie", "Robert Borden"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "The land mass of modern day Turkey is called what?",
            "correct_answer": "Anatolia",
            "answers": ["Anatolia", "Ismuth of Ottoma", "Ottoma", "Ismuth of Anatolia"]
        },
        {
            "category": "Sports",
            "type": "boolean",
            "difficulty": "easy",
            "question": "In association football, or soccer, a corner kick is when the game restarts after someone scores a goal.",
            "correct_answer": "False",
            "answers": ["True", "False"]
        },
        {
            "category": "Entertainment: Film",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Who played the Cenobite called &quot;Pinhead&quot; in the original Hellraiser films?",
            "correct_answer": "Doug Bradley",
            "answers": ["Doug Bradley", "Doug Jones", "Doug Savant", "Doug Benson"]
        },
        {
            "category": "Geography",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which of these countries is the smallest by population?",
            "correct_answer": "Norway",
            "answers": ["Slovakia", "Norway", "Finland", "Hong Kong"]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Which internet company began life as an online bookstore called &#039;Cadabra&#039;?",
            "correct_answer": "Amazon",
            "answers": [
                "eBay",
                "Overstock",
                "Shopify",
                "Amazon"
            ]
        },
        {
            "category": "Science: Computers",
            "type": "multiple",
            "difficulty": "medium",
            "question": "Generally, which component of a computer draws the most power?",
            "correct_answer": "Video Card",
            "answers": [
                "Hard Drive",
                "Processor",
                "Power Supply",
                "Video Card"
            ]
        }];

let wyswietl = document.querySelector('.punkty');
let wyswietl_historia = document.querySelector('.history_score');
let twoje_punkty= document.querySelector('.twoje_punkty');

let start= document.querySelector('.start');
let history = document.querySelector('.history');
let new_game = document.querySelector('.new_game');

let start_quizu= document.querySelector('.start_quizu');
let pytania= document.querySelector('.pytania');

let previous = document.querySelector('.previous')
let next = document.querySelector('.next');
let back = document.querySelector('.back');

let question = document.querySelector('.question');
let answers = document.querySelectorAll('.list-group-item');

let index = 0;
let points = 0;
let wynik=0;

for (let i = 0; i < answers.length; i++) {
    answers[i].addEventListener('click', function(event) {
        if (event.target.innerHTML === preQuestions[index].correct_answer) {

            add_class(answers[0],'stop');
            add_class(answers[1],'stop');
            add_class(answers[2],'stop');
            add_class(answers[3],'stop');

            points++;
            event.target.classList.add("poprawne");

        }
        else {
            event.target.classList.add("zle");

            add_class(answers[0],'stop');
            add_class(answers[1],'stop');
            add_class(answers[2],'stop');
            add_class(answers[3],'stop');


        }
        wyswietl.innerHTML = points;
        console.log('points', points);
    });

}


start.addEventListener('click', function() {
    points=0;
    zero();
    add_class(pytania, 'display_on');

    remove_class(start_quizu, 'display_on');
    add_class(start_quizu, 'display_off');
    remove_class(twoje_punkty, 'display_on');
    add_class(twoje_punkty, 'display_off');
});

history.addEventListener('click', function() {
    remove_class(twoje_punkty, 'display_on');
    add_class(twoje_punkty, 'display_on');
    wyswietl_historia.innerHTML = wynik;
    console.log(wynik);
});


function setQuestion(index) {
    question.innerHTML = preQuestions[index].question;

    answers[0].innerHTML = preQuestions[index].answers[0];
    answers[1].innerHTML = preQuestions[index].answers[1];
    answers[2].innerHTML = preQuestions[index].answers[2];
    answers[3].innerHTML = preQuestions[index].answers[3];
}

setQuestion(index);

function add_class(element, class_name){
    element.classList.add(class_name);
}
function remove_class(element, class_name){
    element.classList.remove(class_name);
}
function nextQuestion() {
    index++;
    zero();
    setQuestion(index);
}

function previousQuestion() {
    index--;
    zero();
    setQuestion(index);
}

function backQuiz() {
    index=0;
    zero();
    setQuestion(0);
}

new_game.addEventListener('click', function() {
    index = 0;
    setQuestion(index);

    remove_class(start_quizu, 'display_off');
    add_class(start_quizu, 'display_on');
    remove_class(pytania, 'display_on');
    add_class(pytania, 'display_off');

    wynik=(points/20);
});

back.addEventListener('click', backQuiz);
next.addEventListener('click', nextQuestion);
previous.addEventListener('click', previousQuestion);

function zero(){
    answers.forEach(function(element){
        element.classList.remove("poprawne");
        element.classList.remove("zle");
        remove_class(answers[0],'stop');
        remove_class(answers[1],'stop');
        remove_class(answers[2],'stop');
        remove_class(answers[3],'stop');
    });
}
