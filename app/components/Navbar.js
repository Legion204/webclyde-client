import Link from 'next/link'
import React from 'react'

const Navbar = () => {


    return (
        <div className="navbar bg-transparent absolute">
            <div className="navbar-start justify-evenly">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><Link href={'/'}>Home</Link></li>
                        <li><Link href={'/'}>Code Adapts</Link></li>
                        <li>
                            <details>
                                <summary>Services</summary>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href={'/'}>Portfolio</Link></li>
                        <li><Link href={'/'}>Testimonial</Link></li>
                    </ul>
                </div>

                <a className="flex items-center font-bold text-3xl"><svg width="63" height="42" viewBox="0 0 63 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.4219 0.47171C26.3451 0.471834 26.7036 1.66249 27.3447 2.66995C27.3455 2.66878 27.3459 2.66723 27.3467 2.66605L29.8877 7.06644C30.4332 8.01041 31.7963 8.01045 32.3418 7.06644L35.0684 2.34476C35.6847 1.35705 35.8944 0.47171 37.7861 0.47171L37.7871 0.468781H43.4658C45.8206 0.469197 47.2925 3.01917 46.1152 5.05862L25.915 40.0479C24.7375 42.0873 21.793 42.0871 20.6152 40.0479L0.414062 5.05862C-0.763441 3.01898 0.709288 0.46878 3.06445 0.468781H24.4209L24.4219 0.47171Z" fill="#052BD3" />
                    <path d="M24.4219 0.47168C26.3451 0.471803 26.7036 1.66246 27.3447 2.66992C27.3455 2.66875 27.3459 2.6672 27.3467 2.66602L29.8877 7.06641C30.4332 8.01038 31.7963 8.01042 32.3418 7.06641L35.0684 2.34473C35.6847 1.35702 35.8944 0.47168 37.7861 0.47168L37.7871 0.46875H59.1084C61.4632 0.469166 62.9351 3.01914 61.7578 5.05859L41.5576 40.0479C40.3801 42.0873 37.4356 42.087 36.2578 40.0479L16.0566 5.05859C14.8791 3.01895 16.3519 0.46875 18.707 0.46875H24.4209L24.4219 0.47168Z" fill="#3254EC" />
                    <path d="M59.1079 0.46875C61.4631 0.46875 62.9349 3.01893 61.7573 5.05859L41.5571 40.0479C40.3795 42.0874 37.435 42.0873 36.2573 40.0479L31.0854 31.0889L48.7642 0.46875H59.1079Z" fill="#FF8720" />
                </svg>Web<span className='text-[#3254EC]'>clyde</span></a></div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal font-bold text-base px-1">
                    <li><Link href={'/'}>Home</Link></li>
                    <li><Link href={'/'}>Code Adapts</Link></li>
                    <li>
                        <details>
                            <summary>Services</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link href={'/'}>Portfolio</Link></li>
                    <li><Link href={'/'}>Testimonial</Link></li>
                </ul>
                <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-[#3254ec] text-white">Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar
