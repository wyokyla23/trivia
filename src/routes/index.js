import { Route, Switch } from 'react-router-dom'
import Trivia from '../pages/Trivia'
import PlayerScore from '../pages/PlayerScore'

export default function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={Trivia} />
      <Route path="/player-score" component={PlayerScore} />
    </Switch>
  )
}