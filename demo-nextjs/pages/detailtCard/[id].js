import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getData } from "../../lib/getData";

export async function getStaticProps(context) {
    const posts = await getData();
    const params = context.params;
    return {
        props: {
            post: posts.find((e) => e.id.toString() === params.id),
        }, // will be passed to the page component as props
    };
}

export async function getStaticPaths() {
    const posts = await getData();
    const paths = posts.map((e) => {
        return {
            params: {
                id: e.id.toString(),
            },
        };
    });
    return {
        paths,
        fallback: true,
    };
}

const DetailCard = (props) => {
    const router = useRouter();
    if (router.isFallback) {
        return (
            <div className="h-screen w-screen flex justify-center items-center">
                <h1 className="text-9xl">...loading</h1>
            </div>
        );
    }
    const { download_url, author } = props.post;

    const likePost = () => {};
    return (
        <div className="w-[75rem] mx-auto h-screen flex items-center">
            <Head>
                <title>{author}</title>
            </Head>
            <div className="p-1 rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
                <div className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl">
                    <Image
                        src={download_url}
                        alt="art cover"
                        width={1000}
                        height={667}
                    />
                </div>
                <div className="sm:w-7/12 pl-0 p-5">
                    <div className="space-y-2">
                        <div className="space-y-4">
                            <h4 className="text-2xl font-semibold text-cyan-900">
                                {author}
                            </h4>
                            <p className="text-gray-600">
                                Laborum saepe laudantium in, voluptates ex
                                placeat quo harum aliquam totam, doloribus eum
                                impedit atque! Temporibus...
                            </p>
                            <p>
                                <span>0</span> Like
                            </p>
                        </div>
                        <Link href="/">
                            <a className="block text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[200px] rounded">
                                back
                            </a>
                        </Link>
                        <div
                            onClick={likePost}
                            className="block cursor-pointer text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-[200px] rounded"
                        >
                            like
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
