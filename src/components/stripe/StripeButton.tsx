import StripeCheckout from 'react-stripe-checkout';
import CustomButton from '../customButton/CustomButton';

interface StripeCheckoutButtonProps {
  price: number;
}

const StripeCheckoutButton = ({ price }: StripeCheckoutButtonProps) => {
  const convertedPrice = price * 100;
  const publicKey =
    'pk_test_51KPOfeKQgVrdpQdEt92BJGVG6SmgxVsJ3L5pfT605LcArudsw2fHuEAo6UcpY73fonNVziflj8lkIDAGBJmSNXgK00m6IACyYO';

  const onToken = (token: any) => {
    alert('Pagamento realizado com sucesso');
  };

  return (
    <StripeCheckout
      token={onToken}
      stripeKey={publicKey}
      name='fStore'
      description='A sua loja online'
      image='https://stripe.com/img/documentation/checkout/marketplace.png'
      email='felixpereira538@gmail.com'
      amount={convertedPrice}
      label='Comprar agora'
      panelLabel={`Pagar ${price} kz`}
      currency='AOA'
      shippingAddress
    >
      <CustomButton productBtn>Pagar agora</CustomButton>
    </StripeCheckout>
  );
};

export default StripeCheckoutButton;