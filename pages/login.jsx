import React,{useState} from 'react'
import Progress from '../components/Progress'
import LoginCard from '../components/LogInCard'
import style from '../styles/LogInCard.module.scss'
function Login() {
  const [stepsDone,setStepsDone] = useState(1);
  return (
    <div className={style.container}>
      <div className="mb-10 w-[45rem]">
        <Progress steps={3} stepsDone={stepsDone}/>
      </div>
      <LoginCard setStepsDone={setStepsDone} stepsDone={stepsDone}/>
    </div>
  )
}

export default Login