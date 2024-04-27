import Contact from "../Contact/Contact";

export default function ContactList({ data, handleDeleteContact}) {
  return (
    <ul>
      {data.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact data={contact} handleDeleteContact={handleDeleteContact}/>
          </li>
        );
      })}
    </ul>
  );
}