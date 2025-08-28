function Closing({ text, className }) {
  return (
    <header
      className={`bg-gray-200 text-center py-4 text-xl font-bold ${className}`}
    >
      {text}
    </header>
  );
}

export default Closing;
