import { useState } from "react"

const ImageGallery = () => {
    const [selectedCity, setSelectedCity] = useState(null)

    const cities = [
        {
            id: 1,
            name: "Bodrum, Turkey",
            info: "A popular tourist destination known for its beaches and historic castle.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/8fd/bqdxj46juuo4rxzln3xh59xhuvnqj0yj.jpeg",
        },
        {
            id: 2,
            name: "Istanbul, Turkey",
            info: "A city bridging Europe and Asia, famous for the Hagia Sophia.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/176/dnv1b6qz90soxvyj94xzfg443o8zkyjw.jpg",
        },
        {
            id: 3,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/c09/1mblxa7u0o4vfzda6oy5je0vowh6xwit.webp",
        },
        {
            id: 4,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/dd1/mwt7fvlpa7mt1awdtgotx92qj93x5qxi.jpg",
        },
        {
            id: 5,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/75c/b1ke4l42rrrbtgwzez329w125mg30cyt.jpg",
        },
        {
            id: 6,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/c0b/3mp92rmg4miiywmrmmiwf0zvnvf1pr2q.webp",
        },
        {
            id: 7,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/4a6/ijqueb7ul28pg2v42hlhpqclkljbwfmw.jpg",
        },
        {
            id: 8,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/abf/7nylpetlsuj559spea7h3dhn7psq1k1d.jpg",
        },
        {
            id: 9,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/252/meotuywkmmymkpq6sss99ifiri6t2gba.webp",
        },
        {
            id: 10,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/176/dnv1b6qz90soxvyj94xzfg443o8zkyjw.jpg",
        },
        {
            id: 11,
            name: "Prague, Czech Republic",
            info: "Known for its historic architecture and the Charles Bridge.",
            image: "https://a-eps.asialuxe.dev/upload/iblock/8fd/bqdxj46juuo4rxzln3xh59xhuvnqj0yj.jpeg",
        },
    ]

    return (
        <div className="container mx-auto max-w-[1200px] p-4">
            <h2 className="text-3xl font-bold mb-8 justify-center flex">Mashhur yo'nalishlar</h2>
            <div className="flex gap-4 h-full">
                <div className="flex-1">
                    <div
                        className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-full group"
                        onClick={() => setSelectedCity("Bodrum, Turkey")}
                    >
                        <img
                            src="https://a-eps.asialuxe.dev/upload/iblock/8fd/bqdxj46juuo4rxzln3xh59xhuvnqj0yj.jpeg"
                            alt="Bodrum"
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        /><div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        
                        <span className=" absolute top-85  left-4 inset-0 flex  text-white text-lg text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="font-semibold absolute   text-2xl bottom-15">Alanya</span> <br />
                    Turkiyaning Janubiy qirg‘og‘ida, O‘rta yer dengizi bo‘yida joylashgan betakror kurort shahri.
                        </span>
                    </div>

                </div>

                
                <div className="flex-1 flex flex-col gap-4">
                    
                   <div
                className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-[200px] group"
                 onClick={() => setSelectedCity("Istanbul, Turkey")}
                    >
                 <img
                src="https://a-eps.asialuxe.dev/upload/iblock/176/dnv1b6qz90soxvyj94xzfg443o8zkyjw.jpg"
                 alt="Istanbul"
                 className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                 <span className="absolute left-4 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="font-semibold text-1xl block">Antaliya</span>
                Turkiyaning janubiy qirg'og'ida joylashgan mashhur sayyohlik shahri.
              </span>
               </div>


                    {/* Bottom row - two images side by side */}
                    <div className="flex gap-4 flex-1">
                        <div className="flex-1">
                            <div
                                className=" relative rounded-xl overflow-hidden shadow-lg cursor-pointer h-full group"
                                onClick={() => setSelectedCity("Bodrum, Turkey")}
                            >
                                <img
                                    src="https://a-eps.asialuxe.dev/upload/iblock/c09/1mblxa7u0o4vfzda6oy5je0vowh6xwit.webp"
                                    alt="Prague"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Bodrum</span>
                        Turkiyaning janubiy qirg'og'ida joylashgan mashhur sayyohlik shahri.
                          </span>
                            </div>
                        </div><div className="flex-1">
                            <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                                <img
                                    src="https://a-eps.asialuxe.dev/upload/iblock/dd1/mwt7fvlpa7mt1awdtgotx92qj93x5qxi.jpg"
                                    alt="Gretsiya"
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                       <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Gretsiya</span>
                        Gretsiya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-full gap-3 mt-[50px]">
                <div className="flex gap-2 h-[500px] w-[2200px]">
                    <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/75c/b1ke4l42rrrbtgwzez329w125mg30cyt.jpg"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Gretsiya</span>
                        Gretsiya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>

                </div>

                 <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/c0b/3mp92rmg4miiywmrmmiwf0zvnvf1pr2q.webp"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />      
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Istanbul</span>
                        Gretsiya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span></div>
                   </div>
                   <div className=" h-[240px] w-[900px] flex flex-wrap gap-5">
                 <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/abf/7nylpetlsuj559spea7h3dhn7psq1k1d.jpg"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />      
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Istanbul</span>
                        Gretsiya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>

                </div>

                   <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/252/meotuywkmmymkpq6sss99ifiri6t2gba.webp"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />      
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Varna</span>
                        Gretsiya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>

                </div>
                   </div>
            </div>


            
            <div className="flex h-full gap-3 mt-[50px]">
                <div className="flex gap-2 h-[500px] w-[2200px]">
                    <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/252/meotuywkmmymkpq6sss99ifiri6t2gba.webp"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Praga</span>
                        Praga-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>

                </div>
                </div>
                   <div className=" h-[240px] w-[1200px] flex flex-wrap gap-5">
                 <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/abf/7nylpetlsuj559spea7h3dhn7psq1k1d.jpg"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />      
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Antalya</span>
                        Antalya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>

                </div>

                   <div
                                className=" relative group rounded-xl overflow-hidden shadow-lg cursor-pointer h-full"
                                onClick={() => setSelectedCity("Gretsiya")}
                            >
                    <img 
                    src="https://a-eps.asialuxe.dev/upload/iblock/8fd/bqdxj46juuo4rxzln3xh59xhuvnqj0yj.jpeg"
                     alt="Dalaman" 
                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                     />      
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                         <span className="absolute left-2 bottom-4 text-[14px] text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="font-semibold text-1xl block">Alanya</span>
                        Alanya-o'zining ajoyib tarixiga ega, go'zal orollari,tabiatiga ega .
                          </span>

                </div>
                   </div>
            </div>
        </div>
    )
}

export default ImageGallery