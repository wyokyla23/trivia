import React, { useState } from 'react'
import data from '../../data.json'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import shuffle from 'lodash/shuffle'

const useStyles = makeStyles({
  root: {},
  quizContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8f935c',
    color: 'white',
    height: '100vh'
  },
  header: {
    justifyContent: 'space-around',
    marginBottom: '25px',
    fontSize: '1.5rem'
  },
  question: {
    color: 'white',
    margin: '25px'
  },
  answers: {
    color: 'white',
  },
  button: {
    minWidth: '200px',
    margin: '10px',
    border: 'solid #504d31 ',
    '&:hover': {
      backgroundColor: '#8b134d',
    },
  },
  list: {
    listStyle: 'none',
  },
  response: {
    marginTop: '35px',
    fontSize: '2rem'
  },
  questionSection: {},
  answerSection: {
    display: 'flex',
    justifyContent: 'center',
  },
})

export default function Trivia(props) {
  const [score, setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [questionCorrect, setQuestionCorrect] = useState(null)
  const classes = useStyles()

  const correctAnswer = data[currentQuestion].correct

  const isAnswerCorrect = (answer) => {
    return correctAnswer === answer
  }

  console.log(questionCorrect)
  const handleAnswer = (answer) => {

    const correct = isAnswerCorrect(answer)
    if (correct) {
      setScore(prev => prev + 1)
    }
    setQuestionCorrect(correct)
    setTimeout(
      () => {
        setQuestionCorrect(null)
        setCurrentQuestion(
          (prev) => prev < data.length
            ? prev + 1
            : 0
        )
      },
      2500
    )
  }

  return (
    <div>
      <Grid
        container
        className={classes.quizContainer}>
        <Grid
          container
          className={classes.header}>
          <Grid item>
            Question: {currentQuestion + 1} / {data.length}
          </Grid>
          <Grid item>Score: {score}</Grid>
        </Grid>
        <Card
          style={{ backgroundColor: '#6c6f45' }}
          elevation={24}
        >
          <Grid
            item
            className={classes.questionSection}>
            <Typography
              className={classes.question}
              variant='h3'>
              {data[currentQuestion].question}
            </Typography>
          </Grid>
          <Grid
            container
            className={classes.answerSection}
          >
            <ul className={classes.list}>
              {shuffle(data[currentQuestion]
                .incorrect.concat(data[currentQuestion].correct))
                .map((answer) => {
                  return (
                    <li key={answer}>
                      <Button
                        disabled={questionCorrect !== null}
                        className={classes.button}
                        onClick={() => handleAnswer(answer)}>
                        <Typography
                          className={classes.answers}>
                          {answer}
                        </Typography>
                      </Button>
                    </li>
                  )
                }
                )}
            </ul>
          </Grid>
        </Card>
        <Typography className={classes.response}>
          {questionCorrect !== null ? (
            questionCorrect === true
              ? "Correct! You're Amazing!"
              : `Ooh, sorry. The correct answer is: ${correctAnswer}`
          ) : ' '}
        </Typography>
      </Grid>
    </div >
  )
}
