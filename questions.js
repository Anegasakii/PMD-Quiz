let allQuestions = {
    EOTD: []
}

let allResults = {
    EOTD: {
        Lonely: "the Lonely type...<br>...At least a little bit! You might find that surprising, but do you think it might be a little true? You know what they say, though... We're all a bit lonely every now and then! You probably keep this fact of life to yourself, though. But if there's one thing that brings us all together... it's our need to go it solo!<br>So, a lonely and solitary type like you... Will be a Bulbasaur (M)/Mudkip (F)!",
        Docile: "the Docile type!<br>You're quite sensitive to others! You listen attentively and respectfully, and you're quick to pick up on things. Because you're so good at listening, do you find that your friends tell you their problems and concerns often? Perhaps people laugh at you sometimes for being so earnest and not recognizing jokes for what they are. But you're always honestly surprised and bashful about this aspect of yourself... And then honestly laugh about it!<br>So, a docile, sensitive type like you... Will be a Charmander (M)/Bulbasaur (F)!",
        Quirky: "the Quirky type!<br>You want to be on the cutting edge of fashion! You want to own all the latest stuff, right? But you grow bored of your old things and only like new things! You're true to your emotions, and you follow your desires. People have a hard time keeping up with you because you change so quickly. You may want to reflect upon how your words and actions affect others.<br>So, a quirky type like you... Will be a Squirtle (M)/Piplup (F)!",
        Brave: "the Brave type!<br>You don't know the meaning of fear! You're not afraid to keep moving forward in the face of danger. You also have a strong sense of justice and can't turn a blind eye to someone in trouble. But you sometimes push your own personal sense of justice a little too hard. Be careful that you don't get too pushy!<br>So, a brave type like you... Will be a Pikachu (M)/Charmander (F)!",
        Sassy: "the Sassy type!<br>Or at least somewhat sassy! You don't like taking orders. You're a little rebellious and like to disagree. You're a lone wolf! You like to keep your distance from groups and go off to do things on your own. Older folks may be the ones who find you the most disagreeable, even selfish. But people younger than you tend to really admire you!<br>So, a sassy type like you... Will be a Meowth (M)/Totodile (F)!",
        Calm: "the Calm type!<br>You're very compassionate and considerate, and you put friends ahead of yourself. You're so generous and kindhearted that you can laugh, forgive, and forget when your friends make mistakes. But be aware that your compassion can sometimes get the best of you, putting you too far behind everyone else!<br>So, a calm type like you... Will be a Chikorita (M)/Cyndaquil (F)!",
        Timid: "the Timid type.<br>You're quite gentle! You're sometimes a little shy about new things, aren't you? Do you miss out on some experiences because you get worried about the newness of the challenge? Of course, there's also a great benefit in being cautious, isn't there? After all, it keeps you nice and safe! You live life at your own speed, with no hurries and no worries!<br>So, a timid and gentle type like you... Will be a Cyndaquil (M)/Turtwig (F)!",
        Jolly: "the Jolly type!<br>You have a good sense of humor, and you're compassionate. You're always making others around you laugh. You have a sunny, positive outlook, and you have a vitality that raises the lowest of spirits to giddy heights! Yet, for all your great cheer, you're also open to tears... But you bounce between laughter and tears so easily! What an adventure life must be like for you, bouncing around like that all day!<br>So, a jolly type like you... Will be a Totodile (M)/Munchlax (F)!",
        Quiet: "the Quiet type!<br>And very calm! You're great with numbers, and you analyze information before making decisions. You rarely make mistakes, because you make decisions so calmly and rationally. You also may find it hard to guess what others are thinking, and they may find you a touch cold at times. You may not want to keep your feelings to yourself so much of the time.<br>So, a quiet and calm type like you... Will be a Treecko (M)/Chikorita (F)!",
        Hardy: "the Hardy type!<br>And you're so determined! You don't whine or feel sorry for yourself, and you never need help with anything. You also have a strong sense of responsibility. You work toward your goals steadily and never require attention along the way. Your resilient spirit is the only thing you need to guide you toward your goals. But be careful! You risk wearing yourself out if you work too long all on your own! You should recognize that sometimes you need help from friends.<br>So, a hardy, determined type like you... Will be a Torchic (M)/Treecko (F)!",
        Rash: "the Rash type...<br>...Just a little bit hasty at times! You may run out of your house and forget to lock the door once in a while. And you may leave things like umbrellas behind when you leave places. Maybe you even dash outside in your slippers every now and then! Perhaps you even wear your shirts inside out all the time! Oh, is that even rasher than you really are? So sorry! But know that your friends think your funny little flubs are adorable!<br>So, a rash and hasty type like you... Oh, wait! One more thing! You also sometimes reveal your friends' secrets by accident, don't you! Sorry. It had to be said!<br>So, without further ado... a rash and hasty type like you... Will be a Mudkip (M)/Torchic (F)!",
        Hasty: "the Hasty type!<br>You talk quickly! You eat quickly! You walk quickly! People often see you as a hard worker because you're always moving around so fast! But be careful! If you always rush so fast, you may make mistakes more often than others do. And what a waste that would be! Relax every now and then with a nice, deep breath!<br>So, a hasty type like you... Will be a Skitty (M)/Pikachu (F)!",
        Bold: "the Bold type!<br>You're so brave, and you never back down from anything! And you're also gutsy and brash in a way that others aren't! You're not shy about asking to take home all the leftovers at restaurants, right? If someone's treating you to dinner, you have no problem with ordering lots of good stuff! And you aren't fazed by doing things that most others would think twice about doing. Perhaps you don't even notice when others are upset with you! You know, you have the potential to become a truly great person... because you'll be the last one standing!<br>So, a bold type like you... Will be a Turtwig (M)/Squirtle (F)!",
        Naive: "the Naive type!<br>You're so open and innocent! What a strong sense of curiosity you have! And you state your opinions purely, sharing exactly what you think. You also have an artistic spirit that isn't restrained by social conventions! You startle people with your spontaneity and vision. But when you overdo it, other people can have a hard time keeping up with you... Have you noticed people looking at you oddly? As if for no apparent reason?<br>So, a naive, innocent type like you... Will be a Chimchar (M)/Skitty (F)!",
        Impish: "the Impish type!<br>You really like to play a lot! And you enjoy eating a lot! You love competition, but you hate losing. Your personality seems crystal clear to others. With you, what you see is what you get! You cheer others with your dazzling smile. But you may be afraid of showing what's in your heart and revealing your true self. You may not want to keep your worries to yourself. You're only human, so ask your friends for advice when you need it.<br>So, an impish type like you... Will be a Piplup (M)/Chimchar (F)!",
        Relaxed: "the Relaxed type!<br>You're so casual, leisurely, and carefree. You don't rush or stress yourself out, and you don't worry about anything. You like to take a seat and kick up your feet! Oh, yes! You definitely have an easygoing personality, and you don't sweat the details. People naturally flock to you because they find you to be a free spirit, which is so refreshing!<br>So, a relaxed type like you... Will be a Munchlax (M)/Meowth (F)!"
    }
}

class Question {
    constructor(body, answers, effects, game) {
        this.body = body;
        this.answers = answers;
        this.effects = effects;
        allQuestions[game].push(this);
    }

    score() {
        let choices = document.getElementsByName(`Q${this.pos}`);
        let chosen = "unanswered";
        for (let i = 0; i < choices.length; i++){
            if(choices[i].checked){
                chosen = i;
                break
            }
        }

        if(chosen == "unanswered") { return; }

        for (let i = 0; i < this.effects[chosen].length; i++){
            natures[this.effects[chosen][i][0]] += this.effects[chosen][i][1];
        }
    }
}


// from https://gamefaqs.gamespot.com/boards/938930-pokemon-mystery-dungeon-explorers-of-darkness/42676659?page=1
// after about 10 I told ChatGPT how I was formatting these and asked it to do the rest lol

const EOTDq0 = new Question(
    "You're in the final mile of a marathon, but the last stretch is exhausting! What will you do?",
    ["Hang in there and finish!", "Stop running.", "Find a shortcut."],
    [[['Hardy', 4],['Brave', 2]], [['Quirky', 4]], [['Bold', 4],['Rash', 2]]],
    'EOTD'
);

const EOTDq1 = new Question(
    "Would you even consider sticking to a plan to do ten sit-ups a day?",
    ["Yes! That's easy!", "Yes. Hard work, though.", "No! Who'd want to do that?!"],
    [[['Impish', 4],['Sassy', 2]], [['Hardy', 4]], [['Quirky', 4]]],
    'EOTD'
);

const EOTDq2 = new Question(
    "What do you do with your allowance?",
    ["Save it!", "Spend it!", "Spend half, save half.", "I don't get an allowance!"],
    [[['Hardy', 4]], [['Quirky', 4], ['Hasty', 2]], [['Calm', 2]], [['Lonely', 4]]],
    'EOTD'
);

const EOTDq3 = new Question(
    "You have to move a heavy suitcase. What will you do?",
    ["Carry it by myself.", "Ask someone to help.", "Make someone else do it!"],
    [[['Hardy', 4], ['Brave', 2]], [['Docile', 2]], [['Bold', 4], ['Sassy', 2]]],
    'EOTD'
);

const EOTDq4 = new Question(
    "If you don't know something, do you come clean and admit it?",
    ["Of course.", "That's not easy to admit!"],
    [[['Docile', 4], ['Bold', 2]], [['Timid', 4], ['Lonely', 2]]],
    'EOTD'
);

const EOTDq5 = new Question(
    "You're on a walk when you smell something delicious. What do you do?",
    ["Try to imagine what it is.", "Find out what it is!", "Think about how hungry I am..."],
    [[['Docile', 4]], [['Naive', 4], ['Rash', 2]], [['Impish', 4]]],
    'EOTD'
);

const EOTDq6 = new Question(
    "A fortune-teller says that you have a bad future ahead of you. How do you react?",
    ["Worry about it!", "Forget about it."],
    [[['Docile', 4], ['Timid', 2]], [['Jolly', 4], ['Relaxed', 2], ['Bold', 2]]],
    'EOTD'
);

const EOTDq7 = new Question(
    "You hear a rumor that might make you rich! What do you do?",
    ["Keep it all to my self.", "Share it with friends.", "Spread a different rumor!"],
    [[['Bold', 4], ['Timid', 2]], [['Docile', 4], ['Rash', 4]], [['Impish', 4]]],
    'EOTD'
);

const EOTDq8 = new Question(
    "How do you blow up a balloon?",
    ["As close to breaking as possible!", "Big... but not too big!", "I don't... It could pop!"],
    [[['Brave', 4], ['Impish', 4]], [['Quiet', 2]], [['Timid', 4], ['Docile', 2]]],
    'EOTD'
);

const EOTDq9 = new Question(
    "Do you state your opinion even when it's not what everyone else thinks?",
    ["Yes!", "No.", "It depends on the situation."],
    [[['Brave', 4], ['Bold', 2]], [['Lonely', 4], ['Timid', 2]], [['Calm', 2], ['Quirky', 2]]],
    'EOTD'
);

const EOTDq10 = new Question(
    "You want to reveal that you like someone a whole bunch! What do you do?",
    ["Show it a little by playing together.", "Make it obvious by...playing a prank!", "State it clearly for all to hear!", "Keep it to myself! It's too risky!"],
    [[['Jolly', 4], ['Calm', 2]], [['Lonely', 4], ['Naive', 2]], [['Brave', 4], ['Impish', 4], ['Bold', 2]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq11 = new Question(
    "You're on a stroll when a TV crew pounces on you for an interview. What do you do?",
    ["Run away! How embarrassing!", "Answer questions properly.", "Yuck it up! Woo-hoo! I'm on TV!"],
    [[['Timid', 4]], [['Brave', 4], ['Sassy', 4]], [['Naive', 4], ['Bold', 2]]],
    'EOTD'
);

const EOTDq12 = new Question(
    "You feel a burst of happiness! How about expressing it with a little dance?",
    ["Yes!", "No."],
    [[['Jolly', 4], ['Lonely', 2]], [['Calm', 2]]],
    'EOTD'
);

const EOTDq13 = new Question(
    "You see a parade coming down the street. What do you do?",
    ["Stay on the sidelines.", "Join the parade!", "Walk away."],
    [[['Calm', 2]], [['Jolly', 4], ['Naive', 4]], [['Sassy', 4], ['Lonely', 2]]],
    'EOTD'
);

const EOTDq14 = new Question(
    "Your friend tells a joke that's horribly corny! How do you react?",
    ["Roll around the floor laughing!", "Just let it go by...", "Slap my forehead and groan."],
    [[['Jolly', 4], ['Naive', 2]], [['Impish', 2], ['Docile', 2]], [['Brave', 2]]],
    'EOTD'
);

const EOTDq15 = new Question(
    "Can you strike up conversations with new people easily?",
    ["Yes!", "No."],
    [[['Jolly', 4], ['Bold', 4]], [['Timid', 2], ['Docile', 2]]],
    'EOTD'
);

const EOTDq16 = new Question(
    "Do you get injured a lot?",
    ["Yes!", "No."],
    [[['Impish', 4], ['Rash', 4]], [['Calm', 2]]],
    'EOTD'
);

const EOTDq17 = new Question(
    "You see a ball on the ground. What do you do?",
    ["Kick it!", "Throw it!", "Spiff it up, shiny and new!"],
    [[['Hasty', 2], ['Sassy', 2]], [['Impish', 4]], [['Lonely', 4]]],
    'EOTD'
);

const EOTDq18 = new Question(
    "What do you think of jungle exploration?",
    ["Sounds fun!", "Not interested."],
    [[['Impish', 4], ['Naive', 2]], [['Quirky', 4], ['Timid', 2]]],
    'EOTD'
);

const EOTDq19 = new Question(
    "You discover a secret passage in a basement. What do you do?",
    ["Go through it!", "Stay away from it."],
    [[['Impish', 4], ['Brave', 4], ['Rash', 2], ['Hasty', 4]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq20 = new Question(
    "Your friend takes a spectacular fall! What do you do?",
    ["Help my friend up!", "Laugh! It's too funny!"],
    [[['Brave', 4], ['Lonely', 2]], [['Naive', 4], ['Impish', 4], ['Rash', 2]]],
    'EOTD'
);

const EOTDq21 = new Question(
    "You're daydreaming... when your friend sprays you with water! What do you do?",
    ["Get mad!", "Get sad.", "Woo-hoo! Water fight!"],
    [[['Hasty', 4]], [['Lonely', 4]], [['Jolly', 4], ['Naive', 4], ['Impish', 4]]],
    'EOTD'
);

const EOTDq22 = new Question(
    "Have you ever wanted to communicate with aliens from another planet?",
    ["Yes!", "No."],
    [[['Naive', 4]], [['Quiet', 2]]],
    'EOTD'
);

const EOTDq23 = new Question(
    "Have you ever upset a friend when you were just kidding around?",
    ["Yes.", "No."],
    [[['Naive', 4], ['Impish', 2]], [['Calm', 4]]],
    'EOTD'
);

const EOTDq24 = new Question(
    "Hey, what's that? There's someone behind you! So... did you look just now?",
    ["Don't do that! It scared me!", "OK, I admit it. You tricked me.", "No way. I didn't fall for it.", "Huh? What?"],
    [[['Timid', 4]], [['Docile', 4]], [['Sassy', 4], ['Lonely', 4]], [['Relaxed', 4]]],
    'EOTD'
);

const EOTDq25 = new Question(
    "Someone who works at a store suggests an item that isn't quite what you're looking for. But you like this person. What do you do?",
    ["Say you don't want it.", "Say thanks... but say no.", "Cave in and buy it."],
    [[['Brave', 2], ['Quiet', 2]], [['Calm', 4], ['Lonely', 2]], [['Rash', 2], ['Timid', 2]]],
    'EOTD'
);

const EOTDq26 = new Question(
    "You run into a new person that you haven't talked to very much before. What do you do?",
    ["Make small talk.", "Say nothing!", "Make an excuse to get away!"],
    [[['Calm', 2]], [['Quirky', 2]], [['Timid', 4]]],
    'EOTD'
);

const EOTDq27 = new Question(
    "You think you hear someone call your name. But no one's around... so what was it?",
    ["Just my imagination.", "Someone fooling around.", "A ghost!"],
    [[['Relaxed', 4]], [['Naive', 4], ['Bold', 2]], [['Timid', 4]]],
    'EOTD'
);

const EOTDq28 = new Question(
    "Do you find yourself jumping to the wrong conclusion a lot of the time?",
    ["Yes.", "No."],
    [[['Hasty', 4], ['Rash', 4]], [['Docile', 2], ['Quiet', 2]]],
    'EOTD'
);

const EOTDq29 = new Question(
    "Do you change the channels often while watching TV?",
    ["Yes!", "No."],
    [[['Hasty', 4]], [['Calm', 2]]],
    'EOTD'
);

const EOTDq30 = new Question(
    "You like something at a great bargain! What do you do?",
    ["Buy it right away!", "Think about whether you need it.", "Demand an even bigger discount!"],
    [[['Hasty', 4]], [['Quiet', 2]], [['Bold', 4]]],
    'EOTD'
);

const EOTDq31 = new Question(
    "You're packing your classroom's snacks for a picnic when you get hungry. What do you do?",
    ["Eat just a tiny bit.", "Hold myself back, and pack it all up.", "What snacks? They're in my belly!"],
    [[['Hasty', 4]], [['Hardy', 4]], [['Rash', 4]]],
    'EOTD'
);

const EOTDq32 = new Question(
    "Are you a rebel at heart?",
    ["Totally!", "Of course not."],
    [[['Sassy', 4]], [['Calm', 2]]],
    'EOTD'
);

const EOTDq33 = new Question(
    "When walking in a group, do you tend to be the one at the front?",
    ["Of course!", "No."],
    [[['Sassy', 4], ['Lonely', 2]], [['Calm', 4], ['Quirky', 2]]],
    'EOTD'
);

const EOTDq34 = new Question(
    "Do you think that you might be a genius?",
    ["Certainly!", "Well, not really..."],
    [[['Sassy', 4], ['Naive', 2], ['Jolly', 2]], [['Hardy', 2]]],
    'EOTD'
);

const EOTDq35 = new Question(
    "Your friends seem to be having a fun chat out of earshot. What do you do?",
    ["Join them and chat along!", "Nothing... I'm not interested.", "Eavesdrop from a distance!"],
    [[['Naive', 4]], [['Lonely', 4]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq36 = new Question(
    "Do you like being the center of attention?",
    ["Yes.", "No."],
    [[['Lonely', 4], ['Sassy', 4]], [['Relaxed', 2]]],
    'EOTD'
);

const EOTDq37 = new Question(
    "You're told to wait in a big, empty room. What do you do?",
    ["Wait quietly.", "Search for something to do.", "Wander outside.", "Cradle my knees and sit in the corner!"],
    [[['Docile', 4]], [['Naive', 4]], [['Rash', 4]], [['Lonely', 4]]],
    'EOTD'
);

const EOTDq38 = new Question(
    "Do you have lots of stuff you bought, think it was all cool, but don't use anymore?",
    ["Yes.", "No."],
    [[['Quirky', 4], ['Rash', 2], ['Hasty', 2]], [['Quiet', 2]]],
    'EOTD'
);

const EOTDq39 = new Question(
    "Have you had any hobbies for a long time?",
    ["Yes.", "No."],
    [[['Hardy', 4]], [['Quirky', 4], ['Hasty', 2]]],
    'EOTD'
);

const EOTDq40 = new Question(
    "Do you often cancel plans to meet others at the last second?",
    ["Yes.", "No."],
    [[['Quirky', 4], ['Rash', 4]], [['Calm', 2]]],
    'EOTD'
);

const EOTDq41 = new Question(
    "Do you like to do things according to plan?",
    ["Of course!", "I'm not good at planning.", "Plans? Who needs plans?"],
    [[['Hardy', 4]], [['Quirky', 4], ['Rash', 2]], [['Relaxed', 4]]],
    'EOTD'
);

const EOTDq42 = new Question(
    "Do you think that lies are sometimes necessary?",
    ["Yes.", "No.", "I don't know."],
    [[['Quiet', 4], ['Bold', 4]], [['Brave', 4]], [['Docile', 4]]],
    'EOTD'
);

const EOTDq43 = new Question(
    "You spot a deserted ship on the high seas! What do you think the ship holds?",
    ["Precious loot!", "Ghosts!", "Nothing! The ship is merely a mirage!"],
    [[['Naive', 4], ['Jolly', 2]], [['Timid', 2]], [['Quiet', 4]]],
    'EOTD'
);

const EOTDq44 = new Question(
    "Do you think anything goes when it comes to winning?",
    ["Of course!", "No way!"],
    [[['Quiet', 4], ['Sassy', 4]], [['Brave', 4]]],
    'EOTD'
);

const EOTDq45 = new Question(
    "Your friend is crying right in front of you! What made that happen?",
    ["Someone bullied my friend!", "My friend fell down, no doubt!", "I wonder if it's my fault?"],
    [[['Hasty', 4]], [['Quiet', 4]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq46 = new Question(
    "Your friend says that your shirt is inside out. What do you do?",
    ["Get embarrassed!", "Laugh out loud!", "Say that it's the latest fashion!"],
    [[['Docile', 4]], [['Rash', 4]], [['Jolly', 4]]],
    'EOTD'
);

const EOTDq47 = new Question(
    "You muster your courage and go to a graveyard at night... and see a woman soaked to the skin just standing there! What do you do?",
    ["Run away at full speed!", "So what? It's just a lady.", "Drop down and play dead!"],
    [[['Timid', 2]], [['Naive', 4], ['Sassy', 2]], [['Rash', 4]]],
    'EOTD'
);

const EOTDq48 = new Question(
    "Do you often forget to lock the door when you go out?",
    ["Yes.", "No."],
    [[['Rash', 4], ['Bold', 2]], [['Quiet', 2]]],
    'EOTD'
);

const EOTDq49 = new Question(
    "Have you ever accidentally revealed a personal secret that someone shared with you?",
    ["Yes.", "No."],
    [[['Rash', 4], ['Lonely', 4]], [['Hardy', 2]]],
    'EOTD'
);

const EOTDq50 = new Question(
    "Would you feel comfortable stating your opinion to a very important person?",
    ["Of course!", "Not really."],
    [[['Sassy', 4], ['Brave', 4], ['Bold', 2]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq51 = new Question(
    "Are you a city person or a country person?",
    ["I like the city!", "I like the country!", "I like them both!"],
    [[['Lonely', 4], ['Sassy', 2]], [['Calm', 4]], [['Quirky', 4]]],
    'EOTD'
);

const EOTDq52 = new Question(
    "You're about to take the last cookie when your friend wolfs it down! What do you do?",
    ["Whatever, it's just a cookie.", "I unleash my cookie fury!", "I weep for my lost cookie."],
    [[['Calm', 4]], [['Relaxed', 4], ['Jolly', 4]], [['Lonely', 4]]],
    'EOTD'
);

const EOTDq53 = new Question(
    "You've spent forever stacking dominoes... One more and you're done... OH, NO! You've knocked them over! What do you do?",
    ["I'm too crushed to start again.", "I unleash my full fury!", "I set up the dominoes again..."],
    [[['Hardy', 4]], [['Docile', 4]], [['Calm', 4], ['Bold', 4]]],
    'EOTD'
);

const EOTDq54 = new Question(
    "Do you get bothered by noise and ruckus around you?",
    ["Yes!", "Not at all."],
    [[['Bold', 4], ['Relaxed', 2]], [['Lonely', 4], ['Hasty', 2]]],
    'EOTD'
);

const EOTDq55 = new Question(
    "You've just stuffed yourself with a good meal when a great dessert arrives. What do you do?",
    ["Eat it. Who cares if I'm stuffed?", "Turn it down. It's too fattening!", "Yum! I love dessert the most!"],
    [[['Hasty', 4], ['Rash', 2]], [['Hardy', 2]], [['Bold', 4], ['Jolly', 4], ['Relaxed', 2]]],
    'EOTD'
);

const EOTDq56 = new Question(
    "You have a really important test tomorrow! What do you do?",
    ["Study all night long.", "Wing it! I'm sure it will be fine!", "Test?! I think I have a fever..."],
    [[['Hardy', 4]], [['Relaxed', 4]], [['Naive', 4]]],
    'EOTD'
);

const EOTDq57 = new Question(
    "You're eating at a restaurant when you abruptly realize that everyone's gone! What do you do?",
    ["Alone?! I look for an employee!", "Who's worried? I keep eating.", "I swipe food from other tables!"],
    [[['Lonely', 4], ['Docile', 4]], [['Jolly', 4], ['Relaxed', 4]], [['Bold', 4]]],
    'EOTD'
);

const EOTDq58 = new Question(
    "Do you find yourself humming or singing often?",
    ["All the time!", "Never."],
    [[['Relaxed', 4], ['Jolly', 2]], [['Quiet', 2]]],
    'EOTD'
);

const EOTDq59 = new Question(
    "The phone's ringing! What do you do?",
    ["Answer right away!", "Wait a bit before answering.", "Ignore it and let it ring."],
    [[['Hasty', 4], ['Lonely', 4]], [['Quiet', 2]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq60 = new Question(
    "You're in class when you realize that you really have to go to the restroom! What do you do?",
    ["Ask for permission to leave.", "Sneak out.", "Hold on until class ends!"],
    [[['Brave', 4], ['Bold', 4]], [['Hasty', 2]], [['Timid', 2]]],
    'EOTD'
);

const EOTDq61 = new Question(
    "You're in a play with friends. What kind of role do you prefer?",
    ["Starring role!", "Supporting role.", "Just a bit part."],
    [[['Bold', 4]], [['Jolly', 4]], [['Quirky', 4]]],
    'EOTD'
);

const EOTDq62 = new Question(
    "You see a cake that is past its expiration date, but only by one day. What do you do?",
    ["Not a problem! Chow time!", "Think about it briefly, then decide.", "Get someone to try it first."],
    [[['Brave', 4], ['Relaxed', 2]], [['Timid', 2]], [['Bold', 4]]],
    'EOTD'
);

const EOTDq63 = new Question(
    "You attend a fine dinner at a friend's house. How do you behave?",
    ["Devour the food heartily!", "Enjoy the meal in polite moderation.", "Ask to take the leftovers home!"],
    [[['Impish', 4], ['Naive', 4]], [['Hardy', 2]], [['Bold', 4]]],
    'EOTD'
);
