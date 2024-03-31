function Header() {
    return  (
        <header>
            <div className='bg-black'>
                <nav className=' flex flex-row h-30 w-screen'>
                    <div className='flex justify-center items-center w-1/6'>
                        <img src="./images/newlogo.jpg"   className=' my-2 h-[5vw] w-60 '  alt="" />
                    </div>

                    <ul className='text-white flex flex-row  justify-center py-5 text-[1.25vw] sm:text-[1.5vw] xl:text-[20px] font-pirifont font-bold w-4/6 '>
                        <li className='flex justify-center items-center mx-[1vw] w-[150px] lg:w-[200px] '><a href="#">Festivals</a></li>
                        <li className='flex justify-center items-center mx-[1vw] w-[150px] lg:w-[200px] '><a href="#">Ticket Giveaways</a></li>
                        <li className='flex justify-center items-center mx-[1vw] w-[150px] lg:w-[200px] '><a href="#">Trending Updates</a></li>
                        <li className='flex justify-center items-center mx-[1vw] w-[150px] lg:w-[200px] '><a href="#">About us</a></li>
                    </ul>
                    <div className=' w-1/6'>
                        <p>hello</p>
                    </div>

                </nav>
            </div>
        </header>
    );

}
export default Header