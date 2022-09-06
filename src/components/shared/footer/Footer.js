import footerStyles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
        <div className={footerStyles.background}>
            <div>
            <div className={footerStyles.topleft}><h2>Turners Insurance</h2></div>    
            <div className={footerStyles.contactus}><p>Contact Us</p></div>
            <div className={footerStyles.details}><p><img src="https://www.seekpng.com/png/full/12-124573_graphic-library-stock-icons-transparent-png-images-transparent.png" alt="" className={footerStyles.icons} /> 0800 TURNERS (0800 887 637)</p>
            <p style={{textDecoration: 'underline', padding: '0px 2px'}}><img src="https://www.freeiconspng.com/uploads/email-icon-clip-art--royalty--31.png" alt="" className={footerStyles.icons} />contact@turners.co.nz</p></div>
            </div>
            <div className={footerStyles.rightside}><h4>Claims and policy information</h4><p>0800 227 787</p></div>
            
        </div>

        </>
    )
}