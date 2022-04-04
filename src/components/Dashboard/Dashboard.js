import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { PureComponent } from 'react';
import { BarChart, Bar, Cell, Legend, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';


const Dashboard = () => {
    const [datas, setDatas] = useState([])
    useEffect(() => {
        fetch('data4chart.json')
            .then(res => res.json())
            .then(data => setDatas(data))
        // .then(data => console.log(data))
    }, [])

    return (
        <section className='p-20'>

            <h1 className="text-5xl font-bold text-center text-yellow-400 mb-10">
                <span className='border-b-4 border-yellow-400'>Dashboard </span>
            </h1>
            <div className='container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2  p-10 gap-4'>
                <div className="p-10 flex flex-col justify-center items-center">

                    <LineChart width={400} height={300} data={datas} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>

                    <code className='my-4'>fig : monthly sales statistics</code>



                </div>

                <div className="p-10 flex flex-col justify-center items-center">

                    <ResponsiveContainer 
                            width={400}
                            height={300}>
                        <BarChart
                            data={datas}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="revenue" stackId="a" fill="#8884d8" />
                            <Bar dataKey="investment" stackId="a" fill="#82ca9d" />
                            <Bar dataKey="sell" fill="#ffc658" />
                        </BarChart>
                    </ResponsiveContainer>



                    <code className='my-4'>fig : monthly sales,investment,revenue statistics</code>
                </div>
                <div className="p-10"></div>
                <div className="p-10"></div>
            </div>




            <div className='text-center mt-10'>

                <Link to="/home" className="rounded-full inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
                    Go Back to Home
                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>

        </section>
    );
};

export default Dashboard;