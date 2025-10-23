export default function NavBar(){
    return(
        <header className={"sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-neutral-950/70"}>
            <nav className={"mx-auto flex max-w-5xl items-center justify-between px-4 py-3"}> {/* mx auto centers horizontally, justify between meaning spacing between items in container */}
                <a href={"#"} className={"font-semibold tracking-tight"}>
                    Jordan Duncan
                </a>
                <ul className={"flex gap-5 text-sm text-neutral-300"}>
                    <li><a className={"hover:text-white"} href={"#about"}>About Me</a></li>
                    <li><a className={"hover:text-white"} href={"#projects"}>Projects</a></li>
                    <li><a className={"hover:text-white"} href={"#experience"}>Experience</a></li>
                </ul>
            </nav>
        </header>
    )
}