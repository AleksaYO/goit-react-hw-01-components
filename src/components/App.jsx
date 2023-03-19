import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../data/user.json';
import dataStat from '../data/data.json';
import transactions from '../data/transactions.json';
import { Transactions } from './Transactions/Transactions';
import friends from '../data/friends.json';
import { FriendsList } from '../components/FriendList/FriendList';

export const App = () => {
  return (
    <div className="box">
      <h1>Профиль</h1>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h1>Друзья</h1>
      <FriendsList friends={friends} />
      <h1>Статистика</h1>
      <Statistics title="Upload stats" stats={dataStat} />
      <h1>Транзакции</h1>
      <section>
        <Transactions transactions={transactions} />
      </section>
    </div>
  );
};
