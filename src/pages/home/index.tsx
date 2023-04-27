import Header from "../../components/header";
import {Container} from "../../components/container";
import {Footer} from "../../components/foot";
import Link from "next/link";


const Game = () =>{
    const List = [
        {
            img:"https://testnet.naga.io/build/12Illuvium-edd0d01c.png",
            name:"Illuvium",
            h1:"Illuvium is an upcoming open-world RPG that bears some similarities to Pokemon, in that",
        },
        {
            img:"https://testnet.naga.io/build/most2-7525e9ab.png",
            name:"Illuvium",
            h1:"Illuvium is an upcoming open-world RPG that bears some similarities to Pokemon, in that",
        },
        {
            img:"https://testnet.naga.io/build/21The%20Harvest-5beb47a3.png",
            name:"Illuvium",
            h1:"Illuvium is an upcoming open-world RPG that bears some similarities to Pokemon, in that",
        },
        {
            img:"https://testnet.naga.io/build/22%20The%20Beacon-c950f9bc.png",
            name:"Illuvium",
            h1:"Illuvium is an upcoming open-world RPG that bears some similarities to Pokemon, in that",
        },
        {
            img:"https://testnet.naga.io/build/news4-f3af4292.png",
            name:"Illuvium",
            h1:"Illuvium is an upcoming open-world RPG that bears some similarities to Pokemon, in that",
        },
    ]
    return(
        <>
            <Container className="">

            <div className="text-white text-2xl font-semibold ">
                New Game
            </div>
                <div className="w-full flex  overflow-x-auto xl:overflow-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full  mt-5">
            <div className=" flex xl:grid gap-5 xl:grid-cols-5 ml-5 xl:ml-0">
                {List.map(item=>(
                    <Link key={item.name} legacyBehavior href="/project">
                        <a className="rounded-lg snap-always snap-center w-90 xl:w-full ">
                        <div className="overflow-hidden rounded-t-lg">
                        <img className=" hover:scale-110 duration-700" src={item.img} alt=""/>
                        </div>
                        <div className="p-5 bg-[#252424] text-white">
                        <div className=" text-xl font-semibold mb-5">{item.name}</div>
                        <div className="line-clamp-2 font-extralight text-gray-300">
                            {item.h1}
                        </div>
                        </div>
                        </a>
                    </Link>
                ))}
            </div>
            </div>

            </Container>
        </>
    )
}

const Home = () =>{

    return (
        <div className="bg-[#0B0B0B] ">

            <Header/>

            <div className="pt-24">
                <Game/>

                <Game/>


            </div>
            <Footer/>
        </div>
    )
}

export default Home


