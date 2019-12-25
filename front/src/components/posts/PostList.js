import  React, {Component, Fragment} from 'react';
import Post from '../models/Post';
import { Container, Row, Col } from 'reactstrap';
import PostCard from '../blocks/PostCard';
import PaginationBlock from '../blocks/PaginationBlock';

class PostList extends Component{
  state = {
    posts: {}
  };
  componentDidMount(){
    Post.getAll(this.state.current_page).then(res => {
      this.setState({posts: res});
    })
  };

  setCurrentPage = (number) => {
    Post.getAll(number).then(res => {
      this.setState({posts: res});
    })
  };

  render(){
    if (this.state.posts.data) {
      return(
        <Fragment>
            <Container className="px-0">
              <PaginationBlock item={this.state.posts} setCurrentPage={this.setCurrentPage}/>
              {
                this.state.posts.data.map(item =>  {
                  return (
                    <PostCard key={item.id} item={item}/>
                 )
                })
              }
            </Container>
        </Fragment>
      )
    }
    return null;
  }
}

export default PostList;
