// react functional component

import React, {useEffect} from "react";
import {goToDirectChat, sendTokenToChat} from "../../utils/chat";


export default function Chat({userToken}) {
    console.log(userToken,"is uer dtZ");
    // create a ref
    const myRef = React.createRef();

    useEffect(() => {
        if (myRef.current !== undefined && myRef.current !== null)
            setTimeout(() => {
                sendTokenToChat(myRef, userToken);
            }, 5000)
    }, [myRef])

    return (
        <div>
            <iframe
                className="w-96 h-96"
                ref={myRef}
                src="https://chat.collabamigo.xyz/channel/general/?layout=embedded"
                title="myframe"
            ></iframe>
            <button onClick={() => {
                goToDirectChat(myRef, "Gpg5TEjDzkEhxA7bfQ7FKXYyNSpwKmR8mQ")
            }}>Talk to Heemank</button>
        </div>
    );
}

