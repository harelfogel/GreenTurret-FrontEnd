import React from 'react';
import ChatHeaderSection from './ChatHeaderSection';
import ChatPreview from './ChatPreview';
import InputSection from './InputSection';
import styles from './MainChat.module.css';


type MainChatProps ={
    children: React.ReactNode;
}

const MainChat:React.FC<MainChatProps>= ( {children}
) => {
    return (
        <main className="w-3/4 p-4 flex flex-col bg-white">
            <ChatHeaderSection />
            <hr className={styles.horizontalLine} />
            <ChatPreview />
            <hr className={styles.horizontalLine} />
            <InputSection />
            {children}
        </main>
    );
};

export default MainChat;



