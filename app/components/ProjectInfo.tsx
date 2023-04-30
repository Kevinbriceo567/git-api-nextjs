'use client';

const ProjectInfo = () => {

    return (
        <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900">GIT API Nextjs</h1>
            <p className="text-center text-sm text-gray-400 font-medium">Commits list</p>
            <div className="my-5 px-6">
                <a href="https://github.com/Kevinbriceo567/git-api-nextjs" target='_blank' className="main-btn text-gray-200 block rounded-lg text-center font-medium leading-6 px-6 py-3 bg-gray-900 hover:bg-black hover:text-white">Go to <span className="font-bold">git-api-nextjs</span> repository</a>
            </div>
            <div className="flex justify-between items-center my-5 px-6">
                <a href="https://docs.github.com/en/rest?apiVersion=2022-11-28" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">GitHub API</a>
                <a href="https://tailwindcss.com/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Tailwind</a>
                <a href="https://nextjs.org/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Next.js</a>
                <a href="https://vercel.com/dashboard" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3">Vercel</a>
            </div>
        </div>
    )
}

export default ProjectInfo;