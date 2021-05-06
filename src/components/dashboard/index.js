import React, { useState } from 'react'
import './dashboard.css'
import ChartComponent, {Bar,Line} from 'react-chartjs-2';
import Sidebar from '../sidebar';
import Nav from '../navbar/optionNav'
import Card from '../card/dashboardCard'
import GraphCard from '../card/graphCard';
import {BsPeopleFill,BsCardChecklist} from 'react-icons/bs'
import {BiMessageAltDetail,BiTransfer} from 'react-icons/bi'
import {RiKakaoTalkLine} from 'react-icons/ri'

export default function Dashboard(props) {
    
    const [isOpen,setOpen] = useState(true);
    const items=[
        {name:"Overview",path:'/myAdmin',status:true}
    ]


    const reqIcon = <BsPeopleFill size={24} color={'rgb(29, 28, 28)'} />
    const transIcon = <BiTransfer size={30} color={'blue'} />
    const postsIcon = <BiMessageAltDetail size={30} color={'green'} />
    const complaintIcon = <RiKakaoTalkLine size={30} color={'orange'} />
    const releaseIcon = <BsCardChecklist size={30} color={'red'} />

    const cardContent=[
        {icon:reqIcon, title:'Engagements',subtitle:'Visitors',count:'23,223'},
        {icon:transIcon, title:'Requests',subtitle:'Requests recently',count:'154'},
        {icon:postsIcon, title:'Activity',subtitle:'Posts today',count:290},
        {icon:complaintIcon, title:'Service',subtitle:'Complaints recently',count:39},
        {icon:releaseIcon, title:'Release',subtitle:'Total Certificates Released',count:39}
    ]

    let newData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Aug'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            label: 'Requests Summary',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    
    return (
        <div className="con-container"> 
            <Sidebar dashActive={true} isOpen={isOpen}/>
                <div className="main-content-wrapper">
                    <Nav />
                    <div className="card-wrapper-main">
                       <div className="card-row">
                       {
                           cardContent.map((item,index)=>{
                               return( 
                               <Card 
                                icon={item.icon} 
                                title={item.title}
                                subtitle={item.subtitle}
                                count={item.count}
                                />
                               )
                           })
                       }
                       </div>
                       <div className="card-row">
                            <GraphCard 
                                type={'bar'}
                                title={'Requests Overview'}
                                data={newData}
                            />
                            <GraphCard 
                                type={'line'}
                                title={'Total Visits'}
                                data={newData}
                            />
                       </div>
                    </div>
                </div>
            </div>
    )
}