import React,{useState} from 'react'
import NewProjectCard from '../components/NewProjectCard'
import Progress from '../components/Progress'
import Button from '../components/Button'

function CreateProject() {
  const [stepsDone,setStepsDone] = useState(1);

  const onclickHandler = () => {
    setStepsDone(preVal=>preVal+1);
    console.log(stepsDone)
  }
  
  return (
    <div className="flex flex-col items-center">
      <NewProjectCard/>
      <div className="mt-10 w-[60%] flex items-center justify-end">
        <Progress steps={2} stepsDone={stepsDone} />
        <Button Content={'Next'} onClick={onclickHandler} Link={'null'}/>
      </div>
    </div>
  )
}

export default CreateProject