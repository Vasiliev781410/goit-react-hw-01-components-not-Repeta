const Stat = ({elem}) =>( 
    <li className="item">
        <span className="label">{elem.label}</span>
        <span className="percentage">{elem.percentage}</span>
    </li>
);   

export default Stat;
 