import React from 'react';

export default function ApplicationLogo({ logoUrl, className }) {
    return (
        <React.Fragment>
            <img className="mt-1" width="200" src={logoUrl} />
        </React.Fragment>
    );
}
