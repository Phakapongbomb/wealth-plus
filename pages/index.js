import Head from "next/head";
import Image from "next/image";
import css from "../public/css/home.module.css"

export default function Home() {
    return (
        <>
            <div className={css.container}>
                <div className="sec1">
                    <div className="sec1_text">
                        <div className="group_title">
                            <div className="ic_crown"></div>
                            <div className="subtext">Best Solution</div>
                        </div>
                        <div className="sec1_title" data-font={'bol'}>Wealth PLUS</div>
                        <div className="sec1_subtitle">ตัวช่วยที่ทำให้การลงทุนเป็นเรื่องง่ายสำหรับคุณ</div>
                    </div>
                    <div className="sec1_img">
                        <img className="img" src="/image/home/human.png"/>
                    </div>
                </div>
            </div>
        </>
    );
}
