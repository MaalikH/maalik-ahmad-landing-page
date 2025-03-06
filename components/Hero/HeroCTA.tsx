import classNames from "classnames";
import styles from "./Hero.module.scss";

interface HeroCTAProps {
  btnText: string;
  btnLink: string;
  btnType: string;
}

const HeroCTA = (props: HeroCTAProps) => {
  return (
    <button className={classNames("btn", styles.CTAButton, {  [styles.CTAButtonPrimary]: props.btnType === 'primary', [styles.CTAButtonSecondary]: props.btnType === 'secondary' } )} onClick={onCTAClick}>
     {props.btnText}
    </button>
  );
};


const onCTAClick = () => {
    console.log("CTA Clicked");
} 

export default HeroCTA;
