//一個React元件會有的特徵

//1.必須要是一個function(函式)
//2.必須要回傳一個長的像HTML的東西(jsx)

//輸出元件讓其他檔案可以使用
export default function TripCard({ trip }) {
    const { discountPrice, isDiscounted, name, image, price } = trip;

    return (

        <div className='shadow-xl shadow-neutral-900/200 rounded-xl overflow-hidden'>
            <img className="w-full" src={image} alt={name} />
            <div className='p-3'>
                <h2 className="text-indigo-500">{name}</h2>
                <p className="text-neutral-500">$
                    {
                        isDiscounted ?
                            <>
                                <span className="text-orange-500 font-bold mx-1">{discountPrice}</span>
                                <span className="line-through mr-1 opacity-50">{price}</span>
                            </>
                            :
                            <span className="mx-1">{price}</span>
                    }
                    NT</p>
            </div>
        </div>

    )

}

