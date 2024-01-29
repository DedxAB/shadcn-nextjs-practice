const Card = ({ children }) => {
  return (
    <div className="h-28 w-32 border-2 items-center text-center m-auto flex justify-center">
      {children}
    </div>
  );
};

export default Card;
