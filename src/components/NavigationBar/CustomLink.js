import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ textDecoration: match ? "underline" : "none", color: match ? "#E3A008" : "black" }}
                to={to}
                {...props}
            >
                {children}
            </Link>
            {match && " "}
        </div>
    );
};

export  {CustomLink}