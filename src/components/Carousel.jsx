import{useRef} from 'react';
export default function Carousel({children}){
    const trackRef = useRef(null);

    const scrollByCar=(dir=1)=>{
        const track = trackRef.current;
        if(!track) return;
        const card = track.querySelector("[data-card]");
        const gap = 16;
        const width = card ? card.getBoundingClientRect().width + gap : 320;
        track.scrollBy({left: dir * width, behavior: "smooth"});
    }

    return (
        <div className={"relative"}>
                {/* Left / Right arrow controls - absolutely positioned and vertically centered */}
                <button
                    onClick={() => scrollByCar(-1)}
                    aria-label={"Previous"}
                    className={"absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 p-2 bg-transparent hover:bg-white/10"}
                >
                    ←
                </button>
                <button
                    onClick={() => scrollByCar(1)}
                    aria-label={"Next"}
                    className={"absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 p-2 bg-transparent hover:bg-white/10"}
                >
                    →
                </button>
            <div
                ref={trackRef}
                className = {"flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory" +
                    "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden"}
            >
                {Array.isArray(children)
                    ? children.map((c, i)=>(
                        <div key={i} data-card className={"snap-start shrink-0 w-[280px] sm:w-[340px]"}>
                            {c}
                        </div>
                    ))
                    : children
                }
            </div>
        </div>
    )
}
