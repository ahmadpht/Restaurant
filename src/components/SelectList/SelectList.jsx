import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../Context/FoodContext';

const SelectList = ({list}) => {

    
  const [itemList, setItemList] = useState([]);
  const {setSelectTag} = useContext(MainContext);

  useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1//list.php?${list}=list`)
      .then(res => setItemList(res?.data?.meals))
  }, [list])

  return (
    <div>
        <select>
            {
                itemList && itemList?.map((item, idx) => {
                return (
                    <option key={idx}
                        onClick={() => (
                            setSelectTag(`filter.php?${list}=${list === 'c' ? item?.strCategory : list === 'i' ? item?.strIngredient : item?.strArea}`))}
                            >
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