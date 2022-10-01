import { useState } from "react"

export default function APagination(props) {
   let [num, setNum] = useState(props.pageNum ? props.pageNum : 1)
   let [cur, setCur] = useState(props.pageNum)

   const pages = [
      { page: num },
      { page: num + 1 },
      { page: num + 2 },
      { page: num + 3 },
   ]
   const next = function(){
      if((props.total - 3) > num){
        setNum(++num)
      } else {
        setNum(props.total - 3)
      }
   }
   const back = function(){
      num > 1 && setNum(--num)
   }

   return (
    <div className="flex text-white rounded-lg font-[Poppins]">
        <button onClick={back} className="h-12 border-2 border-r-0 border-indigo-600
                px-4 rounded-l-lg hover:bg-indigo-600 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
            </svg>
        </button>
        {
            pages.map((pg, i) => (
                <button key={i} onClick={() => {setCur(pg.page); props.setNum(pg.page)}} className={`h-12 border-2 border-r-0 border-indigo-600
                w-12 ${cur === pg.page && 'bg-indigo-600 text-white'}`}>{pg.page}</button>
            ))
        }
        <button onClick={next} className="h-12 border-2  border-indigo-600
                px-4 rounded-r-lg hover:bg-indigo-600 hover:text-white">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg>
        </button>
    </div>
   )
}
