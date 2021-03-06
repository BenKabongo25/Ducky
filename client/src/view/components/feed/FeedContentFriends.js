import React from "react";
import { FollowsViewList } from "../users/FollowsViewList";

export class FeedContentFriends extends React.Component {

    render() {
        return (
            <div className='feed-content-item feed-content-friends'> 
                <div className='feed-content-item-top feed-content-friends-top'>
                    <img 
                        src={this.props.user.profil_picture_src}
                        alt={this.props.user.names}
                        className='feed-content-friends-top-image'/>
                    <h3>Abonnés et Abonnements</h3>
                </div>
                <div className='feed-content-friends-main'>
                    <FollowsViewList 
                        user={this.props.user}
                        handleSetOtherUser={this.props.handleSetOtherUser} />
                </div>
            </div>
        );
    }
}