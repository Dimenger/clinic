import { IMaskInput } from "react-imask";
import styles from "./request.module.css";

export const RequestLayout = ({
  firstname,
  surname,
  phone,
  description,
  setFirstname,
  setSurname,
  setPhone,
  setDescription,
  isSending,
  isSent,
  handleSendRequest,
}) => {
  return (
    <div className={styles.form_container}>
      <h2
        className={`${styles.message} ${isSent ? styles.messageVisible : ""}`}
        aria-live="polite"
      >
        Ваше сообщение отправлено!
      </h2>

      <form className={styles.form} onSubmit={handleSendRequest} noValidate>
        <h1 className={styles.title}>Запись к врачу</h1>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Клиент</legend>

          <div className={styles.row}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>
                Имя
              </label>
              <input
                name="name"
                id="name"
                type="text"
                value={firstname}
                placeholder="Имя"
                onChange={(e) => setFirstname(e.target.value.trim())}
                className={styles.input}
                autoComplete="given-name"
                required
              />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="surname" className={styles.label}>
                Фамилия
              </label>
              <input
                name="surname"
                id="surname"
                type="text"
                value={surname}
                placeholder="Фамилия"
                onChange={(e) => setSurname(e.target.value.trim())}
                className={styles.input}
                autoComplete="family-name"
                required
              />
            </div>
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Телефон</legend>

          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>
              Телефон
            </label>
            <IMaskInput
              mask="000 000-00-00"
              value={phone}
              unmask={false}
              onAccept={(val) => setPhone(val)}
              placeholder="999 999-99-99"
              id="phone"
              name="phone"
              inputMode="tel"
              className={styles.input}
              required
            />
          </div>
        </fieldset>

        <fieldset className={styles.fieldset}>
          <legend className={styles.legend}>Ваше обращение</legend>

          <div className={styles.inputGroup}>
            <label htmlFor="request" className={styles.label}>
              Обращение
            </label>
            <textarea
              name="request"
              id="request"
              rows={6}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={styles.textarea}
              placeholder="Опишите вашу проблему или вопрос"
              required
            />
          </div>
        </fieldset>

        <button type="submit" className={styles.submit} disabled={isSending}>
          {isSending ? "Отправка..." : "Отправить данные"}
        </button>
      </form>
    </div>
  );
};
