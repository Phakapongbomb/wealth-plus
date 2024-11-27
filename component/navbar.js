import React from "react";
import css from "../public/css/navbar.module.css";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
            <div className={css.container}>
                <div className="box_ic"></div>
                <div className="box_nav" data-font={`bol`}>
                    <Link className="link" href={'/'}>รู้จัก Wealth PLUS </Link>
                    <Link className="link" href={'/'}>จุดเด่น</Link>
                    <Link className="link" href={'/'}>แผนการลงทุน</Link>
                </div>
                <div className="box_botton" data-font={`bol`}>เริ่มวางแผน</div>
            </div>
        </>
    );
};

export default Navbar;
