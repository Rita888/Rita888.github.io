import {useState} from "react";

const SkillsAndEducations = () => {
  const [tab, setTab] = useState('Skills')

  // const allTabs = ['Skills', 'Education', 'Certifications']
  const tabInfo = {
    'Skills': ['Machine Learning', 'Mobile App Development', 'Electrical Designing'],
    'Education': ['University of California, Santa Cruz'],
    'Certifications': ['Google Professional Cloud Developer']
  }

  const renderRespectiveTabBody = () => { 
    const options = tabInfo[tab]
    return <ul>
      {options.map(info => <li key={info}>{info} </li>)}
    </ul>

  }
  
  return <div className="tabsContainer">
    <div className="tabsTitle">
      {Object.keys(tabInfo).map(tabName => (
        <div
          key={tabName}
          className='tab'
          onClick={() => setTab(tabName)}
        >
          {tabName}
          <div className={`borderBottomLine ${tab === tabName && 'active'}`} />
        </div>
      ))}
    </div>
    <ul className="tabBody">
      {renderRespectiveTabBody()}
    </ul>
  </div>;
};

export default SkillsAndEducations;
