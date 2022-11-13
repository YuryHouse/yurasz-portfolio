import React from 'react';
import style from './Contact.module.scss';
import styleButton from '../common/styles/Button.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import {Box, TextField} from "@mui/material";
import axios from "axios";
import {useForm} from "react-hook-form";

function Contact() {
    const {register, formState: {errors}, handleSubmit} = useForm();
    const onSubmit = ({name, email, message}, e) => {
        e.preventDefault()
        axios.post('https://gmail-nodejs-main.herokuapp.com/sendMessage', {name, email, message})
            .then(() => {
                alert('Thank you! Your message has been send.');
            });
        e.target.reset()
    }
    return (
        <div className={style.contactBlock} id={'contact'}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title name={'Contact me'}/>
                <Fade right cascade>
                    <form onSubmit={handleSubmit(onSubmit)} id={'contact-form'}>
                        <Box component="form"
                             sx={{
                                 '& .MuiTextField-root': {m: 1, width: '30ch'}, input: {color: 'white'},
                             }}
                             noValidate
                             autoComplete="off"
                        >
                            <div className={style.lineInput}>
                                <div>
                                    <div>
                                        <TextField label="Name" variant="outlined"
                                                   color="primary"
                                                   focused
                                                   fullWidth
                                                   placeholder={'Your name'}
                                                   type={'text'}
                                                   {...register('name', {required: true})}
                                        />
                                        {errors.name && <p style={{color: '#fff'}}>Name is required</p>}
                                    </div>
                                    <div>
                                        <TextField id="outlined-basic"
                                                   label="e-mail"
                                                   variant="outlined"
                                                   color="primary"
                                                   focused
                                                   fullWidth
                                                   {...register('email', {
                                                       required: true,
                                                       pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                                                   })} placeholder={'E-mail'} type={'text'}
                                        />
                                        {errors.email && <p style={{color: '#fff'}}>E-mail is required</p>}
                                    </div>
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        color="primary"
                                        focused
                                        fullWidth
                                        inputProps={{style: {color: "white"}}}
                                        {...register('message', {required: true})}
                                    />
                                </div>
                            </div>
                        </Box>
                        <button className={`${styleButton.button} ${style.button}`} type="submit">Send</button>
                    </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;