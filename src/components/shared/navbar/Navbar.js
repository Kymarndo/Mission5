import navbarStyles from "./Navbar.module.css"
import phone from "./12-124573_graphic-library-stock-icons-transparent-png-images-transparent.png"

import { Link, useMatch, useResolvedPath } from "react-router-dom"
/* Link component replaces a(anchor) tags, then href
is replaced with to */

export default function Navbar() {
    return (
        <nav className={navbarStyles.nav}>
            <nav className={navbarStyles.navUpper}>
                <Link to="/"><img src="https://www.turners.co.nz/contentassets/3e15c8546917474ca0a150b18e9fd64e/turnerscars_logo_1line_horz_true-rgb-desktop.png"
                    alt="" className={navbarStyles.navUpperLeft} /></Link>
                <div className={navbarStyles.navUpperRight}>
                    <img src={phone} alt="" className={navbarStyles.navUpperRightIcon} />
                    0800 887 637
                </div>

            </nav>
            <nav className={navbarStyles.navLower}>
                <ul className={navbarStyles.navlinks}>
                <CustomLink style={{textDecoration: 'none', color: 'white', fontWeight: '600', marginRight: '30px'}} to="/Insurance">Insurance
                 <img src="https://www.freeiconspng.com/uploads/white-down-arrow-png-2.png" className={navbarStyles.insuranceArrow}/></CustomLink>
                <CustomLink style={{textDecoration: 'none', color: 'white', fontWeight: '600'}} to="/Finance">Finance</CustomLink>
                <CustomLink style={{textDecoration: 'none', color: 'white', fontWeight: '600'}} to="/Find-a-Car">Find a Car</CustomLink>
                <CustomLink style={{textDecoration: 'none', color: 'white', fontWeight: '600'}} to="/Sell-your-car">Sell Your Car</CustomLink>
                <CustomLink style={{textDecoration: 'none', color: 'white', fontWeight: '600'}} to="/Turners-Subscription">Turners Subscription</CustomLink>
                </ul>
               
            </nav>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {/* usedResolvedPath and useMatch hooks */
    const resolvedPath = useResolvedPath(to) /* converts relative paths to absolute */
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })/* end: true is saying the entire path must match */

    return (  /* checks if customlink is active, then marks current page as active otherwise don't add as active */
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}



