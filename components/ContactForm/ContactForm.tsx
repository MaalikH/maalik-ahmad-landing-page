import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Props {
  content: {
    title: string;
    description: string;
  };
}

const Contact = ({ content }: Props) => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className={styles.contactContent}>
      <div className={styles.contactCard}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={styles.title}>{content.title}</h3>
          <p className={styles.description}>{content.description}</p>
        </motion.div>
        
        <motion.div 
          className={styles.ContactForm}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.formGroupContainer}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                />
              </div>
              <div className={styles.formGroup}>
                <input
                  type="email"
                  placeholder="Your Email"
                  {...register("email", { required: true })}
                />
              </div>
            </div>
            <div className={styles.formGroup}>
              <textarea
                placeholder="Your Message"
                {...register("message", { required: true })}
              />
            </div>
            <button type="submit" className={styles.CTAButtonPrimary}>
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
