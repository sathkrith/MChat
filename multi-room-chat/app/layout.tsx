import React, { ReactNode } from 'react';

type LayoutProps = {
    children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html>
            <body>
                <div className="container">
                    <header>
                        {/* Header content or component */}
                        <h1>Chat Application header</h1>
                    </header>
                    <main>{children}</main>
                    <footer>
                        {/* Footer content or component */}
                        <p>© 2024 Chat App, Inc.</p>
                    </footer>
                </div>
            </body>
        </html>
    );
};

export default Layout;
