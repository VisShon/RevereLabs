import React from 'react'

function Progress({steps=3,stepsDone=0}) {
  var bars =[];
  var j = stepsDone;
  for(var i = 0; i < steps;i++){
    j<=0?(bars.push(<div className="bg-[#96CDBD] rounded-lg w-[10rem] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] mr-5"></div>))
    :(bars.push(<div className="bg-secondary rounded-lg w-[10rem] drop-shadow-[5px_5px_0px_rgba(0,0,0,1)] mr-5"></div>))
    j--;
  }
  return (
    <div className="flex h-[0.8rem]">
      {bars}
    </div>
  )
}

export default Progress