export const getCartImg = (id) => {
  switch (id) {
    case 1:
      return "/assets/cart/image-yx1-earphones.jpg";
    case 2:
      return "/assets/cart/image-xx59-headphones.jpg";
    case 3:
      return "/assets/cart/image-xx99-mark-one-headphones.jpg";
    case 4:
      return "/assets/cart/image-xx99-mark-two-headphones.jpg";
    case 5:
      return "/assets/cart/image-zx7-speaker.jpg";
    case 6:
      return "/assets/cart/image-zx9-speaker.jpg";
    default:
      return;
  }
};

export const toFixedDecimal = (num) => {
  return num.toFixed(2);
};
