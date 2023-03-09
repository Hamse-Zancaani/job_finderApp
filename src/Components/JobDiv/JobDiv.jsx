

 
import React from 'react';
import {BiTimeFive} from 'react-icons/bi';
import logo1 from '../../assets/logo1.png';
import logo2 from '../../assets/logo2.png';
import logo3 from '../../assets/logo3.png';
import logo4 from '../../assets/logo4.png';
import logo5 from '../../assets/logo5.png';
import logo6 from '../../assets/logo6.png';
import logo7 from '../../assets/logo7.png';
import logo8 from '../../assets/logo8.png';




const Data =[
  {
    id:1,
    image:logo1,
    title:'Web Developer',
    time:'Now',
    location:'Canada',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Nova Linus co.",
  },
  {
    id:2,
    image:logo2,
    title:'UI Designer',
    time:'14hrs',
    location:'Manchester',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Liquid Accessments",
  },
  {
    id:3,
    image:logo3,
    title:'Software Developer',
    time:'10Hrs',
    location:'Austria',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Web Tech Agency",
  },
  {
    id:4,
    image:logo4,
    title:'Product designer',
    time:'22Hrs',
    location:'Kenya',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"kenya Digital Solutions",
  },
  {
    id:5,
    image:logo5,
    title:'Lead Developer',
    time:'13Hrs',
    location:'Norway',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Nimeilo-uk",
  },
  {
    id:6,
    image:logo6,
    title:'Data Scientist',
    time:'Yestarday',
    location:'USA',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Noma And Sons",
  },
  {
    id:7,
    image:logo7,
    title:'Researcher',
    time:'7Hrs',
    location:'Finland',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Linus co.",
  },
  {
    id:8,
    image:logo8,
    title:'UI/UX Designer',
    time:'2Hrs',
    location:'Somalia',
    desc:"Lorem ipsum dolor sit, amet consectetur praesentium atque possimus, eos, minus ex animi delectus cum deserunt? Veritatis dolore minus repellendus eius!",
  company:"Somdev Solutions",
  },
  
  
  
]







const JobDiv = () => {
  return (
    <div>
<div className='JobContainer flex gap-8 justify-center flex-wrap
items-center py-10'>
  {
    Data.map(({id,image,title,time,location,desc,company})=> {
       return(
        <div key={id} className='group group/item singleJob w-[220px] p-[20px] bg-white rounded [10px]

  hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>

<span className='flex justify-between items-center gap-4'>
  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
<span className='flex items-center text-[#ccc] gap-1'>
<BiTimeFive/> {time}

</span>
</span>
<h6 className='text-[#ccc]'>{location}</h6>
<p className='text-[10px] text-[#959599] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
  {desc}
</p>

<div className='company flex items-center gap-2'>
  
<img src={image} alt='company logo' className='m-10px w-[15%]' />
<span className='text-[11px] py-[1rem] block group-hover:text-white'>
  {company} </span>

</div>
<button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[12px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white;'>Apply Now</button>


  
  
  </div>
      )
    } )
  }
  

</div>

    </div>
  )
}
export default JobDiv;