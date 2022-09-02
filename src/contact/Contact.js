import React from 'react';
import style from './Contact.module.scss';
import styleButton from '../common/styles/Button.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import Title from "../common/components/title/Title";
import Fade from "react-reveal/Fade";
import {Box, TextField} from "@mui/material";

function Contact() {
    return (
        <div className={style.contactBlock} id={'contact'}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title name={'Contact me'}/>
                <Fade right cascade>
                    <Box component="form"
                         sx={{
                             '& .MuiTextField-root': {m: 1, width: '30ch'}, input: { color: 'white'},
                         }}
                         noValidate
                         autoComplete="off"
                    >
                        <div className={style.lineInput}>
                            <div>
                                <div>
                                    <TextField id="outlined-basic"
                                               label="Name" variant="outlined"
                                               color="primary"
                                               focused
                                               required={true}
                                               fullWidth
                                    />
                                </div>
                                <div>
                                    <TextField id="outlined-basic"
                                               label="e-mail"
                                               variant="outlined"
                                               color="primary"
                                               focused
                                               required={true}
                                               fullWidth
                                    />

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
                                    required={true}
                                    inputProps={{ style: { color: "white" } }}
                                />
                            </div>
                        </div>
                    </Box>
                    <button className={`${styleButton.button}`} type="submit">Send</button>
                </Fade>
            </div>
        </div>
    );
}

export default Contact;