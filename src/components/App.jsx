// import React from "react";
import user from './Profile/Profile.user';
import { Profile } from './Profile/Profile';

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