import React, {Component} from 'react';
import { Link } from 'react-router-dom'

class Post extends Component {
    state = {
        activePost: []
    }
    componentDidMount = async () => {
        const title = this.props.location.state.title;
        const req = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=1&q=${title}`)
        const res = await req.json()

        this.setState({
            activePost: res
        })
        console.log(this.state.activePost)

    }

    render() {
         const post = this.state.activePost
         console.log(post)
        return (
            <div className="container">
                {
                    post.map(posts => {
                        return <div key={posts.id}>
                        <p>{posts.body}</p>
                        <button>
                        <Link to="/">
                        Return Home
                        </Link>
                        </button>
                        </div>
                    })
                }
            </div>
         );
    }
}

export default Post;
