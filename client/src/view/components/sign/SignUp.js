import React from 'react';
import { SignUpNames } from './SingUpNames';
import { SignUpBirthdaySex } from './SignUpBirthdaySex';
import { SingUpLocalisation } from './SignUpLocalisation';
import { SignUpContacts } from './SignUpContacts';
import { SignUpIdentifiants } from './SignUpIdentifiants';
import { SignTop } from './SignTop';

import { User, UserSex } from '../../../model/objects/User';
import { UserServices } from '../../../model/services/UserServices';

import Cookies from 'js-cookie';

export class SignUp extends React.Component {

    constructor(props) {
        super(props);

        let user = new User();
        user.sex = UserSex.m;
        this.state = {
            step: 1,
            user: user,
            errorMessage: '',
            confirmpassword: '',
        };
        this.handleChange.bind(this);
    }

    handleChange(event, field) {
        event.preventDefault();
        const value = event.target.value.trim();

        if (field === 'confirmpassword') {
            this.setState({confirmpassword: value})
            return;
        }

        let user = this.state.user;
        user[field] = value;
        
        this.setState({user: user});
    }

    render() {
        let content;
        switch(this.state.step) {
            case 1:
                content = <SignUpNames
                            firstname={this.state.user.firstname}
                            lastname={this.state.user.lastname}
                            handleChange={(e, f) => this.handleChange(e, f)} />;
                break;
            case 2:
                content = <SignUpBirthdaySex 
                            date={this.state.user.birthday}
                            sex={this.state.user.sex}
                            handleChange={(e, f) => this.handleChange(e, f)} />;
                break;
            case 3:
                content = <SingUpLocalisation 
                            country={this.state.user.country} 
                            city={this.state.user.city}
                            handleChange={(e, f) => this.handleChange(e, f)} />
                break;
            case 4:
                content = <SignUpContacts
                            phone={this.state.user.phone}
                            mail={this.state.user.mail}
                            handleChange={(e, f) => this.handleChange(e, f)} />
                break;
            case 5:
                content = <SignUpIdentifiants
                            username={this.state.user.username}
                            password={this.state.user.password}
                            confirmpassword={this.state.confirmpassword}
                            handleChange={(e, f) => this.handleChange(e, f)} />
                break;
            default:
                content = <p>Une erreur est survenue !</p>;
        }

        let errorContent = null;
        if (this.state.errorMessage) {
            errorContent = (
                <div className='sign-error-message'>
                    {this.state.errorMessage}
                </div>
            );
        }

        return (
            <div className='sign'>
                <SignTop title='R??joignez Ducky !' />
                {content}
                {errorContent}
                <div className='sign-button-bar'>
                    <input
                        type='button'
                        value='Pr??c??dent'
                        className='form-sign-button negative'
                        onClick={(e) => {
                            e.preventDefault();
                            this.setState({errorMessage: ''})
                            const step = this.state.step;
                            if (step === 1)
                                return;
                            this.setState({step: step - 1});
                        }}
                        />
                    <input
                        type='button'
                        value='Suivant'
                        className='form-sign-button positive'
                        onClick={(e) => {
                            e.preventDefault();
                            const step = this.state.step;
                            const user = this.state.user;
                            const confirmpassword = this.state.confirmpassword;
                            let errorMessage;
                            if (step === 1) {
                                if (!user.firstname || !user.lastname) {
                                    errorMessage = (
                                        'Renseignez vos nom et pr??nom pour continuer !');
                                }
                            }
                            else if (step === 2) {
                                if (!user.birthday) {
                                    errorMessage = "Veuillez rentrer une date correcte !";
                                }
                                else if (!user.sex) {
                                    errorMessage = "Dites-nous un peu plus sur votre genre !";
                                }
                            }
                            else if (step === 3) {
                                if (!user.country || !user.city) {
                                    errorMessage = "Renseignez votre pays et votre ville !";
                                }
                            }
                            else if (step === 4) {
                                if (!user.phone || !user.mail) {
                                    errorMessage = "Renseignez votre mail et num??ro de t??l??phone";
                                }
                            }
                            else  {
                                if (!user.username || !user.password) {
                                    errorMessage = (
                                        "Choisissez un nom d'utilisateur et un mot de passe !");
                                }
                                else if (user.password !== confirmpassword) {
                                    errorMessage = (
                                        "Les mots de passe ne sont pas identiques !");
                                }
                                else {
                                    UserServices.createUser(this.state.user,
                                        (response) => {
                                            if (response.status === 200) {
                                                const user_id = Cookies.get('user_id');
                                                // const user_id = response.data._id;
                                                this.props.setUser(user_id);
                                            } else {
                                                const errorMessage = (
                                                    'Echec de cr??ation de compte'
                                                );
                                                this.setState({errorMessage: errorMessage});
                                            }
                                        },
                                        (error) => {
                                            const errorMessage = error.response.data;
                                            this.setState({errorMessage: errorMessage});
                                        }
                                    );
                                    return;
                                }
                            }

                            if (errorMessage) {
                                this.setState({errorMessage: errorMessage});
                                return;
                            }
                            this.setState({step: step + 1, errorMessage: ''})
                        }}
                        />
                </div>
                <div className='sign-type-swipe-question'>
                    <p>Vous avez d??ja un compte ? </p> 
                    <input
                        type='button'
                        value='Se connecter'
                        className='form-sign-button negative'
                        onClick={this.props.handleSignIn}
                        />                  
                </div>
            </div>
        );
    }

}