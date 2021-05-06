import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './footer.styles.scss'

// The footer component.
// Fetches content data from Firebase on mount.

const Footer = () => {
    return (
        <StaticQuery query={query} render={({sanitySiteContent: {footerAbout, footerCopyright}}) => (
            <footer className="footer">
                <section className="footer__content">
                    <section className="footer__about">
                        <h3 className="footer__about-title">About</h3>
                        <p className="footer__about-desc">
                            {footerAbout}
                        </p>
                    </section>
                    {/* <section className="footer__social">
                        <a href={content.footerFacebook} rel="noopener noreferrer">
                            <img className="footer__social-img" src="https://img.icons8.com/metro/52/FFFFFF/facebook-new--v2.png" alt='In The Know Local Facebook'/>                        
                        </a>
                        <a href={content.footerLinkedin} rel="noopener noreferrer">
                            <img className="footer__social-img" src="https://img.icons8.com/metro/52/FFFFFF/linkedin.png" alt='In The Know Local Linkedin'/>
                        </a>
                        <a href={content.footerInstagram} rel="noopener noreferrer">  
                            <img className="footer__social-img" src="https://img.icons8.com/metro/52/FFFFFF/instagram-new.png" alt='In The Know Local Instagram'/>
                        </a>
                        <a href={content.footerFacebook} target="_blank" rel="noopener noreferrer">
                            <img className="footer__social-img" src="https://img.icons8.com/metro/52/FFFFFF/twitter.png" alt='In The Know Local Twitter'/>
                        </a>
                    </section> */}
                    <p className="footer__copyright">
                        {footerCopyright}
                    </p>
                </section>
            </footer>
        )} />
)}
    
export default Footer

export const query = graphql`
    query FooterQuery {
        sanitySiteContent(_id: {eq: "b94b08cf-84ca-4296-a7da-7f7716e55de6"}) {
            footerAbout
            footerCopyright
        }
    }
`