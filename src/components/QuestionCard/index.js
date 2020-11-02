import React from 'react';
import propTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
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
    padding: 0,
    textAlign: 'center',
  },
  questionSection: {},
  answerSection: {
    display: 'flex',
    justifyContent: 'center',
  },
})

const PropTypes = {
  question: propTypes.string,
  answers: propTypes.arrayOf(propTypes.string),
  handleAnswer: propTypes.func,
  questionMessage: propTypes.bool,
}

function QuestionCard({ question, answers, questionMessage, handleAnswer }) {
  const classes = useStyles()
  return (
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
          {question}
        </Typography>
      </Grid>
      <Grid
        container
        className={classes.answerSection}
      >
        <ul className={classes.list}>
          {answers.map((answer) => {
            return (
              <li key={answer}>
                <Button
                  disabled={questionMessage !== null}
                  className={classes.button}
                  onClick={() => handleAnswer(answer)}>
                  <Typography
                    className={classes.answers}>
                    {answer}
                  </Typography>
                </Button>
              </li>
            )
          })}
        </ul>
      </Grid>
    </Card>
  )
}
QuestionCard.propTypes = PropTypes;

export default QuestionCard;
