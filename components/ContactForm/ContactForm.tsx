import classNames from "classnames";
import styles from "./ContactForm.module.scss";
import HeroCTA from "../Hero/HeroCTA";
import Form from "next/form";

const Contact = () => {
  return (
    <section className={classNames(styles.contactContent, "container")}>
      <div className={styles.contactCard}>
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <div className="row">
          <div className="col-md-6">
            <h3>Get in touch with me</h3>
            <p>
              I’m currently available to take on new projects, so feel free to
              send me a message about anything that you want to run past me.
            </p>
          </div>
          <div className={classNames("col-md-6 bg-light", styles.ContactForm)}>
            <Form className={styles.form} action="/">
            <div className={classNames('form-group', styles.formGroup)}>
                <input
                  type="text"
                  className={classNames("form-control", styles.formControl)}
                  id="formGroupExampleInput"
                  placeholder="Example input"
                />
              </div>
              <div className={classNames('form-group', styles.formGroup)}>
                <input
                  type="text"
                  className={classNames("form-control", styles.formControl)}
                  id="formGroupExampleInput2"
                  placeholder="Another input"
                />
              </div>
              <div className={classNames('form-group', styles.formGroup)}>
                <textarea
                  className={classNames("form-control", styles.formControl)}
                  id="exampleFormControlTextarea1"
                ></textarea>
              </div>
              <div className={classNames('form-group', styles.formGroup)}>
                <HeroCTA />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
