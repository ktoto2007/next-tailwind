import Image from "next/image";

type CardProps = {
    id: number;
    image: string;
    title: string;
    description: string;
    price: number;
}

export const Card = (props: CardProps) => {
    return (
        <div className="bg-white w-[250px] h-[380px] rounded-3xl pt-5 pl-5 text-black relative">
            <div className="flex justify-center items-center h-[200] w-[200] bg-[#EFEFEF] rounded-3xl">
                <Image src={props.image} alt="" height={120} width={120}/>
            </div>
            <h1 className="font-bold text-[20px]">{props.title}</h1>
            <p className="text-gray-700 text-sm">{props.description}</p>
            <p className="text-gray-700 mt-2">{props.price} ₽</p>
            <button className="bg-[#02578A] h-9 w-32 text-white rounded-full text-xs mt-2 cursor-pointer absolute bottom-3">В КОРЗИНУ</button>
        </div>
    )
}