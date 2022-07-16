import React from 'react'
import styles from '../styles/progress.module.scss'
function Progress({steps=3,stepsDone=0}) {
  var bars =[];
  var j = stepsDone;
  for(var i = 0; i < steps;i++){
    j<=0?(bars.push(<div className={styles.bar}></div>))
    :(bars.push(<div className={styles.barComplete}></div>))
    j--;
  }
  return (
    <div className="flex h-[0.8rem]">
      {bars}
    </div>
  )
}

export default Progress