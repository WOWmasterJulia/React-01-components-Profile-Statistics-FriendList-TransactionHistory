// import React from "react";
import user from './Profile/Profile.user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './FriendList/Friends.json';
import { FriendList } from './FriendList/FriendList';

export const App = () => {
   return (
     <div>
           <Profile
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               //  stats={user.stats}
               followers={user.stats.followers}
               views={user.stats.views}
               likes={user.stats.likes}
           />
           <Statistics title={data.title} stats={data} />
           <FriendList friends={friends} />
    </div>
);
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };