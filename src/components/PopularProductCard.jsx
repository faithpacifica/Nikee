import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price }) => {
    return (
        <div className="flex flex-col flex-1 w-full max-sm:w-full">
            <img src={imgURL} alt={name} className="w-[280px] h-[280px]" />
            <div className="flex justify-start mt-1 gap-2.5 ">
                <img src={star} alt="rating" width={24} height={24} />
                <span className="text-xl leading-normal text-slate-gray font-montserrat">4.5</span>
            </div>
            <h3 className='mt-2 text-xl font-semibold leading-normal font-palanquin'>
                {name}
            </h3>
            <p className='mt-2 font-semibold leading-normal text-2l font-montserrat text-coral-red'>
                {price}
            </p>
        </div>
    )
}

export default PopularProductCard