const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/917409164070?text=Hi%20MS21%20Furnitures,%20I%20am%20interested%20in%20your%20furniture."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-green-500 hover:bg-green-600
        text-white font-semibold
        px-4 py-3
        rounded-full shadow-lg
        transition-all duration-300
      "
    >
      <img
        src="/images/whatsapp.svg"
        alt="WhatsApp"
        className="w-6 h-6"
      />
      Chat on WhatsApp
    </a>
  );
};

export default WhatsAppButton;
