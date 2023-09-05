import getPosts from "@/action/getPosts";
import { Badge } from "../ui/badge";
import HTMLReactParser from "html-react-parser";

export default async function BlogSection() {
    const posts = await getPosts();

    return (
        <div id="blog" className="bg-indigo-950 py-0 sm:py-0">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <Badge variant="glassmorph" className="w-fit" >
                        🎉 Powered by Supercontent 🎉
                    </Badge>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">From the blog</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400">
                        Discover our news
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article key={post.id} className="flex flex-col transition-all p-4 bg-indigo-950 rounded-lg hover:border border-primary/80 hover:border-primary/100 transition-color shadow-[10px_10px_60px_10px] shadow-primary/0 hover:shadow-primary/60 items-start justify-between">
                            <div className="relative w-full">
                                <img
                                    src={post.image[0].url}
                                    alt=""
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-900 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-100/10" />
                            </div>
                            <div className="w-full">
                                <div className="mt-8 flex justify-between w-full items-center text-xs">
                                    <time suppressHydrationWarning dateTime={post.createdAt} className="text-gray-400">
                                        {new Date(post.createdAt!).toLocaleDateString()}
                                    </time>
                                    <a
                                        href="#"
                                        className="relative z-10 rounded-full bg-primary px-3 py-1.5 font-medium text-gray-200 hover:bg-gray-800"
                                        suppressHydrationWarning
                                    >
                                        Blog
                                    </a>
                                </div>
                                <div className="group relative">
                                    <h3 className="mt-3 text-lg font-semibold leading-6 text-white group-hover:text-gray-200">
                                        <a suppressHydrationWarning href={post.url}>
                                            {post.title}
                                        </a>
                                    </h3>
                                    <p suppressHydrationWarning className="mt-5 line-clamp-3 w-full text-sm leading-6 prose prose-invert">
                                        {post.content &&
                                            (() => {
                                                try {
                                                    return HTMLReactParser(post.content);
                                                } catch (error) {
                                                    console.error("Error parsing HTML:", error);
                                                    return null; // or a fallback message
                                                }
                                            })()}
                                    </p>

                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
