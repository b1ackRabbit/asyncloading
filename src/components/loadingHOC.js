import React from 'react';

export const loadingHOC = (WrappedComponent) => {
  return class LoadingHOC extends React.Component {
    render(){
      const { link } = this.props;
      return link ?
        <WrappedComponent link={link} />
        : <div> Try to change input and press the button</div>
    }
  }
}