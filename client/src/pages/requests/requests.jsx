import { useState, useEffect } from "react";
import { ControlPanel } from "../../components/control-panel/conrtol-panel";

import styles from "./requests.module.css";

export const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("http://localhost:3000/request/requests", {
        credentials: "include",
      })
        .then((res) => res.json())
        .then((requestsData) => {
          setRequests(requestsData);
          setLoading(false);
        });
    } catch (err) {
      console.error("Ошибка:", err);
    }
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
        <div>Загрузка...</div>
      </div>
    );
  }

  return (
    <div className={styles.requestContainer}>
      <ControlPanel />
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <caption className={styles.caption}>Заявки с формы</caption>
          <thead>
            <tr>
              <th>Дата отправки</th>
              <th>Время отправки</th>
              <th>ФИО</th>
              <th>Телефон</th>
              <th>Проблема</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(({ id, date, time, name, phone, description }) => (
              <tr key={id}>
                <td>{date}</td>
                <td>{time}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td>{description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
