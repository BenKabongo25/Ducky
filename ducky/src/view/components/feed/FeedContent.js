import React from "react";
import { FeedContentHome } from "./FeedContentHome";
import { FeedContentMessages } from "./FeedContentMessages";
import { FeedContentStories } from "./FeedContentStories";

export class FeedContent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let content = null;
        switch(this.props.contentId) {
            case 1: // messages
                content = (
                    <FeedContentMessages />
                );
                break;
            case 2: // stories
                content = (
                    <FeedContentStories />
                );
            default: // home
                content = (
                    <FeedContentHome stories={[1,2,3,4,5]} posts={[1,2,3,4,5]} />
                );
        }
        return (
            <div className='feed-content'>
                {content}
            </div>
        );
    }
}