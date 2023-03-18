import cssStat from "./statistics.module.css";
import PropTypes from "prop-types";

export function Statistics({ stats }) {
  return stats.map((item) => {
    return (
      <li key={item.id} className={cssStat.item}>
        <span className={cssStat.label}>{item.label}</span>
        <span className={cssStat.percentage}>{item.percentage}%</span>
      </li>
    );
  });
  // <section className="statistics">
  //   <h2 className="title">Upload stats</h2>

  //   <ul className="stat-list"></ul>
  // </section>
  // );
}

Statistics.propTypes = {
  stats: PropTypes.array.isRequired,
};

/* <li style={styles} className="item first">
  <span className="label">{stats[0].label}</span>
  <span className="percentage">{stats[0].percentage}</span>
</li>; */
// <li style={styles} className="item">
//   <span className="label">{stats[1].label}</span>
//   <span className="percentage">{stats[1].percentage}</span>
// </li>
// <li style={styles} className="item">
//   <span className="label">{stats[2].label}</span>
//   <span className="percentage">{stats[2].percentage}</span>
// </li>
// <li style={styles} className="item last">
//   <span className="label">{stats[3].label}</span>
//   <span className="percentage">{stats[3].percentage}</span>
// </li>
