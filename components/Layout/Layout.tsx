// components/Layout/Layout.tsx
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import MainChat from '../MainChat/MainChat';

type LayoutProps = {
    children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex h-screen">
                <Sidebar />
                <MainChat>{children}</MainChat>
            </div>
        </>
    );
};

export default Layout;
