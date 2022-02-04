import React, { createElement } from 'react';
import moment from 'moment';
import { Card, Image, Button, Label, Icon } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

const PostCard = ({post: { _id, body, createdAt, user, comments, likes }}) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/home/posts/' + _id);
    }

    const likePost = (e) => {
        e.stopPropagation();
        console.log("like");
    }

    const commentPost = (e) => {
        e.stopPropagation();
        console.log('comment');
    }

    return (
        <Card fluid onClick={handleCardClick}>
            <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src='https://react.semantic-ui.com/images/avatar/large/molly.png'
                />
                <Card.Header>{user.username}</Card.Header>
                <Card.Meta>{moment.unix(createdAt / 1000).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                {/* <div className='ui two buttons'> */}
                    <Button as='div' labelPosition='right'>
                        <Button basic color='teal' onClick={likePost}>
                            <Icon name='heart' size='large' />
                        </Button>
                        <Label basic color='teal' pointing='left'>
                            {likes.length}
                        </Label>
                    </Button>
                    <Button as='div' labelPosition='right'>
                        <Button basic color='blue' onClick={commentPost}>
                            <Icon name='comments' size='large'/>
                        </Button>
                        <Label basic color='blue' pointing='left'>
                            {comments.length}
                        </Label>
                    </Button>
                {/* </div> */}
            </Card.Content>
        </Card>
    );
};

export default PostCard;