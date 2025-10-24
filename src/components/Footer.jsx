export default function Footer() {
    return(
        <footer className={"mx-20 border-t border-white/10"}>
            <div className={"mx-auto max-w-5xl px-4 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between"}>
                <p>{new Date().getFullYear()} JORDAN DUNCAN</p>
                <div className={"flex gap-4"}> 
                    <a className={"hover:text-white"} href={"mailto:jordan4duncan@gmail.com?subject=Hi%20Jordan,%20PLEASE%20COME%20WORK%20FOR%20ME&body=Jordan,%20you%20are%20so%20awesome%20and%20creative%20and%20funny%20and%20humble,%20I%20need%20you%20to%20work%20for%20my%20company%20right%20now,%20pretty%20pleasssssseeee%20(cherry%20on%20top)"}>Email</a>
                    <a className={"hover:text-white"} href={"https://github.com/jordan-as-a-student"}>GitHub</a>
                    <a className={"hover:text-white"} href={"https://www.linkedin.com/in/jordanmduncan/"}>Linked-In</a>
                </div>
            </div>
        </footer>
    )
}