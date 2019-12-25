import  React, {Component} from 'react';
import Pagination from 'react-bootstrap/Pagination';

class PaginationBlock extends Component{
  render(){
    const {
      current_page,
      last_page,
    } = this.props.item;
    let items = [];
    for (let number = 1; number <= last_page; number++) {
      items.push(
        <Pagination.Item key={number} active={number === current_page}
          onClick ={ (e) => {e.stopPropagation(); this.props.setCurrentPage(number)}}
          >
          {number}
        </Pagination.Item>,
      );
    }

    return((
      <div>
        <Pagination>{items}</Pagination>
      </div>
    ))
  }
}

export default PaginationBlock;
