import Header from "../../components/header";
import {Footer} from "../../components/foot";
import {Container} from "../../components/container";
import {Fragment, useEffect, useState} from "react";
import {
    CheckIcon,
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ChevronUpIcon
} from "@heroicons/react/20/solid";
import { Listbox, RadioGroup, Transition } from "@headlessui/react";
import router from "next/router";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const genre = [
    {  name: 'All' },
    {  name: 'DeFi' },
    {  name: 'NFT' },
    {  name: 'Gaming' },
    {  name: 'Metaverse' },
    {  name: 'Social' },
    {  name: 'DAO' },
]

const chain = [
    {  name: 'All' },
    {  name: 'BNB Chain' },
    {  name: 'Ethereum' },
    {  name: 'Polygon' },
    {  name: 'Solana' },
    {  name: 'WAX' },
    {  name: 'Avalanche' },
    {  name: 'RPG' },
    {  name: 'Fantom' },
    {  name: 'Moonbeam' },
]

const time = [
    { name: '24H'},
    { name: '7D'},
    { name: '30D'},
]

const Sort=()=>{

    const addPageCounter = async ()=>{

    }

    const decPageCounter = ()=>{

    }

    const lastPage = ()=>{

    }

    const firstPage = ()=>{

    }
    return(
        <div>
            <div className="rounded-md   mt-10 flex justify-between  my-5" aria-label="Pagination">
                <div className="flex text-white items-center">
                    Show
                    <select
                        id="select"
                        className=" block  w-13   p-1 outline-none  text-base  border border-[#7ADFD5] mx-1 sm:text-sm rounded-md text-black bg-white"
                    >
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>

                    Records

                </div>
                <div className="rounded-md   flex justify-end text-neutral-600 dark:text-white">
                    <button
                        onClick={firstPage}
                        className="relative inline-flex items-center px-2 py-2 mr-2 rounded-md  bg-[#474444]  text-sm font-semibold  "
                    >
                        <span className="">First</span>
                    </button>
                    <button
                        onClick={decPageCounter}
                        className="relative inline-flex items-center mx-2 px-2 py-2 rounded-md  bg-[#474444]  text-sm font-semibold "
                    >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <div className="  hidden lg:inline-block rounded-md  relative inline-flex items-center px-4 py-2  bg-[#474444]  text-sm font-semibold ">
                        Page 1 of 1
                    </div>
                    <button onClick={addPageCounter} className="relative inline-flex items-center mx-2 px-2 py-2 rounded-md bg-[#474444]  text-sm font-semibold ">
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                    <button
                        onClick={lastPage}
                        className="relative inline-flex items-center px-2 py-2 ml-2 rounded-md bg-[#474444]  text-sm font-semibold "
                    >
                        <span className="">Last</span>
                    </button>
                </div>

            </div>
        </div>
    )
}

const Ranking = () =>{
    const [selectedGenre, setSelectedGenre] = useState(genre[0])
    const [selectedChain, setSelectedChain] = useState(chain[0])
    const [selectedTime, setSelectedTime] = useState(time[0])
    const type = [
        {
            title:"Mkt Cap"
        },
        {
            title:"24H"
        },
        {
            title:"Token"
        },
        {
            title:"24H"
        },
        {
            title:"Volume"
        },
        {
            title:"24H"
        },
        {
            title:"Community"
        },
        {
            title:"24H"
        },
    ]

    const list = [
        {
            id:"1",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:true,data:"7.38"},
            token:"9.02",
            token24h:{state:true,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:true,data:"5.44"},
            community:"1.5M",
            community24h:{state:true,data:"0.05"},
        },
        {
            id:"2",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:false,data:"7.38"},
            token:"9.02",
            token24h:{state:false,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:false,data:"5.44"},
            community:"1.5M",
            community24h:{state:false,data:"0.05"},
        },
        {
            id:"3",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:true,data:"7.38"},
            token:"9.02",
            token24h:{state:true,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:true,data:"5.44"},
            community:"1.5M",
            community24h:{state:true,data:"0.05"},
        },
        {
            id:"4",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:false,data:"7.38"},
            token:"9.02",
            token24h:{state:true,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:false,data:"5.44"},
            community:"1.5M",
            community24h:{state:true,data:"0.05"},
        },
        {
            id:"5",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:false,data:"7.38"},
            token:"9.02",
            token24h:{state:false,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:false,data:"5.44"},
            community:"1.5M",
            community24h:{state:false,data:"0.05"},
        },
        {
            id:"6",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:true,data:"7.38"},
            token:"9.02",
            token24h:{state:true,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:true,data:"5.44"},
            community:"1.5M",
            community24h:{state:true,data:"0.05"},
        },
        {
            id:"7",
            img:"https://d1j2c9jkfhu70p.cloudfront.net/1_7bac16dbb7.png",
            name:"Axie Infinity",
            network:"https://mystenlabs.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F9f673dde-0ad7-4b93-95c3-3bee558bfef4%2FSui_Icon_Brand2x.png?id=46943bb4-f0ba-4dc6-8ac3-a3d5efe2dc07&table=block&spaceId=be379dd5-2030-4209-b08d-95b91eb5ac95&width=2000&userId=&cache=v2",
            mkt:"1B",
            mkt24h:{state:false,data:"7.38"},
            token:"9.02",
            token24h:{state:true,data:"7.38"},
            volume:"8.9K",
            volume24h:{state:false,data:"5.44"},
            community:"1.5M",
            community24h:{state:true,data:"0.05"},
        },

    ]

    useEffect(()=>{

    },[selectedGenre])


    return(
        <>
            <div className="bg-[#0B0B0B] ">
                <Header/>
                <Container className={undefined}>
                    <div className="flex justify-between pt-32 mb-5">

                        <div className="flex items-center">
                            <Listbox value={selectedGenre} onChange={setSelectedGenre}>
                                {({ open }) => (
                                    <>
                                        <div className="relative ">
                                            <Listbox.Button className="relative w-32 h-10 cursor-default rounded-lg bg-[#474444] py-2 pl-3 pr-10 text-left text-white  font-light shadow-sm sm:text-sm sm:leading-6">
                                                <span className="block truncate">{selectedGenre.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    {
                                                        open?<ChevronUpIcon className="h-5 w-5 text-white" aria-hidden="true" />:
                                                    <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                    }

                                                      </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full divide-y divide-neutral-500 overflow-auto  scrollbar-thin scrollbar-thumb-black/50 scrollbar-thumb-rounded-full  rounded-md bg-[#474444] py-1 text-base shadow-lg outline-none sm:text-sm">
                                                    {genre.map((genres) => (
                                                        <Listbox.Option
                                                            key={genres.name}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'bg-[#252323] text-white' : 'text-black',
                                                                    'relative cursor-default select-none py-3 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={genres}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                      <span className={classNames(selected ? 'font-semibold text-white' : 'font-normal text-gray-400', 'block truncate')}>
                                                                          {genres.name}
                                                                      </span>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-white',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                            {/*<Listbox value={selectedChain} onChange={setSelectedChain}>*/}
                            {/*    {({ open }) => (*/}
                            {/*        <>*/}
                            {/*            <div className="relative  ml-5">*/}
                            {/*                <Listbox.Button className="relative w-32 h-10 cursor-default rounded-lg bg-[#474444] py-2 pl-3 pr-10 text-left text-white  font-light shadow-sm sm:text-sm sm:leading-6">*/}
                            {/*                    <span className="block truncate">{selectedChain.name}</span>*/}
                            {/*                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">*/}
                            {/*                        {*/}
                            {/*                            open?<ChevronUpIcon className="h-5 w-5 text-white" aria-hidden="true" />:*/}
                            {/*                                <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />*/}
                            {/*                        }*/}

                            {/*                          </span>*/}
                            {/*                </Listbox.Button>*/}

                            {/*                <Transition*/}
                            {/*                    show={open}*/}
                            {/*                    as={Fragment}*/}
                            {/*                    leave="transition ease-in duration-100"*/}
                            {/*                    leaveFrom="opacity-100"*/}
                            {/*                    leaveTo="opacity-0"*/}
                            {/*                >*/}
                            {/*                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full divide-y divide-neutral-500 overflow-auto  scrollbar-thin scrollbar-thumb-black/50 scrollbar-thumb-rounded-full  rounded-md bg-[#474444] py-1 text-base shadow-lg outline-none sm:text-sm">*/}
                            {/*                        {chain.map((chains) => (*/}
                            {/*                            <Listbox.Option*/}
                            {/*                                key={chains.name}*/}
                            {/*                                className={({ active }) =>*/}
                            {/*                                    classNames(*/}
                            {/*                                        active ? 'bg-[#252323] text-white' : 'text-black',*/}
                            {/*                                        'relative cursor-default select-none py-3 pl-3 pr-9'*/}
                            {/*                                    )*/}
                            {/*                                }*/}
                            {/*                                value={chains}*/}
                            {/*                            >*/}
                            {/*                                {({ selected, active }) => (*/}
                            {/*                                    <>*/}
                            {/*                                          <span className={classNames(selected ? 'font-semibold text-white' : 'font-normal text-gray-400', 'block truncate')}>*/}
                            {/*                                              {chains.name}*/}
                            {/*                                          </span>*/}

                            {/*                                        {selected ? (*/}
                            {/*                                            <span*/}
                            {/*                                                className={classNames(*/}
                            {/*                                                    active ? 'text-white' : 'text-white',*/}
                            {/*                                                    'absolute inset-y-0 right-0 flex items-center pr-4'*/}
                            {/*                                                )}*/}
                            {/*                                            >*/}
                            {/*                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />*/}
                            {/*                                            </span>*/}
                            {/*                                        ) : null}*/}
                            {/*                                    </>*/}
                            {/*                                )}*/}
                            {/*                            </Listbox.Option>*/}
                            {/*                        ))}*/}
                            {/*                    </Listbox.Options>*/}
                            {/*                </Transition>*/}
                            {/*            </div>*/}
                            {/*        </>*/}
                            {/*    )}*/}
                            {/*</Listbox>*/}
                            <div className="hidden lg:block">
                                <RadioGroup value={selectedGenre} onChange={setSelectedGenre} className="">
                                    <div className="flex  gap-4 h-10 ml-10">
                                        {genre.map((option,index) => (
                                            <RadioGroup.Option
                                                key={option.name}
                                                value={option}
                                                className={({ active, checked }) =>
                                                    classNames(
                                                        index > 6 ? "hidden":"",
                                                        active ? '' : '',
                                                        checked
                                                            ? 'bg-red-600 text-white '
                                                            : 'bg-[#474444] border border-[#474444] text-gray-400 hover:bg-black/10 hover:border',
                                                        'flex items-center justify-center  rounded-lg py-3 px-3 text-sm font-semibold  sm:flex-1'
                                                    )
                                                }
                                            >
                                                <RadioGroup.Label className="">{option.name}</RadioGroup.Label>
                                            </RadioGroup.Option>
                                        ))}
                                    </div>
                                </RadioGroup>
                            </div>
                        </div>

                        <div>
                            <div className="lg:hidden">
                            <Listbox value={selectedTime} onChange={setSelectedTime}>
                                {({ open }) => (
                                    <>
                                        <div className="relative  ml-5">
                                            <Listbox.Button className="relative  h-10 cursor-default rounded-lg bg-[#474444] py-2 pl-3 pr-10 text-left text-white  font-light shadow-sm sm:text-sm sm:leading-6">
                                                <span className="block truncate">{selectedTime.name}</span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    {
                                                        open?<ChevronUpIcon className="h-5 w-5 text-white" aria-hidden="true" />:
                                                            <ChevronDownIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                                    }

                                                      </span>
                                            </Listbox.Button>

                                            <Transition
                                                show={open}
                                                as={Fragment}
                                                leave="transition ease-in duration-100"
                                                leaveFrom="opacity-100"
                                                leaveTo="opacity-0"
                                            >
                                                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full divide-y divide-neutral-500 overflow-auto  scrollbar-thin scrollbar-thumb-black/50 scrollbar-thumb-rounded-full  rounded-md bg-[#474444] py-1 text-base shadow-lg outline-none sm:text-sm">
                                                    {time.map((times) => (
                                                        <Listbox.Option
                                                            key={times.name}
                                                            className={({ active }) =>
                                                                classNames(
                                                                    active ? 'bg-[#252323] text-white' : 'text-black',
                                                                    'relative cursor-default select-none py-3 pl-3 pr-9'
                                                                )
                                                            }
                                                            value={times}
                                                        >
                                                            {({ selected, active }) => (
                                                                <>
                                                                      <span className={classNames(selected ? 'font-semibold text-white' : 'font-normal', 'block truncate')}>
                                                                          {times.name}
                                                                      </span>

                                                                    {selected ? (
                                                                        <span
                                                                            className={classNames(
                                                                                active ? 'text-white' : 'text-white',
                                                                                'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                            )}
                                                                        >
                                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                                        </span>
                                                                    ) : null}
                                                                </>
                                                            )}
                                                        </Listbox.Option>
                                                    ))}
                                                </Listbox.Options>
                                            </Transition>
                                        </div>
                                    </>
                                )}
                            </Listbox>
                            </div>
                            <div className="hidden lg:block">
                            <RadioGroup value={selectedTime} onChange={setSelectedTime} className="">
                                <div className="grid grid-cols-3 gap-3 ">
                                    {time.map((option) => (
                                        <RadioGroup.Option
                                            key={option.name}
                                            value={option}
                                            className={({ active, checked }) =>
                                                classNames(
                                                    active ? '' : '',
                                                    checked
                                                        ? 'bg-red-600 text-white '
                                                        : 'bg-[#474444] border border-[#474444] text-gray-400 hover:bg-black/10 hover:border',
                                                    'flex items-center justify-center  rounded-lg py-3 px-3 text-sm font-semibold  sm:flex-1'
                                                )
                                            }
                                        >
                                            <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
                                        </RadioGroup.Option>
                                    ))}
                                </div>
                            </RadioGroup>
                            </div>
                        </div>
                    </div>
                    <div className=" overflow-auto ">
                        <table className="min-w-full divide-y divide-neutral-700 ">
                            <thead className="text-neutral-300">
                            <tr>
                                <th
                                    scope="col"
                                    className="p-4  text-sm xl:text-base  font-light  "
                                >
                                    #
                                </th>
                                <th
                                    scope="col"
                                    className="p-4  text-sm xl:text-base  font-light  text-left"
                                >
                                    Game
                                </th>
                                <th
                                    scope="col"
                                    className="p-4  text-sm xl:text-base  font-light  text-left"
                                >
                                    NetWork
                                </th>
                                {type.map(title => (
                                    <th key={title.title}
                                        scope="col"
                                        className="p-4  text-sm xl:text-base  font-light  "
                                    >
                                        {title.title}
                                    </th>
                                ))}
                            </tr>
                            </thead>
                            <tbody className=" text-neutral-300  divide-y divide-neutral-700 text-center">
                            {list.map(item => (
                                <tr key={item.id} onClick={()=>{router.push("/project")}} className="hover:bg-neutral-700 duration-500 cursor-pointer">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm  ">
                                        {item.id}
                                    </td>
                                    <td className="px-6s py-4 whitespace-nowrap text-sm flex items-center   ">
                                        <img className="w-12 h-12 rounded-lg" src={item.img} alt=""/>
                                        <div className="text-white ml-5 w-40 truncate">
                                            {item.name} {item.name}{item.name}{item.name}
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 whitespace-nowrap text-sm  ">
                                        <img className="w-10" src={item.network} alt=""/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                        ${item.mkt}
                                    </td>
                                    <td className={classNames(item.mkt24h.state?"text-green-500":"text-red-500","px-6 py-4 whitespace-nowrap text-sm  ")}>
                                        {item.mkt24h.state?"+":"-"}{item.mkt24h.data}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-white">
                                        ${item.token}
                                    </td>
                                    <td className={classNames(item.token24h.state?"text-green-500":"text-red-500","px-6 py-4 whitespace-nowrap text-sm  ")}>
                                        {item.token24h.state?"+":"-"}{item.token24h.data}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                        ${item.volume}
                                    </td>
                                    <td className={classNames(item.volume24h.state?"text-green-500":"text-red-500","px-6 py-4 whitespace-nowrap text-sm")}>
                                        {item.volume24h.state?"+":"-"}{item.volume24h.data}%
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm  text-white">
                                        {item.community}
                                    </td>
                                    <td className={classNames(item.community24h.state?"text-green-500":"text-red-500","px-6 py-4 whitespace-nowrap text-sm")}>
                                        {item.community24h.state?"+":"-"}{item.community24h.data}%
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                    </div>
                    <Sort ></Sort>
                </Container>
                <Footer/>
            </div>
        </>
    )
}

export default Ranking
