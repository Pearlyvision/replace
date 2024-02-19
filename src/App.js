import React, { useState } from 'react';
import ProgrammingList from './Components/programmingList'; // Assuming you have a component named ProgrammingList
import ProgrammingParagraph from './Components/programmingParagraph'; // Assuming you have a component named ProgrammingParagraph

function App() {
  const [programming, setProgramming] = useState("String");

  const chooseProgrammingLanguage = (concept) =>{
    setProgramming(concept);    
  }

  return (
    <div className="App">
<header className="App-header">
        <ProgrammingList concepts={programmingInfo} onSelect={chooseProgrammingLanguage} />
        <ProgrammingParagraph concept={programming} /> 
      </header>
    </div>
  );
}

export default App;
nfg-pfem-mtp