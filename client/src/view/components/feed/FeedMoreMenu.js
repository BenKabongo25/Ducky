import React from "react";

export class FeedMoreMenu extends React.Component {

    render() {
        return (
            <div className='feed-more-menu'>
                {/**<div className='feed-more-menu-item'
                    onClick={this.props.handleSuggestions}>
                    <img
                        src={require('../../../ressources/icons/friends.png')}
                        className='feed-more-menu-item-image' 
                        alt='Suggestions'/>
                    <span>Suggestions</span>
                </div>*/}
                <div className='feed-more-menu-item'
                    onClick={this.props.handleStatistics}>
                    <img
                        src={require('../../../ressources/icons/statistics.png')}
                        className='feed-more-menu-item-image' 
                        alt='Statistiques' />
                    <span>Statistiques</span>
                </div>
                <div className='feed-more-menu-item'
                    onClick={this.props.handleParameters}>
                    <img
                        src={require('../../../ressources/icons/parameters.png')}
                        className='feed-more-menu-item-image'
                        alt='Paramètres' />
                    <span>Paramètres</span>
                </div>
                <div className='feed-more-menu-item'
                    onClick={this.props.handleLogOut}>
                    <img
                        src={require('../../../ressources/icons/deconnexion.png')}
                        className='feed-more-menu-item-image'
                        alt='Se déconnecter' />
                    <span>Se déconnecter</span>
                </div>
            </div>
        );
    }
}