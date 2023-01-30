import Stat from "./Stat.jsx";

const Statistics = ({title = null,stats,}) =>(
    <section className="statistics">
        {title && <h2 className="title">{title}</h2>}
        <ul className="stat-list">
            {stats.map(stat => (<Stat key={stat.id} elem={stat}/>))}
       </ul>
    </section>   
  );                     

export default Statistics;
  