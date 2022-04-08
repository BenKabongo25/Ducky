import React from "react";
import { PostViewList } from "../posts/PostViewList";

export class UserProfilView extends React.Component {

    render() {
        let actionsContent;
        if (this.props.me) {
            actionsContent = (
                <div className='user-profil-view-header-infos-actions'>
                    <input
                        className='user-profil-view-header-infos-action-item '
                        type='button'
                        value='Modifier le profil' 
                        />
                    <input
                        className='user-profil-view-header-infos-action-item'
                        type='button'
                        value='Paramètres'
                        />
                </div>
            );
        }
        else {
            actionsContent = (
                <div className='user-profil-view-header-infos-actions'>
                    <input
                        className='user-profil-view-header-infos-action-item'
                        type='button'
                        value='Message' 
                        />
                    <input
                        className='user-profil-view-header-infos-action-item'
                        type='button'
                        value='Abonné(e)'
                        />
                    <div className='user-profil-view-header-infos-action-menu-container'>
                        <span>...</span>
                        <div className='user-profil-view-header-infos-action-menu-content'>
                            <ul>
                                <li><a href='#'>Signaler</a></li>
                                <li><a href='#'>Bloquer</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            );
        }

        return (
            <div className='user-profil-view-container'>
                <div className='user-profil-view-header'>
                    <img
                        src={this.props.user.profilePicture} 
                        className='user-profil-view-header-image' />
                    <div className='user-profil-view-header-infos'>
                        <div className='user-profil-view-header-infos-names'>
                            <span className='user-profil-view-header-infos-names-names'>
                                {this.props.user.names}
                            </span>
                            <span className='user-profil-view-header-infos-names-username'>
                                {this.props.user.username}
                            </span>
                        </div>
                        <div className='user-profil-view-header-infos-counters'>
                            <div className='user-profil-view-header-infos-counters-item'>
                                <span className='value'>{this.props.posts.length}</span>
                                <span>Publications</span>
                            </div>
                            <div className='user-profil-view-header-infos-counters-item'>
                                <span className='value'>{this.props.user.followers.length}</span>
                                <span>Abonnés</span>
                            </div>
                            <div className='user-profil-view-header-infos-counters-item'>
                                <span className='value'>{this.props.user.followings.length}</span>
                                <span>Abonnements</span>
                            </div>
                        </div>
                        <div className='user-profil-view-header-infos-bibliography'>
                            <h4>Intro</h4>
                            {this.props.user.biography}
                        </div>
                        {actionsContent}
                    </div>
                </div>
                <div className='user-profil-view-content'>
                    <div className='user-profil-view-content-navigation'>
                        <div className='user-profil-view-content-navigation-item'>
                            <span>PUBLICATIONS</span>
                        </div>
                        <div className='user-profil-view-content-navigation-item'>
                            <span>MENTIONS</span>
                        </div>
                        <div className='user-profil-view-content-navigation-item'>
                            <span>J'AIME</span>
                        </div>
                    </div>
                    <div className='user-profil-view-content-body'>
                        <PostViewList posts={this.props.posts} />
                    </div>
                </div>
            </div>
        );
    }
}