const Square = ({ value, onClick }) => {
    return (
      <button
        className="w-24 h-24 bg-white border-4 border-gray-800 text-4xl font-bold text-red-600 focus:outline-none hover:border-black"
        onClick={onClick}
      >
        {value}
      </button>
    );
  }

  export default Square