import Questions from "./Questions";
import Button from "./Button";
import Timer from "./Timer";
import { useState, useEffect, useRef } from "react";
import TableRow from "./TableRow";

let QA = [
  [`In California, you can’t legally buy a mousetrap without having what`, `A hunting license`],
  [`It is illegal to do what in the French vineyards`, `Land a flying saucer`],
  [`Coprastastaphobia is the fear of what`, `Constipation`],
  [`In Texas, it’s illegal to swear in front of what`, `A corpse`],
  [`In Georgia, it’s illegal to eat what with a fork`, `Fried chicken`],
  [`The first hockey pucks used in early outdoor hockey games were made of what`, `Frozen cow dung`],
  [`In Minnesota, it is illegal to tease what type of animal`, `Skunks`],
  [`How many teeth does an aardvark have`, `None`],
  [`What was Marilyn Monroe’s natural hair color`, `Red`],
  [`Who sang about being an “eggman” and a “walrus”`, `The Beatles`],
  [`Which Tasmanian marsupial is known for its temper`, `Tasmanian Devil`],
  [`Where on the human body is the zygomatic bone found`, `Facial cheek`],
  [`It was illegal for women to wear what in 19th century Florence`, `Buttons`],
  [`Who claimed he could “drive away the devil with a fart”`, `Martin Luther`],
  [`In St. Louis, Missouri, it’s illegal for a firefighter to rescue who`, `Undressed women (even if they are wearing a nightgown)`],
  [`What was banned in Indonesia for “stimulating passion”`, `Hula hoops`],
  [`What was Hugh Hefner’s jet plane named`, `Big Bunny`],
  [`In June in Wyoming, it is illegal to take a picture of what`, `A rabbit`],
  [`What Benedictine monk invented champagne`, `Dom Pierre Pérignon`],
  [`What flavor is Cointreau`, `Orange`],
  [`In football, who was nicknamed ‘The Divine Ponytail’`, `Roberto Baggio`],
  [`What do you call a group of unicorns`, `A blessing`],
  [`Where were the fortune cookies invented`, `San Francisco`],
  [`What is banned in public places in Florida after 6 pm on a Thursday`, `Farting`],
  [`In Swedish, what is “entrance” and “driveway,” respectively`, `“Infart” and “Uppfart.”`],
  [`When held to ultraviolet light, what animal’s urine glows in the dark`, `Cat`],
  [`What animal cannot stick out its tongue`, `Crocodiles`],
  [`A kangaroo can’t hop if what`, `If something lifts its tail off the ground`],
  [`With how many bricks is the Empire State Building made of`, `10 million`],
  [`According to Russian law, a homeless person must be where after 10 pm`, `At home`],
  [`How many years old the oldest piece of chewing gum`, `9,000 years`],
  [`On Sunday, what is illegal to sell in Columbus, Ohio`, `Cornflakes`],
  [`What was Walt Disney afraid of`, `Mice`],
  [`The police officers of the Washington officers to get a half-hour class about what`, `Sitting down`],
  [`On average, what is the thing that Americans do 22 times in a day`, `Open the fridge`],
  [`What is illegal to eat with a cherry pie in Kansas`, `Ice cream`],
  [`What ailment kills the most fruit flies`, `Constipation`],
  [`A crossbreed between a donkey and the zebra is known as`, `Zonkey`],
  [`At which place you can find the Andamooka`, `South Australia`],
  [`What kind of an animal is known as a horned toad`, `A lizard`],
  [`Where do kiwi fruits originally come from`, `China`],
  [`Who is known as Gambrinus`, `Someone who is full of beer`],
  [`What kind of animal is a firefly`, `Beetle`],
  [`What was the first fruit that was eaten on the moon`, `Peach`],
  [`What is strange about the reproductive system of male snakes`, `They have 2 penises`],
  [`What is the fertilized egg of a duck called`, `Balut`],
  [`What is the fear of long words known as`, `Hippopotomostrosesquippedaliophobia`],
  [`What was the ice cream cone invented for`, `To hold flowers`],
  [`What does the term ‘piano’ actually mean`, `“To be played softly.”`],
  [`How do you tell the age of a horse`, `Its teeth`],
  [`What are people who love eating ice called`, `Pagophagiacs`],
  [`Who composed the music for Sonic the Hedgehog 3`, `Michael Jackson`],
  [`What is a baby goat called`, `A kid`],
  [`What country won the Eurovision Song Contest 2017`, `Portugal`],
  [`What is it called when a bottle of champagne is open with a sword`, `Sabering`],
  [`What is Bob Dylan’s real name`, `Robert Zimmerman`],
  [`What color is the ‘black box’ in an airplane`, `Orange`],
  [`Who said, “Champagne should be dry, cold, and free.”`, `Winston Churchill`],
  [`Biscuit is roughly translated to mean what`, `“Twice cooked.”`],
  [`In what country would one compete in a “wife carry race”`, `Finland`],
  [`What sport has been played on the moon`, `Golf`],
  [`From which language did the word “Ketchup” come`, `Chinese`],
  [`What kind of animal is a bustard`, `A bird`],
  [`What is the name of the vehicle that Scooby-Doo and his friends travel in`, `The Mystery Machine`],
  [`What’s the best known artificial international language`, `Esperanto`],
  [`What is someone who shoes horses`, `A farrier`],
  [`How many noses does a slug have`, `Four`],
  [`Which dinosaur had 15 horns`, `Kosmoceratops`],
  [`What is the world record for number of hot dogs eaten in one sitting`, `74`],
  [`What is the highest-grossing holiday movie of all time`, `Home Alone`],
  [` What is a haboob`, `A type of sandstorm`],
  [`Who is the oldest man to win People Magazine’s sexiest man alive`, `Sean Connery`],
  [`What U.S. state’s constitution is the longest in the world`, `Alabama`],
  [`What was the first patented service uniform in the United States`, `Playboy Bunny`],
  [`What two cities represent letters in the phonetic alphabet`, `Lima and Quebec`],
  [`What were clocks missing before 1577`, `Minute hands`],
  [` What is the number one seller at Walmart`, `Bananas`],
  [`What language has the most words`, `English`],
  [`What is the only number spelled out in English with the same number of letters as its value`, `Four`],
  [`What is the common name for enuresis`, `Bedwetting`],
  [`Where was the world’s first speeding ticket issued`, `England`],
  [`What is the longest English word with only one vowel`, `Strengths`],
  [`Unless one is a magician, what is illegal to own as a pet in Queensland, Australia`, `A rabbit`],
  [`What is the main ingredient of Bombay Duck`, `Fish`],
  [`How long is New Zealand’s Ninety Mile Beach`, `55 miles`],
  [`In what month does Russia celebrate the October Revolution`, `November`],
  [`Who lives in a trash can on ‘Sesame Street’`, `Oscar`],
  [`Who said, “I’m the president of the United States, and I’m not going to eat any more broccoli”`, `George Bush`],
  [`In Minnesota, it is illegal to be what in bed`, `Naked`],
  [`What can’t a cheetah do that a tiger and a puma can do`, ` Retract its claws`],
  [`Cockroaches do what every fifteen minutes`, `Fart`],
  [`In Denmark, what is a Svangerskabsforebyggendemiddel`, `A condom`],
  [`If one is wearing a swimsuit in Florida in public, what is illegal for one to do`, `Sing`],
  [`In Alaska, it’s legal to shoot bears, but illegal to do what`, `Wake one up`],
  [`What did J. Edgar Hoover not want people walking on`, `His shadow`],
  [`When people are frightened, their ears produce more of what`, `Earwax`],
  [`What does the word Matrix mean in the Bible`, `Womb`],
  [`The space between your nostrils is called a what`, `A columella`],
  [`What is Podobromhidrosis`, `Bad smelling odor from sweat`],
];

function UI() {
  let [questionIdx, setRandomQuestionIdx] = useState(null);
  let [currentSelected, setSelected] = useState(null);
  let [currentScore, setNewScore] = useState(0);
  let [questionObj, setQuestionObj] = useState(undefined);
  let [clickedOrNot, setClickedState] = useState(false);
  let [currentTimer, setTimer] = useState(5);
  let [questionCount, setQuestionCount] = useState(1);
  let [qaStorage, setQAStorage] = useState({});

  let timer = useRef();
  let timeOut = useRef();

  useEffect(() => {
    let randomIdx = Math.floor(Math.random() * 100);

    setQuestionObj({
      question: QA[randomIdx][0],
      options: [
        { text: null, isCorrect: false },
        { text: null, isCorrect: false },
        { text: null, isCorrect: false },
        { text: null, isCorrect: false },
      ],
    });

    setRandomQuestionIdx(randomIdx);
    populateTheObj(randomIdx);
  }, []);

  useEffect(() => {
    if (questionCount < 10) {
      // eslint-disable-next-line
      timer.current = setInterval(() => {
        if (currentTimer > 0) setTimer((currentTimer) => currentTimer - 0.1);
      }, 100);
      // eslint-disable-next-line
      timeOut.current = setTimeout(() => {
        clearInterval(timer);
        setClickedState(true);
        getRandomQuestion();
        setQAStorage({ ...qaStorage, [questionCount]: [false, "Unanswered", QA[questionIdx][1]] });
      }, 5095);
    }

    return () => {
      clearInterval(timer.current);
      clearTimeout(timeOut.current);
      setTimer(5);
      setClickedState(() => false);
    };
  }, [questionIdx]);

  useEffect(() => {
    localStorage.setItem("qaStorage", JSON.stringify(qaStorage));
  }, [qaStorage]);

  function populateTheObj(correctIndex) {
    let newObj = {
      question: QA[correctIndex][0],
      options: [
        { text: null, isCorrect: false },
        { text: null, isCorrect: false },
        { text: null, isCorrect: false },
        { text: null, isCorrect: false },
      ],
    };

    let correctDesignation = Math.floor(Math.random() * 4);
    let randomIndexes = [];
    while (randomIndexes.length < 3) {
      let differentIndex = Math.floor(Math.random() * QA.length);
      if (differentIndex !== correctIndex && !randomIndexes.includes(differentIndex)) randomIndexes.push(differentIndex);
    }

    newObj.options.forEach((ele, idx) => {
      if (idx === correctDesignation) {
        newObj.options[idx].text = QA[correctIndex][1];
        newObj.options[idx].isCorrect = true;
      } else {
        newObj.options[idx].text = QA[randomIndexes.splice(0, 1)][1];
        newObj.options[idx].isCorrect = false;
      }
    });

    setQuestionObj(() => newObj);
  }

  function getRandomQuestion() {
    setQuestionCount((questionCount) => questionCount + 1);
    if (questionCount < 10) {
      let randomIdx = Math.floor(Math.random() * 100);
      setRandomQuestionIdx(randomIdx);
      populateTheObj(randomIdx);
    } else {
      console.log("done", questionCount);
    }
  }

  let updateUserSelection = (i) => {
    if (!clickedOrNot) {
      clearInterval(timer.current);
      clearTimeout(timeOut.current);

      setClickedState(true);
      setSelected(i);
      if (questionObj.options[i].isCorrect && currentTimer > 0) {
        setNewScore((currentScore) => currentScore + 1);
        setQAStorage({ ...qaStorage, [questionCount]: [true, questionObj.options[i].text, QA[questionIdx][1]] });
      } else if (!questionObj.options[i].isCorrect && currentTimer > 0) {
        setQAStorage({ ...qaStorage, [questionCount]: [false, questionObj.options[i].text, QA[questionIdx][1]] });
      }

      setTimeout(() => {
        setSelected(() => null);
        getRandomQuestion();
      }, 1000);
    }
  };

  return (
    <div id="container">
      {questionIdx !== null && questionObj !== undefined && questionCount <= 10 ? (
        <>
          <div id="questioner">
            <div id="score">Score: {currentScore}</div>
            <Questions text={questionObj.question} />
          </div>
          <div id="questionee">
            <Button bgColor={currentSelected === 0 ? (questionObj.options[0].isCorrect ? "green" : "red") : null} handleClick={updateUserSelection} idx={0} text={questionObj.options[0].text} clickedState={clickedOrNot ? "none" : ""} completed={currentSelected === 0 ? (questionObj.options[0].isCorrect ? true : false) : null} />
            <Button bgColor={currentSelected === 1 ? (questionObj.options[1].isCorrect ? "green" : "red") : null} handleClick={updateUserSelection} idx={1} text={questionObj.options[1].text} clickedState={clickedOrNot ? "none" : ""} completed={currentSelected === 1 ? (questionObj.options[1].isCorrect ? true : false) : null} />
            <Button bgColor={currentSelected === 2 ? (questionObj.options[2].isCorrect ? "green" : "red") : null} handleClick={updateUserSelection} idx={2} text={questionObj.options[2].text} clickedState={clickedOrNot ? "none" : ""} completed={currentSelected === 2 ? (questionObj.options[2].isCorrect ? true : false) : null} />
            <Button bgColor={currentSelected === 3 ? (questionObj.options[3].isCorrect ? "green" : "red") : null} handleClick={updateUserSelection} idx={3} text={questionObj.options[3].text} clickedState={clickedOrNot ? "none" : ""} completed={currentSelected === 3 ? (questionObj.options[3].isCorrect ? true : false) : null} />
          </div>
          <Timer width={currentTimer} />
        </>
      ) : questionCount >= 10 ? (
        <div id="tableContainer">
          <table>
            <thead>
              <tr className="tableRow">
                <th className="questionNum">Question No.</th>
                <th className="choice">Choice</th>
                <th className="correctAns">Correct Answer</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(qaStorage).map((ele, idx) => {
                return <TableRow questionNum={idx + 1} choice={ele[1]} choiceColor={ele[0] ? "green" : "red"} correctChoice={ele[2]} />;
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default UI;
