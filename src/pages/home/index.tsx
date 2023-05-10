import Header from "../../components/header";
import {Container} from "../../components/container";
import {Footer} from "../../components/foot";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


import {Autoplay, FreeMode, Navigation, Thumbs} from "swiper";

const Hero = (props) =>{
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

        console.log(JSON.parse(props.data))
    },[])
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return(
        <>
            <Container className="">
                <Swiper
                    loop={true}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay,FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {list.map(item=>(
                        <SwiperSlide key={item.img}>
                            <div className="relative w-full xl:h-104">
                                <div className="absolute text-white bottom-10 left-10">
                                    <div className="mb-10 text-4xl font-semibold text-white">
                                        {item.name}
                                    </div>
                                    <div className="mb-10 w-60 line-clamp-3">
                                        {item.description}
                                    </div>
                                    <Link className="rounded-full  bg-[#363636]/60 border border-[#3459D9] px-10 py-2.5" href={`project/${item.id}`}>
                                     PLAY NOW
                                    </Link>
                                </div>
                            <img className=" w-full xl:h-104 rounded-lg" src={item.img} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    loop={true}
                    spaceBetween={10}
                    slidesPerView={5}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper mt-3"
                >
                    {list.map(item=>(
                        <SwiperSlide key={item.img}>
                            <img className="w-full h-32 rounded-lg" src={item.img} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <style >
                    {`.swiper-button-next,
                          .swiper-button-prev {
                            border-radius: 9999px;                  
                          padding:1.5rem;
                          color: #fff !important;
                          }  
                          .swiper-button-prev:after, .swiper-button-next:after {
                            font-size: 1.5rem!important;
                          }
                        
                          .mySwiper .swiper-slide {
                          width: 25%;
                          height: 100%;
                          opacity: 0.4;
                          }
                          .mySwiper .swiper-slide-thumb-active {
                          opacity: 1;
                          }
                          `}
                </style>

                <div className="flex justify-between mt-4 bg-[#242B3C] px-8 py-5 rounded-lg">
                    <div className=" font-semibold text-[#6B779B] font-semibold">
                        If you have found a better project or would like to give us any feedback,<br/> please click on the button on the right to fill it out!
                    </div>
                    <button className="rounded-lg px-5 py-3 text-white bg-blue-500">
                        Opinion Bucket
                    </button>

                </div>

            </Container>

        </>
    )
}

const Projects = (props) =>{

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
            <Container className="mt-14">

                <div className="flex justify-between">
                    <div className="text-white text-2xl font-semibold ">
                        Popular Projects
                    </div>
                    <Link href="" legacyBehavior>
                        <a  className="text-[#3376EA] font-semibold">
                            View All {'>'}
                        </a>
                    </Link>
                </div>

                <div className="w-full flex  overflow-x-auto xl:overflow-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full  mt-5">
            <div className="flex xl:grid gap-5 xl:grid-cols-5 ml-5 xl:ml-0">
                {list.map((item,index)=>(
                    <Link key={item.name} legacyBehavior href={`/project/${item.id}`} >
                        <a className={index+1>5?'hidden':"rounded-lg overflow-hidden snap-always snap-center w-90 xl:w-full p-1.5 bg-[#242B3C]"}>
                        <div className="overflow-hidden rounded-t-lg">
                        <img className=" hover:scale-110 duration-700 xl:h-40 2xl:h-52" src={item.img} alt=""/>
                        </div>
                        <div className="p-5  text-white">
                        <div className=" text-xl font-semibold mb-5 text-center">{item.name}</div>
                        <div className="line-clamp-3 text-center font-extralight text-gray-300">
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

const News = (props) =>{

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
            <Container className="mt-14">

                <div className="flex justify-between">
                    <div className="text-white text-2xl font-semibold ">
                       NEWS
                    </div>
                    <Link href="" legacyBehavior>
                        <a  className="text-[#3376EA] font-semibold">
                            View All {'>'}
                        </a>
                    </Link>
                </div>

                <div className="w-full flex  overflow-x-auto xl:overflow-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full  mt-5">
                    <div className="flex xl:grid gap-5 xl:grid-cols-2 ml-5 xl:ml-0">
                        {list.map((item,index)=>(
                            <Link key={item.name} legacyBehavior href={`/new/${item.id}`} >
                                <a className={index+1>4?'hidden':"relative rounded-lg overflow-hidden snap-always snap-center w-90 xl:w-full p-1.5 bg-[#242B3C] flex"}>
                                    <div className="overflow-hidden rounded-lg w-full">
                                        <img className=" w-full h-full" src={item.img} alt=""/>
                                    </div>
                                    <div className="p-3  text-white w-7/12">
                                        <div className="flex items-center">
                                            <img className="rounded-full w-8 h-8 mr-2" src="/logo.svg" alt=""/>
                                            <div>
                                                <div className="flex items-center">
                                                    <div className="font-semibold mr-2">
                                                        Maya
                                                    </div>
                                                    <div className="w-6 h-6 text-center bg-blue-400 rounded-full">
                                                        <i className="fa fa-check " aria-hidden="true" />
                                                    </div>

                                                </div>
                                                <div className="text-xs mt-0.5 text-[#6B779B]">
                                                    Mytheria new
                                                </div>

                                            </div>

                                        </div>
                                        <div className="line-clamp-2 text-xl font-semibold my-2 ">{item.name}</div>
                                        <div className="line-clamp-3  font-extralight text-gray-300">
                                            {item.description}
                                        </div>
                                        <div className=" absolute bottom-2 right-5 text-[#4B5773] text-sm">
                                            04-26 11:23
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

const NewProjects = (props) =>{

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
            <Container className="mt-14">

                <div className="flex justify-between">
                    <div className="text-white text-2xl font-semibold ">
                        Popular Projects
                    </div>
                    <Link href="" legacyBehavior>
                        <a  className="text-[#3376EA] font-semibold">
                            View All {'>'}
                        </a>
                    </Link>
                </div>

                <div className="w-full flex  overflow-x-auto xl:overflow-hidden snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-600 scrollbar-thumb-rounded-full  mt-5">
                    <div className="flex xl:grid gap-5 xl:grid-cols-5 ml-5 xl:ml-0">
                        {list.map((item,index)=>(
                            <Link key={item.name} legacyBehavior href={`/project/${item.id}`} >
                                <a className={index+1>5?'hidden':"rounded-lg overflow-hidden snap-always snap-center w-90 xl:w-full p-1.5 bg-[#242B3C]"}>
                                    <div className="overflow-hidden rounded-t-lg">
                                        <img className=" hover:scale-110 duration-700 xl:h-40 2xl:h-52" src={item.img} alt=""/>
                                    </div>
                                    <div className="p-5  text-white">
                                        <div className=" text-xl font-semibold mb-5 text-center">{item.name}</div>
                                        <div className="line-clamp-3 text-center font-extralight text-gray-300">
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

const Community = () =>{
    return(
        <>
            <Container className="my-32 ">
                <div className="text-2xl text-white flex justify-center font-semibold">
                    Join our community for more information
                </div>
                <div className="mt-20 flex justify-center gap-10">

                    <Link href="" className="flex justify-center gap-4 bg-[#5762E3] text-white w-60 py-3 rounded-xl font-[400]">

                        <img src="/discord.svg" alt=""/>
                        Join Discord

                    </Link>

                    <Link href="" className="flex justify-center gap-4 bg-[#58A8DA] text-white w-60 py-3 rounded-xl font-[400]">

                        <img src="/telegram.svg" alt=""/>
                        Join Telegram

                    </Link>

                </div>

                </Container>
        </>
    )
}

const Home = (data) =>{
    return (
        <div className="bg-[#0B0B0B] ">

            <Header/>

            <div className="pt-24">
                <Hero data = {data.props?.project_details}/>


                <Projects data = {data.props?.project_details}/>

                <News data = {data.props?.project_details}/>

                <NewProjects data = {data.props?.project_details}/>

                <Community/>

            </div>
            <Footer/>
        </div>
    )
}

export default Home


