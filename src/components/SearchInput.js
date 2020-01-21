import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
  }

  handleKeywordChange = (e) => {
    this.setState({
      keyword: e.target.value
    });
  }

  clearInput = () => {
    this.setState({
      keyword: ''
    });
  }

  // search 요청을 네비바에서 보내면, asks.js가 언마운트 되지 않아서 다시 마운트를 안하니 요청을 안받아옴.
  render() {
    const { keyword } = this.state;
    const { handleKeywordChange, clearInput } = this;

    return (
      <div>
        <input type="text" value={keyword} onChange={(e) => handleKeywordChange(e)} />
        <Link to={{pathname: '/search', search: `?q=${encodeURIComponent(keyword)}`}}>
          <button onClick={clearInput}>검색하기</button>
        </Link>
      </div>
    );
  }
}

export default SearchInput;