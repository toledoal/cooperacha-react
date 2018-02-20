import React from 'react';
import Session from  '../components/Session';

const SessionList = (props) => {
    const sessions = props.sessions;
    const sessionItems = sessions.map((session, index) =>
    // Correct! Key should be specified inside the array.
    <Session key={session.key}
              value={session} store={props.store} users={props.users} signedUser={props.signedUser}/>

  );
    return(
        <div>
        <ul>
           {sessionItems}
        </ul>
        </div>
    )
  }

export default SessionList;