import React from 'react';
import Layout from '../components/Layout';

const About = () => {
    
    return ( 
        <Layout title="About" description="This is the About page" >
            <div className="text-center mt-5">
                <h1>About</h1>
                <p>This is the store for a game Tic Tac Toe.</p>
            </div>
        </Layout>
     );
}
 
export default About;