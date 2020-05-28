import React from 'react';

const NotFound = () => {
    return (
        <div style={styles.container}>
            <h3 style={styles.title}>404 page not found</h3>
            <p style={styles.details}>We are sorry but the page you are looking for does not exist.</p>
        </div>
    )
}

const styles = ({
    container: {
        display: 'grid',
        justifyItems: 'center',
        alignContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    title: {
        color: '#fff',
    },
    details:{
        color: '#fff'
    }
})
export default NotFound;