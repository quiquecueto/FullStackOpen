import { useState } from 'react'

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

const StatisticLine = (props) => <tr><td>{props.textFirst}</td><td>{props.value}{props.textLast}</td></tr>

const Statistics = (props) => {
  if(props.total === 0) return (<div>No feedback given</div>)
  return(
    <table>
      <tbody>
        <StatisticLine textFirst='good ' value={props.good}/>
        <StatisticLine textFirst='neutral ' value={props.neutral}/>
        <StatisticLine textFirst='bad ' value={props.bad}/>
        <StatisticLine textFirst='all ' value={props.total}/>
        <StatisticLine textFirst='average ' value={props.average}/>
        <StatisticLine textFirst='positive ' value = {props.positive} textLast=' %'/>
      </tbody>
    </table>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  const increaseGood = newValue => {
    console.log('Good')
    setGood(newValue)
    setTotal(total + 1)
  }

  const increaseNeutral = newValue => {
    console.log('Neutral')
    setNeutral(newValue)
    setTotal(total + 1)
  }

  const increaseBad = newValue => {
    console.log('Bad')
    setBad(newValue)
    setTotal(total + 1)
  }

  const calculateAverage = () => {
    if(total === 0) return 0
    return (good - bad)/(total)
  }

  const calculatePositive = () => {
    if (good === 0) return 0
    return good/(total)*100
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={()=>{increaseGood(good + 1)}} text='Good'/>
      <Button handleClick={()=>{increaseNeutral(neutral + 1)}} text='Neutral'/>
      <Button handleClick={()=>{increaseBad(bad + 1)}} text='Bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={calculateAverage()} positive={calculatePositive()}/>
    </div>
  )
}

export default App