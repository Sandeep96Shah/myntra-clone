import React, { Component } from 'react';
import { FaUser, FaHeart, FaShoppingBag, FaSearch, FaBars } from 'react-icons/fa';
import logo from '../images/logo.png';
import '../App.css';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={
            display_selection:true,
            display_profile:false,
        }
    }
    handleDisplaySelection = () => {
        this.setState({
            display_selection:!this.state.display_selection,
        })
    }
    handleDisplayProfile = () => {
        this.setState({
            display_profile:!this.state.display_profile,
        })
    }
    render() {
        return (
            <div className="navbar_container">
                <div className="dropdown_selection">
                    <FaBars onClick={ () => this.handleDisplaySelection() }/>
                   {
                       this.state.display_selection &&
                       <div className="selection_list">
                            <div><p>MEN</p></div>
                            <div><p>WOMEN</p></div>
                            <div><p>KIDS</p></div>
                            <div><p>HOME & LIVING</p></div>
                            <div><p>BEAUTY</p></div>
                            <div className="pos_relative"><p>STUDIO</p><p id="new_tag">NEW</p></div>
                       </div>
                   }
                </div>
                <div className="selection">
                    <div className="myntra_logo">
                        <img src={logo} />
                    </div>
                    <div><p>MEN</p></div>
                    <div><p>WOMEN</p></div>
                    <div><p>KIDS</p></div>
                    <div><p>HOME & LIVING</p></div>
                    <div><p>BEAUTY</p></div>
                    <div className="pos_relative"><p>STUDIO</p><p id="new_tag">NEW</p></div>
                </div>
                <div className="personal">
                    <div className="search pos_relative">
                        <FaSearch className="search_icon"/>
                        <input type="text" placeholder="search for products, brands and more" />
                    </div>
                    <div className="profile">
                        <div>
                            <div><FaUser /></div>
                            <div className="title">Profile</div>
                        </div>
                        <div>
                            <div><FaHeart /></div>
                            <div className="title">Wishlist</div>
                        </div>
                        <div>
                            <div><FaShoppingBag /></div>
                            <div className="title">Bag</div>
                        </div>
                    </div>
                </div>
                <div className="dropdown_profile">
                        <FaBars onClick={ () => this.handleDisplayProfile() } />
                        {
                            this.state.display_profile &&
                            <div className="profile_list">
                                 <div>
                                    <div><FaUser /></div>
                                    <div className="title">Profile</div>
                                </div>
                                <div>
                                    <div><FaHeart /></div>
                                    <div className="title">Wishlist</div>
                                </div>
                                <div>
                                    <div><FaShoppingBag /></div>
                                    <div className="title">Bag</div>
                                </div>
                            </div>
                        }
                    </div>
                    
            </div>
        )
    }
}

export default Navbar;
