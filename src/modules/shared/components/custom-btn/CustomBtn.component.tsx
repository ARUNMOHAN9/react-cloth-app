import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

import './CustomBtn.styles.scss';


const CustomButton = ({ children, ...otherProps }: ButtonProps) => (
    <Button variant="contained" color="primary" {...otherProps}>
        {children}
    </Button>

);

export default CustomButton;