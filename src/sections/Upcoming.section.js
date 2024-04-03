import React from 'react';

import UpComing from '../components/UpComing';

export default function Upcoming() {
    return (
        <section className='containers'>
            <div className='column-head'>
                <h2 className='column-heading'>Up Coming</h2>
            </div>
            <div className='movie-container'>
                <UpComing />
            </div>
        </section>
    )
}
