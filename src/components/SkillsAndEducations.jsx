import {useState} from "react";

const SkillsAndEducations = () => {
  const [tab, setTab] = useState('Services')

  // const allTabs = ['Services', 'Education', 'Certifications']
  const tabInfo = {
    'Services': 'Ecological Consultancy, Biodiversity Management, Species Monitoring, Ecological Surveys, IoT Monitoring Development, GIS Mapping, Sustainable Design Consulting, Clerk of Works Services, Environmental Compliance Reports, Project Management',
    'Education': 'MSc Connected Environments, University College London, 2023, Post-graduate Diploma in Landscape Ecology with GIS, University of Greenwich, 2015, BSc Landscape Management (Land Use), University of Greenwich, 2013',
    'Certifications': 'QGIS and LandAPP, UAV operator (A2 CofC certified and insured), CSCS card, valid until June 2024, Natural England Level 1 bat and great crested newt holder, Outdoor First Aid Trained'
  };
  
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
