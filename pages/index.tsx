/* This example requires Tailwind CSS v3.0+ */
import Link from 'next/link';
import SingleShop from '../components/shops/SingleShop'
const popularCoffeeShops = [
    {
        id: 1,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },
    {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
    },

]

export default function Home() {

    return (
        <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-5xl pt-20 pb-32 sm:pt-48 sm:pb-20">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                            Explore Coffee <span className="text-indigo-600">with us</span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
                            {/* write some description about coffee shop  */}
                            CoffeeHub is a coffee shop that is located in the heart of the city. We have a wide variety of coffee and tea. We also have a variety of snacks and desserts. We are open 24/7.
                        </p>
                        <div className="mt-8 flex gap-x-4 sm:justify-center">
                            <Link
                                href="/shop"
                                className="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700"
                            >
                                Explore Coffee Shops Near You {' '}
                                <span className="text-indigo-200" aria-hidden="true">
                                    &rarr;
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                        <svg
                            className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
                            viewBox="0 0 1155 678"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                                fillOpacity=".3"
                                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                            />
                            <defs>
                                <linearGradient
                                    id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                                    x1="1155.49"
                                    x2="-78.208"
                                    y1=".177"
                                    y2="474.645"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#9089FC" />
                                    <stop offset={1} stopColor="#FF80B5" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
            {/* Popular coffee shops section */}
            <div className="mx-auto max-w-5xl pb-12 sm:pb-16">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Popular Coffee Shops</h2>
                <p className="mt-2 text-sm text-gray-600">Explore the most popular coffee shops in your area.</p>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {popularCoffeeShops.map((product) => (
                        <SingleShop key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}
