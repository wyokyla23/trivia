import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    backgroundColor: '#993A3A',
    height: '100vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  text: {
    color: 'white',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '25px',
    fontSize: '1.5rem'
  },
  answers: {
    color: 'white'
  },
  button: {
    minWidth: '200px',
    margin: '10px',
    border: 'solid white',
  },
})


function PlayerScore({ history, match }) {
  const score = history.location.state?.score || 0;
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Container
        className={classes.container}
      >
        <Grid container className={classes.header}>
          <Typography
            className={classes.text}
            variant='h3'
          >
            Thanks for taking the quiz
            </Typography>
          <Typography
            className={classes.text}
            variant='h3'
          >
            You scored {score} out of 21
            </Typography>

        </Grid>
        <Button
          size="large"
          className={classes.button}
          onClick={() => history.push('/')}>
          <Typography className={classes.answers}>
            Play Again
              </Typography>
        </Button>
      </Container>
    </div>
  )
}

export default PlayerScore
