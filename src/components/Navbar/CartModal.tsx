export const CartModal = () => {
  return (
    <div className="flex flex-col absolute z-10 w-[95%] h-72 -translate-x-1/2 bg-white rounded-xl shadow-lg left-1/2 -bottom-[18.5rem] md:w-96 md:left-auto md:right-0 md:translate-x-0">
      <b className="block p-6 border-b">Cart</b>
      <div className="grid flex-grow p-6 place-content-center">
        <p className="font-black text-blue-dark-grayish">Your cart is empty.</p>
      </div>
    </div>
  );
};
