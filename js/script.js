$(function () {
    function TestFunction(name, questionsList, questionsPlace) {
        var $name = name;
        var $questions = questionsList;
        var $questionsPlace = questionsPlace;
        for (var i = 0; i < $questionsPlace.length; i++) {
            var questionPlace = $questionsPlace[i];
            var question = $questions[i];
            $(questionPlace).html(question);
        }

        
        
        
        
        $('.test-name').html($name);
    }

    function randomInteger(min, max) {
        // случайное число от min до (max+1)
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    $('.res').click(function() {
       var num = randomInteger(1, 5);
       var img = document.querySelector('.resBlock img');
       var info = document.querySelector('.resBlock span');
        if (num == 1) {
            $(img).attr("src", "./img/IRON-MAN.png");       
            $(info).html('IRON MAN - A wealthy American business magnate, playboy, and ingenious scientist, Anthony Edward "Tony" Stark suffers a severe chest injury during a kidnapping. When his captors attempt to force him to build a weapon of mass destruction, he instead creates a mechanized suit of armor to save his life and escape captivity. Later, Stark develops his suit, adding weapons and other technological devices he designed through his company, Stark Industries. He uses the suit and successive versions to protect the world as Iron Man. Although at first concealing his true identity, Stark eventually declared that he was, in fact, Iron Man in a public announcement. ')     
        }
        else if (num == 2) {
           
            $(img).attr("src", "./img/Cap.png");
            $(info).html('Captain America - A fictional superhero appearing in American comic books published by Marvel Comics. Created by cartoonists Joe Simon and Jack Kirby, the character first appeared in Captain America Comics #1 (cover dated March 1941) from Timely Comics, a predecessor of Marvel Comics. Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics');
        }
        else if (num == 3) {
         
            $(img).attr("src", "./img/cat.png");
            $(info).html('Black Panther - a 2018 American superhero film based on the Marvel Comics character of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the eighteenth film in the Marvel Cinematic Universe (MCU). The film is directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, and stars Chadwick Boseman as T');
        }
        else if (num == 4) {
     
            $(img).attr("src", "./img/holland.png");
            $(info).html('Spider-Man -  A fictional superhero created by writer - editor Stan Lee and writer - artist Steve Ditko.He first appeared in the anthology comic book Amazing Fantasy #15(August 1962) in the Silver Age of Comic Books.He appears in American comic books published by Marvel Comics, as well as in a number of movies, television shows, and video game adaptations set in the Marvel Universe.In the stories, Spider - Man is the alias of Peter Parker, an orphan raised by his Aunt May and Uncle Ben in New York City after his parents Richard and Mary Parker were killed in a plane crash." ');
        }
        else{
         
            $(img).attr("src", "./img/THOR.png");
            $(info).html('Thor - a prominently mentioned god throughout the recorded history of the Germanic peoples, from the Roman occupation of regions of Germania, to the tribal expansions of the Migration Period, to his high popularity during the Viking Age, when, in the face of the process of the Christianization of Scandinavia, emblems of his hammer, Mjölnir, were worn and Norse pagan personal names containing the name of the god bear witness to his popularity. ');
        }
        $(img).addClass('animated');
        $(img).addClass('fadeInLeft');
        $(info).addClass('animated');
        $(info).addClass('fadeInLeft');

    })
    
    
    
    
    var questionsList = [
        'What about your possitive characteristic?',
        'Which negative characteristic is yours?',
        'How do you attitude to others',
        'How can you describe you P-skills?',
        'Are you famous?'
    ]
    var questionsPlace = [
        $('.q-1'),
        $('.q-2'),
        $('.q-3'),
        $('.q-4'),
        $('.q-5')
    ];

    
    
    
    
    TestFunction('"Avangers"', questionsList, questionsPlace)
    
    
    
    $('.reset').click(function() {
        location.reload(true);
    })







})
