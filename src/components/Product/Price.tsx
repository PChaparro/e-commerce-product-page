interface PriceProps {
  price: number;
  discount?: number;
}

export const Price = ({ price, discount = 0 }: PriceProps) => {
  const finalPrice = price - (price * discount) / 100;

  const getFormattedPrice = (price: number): string => {
    return price.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <div className="flex items-center justify-between gap-4 md:flex-col md:items-start md:gap-2">
      <p className="flex items-center gap-4">
        <b className="text-3xl">${getFormattedPrice(finalPrice)}</b>
        {discount && (
          <span className="px-2 text-lg font-bold rounded-md bg-orange-pale text-orange-normal">
            {discount}%
          </span>
        )}
      </p>
      {discount && (
        <span className="text-lg font-bold line-through text-blue-grayish">
          ${getFormattedPrice(price)}
        </span>
      )}
    </div>
  );
};
