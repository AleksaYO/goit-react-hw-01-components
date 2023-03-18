import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import cssStat from '../components/Statistics/statistics.module.css';
import user from '../components/data/user.json';
import dataStat from './data/data.json';
import transactions from './data/transactions.json';
import { Transactions } from './Transactions/Transactions';

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
      <div className="friends-box">
        <h1>Друзья</h1>
        <FriendsList />
      </div>
      <h1>Статистика</h1>
      <section className={cssStat.statistics}>
        <h2 className={cssStat.title}>Upload stats</h2>

        <ul className={cssStat['stat-list']}>
          <Statistics stats={dataStat} />
        </ul>
      </section>
      <h1>Транзакции</h1>
      <section>
        <Transactions transactions={transactions} />
      </section>
    </div>
  );
};
