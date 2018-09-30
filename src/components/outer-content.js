import React from 'react';
import {loadingHOC} from "./loadingHOC";

class OuterContentComponent extends React.Component {
  render() {
    const link = 'https://www.youtube.com/embed/' + this.props.link;
    return (
      <React.Fragment>
        <iframe title="random" src={link}/>
      </React.Fragment>
    )
  }
}

export const OuterContent = loadingHOC(OuterContentComponent);