import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './MainChat.module.css';


const InputSection: React.FC = () => {
    return (
        <div className="flex items-center p-2">
            <TextField
                fullWidth
                variant="outlined"
                placeholder="Type new message"
                className={`${styles.inputField} mr-2`}
            />
            <Button 
                variant="outlined" 
                color="primary" 
                className={styles.sendButton}
            >
                <SendIcon />
            </Button>
        </div>
    );
};

export default InputSection;
