import './styles/WhatsAppButton.css';

function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/+573137992069"; // Reemplaza con tu número de WhatsApp

  return (
    <a
      href={whatsappUrl}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="WhatsApp"
      />
      ¿Como puedo ayudarte?
    </a>
  );
}

export default WhatsAppButton;
