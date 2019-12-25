import  React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import ReactHtmlParser from 'react-html-parser';

class PostCard extends Component{
  render(){

    const {
      headline,
      content,
      user,
      created_at
    } = this.props.item;
    return(
      <Card style={{ width: '400px' }}>
        <Card.Body>
          <Card.Title>{headline}</Card.Title>
          <Card.Text>{ReactHtmlParser(content)}</Card.Text>
          <footer>Created: {created_at} by user - {user.name}</footer>
        </Card.Body>
      </Card>
    )
  }
}

export default PostCard;
