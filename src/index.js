import React from 'react';
import ReactDOM from 'react-dom';
// import SearchBar from './components/SearchBar';
// import TermList from './components/TermList';
// import request from 'superagent';
// import $ from 'jquery';
import Search from 'react-search';
import SearchItem from './components/SearchItem';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      terms: [
        {id: 0, value: 'Neck'},
        {id: 1, value: 'Shoulders'},
        {id: 2, value: 'Upper Back'},
        {id: 3, value: 'Lower Back'}
      ],
      search: ""
    }

    this.handleTermChange = this.handleTermChange.bind(this);
  }

  handleTermChange(term) {
    this.setState({
      search: term
    })
    // $.ajax({
    //   url: 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json',
    //   dataType: 'jsonp',
    //   type: 'POST',
    //   headers: {'Access-Control-Allow-Origin' : 'this'},
    //   success: function(data) {
    //     console.log(data);
    //   }
    // })
    // const url = 'https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json';
    // request.get(url, function(err, res) {
    //   console.log(res.body.data[0]);
    // });
  }

  render() {
    return (
      <div>
        <Search items={this.state.terms}
          placeholder="Search"
          onItemsChanged={this.handleTermChange} />
        <SearchItem value={this.state.search}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
