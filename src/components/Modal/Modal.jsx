
import { useContext } from "react";
import SelectList from "../../components/SelectList/SelectList";
import { IoClose } from "react-icons/io5";
import { MainContext } from "../../Context/FoodContext";

const Modal = ({isOpen, setIsOpen, lists}) => {

    const  {setSelectTag} = useContext(MainContext);
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const handleClick = () => {
        setSelectTag('search.php?s=')
        setIsOpen(false)
    }

  return (
        <div className={`${isOpen ? 'opacity-100' :'opacity-0 invisible'} w-[40vw] h-[60vh] top-[20vh] right-[30vw] flex flex-col justify-around items-center transition-all ease-out duration-300 fixed  bg-transparent shadow-2xl backdrop-filter bg-opacity-75 backdrop-blur-lg rounded-lg border-zinc-950`}>
            <button onClick={()=> setIsOpen(!isOpen)} className="absolute top-0 right-0 bg-red-500 w-10 h-10 rounded-tr-lg flex justify-center items-center"><IoClose className="text-2xl text-white"/></button>
            <div className="flex justify-evenly w-full">
                {
                    lists?.map((list, idx) =>{
                        return (<SelectList list={list} key={idx} />)
                    })
                }
                <select className="w-20 p-1 bg-orange-500 text-white outline-none border-none capitalize cursor-pointer" onChange={e => setSelectTag(`search.php?f=${e.target.value}`)}>
                {
                    alphabet.map((item, idx) => {
                    return(
                        <option className='bg-white text-black' key={idx}>
                        {item}
                        </option>
                    )
                    })
                }
                </select>
            </div>
            <button className="w-96 h-12 text-2xl text-white bg-orange-500 rounded-xl" onClick={handleClick}>reset</button>
        </div>
  )
}

export default Modal