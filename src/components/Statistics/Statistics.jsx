import cssStat from './statistics.module.css';
import PropTypes from 'prop-types';

export function Statistics({ stats, title }) {
  return (
    <section className={cssStat.statistics}>
      {title && <h2 className={cssStat.title}>{title}</h2>}

      <ul className={cssStat['stat-list']}>
        {stats.map(item => {
          return (
            <li key={item.id} className={cssStat.item}>
              <span className={cssStat.label}>{item.label}</span>
              <span className={cssStat.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
