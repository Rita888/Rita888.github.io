import {useState} from "react";

const SkillsAndEducations = () => {
  const [tab, setTab] = useState('Skills')

  // const allTabs = ['Skills', 'Educations', 'Certifications']
  const tabInfo = {
    'Skills': ['Ecology', 'Mobile App Development', 'Electrical Designing'],
    'Educations': ['University of California, Santa Cruz'],
    'Professional Memberships': ['Landscape Institute'] ['Institute of Environment']
  }

  const renderRespectiveTabBody = () => { 
    const options = tabInfo[tab]
    return <ul>
      {options.map(info => <li key={info}>{info} hello</li>)}
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
