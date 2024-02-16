"use client";

import React from "react";

import "./styles.css";

function RootLayout({ children }) {
    // const timestamp = new Date().toLocaleString();

    const [timestamp, setTimestamp] = React.useState(null);

    React.useEffect(() => {
        setTimestamp(new Date().toLocaleString());
    }, []);

    return (
        <html lang="en">
            <body>
                {children}
                <footer>Page rendered on {timestamp}</footer>
            </body>
        </html>
    );
}

export default RootLayout;
