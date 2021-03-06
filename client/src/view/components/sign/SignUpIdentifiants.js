import React from "react";

export class SignUpIdentifiants extends React.Component {

    render() {
        return (
            <div className='sign-content'>
                <h3>Choisissez vos identifiants ! (5/5)</h3>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='username'
                        className='form-sign-label' >
                        Nom d'utilisateur
                    </label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        value={this.props.username}
                        placeholder='ex: jeandupont25'
                        onChange={e => {this.props.handleChange(e, 'username')}}
                        className='form-sign-input-text'
                        />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='password'
                        className='form-sign-label' >
                        Mot de passe
                    </label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        value={this.props.password}
                        placeholder='Mot de passe'
                        onChange={e => {this.props.handleChange(e, 'password')}}
                        className='form-sign-input-text'
                    />
                </div>
                <div className='form-sign-input-label'>
                    <label
                        htmlFor='confirmpassword'
                        className='form-sign-label' >
                        Confirmer le mot de passe
                    </label>
                    <input
                        type='password'
                        id='confirmpassword'
                        name='confirmpassword'
                        value={this.props.confirmpassword}
                        placeholder='Mot de passe'
                        onChange={e => {this.props.handleChange(e, 'confirmpassword')}}
                        className='form-sign-input-text'
                    />
                </div>
            </div>
        );
    }

}



