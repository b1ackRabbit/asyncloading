import React, {Component} from 'react';
import '../App.css';
import {OuterContent} from "../components/outer-content";
import {connect} from 'react-redux';
import {updateSearchValue} from "../store/actions/update-search-value";
import {updateBlockLink} from "../store/actions/update-block-link";
import {markNextBlock} from "../store/actions/mark-next-block";
import {MainComponent} from "./main-components";


class AppComponent extends Component {
  state = {
    searchText : this.props.searchText
  }
  startLoading = () => {
    const apiUrl = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI&maxResults=2&type=video&part=snippet';
    const time = 1000;
    let isTimeOut = false;

    new Promise( (resolve, reject) => {
      const timeout = setTimeout(function() {
        isTimeOut = true;
        reject(new Error('Request timed out'));
      }, time);

      fetch(apiUrl + '&q=' + this.state.searchText).then(result => {
        clearTimeout(timeout);
        if(!isTimeOut) {
          resolve(result);
        }
      }).catch(error => {
        if(isTimeOut) return;
        reject(error);
      })
    }).then(result => {
      if(result.status !== 200){
        throw new Error(result.status);
      }
      return result.json();
    }).then( result => {
      const idToSHow = result.items[0].id.videoId;
      this.props.updateBlockLink(this.props.blockToLoad,idToSHow);
      this.markNextBlock();
    }).catch(error => {
      console.error(error);
    })
  }


  markNextBlock = () => {

    let newNextBlockIndex = this.props.blockToLoad + 1;
    if(newNextBlockIndex > 2){
      newNextBlockIndex = 0;
    }
    this.props.markNextBlock(newNextBlockIndex);
  }
  updateInput = (event) => {
    this.setState({
      searchText : event.target.value
    });
  }

  createListOfBlocks = () => {
    return this.props.loadingBlocks.map( (block)=> {
      return  <OuterContent key={block.number} link={block.videoId}/>
    })
  }

  render() {
    return (
      <MainComponent searchText={this.state.searchText} updateInput={this.updateInput} startLoading={this.startLoading} createListOfBlocks={this.createListOfBlocks} />
    );
  }
}

const mapStateToProps = (state) => {
  const {loadingBlocks,searchText,blockToLoad} = state;
  return {
    loadingBlocks,
    searchText,
    blockToLoad
  }
}

const mapDispatchToProps = {
  updateSearchValue,
  updateBlockLink,
  markNextBlock
}

export const App = connect(mapStateToProps,mapDispatchToProps)(AppComponent);
