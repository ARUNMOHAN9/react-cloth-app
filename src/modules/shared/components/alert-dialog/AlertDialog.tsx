import React, { useState, ForwardRefExoticComponent, RefAttributes, useEffect, MutableRefObject } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

interface IAlertProps {
    parentRef: MutableRefObject<(msg: string) => void> | MutableRefObject<null>
}

const AlertDialog = ({ parentRef }: IAlertProps) => {

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    const handleOpen = (msg: string) => {
        setMsg(msg);
        setOpen(true);
    }

    useEffect(() => {
        if (parentRef) {
            parentRef.current = handleOpen
        }
    }, [])


    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {msg}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Ok
            </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default AlertDialog;