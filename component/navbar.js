import React from "react";
import css from "../public/css/navbar.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

const Navbar = () => {
    const state = useSelector((state) => state.home);
    const { scroll_now } = state;
    return (
        <div className={`${css.container}`}>
            <div className={`layout ${scroll_now ? 'bg' : ''}`}>
                <div className="inner_container">
                    <Link className="box_ic" href={"#section_view1"}></Link>
                    <div className="box_nav" data-font={`bol`}>
                        <Link className="link" href={"#section_view1"}>
                            รู้จัก Wealth PLUS
                        </Link>
                        <Link className="link" href={"#section_view2"}>
                            จุดเด่น
                        </Link>
                        <Link className="link" href={"#section_view3"}>
                            แผนการลงทุน
                        </Link>
                    </div>
                    <div className="box_botton" data-font={`bol`}>
                        เริ่มวางแผน
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
