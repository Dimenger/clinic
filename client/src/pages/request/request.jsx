import { RequestLayout } from "./request-layout";
import { useState } from "react";

export const Request = () => {
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const name = `${firstname} ${surname}`;
  const requestData = { name, phone, description };

  const handleSendRequest = async (e) => {
    e.preventDefault();
    setIsSent(false);
    try {
      setIsSending(true);
      const response = await fetch("http://localhost:3000/request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
        credentials: "include",
      });

      if (!response.ok) {
        throw new Error(`Статус: ${response.status}`);
      }

      const result = await response.json();
      console.log("Ответ сервера:", result);

      setFirstname("");
      setSurname("");
      setPhone("");
      setDescription("");
      setIsSent(true);

      setTimeout(() => setIsSent(false), 3000);
    } catch (error) {
      console.error("Ошибка:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <RequestLayout
      firstname={firstname}
      surname={surname}
      phone={phone}
      description={description}
      setFirstname={setFirstname}
      setSurname={setSurname}
      setPhone={setPhone}
      setDescription={setDescription}
      isSending={isSending}
      isSent={isSent}
      handleSendRequest={handleSendRequest}
    />
  );
};
