import useCart from "../hooks/useCart";

type PropsType = {
  viewCart: boolean;
};

const Footer = ({ viewCart }: PropsType) => {
  const { totalItems, totalPrice } = useCart();

  const year: number = new Date().getFullYear();

  const pageContent = (
    <footer>
      <div className="footer">
        <div>
          <p>Total Items: {totalItems}</p>
          <p>Total Price: {totalPrice} </p>
        </div>
      </div>
    </footer>
  );
  return pageContent;
};

export default Footer;
