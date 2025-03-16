import classNames from "classnames";
import styles from "./Hero.module.scss";

interface HeroCTAProps {
  btnText: string;
  btnLink: string;
  btnType: string;
  sectionId: string;
}

const HeroCTA = (props: HeroCTAProps) => {
  const onCTAClick = () => {
    if (window.fullpage_api) {
      window.fullpage_api?.moveTo(props.sectionId);
    } else {
      const section = document.getElementById(props.sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  } 

  return (
    <button className={classNames("btn", styles.CTAButton, {  [styles.CTAButtonPrimary]: props.btnType === 'primary', [styles.CTAButtonSecondary]: props.btnType === 'secondary' } )} onClick={onCTAClick}>
     {props.btnText}
    </button>
  );
};




export default HeroCTA;
