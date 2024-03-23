import { useLoaderData } from "react-router-dom";
import notShowingImages from '../assets/404.jpg';
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";


const Content = () => {
    const blog = useLoaderData();
    const {cover_image,description, title, id, published_at, tags, body_html, url} = blog;
    return (
        <div className=" mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 border-2 p-4 rounded-xl">
            <img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={cover_image || notShowingImages} />
            <div className=" space-y-2">
                <a href={url} target="_blank" className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</a>
                <Markdown rehypePlugins={[rehypeRaw]}>{body_html}</Markdown>
                
            </div>
        </div>
    );
};

export default Content;