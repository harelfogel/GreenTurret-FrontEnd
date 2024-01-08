// components/MainChat/ChatPreview.tsx
import React from "react";
import styles from './MainChat.module.css';

const ChatPreview: React.FC = () => {
    return (
        <div className={`${styles.chatPreview} flex-grow overflow-y-auto mb-2`}>
            {/* Chat messages will go here */}
        </div>
    );
};

export default ChatPreview;
