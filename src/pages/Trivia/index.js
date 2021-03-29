import React, { useState } from 'react'
// import propTypes from 'prop-types'
import data from '../../data.json'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import shuffle from 'lodash/shuffle'
import QuestionCard from '../../components/QuestionCard'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#7F0909',
    height: '100vh',
  },
  quizContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '100vh'
  },
  header: {
    justifyContent: 'space-around',
    marginBottom: '25px',
    fontSize: '1.5rem'
  },
  response: {
    marginTop: '35px',
    fontSize: '2rem'
  }
})

// const PropTypes = {
//   history: propTypes.object
// }

export default function Trivia({ history }) {
  const [score, setScore] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const [currentQuestion, setCurrentQuestion] = useState(
    data[questionIndex].question
  )
  const [currentAnswers, setCurrentAnswers] = useState(
    data[questionIndex].incorrect.concat(data[questionIndex].correct)
  )

  const [questionMessage, setQuestionMessage] = useState(null)
  const classes = useStyles()

  const correctAnswer = data[questionIndex].correct

  const isAnswerCorrect = (answer) => {
    return correctAnswer === answer
  }

  const handleAnswer = (answer) => {

    const correct = isAnswerCorrect(answer)
    if (correct) {
      setScore(prev => prev + 1)
    }
    setQuestionMessage(correct)
    setTimeout(
      () => {
        if (questionIndex === data.length - 1) {
          history.push(
            '/player-score',
            {
              score: correct
                ? score + 1
                : score
            }
          )
        } else {
          setQuestionMessage(null)
          setQuestionIndex(
            (prev) => prev < data.length
              ? prev + 1
              : 0
          )
          const { question, incorrect, correct } = data[questionIndex + 1];
          setCurrentQuestion(question)
          setCurrentAnswers(incorrect.concat(correct))
        }
      },
      3000
    )
  }

  return (
    <div className={classes.root}>
      <Container
        className={classes.quizContainer}>
        <Grid
          container
          className={classes.header}>
          <Grid item>
            Question: {questionIndex + 1} / {data.length}
          </Grid>
          <Grid item>Score: {score}</Grid>
        </Grid>
        <QuestionCard
          question={currentQuestion}
          answers={shuffle(currentAnswers)}
          handleAnswer={handleAnswer}
          questionMessage={questionMessage}
        />
        <Typography className={classes.response}>
          {questionMessage !== null ? (
            questionMessage === true
              ? "Correct! You're Amazing!"
              : `Ooh, sorry. The correct answer is: ${correctAnswer}`
          ) : ' '}
        </Typography>
      </Container>
    </div >
  )
}