import React from 'react';


const Blogs = () => {
    return (
        <div className='m-20'>

            <h1 className="text-5xl font-bold text-center text-yellow-400 mb-10">
                <span className='border-b-4 border-yellow-400'>Q & A </span>
            </h1>

            <article>
                <h3 className="text-2xl font-bold text-center my-10">
                    What is context API and its purposes?
                </h3>
                <p className='text-justify my-4'>
                    We know in React we can pass any information from Parent component to child or grand-child component by <strong>Props Drilling</strong> system . In that case information needs to be passed one by one. Sometimes its becomes a problem
                </p>
                <p className="text-justify my-4">In that case <strong>Context API</strong> is one of the way to pass infromation from Parent component to directly grand-child component and so so without any via of adjacent child . Also we can pass infromations among the siblings by the help of <strong>Context API</strong>. just have to follow 4 steps of bellow,
                </p>


                <ol className="text-justify my-4 ml-12 list-decimal dark:text-gray-400">
                    <li>Create and Export Context API using <strong>"createContext()"</strong></li>
                    <li>Provide Context API to the consumers with the values using <strong>"conTextName.Provider"</strong></li>
                    <li>Import the Context API in the consumer's component </li>
                    <li>Get the values in the consumer's component using <strong>"useContext()"</strong></li>
                </ol>


            </article>


            <article>
                <h3 className="text-2xl font-bold text-center my-10">
                    Whats are Semantic Tags?
                </h3>
                <p className='text-justify my-4'>
                    Before HTML5 while creating websites developers are used to with some specific <strong>HTML Tags</strong>. That time these tags were used repeatedly again again with the whole websites. Which were tough to uderstand the codes.
                </p>
                <p className="text-justify my-4">To solve this issue in HTML5 Developers introduced us some extra tags which are more meaning full and reasonable with their behavior and that can be used to define different parts of a web page these newly introduced tags are called <strong>Semantic Tags</strong>
                </p>
                <p className="text-justify my-4"><strong>Examplses of Semantic Tags :</strong> article, aside,  details, figcaption,  figure, footer,  header, main,  nav, mark,  section, summary, time etc ...
                </p>
            </article>


            <article>
                <h3 className="text-2xl font-bold text-center my-10">
                    Differences among inline, block and inline-block elements?
                </h3>



                <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                Parameters
                                </th>
                                <th scope="col" className="px-6 py-3">
                                inline elements
                                </th>
                                <th scope="col" className="px-6 py-3">
                                block elements
                                </th>
                                <th scope="col" className="px-6 py-3">
                                inline-block elements
                                </th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                                    Definition
                                </th>
                                <td className="px-6 py-4">
                                    This elements just takes its content range to be set in and dont take any space like margin,padding,new line from the page.
                                </td>
                                <td className="px-6 py-4">
                                    
                                This elements is totally oposite of <strong>inline elements</strong> its full range to be set in and also take space like margin,padding,new line from the page.
                                </td>
                                <td className="px-6 py-4">
                                inline-block elements takes its content range to be set in but we can adjust its space like margin,padding,new line from the page.
                                </td>
                                
                            </tr>
                            
                        </tbody>
                    </table>
                </div>



            </article>

        </div>
    );
};

export default Blogs;