import React, { useState } from "react";
import css from "../public/css/footer.module.css";

const Footer = () => {
    const [datainput, setDatainput] = useState("");
    const onChange = (e) => {
        setDatainput(e.target.value);
    };
    return (
        <div className={`${css.footer_container}`}>
            <img className="circle" src="/image/icon/Ellipse 2.svg" />
            <img className="bubble" src="/image/home/background_ball.png" />
            <div className="inner_container">
                <div className="content_container">
                    <div className={`group_left`}>
                        <div className="top">
                            <div className="logo">
                                <img src="/image/logo/logo-wealth-plus-no-text.svg" />
                            </div>
                            <div className="group_text">
                                <div className="text_title" data-font={`bol`}>
                                    Wealth PLUS
                                </div>
                                <div className="text_subtitle">
                                    ตัวช่วยสำหรับชีวิตคุณ
                                </div>
                            </div>
                        </div>
                        <div className="bot">
                            © 2023 CK Wealth PLUS Co.,Ltd.
                        </div>
                    </div>
                    <div className={`group_right`}>
                        <div className="top">
                            <div className="top_title" data-font={`bol`}>
                                ปรึกษาขอคำแนะนำได้ที่นี่
                            </div>
                            <div className="top_subtitle">
                                สมัครรับข้อมูลข่าวสาร
                            </div>
                        </div>
                        <div className="bot">
                            <div className="ic_arrow">
                                <img src="/image/icon/arrow.svg" />
                            </div>

                            <input
                                className="inp"
                                onChange={onChange}
                                value={datainput}
                                placeholder="กรอกอีเมลของคุณ"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
