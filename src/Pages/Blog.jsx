import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";


const Blog = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const blog = useLoaderData();

    const { comments_count, title, reading_time_minutes, public_reactions_count, published_at, tags } = blog;

    return (
        <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">{title}</h1>
                    <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">

                        <p className="text-sm">{reading_time_minutes} min read {new Date(published_at).toLocaleDateString()}</p>
                        <p className="flex-shrink-0 mt-3 text-sm md:mt-0">{comments_count}  comments • {public_reactions_count} views</p>


                    </div>
                    {/* tabs start */}
                    <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">

                        <Link to=''
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b' } rounded-md dark:border-gray-600 dark:text-gray-600`}>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>

                            <span>Content</span>
                        </Link>

                        <Link to='author'
                        onClick={() => setTabIndex(1)}
                            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b' } rounded-md dark:border-gray-600 dark:text-gray-600`}>

                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                            </svg>

                            <span>Author</span>
                        </Link>

                    </div>
                    {/* tab end */}

                </div>
                


                <Outlet></Outlet>


            </article>
            <div>
                <div className="flex flex-wrap py-6 gap-2 border-t border-dashed dark:border-gray-600">

{
    tags.map((tag) =>   <a
    key={tag} 
    rel="noopener noreferrer"
     href="#" 
     className="px-3 py-1 rounded-sm hover:underline dark:bg-violet-600 dark:text-gray-50">#{tag}</a>
    )
}

                   
                   
                </div>
                
            </div>
        </div>
    );
};

export default Blog;