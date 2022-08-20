import React,{useState} from 'react'

function Terms() {
    const[bounty,setBounty] = useState('')
    const[stake,setStake] = useState('')


    return (
        <div className="bg-[white] h-[100%] flex flex-col justify-around">
            <div className="w-[100%] flex justify-between">
                <p>Client’s Bounty</p>
                <input value={bounty}
                    onChange={e => setBounty(e.target.value)}
                    placeholder="$0"
                    className="border-2 rounded-md" />
            </div>
            <div className="w-[100%] flex justify-between">
                <p>Freelancer’s Stake</p>
                <input value={stake}
                    onChange={e => setStake(e.target.value)}
                    placeholder="$0"
                    className="border-2 rounded-md"/>
            </div>
            <div className="w-[100%] flex justify-between">
                <p>Platform fees</p>
                <input className="border-2 rounded-md"
                    placeholder="$10000"/>
            </div>
        </div>
    )
}

export default Terms