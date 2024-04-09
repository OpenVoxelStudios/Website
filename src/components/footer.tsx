import './footer.css';
import Icon from '/logo.png';

const Footer = () => {
    return (
        <>
            <div className="glass footer">
                <div className='top'>
                    <div className='main'>
                        <img className='logo' src={Icon} />
                        <a className='title'>OpenVoxel Studios</a>
                    </div>

                    <div className='coolclick glass backtotop' id='scrollToTopBtn' onClick={() => {
                        location.hash = "";
                        location.hash = "content";
                    }}></div>

                    <a className='subtitle'>Minecraft Maps, without Mods.</a>
                </div>
                <a className='small'>Copyright © OpenVoxel Studios 2024<br />NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.</a>
            </div>
        </>
    )
}

export default Footer