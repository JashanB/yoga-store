import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const divStyle = {
    padding: '177.7778% 5px 5px 5px',
    background: 'rgba(0,0,0,0.03)',
    // border-radius: '8px'
  }
  return (
    // <Router>
    // <div>
    //   <h1 className="yoga-logo">Yoga-Me</h1>
    //   {/* <div className="App">
    //     <Switch>
    //       <Route path='/users/:user_id/places/:id' render={(props) => <Place {...props} />} />
    //       <Route path='/users/:id' render={(props) => <Search {...props} />} />
    //     </Switch>
    //   </div> */}
      
    // {/* </Router> */}
    // </div>
    <div className="App">
    <div
    className="canva-embed"
    data-design-id="DAD9IlS-dB4"
    data-height-ratio="1.7778"
    style={divStyle}
   ></div>
   {/* <script async src="https:&#x2F;&#x2F;sdk.canva.com&#x2F;v1&#x2F;embed.js"></script> */}
   <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAD9IlS-dB4&#x2F;view?utm_content=DAD9IlS-dB4&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener"></a>
   </div>
  );
}

export default App;
