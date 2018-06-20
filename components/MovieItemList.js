import React from 'react';
import Link from 'next/link';
import { withRouter } from 'next/router';

class MovieItemList extends React.Component {
    render() {
        const asUrl = "/movie/" + this.props.id;
        const linkUrl = "/movie?id=" + this.props.id;
        return (
            <div className="movieItemList">
                <img src={this.props.img} />
                {this.props.title} {this.props.rating}
                {this.props.genre}
                <Link as={asUrl} href={linkUrl}>
                    <a>Details</a>
                </Link>
            </div>
        );
    }
}

export default withRouter(MovieItemList);