import headerImage from '../../assets/frontend_assets/header_img.png'

const Header = () => {
    return (
        <div className='custom-container'>
        <div className=' px-14 py-28 bg-cover bg-no-repeat rounded-xl' style={{backgroundImage:`url(${headerImage})`}}>
            <div id='headerTextContainer' className=' max-w-xl text-white space-y-6'>
                <h2 className=' text-6xl font-semibold'>Order Your <br /> Fruit Food Here</h2>
                <p className=' text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis facilis itaque placeat hic aperiam aut laborum ducimus nemo, molestiae deleniti.</p>
                <button className=' button bg-white text-black '>View Menu</button>
            </div>
        </div>
        </div>
    );
};

export default Header;