import Header from "../../components/header";
import {Container} from "../../components/container";
import {Footer} from "../../components/foot";
import Link from "next/link";
import {useEffect, useState} from "react";


const Game = (props) =>{

    const List = [
        {
            id:"",
            img:"",
            name:"",
            description:"",
        },
    ]
    const [list,setList] = useState(List)
    useEffect(()=>{
        setList(JSON.parse(props.data))

    },[])

    return(
        <>
            <Container className="">

            <div className="text-white text-2xl font-semibold ">
                New Game
            </div>
                <div className="w-full flex  overflow-x-auto xl:overflow-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full  mt-5">
            <div className=" flex xl:grid gap-5 xl:grid-cols-5 ml-5 xl:ml-0">
                {list.map(item=>(
                    <Link key={item.name} legacyBehavior href={`/project/${item.id}`}>
                        <a className="rounded-lg overflow-hidden snap-always snap-center w-90 xl:w-full ">
                        <div className="overflow-hidden rounded-t-lg">
                        <img className=" hover:scale-110 duration-700  h-56" src={item.img} alt=""/>
                        </div>
                        <div className="p-5 bg-[#252424] text-white">
                        <div className=" text-xl font-semibold mb-5">{item.name}</div>
                        <div className="line-clamp-2 font-extralight text-gray-300">
                            {item.description}
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

const Home = (props) =>{
    return (
        <div className="bg-[#0B0B0B] ">

            <Header/>

            <div className="pt-24">
                <Game data = {props.data.project_details}/>




            </div>
            <Footer/>
        </div>
    )
}

export default Home


