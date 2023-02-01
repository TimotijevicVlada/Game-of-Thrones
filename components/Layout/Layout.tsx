import React from 'react';
import css from "./Layout.module.scss";

//components
import Header from '../Header/Header';

//types
import { LayoutProps } from '../../types/layout';

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={css.container}>
            <Header />
            {children}
        </div>
    )
}

export default Layout;