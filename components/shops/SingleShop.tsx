import Image from 'next/image'
import Link from 'next/link';

export default function SingleShop(props: any) {
    const product = props.product;
    return (
        <div key={product.id} className="group relative">
            {/* Link to product page */}
            <Link href={`/shop/${product.id}`}>
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-4 flex justify-between">
                    <div>
                        <h3 className="text-sm text-gray-700">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
            </Link>
        </div >
    )
}
