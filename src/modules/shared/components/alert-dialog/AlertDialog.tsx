import React, { useState, forwardRef, useImperativeHandle, ForwardRefExoticComponent, RefAttributes, Ref } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

export type Handle<T> = T extends ForwardRefExoticComponent<RefAttributes<infer T2>> ? T2 : never;

const AlertDialog = forwardRef((props, ref: Ref<{ handleOpen: (msg: string) => void }>) => {

    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState('');

    useImperativeHandle(
        ref,
        () => ({
            handleOpen() {
                setMsg(msg);
                setOpen(true);
            }
        }),
    )


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
                {/* <DialogTitle id="alert-dialog-title">{""}</DialogTitle> */}
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
})

export default AlertDialog;