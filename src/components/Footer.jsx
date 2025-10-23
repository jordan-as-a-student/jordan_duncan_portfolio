export default function Footer() {
    return(
        <footer className={"mx-20 border-t border-white/10"}>
            <div className={"mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between"}>
                <p>{new Date().getFullYear()} JORDAN DUNCAN</p>
                <div className={"flex gap-4"}> 
                    <a className={"hover:text-white"} href={"jordan4duncan@gmail.com"}>Email</a>
                    <a className={"hover:text-white"} href={"https://github.com/jordan-as-a-student"}>GitHub</a>
                    <a className={"hover:text-white"} href={"https://www.linkedin.com/in/jordanmduncan/"}>Linked-In</a>
                </div>
            </div>
        </footer>
    )
}