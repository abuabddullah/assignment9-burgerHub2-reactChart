

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';


const Dashboard = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('data4chart.json')
            .then(res => res.json())
            .then(data => setDatas(data))
        // .then(data => console.log(data))
    }, [])

    // console.log(datas);


    return (
        <div>
            <div className='mx-auto container max-w-7xl p-5 md:p-20'>


                <h1 className="text-5xl font-bold text-center text-yellow-400 mb-10">
                    <span className='border-b-4 border-yellow-400'>Dashboard </span>
                </h1>


                <section className='my-20 flex justify-center'>
                    <BarChart width={730} height={250} data={datas}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" fill="#8884d8" />
                        <Bar dataKey="revenue" fill="#82ca9d" />
                        <Bar dataKey="sell" fill="#000000" />
                    </BarChart>
                </section>


                <section className='my-20 flex justify-center'>
                    <LineChart width={730} height={250} data={datas}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                        <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                        <Line type="monotone" dataKey="sell" stroke="#000000" />
                    </LineChart>
                </section>

                <section className='my-20 flex justify-center'>
                    <ComposedChart width={730} height={250} data={datas}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#f5f5f5" />
                        <Area type="monotone" dataKey="investment" fill="#8884d8" stroke="#8884d8" />
                        <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                        <Line type="monotone" dataKey="sell" stroke="#ff7300" />
                    </ComposedChart>
                </section>


                <div className='text-center my-10'>

                    <Link to="/home" className="rounded-full inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                        Go Back to Home
                        <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;