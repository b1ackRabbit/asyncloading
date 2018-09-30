import React from 'react';

export class MainComponent extends React.Component{
  render(){
    const {searchText,updateInput,startLoading,createListOfBlocks} = this.props;
    return (
      <React.Fragment>
        <div className="App">
          <p>What do you want to see:
            <input name="whatToLoad" value={searchText} onChange={updateInput}/>
            <button onClick={startLoading}>Load</button>
          </p>
          {createListOfBlocks()}
        </div>
      </React.Fragment>
    )
  }
}