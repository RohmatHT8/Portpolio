export default function HeroSection() {
    return (
        <>
            <section id="home" className="pt-36">
                <div className="container md:mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full self-center px-4 lg:w-1/2">
                            <h1 className="font-bold text-primary md:text-xl">Hello Guys, I'm <span className="block font-bold text-4xl mt-1 text-dark">Rohmat Hidayattullah</span></h1>
                            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Fullstack Developer</h2>
                            <p className="font-medium text-slate-400 mb-10 leading-relaxed">Belajar web programing itu mudah dan menuenangkan bukan. Bukan !</p>
                            <a className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:opacity-80 transition duration-500 easy-in-out cursor-pointer">Contact</a>
                        </div>
                        <div className="w-full self-end px-4 lg:w-1/2">
                            <div className="relative mt-10 lg:mt-9 lg:right-0">
                                <img src="../img/Rohmat.png" alt="Rohmat-picture" className="max-w-full mx-auto" />
                                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width={"400"} height={"400"}>
                                        <path fill="#3296e6" d="M45.6,-62.4C59.9,-52.5,72.6,-40.1,77.1,-25.3C81.6,-10.5,77.8,6.8,72.4,23.5C66.9,40.1,59.7,56.2,47.4,66.8C35,77.4,17.5,82.5,0.4,81.9C-16.6,81.3,-33.3,75,-46.1,64.6C-58.9,54.1,-67.9,39.5,-71.5,24.2C-75.1,8.9,-73.3,-7.2,-69.8,-24.2C-66.4,-41.3,-61.3,-59.4,-49.4,-70.1C-37.5,-80.8,-18.8,-84.2,-1.5,-82.1C15.7,-80,31.4,-72.4,45.6,-62.4Z" transform="translate(100 100)" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}