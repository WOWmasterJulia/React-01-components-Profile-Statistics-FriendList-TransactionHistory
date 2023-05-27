import user from './Profile/Profile.user.json';
import { Profile } from './Profile/Profile';

import data from './Statistics/data.json';
import { Statistics } from './Statistics/Statistics';

import friends from './FriendList/Friends.json';
import { FriendList } from './FriendList/FriendList';

import transactions from './Transactionhistory/TransactionHis.json'; 
import { TransactionHistory } from './Transactionhistory/TransactionHistory';


export const App = () => {
   return (
     <>
           <Profile
               username={user.username}
               tag={user.tag}
               location={user.location}
               avatar={user.avatar}
               stats={user.stats}
            //    followers={user.stats.followers}
            //    views={user.stats.views}
            //    likes={user.stats.likes}
           />
           <Statistics title={data.title} stats={data} />
           <FriendList friends={friends} />
            <TransactionHistory items={transactions} />
    </>
);
};