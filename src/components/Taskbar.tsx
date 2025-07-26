import windows11Icon from '../assets/icons/windows11-logo-taskbar.png';

function Taskbar() {
    return (
        <div className="h-[5vh] w-screen bg-amber-400/10 flex items-center justify-between px-4 relative">
            {/* Left side of task bar */}
            <section className="flex-shrink-0">Weather App</section>

            {/* Center of task bar */}
            <section className="flex-1 flex justify-center items-center">
                <img src={windows11Icon} className="inline-block h-6 w-6 mr-2" alt="Windows 11 Icon" />
                {/* Add more content here and it will expand horizontally */}
            </section>

            {/* Right side of task bar */}
            <section className="flex-shrink-0">More icons - ateepps - controls - time</section>
        </div>
    );
}


export default Taskbar;