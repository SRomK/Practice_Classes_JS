import styles from './ForgotPassword.module.css';

// REACT
import React, { Component } from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import LocalizedStrings from 'react-localization';

// Components
import MatButton from '../Material/MatButton';

// TOOLS
import Services from '../../tools/Services';
import Tools from 'tools/Tools';

// LANG
const LoginLang = require('./ForgotPasswordLang.json');
const LangStd = require('../LangStd.json');
let lang = new LocalizedStrings(LoginLang[0]);
let langStd = new LocalizedStrings(LangStd[0]);

export default class ForgotPassword extends Component {
    state = {
        email: '',
        error: null,
    }

    componentDidMount() {
        // Language
        let language = "en";
        switch (navigator.language) {
            case 'es':
                language = 'es';
                break;
            case 'fr':
                language = 'fr';
                break;
        }

        // Translate
        lang.setLanguage(language);
        langStd.setLanguage(language);
    }

    handleClose = (e) => {
        this.props.onClose();
    }

    handleChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handleOk = (e) => {
        this.setState({ error: null });

        // 
        if (this.state.email.length === 0) {
            this.setState({ error: lang.invalidUsernameEmail });
            return;
        }

        this.sendPassword();
    }

    async sendPassword() {
        let email = this.state.email;

        // Post
        let res = await Services.postAsync('login/send_email_password', { email });

        // Error
        if (res.status !== 'success') {
            Tools.setError(this, res.error);
            return;
        }

        // Success
        this.props.onClose();
    }

    render() {
        let { email, error } = this.state;

        return (
            <Dialog 
                id='loginDialog'
                className='myDialog'
                open={true} 
                onClose={this.handleClose} >
				<i className="close mdi mdi-close" onClick={this.handleClose}></i>
				<DialogTitle>{lang.title}</DialogTitle>
                <DialogContent>
                    <div>{lang.writeEmailOrUsername}</div>
                    <TextField 
                        id='username' 
                        name='email' 
                        type='text' 
                        className='loginUser'
                        label={lang.enterEmailOrUsername}
                        value={email} 
                        onChange={this.handleChange} />
                    {error && <div style={{ color: 'red' }}>{error}</div>}
                </DialogContent>
                <DialogActions>
                    <MatButton onClick={this.handleOk} blue>{langStd.ok}</MatButton>
                    <MatButton onClick={this.handleClose}>{langStd.cancel}</MatButton>
                </DialogActions>
            </Dialog>
        )
    }
}
