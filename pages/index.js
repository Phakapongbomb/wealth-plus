import Head from "next/head";
import Image from "next/image";
import css from "../public/css/home.module.css";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateData } from "@/component/store/home/homeSlice";

export default function Home() {
    const mock_data = [
        {
            img: "/image/icon/Union.svg",
            title: "ช่วยออกแบบแผนการลงทุนที่เหมาะสม",
            subtitle:
                "คัดเลือกกองทุนที่เหมาะกับเป้าหมายและระดับ ความเสี่ยงที่รับได้ของแต่ละคนโดยเฉพาะ",
        },
        {
            img: "/image/icon/phone.svg",
            title: "มีระบบอัจฉริยะติดตามแผนลงทุน",
            subtitle: "คอยแจ้งเตือนปรับแผนให้เหมาะสมกับสภาวะตลาดขณะนั้น ๆ",
        },
        {
            img: "/image/icon/group_coin.svg",
            title: "แผนลงทุนเริ่มต้นเพียง 1,000 บาท",
            subtitle: `เริ่มสร้างแผนการลงทุนได้ด้วยตัวเอง\nกำหนดเงินลงทุนเริ่มต้นเองได้ เริ่มง่ายๆ ได้ทันที`,
        },
        {
            img: "/image/icon/cash.svg",
            title: "ไม่มีค่าธรรมเนียมบริการเพิ่มเติม",
            subtitle: "จากค่าธรรมเนียมของการซื้อขายกองทุน",
        },
        {
            img: "/image/icon/document.svg",
            title: "สมัครง่าย ไม่ต้องมีเอกสาร",
            subtitle: "เปิดบัญชีสร้างแผนได้ทันทีบน Wealth PLUS",
        },
    ];

    const mock_card_data = [
        {
            img: "/image/home/Card_1.png",
            text: "เพื่อการออมเงิน",
        },
        {
            img: "/image/home/Card_2.png",
            text: "เพื่อการลดหย่อนภาษี",
        },
        {
            img: "/image/home/Card_3.png",
            text: "เพื่อการเกษียณ",
        },
        {
            img: "/image/home/Card_4.png",
            text: "เพื่อธุรกิจ",
        },
    ];

    const state = useSelector((state) => state.home);
    const { scroll_now } = state;
    const setState = useDispatch();

    const sec1_ref = useRef(null);
    const sec2_ref = useRef(null);
    const sec3_ref = useRef(null);

    const handleScroll = () => {
        if (sec2_ref.current) {
            const rect = sec2_ref.current.getBoundingClientRect();
            const elementTop = rect.top + window.scrollY;
            const window_now = window.scrollY;

            if (
                window_now >= elementTop - 0.5 &&
                window_now <= elementTop + rect.height
            ) {
                setState(updateData({ key: "scroll_now", value: true }));
            } else {
                setState(updateData({ key: "scroll_now", value: false }));
            }
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        console.log("state", state);
    }, [state]);

    return (
        <>
            <div className={css.container}>
                <div
                    id="section_view1"
                    className="layout_container sec1"
                    ref={sec1_ref}
                >
                    <div className="inner">
                        <div className="box_bg_1">
                            <img
                                className="img_bg_1"
                                src="/image/home/background_ball.png"
                            />
                        </div>
                        <div className="box_bg_2">
                            <img
                                className="img_bg_2"
                                src="/image/icon/Ellipse 1.svg"
                            />
                        </div>
                        <div className="box_bg_3">
                            <img
                                className="img_bg_3"
                                src="/image/icon/Ellipse 2.svg"
                            />
                        </div>
                        <div className="sec1">
                            <div className="sec1_text">
                                <div className="group_title">
                                    <div className="ic_crown"></div>
                                    <div className="subtext">Best Solution</div>
                                </div>
                                <div className="sec1_title" data-font={"bol"}>
                                    Wealth PLUS
                                </div>
                                <div className="sec1_subtitle">
                                    ตัวช่วยที่ทำให้การลงทุนเป็นเรื่องง่ายสำหรับคุณ
                                </div>
                            </div>
                            <div className="sec1_img">
                                <img
                                    className="img"
                                    src="/image/home/human.png"
                                />
                                <img
                                    className="img_2"
                                    src="/image/home/background_ball_2.png"
                                />
                                <img
                                    className="img_animete coin"
                                    src="/image/icon/coin.svg"
                                />
                                <img
                                    className="img_animete coin_small"
                                    src="/image/icon/coin_2.svg"
                                />
                                <img
                                    className="img_animete coin_blur"
                                    src="/image/icon/blur_coin.svg"
                                />
                                <img
                                    className="img_animete coin_ball_line"
                                    src="/image/icon/ball line.svg"
                                />
                                <img
                                    className="img_animete coin_ball_heart"
                                    src="/image/icon/heart_ball.svg"
                                />
                                <img
                                    className="img_animete coin_ball_heart_big"
                                    src="/image/icon/heart_ball.svg"
                                />
                                <img
                                    className="img_animete coin_ball_heart_small"
                                    src="/image/icon/heart_ball.svg"
                                />
                            </div>
                        </div>
                        <div className="sec2">
                            <div className="group_text">
                                <div
                                    className="text_content top"
                                    data-font={"bol"}
                                >
                                    รู้จัก Wealth PLUS
                                </div>
                                <div
                                    className="text_content mid"
                                    data-font={"bol"}
                                >
                                    Wealth PLUS เป็นหนึ่งในตัวช่วย
                                    <br />‘ การลงทุนแบบอัตโนมัติ ’
                                </div>
                                <div className="text_content bot">
                                    โดยที่จะช่วยวางแผนการลงทุน
                                    และคัดเลือกกองทุนที่เหมาะสมกับเราตาม
                                    ‘เป้าหมาย’
                                    <br />
                                    ‘ระยะเวลา’ และ ‘ระดับความเสี่ยง’
                                    ที่เรายอมรับได้
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    id="section_view2"
                    className="layout_container sec2"
                    ref={sec2_ref}
                >
                    <div className="line_circle line1">
                        <img src="/image/icon/line-linear.svg" />
                    </div>
                    <div className="line_circle line2">
                        <img src="/image/icon/line-linear.svg" />
                    </div>
                    <div className="line_circle line3">
                        <img src="/image/icon/line-linear.svg" />
                    </div>

                    <div className="group_content">
                        <div className="group_text" data-font={"bol"}>
                            <div className="subtitle">จุดเด่น</div>
                            <div className="title">
                                Wealth PLUS ช่วยอะไรบ้าง?
                            </div>
                        </div>
                        <div className="group_content">
                            {mock_data &&
                                mock_data.map((data, i) => {
                                    return (
                                        <CardHighlight
                                            key={i}
                                            img={data.img}
                                            title={data.title}
                                            subtitle={data.subtitle}
                                        />
                                    );
                                })}
                        </div>
                    </div>
                </div>
                <div
                    id="section_view3"
                    className="layout_container sec3"
                    ref={sec3_ref}
                >
                    <div className="bg">
                        <img src={`/image/home/background_sec3.png`} />
                    </div>
                    <div className="group_text" data-font={`bol`}>
                        <div className="subtitle">แผนการลงทุน</div>
                        <div className="title">เลือกเป้าหมายที่คุณสนใจ</div>
                    </div>
                    <div className="contianer_card">
                        {mock_card_data.map((data, i) => {
                            return (
                                <Card_goal
                                    key={i}
                                    img={data.img}
                                    text={data.text}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

const CardHighlight = (props) => {
    const { img, title, subtitle } = props;
    return (
        <div className="Card">
            <div className="box_img">
                <img src={img} />
            </div>
            <div className="title_card">{title}</div>
            <div className="subtitle_card">{subtitle}</div>
        </div>
    );
};

const Card_goal = ({ img, text }) => {
    return (
        <div className="container">
            <div className="group_img">
                <img src={img} alt="Example Image" className="image" />
                <div className="text-overlay" data-font={`bol`}>
                    {text}
                </div>
                <div className="linear"></div>
            </div>
            <div className="box_hover">
                <div className="text_hover">สร้างแผนเลย</div>
                <div className="ic_arrow">
                    <img src="/image/icon/arrow.svg" />
                </div>
            </div>
        </div>
    );
};
