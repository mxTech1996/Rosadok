import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';

const products = dataSite.products;
export default function OnlineShopSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='shop' className='px-4 py-16 text-center'>
      <h2 className='text-4xl font-bold mb-4'>Online Shop</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-28'>
        {products.map((product) => {
          const isInCart = validateProductInCart(product.id);
          const handleClick = () => {
            handleAddOrRemoveProduct(product.id);
          };
          return (
            <div
              key={product.id}
              className='border rounded-lg p-4 text-center shadow-sm hover:shadow-md transition'
            >
              <div className='w-full h-48 relative mb-4'>
                <Image
                  src={product.image}
                  alt={product.name}
                  layout='fill'
                  objectFit='contain'
                />
              </div>
              <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
              <p className='text-sm text-gray-600 mb-4'>
                {product.description}
              </p>
              <p className='text-lg font-semibold text-red-500 mb-4'>
                $ {product.price}
              </p>
              <button
                onClick={handleClick}
                className={`${
                  isInCart
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-blue-500 hover:bg-blue-600'
                } text-white rounded-full px-6 py-2 font-semibold text-sm transition`}
              >
                {isInCart ? 'Remove from Cart' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>

      <div className='mt-12'></div>
    </section>
  );
}
