import React from 'react'
import Button from './Button'

function AgreementPortal({AmountPayable='$0'}) {

    const reImberseHandler = () => {}
    const validateCheckpointHandler = () => {}
    const depositEthHandler = () => {}
    const getCurrentCheck = () => {}

    const currentCheck = {
        title: 'Checkpoint',
        color: '#85B9E8'
    }


    return (
        <div className="p-5 bg-accent relative h-[30rem] w-[25rem] border-[0.5rem] border-[#B8DED3] rounded-md flex flex-col items-center justify-around ">
            <div className="relative">
                <Button Content="DepositEth"
                    onClick={depositEthHandler}/>
                <input type="text"
                    value={AmountPayable}
                    className="border-2 rounded-md absolute right-5 w-[10rem] text-center"/>
                <h2 className="text-textSecondary font-[600] font-mada my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            <div className="relative">
                <Button Content="Validate Checkpoint"
                    onClick={validateCheckpointHandler}/>
                <h2 className="text-textSecondary font-[600] font-mada my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
                <div className="absolute right-5 top-0 rounded-md my-2 px-2 flex justify-between items-center"
                    style={{backgroundColor:currentCheck.color,color:"#FFFFFF"}}>{currentCheck.title}</div>
            </div>
            <div>
                <Button Color="#008A61"
                    Content="Reimberse"
                    onClick={reImberseHandler}/>
                <h2 className="text-textSecondary font-[600] font-mada my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
        </div>
    )
}

export default AgreementPortal