import React from 'react';

import classes from './Backdrop.css';

//null means nothing gets rendered
const backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null
);

export default backdrop;
