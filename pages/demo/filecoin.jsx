// react functional component

import React from "react";
import {file_coin_upload} from "../../utils/filecoin";

export default function Chat() {

  return (
    <div>
      <button onClick={() => {
        file_coin_upload({
            "name": "test",
            "description": "test",
            "bounty": 100,
            "deadline": "2021-09-30",
        });
      }}>Upload</button>
    </div>
  );
}

