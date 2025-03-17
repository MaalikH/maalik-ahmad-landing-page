import { useForm } from "react-hook-form";
import classNames from "classnames";
import styles from "./ContactForm.module.scss";
import { motion } from "framer-motion";

interface Content {
  title: string;
  description: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}
interface Props {
  content: Content;
}

const Contact = ({ content }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("message", data.message);

    try {
      await fetch("https://formsubmit.co/maalikahmadtech@gmail.com", {
        method: "POST",
        body: formData,
      });

      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      className={classNames(styles.contactContent, "container")}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={styles.contactCard}>
        <h1 className={styles.contactTitle}>Contact Me</h1>
        <div className="row">
          <motion.div
            className="col-md-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          >
            <h3>{content.title}</h3>
            <p>{content.description}</p>
          </motion.div>

          <motion.div
            className={classNames("col-md-6", styles.ContactForm)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
              <motion.div
              className={styles.formGroupContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
              >
                <motion.div className={classNames("form-group", styles.formGroup)} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className={classNames("form-control", styles.formControl)}
                    placeholder="Your Name"
                  />
                  {errors.name && <p className={styles.error}>{String(errors.name.message)}</p>}
                </motion.div>

                <motion.div className={classNames("form-group", styles.formGroup)} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email format" },
                    })}
                    className={classNames("form-control", styles.formControl)}
                    placeholder="Your Email"
                  />
                  {errors.email && <p className={styles.error}>{String(errors.email.message)}</p>}
                </motion.div>

                <motion.div className={classNames("form-group", styles.formGroup)} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    className={classNames("form-control", styles.formControl)}
                    placeholder="Your Message"
                  ></textarea>
                  {errors.message && <p className={styles.error}>{String(errors.message.message)}</p>}
                </motion.div>
              </motion.div>

              <motion.div className={classNames("form-group", styles.formGroup)}>
                <motion.button
                  type="submit"
                  className={classNames("btn", styles.CTAButtonPrimary)}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
