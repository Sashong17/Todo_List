import React, { useEffect, useState } from 'react'
import "./App.css"
import Inputarea from './Components/Inputarea'
import Todoitems from './Components/Todoitems'
const App = () => {

  const [items ,setItems] = useState([])

  useEffect(()=>{
    const items = localStorage.getItem("items");
    if(items){
      const arrtype = JSON.parse(items)
      setItems(arrtype)
    }
  },[])

  const additems = (item)=>{

    setItems((curritems)=>{
      const newItemList = [...curritems , item]
      const stringtype = JSON.stringify(newItemList)
      localStorage.setItem("items",stringtype)
      return newItemList

    })

  }

  const deleteItem =(id)=>{
   setItems((curritems)=>{
    const updateitem = curritems.filter((item,index)=>index!==id)
    const stringtype = JSON.stringify(updateitem)
    localStorage.setItem("items",stringtype)
    return updateitem

   })

  }


  return (
    <div className='app'>
      <h1 className='app_title'><u>
        TO-DO-List</u>
      </h1>
      <Inputarea  additems={additems}/>
      <div className='itemscontainer'>
        {// a>b ? true : false

          items.length === 0 ? (<h3><u>No Item Added</u></h3>):(
            items.map((item,index)=>{
              return(
                <Todoitems 
                key={index}
                itemText = {item}
                deleteItem = {()=>deleteItem(index)
                }
                />
              )
            })
          )
          

        }

      </div>
    </div>
  
  )
}

export default App