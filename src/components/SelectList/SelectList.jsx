import axios from 'axios';
import { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Context/FoodContext';

const SelectList = ({list}) => {

    
  const [itemList, setItemList] = useState([]);
  const {setSelectTag} = useContext(MainContext);

  useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1//list.php?${list}=list`)
      .then(res => setItemList(res?.data?.meals))
  }, [list])

//   const handleChange = (e) => {
//     const name = e.target.value;
//     setSelectTag(`filter.php?${list}=${name}`)
//   }

  return (
    <div>
        <select className='bg-orange-500 text-white outline-none border-none cursor-pointer' onChange={e => setSelectTag(`filter.php?${list}=${e.target.value}`)}>
            {
                itemList && itemList?.map((item, idx) => {
                return (
                    <option className='bg-white text-black' key={idx}>
                        {list === 'c' ? item?.strCategory : list === 'i' ? item?.strIngredient : item?.strArea}
                    </option>
                    )
                })
            }
        </select>
    </div>
  )
}

export default SelectList;