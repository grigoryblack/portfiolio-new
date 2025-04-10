import styles from "./Contatcts.module.scss";

const Contacts = () => {
  return (
    <section className={styles.wrapper} id="contacts">
      <div className={styles.container}>
        <h2>Contacts</h2>
        <div className={styles.contacts}>
          <div className={styles.contacts__block}>
            <h3>Text me!</h3>
            <p>
              I am looking for new proposals and interesting projects, contact
              me and we will discuss your ideas together.
            </p>
          </div>
          <div className={styles.contacts__block}>
            <p>
              Telegram:{" "}
               <a target="_blank"  href="https://t.me/Grigory_Dr">
                @Grigory_Dr
              </a>
            </p>
            <p>
              Instagram:{" "}
              <a target="_blank" href="https://www.instagram.com/mask.bright?igsh=MW9rZzZ3OHVlbzIxdg%3D%3D&utm_source=qr">
                @mask.bright
              </a>
            </p>
            <p>
              <a target="_blank"  href="https://hh.ru/resume/0d27f781ff0da6ecb50039ed1f4b3858396458?from=share_ios">
                My resume on HH.ru always here!
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
